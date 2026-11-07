# 先研究成熟整体，再决定 ai-d 的局部能力研究｜全系统外部参照 V0.1

- 日期：2026-11-07
- 目标：从通用 AI 协作、专业认知、长期知识、行动交付和真实反馈的**整体使用结果**出发选择成熟系统；不要让研究每次围绕某项提示词/搜索器/专家角色不断扩建。
- 来源类型：2026-11-07 的官方文档、GitHub 元数据、关键源路径及部分发布方实践文章；**不是端到端部署、全部源码验证或性能排行榜**。
- 定位：这个报告是**参考样本与问题覆盖图**，不是 ai-d 的新技术架构/强制阶段/指定产品底座。保留用户已确认的全部长期方向。

## 一、全系统真正要解决的事情

成熟系统不应只看是否包含“Agent、Memory、RAG、Deep Research”等名词，应该在用户自然语言发出一个跨阶段目标后，检查它能否真正实现并保持正确：

| 整体问题 | 对应能力 | 容易出现的表面合格 |
| --- | --- | --- |
| 普通人不懂专业术语 | 目标理解、专业问题重建、主动发现关键未知、必要时澄清 | 只把原句润色成专业词 |
| 长期目标持续演化 | 多项目目标关系、决策记录、变更来源、任务承接 | 仅保存聊天历史/默认永久沿用旧指令 |
| 找到、选对且应用专业知识 | 开放发现、来源与原理、情境适用、跨学科迁移、竞争解释 | 只提供引用很多的摘要 |
| 跨不同项目连续工作 | 模型可更换、项目上下文、可迁移专业方法、知识与行动链接 | 一个框架内部跑通单轮 Demo |
| 用户少量指挥，AI 交付 | 工具、浏览器/文件/代码、规划/执行/权限、结果验收 | 有 tool calling，但没有交付检查 |
| 长期自主研究与监控 | 触发器、任务状态、失败恢复、预算与完成状态 | 定时任务能开始，不能正确恢复 |
| 越用越正确 | 从失败定位：缺知识/用错知识/执行出错；知识/方法原位修订、回归测试 | 每次出错追加提示词或更多记忆 |
| 促进人的长期能力和现实选择 | 区分代办、辅助决策、教学与人的自主能力 | AI 做出了结果，便声称用户已经学会 |

这些是**审查成熟产品的观察问题**，不是必须实施的 8 个微服务。高风险外发、资金和设备操作维持既有授权与安全边界。

## 二、初步整体候选与它们各自解决的真正问题

