# 从成熟项目修正 AI 深度研究：范围、深度、证据覆盖、停止与目标连续性｜开源审查 V0.1

- 日期：2026-11-07
- 主问题：P2 研究/机制解释、P3 搜索范围与停止；关联 P1/P4/P5/P6/P7/P8。
- 用户问题：为什么以前停在浅层知识，却在旁支无限扩张？现有成熟项目怎样解决，哪部分可直接复用？
- 目标约束：保留 ai-d 原有长期目标及外部脑、专家认知、专业研究、工作流等并列或互相支持的方向；**不把某个框架升级为新总架构**。
- 审查方法：先筛选 GitHub 项目 → 读仓库元数据、文件树、关键实现、测试与故障说明 → 用原创论文、实证和基准验证边界。**未安装运行第三方程序，未做 ai-d 独立模型 A/B。**

## 一、修正后的问题判断

对本项目来说，“专业研究深入到本质”不能等于更多学科、更多轮次或更长报告。更可核查的工作定义：
1. 精确定位当前问题中的现象、目标或决策差异；
2. 识别能产生该现象的**中间机制/测量条件**（而非只命名该现象）；
3. 对关键机制寻找原始证据、最强竞争解释及反证；
4. 说明哪些未知会改变解释/决策，哪些只是旁支知识；
5. 对当前任务作出合理的继续研究、暂停、实施、验收或留存判断。

**必须分开**：搜索硬预算结束、主张证据覆盖、研究解释达到足以行动的程度、任务真正完成、长期目标是否关闭。某个状态不蕴含其他状态。

## 二、GitHub 公开成品全景：按它们实际解决的问题比较

