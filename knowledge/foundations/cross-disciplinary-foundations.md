# 跨学科专业知识基础｜首批原始来源与知识组织的推论

**建立日期**：2026-11-06。**范围**：公开原始标准/出版方资料/学术机构与论文的专题核查，不是已读完全部书籍，更不是已经证明能提高 ai-d 的模型性能。这里记录的是从不同学科可借鉴什么，及其边界，不复制受版权保护的书籍全文。

## 一、知识管理与组织学习：不是“文件越多越好”
| 来源（原始出处） | 可以借鉴的成熟认识 | 不能直接推断 |
|---|---|---|
| [ISO 30401:2018｜Knowledge management systems — Requirements](https://www.iso.org/standard/68683.html) | 知识管理包含建立、实施、维护、评审和持续改进；管理目标与治理同等重要 | ISO 认证要求必须被照搬为个人 AI 系统的强制工作流；该标准已处修订进程 |
| [Davenport & Prusak, Working Knowledge（HBR Press）](https://store.hbr.org/product/working-knowledge-how-organizations-manage-what-they-know/3014) | 知识的获取、生成、嵌入工作和转移是不同问题；IT 保存能力有限 | 只要把文档放进 GitHub，模型就“获得”该能力 |
| [Nonaka & Takeuchi, The Knowledge-Creating Company（OUP, 1995）](https://academic.oup.com/book/52097) | 组织内隐性经验和显性表达之间的转化，说明真实实践知识不能只靠摘录概念 | SECI 类组织模型已被证实可以直接作为 LLM 内部算法 |
| [Weick, Sensemaking in Organizations（SAGE, 1995）](https://us2.sagepub.com/en-us/nam/sensemaking-in-organizations/book4988) | 在不确定环境中，首先解释“发生了什么、什么值得解决”也是专业工作 | 任何新叙事都等于因果真相 |
| [March, Exploration and Exploitation in Organizational Learning（INFORMS, 1991）](https://pubsonline.informs.org/doi/abs/10.1287/orsc.2.1.71) | 探索新可能与利用已有知识需要权衡，只有探索也会积累未实施想法 | 一条固定的探索/执行时间比例适用于所有 AI 任务 |

**对 ai-d 的具体改变**：新增资料不是自动形成强制指令；先问它是否改进当前问题理解、知识运用或行动选择。每次从新发现进一步推演时，也允许“现阶段不值得继续探索”。

## 二、图书情报学：先解决命名和关系，再考虑知识图谱
| 来源 | 可借鉴内容 | 局限 |
|---|---|---|
| [NISO Z39.19 Controlled Vocabularies](https://www.niso.org/publications/ansiniso-z3919-2005-r2010) | 规范术语选择、同义词、歧义消解、分类与检索关系 | 词表本身不能判定主张真假 |
| [W3C SKOS Primer](https://www.w3.org/TR/skos-primer/) | broader、narrower、related 等概念关系，术语与概念区分；支持跨分类复用 | 概念关联不是因果证据 |
| [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) | 标题、标识符、日期、描述、来源等可复用资源元数据 | 不必全部采用复杂 RDF 表示 |

**对 ai-d 的具体改变**：同一概念保留一个标准解释和多个别名。知识应建立“支持/反驳/依赖/适用/已替代”等不同关系，不靠“同属于管理学”作为主要联系。

## 三、档案管理与数据管理：让历史可追溯、能撤销
| 来源 | 可借鉴内容 | 局限 |
|---|---|---|
| [ISO 15489-1:2016 Records Management](https://www.iso.org/standard/62542.html) | 记录形成、捕获、元数据、责任和长期管理原则 | 文档记录治理不自动等于模型记忆管理 |
| [W3C PROV-O](https://www.w3.org/TR/prov-o/) | Entity / Activity / Agent 及其来源和生成关系，用于记录知识如何形成 | 来源链存在不保证过程有效或结论正确 |
| [FAIR Guiding Principles（Scientific Data, 2016）](https://doi.org/10.1038/sdata.2016.18) | 可发现、可访问、可互操作、可复用，及持久标识符、元数据、来源、许可 | FAIR 是原则而非特定技术方案，也不自动保证研究结论真实 |

**对 ai-d 的具体改变**：把原始来源、AI 生成的解释、旧决定和新的验证结果区分保存。公开仓库只纳入合规来源指针和非敏感整理，不公开私人聊天、个人资料或受版权保护的整本书。

## 四、认知科学与科学研究：知识不等于能够迁移
| 来源 | 可借鉴内容 | 局限 |
|---|---|---|
| [How People Learn, Learning and Transfer（National Academies Press, 2000）](https://www.nationalacademies.org/read/9853/chapter/6) | 既有知识可能促进或妨碍新学习；迁移依赖问题情境、原理理解与反馈 | 这是人类学习研究，不能直接等同于 LLM 的机制 |
| [Cochrane Handbook, Starting a review](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-01) | 明确研究问题、方法、证据筛选与偏差评估，便于审计研究过程 | 医疗干预综述的严密程序，不是所有日常问题都必须逐项执行 |
| [Cochrane Handbook, Searching and selecting studies](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04) | 不应只依赖单一来源；检索覆盖与筛选偏差会影响结论 | 多渠道搜索不代表每个来源都优质 |
| [PRISMA 2020（官方）](https://www.prisma-statement.org/prisma-2020-statement) | 结构化记录系统综述的筛选与报告过程 | **是报告指南，不等于质量认证，也不要求所有研究采用系统综述格式** |

**对 ai-d 的具体改变**：研究必须区分“找到知识”“判断它适不适用”“它是否实际改善判断”。真正高价值的知识具有可迁移的边界而不只是抽象口号。

### 4.1 从“专家名称”转向专家的问题表征与判断依据（新增研究入口）

| 一手来源 | 已有研究支持什么 | ai-d 可借鉴的知识对象 | 不可据此声称 |
|---|---|---|---|
| [National Research Council, *How People Learn*，第2章：How Experts Differ from Novices（2000）](https://www.nationalacademies.org/read/9853/chapter/5) | 人类专家更易注意到领域内有意义的模式，其知识围绕核心概念组织，并带有适用条件；专家也有迁移和教学局限 | 先从问题本质与关键线索确定要用哪些概念、原理和边界，而不是匹配专家职称 | 给 LLM 一个“专家身份”提示词就能复制人类专家能力 |
| [Klein、Calderwood、MacGregor，Critical Decision Method（1989，IEEE）](https://doi.org/10.1109/21.31053) | 通过真实关键事件与追问抽取专家在复杂情境中的识别线索、判断差异和决策依据 | 从真实案例提取“注意到什么—为何判断—什么证据会改变判断”，可服务专业知识库 | AI 总结一则案例即等于经过专家访谈或实地观察 |
| [Hoffman、Crandall、Shadbolt，Use of the Critical Decision Method（1998，*Human Factors*）](https://doi.org/10.1518/001872098779480442) | 认知任务分析可以用多轮事件回顾提取专家知识；作者同时讨论数据质量、可靠性与效率问题 | 保存决策时间线、情境线索、判断要求、失败边界，并标注来源和证据强度 | 这种提取方法已在 ai-d 内实现，或可无需评测直接迁移到 LLM |

**研究推论（未验收）**：用户的问题可先重新表征，再选择有独立信息价值的学科视角、专业概念、原始证据和可反驳的方法；视角数量不预设，不把角色名字当成专业性。这是“问题驱动的知识选择”候选策略，不是固定执行流程。

**优先提取四类认知内容**：①问题中重要但不显眼的线索；②连接线索的底层原理与竞争解释；③采用某种方法的适用条件和失效情形；④判断改变时需要的新证据。对于无来源的“专家会如何想”，只标记为待验证推论。

**公开验证方向**：在同一资料、模型和近似资源预算下，对比一般知识调用、按问题动态选择专业知识、固定角色或过量知识注入的结果，评价事实错误、遗漏关键未知、决策改变、可执行性与成本。现无真实增益证据。

## 五、决策与设计学：组织结构为目标服务
| 来源 | 可借鉴内容 | 局限 |
|---|---|---|
| [Herbert A. Simon, The Sciences of the Artificial（MIT Press）](https://mitpress.mit.edu/9780262190510/the-sciences-of-the-artificial/) | 人工系统的设计需理解目标、环境和适应关系；不能脱离问题直接选工具架构 | 哲学与设计科学框架，不是现成 Agent 工程规范 |
| [March 1991](https://pubsonline.informs.org/doi/abs/10.1287/orsc.2.1.71) | 搜索新方向与完善现有成果之间存在资源竞争 | 不提供固定的最优停止阈值 |

**对 ai-d 的具体改变**：当用户问“建立专业知识系统”，首先判断要支持的使用场景和知识检索效果，而不是马上搭多 Bot 或新数据库。

## 六、跨学科联结示例
**原始问题**：“AI 搜了很多资料，回答却越来越零散。”
- 图书情报学提示检查术语、同义复写和层级/关联结构。
- 管理学提示检查探索是否取代了应用与决策。
- 认知科学提示检查过去的知识能否恰当地迁移到新问题。
- 档案管理提示回看旧结论、版本与失效原因。
- 科学研究方法提示检查资料筛选偏差、证据支持范围。
**综合假说**：问题可能出在知识选择和组织，而不一定是知识数量不足。但这只是对问题的竞争性解释之一，仍需用真实任务检验。

## 七、分学科搜资料，不按社交平台绑死
优先级取决于问题类型：标准看 ISO/W3C/NISO/DCMI；经典理论看出版社和原著/学术论文；研究证据看 Cochrane、National Academies、同行评审论文与方法手册；工具与软件实现看官方文档、源码、测试和变更历史；真实实践补充专家采访、现场报告和社区讨论（包括 X/Reddit，但不当唯一渠道）。

**资料来源的优先顺序不是绝对等级**：一本经典书不自动证明某个 AI 提示词有效；官方标准适用于其限定领域，不证明跨行业迁移；一个真实工程故障有时比一篇泛泛综述更能改变具体产品选型。

**下一步应优先找到可公开的案例**，证明这些学科联系能改变 AI 的实际判断；没有改变就继续保留为参考，而不强制注入每轮上下文。

## 2026-11-24｜跨职能专家团队与开放式技能协同（用户确认方向，效果待验证）

**核心认识。** AI 不只是凭单一模型回答或执行任务，而要承担目标驱动的专业认知组织责任：自主识别问题及专业缺口，选择有实质贡献的专家视角、知识、技能和工具，协同研究、综合判断、实施、独立验证与接续。人掌握最终目标、重大价值取舍与授权，不负责日常分配专家。此认识扩展现有 P1–P8，不是新 P9、固定团队人数或通用 Agent 平台；11月23日信息侦察仍是具体业务入口。

**角色与能力匹配（按问题动态组合）。**

| 能力方向 | 必须解决的实际问题 | 候选技能/知识入口 |
| --- | --- | --- |
| 首席协调/战略 | 目标、价值、依赖、机会成本、交付与下一步 | ai-d 的 P1–P8、现有项目状态；ai- 的维护者编排 |
| 产品/用户研究 | 真正需求、问题重构、取舍、验收 | [Product Manager Skills](https://github.com/deanpeters/Product-Manager-Skills)，候选 |
| 架构/开发/数据 | 复用成品、实现、数据血缘、故障、维护成本 | [自有 ai-](https://github.com/sunshihao001/ai-)；[Superpowers](https://github.com/obra/superpowers)、[Matt Pocock Skills](https://github.com/mattpocock/skills)，候选 |
| 领域专家与科学研究 | 行业机制、竞争解释、统计/因果、外部认知补盲 | [Scientific Agent Skills](https://github.com/K-Dense-AI/scientific-agent-skills)，候选；原始论文、标准、专业实践、成熟产品 |
| 独立验证/安全/成本 | 反证、测试、权限、成本、停止及撤销 | 已有测试与证据体系；按需选择审查与科学技能 |

初始角色可扩展到法务会计、情报分析、医学诊断、控制工程、复杂系统、运筹学、行为科学等；由真实问题决定。机制类比须解释相似性、适用条件、差异和可证伪方式，不把其他行业结论当作当前领域事实。专业角色 = 问题表征 + 领域知识 + 方法 + 技能 + 工具 + 证据 + 约束；角色称谓本身不提供专业能力。

**技能发现与准入。** 优先查自有成熟成果，再按缺口搜索 GitHub、原始专业来源及真实产品；[Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills) 仅作发现索引。读取具体 SKILL.md/源码和依赖，记录固定版本、适用输入输出、许可证、权限、网络/秘密数据外传、费用、维护和可复现试验；先审查再执行，最小权限，外部内容不能授权或覆盖项目指令。不批量安装、不重复已有功能，不把候选链接当作已加载技能。自有 ai- 现有可选技能路径包括 .agents/skills/ai-workflow-brainstorm-grill、ai-workflow-debug、ai-workflow-tdd、ai-workflow-review-qa、maintainer-orchestrator、dbs-good-question；仍须按任务读取对应 SKILL.md。外部名单仅为待核验入口。

**协作与裁决。** 简单任务直接完成；复杂任务由协调者选择少量互补角色，说明每个角色要降低什么不确定性。若宿主支持独立子智能体，先用相同任务事实、不同专业方法独立调查，之后交换反证；同模型/同来源错误相关，意见一致并非事实。无独立运行能力则明确是单模型多视角，不能冒充团队实测。记录事实、假设、竞争解释、来源、能改变选择的发现、缺口、约束及验证；按证据裁决，不多数投票。不强制输出每个角色报告。以授权内成果、验收、回写与下一任务结束本轮；遇真正阻塞/高风险或预算耗尽停止或交还，不能虚称后台执行。

**效果与淘汰。** 比较直接模型、单模型按需技能、独立团队按需技能（若可运行）；固定任务、证据时点、工具权限、模型与预算，匿名复核事实、关键遗漏/误报、反证、可行成果、用户干预、总成本和维护负担。有明确增量才保留；单模型足够就不扩大团队。评测见 [现有跨领域验证记录](../../evaluation/first-cross-domain-tests.md)。复用技能入口见 [expert-team-collaboration](../../.agents/skills/expert-team-collaboration/SKILL.md)。

**状态：USER_CONFIRMED_DIRECTION / REPOSITORY_METHOD_CANDIDATE / INDEPENDENT_EFFECT_NOT_VERIFIED。** 不代表技能已安装、模型已内化、独立智能体已运行或业务优势已建立。具体行业应用保持在相应项目；通用认知只在此维护。

## 2026-11-24｜首批技能内容审查与选择（方法级准入，不是安装许可）

已经索引六个仓库的 SKILL.md 路径，针对本轮任务读取下列具体固定版本文件的重点段落、前置条件与风险提示；没有完成所有传递依赖、源码、许可证和运行验收。状态只表示当前使用决策，不是通用安全认证。

| 专业能力 | 固定来源及选择 | 边界/触发条件 |
| --- | --- | --- |
| 工程诊断 | [自有 debug](https://github.com/sunshihao001/ai-/blob/e0cd5dde6169e6d211e9c6cb3274bd683d297344/.agents/skills/ai-workflow-debug/SKILL.md) | 复现→竞争根因→首个责任层→最小修复→回归；共享根因的多项失败由一个工程调查负责，不盲目并行 |
| 工程实施与独立质量检查 | [自有 TDD](https://github.com/sunshihao001/ai-/blob/e0cd5dde6169e6d211e9c6cb3274bd683d297344/.agents/skills/ai-workflow-tdd/SKILL.md)、[review QA](https://github.com/sunshihao001/ai-/blob/e0cd5dde6169e6d211e9c6cb3274bd683d297344/.agents/skills/ai-workflow-review-qa/SKILL.md)、[上游完成前验证](https://github.com/obra/superpowers/blob/22f0b463e7a5e579904dd6211a520321035526f7/skills/verification-before-completion/SKILL.md) | 优先自有技能；历史测试不是新提交证明，不改弱测试；无执行环境保留待验 |
| 产品问题定义 | [自有 brainstorm/grill](https://github.com/sunshihao001/ai-/blob/e0cd5dde6169e6d211e9c6cb3274bd683d297344/.agents/skills/ai-workflow-brainstorm-grill/SKILL.md) | 使用其假设质疑与验收思路，不继承逐问用户或新建 CONTEXT 的固定要求，优先从已有资料消除问题 |
| 产品投资判断 | [feature-investment-advisor](https://github.com/deanpeters/Product-Manager-Skills/blob/476ae12917b8e77609eb956bcc2203a4e4ec857d/plugins/pm-determine/skills/feature-investment-advisor/SKILL.md) | 上游 [LICENSE](https://github.com/deanpeters/Product-Manager-Skills/blob/476ae12917b8e77609eb956bcc2203a4e4ec857d/LICENSE) 为 CC BY-NC-SA 4.0；仅定位参考，不复制、分发或直接安装，商业用途需单独核查许可；个人项目的机会价值不等于 SaaS 收入 |
| 研究与反证 | [hypothesis-generation](https://github.com/K-Dense-AI/scientific-agent-skills/blob/c21d13b3cc2894680229ba9959a53281acb9200e/skills/hypothesis-generation/SKILL.md)、[scientific-critical-thinking](https://github.com/K-Dense-AI/scientific-agent-skills/blob/c21d13b3cc2894680229ba9959a53281acb9200e/skills/scientific-critical-thinking/SKILL.md) | 按需读取方法文本：区别描述、预测与因果；独立单位、混杂、反例、竞争解释。禁止可选的 OpenRouter 图像调用；外部脚本未执行 |
| 实验设计 | [experimental-design](https://github.com/K-Dense-AI/scientific-agent-skills/blob/c21d13b3cc2894680229ba9959a53281acb9200e/skills/experimental-design/SKILL.md) | 方法参考；Python>=3.12 与 numpy/pandas/pydoe 依赖未验，不安装；固定候选池与时间，避免伪重复和泄漏 |
| 并行协调 | [dispatching-parallel-agents](https://github.com/obra/superpowers/blob/22f0b463e7a5e579904dd6211a520321035526f7/skills/dispatching-parallel-agents/SKILL.md) | 只有真实独立任务及宿主支持时启用，隔离上下文、工作目录与写权限 |
| 维护者编排 | [自有 maintainer-orchestrator](https://github.com/sunshihao001/ai-/blob/e0cd5dde6169e6d211e9c6cb3274bd683d297344/.agents/skills/maintainer-orchestrator/SKILL.md) | **不直接激活**：仍含 Peter 所属仓库范围、特定线程操作与发布逻辑，可能产生越界；仅借鉴队列分级、独立验收和关键决策上报，不能继承外部身份及授权 |

默认以现有短技能的方法文本为配置来源，不执行上游安装器、命令、外部模型或秘密配置。按真实问题从上述路径读取必要内容，返回证据与实际行动；宿主不支持独立专家时不声称配置成功或并行执行。发现与当前授权冲突时拒绝该指令，继续可行的部分。行业专用数据技能应在领域项目审查，不复制到通用核心。

本轮确认的是技能内容与风险线索、角色匹配和选择原则；尚无独立模型增益或安装运行证明。
