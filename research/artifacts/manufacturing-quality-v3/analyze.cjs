// Fixed published examples; not production software.
function analyze(input){
 const valid=r=>Number.isInteger(r.n)&&r.n>0&&Number.isInteger(r.d)&&r.d>=0&&r.d<=r.n;
 function fit(rs){if(!rs.length||rs.some(r=>!valid(r)))throw Error("invalid unit counts");return rs.reduce((s,r)=>s+r.d,0)/rs.reduce((s,r)=>s+r.n,0)}
 function assess(r,p){if(!valid(r)||!(p>0&&p<1))throw Error("invalid counts or degenerate center");const rate=r.d/r.n,v=3*Math.sqrt(p*(1-p)/r.n),lcl=Math.max(0,p-v),ucl=Math.min(1,p+v);return {...r,rate,center:p,lcl,ucl,signal:rate>ucl?"above":rate<lcl?"below":"none"}}
 function tail(n,k,p,upper){let t=(1-p)**n,s=0;for(let i=0;i<=n;i++){if(upper?i>=k:i<=k)s+=t;if(i<n)t*=((n-i)/(i+1))*p/(1-p)}return Math.min(1,s)}
 function root(fn,increasing){let a=0,b=1;for(let i=0;i<80;i++){const m=(a+b)/2;if((fn(m)>0)===increasing)b=m;else a=m}return(a+b)/2}
 function ci(n,d,level){const a=(1-level)/2;return{low:d===0?0:root(p=>tail(n,d,p,true)-a,true),high:d===n?1:root(p=>tail(n,d,p,false)-a,false)}}
 const p=fit(input.batches),rows=input.batches.map(r=>assess(r,p)),signals=rows.filter(r=>r.signal!=="none").map(r=>r.id);
 const {n,d,p0}=input.comparison,x=d/n,z=1.645,z2=z*z;
 const comparison={n,d,p0,rate:x,z:(x-p0)/Math.sqrt(p0*(1-p0)/n),exactP:tail(n,d,p0,true),wilsonLower:(x+z2/(2*n)-z*Math.sqrt(x*(1-x)/n+z2/(4*n*n)))/(1+z2/n)};
 const interval=ci(input.interval.n,input.interval.d,input.interval.level);
 const unequal=[assess({n:20,d:4},.1),assess({n:200,d:40},.1)],pooled=fit([{n:20,d:4},{n:200,d:10}]),unweighted=.125;
 const past=[{n:1000,d:100}],later=Array.from({length:11},()=>({n:100,d:30})),frozen=assess(later[0],fit(past)),retro=assess(later[0],fit([...past,...later])),zeroUpper=ci(20,0,.9).high;
 const near=(a,b,t)=>Math.abs(a-b)<=t, reject=r=>{try{assess(r,.1);return false}catch{return true}};
 const tests=[
 ["qcc公开中心及控制限",near(p,.2313333,1e-7)&&near(rows[0].lcl,.05242755,1e-7)&&near(rows[0].ucl,.4102391,1e-7)],
 ["第15、23批越界",JSON.stringify(signals)==="[15,23]"],
 ["NIST公布精度z",Number(comparison.z.toFixed(3))===1.414],
 ["NIST Wilson下界",near(comparison.wilsonLower,.09577,1e-5)],
 ["NIST精确区间",near(interval.low,.071354,1e-5)&&near(interval.high,.401029,1e-5)],
 ["独立SciPy精确检验及区间",near(comparison.exactP,.10045728651287222,1e-12)&&near(interval.low,.07135388430861819,1e-10)&&near(interval.high,.4010281173315743,1e-10)],
 ["同率不同样本量",unequal[0].rate===unequal[1].rate&&unequal[0].signal==="none"&&unequal[1].signal==="above"],
 ["加权与简单平均",near(pooled,14/220,1e-12)&&pooled!==unweighted],
 ["缺失分母",reject({d:2})],["零分母",reject({n:0,d:0})],["不合格数大于样本",reject({n:20,d:22})],["非整数计数",reject({n:20,d:1.5})],
 ["冻结基线与事后污染",frozen.signal==="above"&&retro.signal==="none"],["零事件非零风险",zeroUpper>0]
 ].map(([name,pass])=>({name,pass}));
 return{chart:{n:input.batches.reduce((s,r)=>s+r.n,0),d:input.batches.reduce((s,r)=>s+r.d,0),center:p,lcl:rows[0].lcl,ucl:rows[0].ucl,signals,rows},comparison,interval,synthetic:{unequal,pooled,unweighted,frozen,retro,zeroUpper},tests};
}
if(require.main===module){const fs=require('node:fs');const r=analyze(JSON.parse(fs.readFileSync(process.argv[2],'utf8')));console.log(JSON.stringify(r,null,2));if(r.tests.some(t=>!t.pass))process.exitCode=1;}
module.exports={analyze};
