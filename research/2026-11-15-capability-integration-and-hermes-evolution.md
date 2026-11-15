# 2026-11-15｜能力整合：ai-d 的最新核心方向与 Hermes 演化研究 V1.0

> 状态：SOURCE_RESEARCHED + DESIGN_SYNTHESIS / NOT_MODEL_VERIFIED
>
> 本文件记录 2026-11-15 对 ai-d、Hermes 以及 Agent、Memory、Skills、Tool orchestration、Knowledge updating 等最新研究后的方向收束。
>
> 最重要的修订：当前不把“发明一个全新的 Agent 内核”作为 ai-d 的首要竞争方向。更值得长期建设的能力，是围绕人的真实目标，发现、理解、选择、组合、验证和淘汰分散在不同模型、Agent、Skill、MCP、软件、知识体系和专业方法中的能力，使组合后产生原单个组件没有的系统能力。
>
> 这不是把“整合”固化成一个新的固定工作流；它是当前最有解释力的产品/研究假设，必须通过真实任务继续证伪。

## 1. 本轮真正发生了什么变化

过去 ai-d 的研究不断出现目标理解、专业问题表征、知识组织、跨学科研究、竞争解释、证据与反证、长期记忆、纠偏、下一步判断、Agent Runtime、Skills、MCP、多 Agent、Hermes、Open Deep Research、DeepAgents、OpenWiki、Co-STORM 等方向。

这些研究没有证明其中任何一个单点就是 ai-d 的独特内核。

反而逐渐暴露出一个更重要的问题：

> 大量优秀能力已经存在，但分散在不同系统、不同产品、不同学科和不同工程实现中。真正稀缺的可能不是再造一个组件，而是知道“当前真实问题需要什么能力、从哪里取得、如何组合、何时切换、如何验证组合后的结果”。

因此，本轮把 ai-d 的核心假设从：

> “设计一个比现有 Agent 更先进的认知内核”

进一步修订为：

> “建立一种面向真实目标的能力整合机制。”

Adaptive Judgment、Epistemic Control 等概念仍有价值，但现在把它们视为整合层需要具备的判断机制之一，而不是未经验证就宣布为最终产品内核。

## 2. 为什么“整合”不是简单拼装

普通整合是 A + B + C = A、B、C 都放在一起。

ai-d 真正希望达到的是：

A能力 + B能力 + 关系/选择机制 = C能力

其中 C 是：
- 单独使用 A 做不到；
- 单独使用 B 做不到；
- 简单串联 A、B 也不稳定；
- 但围绕同一个现实目标进行组合后可以产生的能力。

因此真正的研究对象不是“组件目录”，而是能力之间的关系、适用条件、互补性、冲突、转换成本、证据要求和组合后的新行为。

例如：

Hermes + Skill

只是增加程序执行能力。

但：

用户真实目标识别
→ 当前缺口判断
→ 选择成熟 Skill
→ 调用 MCP
→ 取得外部证据
→ 检查是否改变原判断
→ 如果改变则更新任务表示

才开始出现“整合层”的价值。

## 3. 最新外部证据改变了什么

### 3.1 Hermes 本身已经高度“能力平台化”

截至 2026-11-10，Hermes Agent v0.23.1 已经是成熟且快速演化的 Agent Runtime，而不是简单 CLI。公开能力包括工具注册、Web、浏览器、终端、文件、记忆、会话搜索、Skill、委派、定时任务、MCP、插件等；Hermes 还把 Skill 作为按需加载的 procedural memory，并支持 Agent 自己创建和更新 Skill。

这意味着：

> “Hermes + 一批好 Skill”本身很难成为 ai-d 的长期差异化。

因此不应该把主要资源投入到“再做一套 Skill 集合”。

### 3.2 Agent 研究正在趋向相似的基础组成

2026 年 Agent 综述显示，越来越多 Agent 系统趋向：
- LLM
- Tool layer
- External memory
- Planning
- Multi-agent orchestration
- Evaluation / safety / governance

