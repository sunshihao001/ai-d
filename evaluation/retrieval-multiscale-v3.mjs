// AI-D V3 fixed exploratory retrospective retrieval test, 2026-11-28.
// Run in a Git clone: node evaluation/retrieval-multiscale-v3.mjs
// Frozen source and labels: prior probe (5fd7e285b2fb2aca99742ca9ab86394819cfc8a3 unchanged at a4c7649).
// No tuning on outcomes; compare original lexical, expanded, conditional with heading/1600-character
// chunks and equal-weight reciprocal rank fusion (k=60) of document and unique-document chunk rankings.
// Document-level relevance labels inherited, not independent and known to researcher; no passage gold.
// All top 3 document IDs unique. Context characters are a payload estimate, not tokens or proven coverage.
// No production retrieval replacement unless document recall + downstream evidence verified.
// No model A/B; no RAPTOR, Aider or ranx runtime installed. Locally implemented public RRF formula.
import {execFileSync} from "node:child_process";
const FIXED="a4c7649b6f5d9ee8a7cba62bb278c96ac901fd5a";
const source=execFileSync("git",["show",FIXED+":evaluation/retrieval-probe-2026-11-06.mjs"],{encoding:"utf8"});
const parse=(a,b)=>JSON.parse(source.split(a)[1].split(b)[0]);
const paths=parse("const PATHS=",";\nconst CASES"),cases=parse("const CASES=",";\nconst PARAMS"),params=parse("const PARAMS=",";\nfunction runProbe");
const docs=paths.map(path=>({path,text:execFileSync("git",["show",params.snapshot+":"+path],{encoding:"utf8"})}));
function run(docs,cases,params){
 const tok=s=>{let a=[];for(const mat of s.toLowerCase().matchAll(/[\p{Script=Han}]+|[a-z0-9]+/gu)){let v=mat[0];if(/[\p{Script=Han}]/u.test(v)){if(v.length===1)a.push(v);else for(let i=0;i<v.length-1;i++)a.push(v.slice(i,i+2))}else if(v.length>1)a.push(v);}return a};
 const mk=items=>{const c=items.map(d=>{const tokens=tok(d.text),tf=new Map();for(const v of tokens)tf.set(v,(tf.get(v)||0)+1);return {...d,tokens,tf}});let N=c.length,L=c.reduce((s,d)=>s+d.tokens.length,0)/N,df=new Map();for(const d of c)for(const v of d.tf.keys())df.set(v,(df.get(v)||0)+1);return (q,bonus=()=>0)=>c.map(d=>{let s=0;for(const g of new Set(tok(q))){let f=d.tf.get(g)||0;if(!f)continue;let n=df.get(g);s+=Math.log(1+(N-n+.5)/(n+.5))*(f*2.2)/(f+1.2*(.25+.75*d.tokens.length/L))}return {...d,score:+(s+bonus(d)).toFixed(3)}}).sort((a,b)=>b.score-a.score||a.path.localeCompare(b.path)||(a.start||0)-(b.start||0))};
 const sections=docs.flatMap(d=>{let a=d.text.split("\n"),out=[],heading="",start=1,buf=[];const flush=()=>{if(buf.join("\n").trim())out.push({path:d.path,start,end:start+buf.length-1,heading,text:(heading?heading+"\n":"")+buf.join("\n")});buf=[]};for(let i=0;i<a.length;i++){let l=a[i];if(/^#{1,6}\s+/.test(l)){flush();heading=l;start=i+1;}else if(buf.length&&buf.join("\n").length+l.length>1600){flush();start=i+1}if(!buf.length)start=i+1;buf.push(l)}flush();return out});
 const docRank=mk(docs),sectionRank=mk(sections),expand=q=>{let v=q;for(const [p,t] of params.synonyms)if(new RegExp(p,"i").test(q))v+=" "+t;return v},dedup=z=>{let seen=new Set();return z.filter(d=>{if(seen.has(d.path))return false;seen.add(d.path);return true})};
 const rows=cases.map(c=>{let q=c.query,lex=docRank(q),expanded=docRank(expand(q)),conditional=docRank(expand(q),d=>params.roles.reduce((s,[p,paths])=>s+(new RegExp(p,"i").test(q)&&paths.includes(d.path)?2.2:0),0)),sec=dedup(sectionRank(q)),ranks=new Map(sec.map((d,i)=>[d.path,i+1])),fusion=lex.map((d,i)=>({...d,score:1/(60+i+1)+1/(60+ranks.get(d.path))})).sort((a,b)=>b.score-a.score||a.path.localeCompare(b.path)),best=new Map(sec.map(d=>[d.path,d]));
 const methods={lexical:lex,expanded,conditional,section:sec,fusion};let metrics={};for(const [k,z] of Object.entries(methods)){let ids=z.map(d=>d.path),i=ids.findIndex(p=>c.gold.includes(p)),top=z.slice(0,3);metrics[k]={top1:+c.gold.includes(ids[0]),recall3:top.filter(d=>c.gold.includes(d.path)).length/c.gold.length,rr:i<0?0:1/(i+1),top:top.map(d=>({path:d.path,score:+d.score.toFixed(6),...(k==="section"||k==="fusion"?{start:best.get(d.path).start,end:best.get(d.path).end,heading:best.get(d.path).heading}: {})})),contextChars:top.reduce((s,d)=>s+((k==="section"||k==="fusion")?best.get(d.path).text.length:d.text.length),0)}}return {id:c.id,split:c.split,query:c.query,gold:c.gold,metrics}});
 const stats={};for(const split of ["dev","holdout","all"]){let z=rows.filter(c=>split==="all"||c.split===split);stats[split]={n:z.length,methods:{}};for(const k of Object.keys(rows[0].metrics)){let mean=p=>z.reduce((s,c)=>s+c.metrics[k][p],0)/z.length;stats[split].methods[k]={top1:+mean("top1").toFixed(3),recall3:+mean("recall3").toFixed(3),mrr:+mean("rr").toFixed(3),avgContextChars:Math.round(mean("contextChars"))}}}
 return {snapshot:params.snapshot,docs:docs.length,sections:sections.length,stats,rows};
}
console.log(JSON.stringify(run(docs,cases,params),null,2));
