# ai-d｜跨职业情景的检索策略对照（2026-11-06）

**状态：已执行、可复现的静态检索实验；不是三个独立 GPT 模型 A/B，也不是认知能力增益证明。**
数据：固定仓库版本 `cd51f614fc9e7672c8fcf750ddc1f8dec59f4cdd`，16份 Markdown，16个公开化问题；4个开发情景、12个留出情景。所有语料都属于 ai-d 的通用认知/知识管理方法，不含对应职业的完整专业数据。
标注：每个情景的相关文件由本轮研究者手工预先指定，**未经第三方盲审**。

## 方法
- A `lexical`：中文字相邻双字与英文单词计算 BM25；作为可重复的字面检索基线。
- B `expanded`：在 A 上按一份手工词表扩展关键词。该规则不代表 LLM 会正确发现所有专业词。
- C `conditional`：在 B 上对命中的问题类型加权优先相关文件职责。角色表属于**人工规则路由**，不是语义推理模型。
- 指标：Top-1（首个文件是否相关）、Recall@3（前3个覆盖相关文件的比例）、MRR（首个相关文件的倒数名次）。

## 实际结果
| 分组 | 方法 | Top-1 | Recall@3 | MRR |
|---|---|---:|---:|---:|
| dev (n=4) | lexical | 0.250 | 0.250 | 0.396 |
| dev (n=4) | expanded | 0.250 | 0.250 | 0.390 |
| dev (n=4) | conditional | 0.250 | 0.500 | 0.479 |
| holdout (n=12) | lexical | 0.333 | 0.500 | 0.549 |
| holdout (n=12) | expanded | 0.333 | 0.500 | 0.531 |
| holdout (n=12) | conditional | 0.583 | 0.750 | 0.718 |
| all (n=16) | lexical | 0.313 | 0.438 | 0.511 |
| all (n=16) | expanded | 0.313 | 0.438 | 0.496 |
| all (n=16) | conditional | 0.500 | 0.688 | 0.658 |

## 案例详细对照
| 案例 | 人工相关文档 | A 第一名 | B 第一名 | C 第一名 |
|---|---|---|---|---|
| D01 文档管理 | `knowledge/foundations/organization-protocol.md`、`knowledge/INDEX.md` | `knowledge/COGNITIVE-MAP.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` |
| D02 项目规划 | `planning/proposal-review-v0.1.md` | `planning/proposal-review-v0.1.md` | `planning/proposal-review-v0.1.md` | `planning/proposal-review-v0.1.md` |
| D03 证据治理 | `knowledge/foundations/organization-protocol.md`、`planning/research-to-github-v0.1.md` | `evaluation/first-cross-domain-tests.md` | `evaluation/first-cross-domain-tests.md` | `evaluation/first-cross-domain-tests.md` |
| D04 协作修复 | `planning/goal-navigation-v0.1.md`、`planning/historical-consolidation-v0.1.md` | `planning/research-to-github-v0.1.md` | `knowledge/COGNITIVE-MAP.md` | `knowledge/COGNITIVE-MAP.md` |
| H01 制造业质量管理 | `knowledge/foundations/organization-protocol.md`、`planning/historical-consolidation-v0.1.md` | `knowledge/COGNITIVE-MAP.md` | `knowledge/foundations/organization-protocol.md` | `knowledge/foundations/organization-protocol.md` |
| H02 跨行业迁移 | `knowledge/COGNITIVE-MAP.md`、`knowledge/foundations/expert-concept-navigation-v0.1.md` | `research/2026-11-05-ai-coordination-reverse-inference.md` | `research/2026-11-05-ai-coordination-reverse-inference.md` | `knowledge/COGNITIVE-MAP.md` |
| H03 产品管理 | `planning/proposal-review-v0.1.md` | `evaluation/first-cross-domain-tests.md` | `evaluation/first-cross-domain-tests.md` | `evaluation/first-cross-domain-tests.md` |
| H04 软件验收 | `knowledge/COGNITIVE-MAP.md`、`research/workflow-components-and-boundaries.md` | `research/workflow-components-and-boundaries.md` | `knowledge/COGNITIVE-MAP.md` | `knowledge/COGNITIVE-MAP.md` |
| H05 专家知识发现 | `knowledge/foundations/expert-concept-navigation-v0.1.md`、`knowledge/COGNITIVE-MAP.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` |
| H06 组织知识管理 | `knowledge/foundations/organization-protocol.md`、`knowledge/foundations/cross-disciplinary-foundations.md` | `evaluation/first-cross-domain-tests.md` | `knowledge/COGNITIVE-MAP.md` | `knowledge/COGNITIVE-MAP.md` |
| H07 软件交付 | `planning/research-to-github-v0.1.md` | `planning/README.md` | `planning/README.md` | `planning/research-to-github-v0.1.md` |
| H08 人员协作 | `planning/goal-navigation-v0.1.md`、`planning/historical-consolidation-v0.1.md` | `knowledge/foundations/cross-disciplinary-foundations.md` | `research/2026-11-05-ai-coordination-reverse-inference.md` | `planning/goal-navigation-v0.1.md` |
| H09 研究评测 | `evaluation/first-cross-domain-tests.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` | `knowledge/foundations/expert-concept-navigation-v0.1.md` |
| H10 技术战略 | `decisions/2026-11-05-goal-options.md` | `decisions/2026-11-05-goal-options.md` | `decisions/2026-11-05-goal-options.md` | `decisions/2026-11-05-goal-options.md` |
| H11 知识时效 | `planning/historical-consolidation-v0.1.md`、`knowledge/foundations/organization-protocol.md` | `knowledge/foundations/organization-protocol.md` | `knowledge/COGNITIVE-MAP.md` | `knowledge/COGNITIVE-MAP.md` |
| H12 科学研究 | `knowledge/source-register-2026-11-05.md`、`knowledge/foundations/organization-protocol.md` | `knowledge/INDEX.md` | `knowledge/INDEX.md` | `knowledge/COGNITIVE-MAP.md` |

## 解读、失败与限制
- 方法 C 若有更好成绩，也可能来自人工规则与本研究者给出的相关性标签一致，不能归因于模型理解了机制。
- 语料单位为整份文件，大文档比短文档的长度归一化有影响；没有进行段落切分、向量检索、多次随机试验。
- 情景由本研究者撰写，留出集只是没有按其逐题调参，**不是独立未知任务或独立评审**。
- 即便找到适用文档，也没有证明回答质量、事实正确性、行动选择和用户成本改善；检索与实际结果仍需分开。
- 保留所有方法的失败案例；若扩词降低成绩，应当记录而不是修改算法直至只剩成功案例。

## 可重现方式
在 Git 仓库具有冻结提交的本地克隆中，在当前草案分支运行 `node evaluation/retrieval-probe-2026-11-06.mjs`；脚本用 `git show` 读取该提交上的原始16份文件，不因后续草案修改而改变基线。标准输出为包含逐题前3排名、指标的 JSON。

## 下一次实验重点
取得非本轮作者编写的真实陌生任务及独立相关性判断，冻结资料和工具预算，并对实际模型回答开展盲评。对有价值的专业知识需分开测试：检索到、适用于问题、改变决策、交付结果是否改善。

## 外部方法依据
- NIST TREC 关于相关性判断与语料匹配：https://trec.nist.gov/data/reljudge_eng.html
- BEIR 2021 的异构检索评估：https://arxiv.org/abs/2104.08663
- Weller 等 2024 关于扩词噪声与退化：https://aclanthology.org/2024.findings-eacl.134/