差异越来越落到如何组合这些组件以及它们适用于什么任务，而不是组件是否存在。

这进一步支持：

> 组件本身越来越商品化，组合和任务适配的重要性上升。

但必须注意：这只是领域趋势，不等于已经证明“能力整合”就是唯一正确的商业壁垒。

### 3.3 Memory 研究也开始从“存储”转向“生命周期和更新”

2026 年最新 memory survey 与 controlled knowledge updating 研究强调：
- 写入什么；
- 存在哪里；
- 什么时候更新；
- 是否应该更新；
- 如何处理冲突；
- 如何遗忘；
- 如何验证；
- 如何保证时间一致性；
- 如何避免旧知识污染。

因此 ai-d 以前提出的“知识不能只是保存，要能够修订、失效、删除、重新验证”得到更直接的外部研究支持。

特别值得保留：

> 正确的更新有时不是写入新知识，而是决定“不应该持久化”。

## 4. ai-d 当前真正应该成为哪一层

暂时不要把 ai-d 设计成：
- 新模型；
- 新 Agent SDK；
- 新 Skill marketplace；
- 新 MCP server 集合；
- 新知识库；
- 新多 Agent 框架。

更合适的是：

> Goal-to-Capability Integration Layer：目标与能力整合层。

概念链：

Human Intent
→ Goal / Problem Representation
→ Current State
→ Capability Gap
→ Capability Discovery
→ Capability Selection
→ Capability Composition
→ Execution
→ Evidence / Result
→ Evaluation
→ Revision

## 5. 能力整合的对象必须分层

不能把所有东西都叫“能力”。

### 5.1 Model Capability

GPT、Claude、Gemini、开源模型、专业模型。

提供：
- 推理
- 代码
- 长上下文
- 多模态
- 特定领域能力

模型不是完整解决方案，只是能力提供者。

### 5.2 Agent Runtime

Hermes、DeepAgents、LangGraph、OpenAI Agents SDK 等。

提供：
- 状态
- 工具调用
- 会话
- 权限
- 恢复
- 委派
- 执行循环

Runtime 是执行底座，不应该被误认为认知目标本身。

### 5.3 Skill / Procedural Knowledge

Skill 提供“如何完成某类事情”。

应保存：
- 操作顺序；
- 参数；
- 工具；
- 常见失败；
- 修复方法；
- 验收方式。

Skill 是程序性知识，不应该成为整个系统的判断中枢。

### 5.4 MCP / Tool

提供“能够访问什么、执行什么”。

例如 GitHub、浏览器、数据库、API、Solana 数据、文件系统。

工具回答“我能做什么”，不是“现在最值得做什么”。

### 5.5 Domain Knowledge

Solana、制造业、软件工程、市场分析、医学、经济学等。

回答“这个领域发生什么、什么条件重要”。

不能直接把某领域知识迁移成其他领域的硬规则。

### 5.6 Research / Reasoning Methods

假设竞争、反证、因果推理、信息价值、方案比较、系统综述、源码审查、故障注入、实验、专家标准比较。

回答“面对这个问题应该怎样认识和验证”。

### 5.7 Data / Evidence

原始链上数据、GitHub 源码、官方文档、论文、实际运行日志、用户反馈、实验结果。

回答“我们到底知道什么”。

### 5.8 Human Authority / Preference

价值取舍、人生目标、风险承受能力、重大资源投入、对外行动授权、不可逆决定。

AI 无法替代这一层。整合层必须知道什么时候自己判断、什么时候把决定交还给人。

## 6. “能力地图”比“知识库”更重要

过去容易建设：

项目 → 文档 → 知识 → 标签

现在需要增加：

目标 → 问题 → 缺口 → 能力 → 提供者 → 条件 → 组合 → 证据 → 结果

