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
