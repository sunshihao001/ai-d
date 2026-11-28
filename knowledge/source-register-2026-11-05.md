# 2026-11-05 原始来源登记：人机协调与工作流认知研究
此表为按问题选择文献的入口。类型分为同行评审/预印本/研究综述/官方技术资料；**文章存在不等于结论已在 ai-d 的目标环境里复现**。日期以检索日 2026-11-05 为参考。

| ID | 来源/日期与类别 | 当前支持的具体认识 | 局限 |
|---|---|---|---|
| E01 | IEEE RA-L 2026, I've Changed My Mind；同行评审 https://ieeexplore.ieee.org/document/11299413/ | 协作中人的目标改变，可以成为显式检测研究对象 | 机器人烹饪任务，不是 LLM 长期项目 |
| E02 | AAAI 2026, La VIDA；会议摘要 https://ojs.aaai.org/index.php/AAAI/article/view/41367 | 目标失效后可探索新目标形成机制 | 摘要性质，不能推广自主目标权 |
| E03 | CHB Artificial Humans 2026；182参与者研究 https://www.sciencedirect.com/science/article/pii/S2949882125001306 | 目标一致与自主性共同影响人机合作体验 | 部分指标/特定交互设计 |
| E04 | VoI Human-Agent Communication 2026；预印本 https://arxiv.org/abs/2601.06407 | AI 何时询问人可考虑信息增益与打断成本 | 四个场景，不是跨任务通用最优保证 |
| E05 | ACL Findings 2026 Memora；同行评审 https://aclanthology.org/2026.findings-acl.1337/ | 长期记忆应该测记忆失效和变更，而不只是回忆准确 | 任务集与代理样本边界 |
| E06 | STALE 2026；预印本 https://arxiv.org/abs/2605.06527 | 隐式否定旧记忆会导致旧状态继续影响下游行为 | 特定基准，未在本项目复现 |
| E07 | ACL Findings 2026 Task Matters；同行评审 https://aclanthology.org/2026.findings-acl.202/ | 历史/外部上下文的效用依赖具体任务 | 实验模型和任务限制 |
| E08 | EMNLP 2026 TAME；同行评审 https://aclanthology.org/2026.emnlp-main.2100/ | 经验积累也可能损害某些可信表现，需评估经验贡献 | 单篇方法结论不能当成通用保证 |
| E09 | Inference-time Budget Control 2026；预印本 https://arxiv.org/abs/2605.05701 | 搜索预算与下一步行动价值应该共同决定检索/提交 | 多跳 QA 基准 |
| E10 | Beyond Final Scores 2026；预印本 https://arxiv.org/abs/2608.13417 | Agent 完成任务与真正研究创新/经验复用是不同评价维度 | 7 模型36项研发任务 |
| E11 | OpenAI Agents SDK；官方文档 https://openai.github.io/openai-agents-python/ | Agent/Tools/Handoff/Session/Guardrail/HITL/Tracing 可复用 | 功能文档非本项目实跑 |
| E12 | LangGraph Interrupts/Persistence；官方文档 https://github.com/langchain-ai/docs/blob/main/src/oss/langgraph/interrupts.mdx | 可用检查点和外部输入恢复长任务 | 要求明确线程状态、可能重复执行前置步骤 |
| E13 | MCP 2026-07-28；官方协议 https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/docs/2026-07-28/learn/architecture.mdx | Tools/Resources/Prompts 分开，协议与运行时不同 | 协议不代替目标对齐 |
| E14 | Agent2Agent A2A 1.0；官方协议 https://a2a-protocol.org/dev/specification/ | 独立 Agent 的能力发现、协作任务和数据互通 | 不自动共享事实真实性与授权 |
| E15 | Agent Skills；公开规范 https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx | SKILL.md＋按需加载，可减少总上下文规则负担 | 规范本身不证明某 Skill 有效 |
| E16 | Anthropic Effective Context Engineering 2025；工程资料 https://www.anthropic.com/research/effective-context-engineering-for-ai-agents | 重点是选择适合当前任务的上下文 | 作者工程建议非严格跨模型实验 |
| E17 | Anthropic Building Effective Agents 2024；工程资料 https://www.anthropic.com/engineering/building-effective-agents | 简单实现优先，区分固定工作流和动态 Agent | 原厂经验不是通用定律 |
| E18 | TACL 2026 Goal Alignment in User Simulators；同行评审 https://aclanthology.org/2026.tacl-1.38/ | 目标状态可跨多轮持续追踪和评估 | 用户模拟器不等同真实用户协作 |
| E19 | Human-AI Complementarity 2026；研究综述 https://pmc.ncbi.nlm.nih.gov/articles/PMC12983458/ | 人机协作可从推理、记忆、注意与元协调看互补性 | 概念框架，不是 ai-d 的实证效果 |