| 成品/整体参考 | 已确认的主要能力与原始出处 | 真实定位与必须警惕的差异 |
| --- | --- | --- |
| [OpenHuman](https://github.com/tinyhumansai/openhuman) | 官方称个人记忆+目标、深度研究、浏览器/桌面、工具、多 Agent、持久流程与审批集成。源级入口：[goals/mod.rs](https://github.com/tinyhumansai/openhuman/blob/main/crates/openhuman-core/src/agent/goals/mod.rs)（会话目标作用域与存储）、[orchestration/README](https://github.com/tinyhumansai/openhuman/blob/main/crates/openhuman-core/src/agent/orchestration/README.md)（子任务运行、取消、持久会话）、有对应源文件与测试。 | **整体形态最接近个人外部认知与执行系统**，但 README 明示 Early Beta；许多“超强/高性能”指标为自身宣称，不能按功能清单认定产品已经在用户全部场景稳定运行。GPL-3.0 开源许可在复用代码时需独立审查。 |
| [NousResearch Hermes Agent](https://github.com/NousResearch/hermes-agent) | [Memory](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory.md)、[Skills](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md)、[Cron](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/cron.md)；有 [agent/memory_manager.py](https://github.com/NousResearch/hermes-agent/blob/main/agent/memory_manager.py) 的记忆提供者路由、会话和限制，持久知识与按需技能、能力增量留存、定时任务。 | **完整个人代理、自我形成过程记忆和 Skill 的最佳近场参照之一**；自动 Skill 更新能否真的提高不同任务的专业判断，还需看真实回归和长期错误案例。不要与其他个人历史仓库恰好也叫 Hermes 混为同一源码版本。 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 多端消息接入、控制网关、技能/插件、长期会话和调度；[官方 repo](https://github.com/openclaw/openclaw) 及官方文档。 | 侧重“普通人如何通过已有通信入口让代理持续执行”，**不等于成熟专家推理/知识真值维护系统**；大量接口与权限增加安全审查负担。 |
| [ChatGPT Work](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex) | 官方文档：云端复杂任务、连接文件/应用、研究/浏览器操作、人工审批、计划任务、项目上下文；受套餐、地区及权限限制。 | 应作为**无需自建即可检验真实任务交付的服务成品对照**；不提供独立于供应商的完整开源运行底座，官方功能不等于用户账号每项都能直接用。 |
| [Meta Organizational Second Brain](https://engineering.fb.com/2026/09/02/ml-applications/organizational-second-brain-ai-learns-from-experts/) | 发布方工程实践：专家知识档案、与事实分开的推理 procedures、反馈归因、最小修订、目标案例重放和回归测试；目标是把一次专家纠错长期保存。 | **专业认知内核最相关的完整方法参照**；是特定公司内部领域实践与企业自报效果，不是公开可直接安装产品，不能生搬强制审批与企业组织结构。 |
| [LangChain OpenWiki](https://github.com/langchain-ai/openwiki) | 多仓库知识 Wiki、来源主张、变更/证据；[claim mutations 源码](https://github.com/langchain-ai/openwiki/blob/main/src/claims/core/mutations.ts) 显示原子式证据解析、批量知识主张修订。 | 对现有 GitHub 知识保存→追溯→更新最接近成熟能力；不是个人代理或深入经济机制研究成品；也不是所有个人来源都已在每种宿主集成中支持。 |
| [Letta](https://github.com/letta-ai/letta) | 官方定位为带记忆的长期有状态 Agent 平台；注意 API、部署、源码所在仓库结构与服务化边界可能变化。 | 记忆/状态设计重要参考，但“记住信息”不能等同“会在新问题中专业推断”。 |
| [Dify](https://github.com/langgenius/dify) | 模型/工具管理、Agent、RAG、工作流、应用发布、运维观察。[README](https://github.com/langgenius/dify/blob/main/README.md) 与 `api/`、`web/`、`dify-agent/` 等源码目录。 | **应用开发与交付完整平台参照**；学习如何组织现有能力而非一开始就自建；代码许可带附加条件，具体改造需看许可证。 |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Agent/Harness、工作流、跨模型、存储、工具、Skills、观察/评测、人工干预，提供 Python/.NET 端到端示例。[官方 overview](https://learn.microsoft.com/agent-framework/overview)。 | **工程架构对照**，不是开箱即用的个人外挂大脑；项目不应为了“架构专业”便替换自身业务目标。 |
| [LangChain Deep Agents](https://github.com/langchain-ai/deepagents) | 长时任务规划、子代理、文件后端、可恢复状态、按需技能、跨会话记忆和人机工具审批。 | 强大的 agent harness 候选；它自带通用执行并不意味着拥有用户领域的专业解释与真实结果检验。 |

> **出处归因**：同一个表中“代码存在”“功能已在文档描述”“产品声称”“已对现实任务验证”不是一类证据。初步名单不能称全面审查完十个项目；必须防止新增参考对象直接被当成 ai-d 必需安装的依赖。

## 三、从成熟系统反推 ai-d 已有知识：真正缺的不是一套新层级

- **个人整体工作承接**：OpenHuman/Hermes/OpenClaw 已提供完整产品样本；不用先重造命令中心、定时器、memory、Skill 框架。
- **专业问题和认知质量**：Meta 的第二大脑设计专门区分组织知识、程序性专业方法和反馈纠错，比普通 Agent 外壳更接近 ai-d 原始研究目标；同时别把企业的强制流程变成个人研究的负担。
- **跨项目来源知识与修订**：OpenWiki 主张/证据/来源变化的设计可用于解决 GitHub 研究越来越零散和不可维护。
- **执行交付**：ChatGPT Work 可作为现成闭环的现实参照；Dify/MAF/Deep Agents 是后续确有自有部署需求时的技术选项，不应主导前期认知探索。
- **尚无一个独立来源证明**任何候选已经同时解决“普通自然语言→跨领域专业问题生成→科学机制主动发现→可靠持续知识→跨项目授权行动→长期学习与人的真实自主能力成长”的全套目标。这个组合是研究定位，不是声称市场不存在同类产品。

## 四、对研究推进方式的裁决：先整体案例对照，再深入真正差异

**不要继续按单个小问题逐轮新建机制。** 先选三类完整对照：
1. **个人综合成品**：OpenHuman 与 Hermes Agent（候选外加 OpenClaw），从完整用户目标贯通到成果、长期记忆和恢复；记录产品实际入口→运行方法→核心代码→已有测试/失败。
2. **专业认知系统**：Meta Organizational Second Brain（闭源方法实践）与 OpenWiki（开源知识主张维护），重点知识如何参与判断、被纠正并在下次发挥作用。
3. **真实交付系统**：ChatGPT Work 作为成品基线；需要自部署时再深入 Dify/MAF/Deep Agents 的差别。

用**同一完整场景**对照，而非逐功能清单堆叠：
- 场景 A：用户一句非专业表达 → 恢复历史目标 → 发现原本未知的专业问题 → 深入研究原始资料 → 给出理由和下一项可检查成果。
- 场景 B：形成一份真实成果 → 保存到长期知识 → 新证据/用户纠正 → 正确归因（缺知识还是用错知识）→ 最小修订 → 后续新任务能正确复用。
- 场景 C：跨领域实际工作：AI 代办交付 vs 人的学习/重大决策分开；代理能否处理失败、权限与后续恢复。

**不用一开始就把三个成品连接成一个程序。** 若某个整体产品已经能较好完成场景，优先直接使用或有限调整；如果缺的是认知能力，先借鉴经验证的方法并在现成平台中测试；只有产品整体无法承载且有真实运行需求，才评估自建底座。

## 五、当前到位程度和下一轮

- 这轮已核对主要候选官方来源、项目仓库状态、原始产品描述，并定向查看 OpenHuman 的目标和子代理实现、Hermes 记忆源文件、OpenWiki 主张修改实现、Dify/MAF/Deep Agents 仓库结构；**不是完整目录全审**。
- OpenHuman/Meta/Hermes/OpenWiki 分别具有不同层面的成熟结果，不能只看 Star 数、宣传或单功能 Demo 排名。
- **下一轮优先深入** OpenHuman 与 Hermes Agent 的**完整实际业务链**及已知失败/回归测试，同时用 Meta 的专家知识—推理—纠错闭环检查两者的专业认知短板。只有出现明确的产品缺口，才再选择新的专项论文或安装扩建。
- 成本、真实部署稳定性、非程序员使用门槛、权限模型、能否独立于模型供应商迁移与真实复杂任务效果：目前只有局部资料，尚需深入产品审查；保持 UNKNOWN，不以“已有功能名”当实现通过。
- **本轮只做研究整理，不修改代码、不安装软件、不改变总目标**。