一个能力对象未来可以抽象为：
- name
- provider
- type
- what_it_does
- input
- output
- prerequisites
- cost
- latency
- reliability
- domain
- evidence
- failure_modes
- compatible_with
- conflicts_with
- substitution_options
- verification_method
- freshness
- authority
- reversibility

这不是要求现在马上做数据库，而是未来组织知识时应采用的思维单位。

## 7. “整合”真正困难的地方

### Capability Discovery
不是“我知道有什么工具，所以调用工具”，而是“我甚至不知道缺什么能力，如何发现它”。

### Capability Matching
不是 Skill 名字与问题关键词匹配，而是当前问题结构是否真的适合这个能力。

### Composition
判断 A→B、A+B、A→C→B 或并行组合哪种更合理。

### Conflict Management
处理快速回答与深度调查、历史知识与最新证据、自动执行与人工审批、广泛搜索与成本控制、长期记忆与污染等冲突。

### Substitution
知道某能力目前由某个 Skill 提供，但不可用时能够用其他提供者替代，避免工具锁定。

### Verification
组合完成后必须回答“组合真的解决了目标吗”，而不是“所有工具都成功调用了”。

## 8. “Adaptive Judgment”现在放在哪里

保留，但降级为整合层的重要机制，而不是最终产品名称。

Capability Integration 需要：
- Intent Understanding
- Goal Management
- Situation Assessment
- Epistemic State
- Evidence Evaluation
- Metareasoning
- Value of Information
- Hypothesis Management
- Capability Selection
- Composition
- Verification
- Revision

因此：

> Adaptive Judgment 是决定如何整合能力的判断机制。

而不是：

> “整个产品就叫 Adaptive Judgment”。

这样可以避免过早锁死。

## 9. “下一步最值得做什么”也应重新解释

过去是 Next Best Action。

现在更完整：

> Next Best Capability-Enabled Action。

当前目标 + 当前状态 + 未知 + 可用能力 + 成本 + 风险 + 预期信息价值
→ 下一项最值得执行的能力组合。

例如不知道一个判断是否成立时，不应机械“继续搜索”，而应判断：
- 再搜索论文是否有价值；
- 看源码是否更有价值；
- 看真实数据是否更有价值；
- 做实验是否更有价值；
- 找成熟成品是否更有价值；
- 问用户是否最省成本；
- 当前证据是否已经足够，应停止研究并执行。

这才是“整合 + 判断”。

## 10. Hermes 在新架构中的准确位置

建议暂时采用：

> Hermes = Agent Runtime / Execution Substrate

而不是：

> Hermes = ai-d 的认知内核。

Hermes 当前已经提供：
- 多模型；
- 工具；
- Skills；
- Memory；
- Session Search；
- Delegation；
- Browser；
- Terminal；
- MCP；
- Plugins；
- Cron；
- Gateway；
- Skill 自我创建/更新。

所以不要重复造这些。

建议结构：

Human
↓
ai-d Integration / Judgment Layer
↓
Hermes Runtime
↓
Skills / MCP / Tools / Models / Memory
↓
World
↓
Evidence / Result
↺ ai-d

## 11. 这也改变了“Hermes 内核改造”的理解

不要直接修改 Hermes Agent Loop。

先研究哪些决策必须在普通 Hermes Loop 之前、之中或之后发生。

### Pre-Loop
- 用户意图；
- 当前长期目标；
- 当前问题；
- 已知状态；
- 能力缺口；
- 风险；
- 是否需要澄清。

### In-Loop
- 能力发现；
- Skill 选择；
- 工具选择；
- 子 Agent；
- 研究深度；
- 成本；
- 中途失败；
- 目标漂移。

### Post-Loop
- 结果是否真的解决目标；
- 证据是否支持；
- 哪些结论仍 UNKNOWN；
- 哪些知识应该保存；
- 哪些知识应该废弃；
- Skill 是否应该更新；
- 是否需要重新定义问题；
- 下一项高价值行动。

