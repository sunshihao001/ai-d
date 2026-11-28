# 2026-11-16｜外部智能吸收层：把外部知识转化为可验证能力

> 状态：CURRENT DESIGN / SOURCE-INSPIRED / NOT_YET_RUNTIME_VALIDATED
>
> 本文不是新的固定工作流、知识库产品、Agent 阶段或强制分类。它是 ai-d 对“AI 能力昂贵时，先建设真正值得吸收的外部知识、方法和成熟项目，并让这些内容最终改变实际能力”的当前设计理解。

## 1. 为什么新增这一块

**2026-11-28 现行范围修正：** 外部智能不只指可运行智能体、技能或GitHub项目。强模型利用落差、一线优秀使用者的实际工作方法、评论反例、专业成品及人的鉴别和创造能力同样是研究对象。优先 X、Reddit、HN，从相关词、同义词、作者、引用及讨论链扩展；以原始工作记录、专业产物和真实验证裁决，不把社区自述当效果证据。具体方法已归入[专业知识正本](../knowledge/2026-11-27-professional-knowledge-and-leverage.md#强模型时代个人能力扩张与智能利用)，来源归[既有登记](../knowledge/source-register-2026-11-05.md)。以下历史工具和流程仅为候选参考，不要求遍历。

当前外部 AI 能力快速增长，但高质量模型、长任务和持续运行都有成本。ai-d 不应该把预算主要花在重复搬运资料、重复总结和已经成熟的 Runtime 能力上。

真正值得积累的是：

**外部世界 → 研究 → 证据判断 → 方法/模式提炼 → 能力资产 → 项目应用 → 真实验证 → 修订/淘汰。**

因此“研究知识”不是最终目标。知识只有在能改变问题理解、方案选择、执行方法、验证方式或实际结果时，才具有进入长期资产的理由。

## 2. 外部来源的职责

### X / 社交讨论
适合发现最新实践、失败经验、争议、正在形成的方法，以及正式文档之外的使用经验。
限制：单个帖子只是来源，不是事实；作者观点、广告、二手转述和模型推论必须分开；X 搜索不能代替原项目、代码或真实验证。

### GitHub / 可运行项目
优先回答：有没有已经做成的东西；完整架构如何组织；关键机制实际在哪里；测试、Issue、PR 暴露了什么边界；哪些能力可以复用而不是重新发明。
核心判断不是 Star 数，而是是否提供可检查的机制、代码、测试和真实使用证据。

### Reddit / 评论 / 社区
主要用于发现真实使用摩擦、失败、反例和不同意见。社区共识不能直接升级成事实。

### 官方文档 / 标准 / Papers / Books
主要用于定义、协议、原理和边界，核对作者自己的设计意图，并提供高质量原始依据。官方或论文标签不自动证明迁移后一定有效。

## 3. 研究对象不再只是“知识”

**2026-11-28 最新建设原则：** 以外部已经成熟的一项专业能力为研究单位，而非先设计AI-D自己的通用组件。深入优秀从业者的工作记录、领域技能文件、专业成品源码、标准、数据、真实测试与失败反馈，提取可复用的知识单元、专业组件、领域工作流。优先直接继承/适配/组合，实际缺口才自建。外部检索范围继续优先X、Reddit、HN、成熟GitHub及其评论/issue，动态扩展专业表达；发现对象后追原始专业方法，区分已读、待核、适用、实测，按既有登记及正本保存。不以项目名、关键词、角色名、技能数量证明专业能力。具体见[专业知识正本](../knowledge/2026-11-27-professional-knowledge-and-leverage.md#成熟专业能力继承与领域专属工作流)。

| 类型 | 保存什么 | 何时值得沉淀 |
|---|---|---|
| Concept | 定义、机制、边界 | 能解释重要问题 |
| Method | 可重复的研究/决策/执行方法 | 有依据且可能跨任务复用 |
| Pattern | 多个项目中反复出现的结构或机制 | 已完成跨来源比较，差异条件清楚 |
| Capability / Skill Candidate | 可被 AI 实际调用的 procedural 方法 | 输入、适用条件、输出和验证都能说明 |
| Evidence / Case | 原始事实、反例、运行结果、失败案例 | 能改变判断或约束主张 |

**Source 本身不是知识资产。** Source 是证据入口；收藏过不等于成为长期规则。

## 4. 研究后的转化链

Source → Claim/Observation → Evidence → Interpretation → Method/Pattern → Applicability → Candidate Capability → Real Application → Verification → Revision

任何一步都可以停止。重点不是写总结，而是让外部资料最终改变实际判断或能力。

## 5. 与原有知识九阶段的关系

不新增第十阶段。K1–K9仍然是知识生命周期视角；外部智能吸收层是跨 K2–K9 的能力视图。

- K2 获取：围绕具体未知寻找 X、GitHub、社区、官方资料和真实案例。
- K3 接收：保留原始来源、版本、代码/测试和证据边界。
- K4 理解：先理解来源自身的问题和机制，不急着按自己的项目解释。
- K5 关联：跨项目比较，识别共同机制、条件差异和伪互证。
- K6 整合：去重、保留来源和适用条件，不无限增加分类。
- K7 转化：只有能够改变实际判断或能力时才进入项目。
- K8 验证：真实运行、反例和独立对照决定是否升级状态。
- K9 进化：新证据使旧方法失效时，原位修订或淘汰。

## 6. 与 ai-d 当前六域的关系

- Human & Goal：决定什么值得学习，不让研究对象自己决定长期目标。
- Knowledge & Epistemics：保存来源、主张、证据、适用性、冲突、UNKNOWN、过时状态。
- Capability & Method：把验证过的方法转化成可调用能力候选。
- Runtime & Execution：尽量复用 Hermes 等成熟 Runtime，不重复建设。
- Domain & Reality：在 Blix、软件工程、学习等真实领域验证迁移。
- Verification & Evolution：决定接受、降级、修订或淘汰。

## 7. 与 Hermes / Muse 的关系

### Hermes
Hermes 更适合承担搜索与工具调用、Skill 执行、MCP、Delegation、Memory / Session Search、Gateway / 长期运行、Cron、Plugins / Hooks 等 Runtime 能力。
ai-d 不应该因为需要知识吸收就重新造这些底层设施。

### Muse
Muse 可以成为真实外部研究和执行环境之一：发现资料、实际运行项目和工具、把运行结果反馈给 Hermes/ai-d。Muse 的运行能力不能自动等于知识可靠性。

### GPT
GPT 可以承担独立审查、竞争解释和设计复核，不应成为唯一证据来源。

## 8. 昂贵 AI 优先用于高价值判断

低成本/机械能力优先：搜索、抓取、去重、文本提取、文件定位、代码扫描、来源登记。

较强模型用于：研究问题选择、跨项目机制比较、竞争解释、适用性判断、证据冲突、架构取舍、是否升级为能力。

真实环境用于：运行、回归、故障注入、数据覆盖、业务效果。

人的授权保留给：长期目标、重大资源投入、付款、对外高风险/不可逆行动。

## 9. 知识污染治理

以下情况不得直接进入长期能力：
1. 单个帖子或单个模型的未经核实观点；
2. 把 README 当成实际能力证明；
3. 理论类比被写成工程事实；
4. 一个领域的参数、事实或阈值未经验证迁移到另一个领域；
5. 一次成功案例直接固化成永久规则；
6. 旧方案只因为已经写进 GitHub 就继续作为当前架构；
7. 重复同义总结没有增加机制、证据或判断；
8. “已经研究过”被当成“AI 已经会用”。

处理方式：保留来源；降级为 observation / hypothesis / candidate；明确 UNKNOWN；找反例；在原维护位置修订或淘汰；不因为历史投入而继续维护无价值内容。

## 10. 当前明确淘汰/降级的旧倾向

以下不再作为 ai-d 当前方向：
- 把 ai-d 做成“大而全知识库”作为主要目标；
- 为知识建立越来越细的固定层级、标签和阶段；
- 把所有外部资料全文搬入长期上下文；
- 为每个新遗漏增加一个新阶段、新专家、新系统；
- 把 Capability Graph、Knowledge Graph 或大型 Workflow 作为当前必做基础设施；
- 把 Skill/Memory/MCP 当成 ai-d 自己必须重新实现的底层系统；
- 用文档数量、研究轮数、来源数量证明系统变强；
- 仅凭模型自评、合成案例或静态文档宣称真实能力提升。

历史材料如果仍有来源价值可以保留，但不再拥有当前设计优先级，也不能作为新的默认规则继续扩张。

## 11. 当前最小闭环

一个真实问题 → 发现真正缺什么 → 选择外部来源 → 找到成熟项目/方法 → 提炼可复用机制 → 在目标项目中试用 → 验证 → 保留 / 降级 / 删除 → 记录为什么。

如果这个闭环不能减少用户重复解释、错误判断、重复开发或研究成本，就停止扩张这条路线。

## 12. 当前状态

已确定：外部研究是 ai-d 的核心输入能力之一，但不是知识收集本身；长期资产应从资料进一步转成 Concept / Method / Pattern / Capability / Evidence；Hermes 负责大量 Runtime，不应重复建设；知识污染治理必须包含降级和淘汰；真实任务验证优先于继续扩写理论。

尚未验证：该结构是否实际降低模型调用成本；哪些来源组合在不同领域最有效；自动化 Source→Skill 的收益是否稳定；Muse、Hermes、GPT 如何形成最低成本协同；哪些能力值得永久沉淀。

下一步：拿真实的 ai-d / Hermes / Muse 任务作为样本，不再写同义设计，验证这个闭环。

## 历史来源限制恢复（2026-11-16原记录）

> **本轮来源边界**：用户提供的 X 帖子目前未能由可用浏览上下文直接读取，因此这里不把该帖子的具体观点写成已验证知识。本文件提炼的是与现有 ai-d 研究及可核查外部方向一致的设计层认识；待取得帖子正文/截图后，再把它作为独立 Source 进行 Claim/Evidence 级比较，不覆盖现有结论。

## 13. 成熟项目原始机制审查与实际吸收

2026-11-27。基线 PR #4 开始研究时 227272911f51e3e3a89607a7658e0ebe83366218；并行分支持续更新，写入前重新读取现行文件。以下为原始项目机制登记，不把 README 声称当实测；源码/技能读取以文件 blob SHA 定位（不是提交 SHA），当前链接可变。只提炼方法，不复制外部代码或技能全文、不安装运行时；实际采用见[组织规范4A](../knowledge/foundations/organization-protocol.md#4a-知识变更协调与失败经验复用)。

| 项目及精确来源 | 实际机制、适用条件与裁决 |
|---|---|
| [Ars Contexta reweave](https://github.com/agenticnotetaking/arscontexta/blob/main/skill-sources/reweave/SKILL.md) blob 373b418da37e2ebb3512fb391ce88959537d3acb，L20–69、95–105；[remember](https://github.com/agenticnotetaking/arscontexta/blob/main/skill-sources/remember/SKILL.md) blob 8529cc56d0c2835ec05786afabd279f97d224127，L30–88 | 从新认识反查旧正本，按深度决定连接/细化/拆分/挑战；重复纠偏先检查现有方法记录。采用反向修订与原位去重；不移植其自动钩子、固定阈值或把每条纠偏直接升为永久规则。 |
| [OpenWiki 主张类型](https://github.com/langchain-ai/openwiki/blob/main/src/claims/core/types.ts) blob 2a27aa7799eedf09407368690ce98f23a13fd439，L1–105；[更新测试](https://github.com/langchain-ai/openwiki/blob/main/test/generation/page-jobs.test.ts) blob 51192c7bbfe3bce8f9bff7dd1aa1cc7f693cb058，L273起；[协调文档](https://github.com/langchain-ai/openwiki/blob/main/openwiki/workflows/claims-reconciliation.md) | 保留无影响主张、显式处置过时主张、版本证据、稳定ID、批量校验。采用有差异才改、证据变化须复核。其代码仓库证据版本不等于专业事实真值；未运行原项目测试，不声称具备原子事务。 |
| [BMad Method 上下文维护](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/existing-codebases/set-and-maintain-project-context.md) | 官方操作文档核查：指令只保留无法廉价重获的约束、实际错误、跨模块规则；维护时核路径与已有配置，审查以不膨胀为目标。采用常驻指令准入，不引入软件开发固定角色。其原始技能实现本轮未定位。 |
| [EvoSkills evo-memory](https://github.com/EvoScientist/EvoSkills/blob/main/skills/evo-memory/SKILL.md) blob ff9625920233c3f60725c5105d397a09ae7d24f1，L29–105；[research-ideation](https://github.com/EvoScientist/EvoSkills/blob/main/skills/research-ideation/SKILL.md) blob fbf5035a657e7833e5800258548088a51201d4bd，L37–93 | 区分方向经验与执行策略；失败区分实现与根本机制；新研究先查既有相关成功/失败。采用经验分类及复开条件，原位复用现有台账和证据，不新建两套记忆库，不固定取前2条或30–50篇论文。 |
| [Hermes session_search 源码](https://github.com/NousResearch/hermes-agent/blob/main/tools/session_search_tool.py) blob 2d1ada7c5d103cb4d7fbb9543d50b6fbc2ebb13e，L5–8、128–145、276–278 | 发现、定位、上下文展开与会话压缩血缘分离。采用先发现再读可访问原件的原则；ChatGPT 当前连接无法据此获得 Hermes 的 SQLite 会话库或自动会话捕获。 |
| [Memento-Skills](https://github.com/Memento-Teams/Memento-Skills) | 项目说明支持失败归因、隔离修订、测试及回滚；与现有回归治理一致，先复用，不新增系统。此轮仅官方文档证据，内部实现/实跑未审。 |
| [GBrain](https://github.com/garrytan/gbrain)、LifeOS、Trilium、Aider、RAPTOR、OpenRefine、SWE-agent、DSPy、GEPA | 历史研究/恢复候选；本轮未重新核实原始实现，不把旧摘要冒充本轮证据。继续时优先恢复既有固定版本与实证，不重复宽泛搜索；原始用户发送URL与AI推荐归属仍不完整。 |

**当前采用动作**：组织规范新增4A具体维护契约；现有K-PROV/K-HOOK/K-DEFECT/K-CAP增加精准定位，不创建同义主张编号；执行入口合并重复保存表述并指向正本。实质问题是既有颗粒度修复已完成而后续仍可能因新证据或浓缩造成旧主张失效/遗漏；固定语义投影不得冒充实时知识。下一次独立真实任务测试应覆盖受影响主张漏改、无影响主张误改、实现失败误作根本失败三个反例。独立模型增益、全量历史链接归属、原项目部署均未完成。

## 14. 专业提示词分类、组合与反馈优化（2026-11-28）
本轮固定起点 92f4151186a3c5cfb36bfca4e7444e22482df5de。实际读取五份外部文件；以下 blob 为内容标识、非提交 SHA；链接指向原项目当前路径。根据用户纠偏，在既有 P1–P8 中恢复专业任务方法，不恢复747行总指令的默认权威，不新增知识本体。
- [GPT Researcher 提示词源码](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/prompts.py) blob 666a04bec1551078cb271ad4af066481b4e0eda8，904行，L40–122、213–418、518–596：工具选择、查询、筛选、报告、摘要等按操作分开。采用任务职责及输入输出规格；不照搬其默认角色及报告格式。
- [Deep Agents 研究指令](https://github.com/langchain-ai/deepagents-quickstarts/blob/main/deep_research/research_agent/prompts.py) blob 588bec0a5efe5b15dc10f5d4047e38e283ce9fac，173行，L67–103、138–173：协调与调查职责分离，独立问题才并行，明确预算与停止。采用条件分工；不照搬五次搜索限制，不假称运行子智能体。
- [EvoSkills 论文审查](https://github.com/EvoScientist/EvoSkills/blob/main/skills/paper-review/SKILL.md) blob 5cc9984ffedede4bf1aa05055c479bc4616f38ff，288行，L33–56、158–161：先无清单反证，再专业检查，再机械核验。迁移为重大证据/成果审查方法，非所有问答强制三遍；不把论文领域判据强套他域。
- [Anthropic skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) blob 65b3a402dbd09b8e83f9d637c6b553875189085c，486行，L52–90、169–234：触发描述、按需正文、参考资源，旧版与候选对照、客观断言及定性反馈。采用适用/不适用条件、渐进加载、保留基线；当前聊天不能宣称安装该技能或自动触发。
- [DSPy GEPA 深入机制](https://github.com/stanfordnlp/dspy/blob/main/docs/docs/diving-deeper/gepa-in-depth.md) blob 0a14743ce868e632a502392e91363cbb04160ea7，143行，L5–53、87–88：具体失败反馈、候选程序、验证集、组件级修订与成本。采用定向修订及留出回归，不复制其自动优化器、预算或宣称增益。历史V23.3实际反例仍有效：长提示词可能退化，先审评价真值与工具证据可见性。
实际产物：[专业提示词模块](../prompts/professional-task-modules.md)，保持现有知识正本、短用户入口和V5接力；具体任务选择主模块及必要辅助模块，用户不承担分类。未运行外部项目及独立模型对照，真实增益UNKNOWN。


## 15. 高阶提示词工程 V2｜原始机制与实际任务验收
2026-11-28，固定基线 5fd7e285b2fb2aca99742ca9ab86394819cfc8a3。先保留V1原件、八问题分类、目标、授权、现行接力。任务：把高级提示词转成手机工作台实际复制的任务，避免只有导航说明而没有明确执行指令。实际基线：工作台HTML内嵌entry/taskEntry及8条route均未显式引用prompts/professional-task-modules.md；生成器从README抽取两个引用块，而V1模块说明位于引用块之外。此为接口缺口，不证明过去所有模型都漏载。原HTML可在固定基线回查。
### 源码依据与采用裁决
- [DSPy Signature](https://github.com/stanfordnlp/dspy/blob/main/dspy/signatures/signature.py) blob 8d23ffc555d24687a69d574f4787a93170e7af8a，L138–278：输入输出字段和可替换指令分离。采用任务对象、输入、产物与质量门槛契约，不强制每次JSON。
- [MIPROv2](https://github.com/stanfordnlp/dspy/blob/main/dspy/teleprompt/mipro_optimizer_v2.py) blob 3a47ebbcaf6e25b5e0752b787084eda31a0c8ef3，L175–260：训练/验证数据、示范候选、任务/数据感知指令候选、评估器。采用独立选择示范与指令的思路，不照搬自动优化预算；没有模型调用则不宣称联合优化。
- [DSPy GEPA](https://github.com/stanfordnlp/dspy/blob/main/dspy/teleprompt/gepa/gepa.py) blob 3440fab7af6e92d503c5e3e9ecd6fee782c1917a，L32–89、132–152；[候选选择源码](https://github.com/gepa-ai/gepa/blob/main/src/gepa/strategies/candidate_selector.py) blob b983ea02cdf1d393583fcd893137a08e11145505，L11–83：模块级反馈、候选谱系、分样本/目标表现，不把总分等同无回归。采用具体失败反馈及硬条件优先的竞争裁决，不声称执行优化器。
- [ACE curator](https://github.com/ace-agent/ace/blob/main/ace/core/curator.py) blob fcadcfbce1c9190bda7caa24d8250baa93902320，L119–166、169–234：先提议变更、校验及记录差异，再应用；并行提议可从同一快照归并。采用局部指令修订、保留不受影响内容；不采用未经审查的自动删除。
- [OPRO](https://github.com/google-deepmind/opro/blob/main/opro/optimization/optimize_instructions.py) blob 4cf3effd82b01ca8dace80c3c589cd982486daa1，804行；核查优化/评分模型分别配置及meta-prompt参数，另有README区分训练测试。候选文字搜索作为备选，当前优先专业对象与接口修复，避免重复V23.3已证评价盲区。
- ReasoningBank、SkillOpt、本轮未读到原始实现，不作本次证据。五类机制共六份源码已读取，未安装或运行外部优化器。
### 事前冻结的验收
以固定基线的实际README、生成器和HTML为输入；保持原固定知识快照、所有route对象、卡片、具体任务/整项目接力的不同权限与范围。验收：两个复制入口均显式指向现行专业模块；八条route均使用具体任务入口并保留原P编号、情境、专家、行动、验收、来源；整项目接力只从台账继续；固定快照不冒充实时；界面有新版模块链接和历史V4标签；旧历史入口不重新生效。比较原实际复制指令与增强指令的结构契约，逐对象核对，不做词数评分。检查缺模块引用、旧分支覆盖、错误整项目启动、复制路线遗漏等反例。真实独立模型四路对照、盲评、成本与专业成果增益另验（NOT_RUN），不以字符串测试代替。实际修复需回读Git、核差异并恢复V5真实专业任务。


## 16. 多颗粒度检索实测与成熟机制适用裁决（2026-11-28）
整体研究V3，起点 a4c7649b6f5d9ee8a7cba62bb278c96ac901fd5a。目标：复用已有检索成果，验证细粒度定位是否能降低读取负担且保持必要知识召回。使用P2/P3/P4/P5/P6/P7；沿既有K-SEARCH/K-FACET定位原件，不新建检索服务。
- [Aider repo map](https://github.com/Aider-AI/aider/blob/main/aider/repomap.py)，blob 541bba6ef4a5385b8cf032201ec6e3f3e32a6ea6，L89–153、365–540：符号关系图、任务相关权重、排序与上下文预算；本轮只吸收相关性与预算分责，未运行其图排序或移植源码。
- [RAPTOR tree retriever](https://github.com/parthsarthi03/raptor/blob/master/raptor/tree_retriever.py)，blob d7501cfe15ba8d24a4010cd9fd4230c652b48f59，L146–195、197–231：不同层节点检索、阈值/排名选择及预算；本轮为标题分段的轻量实验，不是RAPTOR聚类、摘要树或嵌入检索实测。
- [ranx RRF](https://github.com/AmenRa/ranx/blob/master/ranx/fusion/rrf.py)，blob 8e30365acba9db7b5b71808d9d68ac0c250700e1，L18–47：倒数排名融合；本轮独立实现公开公式，两路等权、k=60，未安装ranx。OpenRefine尝试的源码路径404，未核到实现，不作为证据。
- [事前冻结的可运行脚本](../evaluation/retrieval-multiscale-v3.mjs)（e18e7ea689e8554dde7fe0185029bdcbad8c44e0）复用历史16问、16文档和标注（语料cd51f614fc9e7672c8fcf750ddc1f8dec59f4cdd），实际读取全部原件；执行函数与冻结代码逐字一致。[逐题结果](../evaluation/retrieval-multiscale-v3-results.json)（0cffe8f43f0acc5e324267435b48a6243e2f1474）保留输入blob、155段、五方法全部结果；三旧方法的27个分组指标与存档一致。12历史测试题Recall@3：全文.500，扩词.500，条件路由.750，分段.583，融合.625；平均取回字符数分别17661、19847、19542、1615、1803。分段以标题/约1600字符软界线处理整行，标题重复加入上下文，字符数不是token、实际成本或完整证据覆盖；长单行可能超过界线。
- **裁决**：不替换旧条件性路由。分段/融合可作辅助候选或局部定位，不能独自裁定适用性。H01、H02、H08相较旧路由退化；H03/H06所有五种方法前3未命中原标注相关文档。H04、H05、H10均保留全部标注文档。当前研究者已知旧题与标签，无独立盲评、无段落金标准、无模型A/B；结果仅适用于冻结语料和方法，不能外推到现行全部知识或RAPTOR完整实现。
- **实际原件恢复**：对H03（研究不停、无可演示成果）直接从现行P3/K-STOP与P2选取[规划验收L50–52](https://github.com/sunshihao001/ai-d/blob/a4c7649b6f5d9ee8a7cba62bb278c96ac901fd5a/planning/proposal-review-v0.1.md#L50-L52)与[组织规范L59](https://github.com/sunshihao001/ai-d/blob/a4c7649b6f5d9ee8a7cba62bb278c96ac901fd5a/knowledge/foundations/organization-protocol.md#L59)：目标关系、竞争路线、风险、边际信息价值、实际验收具备时转向可逆交付；证据不足标未知及复开。对H06（资料共享库但不知何时调用）从P4/K-FACET/K-PROV恢复[组织规范L42–48](https://github.com/sunshihao001/ai-d/blob/a4c7649b6f5d9ee8a7cba62bb278c96ac901fd5a/knowledge/foundations/organization-protocol.md#L42-L48)与[跨学科基础L5–25](https://github.com/sunshihao001/ai-d/blob/a4c7649b6f5d9ee8a7cba62bb278c96ac901fd5a/knowledge/foundations/cross-disciplinary-foundations.md#L5-L25)：按任务/条件定位原件、主张与反例，不以共享库文件数代表使用。两题为已知标签人工专业导航复核，不是新模型盲测；查到相关文件不等于完整任务正确。
- **实际修订**：组织规范3B增加分段候选与上下文展开的操作边界，索引K-SEARCH补实际结果与定位，K-STOP补明确行动依据，P3加入先按职责和现行知识定位、再细粒度展开的条件；不把算法装入默认执行，不用旧题继续调参。下一项真实专业工作应使用非本轮作者题目/独立判据或现有行业成品，检验从找文档到专业行动的真实迁移。完整生成器、浏览器、独立模型仍未验。
