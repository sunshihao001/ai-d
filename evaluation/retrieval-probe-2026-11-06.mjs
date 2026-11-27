// Reproducible archival probe; run: node evaluation/retrieval-probe-2026-11-06.mjs
// Requires a local clone with commit cd51f614fc9e7672c8fcf750ddc1f8dec59f4cdd available; no packages or API keys.
import { execFileSync } from "node:child_process";
const SNAPSHOT="cd51f614fc9e7672c8fcf750ddc1f8dec59f4cdd";
const PATHS=[
  "README.md",
  "decisions/2026-11-05-goal-options.md",
  "evaluation/first-cross-domain-tests.md",
  "knowledge/COGNITIVE-MAP.md",
  "knowledge/INDEX.md",
  "knowledge/foundations/cross-disciplinary-foundations.md",
  "knowledge/foundations/expert-concept-navigation-v0.1.md",
  "knowledge/foundations/organization-protocol.md",
  "knowledge/source-register-2026-11-05.md",
  "planning/README.md",
  "planning/goal-navigation-v0.1.md",
  "planning/historical-consolidation-v0.1.md",
  "planning/proposal-review-v0.1.md",
  "planning/research-to-github-v0.1.md",
  "research/2026-11-05-ai-coordination-reverse-inference.md",
  "research/workflow-components-and-boundaries.md"
];
const CASES=[
  {
    "id": "D01",
    "split": "dev",
    "area": "文档管理",
    "query": "搜到一批专家资料，每个概念应该放哪？怎样避免同义词重复建目录？",
    "gold": [
      "knowledge/foundations/organization-protocol.md",
      "knowledge/INDEX.md"
    ]
  },
  {
    "id": "D02",
    "split": "dev",
    "area": "项目规划",
    "query": "方案不停讨论，怎么决定已经规划充分可以开始小范围实践？",
    "gold": [
      "planning/proposal-review-v0.1.md"
    ]
  },
  {
    "id": "D03",
    "split": "dev",
    "area": "证据治理",
    "query": "一篇专家文章讲得不错，可以直接变成项目必须遵守的规则吗？",
    "gold": [
      "knowledge/foundations/organization-protocol.md",
      "planning/research-to-github-v0.1.md"
    ]
  },
  {
    "id": "D04",
    "split": "dev",
    "area": "协作修复",
    "query": "用户改了最终目标，为什么助手还按以前的做法继续？",
    "gold": [
      "planning/goal-navigation-v0.1.md",
      "planning/historical-consolidation-v0.1.md"
    ]
  },
  {
    "id": "H01",
    "split": "holdout",
    "area": "制造业质量管理",
    "query": "工厂安全培训资料有新版本，几个旧文件互相矛盾，应该怎样管理可用知识？",
    "gold": [
      "knowledge/foundations/organization-protocol.md",
      "planning/historical-consolidation-v0.1.md"
    ]
  },
  {
    "id": "H02",
    "split": "holdout",
    "area": "跨行业迁移",
    "query": "我看到家电维修的一套经验，想用到医疗器械维护上，怎样知道能不能直接照搬？",
    "gold": [
      "knowledge/COGNITIVE-MAP.md",
      "knowledge/foundations/expert-concept-navigation-v0.1.md"
    ]
  },
  {
    "id": "H03",
    "split": "holdout",
    "area": "产品管理",
    "query": "团队一直在调查新市场、分析更多方案，却迟迟没有可演示成果，如何及时停止研究？",
    "gold": [
      "planning/proposal-review-v0.1.md"
    ]
  },
  {
    "id": "H04",
    "split": "holdout",
    "area": "软件验收",
    "query": "开源项目的主页说功能齐全，但代码和运行日志可能不同，应该信哪个证据？",
    "gold": [
      "knowledge/COGNITIVE-MAP.md",
      "research/workflow-components-and-boundaries.md"
    ]
  },
  {
    "id": "H05",
    "split": "holdout",
    "area": "专家知识发现",
    "query": "我不知道行业里专家用什么专业说法，如何沿着一个普通词找到相邻领域的知识？",
    "gold": [
      "knowledge/foundations/expert-concept-navigation-v0.1.md",
      "knowledge/COGNITIVE-MAP.md"
    ]
  },
  {
    "id": "H06",
    "split": "holdout",
    "area": "组织知识管理",
    "query": "一个部门每周把同行文章放入共享库，但没人知道什么时候该用哪项结论，如何整理？",
    "gold": [
      "knowledge/foundations/organization-protocol.md",
      "knowledge/foundations/cross-disciplinary-foundations.md"
    ]
  },
  {
    "id": "H07",
    "split": "holdout",
    "area": "软件交付",
    "query": "助手说已经做完研究，可代码仓库没有新的提交；如何检查是否真正交付？",
    "gold": [
      "planning/research-to-github-v0.1.md"
    ]
  },
  {
    "id": "H08",
    "split": "holdout",
    "area": "人员协作",
    "query": "新项目中我说继续上一次讨论，但上次的目标已被我撤销，系统该怎么理解这句话？",
    "gold": [
      "planning/goal-navigation-v0.1.md",
      "planning/historical-consolidation-v0.1.md"
    ]
  },
  {
    "id": "H09",
    "split": "holdout",
    "area": "研究评测",
    "query": "知识库改版后回答更长了，到底有没有让问题解决得更好，如何做对照检查？",
    "gold": [
      "evaluation/first-cross-domain-tests.md"
    ]
  },
  {
    "id": "H10",
    "split": "holdout",
    "area": "技术战略",
    "query": "我们应先做可查询的理论库还是直接搭建多智能体工作平台，有什么路线取舍？",
    "gold": [
      "decisions/2026-11-05-goal-options.md"
    ]
  },
  {
    "id": "H11",
    "split": "holdout",
    "area": "知识时效",
    "query": "发布新版本之后旧的操作建议已经不适用了，怎样避免历史内容继续干扰判断？",
    "gold": [
      "planning/historical-consolidation-v0.1.md",
      "knowledge/foundations/organization-protocol.md"
    ]
  },
  {
    "id": "H12",
    "split": "holdout",
    "area": "科学研究",
    "query": "几篇研究文章结论互相冲突，如何找到原始来源并区分哪条主张有支持？",
    "gold": [
      "knowledge/source-register-2026-11-05.md",
      "knowledge/foundations/organization-protocol.md"
    ]
  }
];
const PARAMS={
  "snapshot": "cd51f614fc9e7672c8fcf750ddc1f8dec59f4cdd",
  "synonyms": [
    [
      "梳理|归档|目录|资料|共享库",
      "知识 分类 索引 术语 溯源 版本 来源"
    ],
    [
      "行业|经验|照搬|借鉴|跨行业",
      "迁移 类比 条件 概念 专业 适用 机制"
    ],
    [
      "研究|搜索|调查|探索",
      "探索式检索 信息价值 证据 决策 停止"
    ],
    [
      "做完|交付|提交|仓库|上传",
      "github commit 分支 回读 验收 文件"
    ],
    [
      "新版本|旧|过时|撤销",
      "修订 失效 冲突 替代 历史 目标"
    ],
    [
      "比较|方案|路线|选择|决策",
      "规划 成本 取舍 反证 条件"
    ],
    [
      "验证|测试|对照|效果|结果",
      "评测 真实 实验 检索 质量"
    ],
    [
      "文章|论文|来源|证据|可信",
      "溯源 主张 证明 支持 反驳 范围"
    ],
    [
      "表达|关键词|概念|专业说法",
      "标准术语 语义 词汇 概念网络 跨领域"
    ],
    [
      "用户|助手|目标|继续",
      "目标演化 对话 修复 确认 意图 规划"
    ]
  ],
  "roles": [
    [
      "目录|归档|整理|索引|分类|共享库|版本",
      [
        "knowledge/foundations/organization-protocol.md",
        "knowledge/INDEX.md"
      ]
    ],
    [
      "方案|规划|探索|一直|何时|及时停止|研究充分",
      [
        "planning/proposal-review-v0.1.md"
      ]
    ],
    [
      "项目目标|撤销|继续|改了|意图|用户",
      [
        "planning/goal-navigation-v0.1.md",
        "planning/historical-consolidation-v0.1.md"
      ]
    ],
    [
      "仓库|提交|上传|交付|做完|github",
      [
        "planning/research-to-github-v0.1.md"
      ]
    ],
    [
      "互相冲突|原始来源|证据|日志|信哪个",
      [
        "knowledge/foundations/organization-protocol.md",
        "knowledge/COGNITIVE-MAP.md",
        "knowledge/source-register-2026-11-05.md"
      ]
    ],
    [
      "跨行业|照搬|迁移|相邻领域|专业说法",
      [
        "knowledge/foundations/expert-concept-navigation-v0.1.md",
        "knowledge/COGNITIVE-MAP.md"
      ]
    ],
    [
      "对照|测试|改版后|更好|效果",
      [
        "evaluation/first-cross-domain-tests.md"
      ]
    ],
    [
      "理论库|多智能体|工作平台|路线取舍",
      [
        "decisions/2026-11-05-goal-options.md"
      ]
    ],
    [
      "开源|代码|运行日志",
      [
        "research/workflow-components-and-boundaries.md",
        "knowledge/COGNITIVE-MAP.md"
      ]
    ]
  ]
};
function runProbe(docs,cs,params){
 const tok=s=>{let a=[];for(const mat of s.toLowerCase().matchAll(/[\p{Script=Han}]+|[a-z0-9]+/gu)){let v=mat[0];if(/[\p{Script=Han}]/u.test(v)){if(v.length===1)a.push(v);else for(let i=0;i<v.length-1;i++)a.push(v.slice(i,i+2))}else if(v.length>1)a.push(v);}return a};
 const hist=x=>{const h=new Map();for(const v of x)h.set(v,1+(h.get(v)||0));return h};
 const corpus=docs.map(d=>({...d,tokens:tok(d.text)}));for(let d of corpus)d.tf=hist(d.tokens);
 const N=corpus.length,L=corpus.reduce((a,d)=>a+d.tokens.length,0)/N,df=new Map();
 for(const d of corpus)for(const g of d.tf.keys())df.set(g,(df.get(g)||0)+1);
 function bm25(q,d){let s=0;for(const g of new Set(tok(q))){const f=d.tf.get(g)||0;if(f===0)continue;const n=df.get(g);const idf=Math.log(1+(N-n+0.5)/(n+0.5));s+=idf*(f*2.2)/(f+1.2*(0.25+0.75*d.tokens.length/L))}return s}
 const expand=q=>{let v=q;for(const [pattern,terms] of params.synonyms)if(new RegExp(pattern,"i").test(q))v+=" "+terms;return v};
 const rank=(q,mode)=>{let qq=mode==="lexical"?q:expand(q);return corpus.map(d=>{let s=bm25(qq,d);if(mode==="conditional")for(const [pat,paths] of params.roles)if(new RegExp(pat,"i").test(q)&&paths.includes(d.path))s+=2.2;return{path:d.path,score:Number(s.toFixed(3))}}).sort((a,b)=>b.score-a.score||a.path.localeCompare(b.path))};
 const rows=cs.map(c=>{let run={};for(const mode of ["lexical","expanded","conditional"]){const ranked=rank(c.query,mode),list=ranked.map(z=>z.path),idx=list.findIndex(p=>c.gold.includes(p));run[mode]={top:ranked.slice(0,3),top1:+c.gold.includes(list[0]),recall3:list.slice(0,3).filter(p=>c.gold.includes(p)).length/c.gold.length,rr:idx<0?0:1/(idx+1)}}return {...c,runs:run}});
 const stats={};for(const split of ["dev","holdout","all"]){const z=rows.filter(r=>split==="all"||r.split===split),m={};for(const k of ["lexical","expanded","conditional"]){const mean=p=>z.reduce((s,c)=>s+c.runs[k][p],0)/z.length;m[k]={top1:+mean("top1").toFixed(3),recall3:+mean("recall3").toFixed(3),mrr:+mean("rr").toFixed(3)}}stats[split]={n:z.length,methods:m}}
 return{snapshot:params.snapshot,numDocs:N,results:rows,stats};
}
const DOCS=PATHS.map(path=>({path,text:execFileSync("git",["show",SNAPSHOT+":"+path],{encoding:"utf8"})}));
console.log(JSON.stringify(runProbe(DOCS,CASES,PARAMS),null,2));