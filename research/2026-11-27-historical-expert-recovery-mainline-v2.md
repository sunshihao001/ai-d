# AI-D 历史知识深层归并与统一主干验收 V2.0
2026-11-27｜继承[恢复V1](2026-11-27-historical-expert-recovery-and-mainline-audit.md)。状态：候选分支实质归并，不合并main、不启用技能、不建设专家中心。起始HEAD 536399e0606635aa8264241d0ff0dc43e96a34bf；main f89a300d154e6c85cbb61d81ca511664926b9725；integration be25104d76a0f61135467746812ab93c0044dcca。开始时review已有并行V4事前诊断规格，保留。历史各分支HEAD与V1相同。

## 1. 实际原件迁移与核验
- 6955ce4 保存[PR1/2旧增量逐行对照](artifacts/historical-expert-recovery/pr1-pr2-line-overlap-v2.json)。PR1四个重叠文件221条非空新增行仅2条精确存在，PR2五个重叠文件85条仅1条精确存在；字面未命中不是语义缺失，不能机械覆盖。
- [69a2e1b](https://github.com/sunshihao001/ai-d/commit/69a2e1be932c2bb48d802c4e423d43550ec69fd8) 原路径恢复11份：五份planning、COGNITIVE-MAP、专家概念导航、认知提取研究、检索脚本/报告、来源适配测试。起点11路径均404，提交前compare确认仅11 added，非强制ref更新；逐份远端blob匹配11/11。9份Markdown抽取46条相对文件链接，13个不同路径全部可读；未校验锚点语义、外链或全部旧实验基线。
- [aca6e62](https://github.com/sunshihao001/ai-d/commit/aca6e62008698e38fe87544b49b09df6e65b4e36) 原样归档旧ai-intelligence 29个差异路径（21研究/台账/队列/说明、8目录说明）、两份历史技能非SKILL.md、原路径清理报告，共32原件+1归档说明；compare确认33 added无覆盖，原件远端blob核对32/32。合计43历史原件100%匹配。归档原文中链接及旧状态仅代表历史，禁止自动加载；不复活旧目录架构，不把空表当工作完成。源提交仍保留。
- 本轮本地git ls-remote因DNS失败，不能做完整clone、真实三方合并、全库测试；上述为实际Git树选择性恢复及原件完整性核验。

## 2. 补充主张级恢复（承接H01–H16，不重复）
| 编号 | 历史原件/专业意义 | 适用条件与反例 | 现行归位 |
|---|---|---|---|
| H17 | [目标导航](../planning/goal-navigation-v0.1.md)：目的、长期目标、中间成果、路线、当前任务分层；支持/替代/并行/冲突/暂停是不同关系 | 局部专家研究不替代整体目标；旧G0–G4不是强制框架 | AGENTS/目标锚点，按需借用 |
| H18 | [方案评审](../planning/proposal-review-v0.1.md)：形成候选、反向挑战、实施推敲分别解决不同不确定性 | 简单可逆事项不走三轮；有新证据才延长 | P1/P6；用户普通表达不承担流程 |
| H19 | [历史收敛](../planning/historical-consolidation-v0.1.md)：来源/知识/当前决定三层分开；同义、冲突、过时、待证裁决 | 原件存在不证明旧指令有效；七八月私人资料尚未重新取得 | 历史证据保留，不复活9阶段/48组/197动作 |
| H20 | [研究写回](../planning/research-to-github-v0.1.md)：研究结论、知识正本、决策、真实评测按职责归位；实际写入回读才称已保存 | 自动同步非默认；隐私/版权不能外泄 | 当前写回纪律；项目main候选可入库但不可自动晋级 |
| H21 | [批量入场](archive/ai-intelligence-0db397e/ai-intelligence/12-BULK-INTAKE.md)：捕获不等于相信，多尺度去重与幂等恢复 | 同实体多来源不等于独立证据；不为小任务建数据库 | 仅批量场景候选，源与主张分离 |
| H22 | [覆盖缺口](archive/ai-intelligence-0db397e/ai-intelligence/13-COVERAGE-AND-GAPS.md)：按改变决定的缺口生成下一研究，而非源数量 | 无须100%覆盖；未知不是已证否定 | 研究台账按价值与缺口接力 |
| H23 | [运行检查点](archive/ai-intelligence-0db397e/ai-intelligence/14-RUN-AND-CHECKPOINTS.md)：运行事件与结论账本分离；可恢复任务、版本、资源、分类重试 | 失败/阻断/降级均有效状态；不是存私有推理或固定廉价模型 | 结合现有调度/资源，未建设运行时 |
| H24 | [晋升规范](archive/ai-intelligence-0db397e/ai-intelligence/07-PROMOTION-POLICY.md)：晋升是证据支持的采用决定，非存储事件 | 历史分支“验证后进main”不得误作研究不能入main；证据状态与Git位置正交 | main可保存候选；现行能力采用另验 |
| H25 | [来源契约](../evaluation/source-decision-contract.test.mjs)：目标、对象、版本、权威、关系、权限的元数据匹配 | 不自动验证真实证据正文、时点上限或日期有效性 | 实际回归21/21；新增边界反例，详见第4节 |
| H26 | PR2原有验收：专家互补、选择性外显、低风险自主、重要冲突披露、学习时充分解释 | 不以固定专家团队或流程替代独立验证 | 恢复历史候选评测与治理原段，NOT_RUN |
| H27 | [外部智能清理](2026-11-16-reconciliation-and-cleanup.md)：理论、代码、真实运行、社区线索职责不同 | 未读取的X链接不得推断作者观点；来源无法查证不等于目标不存在 | 复原旧来源限制，保留现有正文 |

## 3. 实际同路径冲突裁决
以当前正文为优先，不做旧PR整体合并。下列是段落级选择，不是完整git merge冲突测试。
- PR1 README/goal-options：保留当前长期目标，原有上位愿景不扩大产品、权限或覆盖当前用户决定。旧G0–G4和四条路线作为规划候选，不修改README/decisions。原件 [README](https://github.com/sunshihao001/ai-d/blob/aba723074d2c1a83fb129bd14473fa571f29ad34/README.md)、[goal-options](https://github.com/sunshihao001/ai-d/blob/aba723074d2c1a83fb129bd14473fa571f29ad34/decisions/2026-11-05-goal-options.md)。
- PR1/2 评测正文：现行文件原题仍“研究方案尚未执行”；不能据此否定已运行局部测试。保留原正文并恢复8个旧日期段落（历史检索、Issue反例、来源契约、交付/跨项目、专家团队与外显评测）；明确独立模型尚未执行。旧完整评测blob见[PR1](https://github.com/sunshihao001/ai-d/blob/aba723074d2c1a83fb129bd14473fa571f29ad34/evaluation/first-cross-domain-tests.md)/[PR2](https://github.com/sunshihao001/ai-d/blob/745a981953d1704772fa1c2a18d2dc0cb7dd5350/evaluation/first-cross-domain-tests.md)。历史段落中执行/链接状态为当时记录，不当最新运行事实。
- PR1/2 INDEX：保留现行八问题入口与V4并行研究；增量链接已恢复的原件，不复制旧目录结构。
- PR2跨学科基础：现行仅摘要及历史链接；恢复3个原段落，开放槽位、技能候选固定版本、许可证/权限/无自动绑定边界。不复活默认团队；旧技能原件保存在[归档](archive/README.md)。
- PR2系统治理：恢复2个原段落，角色分工/选择性外显作为历史用户确认原则，与现行AGENTS互补，不改执行入口。
- reconcile：外部智能源文件与历史版除一条来源边界外均有精确旧行；追加原X限制。组织规范旧一条解释未精确命中，当前规范已覆盖其方法含义，保留历史[原件](https://github.com/sunshihao001/ai-d/blob/5ce3ea8b007ed98e7fff55c12f437ef04e0cbc7a/knowledge/foundations/organization-protocol.md)及清理报告，不重复新增制度。其余重叠README、INDEX、台账的逐段校勘未穷尽。
- consolidation：其INDEX及台账所有非空旧行在当前候选中精确存在，不重复并入。
- 旧技能存储和采用分开；不复制到. agents自动加载位置。现行AGENTS/提示词主文、静态工作台、调度及权限不改。

## 4. 真实回归及新增反例
精确传输旧测试源至隔离Node.js v22.16.0，本地git hash-object与原blob b1313a159b9ba409c5de2a3bb3371a5cd7e72661一致。node --test实际21/21通过，0失败。新增5项探测实际2项满足更严格下游准入期望、3项不满足：未来时点、非法日期、正文反驳但标签声称支持均返回CANDIDATE_EVIDENCE_MATCH。旧代码明确只做候选元数据筛选，故这是其适用边界，不是假称旧21项失效。R36和并行V4证据语义研究应继承这些反例；不另造竞争性语义系统，不修改原测试。
[结果](artifacts/historical-expert-recovery/source-contract-v2-result.json)；[复验脚本](artifacts/historical-expert-recovery/source-contract-v2-probe.mjs)，保存版本仅按仓库路径调整import，未重新执行调整后包装。原检索BM25全语料复跑、全库测试、独立模型/跨聊天未做。

## 5. 主干验收条件
当前追加提交以最新候选 e09da477c5292fac49dc6cd074c2bcece124e39b 为父级，非强制更新前核对变更清单并使用HEAD lease；无删除。已完成历史原件恢复、部分同路径语义裁决、原件哈希、局部链接及确定性回归。尚欠：全部重叠文档深层审查、旧脚本固定语料复跑、完整三方合并/恢复、所有现行入口与静态工作台新资产投影、V4并行增量及独立跨会话验证。历史原件中的Draft旧分支、路径/时点等应保留为证据，而不是一键替换全部链接；只将现行入口指向最终main。先核实时HEAD与并行研究成果，确定候选，待充分验证及用户授权后再统一main；不擅自合并或删除分支、调度不变。MODEL_AB=NOT_RUN; CROSS_CHAT=NOT_RUN; UPLIFT=UNKNOWN.

## 6. 并发提交与实际保全校验
初次构建435272e未更新分支：外部智能原文末尾无换行，Git diff将追加操作统计为1行删除；逐字读取六个修改文件，原文全部完整保留（索引为后缀，其余为前缀）。同时远端HEAD推进至ae16d849a81f3a44feed31dcae499bfd632e19ae，实际compare确认并行文件与本次九路径无交集，保留全部并行增量后基于新HEAD重新构建候选，使用非强制ref更新及expected_sha。并行路径：knowledge/semantic-map-v4.json；research/artifacts/semantic-reorganization/v4-evidence-lines-verified.json；research/artifacts/semantic-reorganization/v4-evidence-use-guard-results.json；research/artifacts/semantic-reorganization/v4-evidence-use-guard.cjs。其V4证据语义验证由原研究负责，本轮只核对差异，不冒称重新执行。历史原件与当前文件未删除。
