# AI-D V2.0｜语义重整、行动调用和共享工作台实作记录
日期 2026-11-27。基线 7f536867a19669be4675aa946353d8ef479b43a5（72资产，59 Markdown，13其余原件）。PR #4 原head 6e40801，最新整合比共同基线领先1提交；实际合并提交 e13322d 保留72项最新原件与六项审查新增成果，两个导航有内容合并。没有修改main、调度、权限，不合并PR。此前目录69项为历史快照。
## 1 实际覆盖及语义边界
四批59份正文成功获取，8583行、846章节、308条有效相对文件引用（目标路径级，无缺失；非标题锚点/外链真值检查）。另13份文本型非Markdown实际获取并核对blob。72/72文件SHA匹配。6条历史分支树对照并定向读取7个有价值历史文件（完整其他分支逐段审查未完成）；旧C01–C16概念网与实体/主张/证据等作为历史原件链接，不另造框架。全量指文件级正文获取与导航覆盖，并非逐段校勘/每个主张证据核查。
[语义图谱投影](../knowledge/semantic-map-v2.json)：27个主张候选、32条有类型关系，59份Markdown至少有一个候选主张关联。用原始文件、commit、blob、章节行定位；章节未匹配时明确document_entry。非证明32条因果关系或全846节均完成。初版漏映射11-05历史裁决，通过覆盖检测发现并修复K-DECISION；保留历史证据，不覆盖现行目标。现行正本、历史25章及原有AGENTS未改。旧版69项清册保存不改，[新清册与语义候选](../knowledge/semantic-map-v2.json)为本轮投影。
## 2 专业方法与实际动作
Ars Contexta重织、OpenWiki版本化主张、SKOS关联、Diátaxis按使用目的、Agent Skills按需加载；方法、边界及实际运用见 [工作台设计契约](../docs/knowledge-workbench/design-v2.json)。未安装外部产品；本机git网络DNS失败，不以此阻止已授权GitHub连接实际交付。具名专家方法来自已读取的最新研究，不冒称独立专家会诊。三条[实际知识使用收据](artifacts/semantic-reorganization/knowledge-use-receipts.json)链接具体对象、行动、产物、验收和局限。
## 3 真正专业任务（自选、非独立模型测试）
[事前规格](../prompts/tasks/dual-outage-service-boundary-v1.md) 在计算前独立提交6bda317。保持V23.6人口、14候选全开、每中心30万吨、需求100万吨及球面距离×1.2、分流与停运后适应不变，只变化最大服务距离。实际运行[最大流脚本](artifacts/semantic-reorganization/dual-outage-service-boundary.cjs)对应算法与[结果](artifacts/semantic-reorganization/dual-outage-service-boundary.json)。91对双停运：1100英里90/91可行（California+Washington未满足36270.772485吨等效）；1169.888022英里90/91（Washington未满足23401.769162吨）；最小1178.7989192334503英里91/91。Washington第三近中心Colorado产生必要下界；全部91对最大流确认此下界充分。守恒最大误差3.49e-10吨；容量、距离、前一阈值失败等7项断言通过。不是实业路网、最低成本方案、实际收益、盲测或独立模型A/B。CLI脚本为本轮实际运行函数的保存版本，Node CLI未独立重跑。
## 4 变更及验证
[真实版本差异及语义反例](artifacts/semantic-reorganization/semantic-and-drift-validation.json) 7处变更、3新增，7项基线断言；6个语义检查正反例（正确快照、陈旧blob、缺源、悬空关系、重复ID、漏历史决策）符合预期。验证是结构和版本，不是事实真值。
## 5 UI及技术设计
[工作台 V2](../docs/knowledge-workbench/index.html) 与 [设计契约](../docs/knowledge-workbench/design-v2.json) 同源：11个区域、六域/问题筛选、主张/情境/原件、正反向关系、真实工作收据、任务结果、变更状态、历史源及接力。静态无执行API、无部署、无自动GPT连接、无实时HEAD保证；保留历史25章阅读页。生成器与静态结构验收保存。实际浏览器、手机可用性、独立跨会话、完整恢复和模型A/B仍未运行。
## 6 剩余工作与接力
[下一任务](../prompts/tasks/semantic-activation-and-review-v3.md)：从全文件导航进入高价值主张级证据核查，优先版本变化/历史冲突及使用结果关联；选择新的独立可核工作，检验知识组合是否改善真实交付；必要时修候选，分阶段保存。保留未见对照，若无独立宿主标NOT_RUN。当前结论 SEMANTIC_CANDIDATE / FILE_RETRIEVAL_COMPLETE_FIXED_BASELINE / MODEL_AB=NOT_RUN / CROSS_CHAT=NOT_RUN / UPLIFT=UNKNOWN。