真正的“内核改变”可能不是重写 Hermes，而是：

> 改变 Hermes 在什么情况下使用什么能力、如何判断结果、如何更新自己的工作状态。

## 12. 为什么不能简单把 ai-d 做成“大 Skill”

如果最终只是一个几千行 AI-D.md：
- 先目标理解；
- 再研究；
- 再调用 Skill；
- 再反思；
- 再总结；

它仍然是 Prompt / Skill Engineering，别人可以复制。

ai-d 的最终资产至少应有三种：

### A. Conceptual Asset
专业知识：目标、证据、能力、冲突、验证。

### B. Decision Asset
实际经验：什么情况下选什么能力、什么时候不选、什么时候换方法、什么时候停止、什么时候交给人。

### C. Evaluation Asset
哪种组合真的更好、在什么任务上更好、成本是多少、哪些情况下失败、与基线相比改善多少。

C 最重要。它能把 A、B 从“漂亮思想”变成产品资产。

## 13. 过去 ai-d 已经拥有的东西，不需要推翻

| 既有研究 | 新定位 |
|---|---|
| 意图理解 | Integration Entry |
| 意图发展 | Goal / Problem Formation |
| 意图选择 | Decision |
| P1–P8 | 问题类型导航 |
| 九阶段知识生命周期 | Knowledge maintenance perspective |
| 跨层锚点 | Traceability / relationship layer |
| 纠偏 | Revision / root-cause correction |
| 证据状态 | Epistemic layer |
| 研究风险锚点 | Metareasoning / resource allocation |
| 专家方法 | Capability / Method provider |
| Hermes | Runtime provider |
| Skills | Procedural capability |
| MCP | Tool connectivity |
| Memory | State / knowledge substrate |
| Blix | 现实复杂领域试验场 |
| GitHub 项目 | Capability source / mature implementation |
| 外部研究 | Capability discovery + evidence |

因此不是重做 ai-d，而是给过去积累的东西重新建立“能力关系”。

## 14. “整合”与“知识管理”的关键区别

知识管理：

> 我有什么资料？

能力整合：

> 当前目标需要什么？我有什么可用能力？缺什么？怎样组合？

知识库：

Knowledge → Retrieval

能力整合：

Goal → Problem → Capability Gap → Capability Selection → Composition → Action → Evidence → Revision

所以未来 ai-d 不应该追求“拥有最多知识”，而应该追求：

> 在正确的问题上正确调用正确的知识、方法、工具和执行能力。

## 15. 真正的壁垒可能来自“组合经验”

单个组件容易获得。

真正难复制的是：

> 针对一个现实问题，过去已经验证过哪几种能力组合有效。

例如：

源码审查 + 原始文档 + 故障注入 + 回归测试

可能形成成熟的软件调查组合。

链上原始事件 + 钱包行为 + 资金路径 + 市场数据 + 竞争解释

可能形成成熟的 Meme 市场调查组合。

未来：

> 组合本身成为可复用资产。

这比 Skill 更接近真正的系统知识。

## 16. “整合”必须有反面约束

否则会出现“什么都整合”。

至少需要：
1. 不为整合而整合；
2. 不因为流行而整合；
3. 不因为完整而整合；
4. 不把历史建议永久化；
5. 不把组件当真值；
6. 不把组合成功当任务成功。

核心原则：

> More Capabilities ≠ Better Agent。

更多能力可能带来上下文污染、选择成本、工具错误、冲突、延迟、费用、错误传播、组合爆炸和责任不清。

所以目标不是整合最多能力，而是：

> 以最低必要复杂度获得足够的系统能力。

## 17. 未来 ai-d 应该像“能力调度大脑”，而不是“工具仓库”

暂时使用这个非正式模型：

