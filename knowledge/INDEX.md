# AI-D｜当前知识调用入口（V4审查候选）
以[根本目标](../README.md)和[现行权限与执行规则](../AGENTS.md)为准。这里是当前知识入口，不是研究日志，不自动加载历史。仅当当前问题确需外部认知资源时查相关条目；无需逐项遍历、登记调用或先完成索引映射。自主选择来源和方法，允许不用任何条目。优先成熟成品及真实价值，不把工具、UI、专家团队、提示词、任何领域项目变成目的。
- 当前固定整合基线：be25104d76a0f61135467746812ab93c0044dcca，88项资产/67份Markdown；[28个定向校勘主张和34关系](semantic-map-v4.json)。校勘不是全面外部真值。审查分支另有历史档案及执行产物，不混作已采用知识。
- [当前台账（仅项目接力）](../research/ACTIVE-RESEARCH-LEDGER.md) · [提示词入口](../prompts/README.md) · [工作台](../docs/knowledge-workbench/index.html)。
- 六域=组织，P1–P8=问题入口，[九阶段](foundations/knowledge-lifecycle-nine-stages.md)=生命周期诊断，[跨层锚点](foundations/cross-layer-project-anchors.md)=真实依赖与影响；不是四套并行工作流。组织规范仅用于实际知识库维护，不是普通思考约束；各导航均为参考。

- [整体流程与承接关系](../planning/process-architecture.json)：按真实交付对象查流程及上下游，P1–P8仍是知识入口；V2固定快照覆盖28张语义卡，七项遗漏按条件归位，领域知识不自动触发；交接绑定真实任务、对象、版本和证据；不恢复历史R路线默认权威，不另设知识分类。

