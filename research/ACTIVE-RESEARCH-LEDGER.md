# AI-D｜当前有效研究状态与接力（审查分支）
更新时间：2026-11-28；固定整合基线 be25104d76a0f61135467746812ab93c0044dcca。先核真实HEAD；先核 main 是否已获用户授权归并并含主干验收报告，确认后仅以 main 最新HEAD为现行入口；归并前以 PR #4 实际HEAD为候选，核并行整合分支差异，不单独以旧 integration 为最新正本。历史证据按固定SHA读取，不自动合并或扩大权限。 此处只记录当前状态和下一动作，不加载历次旧任务。目标与权限见[README](../README.md)、[AGENTS](../AGENTS.md)。
## 当前有效成果
- V4：88项固定整合原件，67份Markdown关联；28主张定向校勘、34语义关系、50段落定位核对；新增9项审查、12制造专题和16历史专家映射。另有并行43份历史原件恢复，不等于全部采用。
- 外部70项蕴含诊断：高词语覆盖不保证支持；[结果](artifacts/semantic-reorganization/v4-entailment/result.json)。11结构与9情境门禁已运行；[结果](artifacts/semantic-reorganization/v4-evidence-use-guard-results.json)。不自动晋升证据。
- 本轮用户明确要求：实际浓缩、具体索引、归拢、修正、污染清除、知识调用及运行反馈；共享治理方法不共享业务目标。已执行当前入口收敛，详见[治理裁决](artifacts/semantic-reorganization/v4-governance-decisions.json)。
- 颗粒度遗漏回归：已从可访问历史恢复用户确认的多尺度追溯要求；审查分支原位修复组织规范3B、K-FACET调用入口、AGENTS及V5任务。四文件提交后逐一回读一致（初次修复末提交 9633d3220dc5fb85d7fd8cbc72e803b9f18a8ccf）；不推断全历史未保存。此为本会话实际治理动作，独立新会话召回及全量覆盖未验；下一步以真实任务验证，不重做理论。
- 实际调用纠偏：具体知识/问题按钮与整项目接力分离，统一读取现行提示词入口；50段落精确范围，8路线，固定88快照；[10项执行回归](artifacts/semantic-reorganization/v4-dispatch-regression.json)。历史R路线退役且保留P映射，旧手机入口退出默认。未验证独立模型/真实浏览器增益；不重做同义入口治理。
- [主干归并验收V3](2026-11-27-mainline-acceptance-v3.md)：历史27项映射、保全43原件、候选入口一致；保留颗粒度控制与具体任务/整项目接力分流。主干未合并、调度未改。
- 成熟项目机制吸收：读取Ars Contexta两份技能、OpenWiki主张类型和测试、EvoSkills两份技能及Hermes会话检索源码；BMad/Memento为官方文档级。已原位补充[外部机制登记](2026-11-16-external-intelligence-layer.md#13-成熟项目原始机制审查与实际吸收)、[组织规范4A](../knowledge/foundations/organization-protocol.md#4a-知识变更协调与失败经验复用)、索引及执行入口。下一步按V5用实际陌生任务检验旧主张漏改、无影响误改和实现失败误归因；固定V4投影非实时，独立会话及原项目实跑未验，不重复理论。
- 实际保全验收：对起始快照2272729与变更快照d09c1c3逐文件比较，10/10静态检查通过（组织规范除4A、外部旧文、索引除新增段、台账除新增段、颗粒度3B均保全；两组入口/正本链接存在；固定地图、V5任务、根本目标未变）。后续仅浓缩AGENTS的颗粒度一行，详细规则仍由3B/4A承接，其他行逐字不变；提交 daf28a008ab406b015ddf101d85607b0e9901cd2。此为实际Git内容保全与入口检查，非独立模型或业务效果评测。
- 2026-11-28 用户纠偏：提示词专业分类及高级组合不足。已读取五项外部原始提示词/技能/优化机制，恢复旧25章的有效方法并形成[专业任务模块](../prompts/professional-task-modules.md)，接入现行入口；来源登记见[外部智能吸收第14节](2026-11-16-external-intelligence-layer.md)。不启用旧总指令、不改变P1–P8知识分类。独立模型对照待验。恢复V5真实研究时按模块明确专业问题、输入、行动、否决与验收。
- 实际应用与验收：P7/P4/P8定位并修复历史八问题导航8条硬编码旧分支候选指令（提交4600d144eba7dd0f0eaea95a0df39d6d8f29af00）；专家/方法/来源/验收行保持，原版固定链接可回查，9751→6405字符。专业模块结构及入口七项静态检查：7/7通过；独立模型A/B、自动触发和专业增益未验证。固定工作台尚未同步新模块，不冒称实时。保持V5接力。
- 2026-11-28 高阶提示词V2：实际读DSPy Signature/MIPROv2/GEPA、GEPA候选选择、ACE curator、OPRO六份源码；按需模块新增专业接口、顺序/竞争/示范/反馈组合，原八模块正文保持。P7/P4/P6/P5实际修复工作台复制入口漏引模块的接口缺陷，更新README两入口、生成器和HTML；[外部源与事前验收](2026-11-16-external-intelligence-layer.md#15-高阶提示词工程-v2原始机制与实际任务验收)。固定验证提交 8b95edca257961ffaf5e22710f69f3a0323f7230；静态实际Git读取15/15、构造负例7/7拒绝，原语义快照、目标、权限、V5任务未动；两入口、8路线、卡片及来源逐对象核对。HTML采用生成器对应局部投影重算，未完整运行生成器/浏览器；四路独立模型AB=NOT_RUN，专业增益UNKNOWN。恢复V5时使用V2专业接口，优先真实检索/治理缺陷，不再单纯扩写提示词。
- 2026-11-28 整体研究V3实际生产：复用历史冻结16文件/16题及原标签，借鉴Aider/RAPTOR/ranx具体机制；[事前冻结程序](../evaluation/retrieval-multiscale-v3.mjs)、[155段及逐题实测](../evaluation/retrieval-multiscale-v3-results.json)；27旧分组指标复算一致。历史12测试题条件路由Recall@3=.750、分段=.583、融合=.625；平均上下文字符19542/1615/1803。否决默认替换，分段仅辅助定位，已原位修订组织规范3B、K-SEARCH/K-STOP与P3专业指令；H03/H06实际原件导航复核、来源/边界详见[外部机制第16节](2026-11-16-external-intelligence-layer.md)。八项当前Git检查 8/8；原根本目标/授权/V5/固定语义地图/旧实验程序未动。非独立留出、非段落金标准、MODEL_AB=NOT_RUN；OpenRefine指定路径404。下一项不继续调历史检索题，按V5寻找可独立验收的陌生行业真实成品任务，以具体专业交付验证从知识找到到正确运用；无宿主不得伪造独立对照。
## 唯一默认接力
[执行V5完整任务](../prompts/tasks/verified-transfer-and-mainline-v5.md)。先核本轮报告及工作台实际恢复状态，按真实价值修正受影响原件；不重复历史项目研究。跨会话/独立模型增益仍未知，需可控独立宿主。主干合并、调度更改、生产权限仍未授权。
## 历史证据（按需，非当前任务）
[完整旧台账](https://github.com/sunshihao001/ai-d/blob/5c3e9b59757aac783b33e0c9f4b004b0783c0f50/research/ACTIVE-RESEARCH-LEDGER.md)（含全部旧章节、研究状态、原始证据链接及当时优先级）；[V3报告](2026-11-27-semantic-activation-v3-execution.md)；[历史原件归并V2](2026-11-27-historical-expert-recovery-mainline-v2.md)；[V4实际报告](2026-11-27-evidence-grounded-v4-execution.md)。原历史版本可按SHA查证，不删除。