Human
↓
Intent
↓
Goal / Problem
↓
Situation + Epistemic State
↓
Capability Gap
↓
Capability Discovery
↓
Capability Selection
↓
Composition
↓
Execution
↓
Evidence
↓
Verification
↓
Revision
↓
Experience / Reusable Capability

注意：这是概念关系图，不是九步强制工作流。

真实任务可能直接回答、只调用一个工具、调用一个 Skill、做一次实验、做多轮研究、交给人决定或直接停止。

## 18. 与现有研究的真正差异

当前研究已经大量研究 Tool Use、Multi-tool Orchestration、Multi-Agent、Memory、Planning、Agent Harness、Skills、MCP、A2A、Self-improvement。

因此 ai-d 不应该声称“别人没有研究能力组合”。

更谨慎的定位：

> 现有生态已经提供大量“能力组件”和“组合框架”；ai-d 当前要研究的是，能否把“围绕人的完整目标动态发现、选择、组合、验证和淘汰能力”作为一个独立的跨项目认知/产品层，并用真实任务证明它比单纯增加工具或固定 workflow 更有价值。

这才是目前可以负责任地提出的研究问题。

## 19. 真正需要证明的三个假设

### H1：能力整合比单纯增加能力更重要

Baseline = Model + Tools

Treatment = Model + Tools + Capability Selection / Composition

如果 Treatment 在相同资源下减少弯路、无关工具调用、用户纠错，并提高关键未知发现和结果完整度，则支持 H1。

### H2：动态整合优于固定 Workflow

比较固定流程与按当前问题动态选择方法、工具、Skill。

如果动态方式在不同领域保持收益，才说明整合机制具有迁移价值。

### H3：真实优势来自“组合后的新能力”

比较：
- A 单独；
- B 单独；
- A→B；
- 动态 A/B/C。

如果组合产生单个组件无法稳定产生的结果，才真正证明“整合”是系统级能力，而不是包装。

## 20. 评价指标不能只看答案质量

### 目标层
- 目标恢复准确度
- 目标漂移率
- 用户纠正次数

### 能力层
- 能力发现率
- 错误能力选择率
- 不必要工具调用率
- 能力替代成功率

### 研究层
- 关键未知发现率
- 重要主张覆盖率
- 错误/误报率
- 证据质量

### 执行层
- 完成率
- 恢复率
- 失败后修复率
- 成本
- 时间

### 学习层
- 是否正确更新旧判断
- 是否识别过时知识
- 是否错误污染长期知识
- 是否能迁移经过验证的组合经验

### 人机层
- 用户指挥成本
- 用户重复解释次数
- 用户需要承担的专业工作量
- 最终用户可控性

## 21. 一个必须主动保留的反例

更多整合可能更差。

原因：
- 上下文污染；
- 选择成本；
- 工具调用错误；
- 冲突增加；
- 延迟；
- 费用；
- 错误传播；
- 组合爆炸；
- 责任不清；
- 过度自动化。

所以 ai-d 必须研究“最小充分组合”，而不是最大能力集合。

## 22. 与用户现实能力的关系

不懂代码不是产品壁垒，也不意味着项目做不了。

可发挥的核心能力是：
1. 发现问题；
2. 发现不同领域已经存在的解决能力；
3. 理解这些能力真正解决什么；
4. 判断哪些可以组合；
5. 发现组合后的新价值；
6. 通过真实结果淘汰错误组合；
7. 把有效组合沉淀为可复用资产。

工程实现可以逐渐借助 Hermes、Claude Code、GPT、GitHub、开源项目和 AI coding agent。

因此：

> 不应该和程序员竞争“谁写代码更快”；应该让代码成为整合能力的实现媒介。

但仍需要逐步补足基本的产品和工程判断，否则无法知道 AI 写出的东西是否真的工作。

## 23. “脱颖而出”的最新分级判断

### Level 1｜工具使用
会用 GPT / Claude / Hermes / MCP。
容易复制。

### Level 2｜Workflow Engineering
会设计复杂 Prompt、Skill、Agent Workflow。
已经很普遍。

