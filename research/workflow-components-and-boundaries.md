# AI 工作流组成部件 × ai-d 通用认知能力：技术证据地图
日期：2026-11-05｜性质：官方原始文档核查＋工程推论｜不是拟建系统架构或已完成组件清单。

## 一、避免三个不同层次混淆
- **认知方法（ai-d 候选内核）**：目标解释、专业问题重构、证据适用性、竞争假设、方案价值排序、目标变化判断、完成与停止判断。
- **工作流运行时（成熟框架提供）**：执行循环、调度、工具适配、检查点、审批、隔离、日志、错误恢复。
- **行业任务本体（每个应用独立）**：市场 Mint 分析、代码审查、项目管理、客服流程、具体数据模型、业务权限。

认知方法可以经文档检索、Skill、MCP Resources 或动态指令进入工作流，但它们本身不保证执行能力。

## 二、部件清单及其权责（供选型，不是要求全部建设）
| 组件 | 真实工作问题 | 成熟方案或规范 | 与 ai-d 的关系 |
|---|---|---|---|
| 用户交互入口 | 接收自然语言、反馈及选择 | ChatGPT / 应用 UI / API | 研究如何低负担共同形成问题；不重建 UI |
| 意图与目标状态 | 区分观察/任务/长目标/新方向 | Goal Reasoning / Goal State Tracking 研究 | **重点研究**目标层级、替代、失效与授权 |
| 目标价值与取舍 | 下一步询问、搜索、执行还是停止 | VOI / metareasoning | **重点研究**成本、信息增益、目标一致 |
| 上下文选择 | 本轮该给模型看什么 | 按需检索、Context Engineering | **重点研究**证据适用与污染边界 |
| 模型/推理引擎 | 生成候选解释与方案 | LLM API / agent runtime | 外部成熟模型；不主张训练新模型 |
| 规划/任务拆分 | 任务顺序、依赖与并发 | LLM planning / 显式 DAG | 研究何时需要规划，何时直接行动 |
| 工具调用 | 真实获取数据或作用于环境 | 函数工具 / MCP tools | 不重造工具协议；研究调用选择与边界 |
| 可复用 Skill | 包装领域任务说明和资源 | Agent Skills SKILL.md | 未来条件满足时将经过验证的知识打包 |
| 知识/文档资源 | 有依据的专业资料供模型引用 | GitHub / 检索 / MCP resources | ai-d 当前主要载体 |
| 任务状态/检查点 | 中断、故障、重启后继续 | LangGraph checkpointer / SDK RunState | 作为外部基础设施；不与知识库混同 |
| 长期记忆与经验 | 跨轮偏好、事实、已检验经验 | session / store / task history | **重点研究**冲突、失效、选择性复用 |
| 角色交接与协作 | 多 Agent 协同或转交任务 | SDK handoff / A2A | 需要时复用，不预设必须多 Bot |
| 调度/触发 | 定时或事件驱动启动工作 | Cron / queue / runtime | 外部运行能力，不等于模型自动思考 |
| 沙箱和凭证 | 隔离不可信代码、权限控制 | container / permission model | 研究治理原则；由执行环境强制执行 |
| 人类审批与停止 | 重大目标/支付/发布/删除等边界 | HITL interrupts / approvals | **重点研究**价值选择与行动授权 |
| 证据检查与反证 | 结论是否被来源支持 | 规则、工具核验、独立评审 | **重点研究**来源-论断-反例链 |
| 可观测性/审计 | 发生了什么、失败在哪一步 | tracing、日志、事件记录 | 研究诊断与是否可复核 |
| 评测与质量提升 | 新方法是否比无增强更好 | task eval、固定输入、盲评、消融 | **重点研究**；不以文件数或自评分替代 |
| 人类决策呈现 | 用可理解的选项解释取舍 | 方案比较 / 对比解释 | **重点研究**不把选择负担重新推给人 |

## 三、不是所有东西都要叫“内核”
**基本关系**：
用户目标/反馈 → 目标理解/认知方法（ai-d 可研究） → 方案与行动选择 → 已有运行时/Skill/工具执行 → 事实与测试结果 → 认知修订和目标候选 → 人类重大方向选择。

- MCP 提供工具、资源、提示词与服务发现的互通，不自动解决目标判断。
- Agent Skills 负责可选择加载的技能知识、脚本与资料，不能直接替代权限/状态/执行平台。
- A2A 负责独立 Agent 间的能力发现与任务合作，不等于共享可信知识库。
- OpenAI Agents SDK 和 LangGraph 提供不同方式组织执行与状态；不应同时自建一套重复的 Agent runtime。
- 真实专业思考依赖领域知识与证据；“统一认知原则”不应强制所有领域采用相同推理结论。

## 四、最值得研究的接口不是 SDK API，而是认识如何进入决策
对一个知识资产，未来可以考察五项：
1. 什么原始问题或信号触发查阅？
2. 它包含什么有来源的主张与可重用方法？何时会失效？
3. 它改变了模型的哪个具体候选解释、选择或行动？
4. 能否用真实案例证明其增益，而非把检索内容复述？
5. 如果效果不佳，如何不加载、撤销、保留历史并回退？

这一“知识—任务适用—行为变化—实际效果”连接，才是 ai-d 与工具层之间可能形成的通用接口。当前只是概念接口，未开发实现。

## 五、什么时候需要新增程序？
- 只需 GPT 按需读取研究：优先 GitHub Markdown 与公开来源索引。
- 多个 Skill 经常需要相同方法：可考虑 Agent Skills 规范的单一可复用 Skill 包。
- 多客户端需要统一检索资源：可考虑 MCP Resource Server；先比较直接 GitHub 检索的成本。
- 需要长时间无人值守、暂停恢复和运行审计：选成熟 Agent SDK、LangGraph 或运行平台；不先造 runtime。
- 需要多供应商独立 Agent 协同：再评估 A2A 适配，不因为协议存在就采用。
- 需要可视化复杂目标演化、决策记录：先判断 GitHub 文档/Issue 是否已经足够。

## 六、可核查官方资料
- https://openai.github.io/openai-agents-python/
- https://openai.github.io/openai-agents-python/human_in_the_loop/
- https://openai.github.io/openai-agents-python/tracing/
- https://github.com/langchain-ai/docs/blob/main/src/oss/langgraph/interrupts.mdx
- https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/docs/2026-07-28/learn/architecture.mdx
- https://a2a-protocol.org/dev/specification/
- https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx
- https://www.anthropic.com/engineering/building-effective-agents

**边界**：以上官方文档是功能与协议事实来源，不是本仓库已完成集成、验证安全或实际运行的证据。
