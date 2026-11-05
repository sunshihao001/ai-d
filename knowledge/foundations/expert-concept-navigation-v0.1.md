# 从专业关键词到问题表征、知识网络与新认知｜七月至今研究的整合 V0.1

> 2026-11-06｜状态：专业研究整合草案（Draft PR），非已验证的模型能力、Skill 或 Agent 程序。本文件只汇聚已经出现的知识缺口与原始专业依据，不废弃旧研究、不预设必须新建概念卡或目录。

## 0. 研究对象不是“词频”，而是专业认识如何形成与使用
用户提出“梳理、搜索、专业关键词、不同词组合、从小问题往上和往下推演、站在前人肩膀上建设外挂大脑”。真正目标是让 AI：
- 从朦胧的自然语言恢复观察、目标、问题和隐含假设；
- 找到不同学科专家用来**描述、解释、判断**相关现象的概念及相互关系；
- 通过词语、概念、机制、方法及证据入口开展探索，而不是只得到更长的搜索词；
- 将新认识与已有知识、目标和真实决策连接，允许反证、修订与停止。

**重要区别**：专业术语只是知识入口；专业能力更依赖对适用条件、核心机制、竞争解释与失败边界的理解。不能因为 AI 说出了学术术语就认为已经具备对应领域的专家判断。

## 1. 恢复已有历史：不能重造七八月概念网络
| 历史研究 | 已有的专业认识 | 今日应该怎样承接 | 严格边界 |
|---|---|---|---|
| F01，2026-07-31 普通语言→专业表征 | 观察、主张、隐含目标、类比和错误归因的区分 | 保留“用户原意→标准概念→待验证问题”桥 | 不为每句话强制输出固定 IdeaFrame |
| F02 基础概念卡 | 定义、边界、概念对应、反例、来源 | 知识涉及新概念时按需检索原文 | 旧内部 K4 评级不等于外部有效性 |
| F04，2026-08-01 概念邻域网络 | 语义关系、认知流程、证据关系、用户临时映射四种层不能混用；可上下探索、跨域连接 | 本文以其为**已有核心知识**，新增专家词汇与跨域关键词组合的使用场景 | 不把各类关系都变成“概念相近” |
| F05，2026-08-01 研究证据政策 | 检索只是候选来源；主张需来源适配、冲突分析和更新 | 对每个专业术语和知识推论回查原始来源、适用场景 | 不能把查询命中当因果证据 |
| F06/F07 语言编排和多轮方向 | 简单表达、专业理解、连续任务修复与目标切换 | 新词可能改变问题与方案，不自动改变已确认目标 | 不让最新一个词覆盖上级目的 |
| A01 与2026-10月重构 | 旧知识值得保留，固定长流程和模块已受质疑 | 保留研究内核、降低默认使用的规则负担 | 此处不是新框架的官方替换令 |

上述位置据可检索的原始 F04/F05/F07 正文及2026-11-01《七月研究完整继承与当前能力融合_知识母本》定位。原文属于外部个人资料来源，**未复制到此公开仓库**；本轮没有声称逐字复核七月至今全部资料。

## 2. 专业关键词至少有六种不同功能
| 功能 | 举例（只是候选入口） | 解决的实际缺口 |
|---|---|---|
| A 口语/行业行话与别名桥 | “梳理”↔知识整理、knowledge organization；“污染”可能指上下文干扰、证据混级或旧目标失效 | 不让用户先学会专业词 |
| B 标准概念定位 | knowledge organization、problem formulation、goal reasoning | 查找可核查定义及所属学科 |
| C 上位/下位/相邻探索 | information retrieval→query expansion；knowledge organization↔controlled vocabulary | 从一个词扩展到成熟知识的邻域 |
| D 机制与竞争解释 | memory staleness、irrelevant context、goal drift、retrieval mismatch | 区分“看起来相似”但原因不同的问题 |
| E 方法和工具定位 | faceted classification、citation chasing、comparative evaluation、structure mapping | 找到已有成熟方法，不重造轮子 |
| F 反例/边界/证据定位 | negative transfer、confirmation bias、failure cases、applicability | 防止术语变成自证其正的口号 |

每个词要说明：**对应哪个概念？来自哪个学科？它是同义、部分重叠、上位、下位、相关还是竞争解释？** 尤其避免把跨学科“相似的词”直接认定为同一机制。

