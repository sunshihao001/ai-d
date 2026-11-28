// Run with node dual-outage-service-boundary.cjs population.csv; no network dependencies.
function analyze(csv){
const D=csv.trim().split(/\r?\n/).slice(1).map(x=>{const [id,name,pop,lat,lon]=x.split(",");return {id,name,pop:+pop,lat:+lat,lon:+lon}}),C=D.filter(x=>"06 53 04 08 48 29 17 39 47 13 37 12 42 34".split(" ").includes(x.id)),sum=D.reduce((a,b)=>a+b.pop,0),dem=D.map(x=>x.pop/sum*1e6),rad=x=>x*Math.PI/180;
if(D.length!==49||C.length!==14||sum!==329260619)throw Error("input mismatch");
const M=C.map(c=>D.map(d=>1.2*2*3958.7561*Math.asin(Math.sqrt(Math.sin(rad(d.lat-c.lat)/2)**2+Math.cos(rad(c.lat))*Math.cos(rad(d.lat))*Math.sin(rad(d.lon-c.lon)/2)**2))));
const pairs=[];for(let i=0;i<C.length;i++)for(let j=i+1;j<C.length;j++)pairs.push([i,j]);
const bounds=D.map((d,j)=>({zone:d.name,pop:d.pop,tons:dem[j],third:M.map((row,i)=>({name:C[i].name,distance:row[j]})).sort((a,b)=>a.distance-b.distance).slice(0,3)})).sort((a,b)=>b.third[2].distance-a.third[2].distance);
const values=[...new Set(M.flat())].sort((a,b)=>a-b);
function solve(limit,failed){const n=C.length+D.length+2,S=n-2,T=n-1,G=Array.from({length:n},()=>[]),eps=1e-7, arcs=[];function edge(a,b,cap){const f={to:b,rev:G[b].length,cap,initial:cap},r={to:a,rev:G[a].length,cap:0};G[a].push(f);G[b].push(r);return f}
const sources=C.map((c,i)=>failed.includes(i)?null:edge(S,i,300000));
for(let i=0;i<C.length;i++)if(!failed.includes(i))for(let j=0;j<D.length;j++)if(M[i][j]<=limit+1e-9)arcs.push({i,j,e:edge(i,C.length+j,1e6)});
const sinks=D.map((d,j)=>edge(C.length+j,T,dem[j]));let total=0;
while(true){let lv=Array(n).fill(-1),q=[S];lv[S]=0;for(let k=0;k<q.length;k++)for(let e of G[q[k]])if(e.cap>eps&&lv[e.to]===-1){lv[e.to]=lv[q[k]]+1;q.push(e.to)}if(lv[T]<0)break;let it=Array(n).fill(0);function dfs(v,f){if(v===T)return f;for(;it[v]<G[v].length;it[v]++){let e=G[v][it[v]];if(e.cap>eps&&lv[e.to]===lv[v]+1){let z=dfs(e.to,Math.min(f,e.cap));if(z>eps){e.cap-=z;G[e.to][e.rev].cap+=z;return z}}}return 0}while(true){let f=dfs(S,1e6);if(f<=eps)break;total+=f}}
let byC=Array(C.length).fill(0),byD=Array(D.length).fill(0),maxArc=0;for(let a of arcs){let f=a.e.initial-a.e.cap;byC[a.i]+=f;byD[a.j]+=f;if(f>eps)maxArc=Math.max(maxArc,M[a.i][a.j])}let conservation=Math.max(...byC.map((x,i)=>Math.abs(x-(sources[i]?sources[i].initial-sources[i].cap:0))),...byD.map((x,j)=>Math.abs(x-(sinks[j].initial-sinks[j].cap))),Math.abs(total-byD.reduce((a,b)=>a+b,0)));
return {failed:failed.map(i=>C[i].name),unmet:Math.max(0,1e6-total),unmetZones:D.flatMap((d,j)=>dem[j]-byD[j]>.001?[{zone:d.name,tons:dem[j]-byD[j]}]:[]),maxCapacity:Math.max(...byC),maxArc,conservation}}
function check(limit){const scenarios=pairs.map(p=>solve(limit,p)),worst=scenarios.reduce((a,b)=>a.unmet>b.unmet?a:b);return {limit,passing:scenarios.filter(s=>s.unmet<=.001).length,scenarios,worst,maxConservation:Math.max(...scenarios.map(s=>s.conservation)),maxCapacity:Math.max(...scenarios.map(s=>s.maxCapacity)),maxArc:Math.max(...scenarios.map(s=>s.maxArc))}}
const lower=bounds[0].third[2].distance;let lo=values.findIndex(v=>v>=lower-1e-9),hi=values.length-1;while(lo<hi){const mid=Math.floor((lo+hi)/2);if(check(values[mid]).passing===pairs.length)hi=mid;else lo=mid+1}const exact=check(values[lo]),previous=check(values[lo-1]),original=check(1100);
const tests={oldFails:original.passing<91,previousFails:previous.passing<91,allPairsPass:exact.passing===91,conservation:exact.maxConservation<.001,capacity:exact.maxCapacity<=300000.001,distance:exact.maxArc<=exact.limit+1e-8,geometricLowerBound:exact.limit>=lower-1e-8};if(!Object.values(tests).every(Boolean))throw Error(JSON.stringify(tests));
return {scope:"Self-selected scenario analysis; fixed synthetic service model, not real company data or travel guarantee; all 14 centers open, no cost optimization.",population:sum,centers:C.length,zones:D.length,lowerBound:lower,topGeometricBounds:bounds.slice(0,5),thresholdCount:values.length,original,previous,exact,tests};
}
if(require.main===module)console.log(JSON.stringify(analyze(require("fs").readFileSync(process.argv[2],"utf8")),null,2));
