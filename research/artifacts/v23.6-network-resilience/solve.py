from pathlib import Path
import numpy as np, pandas as pd, scipy, json, time
from scipy.optimize import milp, linprog, Bounds, LinearConstraint
from scipy.sparse import coo_matrix
P=Path(__file__).parent
D=pd.read_csv(P/'population.csv',dtype={'STATEFP':str}); C=D[D.STATEFP.isin('06 53 04 08 48 29 17 39 47 13 37 12 42 34'.split())].reset_index(drop=True)
n,m=len(D),len(C); names=C.STNAME.tolist(); zones=D.STNAME.tolist(); demand=1000*D.POPULATION.to_numpy()/D.POPULATION.sum() # thousand tons/year
lat=np.radians(D.LATITUDE.to_numpy()); lon=np.radians(D.LONGITUDE.to_numpy()); a=np.radians(C.LATITUDE.to_numpy())[:,None]; b=np.radians(C.LONGITUDE.to_numpy())[:,None]
dist=1.2*2*3958.7561*np.arcsin(np.sqrt(np.sin((lat-a)/2)**2+np.cos(a)*np.cos(lat)*np.sin((lon-b)/2)**2))
# units: kt/year, millions of USD/year; x can be split among facilities
rate=.1654; cap=300.; fixed=3.; cutoff=1100.; unit=dist*rate/1000

def design(robust=False):
    scenarios=[-1]+(list(range(m)) if robust else [])
    # 14 binary location choices plus one recourse flow per allowed arc/scenario
    ix={}; c=[fixed]*m; upper=[1.]*m
    for s in scenarios:
      for i in range(m):
        for j in range(n):
          if i!=s and dist[i,j]<=cutoff:
            ix[s,i,j]=len(c); c.append(unit[i,j] if s==-1 else 0.); upper.append(demand[j])
    rr=[];cc=[];vv=[]; lb=[];ub=[]
    def row(terms,l,u):
      k=len(lb);lb.append(l);ub.append(u)
      for q,v in terms:rr.append(k);cc.append(q);vv.append(v)
    for s in scenarios:
      for j in range(n):row([(ix[s,i,j],1.) for i in range(m) if (s,i,j) in ix],demand[j],demand[j])
      for i in range(m):
        row([(ix[s,i,j],1.) for j in range(n) if (s,i,j) in ix]+[(i,-cap)],-np.inf,0.)
    mat=coo_matrix((vv,(rr,cc)),shape=(len(lb),len(c))).tocsr(); integ=np.zeros(len(c));integ[:m]=1
    start=time.perf_counter(); res=milp(c,integrality=integ,bounds=Bounds(np.zeros(len(c)),upper),constraints=LinearConstraint(mat,lb,ub),options={'time_limit':25,'mip_rel_gap':1e-8}); elapsed=time.perf_counter()-start
    if res.x is None:raise RuntimeError(res.message)
    assert np.max(np.maximum(mat@res.x-np.array(ub),np.array(lb)-mat@res.x))<1e-6
    opened=np.flatnonzero(res.x[:m]>.5).tolist(); assert np.max(abs(res.x[:m]-np.round(res.x[:m])))<1e-6
    return {'open_indices':opened,'sites':[names[i] for i in opened],'normal_total_musd':float(res.fun),'status':int(res.status),'gap':float(res.mip_gap),'bound':float(res.mip_dual_bound),'solver_seconds':elapsed}

def recourse(opened,failed=-1):
    arcs=[(i,j) for i in opened if i!=failed for j in range(n) if dist[i,j]<=cutoff]; k=len(arcs)
    A=np.zeros((n,k+n)); B=np.zeros((m,k+n))
    for p,(i,j) in enumerate(arcs):A[j,p]=1;B[i,p]=1
    A[:,k:]=np.eye(n)
    # lexicographic: minimize unmet first; then min transport with optimum unmet fixed
    first=linprog([0]*k+[1]*n,A_ub=B,b_ub=np.full(m,cap),A_eq=A,b_eq=demand,bounds=(0,None),method='highs');assert first.success
    extra=np.r_[np.zeros(k),np.ones(n)]
    second=linprog([unit[i,j] for i,j in arcs]+[0]*n,A_ub=B,b_ub=np.full(m,cap),A_eq=np.vstack([A,extra]),b_eq=np.r_[demand,first.fun],bounds=(0,None),method='highs');assert second.success
    assert np.max(abs(A@second.x-demand))<1e-6 and np.max(B@second.x-cap)<1e-6
    flows=[{'facility':names[i],'zone':zones[j],'annual_tons':float(v*1000),'approx_miles':float(dist[i,j])} for (i,j),v in zip(arcs,second.x[:k]) if v>1e-7]
    unmet=[{'zone':zones[j],'annual_tons':float(v*1000)} for j,v in enumerate(second.x[k:]) if v>1e-7]
    assert abs(sum(x['annual_tons'] for x in flows)+sum(x['annual_tons'] for x in unmet)-1e6)<.001
    return {'failed':names[failed] if failed>=0 else 'None','unmet_tons':float(first.fun*1000),'annualized_transport_musd':float(second.fun),'flows':flows,'unmet_zones':unmet}

if __name__=='__main__':
    assert (n,m)==(49,14)
    result={}; allflows=[]; allunmet=[]; cases=[]
    for label,rob in [('base',False),('resilient',True)]:
      r=design(rob); result[label]=r; tests=[recourse(r['open_indices'],f) for f in [-1]+r['open_indices']]
      assert abs(tests[0]['annualized_transport_musd']+len(r['sites'])*fixed-r['normal_total_musd'])<.00001
      if rob:assert max(t['unmet_tons'] for t in tests)<.001
      for t in tests:
        cases.append({'design':label,**{k:v for k,v in t.items() if k not in ['flows','unmet_zones']}})
        allflows.extend({'design':label,'failed':t['failed'],**v} for v in t['flows']);allunmet.extend({'design':label,'failed':t['failed'],**v} for v in t['unmet_zones'])
    pd.DataFrame(cases).to_csv(P/'scenarios.csv',index=False);pd.DataFrame(allflows).to_csv(P/'flows.csv',index=False);pd.DataFrame(allunmet).to_csv(P/'unmet.csv',index=False)
    result['scenarios']=cases;result['scipy']=scipy.__version__;result['population']=int(D.POPULATION.sum());(P/'result.json').write_text(json.dumps(result,indent=2));print(json.dumps(result,indent=2));print(pd.DataFrame(allunmet).to_string(index=False))