### 重要的专业依据
- ISO 704:2022 将对象、概念、定义和名称明确区分，可借鉴“先确立概念、再建立专业表达”的思想：https://www.iso.org/standard/79077.html
- Furnas 等（1987）发现用户对同一对象的自发命名差异巨大，提示应保留多种表达与别名，而不是一种检索词：https://doi.org/10.1145/32206.32212
- W3C SKOS 区分 preferred/alternative labels、broader/narrower/related、exact/close matches。近似匹配不自动意味着可传递或可替换：https://www.w3.org/TR/skos-primer/

## 3. 单个专业词、组合词和上下探索为何可能改变问题？
| 用户起点 | 一阶专业入口 | 组合/对照后可能发现的新问题 | 不应过度推断 |
|---|---|---|---|
| “梳理研究” | knowledge organization、concept mapping | “梳理 × 概念关系”→标准术语、上下位、跨学科连接 | 画图不等于知识可靠 |
| “搜索越多越乱” | exploratory search、query reformulation | “搜索 × 信息价值”→应该继续搜还是已有证据够用？ | 更多关键词不必然更好 |
| “旧知识影响回答” | context engineering、knowledge applicability | “记忆 × 过时”≠“提示词约束 × 过度”≠“来源错误 × 证据污染” | 不预设都是同一原因 |
| “AI 从想法主动研究” | problem formulation、sensemaking | “意图 × 目标演化”→用户的目标、AI 新建议、任务手段怎样区分 | AI 新想法不自动变为授权 |
| “跨领域产生新思路” | analogy、structure mapping、conceptual blending | “管理学探索/利用 × AI 搜索预算”→能否用信息价值衡量下一步？ | 跨域类比先是候选假设，不是证实的规律 |

**搜索组合不是机械相乘**：同义词可以在一组查询中用 OR 扩大召回；不同研究概念可用 AND 收窄范围；复杂问题要按来源类型和数据库调整词组，并利用引文链、作者、理论源头和反例迭代。Cochrane Handbook 对系统综述有成熟的自由词/受控词、OR/AND 设计与迭代建议；不能把医疗系统综述的全套操作要求强加给所有 GPT 问答。

**词组的高级价值**不是让 AI 随机拼接任意两个词，而是让两个概念建立有意义的连接：其关系可能是**上位/下位、并列、因果假设、约束、手段/目标、适用/失效、类比/对比、时间演化**之一。应说明机制或理由，不得因为词汇共现就宣布新理论。

## 4. 站在专家肩膀上的真正办法：从术语转向其知识组织
美国国家科学院《How People Learn》指出，专家与新手的差异不仅在知识数量，专家往往围绕大原理组织知识并理解其适用条件。可以对一个专家领域提出下列**研究问题**（并非每次回答都必填的模板）：
- 这个行业如何区分值得注意的现象和普通噪音？哪些变量/关系决定判断？
- 关键概念的层级、机制、竞争解释、失败情境是什么？
- 真实从业者、经典书籍和实证研究如何分别描述它？有没有分歧？
- 哪些知识能通过关系结构迁移，哪些是领域特有、不能复制的假设？
- 把这项认识放回用户原始目标后，它究竟改变了哪个问题、方案或行动？

Gentner 1983 年的 structure-mapping 理论强调跨域类比主要在**关系结构**而非表面属性上成立；这是跨行业连接的思考依据，但不直接证明 AI 一定能可靠地产生真正创新。Fauconnier 与 Turner 的 conceptual blending 提供认知综合的另一个理论视角，它与直接的“两个词相加”不同。

## 5. 专业搜索不是固定查询，问题本身会在研究中演化
Marcia Bates 1989 的 berrypicking 模型指出，研究者随着新信息不断变化查询与路径，常以多个渠道积累线索。Stanford《Introduction to Information Retrieval》则区分查询扩展、相关反馈与受控词典，提醒“词语不匹配”不能只靠简单迭代同一查询解决。

**对 ai-d 的合理推演**：一个查询成果可能带来新的标准术语、值得读的原始作者、相邻学科、竞争机制、新的任务约束。它们应作为**候选分支**，通过信息价值排序选择追索，而不是全部发展成新项目和新目录。

