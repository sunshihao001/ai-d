# ai-intelligence｜AI 外部智能吸收与学习分支

> 状态：STRUCTURE ONLY / NOT YET KNOWLEDGE-LOADED
>
> 本分支用于承接一个新的长期能力：让 AI 持续从 X、GitHub、Reddit、官方资料、论文、书籍等外部世界发现值得学习的知识、方法、Skill、Workflow、Architecture 与新认知，并由 AI 自己承担大部分发现、比较、研究、验证和整理工作。
>
> **本分支当前只建立组织边界，不批量写入外部知识。**

## 1. 与 ai-d 主项目的关系

- `ai-d/main`：长期目标、已经沉淀的知识、跨领域认知、项目关系与经过当前判断值得保留的长期资产。
- `ai-intelligence`：外部世界的前线学习层。重点不是收藏，而是让 AI 持续发现、研究、验证并形成候选能力。
- 两者不能混为一个资料池。

基本方向：

`External World → Discovery → AI Research → Evidence → Candidate Asset → Validation → Adoption/Reject → ai-d`

## 2. 人与 AI 的职责

当前用户不是专业 AI 研究人员，也不承担大规模人工筛选职责。

用户主要负责：
- 提出长期目标和当前想解决的问题；
- 指出 AI 判断哪里不对；
- 对重要方向做适当修改；
- 通过自然语言持续调教系统；
- 对重大目标、资源投入和不可逆行动做最终决定。

AI 负责尽可能承担：
- 批量发现；
- 搜索和读取；
- 去重与聚类；
- 跨来源比较；
- 证据检查；
- 竞争解释；
- 方法/Skill/Workflow 提炼；
- 候选价值判断；
- 持续观察与状态更新；
- 在授权范围内测试；
- 根据反馈修正自己的判断。

**不要把“用户长期人工筛选”设计成系统的主要瓶颈。**

## 3. 当前资产边界

本分支只允许逐步形成以下几类候选资产：

- Discovery：原始发现，不等于知识；
- Observation：可观察事实或来源内容；
- Claim：待判断的主张；
- Evidence：支持、反驳或限定主张的证据；
- Method：可重复的方法；
- Pattern：跨项目/来源比较后出现的机制模式；
- Skill Candidate：可能转化为 AI 可调用能力的程序性知识；
- Workflow Candidate：可能复用的工作组合；
- Architecture Candidate：值得进一步验证的系统结构；
- Insight：改变判断的认识；
- Rejection / Deprecated：明确不采用或已失效的内容。

**Source 本身不是长期知识。**

## 4. 当前不允许做的事情

- 不把搜索结果直接写进主知识体系；
- 不因为 X 帖子、README、单个模型回答而形成永久规则；
- 不把“已经研究过”写成“AI 已经掌握”；
- 不为了分类而无限增加目录、标签、阶段；
- 不把每次用户纠偏固化成全局规则；
- 不在没有验证时声称 Skill 已经有效；
- 不因为本分支建立就复制 main 中已有的大量知识；
- 不在本阶段建设完整自动化 Runtime；
- 不以文件数量、来源数量、研究轮数作为进展指标。

## 5. 建议的研究状态

`DISCOVERED → CANDIDATE → RESEARCHING → EVIDENCE_CHECK → EXTRACTED → TESTING → ADOPTED`

并允许随时：

`CANDIDATE/RESEARCHING/TESTING → REJECTED / DEFERRED / UNKNOWN`

这些状态只是记录研究成熟度，不是要求每个对象机械走完整流程。

## 6. 未来数据流

`X / GitHub / Reddit / Web / Papers / Books`
→ `Discovery`
→ `Candidate Pool`
→ `AI Research`
→ `Evidence`
→ `Method / Skill / Workflow / Architecture / Insight`
→ `Test`
→ `Adopt / Reject / Observe`
→ `ai-d main`

第一阶段只建立结构；真实自动化要等结构经过实际任务检验后再决定。

## 7. 第一批研究主题（仅作为入口，不是永久分类）

优先观察：
- Agent Skills
- Skill discovery / registry / evaluation
- Agent workflows
- Deep Research / autonomous research
- Multi-agent coordination
- Memory / context engineering
- MCP / tool use
- AI automation
- AI learning / knowledge extraction
- Repo-to-Skill / knowledge-to-Skill
- AI self-improvement / evaluation

这些只是当前研究入口，不能成为固定知识边界。

## 8. 与 Hermes / Muse / GPT 的关系

- Hermes：主要作为研究、工具调用、执行和长期运行环境。
- Muse：可作为低成本、大规模外部发现与实验节点。
- GPT：承担独立判断、竞争解释、架构复核等高价值认知工作。
- ai-d：保存最终值得长期复用的知识、方法和经验。

具体协同架构暂不在此阶段定死。

## 9. 当前验收标准

这个分支第一阶段完成的标准不是“收集了很多资料”，而是：

1. 与 main 的知识边界清楚；
2. 新资料有地方暂存而不会污染长期知识；
3. AI 能区分 discovery / evidence / hypothesis / adopted knowledge；
4. 用户不需要承担大量人工筛选；
5. 后续可以接入 X、GitHub、Reddit 等来源；
6. 后续可以由 Hermes/Muse 自动运行；
7. 经过验证的资产能够有选择地回流 ai-d；
8. 错误内容可以降级、修订或淘汰。

## 10. 当前状态

**只完成结构，不代表已经具备自动学习能力。**

下一步应先检查本分支结构是否足够承载真实研究，再建立第一轮外部来源采集与研究实验。
