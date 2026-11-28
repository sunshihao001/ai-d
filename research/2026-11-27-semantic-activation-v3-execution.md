# V3 实际执行：主张校勘、证据契约和工作台
2026-11-27｜PR #4 审查分支；不合并、不自动部署、不改变现行 AGENTS、权限及调度。

## 1. 实际版本与证据
- 起始整合 506fe4d4655f2e94aae1c6a292b288287f1bcc35（79资产），审查起点 e303c51；继承 V2 72项、27候选、32关系。79固定快照实际原件核查继承72项并读取11处新增/变化（7新增、4变化）。63/63 Markdown 已关联，865章节；目录/关联覆盖不等于逐段理解。
- [V3语义地图](../knowledge/semantic-map-v3.json)与[审计](artifacts/semantic-reorganization/v3-claim-review.json)，提交31fde29：28主张、19定向段落校勘、9仍候选；34关系，纠正7条类型和3条方向。K-INTENT约束K-PROMPT，K-EVAL约束使用收据与韧性评价。历史62→79：57同内容、5变更、17新增；只证明快照差异，不证明模型实际接触或泄漏。
- 未校勘优先队列：K-LEARN、K-UNKNOWN、K-SEARCH、K-CAP、K-RUNTIME、K-CONT、K-REAL、K-RESILIENCE、K-EVOLVE。source_reviewed不是独立模型验证；外部来源与每条推论仍须按用途审查。Chi专家问题表征、SKOS关系语义及Fowler双时间区分实际约束了本轮判断。

## 2. 新的实际专业工程任务
[事前冻结](../prompts/tasks/evidence-contract-validation-v1.md)；旧校验仅验证引用结构，无法阻止空主张、缺证据及状态越级。借用 JSON Schema 官方公开测试仓库 e2a68a15cd490750fd6b95e604e4054d7d978d1f 与 Python jsonschema 4.26.0；实际执行89/89标准案例（18必填、20条件依赖、30条件分支、21额外属性），28/28真实review记录及13/13变异断言（2合法、11拒绝）。输入指纹核对：标准案例aa59c45e、review记录8d711586（FNV-1a UTF16）。[真实运行结果](artifacts/semantic-reorganization/v3-contract/result.json)、[契约](artifacts/semantic-reorganization/v3-contract/review-contract.json)、[程序](artifacts/semantic-reorganization/v3-contract/validate_reviews.py)。提交6f0d1ae。最终脚本包装调整为外部契约与退出码，未单独重跑该包装；运行证据来自此前实际本地测试。旧引用检查保留，新契约补充而非替代。结构合法并不证明主张与证据蕴含一致；不得由schema通过自动晋级知识状态。

## 3. 工作台设计和执行验证
[现有工作台](../docs/knowledge-workbench/index.html)、[V3设计](../docs/knowledge-workbench/DESIGN-V3.md)、[生成程序](../docs/knowledge-workbench/generate-workbench.cjs)。11视图及八条问题路线；显示79固定快照、28主张和19/9状态，正本路径/提交/段落、筛选、条件任务与5使用收据，旧V2保留。b7f0a0e实际生成，13/13静态断言（数量、关联、锚点、确定性、代码语法等）。
浏览器 Chromium 144.0.7559.96 实际代表样本17/17：4真实主张和P5路线，精确客户端和CSS指纹f4978cbc/d31fd8d8；393px手机与1280px桌面，中文/空结果/筛选/隐藏跳转/焦点/复制分支等。DNS和管理员限制阻止完整网页联网与HTTP回环，使用set_content；剪贴板使用注入替身分别测试成功/失败，未验证真实系统剪贴板、用户设备、全页浏览器或完整恢复。[结果](artifacts/semantic-reorganization/v3-browser-probe-result.json)、[复验脚本](artifacts/semantic-reorganization/v3-browser-probe.py)。脚本为本轮逻辑的可复验版，删除未使用HTTP服务器包装；未重新运行此包装。工作台固定79快照，更新见最新增量，不能把旧投影当实时全量。静态网页不自动接通GPT或修改知识正本。

## 4. 并行认知回收
执行期间整合分支发展至be25104d76a0f61135467746812ab93c0044dcca（88资产，79→88新增9、变化6）。已真实双亲合并到审查分支98d0c17dee070d6701876a5401308336516c5253，保留双方索引、提示词入口及台账。并行制造质检报告8份原件、12专题主张、30批1500抽检347不合格，第15/23批超限、14断言与SciPy独立复算均为上游运行记录，本会话未重跑其程序。[成果](../cases/2026-11-27-manufacturing-quality-evidence-v3.md)；[12专题主张交叉映射](artifacts/semantic-reorganization/v3-parallel-manufacturing-delta.json)，不能与本轮19项相加冒充独立校勘。88项未全部进入本轮固定79投影，下一轮更新。

## 5. 阶段裁决及接力
实际证明：既有知识能转化为有独立标准真值的专业测试任务、执行代码及复验结果；知识定位和交互有局部真实检查。未证明：相较原生模型的因果增益、独立跨会话自动承接、全量语义正确、真实手机用户效用、完整回退恢复、长期成本收益。MODEL_AB=NOT_RUN；CROSS_CHAT=NOT_RUN；FULL_UI_BROWSER=NOT_RUN；RESTORE=NOT_RUN；UPLIFT=UNKNOWN。下一轮优先主张与证据内容一致性、状态及跨会话适用性，不再重复搭建框架。[完整V4任务](../prompts/tasks/evidence-grounded-execution-v4.md)。