## 一、按“实际要解决什么问题”导航
### P1｜目标与问题形成
触发：方向含糊、目标变更或错误前提。行动：区分确认目标与手段、错误前提及不变边界，从真实事件和专业机制重构问题；重大取舍留给用户。
验收：可检验目标、问题对象、保持项、必要条件、具体成果。
- **K-GOAL 根本目标与智能资本**：缩小能力利用落差，扩大人实际能理解、判断、创造和完成的事情；优先强模型原生能力。效率倍率待验，不以系统或文件数量证明增益。[现行专业知识](./2026-11-27-professional-knowledge-and-leverage.md#强模型时代个人能力扩张与智能利用) · [目标](../README.md)。
- **K-INTENT 意图形成与专业问题表征**：区分意图、事实、适用性及授权不确定；按机制表征问题；按需形成对象、关键条件、竞争解释与验收；边界：人类物理专家研究不能证明LLM扮演专家有效。[2026-11-07-short-intent-goal-context-delegation.md L17–34](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-07-short-intent-goal-context-delegation.md#L17-L34)
- **K-AUTH 授权与主动性边界**：常规专业决定由AI承担；重大价值、资源、不可逆行动仍需人授权；按需核实当前权限；边界：历史计划不构成当前授权。[README.md L3–3](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/README.md#L3-L3)
- **K-REAL 现实价值及信息价值链**：信息揽客是具体入口，价值取决于信息是否改变判断、机会或行动，而不是收集量；按需从实际目标和约束筛选可行动事项，核真实成果、成本及价值获取；边界：候选应用不等于整个AI-D；没有现场或收入证据，不宣称实际收益。[2026-11-23-information-scouting-value-chain-direction.md L25–44](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-23-information-scouting-value-chain-direction.md#L25-L44)

### P2｜研究与调查
触发：专业问题、未知机制或真实领域成果。行动：查可改变当前判断的原始证据、竞争机制、反例和已有成果；按实际资源选择有价值的纵深研究。
验收：新增解释、证据、反例或真实成果；不凭时长判定深度。
- **K-EXPERT 具名专家方法而非角色**：按真实专业问题借用专家采用的工具、原始数据、专业方法、真实成品和判断标准；深度不等于角色或流程数量。多人名及同模型多视角不等于独立验证。[现行专业知识](./2026-11-27-professional-knowledge-and-leverage.md#强模型时代个人能力扩张与智能利用) · [历史专家来源](../research/2026-11-27-named-expert-full-domain-audit-v2.md)。
- **K-UNKNOWN 未知发现与机制桥接**：竞争解释、隐藏变量、机制结构与反证有助于发现关键未知；相似词不是机制相同；按需选择最可能改变决策的未知，明确映射条件，发现候选与确认分离；边界：不是每次七步；诊断示范不是运行实证，类比可能失效。[2026-11-07-problem-driven-unknown-discovery.md L34–46](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-07-problem-driven-unknown-discovery.md#L34-L46)
- **K-CAP 外部成熟能力吸收与组合**：区分外部概念、方法、模式、可调用能力和证据；按对象、许可、条件及真实验收复用成熟劳动；按需先还原成品工作链与责任，选择直接借用或组合，按边界验证；边界：流行度、作者自述、读取技能均不等于已安装或可执行；不能以工具路线覆盖目标。[2026-11-16-external-intelligence-layer.md L17–40](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-16-external-intelligence-layer.md#L17-L40)
- **K-TRIANG 理论互证与阶段性认可**：理论互证允许有条件初步认可，不等于实际部署或因果成立；按需明确阶段结论、反例及实测需要；边界：关键高后果不确定不能用理论自洽抵消。[2026-11-07-theoretical-triangulation-provisional-acceptance.md L10–21](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-07-theoretical-triangulation-provisional-acceptance.md#L10-L21)
- **K-RESILIENCE 固定决策与事后适应**：固定选址跨情景共享，故障后流量可重分配；在固定服务距离下总容量不能补救局部不可达；按需保持原对象、容量与距离，逐情景检查需求守恒、容量与可达性；边界：仅原公开数据和情景设定；未估计真实故障概率、企业成本或效益。[2026-11-27-v23-6-composed-professional-work-network-resilience.md L11–25](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-v23-6-composed-professional-work-network-resilience.md#L11-L25)

### P3｜搜索与信息获取
触发：缺少外部证据、搜索过窄或成本高。行动：根据具体证据缺口建立搜索路径，查原始论文、源码和负例，先对照既有资产。
验收：明确来源版本、覆盖范围、关键未知，不将搜索数量当深度。
- **K-SEARCH 上下文筛选与探索权衡**：筛选相关性、成本、事实正确率与开放报告偏好各异；漏掉陌生机制是待检验解释；按需任务比较检索与探索范围，保留可能改变判断的弱线索，独立验收未知发现；边界：8道开放题、同家族模型评审不证明未知机制发现率；不能推导全部全文注入。[2026-11-07-gpt-researcher-context-selection-audit.md L38–68](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-07-gpt-researcher-context-selection-audit.md#L38-L68)
- **K-SEARCH 检索颗粒度实测**：历史12题旧条件路由Recall@3=.750，标题分段=.583，融合=.625；少读文本不等于不漏条件。先依知识职责找现行原件，分段只作定位，必要时展开上下文与互补来源。[实验](../evaluation/retrieval-multiscale-v3-results.json) · [组织规范3B](foundations/organization-protocol.md#3b-研究与知识颗粒度控制)。非独立模型增益。
- **K-STOP 研究停止与价值判断**：按边际信息价值及实际交付判断停止；运行完成不等于目标达成；按需记录停止和复开条件；边界：一次受阻不应否定全部探索；[可逆行动的五项判据](../planning/proposal-review-v0.1.md#提前规划的停止条件避免钻牛角尖)（目标、竞争路线、风险、边际信息价值、验收）。[organization-protocol.md L42–49](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/knowledge/foundations/organization-protocol.md#L42-L49) [停止/转实施原始判据](https://github.com/sunshihao001/ai-d/blob/9755c6f769f7ac8b64ada2359817045ec1e2e845/research/2026-11-07-open-source-research-depth-scope-stop-audit.md#L89-L100)；证据足以支持授权内可逆工作时，停止扩展研究分支、转实际操作与验收；资源、关键证据或权限不足时保全未完成及可复开条件。关联K-BUDGET/K-RECEIPT。
- **K-BUDGET 深度生产与执行预算**：运行时长不能证明具体资源限制或停止原因；按需保留可恢复阶段和真实日志缺口；边界：R38运行50.656608秒、V1.3运行48.238269秒，属不同记录；缺少完整工具、模型和退出原因日志，不能推断一分钟硬上限或唯一根因。[2026-11-27-deep-cognitive-production-and-execution-budget.md L3–5](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-deep-cognitive-production-and-execution-budget.md#L3-L5)；[V1.3原记录L5](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-knowledge-driven-task-expression-v1.md#L5)。

### P4｜知识组织和检索
触发：知识遗漏、调用、归并或上下文冲突。行动：沿既有问题轴、对象类型和证据状态定位原件；只读取相关知识，区分导航与经验证的语义关系。
验收：原件与版本可读，明确知识改变什么行动；未读原文不称理解。
- **K-FACET 多轴知识组织**：六域、P1–P8、K1–K9及跨层锚点是不同观察轴；按需复用原分类并整合入口，不新增分类；边界：标签非语义证据或执行顺序。[2026-11-27-named-expert-full-domain-audit-v2.md L4–5](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-named-expert-full-domain-audit-v2.md#L4-L5)
- **K-FACET 的颗粒度调用（关联P2）**：研究停留宏观、浓缩丢失条件或索引只到文档时，向上查目标/原理、向下查机制/具体操作与验收、横向查依赖；依据决策差异决定拆分或归并。正本：[组织规范3B](foundations/organization-protocol.md#3b-研究与知识颗粒度控制)。这是恢复的条件性方法，不新增独立知识编号；尚无独立模型增益验证。
- **K-PROV 主张与证据独立**：来源、具体主张支持、适用性和实际验证须分开；按需核原文、版本、支持或反证关系；边界：同源转述不能算独立证据。[organization-protocol.md L13–34](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/knowledge/foundations/organization-protocol.md#L13-L34)
- **主张变更、失败经验与指令准入（K-PROV/K-HOOK/K-DEFECT）**：新证据或纠偏触发反向复查；无影响主张不改，证据变化必须裁决；区分实现阻塞与根本失败；按真实错误维护常驻指令。[正本4A](foundations/organization-protocol.md#4a-知识变更协调与失败经验复用) · [原始项目机制与证据](../research/2026-11-16-external-intelligence-layer.md#13-成熟项目原始机制审查与实际吸收)。固定V4投影仍为历史快照，现行增量以本索引和正本为准。
- **K-HOOK 的实际提示词调用**：只有当真实知识遗漏、项目变更、依赖断裂或复杂产物交接需要诊断时，参考[专业方法0/0A](../prompts/professional-task-modules.md)与跨层锚点；不是复杂任务启动门槛，普通探索允许完全不用。
- **K-HOOK 认知钩子与跨层追溯**：沿实际依赖分析变更直接影响、保持项及反向验收；按需复查受影响原件和判断，保留不变项；边界：词面相近不构成强制技术依赖。[cross-layer-project-anchors.md L77–93](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/knowledge/foundations/cross-layer-project-anchors.md#L77-L93)
- **K-CONT 跨会话状态与知识保全**：长期目标/授权、阶段有效状态、原始资产应分层保存；按实际HEAD恢复并回读；按需从短入口查最新原件与状态，重大变化保留旧版本、实际证据、未完事项及下步；边界：保存和同会话恢复不证明独立新会话可接续；缺权限/源则标未知。[2026-11-27-mobile-chat-cognitive-continuity-v1.md L20–22](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-mobile-chat-cognitive-continuity-v1.md#L20-L22)
- **K-UI 同源人机工作台**：工作台是同源认知投影，不是GPT执行环境；按需统一八问题路由及语义主张入口，标明快照；边界：复制文字不等于模型运行。[2026-11-27-named-expert-full-domain-audit-v2.md L22–25](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-named-expert-full-domain-audit-v2.md#L22-L25)

### P5｜证据与可靠性
触发：数据、证据与适用条件不确定。行动：固定实际任务、源版本、事实时点与获知时点；比较同路径异版本、后续补充、真实读取与未知。
验收：可复核原始证据及反例，不把现在知道的内容当过去已知。
- **K-DATA 源级数据语义与真实可用性**：截断不变不能发现上游已错误标时的输入；核实际可用时点；按需分离事件、实际可用、决策、处理和事后标签时间；边界：R36构造反例不证明供应商违规。[2026-11-27-r36-temporal-audit-recovery.md L5–16](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-r36-temporal-audit-recovery.md#L5-L16)
- **K-DATA 与 K-PROV 的源端对象/口径协同（V3实际案例）**：当上游证据交给下游判断时，区分请求绑定、响应自报对象和独立核实；数量的分母、计量口径及假设必须从真正产生该数字的上游传递，不能由消费者补猜；未知、无效与真实零值分离。按需拒绝显式错绑，保留旧响应的未知状态，核受影响下游与反例。依据：[MEME源端与消费端实际隔离验收](https://github.com/sunshihao001/grok/blob/66bdd89806cfdbf5daceda679765b6cf0f2d7983/docs/project/mint-evidence-acceptance-20261128.json)（构造夹具、非现场真值；领域阈值不迁移为通用规则）。
- **K-TIME 历史证据与知识可见时点**：历史快照存在、提交、实际发布与读取时间不同；按需固定历史证据版本与截止时间，区分事后解释；边界：快照缺失不能证明模型不知道；版本差异不是模型泄漏率。[2026-11-27-named-expert-full-domain-audit-v2.md L12–21](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-named-expert-full-domain-audit-v2.md#L12-L21)
- K-PROV：参见 P4 的唯一主入口；仅在本问题需要时交叉调用。
- **K-EVAL 验证层级与证据门槛**：结构、来源、实际执行、独立模型对照和实际效果各有证据门槛；按需关键条件单独验收，保留正常与失败例；边界：模型自评或关键词命中不是独立真值。[2026-11-27-v23-3-verified-solutions-and-prompt-regression.md L8–10](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-v23-3-verified-solutions-and-prompt-regression.md#L8-L10)

### P6｜选择与人机协调
触发：实际行动、工具调用、学习或协作。行动：确定本轮能完成的一项实际交付，调用已有成果与授权工具执行；受阻明确状态，不把专业选择交回用户。
验收：实际产物、工具结果或真实阻塞，不只给下轮计划。
- **K-RUNTIME 运行环境与认知责任分离**：认知方法、运行时、行业任务是不同职责；文档和动态指令不保证运行能力；按需核当前宿主真实权限、工具、输入输出及日志；优先成熟原生能力；边界：Hermes非唯一宿主；定时触发不等于持续思考，旧版本不能证明今日可用。[workflow-components-and-boundaries.md L4–31](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/workflow-components-and-boundaries.md#L4-L31)
- **提示词实际调用**：复杂任务按[专业提示词模块](../prompts/professional-task-modules.md)选择既有P1–P8主模块及必要辅助模块，包含适用/不适用、专业动作、原件、否决门槛及组合示范；[外部机制来源](../research/2026-11-16-external-intelligence-layer.md#14-专业提示词分类组合与反馈优化2026-11-28)。不新增知识分类或默认全量提示词；独立增益待验。
- **K-PROMPT 提示词与知识承接的关系**：智能驾驭重在意图表达、委托选择、成果鉴别与责任；专业提示词按模型和任务需要使用，不管理每一步思考。旧复杂指令仅作可选方法。[现行专业知识](./2026-11-27-professional-knowledge-and-leverage.md#强模型时代个人能力扩张与智能利用) · [历史问题表达](../research/2026-11-27-knowledge-driven-task-expression-v1.md)。
- K-CAP：参见 P2 的唯一主入口；仅在本问题需要时交叉调用。
- **K-LEARN 人机认知增强与真实学习**：辅助产出、个人独立理解/胜任、现实收益分别验证；人机组合未必优于最佳单方。需要学习才安排独立迁移检验；注意理解瓶颈与认知债务。[现行专业知识](./2026-11-27-professional-knowledge-and-leverage.md#强模型时代个人能力扩张与智能利用) · [历史研究](../research/2026-11-07-human-ai-delegation-performance-learning.md)。
- **K-RECEIPT 知识实际使用证据**：只有实际改变判断、行动、理解或成果才可称利用；重要专业成果按需要保留可核证据和限制，不要求每轮对话生成行动收据。参见[执行入口](../AGENTS.md)及[既有专业案例](../research/2026-11-27-knowledge-driven-task-expression-v1.md)。

### P7｜验收、修订与经验
触发：成果验收、回归或真实增益。行动：从真实失败提取规格缺陷，检查评价器，保留旧版本及留出证据；能独立对照时比较相同输入与资源。
验收：区分静态、真实执行及独立增益，不以提交/关键词/自评证明能力。
- **K-DEFECT 提示词失败分析与评价回归**：关键词命中与聚合分数可能掩盖否定、错绑和必要条件失败；按需先校验评价器，再定向优化；边界：30/30构造反例不是实际模型错误率。[2026-11-27-v23-3-verified-solutions-and-prompt-regression.md L7–10](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/research/2026-11-27-v23-3-verified-solutions-and-prompt-regression.md#L7-L10)
- K-EVAL：参见 P5 的唯一主入口；仅在本问题需要时交叉调用。
- K-RECEIPT：参见 P6 的唯一主入口；仅在本问题需要时交叉调用。
- **K-EVOLVE 反馈进化与可复用成果**：按新证据、反例、适用边界及真实影响原位修订；保留历史、失败和可复用产物；按需追溯具体失败位置、记录撤销条件、更新相关正本与验收，非重构全架构；边界：候选不自动生效，无增益背景知识不默认激活；安全授权不能当噪音删除。[organization-protocol.md L42–61](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/knowledge/foundations/organization-protocol.md#L42-L61)

### P8｜噪音、污染与失效
触发：旧规则带偏、矛盾、错误权威或重复研究。行动：分离现行、候选及历史；识别冲突、失效、未来信息及预算停止，保留原历史与安全权限。
验收：时点与版本绑定；不凭规则数量判定正确，不将停止冒充完成。
- **K-POLLUTE 知识污染与纠偏**：区分六类污染；历史原件保留，旧规则默认权威可撤销；按需具体冲突修订，而非全库覆盖；边界：安全授权不属于应清除的污染。[organization-protocol.md L42–61](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/knowledge/foundations/organization-protocol.md#L42-L61)
- **K-DECISION 历史决策的适用边界与复查**：11月5日B优先是历史条件性建议，不覆盖现行目标；按需重审旧条件，保留原裁决；边界：不得默认部署B路线。[2026-11-05-goal-options.md L1–6](https://github.com/sunshihao001/ai-d/blob/be25104d76a0f61135467746812ab93c0044dcca/decisions/2026-11-05-goal-options.md#L1-L6)
- K-EVOLVE：参见 P7 的唯一主入口；仅在本问题需要时交叉调用。
- K-HOOK：参见 P4 的唯一主入口；仅在本问题需要时交叉调用。

## 二、知识采用裁决
- 现行治理、条件性专业方法、局部运行结果、历史候选分别读取。所有28项均有定向校勘记录，不表示已部署或独立增益。
- 文本相关性只作检索：[70项外部语言蕴含反例](../research/artifacts/semantic-reorganization/v4-entailment/result.json)，80%覆盖仍错接纳6项、漏26项。采用前检查对象、版本、时点、证据支持/反驳/不足和适用范围；[50段落及适用门禁](../research/artifacts/semantic-reorganization/v4-evidence-use-guard-results.json)不自动判真。
- 旧B路线、固定八专家/技能绑定、历史25章总提示词、以时长/数量/评分代替能力、词语相似等于证据等，均退出默认采用。保存原件，按需反证；历史研究不是现行权威。详见[实际治理裁决](../research/artifacts/semantic-reorganization/v4-governance-decisions.json)。
- 理论价值与执行价值分开；未验证不等于错误。权限、安全、原始反例不得当污染删除。
- **项目迁移边界**：通用治理与专业方法可以共享，目标、业务对象、数据语义、风险/授权、验收必须由目标项目自己的现行正本确定。AI-D当前衡量个人能力/专业劳动；MEME仅按其自身已授权任务执行，不从AI-D推导交易信号或扩大权限。

## 三、专业成果和精确原件
- [证据结构契约实测](../research/artifacts/semantic-reorganization/v3-contract/result.json)；[真实制造质量作品](../cases/2026-11-27-manufacturing-quality-evidence-v3.md)；[双停运边界](../research/artifacts/semantic-reorganization/dual-outage-service-boundary.json)；[原时点反例](../research/2026-11-27-r36-temporal-audit-recovery.md)。均局部情景或公开资料，不自动外推现实收益。
- [集中专业知识原件](2026-11-27-professional-knowledge-and-leverage.md) · [八问题专业方法原件](2026-11-27-problem-method-activation-map.md) · [历史专家恢复及归并](../research/2026-11-27-historical-expert-recovery-mainline-v2.md) · [历史原件目录](../research/archive/README.md)。历史27项及制造12项在V4地图条件性关联，不重复晋升。
- [旧索引完整版本](https://github.com/sunshihao001/ai-d/blob/5c3e9b59757aac783b33e0c9f4b004b0783c0f50/knowledge/INDEX.md)（旧入口和历史章节；不默认加载）。所有研究原件继续保留。若旧链接使用本索引旧章节锚点，按固定版本查原段；不把旧优先级带入当前。

- [主干归并验收](../research/2026-11-27-mainline-acceptance-v3.md)：版本选择、43原件保全、固定候选树和回归证据；不是新的研究任务。
