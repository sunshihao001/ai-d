# 实际源码案例：GPT Researcher 的上下文筛选、探索性发现与噪音权衡

**日期**：2026-11-07  
**研究目的**：在一个此前未采用公开 Issue 答案预先定位的成熟项目源码案例中，检查 AI 是否能够发现影响研究质量的重要隐藏条件，同时保留正常设计的合理性。  
**源版本**：`assafelovic/gpt-researcher`，2026-11-07 检查主分支树 SHA `3582a6841fe7dc801e2a34e34ee408641aea9bce`；`context/select.py` blob `baa04ca0136a3e4ae4e32a7c9176a85e17073bb7`；`context/lexical.py` blob `6fd6f36ff6b4a805b9b27d8acd9fe56df3e76727`。  
**现状**：GitHub 源码及官方测试、已提交的逐题评测数据核查；**未安装完整项目/未使用生产凭据重跑模型评测**；没有独立的 ai-d 模型分组实验。

## 一、用户简单问题背后需要调查的真正问题

口语：“研究资料好多噪音，AI 总停在表面；是不是该筛掉不相关信息？”

**不能直接等同于**“安装更强 RAG/压缩模型”。至少要区分：
1. 当前任务是明确事实问答，还是还不知道重要机制的开放研究？
2. 筛选器优化的是**相关片段比例**、事实答案正确率、报告偏好，还是**此前未知的重要机制的发现率**？
3. 哪些路径根本**没有执行筛选**？哪些所谓“筛掉噪音”的策略实际上会退回原文开头？
4. 同一个 URL 的去重与不同 URL 下相同内容的**独立证据判断**是否被混同？

## 二、沿原始源码追踪，未先判定 Bug

