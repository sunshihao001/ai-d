// Structural interface check only. Usage: node evaluation/process-architecture-contract.cjs
function check(a,paths,index){
 const exact=new Set(Array.from(index.matchAll(/^- \*\*(K-[A-Z]+)\b/gm),m=>m[1]));
 const errors=[], ids=new Set(a.nodes.map(n=>n.id)), by=Object.fromEntries(a.nodes.map(n=>[n.id,n])),groups=new Set(a.groups.map(g=>g.id));
 if(ids.size!==a.nodes.length)errors.push("duplicate_node");
 for(const n of a.nodes){if(!groups.has(n.group))errors.push(n.id+":group");for(const f of ["trigger","input","output","questions","knowledge","source","activities","accept","exception"])if(!n[f]?.length)errors.push(n.id+":"+f);for(const p of n.source)if(!paths.has(p))errors.push(n.id+":source:"+p);for(const k of n.knowledge)if(!exact.has(k))errors.push(n.id+":knowledge:"+k);}
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
if(require.main===module){const fs=require("fs"),p=require("path"),root=p.resolve(__dirname,".."),read=x=>JSON.parse(fs.readFileSync(p.join(root,x),"utf8"));const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name===".git"?[]:e.isDirectory()?walk(p.join(d,e.name)):[p.relative(root,p.join(d,e.name)).split(p.sep).join("/")]);const result=test(read("planning/process-architecture.json"),new Set(walk(root)),fs.readFileSync(p.join(root,"knowledge/INDEX.md"),"utf8"),read("research/artifacts/manufacturing-quality-v3/input.json"),read("research/artifacts/manufacturing-quality-v3/results.json"));const v=read("evaluation/process-architecture-v2-results.json"),extra=v2(read("planning/process-architecture.json"),new Set(walk(root)),fs.readFileSync(p.join(root,"knowledge/INDEX.md"),"utf8"),read("knowledge/semantic-map-v4.json").cards,v.trace,v.pins);console.log(JSON.stringify({historical:result,v2:extra},null,2));process.exitCode=[...result.checks,...extra].every(x=>x.pass)?0:1;}

// V2: deterministic receipt boundary, not a semantic truth or authorization engine.
function coverage(a,cards){const expected=new Set(cards.map(c=>c.id)),used=new Set(a.nodes.flatMap(n=>n.knowledge));return [...[...expected].filter(k=>!used.has(k)).map(k=>"unmapped_card:"+k),...[...used].filter(k=>!expected.has(k)).map(k=>"unknown_card:"+k)];}
function handoffs(a,t,pins){
 const err=[],f=a.flows.find(x=>x.id===t.flow),by=Object.fromEntries(a.nodes.map(n=>[n.id,n])),art=new Map(t.artifacts.map(x=>[x.id,x]));
 if(!f)return ["unknown_flow"];if(art.size!==t.artifacts.length)err.push("duplicate_artifact");
 let prev=f.start;const allowed=[...f.edges,...f.optional,...f.feedback];
 for(const h of t.handoffs){if(h.from!==prev)err.push("discontinuous");prev=h.to;
 if(!allowed.some(e=>e.from===h.from&&e.to===h.to&&e.artifact===h.type))err.push("unallowed_edge");
 const x=art.get(h.artifactId);if(!x){err.push("missing_artifact");continue;}
 if(x.task!==t.task||x.object!==t.object||x.version!==t.version)err.push("object_version_task");
 if(x.producer!==h.from||x.type!==h.type||!by[h.to]?.input.includes(x.type)||!by[h.from]?.output.includes(x.type))err.push("producer_type");
 if(!x.payload||!Object.keys(x.payload).length||!x.evidence?.length)err.push("no_payload_or_evidence");
 for(const p of x.evidence||[])if(!p.blob||pins[p.ref]?.[p.path]!==p.blob)err.push("bad_source_pin");
 if(x.type==="工作阻塞"&&x.status!=="blocked")err.push("blocked_status");
 if(x.type!=="工作阻塞"&&x.type!=="验收结果"&&x.status!=="ready")err.push("not_ready");
 if(x.type==="验收结果"&&!["accepted","blocked","rejected"].includes(x.status))err.push("invalid_verdict");
 }
 if(prev!==f.end)err.push("not_at_end");
 const last=art.get(t.handoffs.at(-1)?.artifactId);if(last?.type!=="验收结果")err.push("missing_final_verdict");
 if(t.outcome==="accepted"&&(last?.status!=="accepted"||t.artifacts.some(x=>x.type==="工作阻塞"&&x.status==="blocked")))err.push("false_success");
 if(t.outcome==="blocked"&&last?.status!=="blocked")err.push("blocked_outcome_mismatch");
 if(t.outcome==="rejected"&&last?.status!=="rejected")err.push("rejected_outcome_mismatch");
 return err;
}
function v2(a,paths,index,cards,trace,pins){
 const results=[],add=(name,ok)=>results.push({name,pass:!!ok}),copy=x=>JSON.parse(JSON.stringify(x));
 add("exact knowledge and static interfaces",check(a,paths,index).length===0);
 add("all current cards placed",coverage(a,cards).length===0);
 add("actual version-bound receipt",handoffs(a,trace,pins).length===0);
 let x=copy(a);x.nodes.forEach(n=>n.knowledge=n.knowledge.filter(k=>k!=="K-LEARN"));add("orphan card detected",coverage(x,cards).includes("unmapped_card:K-LEARN"));
 x=copy(a);x.nodes[0].knowledge.push("K-GOA");add("substring fake knowledge rejected",check(x,paths,index).some(e=>e.includes("knowledge:K-GOA")));
 for(const [name,mutate,needle] of [
 ["missing actual payload",t=>t.artifacts[2].payload={},"no_payload_or_evidence"],
 ["wrong task",t=>t.artifacts[2].task="other","object_version_task"],
 ["wrong object",t=>t.artifacts[2].object="other","object_version_task"],
 ["stale version",t=>t.artifacts[2].version="old","object_version_task"],
 ["wrong producer",t=>t.artifacts[2].producer="S4","producer_type"],
 ["wrong source blob",t=>t.artifacts[2].evidence[0].blob="wrong","bad_source_pin"],
 ["missing artifact",t=>t.handoffs[2].artifactId="missing","missing_artifact"],
 ["false completion",t=>t.artifacts.at(-1).status="blocked","false_success"]]){let t=copy(trace);mutate(t);add(name,handoffs(a,t,pins).includes(needle));}
 const t=copy(trace),base=t.artifacts[2];t.artifacts=t.artifacts.slice(0,3);t.handoffs=t.handoffs.slice(0,3);
 t.artifacts.push({...base,id:"block",producer:"C1",type:"工作阻塞",status:"blocked",payload:{reason:"constructed unavailable source"}},{...base,id:"verdict",producer:"C5",type:"验收结果",status:"blocked",payload:{result:"not completed"}});
 t.handoffs.push({from:"C1",to:"C5",type:"工作阻塞",artifactId:"block"},{from:"C5",to:"S3",type:"验收结果",artifactId:"verdict"});t.outcome="blocked";add("blocked path saves checkpoint",handoffs(a,t,pins).length===0);t.outcome="accepted";add("blocked path cannot be accepted",handoffs(a,t,pins).includes("false_success"));
 add("F2/F3 revalidate final revision",["F2","F3"].every(id=>{const f=a.flows.find(f=>f.id===id);return f.edges.at(-2).from==="S2"&&f.edges.at(-2).to==="C5"&&f.edges.at(-1).to==="S3";}));
 return results;
}
module.exports={check,test,coverage,handoffs,v2};

