# AI-D 人机共享知识工作空间｜多轮外部候选搜索与试用裁决 V0.2
日期：2026-11-27；固定项目基线 22f7913354725e0a5636730121ab62cb76a3f2bc。继承[全域UI与保全设计](2026-11-27-human-ai-shared-knowledge-workspace-design.md)、[承接竞争研究](2026-11-27-knowledge-transfer-transformation-and-evolution.md)、跨层锚点、动态专家责任、知识实际利用、必要条件不可被高分抵消及独立回归。目标不是制作更多界面或选定技术架构，而是在人机共同理解、专业调用、阶段保全、可移植及维护负担之间选择成熟充分方案。用户明确要求多轮外部搜索；不安装、不修改运行配置或扩大授权。
## 1. 三轮检索与候选裁决
第一轮：人机共用知识空间、本地优先、原生MCP、细粒度关系、历史与恢复；第二轮：原始Markdown、导入导出、原生编辑/AI接口、发布和审查；第三轮：版本、真实缺陷、并发冲突、持久化细节、产品之间可组合性。核查具体仓库，避免 OpenKnowledge/Inkeep、openknowledge-sh/openknowledge、openkb-app/openkb、seoeaa/OpenKB、qdivan/OpenKB 及同名Akasha混淆。
| 具体项目 | 机制及依据 | 本轮优先级（研究选择，非实施批准） |
|---|---|---|
| [inkeep/open-knowledge](https://github.com/inkeep/open-knowledge) | [概念](https://github.com/inkeep/open-knowledge/blob/main/docs/content/reference/core-concepts.md)、[MCP](https://github.com/inkeep/open-knowledge/blob/main/docs/content/reference/mcp.mdx)、[人机活动](https://github.com/inkeep/open-knowledge/blob/main/docs/content/features/agent-activity.mdx)、[GBrain兼容实体库](https://github.com/inkeep/open-knowledge/blob/main/docs/content/workflows/entity-vault.mdx)：直接使用现有Markdown，桌面/Web、搜索/图/编辑、检查点、来源归属、Git同步，AI通过MCP检索/读取/编辑/审计。 | 首个隔离试用候选，当前匹配度高但年轻，保留成熟产品对照；语义知识理解/转化仍待验。 |
| [思源笔记](https://github.com/siyuan-note/siyuan) | [官方中文文档入口](https://github.com/siyuan-note/siyuan)、原生块引用、搜索、数据库、属性、图、MCP/CLI/HTTP、Markdown及完整数据导出；[加密笔记本](https://github.com/siyuan-note/siyuan/blob/master/docs/ENCRYPTED-NOTEBOOK.md)说明锁定时不可供AI读取。 | 中文体验及块级认知关联的成熟候选；.sy原生文件与Markdown转换不同，须验证回转与完整恢复。 |
| [Trilium](https://github.com/TriliumNext/Trilium) | [MCP](https://docs.triliumnotes.org/user-guide/llm/mcp)、[原生Markdown笔记](https://docs.triliumnotes.org/user-guide/note-types/markdown)、[导入导出与备份](https://docs.triliumnotes.org/user-guide/concepts/import-export)、[关系查询](https://docs.triliumnotes.org/user-guide/concepts/navigation/search)：命名关系、属性、多视图、版本及API；官方区分整库备份和ZIP导出。 | 有历史的完整工作台对照；数据/ID/属性/历史/Markdown保真、AI读写边界均需真实验证。 |
| [OpenWiki](https://github.com/langchain-ai/openwiki)、[GBrain](https://github.com/garrytan/gbrain)、[Quartz](https://quartz.jzhao.xyz/) | 继承上轮固定源码、文件图/静态发布、版本主张及运行知识层证据；OpenKnowledge官方另有GBrain Markdown兼容工作流。 | 保留：Quartz为阅读基线，OpenWiki为自动维护，GBrain为运行知识候选；不因新项目抛弃。 |
| [OpenKnowledgebase](https://github.com/openkb-app/openkb) | Drupal后端，MCP、AI编辑审查、发布、引用问答，支持Markdown工作台；[官方介绍](https://openkb.app/) | 审查/发布参照；2026-09新项目，beta命名版本，企业运维负担待验。 |
| [seoeaa/OpenKB](https://github.com/seoeaa/OpenKB) | PageIndex、wiki编译、MCP、图/历史/Git镜像；原始资料→知识整理候选 | 尚仅README/文档，不立即安装；检验编译是否保留原始主张及证据。 |
| [openknowledge-sh/openknowledge](https://github.com/openknowledge-sh/openknowledge) | CLI、开放知识格式、证据/质量/导出/查询，不等于Inkeep编辑器 | 知识结构及可迁移检查参照，非全功能UI。 |
| [whkp/Agent-Knowledge-Base](https://github.com/whkp/Agent-Knowledge-Base)、[chaterm/Akasha](https://github.com/chaterm/Akasha)、[LivingKB](https://github.com/LivingKB/LivingKB)、[knoverge](https://github.com/gynsus/knoverge)、[agora-kb](https://github.com/handochan/agora-kb) | 不同组合的Markdown、MCP、知识维护、审批/图/工作台；Agora明确beta、单机无认证 | 探索性线索；前两者API核查无正式release，其他未逐项源码核查，不因功能描述直接进入首选。 |
仓库API核查（不是用户规模/能力评价）：Inkeep 2026-06-03创建，GPL-3.0，最近非预发行 v0.89.17（2026-11-25）；思源 2020-08-30创建，AGPL-3.0，v3.8.12（11-24）；Trilium 2017-05-23创建，AGPL-3.0，v0.107.0（11-08）；openkb-app 2026-09-22创建，GPL-2.0，v1.0.0-beta5（11-27，API虽标非预发行但名称为beta）；openknowledge-sh Apache-2.0，最近列出v0.13.0（08-31）。上述版本为当日API快照；稳定发行包与main源码不可混同。
## 2. Inkeep重点深挖及反证
固定主分支提交 f66742cb591e38ae44c66ce8f131de5c85656746。已读：
- [MCP参考](https://github.com/inkeep/open-knowledge/blob/f66742cb591e38ae44c66ce8f131de5c85656746/docs/content/reference/mcp.mdx)，blob eb5cc6d9bf6e73102e11db9df783ce3c8ac3d040：exec、search（词项/标题/时间及可选语义）、links（前/反链、失效、孤点等）、audit、history、checkpoint、restore；write/edit可返回需重读的差异通知。部分查询/审查有限额；空/被忽略范围不能当全量成功。
- [系统写入边界](https://github.com/inkeep/open-knowledge/blob/f66742cb591e38ae44c66ce8f131de5c85656746/docs/content/reference/what-open-knowledge-writes.mdx)，blob 633740ebaa5034ad2f125dbb41d4e6d25aaaf654：.ok/local/comments、receipts、通知等gitignore；.git/ok（工作树另有路径）影子仓库保留每写入者未提交版本及无法合并的内容，不自动推送；部分外部备份在用户目录，影子历史可能含本机配置/隐私，不可直接公开。ok init可写编辑器MCP/技能配置；--no-mcp、--no-skills可减少副作用（具体发行版先核help）；ok deinit移除影子仓库。故普通Git clone不等同全状态恢复；先隔离和盘点，不直接让该工具接管主仓。
- [内容过滤实现](https://github.com/inkeep/open-knowledge/blob/f66742cb591e38ae44c66ce8f131de5c85656746/packages/server/src/content-filter.ts) blob 146b4ea0be549b7a263c88cda131762baeb14f3e 定向读取：存在.gitignore/.okignore、受管理与结构排除；界面或搜索索引未显示不证明原始文件不存在。
- [真实问题#1094](https://github.com/inkeep/open-knowledge/issues/1094) 曾报告两个并发replace均返回200但一方写入被覆盖；API本轮核实已关闭，更新2026-09-16，不能将历史缺陷冒充当前版本漏洞。读取[写入结果集成测试](https://github.com/inkeep/open-knowledge/blob/f66742cb591e38ae44c66ce8f131de5c85656746/packages/app/tests/integration/agent-write-outcome.test.ts) blob 33c58105e4f7e0121c07b022a290537c60bba433，[并发收敛测试](https://github.com/inkeep/open-knowledge/blob/f66742cb591e38ae44c66ce8f131de5c85656746/packages/server/src/agent-write-replace-crdt-convergence.test.ts) blob af632b65172fe441f8a07fa28ef7b21be905dfa9。已有正常保存、冲突保留双方、拒绝覆盖、未持久化状态及CRDT收敛用例。只读测试源，未执行，不宣称稳定版已通过或所有并发已安全。
实际新判断：优先试用不等于选型；同一知识底座在人/AI/编辑器之间共享具备成熟候选实现，但知识正确理解、类型关系、实际执行/验证并非编辑器自带证明。不能因Git透明而忽略本地状态。已有双向追溯、知识增量保全、V23.4验收回读与SkillOpt必要条件知识直接改变测试范围。
## 3. AI-D全文件清单及已知承接关系实际检查
在固定基线的Git树完整枚举58个文件、51 Markdown、7非Markdown。此为Git树全量路径核查，不是逐字读全仓或导入测试。非Markdown：
- docs/ai-d-prompt/index.html（138286 bytes，网页衍生物）
- research/artifacts/r36-temporal-audit/aid_r36_temporal_audit.py（2279）、aid_r36_temporal_audit_result.txt（455）、replay-2026-11-27.txt（455）
- research/artifacts/v23.6-network-resilience/population.csv（2107）、scenarios.csv（761）、solve.py（4972）。
实际读取两份R36/V23.6报告，分别匹配上述三份产物的文件名。若只保留Markdown，6份真实专业劳动资产和1份阅读产物会漏失；不代表任何特定产品实际丢失。固定总提示词第05章以JS正则 /^-\s+([A-Za-z0-9_./-]+(?:\.md|\/))：/gm 提取12条正文路径（10文件、2目录），与Git树匹配12/12。此前普通Markdown相对链接提取为0出边；这不是孤立知识。需区分原生引用、文字路径、已核实语义关系及实际调用证据。不能把文件引用自动标为语义支持或真实使用。当前目录快照未捕获的历史对话、UI本地交付包及外部附件仍不在此分母内。
## 4. 下阶段隔离试用、必须保护的验收条件
优先以Inkeep稳定版与现有Markdown目录的独立只读/可写副本完成实际试用；若存在环境权限或网络障碍，保存阻塞，切换可用成熟对照，不虚构测试。不要直接在现行研究分支运行自动初始化或同步，不将未批准总提示词当活动规则。
先核全部58项样本（随基线更新）：原文、路径、6专业产物、HTML、明确候选/现行状态；检查中文搜索、12条路径关系、局部关系与反链、资料/证据展开、任务上下文包。之后试两个授权内的真实案例：普通表达的目标变化能激活相关锚点、原历史决策及回归；新的科研任务能找到真实数据/代码/结果而不是只读摘要。实际调用由独立模型/宿主验证，不以界面或接口数量评分。
进一步用隔离副本检查并发覆盖、编辑保留、重复导入、失败后重读、候选修订及回退；对全文件和产品独有数据分别做导出/备份，再在空白环境恢复，比较内容哈希、关系/ID、版本/待处理任务。隐私和授权不可被便利性抵消。将原生能力、成本、维护/学习负担与思源、Trilium、Quartz基线比较；若某个现成产品足够则直接复用，若不足才定向组合，避免重新造整套系统。
本轮完成三轮外部检索、仓库元数据、官方文档、固定源码/测试与真实项目清单及路径核查；未安装/运行候选、未验证AI跨任务实际收益、未做真实恢复，未修改AGENTS、总提示词、任务、权限或技术架构。保留实际专业工作及开放探索。MODEL_AB=NOT_RUN / RESTORE=NOT_RUN / UPLIFT=UNKNOWN。