| 原始源码与已知测试 | 观察到的行为 | 证据与解释 |
| --- | --- | --- |
| [select.py](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/context/select.py)：`total_chars < 8000` 且 `len(pages) <= max_results` | 无论使用 keyword、Jev 还是 embeddings，该分支直接返回格式化原页面文档；不调用相应筛选器 | 源码确认。官方[筛选设计文档](https://github.com/assafelovic/gpt-researcher/blob/main/docs/docs/gpt-researcher/gptr/context-filter.md)明确说明该小输入快速路径，属于设计取舍，**不是新发现的错误** |
| [lexical.py](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/context/lexical.py)：`if best <= 0: return chunks[:max_results]` | 查询词在所有片段都无命中时，保留开头片段，而不返回空字符串 | 源码确认；[现有单元测试](https://github.com/assafelovic/gpt-researcher/blob/main/tests/test_lexical_context_filter.py)包含 `test_no_keyword_overlap_falls_back_to_opening_chunks`。这是明示回退路径，不能仅凭与问题不相关便判缺陷 |
| [researcher.py](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/skills/researcher.py) `_get_new_urls`、`_search_relevant_source_urls` | `visited_urls` 用于避免重复抓取同一 URL；但 [select.py](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/context/select.py) 和 [retriever.py](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/context/retriever.py) 的本地上下文转换没有针对不同 URL 的内容语义同一性判断 | 仅确认检查路径的行为，不声称整个项目任何其他环节都不存在内容去重；**URL 唯一性不意味着来源独立性**是对 ai-d 证据工程的迁移推论 |
| [lexical.py](https://github.com/assafelovic/gpt-researcher/blob/main/gpt_researcher/context/lexical.py) BM25 和相对阈值 | 对明显匹配的片段排序；低于最佳匹配片段相对阈值的内容会被排除；没有关键词命中时走回退路径 | 能减少词面噪音，但不能保证发现用户原本不知道的中间机制；是否应保留无词面重叠的反例，随任务不同 |

**重要负例**：以上小输入直通、无关键词时回退均由原项目文档/测试主动说明，不能归类为作者未发现的 Bug。正确的研究成果是识别其**适用边界和对开放式研究的潜在影响**，不是制造缺陷清单。

## 三、直接重算仓库已提交的逐题评测数据（不是照搬 README 总结）

原始记录：  
- [逐题对照 Jev / Embeddings / None](https://github.com/assafelovic/gpt-researcher/blob/main/evals/context_filter/results/scored_vs_none_jev_jev_large_jev_wide_embeddings.json)（112 条记录，28 题 × 4 策略）；
- [逐题对照 Embeddings](https://github.com/assafelovic/gpt-researcher/blob/main/evals/context_filter/results/scored_vs_embeddings.json)；
- [问题类型清单](https://github.com/assafelovic/gpt-researcher/blob/main/evals/context_filter/queries.json)（20 个 SimpleQA + 8 个开放研究问题）。

本轮通过 GitHub 读取原始 JSON，在本轮运行的脚本中按 `strategy` × `kind` 重新汇总 `pairwise`、`grade`，独立于 README 手工抄数；读入文件的逐题 JSON blob 为 `43c046b5adc834cf6ec3aece228bf57e6aba1e52`。

### 3.1 不过滤 vs 过滤，开放研究的对照

以下胜/平/负均**从过滤版本的视角**对无过滤版本（`none`）计数：

| 开放式研究（8 题） | 过滤策略胜 | 平 | 过滤策略负 |
| --- | ---: | ---: | ---: |
| 向量 Embeddings vs None | 0 | 1 | **7** |
| Jev 用途筛选 vs None | 0 | 2 | **6** |
| Jev Large vs None | 0 | 1 | **7** |
| Jev Wide vs None | 0 | 4 | **4** |

也就是说，**在这组开放式报告的模型偏好评测中，无过滤报告经常更受偏好**；即便筛选器提供更高的相关片段比例，也未赢得这些偏好比较。

### 3.2 事实问答的对照

| SimpleQA（20 题） | 正确数 |
| --- | ---: |
| Embeddings | 18 |
| Jev | 19 |
| Jev Wide | 20 |
| None | 20 |

同时，[仓库统计汇总](https://github.com/assafelovic/gpt-researcher/blob/main/evals/context_filter/results/summary_vs_embeddings.json)的文段相关精度为 Embeddings `0.457`、Jev `0.728`；中位数上下文 tokens 分别约 `7627` 与 `4480`，None 为 `33439.5`。**高相关精度、较低成本、开放报告偏好和事实题正确率是不同维度，不能互相替代。**

### 3.3 不能过度解读这组真实数据

- 这些数据是**项目维护者已经运行并提交的模型实验**，本轮只是对原始逐题数据重新聚合；不是 ai-d 自己调用模型重新测试。
- 开放问题只有 8 题，评审由模型负责，报告与评审模型来自同一模型家族；偏好不等于真正发现了新的科学机制、完成了人工事实核验或在生产环境有效。
- SimpleQA 的 20 题成绩接近饱和，组间 1–2 题差别可能只是样本波动，不能推出所有事实问答都不需要筛选。
- None 成本更高、上下文更长；仓库报告了 28 题中的平均写作开销和上下文增长。不应因开放题偏好便规定“所有资料全文加载”。
- 筛选在开放问题可能**漏掉可迁移的陌生概念与因果中间项**，这仍是待检验的研究解释；现有实验**没有测量独立的未知机制发现率**，因此不能将其当作已证实因果。

## 四、这次真正改变 ai-d 的哪些判断

**原来容易发生的过强判断**：“搜索资料太多太吵，因此 AI 应加强相关性筛选，越少噪音越能深度理解。”

**修订后（有条件的候选判断）**：
1. **确定答案型任务**：可适度优先检索精度、相关性与证据核对；不因为保留更多页面就自动更专业。
2. **探索型研究**：应允许有目的的关联线索、竞争解释和来源本身的知识地图进入调查，避免词面筛选把新问题排除；但不能无限全文注入。
3. **机制核验**：当假设已经形成，研究应围绕其可反驳的证据执行精确过滤和对照；“广探索”不应变成永无停止的理由。
4. **证据独立性**：不同网址不自动等于不同原始证据；查清转载、同一论文的二次传播和共同原始来源，防止多篇重复内容被当作多次佐证。
5. **停止判断**：范围和过滤强度应当取决于任务是发现未知、核验已知还是交付结果；预算停止只是资源保护。若新领域只增加熟悉术语、不改变重要解释/行动，则停止当前分支。

### 不扩展架构的可验证下一步

利用现有 [跨领域评测](../evaluation/first-cross-domain-tests.md)，把“过滤掉陌生词或弱相关概念后遗漏关键中间机制”的真实源码任务作为**未来未见评测**。同样公开源事实，在相近预算下比较：
- 只按最初词面进行严格精确筛选；
- 保留少量有证据、可连接当前问题的陌生线索（在后续核验后才采纳）；
- 过量加载几乎全部内容（负对照）。

指标不仅包括正确事实和引用，还包括关键机制召回、无证据联想误报、独立证据数、最终决策变化与上下文/成本。**测试题不能复用本次已见数据作为盲测增益证明。**

## 五、状态与停止裁决

- `UPSTREAM_SOURCE_INSPECTED=YES`：主干源码、现有单测、官方设计与评测记录。
- `UPSTREAM_SCORES_REGROUPED=YES`：112 条公开逐题记录及 28 条题目元数据重新分组统计。
- `UPSTREAM_SOURCE_RUN=NOT_RUN`：未完整安装原程序执行检索、过滤或模型写作。
- `AI_D_MODEL_AB=NOT_RUN`：本次不是基线模型 vs 新知识方法对照。
- `NEW_FILTER_BUG_FOUND=NO`：目前核查到的关键分支均是有意设计；不强行定罪。
- `UNKNOWN_DISCOVERY_CAUSALLY_IMPROVED=UNKNOWN`：开放报告偏好不能证明科学机制发现增益。

**本轮适当停止理由**：原始代码、设计说明、反例单测和逐题实验记录已经足以说明“过滤相关性与开放研究价值不可混同”的具体来源与边界。继续搜同类 RAG 宣传资料不会改善这条解释。下一轮应转向**未见的、存在可核验中间机制的源码或实验任务**，而非继续为一套万能过滤阈值寻找理论依据。
