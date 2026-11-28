// Structural interface check only. Usage: node evaluation/process-architecture-contract.cjs
function check(a,paths,index){
 const errors=[], ids=new Set(a.nodes.map(n=>n.id)), by=Object.fromEntries(a.nodes.map(n=>[n.id,n])),groups=new Set(a.groups.map(g=>g.id));
 if(ids.size!==a.nodes.length)errors.push("duplicate_node");
 for(const n of a.nodes){if(!groups.has(n.group))errors.push(n.id+":group");for(const f of ["trigger","input","output","questions","knowledge","source","activities","accept","exception"])if(!n[f]?.length)errors.push(n.id+":"+f);for(const p of n.source)if(!paths.has(p))errors.push(n.id+":source:"+p);for(const k of n.knowledge)if(!index.includes(k))errors.push(n.id+":knowledge:"+k);}
 for(const f of a.flows){let prev=f.start;for(const e of f.edges){if(e.from!==prev)errors.push(f.id+":chain");prev=e.to;}if(prev!==f.end)errors.push(f.id+":end");for(const e of [...f.edges,...f.optional,...f.feedback]){if(!by[e.from]?.output.includes(e.artifact)||!by[e.to]?.input.includes(e.artifact))errors.push(f.id+":handoff:"+e.from+":"+e.to+":"+e.artifact);}}
 for(const id of ids)if(!a.flows.some(f=>[...f.edges,...f.optional,...f.feedback].some(e=>e.from===id||e.to===id)))errors.push(id+":unmapped");
 for(let i=1;i<=8;i++)if(!a.nodes.some(n=>n.questions.includes("P"+i)))errors.push("missing_P"+i);
 return errors;
}
function test(a,paths,index,input,expected){const copy=()=>JSON.parse(JSON.stringify(a)), out=[];const add=(name,ok)=>out.push({name,pass:!!ok});add("actual map interfaces",check(a,paths,index).length===0);for(const [name,mutate,needle] of [
 ["missing handoff",x=>x.flows[0].edges[0].artifact="虚构产物","handoff"],
 ["missing canonical source",x=>x.nodes[0].source.push("missing.md"),"source:"],
 ["missing knowledge object",x=>x.nodes[0].knowledge.push("K-NOT-EXIST"),"knowledge:"],
 ["broken order",x=>x.flows[0].edges[0].from="C4","chain"],
 ["missing acceptance",x=>x.nodes[0].accept="","accept"],
 ["wrong completion",x=>x.flows[0].end="C2",":end"],
 ["duplicate node",x=>x.nodes.push(x.nodes[0]),"duplicate_node"]]){let x=copy();mutate(x);add(name,check(x,paths,index).some(e=>e.includes(needle)));}
 const n=input.batches.reduce((s,x)=>s+x.n,0),d=input.batches.reduce((s,x)=>s+x.d,0),center=d/n;
 const signals=input.batches.filter(x=>Math.abs(x.d/x.n-center)>3*Math.sqrt(center*(1-center)/x.n)).map(x=>x.id);
 add("historical real input replay count",n===expected.chart.n&&d===expected.chart.d);
 add("historical real input replay signals",JSON.stringify(signals)===JSON.stringify(expected.chart.signals));
 return {checks:out,replay:{n,d,center,signals,scope:"published worked example; no causal, specification, field or independent model claim"},errors:check(a,paths,index)};
}
if(require.main===module){const fs=require("fs"),p=require("path"),root=p.resolve(__dirname,".."),read=x=>JSON.parse(fs.readFileSync(p.join(root,x),"utf8"));const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name===".git"?[]:e.isDirectory()?walk(p.join(d,e.name)):[p.relative(root,p.join(d,e.name)).split(p.sep).join("/")]);const result=test(read("planning/process-architecture.json"),new Set(walk(root)),fs.readFileSync(p.join(root,"knowledge/INDEX.md"),"utf8"),read("research/artifacts/manufacturing-quality-v3/input.json"),read("research/artifacts/manufacturing-quality-v3/results.json"));console.log(JSON.stringify(result,null,2));process.exitCode=result.checks.every(x=>x.pass)?0:1;}
module.exports={check,test};
