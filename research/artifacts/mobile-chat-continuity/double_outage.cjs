// Reusable independent max-flow calculation; inherited V23.6 input and constraints.
function analyze(csv){
const D=csv.trim().split("\n").slice(1).map(x=>{const [id,name,pop,lat,lon]=x.split(",");return {id,name,pop:+pop,lat:+lat,lon:+lon}});
const C=D.filter(x=>"06 53 04 08 48 29 17 39 47 13 37 12 42 34".split(" ").includes(x.id));
const pop=D.reduce((s,x)=>s+x.pop,0),dem=D.map(d=>d.pop/pop*1e6),rad=x=>x*Math.PI/180;
const distance=(a,b)=>1.2*2*3958.7561*Math.asin(Math.sqrt(Math.sin(rad(b.lat-a.lat)/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(rad(b.lon-a.lon)/2)**2));
const M=C.map(c=>D.map(d=>distance(c,d)));
const base=["California","Colorado","Florida","Georgia","Illinois","New Jersey","Texas","Washington"],rob=[...base,"Ohio"];
const EPS=1e-6;
function solve(open,failed){const n=2+C.length+D.length,S=n-2,T=n-1,G=Array.from({length:n},()=>[]);function edge(a,b,cap){const f={to:b,cap,rev:G[b].length},rev={to:a,cap:0,rev:G[a].length};G[a].push(f);G[b].push(rev);return f}for(let i=0;i<C.length;i++){if(!open.includes(C[i].name)||failed.includes(C[i].name))continue;edge(S,i,300000);for(let j=0;j<D.length;j++)if(M[i][j]<=1100)edge(i,C.length+j,dem[j]);}const sinkEdges=D.map((_,j)=>edge(C.length+j,T,dem[j]));let flow=0;while(true){const level=Array(n).fill(-1),q=[S];level[S]=0;for(let k=0;k<q.length;k++)for(const e of G[q[k]])if(e.cap>EPS&&level[e.to]<0){level[e.to]=level[q[k]]+1;q.push(e.to)}if(level[T]<0)break;const it=Array(n).fill(0);function dfs(v,f){if(v===T)return f;for(;it[v]<G[v].length;it[v]++){const e=G[v][it[v]];if(e.cap>EPS&&level[e.to]===level[v]+1){const d=dfs(e.to,Math.min(f,e.cap));if(d>EPS){e.cap-=d;G[e.to][e.rev].cap+=d;return d}}}return 0}let f;while((f=dfs(S,1e6))>EPS)flow+=f}const unmet=sinkEdges.reduce((s,e)=>s+e.cap,0);if(Math.abs(flow+unmet-1e6)>0.001)throw Error("conservation");return {failed,unmet_tons:+unmet.toFixed(6),unserved_zones:D.filter((_,j)=>sinkEdges[j].cap>0.001).map(d=>d.name),unreachable_zones:D.filter((_,j)=>!C.some((c,i)=>open.includes(c.name)&&!failed.includes(c.name)&&M[i][j]<=1100)).map(d=>d.name)}}
function scenarios(open){const single=open.map(s=>solve(open,[s])),pair=open.flatMap((s,i)=>open.slice(i+1).map(t=>solve(open,[s,t])));return {normal:solve(open,[]),single,pair,summary:{single_pass:single.filter(x=>x.unmet_tons<.001).length,single_total:single.length,pair_pass:pair.filter(x=>x.unmet_tons<.001).length,pair_total:pair.length,worst_single:single.reduce((a,b)=>a.unmet_tons>b.unmet_tons?a:b),worst_pair:pair.reduce((a,b)=>a.unmet_tons>b.unmet_tons?a:b)}}}
const b=scenarios(base),a=scenarios(rob);const structural=D.map((d,j)=>({zone:d.name,candidates:C.filter((_,i)=>M[i][j]<=1100).map(c=>c.name),demand:+dem[j].toFixed(6)})).filter(x=>x.candidates.length<=2);
return {population:pop,zones:D.length,candidates:C.length,base:b,resilient:a,structural};
}
if(require.main===module){const fs=require('node:fs');if(!process.argv[2])throw Error('provide population.csv');console.log(JSON.stringify(analyze(fs.readFileSync(process.argv[2],'utf8')),null,2));}
module.exports={analyze};