## 内部历史资产边界
原有七八月概念卡、A01 收束、10月去约束研究、11月 V2.0 和 Solana 目标演化案例仍可由原文件或原仓库按需定位。当前公开仓库**只记录方法关系和未识别个人的案例说明**，不复制私人原文或他人受版权保护的整篇论文。

## 新文献后续怎么写入
新增来源只有在与当前目标/知识/行动判断有明确关联时才登记。必须说明：支持的主张、研究方法/证据等级、局限、潜在反证、对哪个实际任务或决定产生影响。若只是技术流行名称，保留搜索线索，不提升为专业知识结论。

## 2026-11-28｜强模型利用与一线实践
本批检索并读取原文/公开讨论可见内容；来源按性质分开，非独立本地复现。访问受限的X全回复链仍待进一步核查，不把转述当已核原帖。
| 来源 | 类型与可用内容 | 局限与归位 |
|---|---|---|
| [OpenAI: AI for self empowerment](https://openai.com/index/ai-for-self-empowerment/)；[能力积压](https://openai.com/index/how-countries-can-end-the-capability-overhang/) | 官方使用研究与观点；能力与利用的落差 | 使用行为不等于任务收益；K-GOAL |
| [Anthropic: reflect with Claude](https://www.anthropic.com/news/reflect-with-claude) | 官方框架：委托、表达、鉴别、责任 | 能力发展框架，非本项目实验；K-PROMPT/K-LEARN |
| [Ethan Mollick: The Overhang](https://www.oneusefulthing.org/p/the-overhang) | 学者实践观点；模型利用与人的优势 | 非因果效果；K-GOAL/K-UNKNOWN |
| [Felix Rieseberg: How to be more ambitious](https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/) | 工程实践；目标高度、专业深度、速度与广度 | 作者经验，依赖现实工具条件；K-EXPERT/K-CAP |
| [Geoffrey Litt: Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html)；[HN评论](https://news.ycombinator.com/item?id=49290299) | 原作者示范、社区异议；理解工具与低层技术债 | 评论为自述，图示不能替代实测；K-LEARN/K-POLLUTE |
| [Vaccaro等，2024，人机组合元分析](https://www.nature.com/articles/s41562-024-02024-1) | 同行评审；人机组合与最佳单方比较 | 任务异质、非当前GPT专门测试；K-LEARN/K-EVAL |
| [Microsoft: Lost in Conversation](https://www.microsoft.com/en-us/research/publication/llms-get-lost-in-multi-turn-conversation/) | 模拟多轮任务；早期假设与不可靠性 | 非当前产品实测；K-CONT/K-INTENT |
| [Simon Willison: LLMs for code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/) | 原作者工作方法与代码示范 | 个人技术经验不可直接外推；K-CAP/K-EXPERT |
| [Reddit：如何重访思想](https://www.reddit.com/r/ChatGPT/comments/1refk84/if_you_think_in_chatgpt_now_how_do_you_revisit/) | 讨论及回复；摘要重用、保存与重访区别 | 自述，压缩会丢失细节；K-CONT |
| [Reddit：AI作为思考伙伴](https://www.reddit.com/r/AIAssisted/comments/1strqd6/using_ai_more_as_a_thinking_partner_than_a/) | 讨论及回复；反驳、共同思考、幻觉异议 | 自述，不能证明认知机制；K-LEARN/K-UNKNOWN |
| [Brosch等：Task Expansion with Generative AI](https://digitaleconomy.stanford.edu/publication/task-expansion-with-generative-aiexperimental-evidence-on-middle-skilled-early-career-workers/) | 673名IT学徒现场实验，超训练范围任务26–31个百分点 | 工作论文；不外推长期技能或行业收益；K-LEARN |
| [Wiles等：temporary upskilling](https://doi.org/10.1038/s41562-026-02566-6) | 487名咨询人员随机实验；辅助陌生专业任务的能力扩张 | 本轮摘要可读，全文入口受限；独立技能与辅助绩效分开；K-LEARN |
| [Mollick原文评论](https://www.oneusefulthing.org/p/the-overhang/comments) | 对自主性与鉴别力的讨论线索 | 可见片段，非全回复审查；K-UNKNOWN |
