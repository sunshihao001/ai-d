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

## 六、V0.2｜完整业务链的源码级交叉审查（2026-11-07）

> **本轮不另建架构或产品目录。** 本节是 V0.1 的实质深入；优先检验已有成熟系统的目标→执行→知识→维护→恢复链，而非从各种功能名称推导“完整解决”。GitHub 源码与测试、2026 年社区使用反馈、Meta 工程原始文章相互对照。没有第三方程序真实安装/生产验收。

### 6.1 产品成熟度与角色重判

| 整体候选 | 本轮看到的真实业务链与源码/测试证据 | 直接复用/定位 | 目前必须保留的局限 |
| --- | --- | --- | --- |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | [持久目标说明](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/goals.md)和 [goals.py](https://github.com/NousResearch/hermes-agent/blob/main/hermes_cli/goals.py)：自然语言 `/goal draft` 可起草 completion contract（交付物、验证、边界）；会话内 goal judge 继续尝试，质量门禁可先执行确定性检查；[goal-gate 测试](https://github.com/NousResearch/hermes-agent/blob/main/tests/hermes_cli/test_goal_gates.py)覆盖超时、异常输出及失败反馈。[Memory](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory.md) + [Skills](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md) + [Curator](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/curator.md) 形成记忆/经验/技能维护流程。 | **个人全流程 Agent 首选完整业务对照**：先研究直接使用它的功能，不应复制其整套命令中心和记忆框架。 | `/goal` 主要单会话，不是全局多目标关系网；Kanban 是多卡任务板、两者不同。基础 MEMORY.md 2,200 字符、USER.md 1,375 字符，另有 session_search/Skills；内存保存需要真实 tool call。Curator 的 LLM 整理默认关闭，文档说明一次可有 50–100 次 API 调用；不能直接声称自动知识维护便宜且可靠。 |
| [OpenHuman](https://github.com/tinyhumansai/openhuman) | [goals/mod.rs](https://github.com/tinyhumansai/openhuman/blob/main/crates/openhuman-core/src/agent/goals/mod.rs) 和 [goals/mod_tests.rs](https://github.com/tinyhumansai/openhuman/blob/main/crates/openhuman-core/src/agent/goals/mod_tests.rs)：目标按 thread、agent、profile、workspace 的上下文隔离，明确 goal_set/complete。 [task_ledger.rs](https://github.com/tinyhumansai/openhuman/blob/main/crates/openhuman-core/src/agent/orchestration/running_subagents/task_ledger.rs) 实现任务记录、孤儿任务恢复处理；[approval.rs](https://github.com/tinyhumansai/openhuman/blob/main/crates/openhuman-core/src/agent/tinyagents/middleware/approval.rs) 显示外部副作用的审批中间件、执行结果审计。 | **整体产品体验与运行环境对照**：个人目标/消息/任务/工具/审批连接在一个 app/harness 中，值得考察整套可用性。 | [README](https://github.com/tinyhumansai/openhuman/blob/main/README.md) 仍标 Early Beta；性能指标来自开发方自测；thread goal 不是用户全部长期目标的层级/冲突网络。持久存储失败时某些任务账本降级为 in-memory，保证“可继续处理”≠保证“所有状态永不丢失”。GPL-3.0 代码复用时需考虑许可。 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 现成多渠道、长期消息 Agent、定时与工具/插件能力；[Reddit 实际对比](https://www.reddit.com/r/openclaw/comments/1sky2w1/openclaw_vs_hermes_agent_my_experience_after/) 提及个人对 Hermes 自主性/Token 成本的不同体验；[记忆失效讨论](https://www.reddit.com/r/openclaw/comments/1s7hh01/what_is_the_best_openclaw_alternative/) 暴露长期会话痛点。 | **渠道与普通用户操作路径对照**，需要何种通讯入口可直接借鉴成熟产品。 | 社区自述不是客观性能结论；大量权限与工具接入会提高用户安全配置负担。没有证据证明它自动获得专家级跨学科问题表征。 |
| [DeerFlow](https://github.com/bytedance/deer-flow) | 任务、沙箱、记忆、Goal 续执行与停止状态有源码和离线回归；原[停止故障复现](https://github.com/bytedance/deer-flow/blob/main/backend/scripts/benchmark/goal_loop_stop/README.md)把“任务循环停止”与“真正完成”区别开。 | **复杂长任务与执行可靠性对照**；若以后确定需要自建长时研究程序，再研究其可复用工程。 | 目标完成逻辑不代替专业解释真值；集成复杂度高，不应该先整体迁入文档型 ai-d。 |
| [Meta Organizational Second Brain](https://engineering.fb.com/2026/09/02/ml-applications/organizational-second-brain-ai-learns-from-experts/) | 2026-09-02 官方工程案例：知识文件保存机构立场与适用条件，recipes 保存方法；先问“来源里是否已有正确知识”，据此区分知识缺口、方法错误或专家分歧。最小修改→独立反向审查→定向回放→回归→专家批准更新。 | **专业认知质量的首要完整方法参照**：直接修复 ai-d “知识很多但调用与判断不改善”的核心缺口，不是装一个新模型。 | 内部组织场景、单个合规领域、自报时间/效果，**无可直接安装的完整公共产品**；高度依赖可用专家纠错信号，不能机械复制为个人每次必须审批的制度。 |
| [OpenWiki](https://github.com/langchain-ai/openwiki) | [Grounded Claims](https://github.com/langchain-ai/openwiki/blob/main/openwiki/concepts/grounded-claims.md)、[mutations.ts](https://github.com/langchain-ai/openwiki/blob/main/src/claims/core/mutations.ts) 和 [forgetting.test.ts](https://github.com/langchain-ai/openwiki/blob/main/evals/ledger/evaluator/forgetting.test.ts)：证据有版本，主张操作先解析验证，测试涵盖过时知识是否继续滞留、证据精确引用、评估失败降级等。 | **长期 GitHub 研究资产与代码事实版本维护对照**，可先研究已有 CLI/更新/索引策略，不必重建知识图谱。 | 官方明确：当前 Grounded Claims 仅针对 **repository code wiki 与仓库源码证据**；不是任何 X/论文/个人资料都能自动做同等级主张验证；不是独立个人 Agent。 |

**外部使用反馈只用于定位测试题**：Reddit 2026 年社区反馈提及 OpenClaw 的长会话忘记、Hermes 的 Token 消耗以及 24/7 Agent 持续成本（如[日常比较](https://www.reddit.com/r/openclaw/comments/1sky2w1/openclaw_vs_hermes_agent_my_experience_after/)、[长期遗忘报告](https://www.reddit.com/r/AskClaw/comments/1rci23e/i_spent_5_days_fixing_my_ai_agents_memory_heres/)、[长期运行成本讨论](https://www.reddit.com/r/AI_Agents/comments/1tjs12x/how_are_people_keeping_openclawhermes_agents/)）；不能把论坛观点当全体用户统计。X 讨论用于发现线索，但本轮没有找到足以改变核心选型、可独立核实的额外技术结论，不强行引用。

### 6.2 实际系统从“简单一句话”贯穿到什么程度？

采用一个贯通场景，不按模块名点名：

**场景**：用户仅说“我想让 AI 帮我研究一个陌生领域，提出合适的方向，完成一份工作；以后我说继续时，它要从已保存的认识恢复，并从失败中吸取经验”。

| 业务环节 | 成熟系统中已经存在什么 | 这仍不等于什么 |
| --- | --- | --- |
| 接收自然语言并形成可验证的任务 | Hermes `/goal draft` 将短句展开为可审核的完成合约；OpenHuman 有 thread goal 和 UI | **自动发现用户未意识的更有价值专业问题**，尚无本轮直接验证 |
| 多任务、定时、权限与执行 | Hermes Kanban、cron、quality gate；OpenHuman workflow/subagent/审批；OpenClaw 多渠道 | 程序任务完结不一定等于现实目标达成 |
| 长期保留个人上下文 | Hermes 有极小的核心记忆+会话搜索/Skills；OpenHuman 按需注入记忆并有作用域约束 | 所有历史知识都被正确选择、长期目标没有相互覆盖 |
| 将专家研究真正用于判断 | Meta 区分立场/方法/原始资料，并在调用后归因错误；OpenWiki 记录可查版本证据 | 用更多角色名或更多 RAG 页直接得到专家判断 |
| 持续纠错与长期积累 | Hermes Curator 的历史追踪、审计、回滚；Meta 的最小差异+回放；OpenWiki 的过时主张检测 | 多次自动更新必然改善任务成功率、用户本人学会技能 |
| 面向普通人的可用性 | OpenHuman Desktop、Hermes 多种 UI/聊天入口、OpenClaw 现成聊天渠道，ChatGPT Work 作为托管成品基线 | 不代表各平台具有相同低门槛、成本和安全性；尚无统一真实用户测试 |

### 6.3 比较后的知识变化：重新认识“整体”与“认知内核”

1. **之前低估了 Hermes 的完整度**：不只是记忆和 Skills，它有目标完成合约、质量门禁、跨会话恢复、Kanban、技能整理与审计回滚；部分能力已在代码/单测出现。因此不应该为 ai-d 重新开发同类基本代理底座。
2. **之前可能高估了 OpenHuman 的“Goal”含义**：在已核源码里主要是会话目标作用域和生命周期，并不能自动代表多层的人生/产品长期目标网络。仓库非常庞大，且 Early Beta，优先作为第二候选，而不是因功能更多就定为最优底座。
3. **Meta 是专业认知桥梁而非纯知识库**：区分“该知识已存在却用错”和“源知识本来不存在”，正好对应 ai-d 的真实质量问题。不是把企业的复杂分类/审查原样迁入个人项目；应先在一个真实错误上验证其问题归因能否用得上。
4. **OpenWiki 直接回应当前 GitHub 文件可维护性**：主张不应只靠一段摘要；能有版本来源、过时判断和最小更新，且该机制已有测试。它对外部非代码资料的同等支持仍有限，不能冒称全知识自动维护。
5. **成熟的 Agent 运行时与成熟的专业认知质量是两条轴**：整用代理可以立即获得大量工作能力，但不等于目标解释、未知发现、跨领域迁移与人的长期学习自然获得。保留 ai-d 在这些方向上的独立研究目标。

### 6.4 现阶段真正应该怎样做？

**已经足以初步通过的选择**：
- **优先复用已成熟的 Agent 业务链**，不新造个人命令中心、任务队列、记忆格式或多 Agent SDK；在有实际用户环境时，先比较直接使用 Hermes 与已有托管工具。
- 将专业认知改进从“增新专家角色”改为“已有知识是否足以形成正确判断、何时遗漏、何时使用了错误方法”；对照 Meta 的诊断思路。
- 优先复用 OpenWiki 等可审计知识维护成品处理代码来源，并保留 ai-d 原来对学术/社区/领域知识的适用判断，而不是强迫所有知识进入代码 wiki。

**尚不值得做**：
- 同时安装 OpenHuman、Hermes、DeerFlow、Dify 和独立 Memory/Graph DB 并拼装；
- 宣布任一产品已经覆盖整个普通人生活/学习/职业和专业领域；
- 因某个仓库 Star 数高或 README 的 benchmark 获胜而决定产品主干；
- 新建一套十几层架构，让用户继续靠一次次简单表达纠正产品偏航。

**下一项有最高区分力的验证**：直接拿**一个已知的完整跨阶段问题**，分别查看 Hermes 已有的任务合约/Skill/记忆管理是否能承接“短句→知识→执行→持久保存→后来修订”的全过程，并以 Meta 的故障归因 + OpenWiki 源版本方法检查哪一步不可靠。用已有源代码/公开测试/无敏感凭据的材料；需要实际第三方部署时另做安全和成本审查。此轮不声称全套已跑。

### 6.5 本轮核查索引与证据状态

- OpenHuman 公开源码：`goals/mod.rs` blob `3dceba05358b6dbdb73033ecbcedfb3752e7b09e`；`task_ledger.rs` blob `03cbd66f9a0614200c6bb7e53094487ddd371c6b`；`approval.rs` blob `06c21be604198f5ea738427f3cabe994a15bb78b`；相应 Goal 范围测试已查。
- Hermes 官方源码/文档：`hermes_cli/goals.py`、`test_goal_gates.py`、`memory.md`、`skills.md`、`curator.md`、`curator.py`、`test_memory_review_grounding.py` 已定向读取。**源码存在与单测设计不等于本轮重新运行测试。**
- Meta：2026-09-02 发布方工程原始文章（作者自报 6 周三次迭代中，特定任务专家体验和执行效率改善；未经独立受试者研究，且受组织专用流程限制）。
- OpenWiki：`src/claims/core/mutations.ts`、`evals/ledger/evaluator/forgetting.test.ts`、Grounded Claims 文档已核对，明确其 repository-code evidence 的限定。
- GitHub 元数据：以上仓库均在本轮核查，OpenHuman README 标注 Early Beta；Hermes/OpenClaw/DeerFlow 代码仍活跃。GitHub stars 与仓库提交活跃度不是任务成功率。
- **未完成**：真实安装、连续多日执行、第三方成本账本、OpenHuman 与 Hermes 相同用户任务的受控比较，以及整个 ai-d 目标在任何一套成品中全部实现。

## 七、V0.3｜短句到长期修订的端到端候选裁决（2026-11-07）

**结论：** NousResearch/hermes-agent 列为第一完整产品复用与实跑候选（CANDIDATE，NOT_DEPLOYED）；tinyhumansai/openhuman 为第二完整产品对照；Meta 的 Organizational Second Brain 是专家认知/纠错方法对照，langchain-ai/openwiki 是带源码证据版本的知识维护对照。现阶段不另建个人 Agent 框架、不安装四种系统拼装、不替换 ai-d 或现有 Meme/Blix 业务主体。

### 7.1 真实可复用链路，不把功能名当验收

- **Hermes：** 官方 [目标文档](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/goals.md)、[goals.py](https://github.com/NousResearch/hermes-agent/blob/main/hermes_cli/goals.py) 与 [goal-gate 测试](https://github.com/NousResearch/hermes-agent/blob/main/tests/hermes_cli/test_goal_gates.py) 核查了自然语言起草完成合约（outcome、verification、constraints、boundaries、stop_when）、跨轮续执行、确定性质量门、失败结果反馈；单会话 Goal 与多卡 Kanban 不会自动联动。其 [记忆](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory.md)、[Skills](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md)、[Curator](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/curator.md) 已有保存与维护机制；基础记忆有字符上限，保存并不等于再次调用正确；Curator 的模型合并默认关闭。代码与单元测试存在，不代表本轮重跑或长期任务验证。
- **OpenHuman：** 官方 [Goals & Todos](https://github.com/tinyhumansai/openhuman/blob/main/gitbooks/features/goals-and-todos.md) 区分长期目标、线程目标、任务板，[Agent Harness](https://github.com/tinyhumansai/openhuman/blob/main/gitbooks/developing/architecture/agent-harness.md) 有 checkpoint、子代理、审批及恢复机制；README 自标 Early Beta，产品效果和维护成本仍待实测。
- **Meta：** [2026-09-02 原始工程文章](https://engineering.fb.com/2026/09/02/ml-applications/organizational-second-brain-ai-learns-from-experts/) 核心是区分事实/机构立场与推理 recipes；发现错误时先问来源里是否已有正确知识，分别归因知识缺失、方法使用错误、专家合理分歧；用最小修改、回放、回归和人工审核提高质量。内部案例不能当可直接安装成品。
- **OpenWiki：** [Grounded Claims](https://github.com/langchain-ai/openwiki/blob/main/openwiki/concepts/grounded-claims.md) 和 [Claims Reconciliation](https://github.com/langchain-ai/openwiki/blob/main/openwiki/workflows/claims-reconciliation.md) 将代码主张绑定版本化源码；源变化后确认、更新或撤回。此等级的证据管理目前只适用于 repository code wiki；不能推定所有网页/论文/私有材料享有同样自动核验。

### 7.2 反向验收：本轮新发现的 Hermes 已知风险

- [Issue #133643](https://github.com/NousResearch/hermes-agent/issues/133643)（2026-10-06 提交，本轮检查 Open）：活动目标及其合约在部分 mid-turn 上下文压缩路径未重新注入，可能遗失完成标准和边界。检验：长任务压缩/插话后是否仍坚持相同验收条款。
- [Issue #26986](https://github.com/NousResearch/hermes-agent/issues/26986)（本轮检查 Open）：代理明确报告未完成时，Goal 可能仍被判完成。检验：留下未完成的可观测检查项，必须仍显示 incomplete/blocked。
- [Issue #100954](https://github.com/NousResearch/hermes-agent/issues/100954)（本轮显示 Closed）：旧版不可达目标误判完成。作为回归测试，**不**宣称是当前未修复问题。
- 社区个人体验与历史 Bug 是用来选择测试条件的，不是现版整体成功率统计。

### 7.3 单一完整场景的实际验收合约

**自然语言输入：** “继续上次那个项目，看看别人现成的是怎么做的，帮我把最值得做的先完成；以后有新证据再修正。”

预置隔离资料：两个不同长期目标、一个未完成任务、一份历史研究、一个有意设置的过时主张及后续反证；不使用私密个人数据/交易凭据。

| 链路关卡 | 需要在真实运行中观察到什么 | 首选问题定位 |
| --- | --- | --- |
| T1 目标恢复 | 正确定位当前项目和仍有效的长期目标，不误把旧办法当目标 | Hermes Memory / Session Search；对照 OpenHuman Goals |
| T2 专业表征 | 发现非字面专业问题、合理替代解释和需要的新证据 | ai-d 已有认知研究；Meta reasoning recipes |
| T3 知识选择 | 选择正确来源和适用边界，不注入全部历史提示词 | Hermes Skills；ai-d 旧知识索引 |
| T4 真实执行 | 在授权隔离环境生成工作成果，文件与测试确实存在；失败不能报成功 | Hermes Goal Completion Contract、Quality Gates |
| T5 保存与恢复 | 复查持久化状态；开启新会话仍能识别未完工作与已有成果 | Hermes Memory、Kanban、Sessions |
| T6 新证据修订 | 注入能推翻旧认识的证据，保留来源和旧结论，最小幅修订 | Meta 反馈诊断；OpenWiki 源码版本机制仅作适用范围内参考 |
| T7 迁移与复用 | 再次新会话不复发旧错误，不把另一个项目的修订误当通用规律 | ai-d 迁移/专业认知 |
| T8 故障边界 | 插话、上下文压缩、断线、工具失败或权限拒绝后不越权、不假称完成 | Hermes 已知 Issue；OpenHuman durable task 对照 |

**裁决方式：** T1/T4/T5/T8 表明 Hermes 执行承载存在实质性问题，才用同一任务转向 OpenHuman 对照；T2/T3/T6/T7 表明认知欠缺，才从 ai-d 原位选方法补充并做有区别的同题比较。不能因为单次任务成功就宣称普通人长期综合智能已实现。

**本轮状态：** 源码、原始文档、上游测试设计、公开 Issue 已复核；HERMES_END_TO_END = NOT_RUN；OPENHUMAN_END_TO_END = NOT_RUN；AI_D_UPLIFT = UNKNOWN。GitHub 保存研究不等于在 Hermes 里部署。后续优先完成上述贯通测试；遇到真实付费、凭据或对外副作用需另行授权。

## 八、V0.4｜跨项目能力复用与按需组合，而非指定唯一主体（2026-11-07）

### 8.1 修正上一轮选型偏差：执行环境候选 ≠ 整套项目唯一主体

用户明确补充：目标是“配合不同项目的技能，形成工作流”。因此撤销“先把 Hermes 固定为全系统主体，再给它补其他能力”的暗含路线。Hermes 仍是成熟的执行/Skills 候选，但不预设唯一主体；OpenHuman、OpenWiki、Meta 的不同成果可按任务以不同方式复用。ai-d 的原有多层目标（普通表达、目标演化、专业理解、知识/来源、实际执行、人机协作、纠错与迁移）继续保留，不因‘工作流’替换更高层目标。

**核心区分**：某软件整体可用、某项目导出 Skill、某项目开放 MCP 工具、某项目的专业理论可借鉴，是四种不同程度的复用。不能把研究方法文件谎称成可立即调用的工具，也不能把 MCP 工具调用理解成共享全部 Agent 内部状态。

### 8.2 确认的成熟协议与实际入口

| 可复用单位 | 机制及可检查来源 | 能直接解决 | 不应过度推断 |
| --- | --- | --- | --- |
| 可迁移专业操作知识 | [Agent Skills 规范](https://agentskills.io/specification)：目录、SKILL.md 元数据及渐进式 references/scripts；[2026-10-22 开放治理声明](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) | 在兼容主机之间携带任务知识和操作说明 | “格式兼容”不保证运行环境、依赖、权限、工具名兼容，更不保证会选对 Skill |
| 外部可调用功能 | [MCP 官方 Tool 规范](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)；[Hermes MCP 文档](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp) | 发现和调用独立程序暴露的工具（本地 stdio/远程 HTTP），可限定工具可见范围 | MCP 不自动同步不同项目的长期目标、记忆真值或数据模型 |
| 独立代理协作 | [A2A 官方协议](https://a2a-protocol.org/) | 已部署、支持协议的独立 Agent 可通信及委托 | 并非所有项目天然提供 A2A；没有实际需要不先建多代理网络 |
| 特定宿主原生能力 | [Hermes Plugins](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/plugins.md)、项目已有 API/CLI、[OpenWiki README](https://github.com/langchain-ai/openwiki) | 若已有功能不能通过标准接口完整表达，可在其原有运行环境使用 | 宿主私有插件不自动跨平台可移植；需要真实适配才算“组合成功” |
| 专业方法/知识 | [Meta Second Brain](https://engineering.fb.com/2026/09/02/ml-applications/organizational-second-brain-ai-learns-from-experts/)、[ai-d 知识索引](../knowledge/INDEX.md) | 影响问题表征、知识选择、反馈归因和证据修订 | Meta 的内部经验方法不是可安装的通用 Skill 或 MCP server |

### 8.3 源码与文档确认的三个具体复用方法

**Hermes 的按需加载：**

- [Skills 文档](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md) 明确支持 external_dirs、skill_view 和渐进式内容加载；同名技能按项目/本地/外部目录的优先顺序遮蔽；外部目录若可写，agent 的 skill_manage 可能直接修改它。共享参考资产须保持只读权限并留变更路径。
- [Tool Search](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/tool-search.md) 的 tool_search / tool_describe / tool_call 构成按需工具发现和调用；针对大量 MCP/插件的 schema 避免在每一轮全部注入上下文。**这是工具发现机制，不是专业判断质量的证明**。
- [Skill Bundle 源码](https://github.com/NousResearch/hermes-agent/blob/main/agent/skill_bundles.py)：YAML 中配置 skills 列表与说明，斜杠命令加载多项 Skill。这个 bundle 是显式预设组合，不等于面对陌生问题自动发现、评估和重组未知技能。

**OpenHuman 作为能力提供者，不必整体接管：**

- [Core MCP Server](https://github.com/tinyhumansai/openhuman/blob/main/docs/gitbooks/en/developing/mcp-server.md) 明确提供可选 stdio MCP server，含 memory.recall、memory.fetch、memory.learn、memory.forget、web_search、agent.run_subagent 等工具；其中写入、删除和子代理执行有权限门，部分搜索工具依赖配置。
- [OpenHuman MCP Client](https://github.com/tinyhumansai/openhuman/blob/main/docs/gitbooks/en/developing/embed/concepts/mcp.md) 又可按 AgentSpec 配置服务器/允许的工具，含本地 stub 的握手、发现和调用测试。说明它既能是工具提供者，也能是使用者，**但并未在本轮证明和 Hermes 真实连接成功**。
- 由 Hermes 的标准 MCP 客户端与 OpenHuman 的 stdio 服务端推得“存在可验证的连接路径”，而非断言全功能无缝互操作。具体凭据、权限、启动、数据隔离和部署仍需联调验证。

**OpenWiki 把文档检索做成技能+工具：**

- [OpenWiki 原生 SKILL.md](https://github.com/langchain-ai/openwiki/blob/main/integrations/openwiki/SKILL.md) 规定只有当遇到实际架构/依赖不确定时才检索，且先 search 后 read；不要求每轮预读所有 Wiki。仓库事实须复查当前源码。
- [OpenWiki README](https://github.com/langchain-ai/openwiki/blob/main/README.md) 和 MCP 接口公开 openwiki_search、openwiki_read、工作区列表和文档生成生命周期。现有多个 coding-agent 宿主有预设集成，但**Hermes 不在 README 的官方现成集成名单中**；通过通用 MCP 的潜在接法须实测，不能声称官方即插即用。
- Grounded Claims 的严格版本依据是仓库源代码，不等于自动验证论文、X 帖文、个人长期目标和市场解释。

### 8.4 一个任务怎么选择能力：按实质需要，不建固定 P1→P8 流水线

真实用户只说“继续 AI 项目，研究其他项目的技能能否一起用，把有价值的结果保存下来”。

1. **目标恢复与任务范围**：使用会话提供的上一轮目标和 ai-d 原有知识索引；本轮不启动 OpenHuman/Hermes，是因为在当前 GPT + GitHub + 浏览环境已经具备所需读取、调查和写入权限。
2. **识别专业问题**：不是“有哪些 Skills”，而是“专业知识载体、工具调用、独立 Agent 和闭源研究方法分别怎么复用？什么时候真的有必要运行另一个系统？”这避免无依据地强制拼接。
3. **动态选择能力**：查 Agent Skills 原始规范、Hermes Skills/Tool Search/Bundle、OpenHuman MCP Server、OpenWiki Skill；用 GitHub 连接器读取本项目原文件，再对原位知识进行最小更新。没有请求对外发信、付费、安装或运行陌生代码，因此不执行这些动作。
4. **验收**：需回读 GitHub 文件，确认本节完整落地；同时报告“本轮是当前 GPT 的工具选择与实际 GitHub 提交，不是已运行 Hermes 的动态 Skill 选择实验”。

因此，在当前环境已能完成该任务时，**最优的动态组合可能只使用既有 GPT 能力和 GitHub 连接器，而不是一定调用四个产品**。这本身是重要的“少做但做对”的反证。

### 8.5 可反驳的下一轮测试，而非永久强制流程

- **测试 A：** 给相同短句及相同目标资料，比较“预先硬编码三 Skill 的 bundle”与“仅提供技能索引、由 AI 按需加载”能否识别未知专业问题、是否调用无关技能；记录遗漏、成本和事实错误。注意不同模型/工具集对照条件。
- **测试 B：** 在安全隔离环境把 OpenHuman 的只读 memory.recall 通过 MCP 暴露给 Hermes；验证能否发现、调用并保留来源/任务作用域。若无法联通，记录错误，不新造桥接器前先审查官方 MCP 兼容性。
- **测试 C：** OpenWiki 官方 Skill/检索工具按需读取代码事实并对源码变化修订；检验是否避免以旧版 Wiki 覆盖当前实现。非代码来源不套用它的源码证据声明。
- **测试 D：** 同题的知识分析和任务交付分别比较“普通 Agent”和“调用 ai-d 相应专业认知方法”；只有观察到专业问题生成、证据选择、反证或决策质量有改善，才宣称认知增益。
- **安全/限制：** Skills、MCP server 和外部数据都可能包含不可信内容和可执行依赖；默认只读、来源核查、工具最小授权、对外/高风险需单独批准；共享 Skill 目录不得随意被后台整理覆盖。

**更新裁决：** 本项目当前只需复用现有工具与研究成果，继续以“按任务最小组合”为默认选项；Hermes、OpenHuman 保持被选择和可测试的候选，而非系统上下级关系。只有真实任务证明必要时才建立特定 Skill、MCP 连接或跨 Agent 工作流。此轮未实际安装 Hermes/OpenHuman/OpenWiki，未执行跨代理联调或受控模型 A/B。