### Level 3｜Capability Integration
围绕真实目标动态选择不同模型、Skill、工具、知识、专业方法和成熟项目，并形成可验证组合。
这是 ai-d 当前最值得研究的位置。

### Level 4｜Validated Integration Intelligence
不仅会组合，而且长期积累：
哪种组合在什么情况下有效、为什么有效、何时失效、如何验证、如何替代。
这是最终可能形成真正壁垒的方向，但目前尚未证明已经实现。

## 24. 当前不应该做什么

现在不应该：
- 重写 Hermes Agent Loop；
- 自建完整 Agent Framework；
- 创建几十个专家 Agent；
- 建大型知识图谱数据库；
- 创建数百个 Skill；
- 把 ai-d 写成巨大 System Prompt；
- 立刻开发完整 Capability Graph 产品；
- 因理论听起来漂亮就宣称“独创 Agent 内核”。

应该：
1. 能力盘点：把 Hermes、DeepAgents、Open Deep Research、GPT Researcher、OpenWiki、Co-STORM、Skills、MCP 等重新按 Problem → Capability → Provider → Condition → Evidence → Failure 归档。
2. 能力组合案例：选真实任务，不做抽象 Demo，观察哪些能力单独没用、组合后才有用。
3. 建立组合经验：记录为什么选择这个组合、什么情况下不应该使用、结果如何、什么证据推翻了它、有没有替代组合。
4. 再决定是否修改 Hermes：只有发现现有 Runtime 无法承载能力整合机制，才进入代码改造。

## 25. 三个关键未知必须继续保留

- UNKNOWN-01：能力整合是否真的比普通 Agent workflow 有稳定优势。
- UNKNOWN-02：是否存在可以跨领域迁移的通用能力组合机制。
- UNKNOWN-03：能力组合是否必须由专门软件实现，还是强模型 + 良好上下文已经足够。
- UNKNOWN-04：Hermes 是否需要源码级修改。
- UNKNOWN-05：ai-d 是否最终需要成为独立产品。
- UNKNOWN-06：Capability Graph 是否比普通文档/Skill 更有效。
- UNKNOWN-07：长期组合经验是否会导致新的知识污染。
- UNKNOWN-08：组合复杂度增加到什么程度后收益反而下降。
- UNKNOWN-09：用户是否真的会因此减少专业负担，而不是增加管理负担。
- UNKNOWN-10：该方向是否能够形成真实商业/职业壁垒。

## 26. 当前结论证据等级

| 结论 | 状态 |
|---|---|
| Hermes 已具备大量 Runtime / Skill / Memory / Tool 能力 | SOURCE VERIFIED |
| Agent 生态趋向模型+工具+记忆+规划+编排 | LITERATURE SUPPORTED |
| Memory 的关键问题扩展到更新、失效、遗忘、治理 | LITERATURE SUPPORTED |
| 更多 Tool / Skill 本身不是可靠差异化 | STRONG DESIGN INFERENCE，非严格商业结论 |
| Capability Integration 是 ai-d 更适合的竞争位置 | CURRENT HYPOTHESIS |
| Adaptive Judgment 应成为整合层的一部分 | CURRENT DESIGN HYPOTHESIS |
| Capability Integration 已证明能跨领域稳定提升结果 | UNKNOWN |
| 修改 Hermes 内核是必要的 | NOT ESTABLISHED |
| ai-d 应成为独立软件产品 | NOT ESTABLISHED |

## 27. 下一轮不是继续写理论，而是做“能力整合反证研究”

选择已经研究过的成熟系统：
- Hermes
- DeepAgents
- Open Deep Research
- GPT Researcher
- OpenWiki / Co-STORM

