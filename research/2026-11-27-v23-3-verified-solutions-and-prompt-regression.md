# V23.3｜可复用专业解决方案、真实提示词回归与评价反例
2026-11-27；AI-D 基线 f2cf55c00be42d7ba97bc6f5ee00636e5ce640d0。SOURCE_REVIEWED / EXTERNAL_ARTIFACT_REUSED_FOR_METRIC_REPLAY / MODEL_AB=NOT_RUN / UPLIFT=UNKNOWN。读取 AGENTS、知识正本、索引、跨层锚点与台账。未全量重审历史。
## 竞争路径与裁决
优先深入 [Simon Willison 的实践指南](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/) 与其[真实研究成品](https://github.com/simonw/research/tree/aa4e39edad154dad649a1804e32a943cf670a6e4/dspy-datasette-agent-prompts)，因为它们同时提供使用者原始经验、提示词、数据、评价程序、结果与失败。继续保留真实行业成果逆向、专家知识研究和效率对照，不将软件工程经验当通用定律。GDPval [真实职业任务](https://openai.com/index/gdpval/) 仍是职业成果入口，不重复综述。此次未获取完整新职业任务附件、未进行完整行业交付。
## 高杠杆使用者实践
Simon 描述自己在2024年将已验证的 PDF.js 页面渲染示例与 Tesseract.js 图像识别示例交给模型，几分钟内形成有用原型；这是作者自述，不是受控时间对照。随后在 [公开工具集合](https://github.com/simonw/tools/tree/f9d347739a6a6747f88b2372405a0a17ce143754) 与 [研究仓库](https://github.com/simonw/research/tree/aa4e39edad154dad649a1804e32a943cf670a6e4) 保存可用实例，按新任务组合。知识资本单位可包括可运行解决方案、示范、验证条件及来源；短指令可通过指向成熟成果压缩大量操作知识，不等于省略关键意图。使用外部成果前核实适用性、版本、许可及边界，不默认复制安装。另见 [先失败后通过测试](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/)；[Showboat 实践](https://simonwillison.net/2026/Feb/10/showboat-and-rodney/)。读取固定版本 [verify.go](https://github.com/simonw/showboat/blob/d531261b8faf0c388b02c7891d50f1f47c3e2b52/cmd/verify.go)：重执行非图片代码块并与相邻输出比对；源码跳过图片、仅在相邻输出存在时比较，未使用 runner 返回的退出码。不能把验证成功当全覆盖验收；作者也报告直接编辑演示输出的风险。未安装或运行该工具。
## 完整外部成果逆向：Datasette Agent 的提示词优化
原始目录 https://github.com/simonw/research/tree/aa4e39edad154dad649a1804e32a943cf670a6e4/dspy-datasette-agent-prompts 。报告明确标注 AI 生成，非独立专家评审；读取 README、harness.py、dataset.json、原始/优化提示词、baseline_nano_results.json、optimized_nano_results.json、gepa_summary.json，以及数据生成器局部。实际成品使用真实只读查询工具与动态权限范围，而非用模拟工具替代；采用随机种子固定的合成书店数据（20训练、10留出）。其保存结果为基线训练90%、留出95%，优化后训练95%、留出85%；按原始文件内容 JS 字符串长度 2321 与 8815（约3.8倍）。这些是作者存档的模型试验结果，不是本轮重跑。优化提示词新增状态探查示例 display=user，恰与工具语义冲突：数据给人看而模型只看到行数，留出任务重复调用耗尽迭代。原报告还发现语义零值、第三名并列造成评价误判，修正后重新计分。用户需要的是答案，不是盲目增加探索规则。工具调用的中间证据必须真正进入需要它的判断者；评价应覆盖完整用户可见成果；先验证评价，再优化指令。保留原 prompt、示范与独立留出结果；新指令回归则撤回或局部修订。不能把该案例外推到所有模型/领域。
## 本轮实际新增反例：全量公开任务的评分盲区
读取上述 30 条原始公开题目和 checks，按 harness.py 的数值/文本出现规则独立 JS 复算（没有运行原 Python 或模型）。每条题分别使用参考答案、明确否定该参考答案的文本、明确无法核实且已丢弃候选的文本。20训练、10测试中，三种文本分别均为20/20、10/10满分；合计每类30/30。另用第29条（下标28）将正确姓名与正确金额放入不同对象的陈述，仍得满分。这些是主动构造的反例，不是历史模型输出，也不能据此认定原报告中有多少错误回答。实际评价只检查词值出现，不检查肯否、承诺、对象绑定与结论；正确的检索不等于正确判断。原评分有合理用途（低成本检查用户可见值），但必须另查业务主张、关系、极性与必要条件。修订评价需盲测，不能简单规定所有否定词都失败（零值答案可能正确）。以下复算方法使用源 dataset.json；输入文件从固定外部目录获取，JS 端实现本数据中实际使用的值匹配类型：
```js
// node replay.js dataset.json (CommonJS)
const data = JSON.parse(require("fs").readFileSync(process.argv[2], "utf8"));
const norm = s => String(s).replace(/(?<=\d),(?=\d\d\d)/g,"").replace(/\\_/g,"_").replace(/\*\*/g,"").toLowerCase();
const words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
const esc = s => String(s).replace(/[.*+?^${\}()|[\]\\]/g,"\\$&");
function present(s,v) {
 if(v && typeof v==="object" && v.any) return v.any.some(x=>present(s,x));
 if(typeof v==="number") {
   const a=Number.isInteger(v)?[String(v),...(v>=0&&v<=10?[words[v]]:[])]:[String(v),v.toFixed(2)];
   return a.some(x=>new RegExp("(?<![\\d.\\w])"+esc(x)+"(?![\\d])").test(s));
 }
 return norm(s).includes(norm(v));
}
const score=(q,a)=>q.checks.filter(c=>present(norm(a),c)).length/q.checks.length;
for(const split of ["train","test"]){
 const a=data.filter(q=>q.split===split);
 const variants=[q=>q.gold_answer,q=>"The following is NOT the answer: "+q.gold_answer,q=>"I could not verify the answer. A discarded candidate was "+q.gold_answer];
 console.log(split,a.length,variants.map(f=>a.filter(q=>score(q,f(q))===1).length));
}
console.log("misbound pair",score(data[28],"Wen Novak spent 1 dollar; another customer spent 943.82 dollars and was the highest spender."));
```
注意：此程序为本轮复算方法，不复制外部源代码，不上传原始任务数据或第三方成果全文。未重新执行完整 Datasette/DSPy/GEPA；环境直接外网 DNS 不可用，未安装工具。独立留出任务或模型因果对照未执行。
## 效率反证与下一步
[METR 2025随机试验](https://arxiv.org/abs/2507.09089) 16名开发者246任务、早期2025工具使耗时增加19%；[2026-02-24更新](https://metr.org/blog/2026-02-24-uplift-update/) 指出新研究存在参与选择偏差、报酬变化与并行代理任务耗时测量问题，不能据此给当前速度准确倍率。记录人工主动投入、总历时、质量、返工与成本，不把生成速度或作者自述当净效率。 [Anthropic](https://www.anthropic.com/research/building-effective-agents) 也将评价-优化用于可清楚评价且迭代有实益的任务，工具界面优化同样重要。
新增纪律：优先找到适配的已验证工作成果（而非重新发明指令）；复杂提示词修订先区分意图、问题、示范、工具语义、证据可见性、评价与执行的失效；评价先查真实结论及关系；修订若造成回归，撤回或局部更正。先保留旧版本及验证条件，不自动改业务代码或部署新系统。将此实际写入现有 AGENTS 的提示词纪律及钩子/资产，不另建模块。
下一轮 V23.4：直接选一个此前未完成且有真实需求的任务，优先调用成熟解决方案，按质量/人工时间/总成本交付，随后判断哪些专业知识和提示词修订实际有用。并行保留高产出使用者、专家成果反推与开放未知研究；不继续用孤立评分/局部复算代替完整交付。明确 MODEL_AB=NOT_RUN / UPLIFT=UNKNOWN 直至具备独立条件。
