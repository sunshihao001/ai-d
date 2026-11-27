# AI-D 具名专家全域缺陷诊断、知识组织与专业提示词进化 V2.0
日期2026-11-27；固定基线 7f536867a19669be4675aa946353d8ef479b43a5；72项Git路径全量盘点，非全量逐字/语义审查。现阶段手机GPT，无本地安装。继承[专家V1.1](2026-11-27-named-expert-methods-and-defect-audit.md)、[组织规范](../knowledge/foundations/organization-protocol.md)、[手机专项](2026-11-27-mobile-chat-cognitive-continuity-v1.md)、现行目标/锚点/AGENTS。任务规格[事前正本](../prompts/tasks/expert-knowledge-organization-audit-v2.md)在提交ae9e4b6ca13b16e1b26f5c514dccdf2680fd477e独立保存，位于初步侦察之后、正式全树对比和反例检查之前；非盲测、非因果干预。
## 1. 具名专家方法及实际选择
- [Marti Hearst：分面导航](https://people.ischool.berkeley.edu/~hearst/research/searchuserinterfaces.html)。沿原P1–P8、对象类型、关键词和版本，整理72项真实文件；多标签与单一类型不同。未验证用户检索收益。
- [James Hollan、Edwin Hutchins、David Kirsh：分布式认知](https://escholarship.org/uc/item/8sb9s5rm)。人、外部表示、工具共同承担认知；同源导航、原件和任务表达保持关联，网页不是模型运行环境。人类HCI理论非LLM效果证明。
- [Martin Fowler：双时间历史](https://martinfowler.com/articles/bitemporal-history.html)。区分事实时间与获知/记录时间；结合[Feast的实际问题#6615](https://github.com/feast-dev/feast/issues/6615)（2026-07关闭，不能指称当前版本仍有该缺陷），检查迟到更正、同路径异版本和历史截止。借用方法，不部署数据库或Feast。
- [David Woods：Graceful Extensibility](https://doi.org/10.1007/s10669-018-9708-3)。需求超过适应资源时系统可能饱和，不能只靠更多规则；缺真实工具/资源轨迹时不推断定时任务停止原因。
- [Hamel Husain：真实错误分析](https://hamel.dev/blog/posts/evals-faq/index.html)、[Shreya Shankar等：Who Validates the Validators](https://arxiv.org/abs/2404.12272)。评价器先用具体正反例核查；本次核对实际文件与版本，而非以关键词或自己的评价证明模型能力。
- 既有Keeney/Chi/Klein/Perkins/Leveson/Khattab/Agrawal/Argyris/Willison/Norman方法继续按问题选择；[八入口行动映射](../knowledge/2026-11-27-problem-method-activation-map.md)给出触发、原件、行动、验收及专业表达。无真实专家会诊或独立模型协作。
## 2. 全域缺陷裁决
P1 有目标/问题表征正本，不能把手段当目标；具体任务交付仍需事前定义。P2 有深度与停止研究，真实行动和资源证据仍不足。P3 有搜索研究与来源登记，全库外链有效性/召回未逐项验。P4 目录及索引级导航跨72项资产，补全路径、问题及类型；主张级语义尚需按高价值问题深读。P5 发现事后快照污染，进行真实版本回放。P6 最新可读V1.3自治运行有正确方向但自述未新增实验/写回，入口存在不等于当轮工作；本轮先冻结规格再完成实际核验。P7 独立模型/新聊天对照未完成，真实证据验收优先。P8 分离历史/现行/候选、适用/失效及时间边界。首要未闭合风险仍是任务规格→实际行动→独立效果反馈，不由新增规则/网页解决；本轮可修复的是版本绑定和知识定位。保留开放研究与历史回收。
## 3. 实际新任务：R36时间污染机制迁移
读取[R36历史原件及复现](2026-11-27-r36-temporal-audit-recovery.md)、[诊断程序](artifacts/r36-temporal-audit/aid_r36_temporal_audit.py)、[运行输出](artifacts/r36-temporal-audit/replay-2026-11-27.txt)。原R36说明已被上游错误标时的输入即使前缀不变，也有未来信息风险；此处将其与Fowler/Feast方法迁移到AI-D自身。真实自动运行3f44ee8e-03b8-832f-96bb-e1738f2f40f2 UTC 2026-11-27T12:40:10.614199Z—2026-11-27T12:40:58.852468Z，报告声明使用d2619ec1b2f63c6f91e9d9e620cb1f3cc722b1ba，并自述无新增独立实验/写回；不是完整工具日志。实际Git树比较如下：
| 提交 | UTC提交时间 | 文件 | 原树未有 | 同路径异内容 |
|---|---|---:|---:|---:|
| d2619ec | 12:38:39 | 62 | 0 | 0 |
| 0d56779 | 12:56:41 | 66 | 4 | 3 |
| 1b3ce4e | 13:09:48 | 69 | 7 | 5 |
| 7f53686 | 13:15:56 | 72 | 10 | 5 |
当前72项=57同blob+5同路径异blob+10原树未有。后续三个提交与原运行同日但提交时间均在运行结束之后。按当前快照评价旧任务会错纳15个路径或版本；仅按路径仍漏识别5项版本差。变化的5项：docs/ai-d-prompt/index.html、knowledge/INDEX.md、prompts/README.md、research/2026-11-27-human-ai-shared-knowledge-workspace-design.md、research/ACTIVE-RESEARCH-LEDGER.md。原树未有的10项含后续手机研究、83情景结果、专家提示词等。8项真实指纹/缺失/未知正反例全符合预期，详见[时点数据](artifacts/expert-audit-v2/temporal-replay.json)。
限制：Git提交时间不等于准确分支发布/获取/读取时间；报告声明引用不证明逐文件阅读。旧树无文件不证明模型不能从其他来源得知同样知识；15项是快照差异，不是实测模型泄漏率或因果解释。日期规则的反例与blob比较是真实仓库证据，不是模型A/B。可复用[历史证据回放任务](../prompts/tasks/historical-evidence-replay-v1.md)。
## 4. 实际知识组织与提示词转译
[八问题导航](../knowledge/2026-11-27-problem-method-activation-map.md)；[72项机器可读清单](artifacts/expert-audit-v2/knowledge-map.json)；[静态知识导航](../docs/ai-d-prompt/knowledge-map-v2.html)。沿原P1–P8，不新增知识本体。逐路径有中文标题、可重叠主题标签、互斥类型、固定blob/版本及审阅范围。11项原文/相关段落/结构定向核查，其余目录及既有索引级。每条入口由情境→专家原始方法→原件→动作→验收→候选任务表达；保留开放问题和不适用边界。网页提供问题/类型/关键词筛选与复制候选，原页面加链接；静态HTML不自动执行GPT，未实际浏览器/手机交互验证、未公网部署。
## 5. 验收与下一步
真实目录及版本对比、8项正反例、入口源路径、标签、页面内嵌数据与历史25章保护检查。首次保存前路径检查发现回放提示词相对链接错误，已改成../../research/，重新验证；不将一次静态检查算能力提升。独立跨会话/同模型对照未运行。下一轮优先不同领域的真实陌生任务，在执行前保存专业规格，以独立真值和实际成果验证；不重复元研究或为形式完整继续叠加框架。不修改现行AGENTS、定时任务、主分支或权限。MODEL_AB=NOT_RUN / CROSS_CHAT=NOT_RUN / UPLIFT=UNKNOWN。