对每个系统问：
1. 已解决哪些能力整合问题？
2. 如何选择能力？
3. 选择是静态、规则、模型驱动还是动态？
4. 能否发现预先没有定义的能力？
5. 能否更换能力提供者？
6. 如何判断组合成功？
7. 如何处理冲突？
8. 如何从失败中改变组合？
9. 是否记录“为什么这次选择这个能力”？
10. 能否跨任务迁移有效组合？
11. 哪些部分 ai-d 完全没必要重复建设？
12. 哪个真实缺口仍存在？

然后选一个完全不同于 Solana 的现实任务做对照。

只有经得住反证，才进入代码设计。

## 28. 与 ai-d 现有结构的关系

本文件不是：
- P9；
- 新的知识阶段；
- 新的固定工作流；
- 新的专家体系；
- 替代跨层锚点；
- 替代知识生命周期。

它是：

> 2026-11-15 的“能力整合”研究与设计判断记录。

关系如下：

P1 → 目标/问题
P2-P5 → 研究/知识/证据
P6 → 选择/人机协调
P7 → 验收/修订
P8 → 污染/失效
Cross-layer anchors → 能力、知识、数据、实现、结果之间的可追溯关系
Capability Integration → 把这些东西与外部成熟能力重新组织起来

## 29. 最终记录

截至 2026-11-15，ai-d 不应继续简单理解为：
“建立一个更先进的知识系统”。

也不应简单理解为：
“给 Hermes 增加一个更强的 Skill”。

更接近：

> 建立一个能够把“人的目标”和“世界上已经存在的大量能力”连接起来的系统。

核心资产不是 Skill 数量、Tool 数量、文档数量、Agent 数量或模型数量。

而是：

> 目标 → 问题 → 能力缺口 → 能力发现 → 能力选择 → 能力组合 → 结果 → 证据 → 修正 → 可复用经验

之间越来越可靠的映射。

这也是目前“整合”最值得研究的原因。

但必须保持开放：

> 如果下一轮反证发现成熟 Agent 已经足够完成这些事情，或者能力整合只增加复杂度而没有真实收益，那么 ai-d 应该放弃这条路线，而不是为了证明自己的理论继续建设。

## 30. 主要外部来源登记

1. Hermes Agent repository
https://github.com/NousResearch/hermes-agent

2. Hermes releases
https://github.com/NousResearch/hermes-agent/releases

3. Hermes Tools & Toolsets
https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/tools.md

4. Hermes Skills System
https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md

5. Hermes Memory
https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory.md

6. Controlled knowledge updating in memory-enabled AI agents, 2026
https://pmc.ncbi.nlm.nih.gov/articles/PMC13654771/

7. STALE: Can LLM Agents Know When Their Memories Are No Longer Valid?, 2026
https://www.alphaxiv.org/abs/2605.06527

8. Learning to remember: advances in memory mechanisms for LLMs, 2026
https://link.springer.com/article/10.1007/s44336-026-00044-1

9. From Storage to Experience: Survey on LLM Agent Memory Mechanisms, 2026
https://arxiv.org/abs/2605.06716

10. Critical assessment of Agentic AI, 2026
https://link.springer.com/article/10.1007/s44163-026-02342-5

11. Agentic AI systems: systematic survey, 2026
https://www.sciencedirect.com/science/article/pii/S0925231226014475

12. LLM-Based Multi-Agent Orchestration survey, 2026
https://www.mdpi.com/1999-5903/18/6/326

13. Engineering and Governing the Agent Harness, 2026
https://unu.edu/publication/engineering-and-governing-agent-harness-technology-and-policy-framework-runtime-layer

14. The Evolution of Tool Use in LLM Agents, 2026
https://arxiv.org/abs/2603.22862

来源使用边界：以上资料用于支撑“当前生态已经拥有大量能力组件、Agent Runtime、Memory/Skill/Tool orchestration 正快速成熟，以及知识更新/过时记忆是现实问题”等判断；“能力整合将成为 ai-d 的最终壁垒”仍属于项目假设，不是外部研究已经证明的事实。