| 项目/代码证据 | 主要实现及直接价值 | 限制与适用裁决 |
| --- | --- | --- |
| [STORM / Co-STORM](https://github.com/stanford-oval/storm)，[knowledge_curation.py](https://github.com/stanford-oval/storm/blob/main/knowledge_storm/storm_wiki/modules/knowledge_curation.py) | 多视角问题生成、模拟专家交流、问答积累与大纲综合。问询签名可在不再需要提问时结束，同时还有对话轮数/搜索约束。 | 目标主要是广覆盖、结构清楚的知识整理和长文章；来源偏差、无关事实过度关联可能存在；不是某种机制已被证实。**优先借鉴问题生成方法，不采用其文章篇幅作为深度指标。** |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher)，[deep_research.py](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/skills/deep_research.py) | 多来源搜索、递归的研究目标和跟进问题；`breadth` 与 `depth` 可配，往下一级递归时 `depth - 1`、`breadth` 收缩；若全部分支失败则停止继续下降。 | **递归深度是算力/覆盖结构，不是解释深度。** 成熟且有较多功能/文档，但未验收本项目的知识调用与真实判断增益；可作为未来研究执行端候选。 |
| [Open Deep Research](https://github.com/langchain-ai/open_deep_research)，[configuration.py](https://github.com/langchain-ai/open_deep_research/blob/main/src/open_deep_research/configuration.py)、[deep_researcher.py](https://github.com/langchain-ai/open_deep_research/blob/main/src/open_deep_research/deep_researcher.py)、[prompts.py](https://github.com/langchain-ai/open_deep_research/blob/main/src/open_deep_research/prompts.py) | 用户语言生成研究 Brief，主管分解研究、调用 ConductResearch 和 ResearchComplete；源码中结束条件为显式 Complete、无工具调用或超最大迭代；主管默认迭代上限 6，子研究调用也有上限。 | 主要仍依赖模型判断“研究够了”，缺独立开放问题机制证明；**2026-11-07 检查仓库元数据为 archived=true**，不推荐当前直接作为长期维护基座，可参考研究 Brief/任务委派和硬限制。 |
| [DeerFlow](https://github.com/bytedance/deer-flow)，[goal.py](https://github.com/bytedance/deer-flow/blob/main/backend/packages/harness/deerflow/runtime/goal.py)、[goals stop 复现](https://github.com/bytedance/deer-flow/blob/main/backend/scripts/benchmark/goal_loop_stop/README.md)、[回归测试](https://github.com/bytedance/deer-flow/blob/main/backend/tests/test_goal_loop_stop_probe.py) | 持续目标、评估、状态与检查点；源码有最大继续次数、无进展次数和缺少证据/需要输入/失败/外部等待等 blocker。已记录“硬停止后未达成目标触发隐藏续执行”的确定性复现和修复。 | 项目侧重通用 Agent 执行可靠性。它判断的进展不是“科学机制已经找对”；运行状态 success 不等于 Goal satisfied。复杂工程不宜因当前搜索问题而整套移植。 |
| [HALT 官方实现](https://github.com/Noverse0/HALT)，[verifier trajectory](https://github.com/Noverse0/HALT/blob/main/scripts/halt_verifier_trajectory_stopping.py)、[README](https://github.com/Noverse0/HALT/blob/main/README.md) | 以预期中间主张（hop claims）和累积证据的 Match / Partial / Null 匹配确定何时停止，在多跳 QA 上有论文与复现脚本，比较原模型搜索轮次与提前停止表现。 | **能检查的是预设主张的覆盖**；若目标主张遗漏关键未知，可过早完成。该实现涉及独立训练验证器、模型/GPU 成本，不能认为可一键用到开放研究。更适合先复用“逐主张证据覆盖”的判断思想。 |
| [AutoSearch](https://github.com/bofusun/AutoSearch) | 用自回答及强化学习奖励优化搜索深度，惩罚过度搜索，在 QA 基准优化效果-成本权衡。 | 是相对重的训练与推理工程；不适合未经评测就嫁接到 ai-d 的文档式研究。 |
| [Pi deep-research extension](https://github.com/tzethoven/deep-research)，[research-loop.ts](https://github.com/tzethoven/deep-research/blob/main/orchestrator/research-loop.ts)、[hypothesis-driven](https://github.com/tzethoven/deep-research/blob/main/strategies/hypothesis-driven/supervisor-prompt.ts) | 对不同问题使用 knowledge-gap、tree-decomposition、hypothesis-driven；代码真实限制迭代数、子研究员数、花费与时间；退出时可保留部分结果与未知。 | 小规模原型，公开独立测评有限；假设驱动只做网络文献，不做真实实验。可借鉴“问题类型改变调查策略”与“预算停不等于完成”。 |
| [ReportBench](https://github.com/ByteDance-BandAI/ReportBench) | 把报告事实覆盖、引用一致性、未引证断言等分开评价，防止引用多就算知识质量高。 | 领域特定的评测资源，自动化判定有自身误差；不能把结果自动等同人工事实真值。 |

**成熟度区分**：主项目和论文附带实现并不等价；GitHub Star 数、README 功能清单、源码存在、离线单测、模型真实任务成功属于不同证据等级。此轮是代码路径审查与官方论文对照，**不是完成这些产品的安装/线上验收**。

## 三、论文与源码之间发现的四个核心分歧

### 3.1 硬停止 ≠ 证据覆盖

- Open Deep Research 通过 `ResearchComplete` 和上限结束；GPT Researcher 通过预设递归深度控制；Pi 扩展通过代码强制预算。这些解决无限循环/成本问题。
- [HALT（Findings EMNLP 2026）](https://aclanthology.org/2026.findings-emnlp.343/) 把结束改成主张—证据匹配。官方实现指出 gold claim 场景效果明显好于模型生成 claim，说明**先定义正确的问题与证据目标本身就困难**。
- 对 ai-d：不能采用“看见 `COMPLETE` 就宣称本质已明白”，也不能规定每轮固定查 5 个 GitHub 项目。

### 3.2 新颖信息 ≠ 真实解释

- [Soudani 等，RAAC（EMNLP 2026）](https://aclanthology.org/2026.emnlp-main.1937/) 研究搜索新颖性与信息覆盖，在 BrowseComp-Plus 等 DRA 实验中报告平均减少约 14 次搜索，平均准确率提升约 3 个百分点。
- [Xie 等，Over-Searching（EACL 2026）](https://aclanthology.org/2026.eacl-long.361/) 显示无关信息/过量搜索可能损害回答，尤其在不可回答问题和多轮场景中。
- 但**新结果**可能只是更多同义术语或另外一个营销文章；必要时应从关键变量、证据、反证和可行动结论审查其贡献。
- RAAC 论文证据已核查；本轮未确定并逐文件审查其官方实现，**不能称为完成 RAAC 源码验证**。

### 3.3 覆盖预先问题 ≠ 发现未知问题

- [STORM 原论文](https://arxiv.org/abs/2402.14207) 通过视角指导提问扩展覆盖，但作者明确存在来源偏差和事实过度关联风险。
- HALT 的 `all_match` 在预设 claim 下能节省检索，却可能漏掉“最初根本不知道需要研究的变量”。
- 因此，探索性问题不能无限追求封闭清单的完成；对有证据的新机制候选**开立独立线索**，不强迫所有新概念都进入当前任务。
- 在某些场景中，应该停止当前搜索、转向深读一份源码或运行一个反证，而不是发起更多检索。

### 3.4 停止运行 ≠ 目标达成

- DeerFlow 的 [真实离线故障复现](https://github.com/bytedance/deer-flow/blob/main/backend/scripts/benchmark/goal_loop_stop/README.md) 表明：循环已触发硬停止，但未满足的 Goal 仍可能产生隐藏下一轮；修复前主管模型调用 6 次、隐藏续执行 1 次，修复后分别为 5 和 0。该测试中两种运行状态仍报告 success，**但均不代表 Goal achievement**。
- 对 ai-d：GitHub 提交成功＝研究成果已保存；不能变成“专业方法已有效”或“本次科学问题已经解答”。评测设计 `NOT_RUN` 应保持 `NOT_RUN`，而非下一轮又凭语言升级为已实现。

### 3.5 GitHub Issue 与现行代码的交叉核对：真实失败优先于营销演示

- [GPT Researcher Issue #1579](https://github.com/assafelovic/gpt-researcher/issues/1579)（2025-12-16，状态 closed）报告：检索器没有正确 API Key/断网时，Deep 模式反复循环并可能卡住机器。已读当前 [deep_research.py 的失败停止分支](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/skills/deep_research.py)：当本层没有成功研究结果时直接结束继续递归。**静态源码支持“防空结果重复下降的处理存在”，未独立复跑失效前后运行。**
- [DeerFlow Issue #6555](https://github.com/bytedance/deer-flow/issues/6555)（2026-10-09，closed）记录 Goal 未完成、被阻塞或成功时的前端展示与实际状态不同步；其相关[离线回归案例](https://github.com/bytedance/deer-flow/blob/main/backend/scripts/benchmark/goal_loop_stop/README.md)具体复现了硬停止后的隐藏续执行。**要将终止原因、真实完成证据与下一步恢复方式明确分开**；单凭一个 success 标签不够。
- 两条 Issues 是真实用户/开发者报告和仓库内复现，但**仓库 Issue 关闭、存在修复代码并不自动证明所有生产环境已消除同类问题**。

**对本项目的直接改变**：停止不只是认知上的“已经查够了”。缺数据、任务失败、预算耗尽、信息不可获得、需要用户输入及目标真正达成，必须给出不同的可检查状态；不要在任何一种未完成状态下无限自动扩展研究。

## 四、对现有全项目认知的修订（不增架构）

既有 [ai-d P1–P8](../knowledge/INDEX.md) 仍适用，但需要改变调用时的实际判断：

- **P1 问题形成**：用用户目标、已有项目知识恢复关键现象/当前决策，不能先由外部项目热度定义研究对象。
- **P2/P3 研究/搜索**：用 STORM 的问题生成思想扩展真正遗漏的视角，再用信息新颖性/证据覆盖决定继续哪条线索。不要把固定广度/深度当结果质量。
- **P4/P5 知识与证据**：关键机制/主张的来源证据、竞争解释、真正的测试缺口分开；在必要的研究轮次里引用 HALT 的逐主张检查思想，但不误当可直接实现的通用 verifier。
- **P6 决策与行动**：判断继续搜、深读、核验、停止本分支、转入实施、上报未知。硬预算只负责“不能无限执行”，不能装成“工作已经成功”。
- **P7 验收**：将 GitHub 已保存、研究结论有证据、代码逻辑已检查、软件已运行、模型改进已验证分别报告。
- **P8 污染控制**：停用“本轮必须有新理论/新项目/新流程”的强制产出心态，防止知识文件数量上升而实际能力不变。

### 当前 AI 项目的明确裁决

1. **暂停**继续研究“外挂大脑最终本质”的抽象名词及新专家制度。这并不关闭独立长期研究目标。
2. **保留**原有 P1–P8 与已积累的专业知识，优先让知识真正参与下一项现实问题的调查和证据判断。
3. **不急于安装或组装** STORM + HALT + DeerFlow。它们分别解决问题生成、证据覆盖和执行恢复，尚无跨产品互操作/整体质量验证。
4. **真正的下一步研究问题**不是“怎样写更精美的停止提示词”，而是：在现有公开项目中，**同一具体任务**里怎样证明某次新增研究找到了隐藏机制、改变了结论，并能区分继续搜索与转去检查源码/实验的时机？
5. **优先利用已有材料**：ai-d 的 Blix/Hermes 实际源码审查中已有“历史窗口误判、比例重叠、来源/样本身份矛盾、事件保留条件”等可核查真值与反例。它们比制造一个虚构的哲学问答样本更适合下一轮。

## 五、针对“研究范围与停止”建议保留的操作性判断

这些是**对当次复杂研究的判断线索，不是每次回答的强制程序**：

| 当前观察 | 优先行动 | 理由 |
| --- | --- | --- |
| 重复找到同样表面资料 | 停止横向搜索，深读原始实现、方法和失败案例 | 防止低信息增量 |
| 关键主张尚缺源证据，且原始证据可获得 | 针对主张继续搜或核验 | HALT 式主张—证据缺口 |
| 现有解释无法区分两种重要机制 | 优先寻找有区分力的反例/测试 | “有理论”不代表“有解释” |
| 新知识有独立价值却不改变当前任务 | 作为开放线索入库，当前分支继续收束 | 保留发现能力又限制范围 |
| 已有足够证据做可逆、可检验任务 | 停止本轮理论扩张，转实施与验收 | 防止研究替代交付 |
| 证据不可获得/超过预算 | 明确 INCOMPLETE/UNKNOWN，保存可恢复状态 | 不允许“预算停”伪装成功 |
| 新证据推翻此前的核心假设 | 重新打开对应研究，不自动改变用户重大目标 | 允许研究和目标持续演化 |

## 六、最重要的可推翻条件

- 若某个固定迭代预算已达到事实和解释要求，增加机制检查不改善结果，就不应强制使用更复杂的停止方法。
- 若 HALT 式预期主张导致遗漏未知关键变量，必须引入问题表征检查，而非继续追求预设 claim 完成率。
- 若 STORM 式多视角提问只增加术语、未改变真实证据与判断，停止该分支扩展。
- 若仅因报告变长而获得高自评，必须转向外部事实核查或任务反馈，不能称能力提升。
- 在新任务中经独立对照无实质效果时，将这些方法降级为可查资料，不进入默认工作上下文。

## 七、下一轮与研究状态

**已经完成**：多轮外部搜索；9 项左右有代表性的 GitHub 项目候选筛选；若干主要项目代码/配置/测试路径定向读取；与 STORM、HALT、RAAC、AutoSearch、Over-Searching 等原始论文交叉对照；确定可复用认知与不适用边界。

**没有完成**：全仓逐文件审查、第三方程序运行、跨模型 A/B、RAAC 原生实现审计、ai-d 真实用户效果测量。不能因为源码可见或存在单测就宣称本项目验证有效。

**下一轮优先证据动作**：从现有公开的“同一输入可能有两种专业机制解释”的真实软件故障中，选一个高价值案例，整理冻结源码及原始观察；独立检查增加一个关键问题时是否能找出新证据，而不是再扩展整套研究架构。先验证小范围可推翻机制，再决定是否需要任何专门的搜索 Agent/验证器。

**记录原则**：本报告是已验证代码路径和原始来源的证据地图，仍是一份研究资料。若加入新项目，应先理解它自己的实际问题、架构/源码与失败，再判断能否改变本项目知识，不能因 README 名词相似就列为可复用成品。