例如从“梳理”出发：
1. 图书情报学：controlled vocabulary / SKOS → 解决如何归类与找回；
2. 认知科学：expert knowledge / transfer → 解决为何正确知识不会自动被用对；
3. 管理学：sensemaking / exploration vs exploitation → 解决何时改变问题与停止探索；
4. 科学研究：evidence synthesis / citation tracking → 解决新资料是否支持主张；
5. AI 工程：context selection / evaluation → 解决如何将可用知识正确送入工作任务；
6. **回到原始目标**：最先需要的是整理和确认旧专业知识，还是新建分类系统，或者做实际调用验证？

以上为有专业依据的研究路线，不代表本项目已经在所有六个领域完成深入实证研究。

## 6. 与 ai-d 现有结构的关系：不重建体系
- **主入口保持不变**：[知识总索引](../INDEX.md) 的 P1–P8；一个知识对象可关联多个问题域。
- **知识维护原位置**：[knowledge/foundations/organization-protocol.md](organization-protocol.md)；本文件补充“为什么关键词可以改变问题”，不重复归档规则。
- **目标与方案选择**：[目标导航草案](../../planning/goal-navigation-v0.1.md)、[多版方案评审](../../planning/proposal-review-v0.1.md)；专业术语再丰富也不替代上层目标。
- **研究过程**：[此前2026研究综合](../../research/2026-11-05-ai-coordination-reverse-inference.md)；新增认识应引用原始出处、指出判断变化。
- **历史来源**：F01–F07 原始文件和2026-11-01七月母本继续留在原受控资料位置；不因新文档存在而声称已经完成全量迁移。

**当前初步裁决**：先补强“原话↔专业概念↔关系与边界↔证据↔问题改变”这一已有知识通道。专业关键词作为**搜索入口、认知导航和表达能力**的共同资源，但暂不开发复杂自动造词/任意组合的引擎，也不把新关键词自动建成文件夹。

## 7. 反证、质量和真实试验
| 风险 | 应当怎样检查 |
|---|---|
| 术语幻觉：术语听起来专业，却找不到成熟来源 | 回查标准、原著和实际研究中的定义 |
| 组合幻觉：两个词相关却没有真实机制 | 要求说明关系类型、差异、反例以及可能的验证 |
| 目标漂移：发现相邻概念便无限扩张 | 区分探索线索与当前 G0/G1/G2；比较行动价值 |
| 知识污染：历史强制规则掩盖新任务 | 分开知识与操作指令，按当前问题加载 |
| 检索偏差：只在一个平台/一类资料内搜索 | 依问题选择标准、书籍、论文、源码、案例及反证 |
| 自评：AI 自己命名、解释并宣布“更聪明” | 使用未见任务、独立事实核查、对照检索成本与判断改变 |

建议以后选两个异质任务比较三种条件：普通搜索、只扩词搜索、引入“概念关系＋机制/证据/反证导航”的研究。衡量事实错误、专业概念覆盖、真正改变决策的新认识、无关扩张、时间与成本。**这次尚未做该独立评测**。

## 8. 原始资料（已核对的公开入口）
1. ISO 704:2022，Terminology work—Principles and methods：https://www.iso.org/standard/79077.html
2. Furnas et al. (1987), The vocabulary problem：https://doi.org/10.1145/32206.32212
3. W3C SKOS Primer：https://www.w3.org/TR/skos-primer/
4. Novak & Cañas (2008), Theory Underlying Concept Maps（IHMC）：https://cmap.ihmc.us/docs/theory-of-concept-maps.php
5. Bates (1989), Browsing and Berrypicking（作者主页）：https://pages.gseis.ucla.edu/faculty/bates/berrypicking.html
6. Manning, Raghavan & Schütze (2008), Introduction to Information Retrieval（Stanford）：https://www-nlp.stanford.edu/IR-book/
7. Cochrane Handbook Ch.4 (2025), Searching and selecting studies：https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04
8. National Academies, How People Learn, Ch.2（专家如何组织知识）：https://www.nationalacademies.org/read/9853/chapter/5
9. Gentner (1983), Structure-Mapping：https://doi.org/10/dw52z8
10. Fauconnier & Turner (1998), Conceptual Integration Networks：https://doi.org/10.1207/s15516709cog2202_1
11. Pirolli (2007), Information Foraging Theory：https://academic.oup.com/book/7603

**来源使用边界**：经典人类认知研究是理解和设计 ai-d 方法的参考；不能据此直接声称 GPT 已获得专家级认知。标准和原始论文的存在不构成本仓库跨模型/跨行业效果验证。
