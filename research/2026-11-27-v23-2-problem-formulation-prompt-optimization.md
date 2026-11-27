# V23.2｜专业问题表达、提示词优化与高阶智能杠杆
基线 76e9704d8c0d12af0c669073ffb349f9c0deb53d；2026-11-27。SOURCE_REVIEWED / RULE_REPLAY_DONE / MODEL_AB=NOT_RUN / UPLIFT=UNKNOWN。读取 AGENTS、README、知识正本、索引、跨层锚点与台账；未全量重审历史。
## 研究路径与实质发现
- [Chi/Feltovich/Glaser 1981](https://doi.org/10.1207/s15516709cog0502_2)：专家物理问题分类较多基于深层原理，新手较多基于表面特征。转化为研究入口：先识别机制和专业对象，不能将术语数量视为专长。
- [AmbigQA](https://aclanthology.org/2020.emnlp-main.466/) 将不同可行解释各自重述并回答；[CLAM](https://mlanthology.org/icmlw/2023/kuhn2023icmlw-clam/) 选择性澄清。对于重大歧义采用区分性问题，其他情况条件式推进或保留多个解释。不得凭空补出真实意图。
- [AGOPS](https://arxiv.org/abs/2607.14105) 外部预印本通过已完成任务样例及参考答案发现缺失的约束/假设/评价要求，作者报告不充分规格造成显著下降、现有优化难恢复，专用指南可部分恢复；不将测试答案直接注入执行提示。优先识别规格不足，而非仅优化已有词句。未独立复现。
- [DSPy MIPROv2](https://dspy.ai/api/optimizers/MIPROv2/) 联合搜索指令和少样本示范，以任务数据和贝叶斯优化选择；[GEPA 论文](https://arxiv.org/abs/2507.19457) 六项任务相对 GRPO 报告平均高6%、最多35倍更少 rollout；不是人工时间或知识生产效率35倍。GEPA 源码固定 ce5b0d6e3d6af6c6dbec6de2c54536bbb961d309，实际读取 [adapter](https://github.com/gepa-ai/gepa/blob/ce5b0d6e3d6af6c6dbec6de2c54536bbb961d309/src/gepa/core/adapter.py)、[default_adapter](https://github.com/gepa-ai/gepa/blob/ce5b0d6e3d6af6c6dbec6de2c54536bbb961d309/src/gepa/adapters/default_adapter/default_adapter.py)、[acceptance](https://github.com/gepa-ai/gepa/blob/ce5b0d6e3d6af6c6dbec6de2c54536bbb961d309/src/gepa/strategies/acceptance.py)、[候选选择指南](https://github.com/gepa-ai/gepa/blob/ce5b0d6e3d6af6c6dbec6de2c54536bbb961d309/docs/docs/guides/candidate-selection.md)。评价包含输出、逐样例分值、可选多目标、执行轨迹及可操作反馈；反馈必须指向具体失误，不能把总分当失败原因。按键最佳集合不是完整非支配集：本轮 JS 复算 A=(1,0), B=(0,1), C=(.6,.6)，按键最佳只留 A/B，真正非支配集留 A/B/C，与官方指南明确披露的限制一致。这不是 GEPA 缺陷报告或完整执行。优化前先确认目标/验收是否正确、训练与留出样本分离、成本和权限约束；成熟优化器适于可重复评价的任务，不预设开放研究需要安装。
- [Dell’Acqua 等 2026 正式发表](https://doi.org/10.1287/orsc.2025.21838)：真实咨询类任务对照，AI 能力边界内平均完成任务多12.2%、速度快25.1%，边界外也可能下降。不是普遍效率倍率，不是提示词独立效果。本轮未找到足以证明一天等于一月的证据。
## 真实专业问题的重表征及局部可复算结果
采用历史链上只读研究的“转入后卖出是不是原来的筹码”类问题，先分离代币账户净变动、钱包所有者层面净归属变化、成交与库存批次归因，不把四者合并。新研究词：token account owner change / SetAuthority / preTokenBalances / postTokenBalances / loadedAddresses / fungible inventory attribution。实际查阅 [Solana 交易所接入官方说明](https://solana.com/docs/defi/exchange#token-deposit-calculation) 与 [RPC 结构](https://solana.com/docs/rpc/json-structures)、[代币模型](https://solana.com/docs/tokens)。官方三个示例分别为普通转账、新建接收账户、变更账户所有者。第三例同账户索引1的原始数量100不变，但所有者变化，接收方按所有者聚合的净增加为100原始单位（精度2，即1枚）。官方不建议接受所有者变更作为充值方法；只读分析可识别归属变化，不等于认定买卖、实际控制人或原批次。缺余额记录不可等同账户不存在；地址索引须正确解析。来源只证明链上字段语义，未独立查主网或审查当前 Blix 实现。
实际 JS 对官方三例的简化投影和两个人工反例执行：
```js
const cases=[
["普通转移",[[1,"A",100],[2,"B",0]],[[1,"A",0],[2,"B",100]],100],
["新建接收账户",[[2,"A",100]],[[1,"B",100],[2,"A",0]],100],
["所有者变更",[[1,"A",100]],[[1,"B",100]],100],
["缺失前余额记录",null,[[1,"B",100]],null],
["同一所有者内部转移",[[1,"B",100],[2,"B",0]],[[1,"B",0],[2,"B",100]],0]];
const rows=cases.map(([name,pre,post,expected])=>{
 const account=pre===null?null:post.filter(x=>x[1]==="B").reduce((s,x)=>s+x[2]-(pre.find(y=>y[0]===x[0])?.[2]??0),0);
 const sum=a=>a.filter(x=>x[1]==="B").reduce((s,x)=>s+x[2],0);
 const owner=pre===null?null:sum(post)-sum(pre);
 return {name,expected,account,owner}
});
console.log(rows);
```
结果（预期/账户差分/所有者差分）：100/100/100，100/100/100，100/0/100，null/null/null，0/0/0。4/5 对 5/5，仅证明这两条简化规则在五个已见案例的区别，不是独立模型A/B、完整交易解析、留出测试或交易收益。实际实现须处理多Mint、整数精度、缺失所有者、完整前后记录、已关闭账户、交易失败和代币扩展等。未实际运行 GEPA/DSPy 或修改业务仓库。
可执行专业问题：对指定代币及钱包，以只读方式核查交易前后代币账户及所有者、Mint、原始数量、交易签名、账户索引与指令，区分普通转账、内部迁移、所有者变更、成交、不可归因的批次；先判断历史覆盖与证据可用性；输出可复核的净变化、证据、未知及竞争解释，不将转后卖、净余额、同源或权限变化直接升级为内幕/操盘/同批库存主张。不需要用户先掌握专业术语。
## 研究裁决与后续
新增知识：规格不足与提示词搜索分责、从高质量专业成果反推隐含规格、可操作反馈、按键最佳与完整非支配集差异、账户与所有者层级区分。激活了历史问题表征、适用性、证据边界、库存归因及多目标研究。未证明提示词本身造成提升，无法隔离领域知识、模型能力和检索贡献。下一步优先用未见真实任务做低成本对照，区分原始表达/专业重表征/外部专业成果反推规格/成熟优化；若无法独立运行则记录限制，优先直接继承已完成专业劳动，不重复已见规则复算。持续研究高产出使用者、专业知识压缩与外部能力利用；核心锚点、钩子对象、历史激活、双向追溯、偏移与回归、机会成本/价值裁决全程有效，不建设新系统。
