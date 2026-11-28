---
name: ai-d-cognitive-core
description: "按需借用 ai-d 完整专业认知知识体系：从普通意图升级、跨学科知识探索、专家机制研究、方案选择，到授权内交付、证据反证、持续纠错和历史继承。供不同项目复用，不取代项目本身的目标与领域事实。"
---

# ai-d 通用专业认知能力｜跨项目调用入口（候选 V0.1）

> 来源：公开仓库 `sunshihao001/ai-d`，目前完整研究仍位于 Draft 分支 `proposal/goal-planning-knowledge-delivery-20261106`，**未合并 main**。本 Skill 是可移植的轻量接入说明，**不是模型训练、自动获取外部资料、真实 Bot 安装或实际能力提升的证明**。缺少访问 GitHub 的权限/工具时应报告未读取，而不是凭想象宣称已继承完整体系。

## 2026-11-07｜上位愿景与消费者边界

ai-d 的[长期愿景](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/README.md)已经扩展为：帮助普通人在 AI 时代跨领域学习、谋生、判断、创造和长期发展，实际增加可选择的机会与可完成的工作。**这里的认知内核 Skill 是其跨项目知识能力入口之一，而非完整社会化生活支持产品。** 原有七项认知能力继续保留，不删减专家思想、理论、历史方法和跨学科研究；需要时可从上游检索新专业来源，不将入口误当已完成的全面知识内化。

消费者仍以**自身明确任务**为中心：Blix 需要的是 Meme 业务的专业研究、产品交付和只读证据可靠性；制造业项目可能需要技能学习与安全。消费者不应因上游愿景扩大，擅自代替个人职业/财务/医疗决策，也不得推断已获得上游未公开的私人材料。长期愿景的扩展不会自动增加任何运行时工具、上下文权限或实际测试通过状态。

## 总体原则：复用整个能力空间，不要求每次全量加载

与上游 `ai-d` 保持同一个完整能力目标：
1. **问题表征与目标演化**：普通语言、用户已确认目标、AI 解释候选、关键未知及纠偏。
2. **成熟专业知识与组织**：标准概念、专业关键词、上下位关系、原始理论、经典著作及知识状态。
3. **开放研究与认知发现**：向上/向下/跨域/反向探索、专家机制、竞争解释、新假设。
4. **独立判断与成熟方案**：证据价值、可复用成品、成本、停止与取舍。
5. **授权内实际执行与交付**：真实文件/程序/分析/行动，以及回读与验收。
6. **来源可靠、反证与纠错**：主张—证据对应、版本、反例、UNKNOWN，区分静态/离线/真实运行。
7. **长期继承、更新与能力迁移**：历史有效知识复用，旧指令失效，新反馈修订；不可让局部方法劫持整体目标。

这七项是**并行认知能力**，不是顺序命令、固定专家或模块。始终从消费者项目自己的任务出发，按需调取其中相关部分；如果任务需要，可以横向补查其余能力以发现关键遗漏。不能只因为当前任务是“检索问题”，就将整套体系缩成 RAG。

## 可信来源与完整索引

上游研究总入口（当前 Draft，访问时请先核查分支/提交）：
- [ai-d 目标与全局定位](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/README.md)
- [G0–G4、并行能力与整体—局部反馈](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/planning/goal-navigation-v0.1.md)
- [P1–P8 知识种类、专业入口、全部可用文件导航](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/knowledge/INDEX.md)
- [完整认知图、七八月来源、机制、适用与历史裁决](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/knowledge/COGNITIVE-MAP.md)
- [专业词、概念关系与跨行业探索](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/knowledge/foundations/expert-concept-navigation-v0.1.md)
- [跨领域理论、书籍、标准与适用边界](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/knowledge/foundations/cross-disciplinary-foundations.md)
- [专家认知提取与能力迁移的未验证研究](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/research/expert-cognition-distillation-positioning-2026-11-06.md)
- [研究如何进入知识体系、版本和污染修订](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/knowledge/foundations/organization-protocol.md)
- [调查、方案比较与行动停止判断](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/planning/proposal-review-v0.1.md)
- [授权内 GitHub 交付与回读](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/planning/research-to-github-v0.1.md)
- [历史知识审查与失效记录](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/planning/historical-consolidation-v0.1.md)
- [研究过程与跨来源论证](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/research/2026-11-05-ai-coordination-reverse-inference.md)
- [对照、失败、实跑和未实跑的评测状态](https://github.com/sunshihao001/ai-d/blob/proposal/goal-planning-knowledge-delivery-20261106/evaluation/first-cross-domain-tests.md)

原始专业材料可能位于私有 Library；**GitHub 指针不等于外部消费者已获私有原文访问权**。

## 消费者怎样实际调用（按问题触发，不是所有工作必经）

从用户原话和消费者项目本地的领域目标/事实开始。遇到简单事项，按本地能力直接完成；遇到复杂、跨领域、目标可能变化、知识相互冲突或需要验证的任务，按实际缺口选择上方适当的文件读取并核对上游版本。核心问题是：专业知识具体改变了哪项判断、发现了哪条新问题、帮助交付了什么？

- 消费者项目的领域目标、真实源码、现有权限与安全边界优先决定**本项目能做什么**。ai-d 提供通用问题表征、专业研究和证据方法，不替代 Solana/制造/医学等领域事实。
- 读到源文件后，区分原始来源、已有理论、AI 作者推论、历史建议、已实测/未实测；对是否适用当下问题作出判断，不能只复制其标题或大量提示词。
- 如项目有多个目标，保留整体 G0/G1 与并行能力，局部实验最多是支持部分目标。允许新证据提出候选方向，但重大变更需人确认。
- 知识足够、已有成熟方案或可逆工作可直接实施时，不为展示研究能力继续无限搜索；必要时说明成本、风险、反证和可推翻条件。
- 不允许交易、付款、公开发布、签名、删除或访问未授权私人资料，仅凭 Skill 文本扩大模型工具权限。
- 完成后给出：**本地实际问题；调用了哪些 ai-d 原始文件/版本；真正改变的判断或行动；交付/核验结果；仍未验证之处。** 无实质增益时说明本次未使用 ai-d，不能捏造调用成功。

## 跨不同运行时的启用事实

- **Codex / 支持 Agent Skills 的本地运行时**：将本文件所在目录安装到其识别的 repo/user Skills 路径，核实模型能发现、读取，并能够继续打开上游链接。
- **Grok CLI**：按当前官方目录规则放在 `.grok/skills/<name>/SKILL.md` 或已配置的技能目录；是否能联网取上游资料需要实测。
- **Grok Bot 云电脑原生 Skill**：在 Bot 的技能库创建/启用该过程并实测读取 GitHub。仅把本文件放进 GitHub **不会自动注册到 Bot**。
- **ChatGPT Projects**：在目标 Project 连接/添加可访问的资料入口，并在本次任务中按需读取；GitHub 连接器按需获取，不是所有项目自动拥有同步知识索引。

**版本纪律**：生产使用先记录所读上游 Git SHA，并在变更后做回归检查；Draft 分支更新与最终 `main` 合并必须区分。未经核验不得把旧结论和范围内的私有知识扩散至消费者项目。
