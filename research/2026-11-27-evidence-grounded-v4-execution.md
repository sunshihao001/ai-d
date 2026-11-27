# AI-D V4｜实际知识治理、证据应用及工作台恢复
2026-11-27；起点 a4cb23a，整合 be25104d（88项）；审查分支期间有43历史原件并行恢复及其它更新，全部保留。用户在执行中明确要求从梳理转入浓缩、精准索引、归拢、修正、污染清除、具体操作，且不同项目目标独立。
## 实际动作及结果
1. [V4地图](../knowledge/semantic-map-v4.json)：88整合资产、67 Markdown、28主张、34关系；V3余9主张读14段，12制造专题与16历史专家主张映射；不是全库事实真值。29旧固定源版本及1个更新版本实际核对，50活动段落的blob和范围通过；专家导航旧/新对应段落逐字符相等，保留旧pin。Bastani高中数学随机试验（doi:10.1073/pnas.2422633122）、Vaccaro等106实验综述（doi:10.1038/s41562-024-02024-1）、Inspect AI任务规范（https://inspect.aisi.org.uk/tasks）本轮核对原论文/官方文档页面；不外推AI-D因果增益。所有外部源并未逐一重审。
2. [独立外部标签任务](artifacts/semantic-reorganization/v4-entailment/result.json)：SciFact/FEVER完整语料获取受限，转向BIG-bench analytic_entailment固定版本；事前冻结及解析修订。70题全覆盖，30蕴含/40非蕴含；无条件/50%/80%词覆盖错误支持40/29/6，80%漏26个支持，全部拒绝漏30。证明这些启发式不满足本项目自动晋升要求，不是模型A/B或三分类事实核验。公开题非盲测。没有复制原测试文本。
3. [证据使用门禁](artifacts/semantic-reorganization/v4-evidence-use-guard-results.json)：11结构用例、9声明式适用性用例符合预期。旧引用检查对10个超出职责的变异均不拒绝；新增守卫检查顶层与审查内容、证据状态、版本与范围；支持/反驳/不足由明确评估输入提供，非自动语义判定。相似度不作为采用证据。
4. [治理裁决](artifacts/semantic-reorganization/v4-governance-decisions.json)：实际改写INDEX、提示词README、台账（提交4d94087与a51e87e），从 57852 到 13345 字符，减少 76.9%；28条唯一主入口、6处同义完整重复改为交叉引用、八问题、28精确源段落；唯一V5接力。旧B路线、固定角色绑定、25章默认、词匹配即证据、时间与文件数即增益退出默认权威；不判原始历史研究全部错误。两个已无损合并的生成中间文件实际删除，29对象逐条等于最终清单前29条，最终30条保留；原版本由Git固定SHA可恢复。没有删历史知识原件、分支或修改其它项目。通用治理共享，目标、业务对象、权限、验收独立。
5. [工作台](../docs/knowledge-workbench/index.html)更新现有11视图、28主张、88资产、八路线及7收据，历史16+制造12映射；固定审查目录另列。完整生成器在隔离内存文件系统使用真实四源实际运行，14静态断言、V3逐字符回滚、缺源拒绝通过；[恢复结果](artifacts/semantic-reorganization/v4-workbench-recovery.json)。当前容器DNS失败，未做全页浏览器/实际设备/完整仓库恢复，不能以静态检查代替。
6. [入口回归](artifacts/semantic-reorganization/v4-active-governance-regression.json)核28唯一项、28段落链接、八路线、旧blob、唯一接力、已知相对路径及原始整合树保全；非全仓旧锚点审计，V5继续实际修断链。用户新要求已进入实际入口和后续任务，不只形成讨论。
## 真实状态
MODEL_AB=NOT_RUN / CROSS_CHAT=NOT_RUN / FULL_UI_BROWSER=NOT_RUN / FULL_REPOSITORY_RESTORE=NOT_RUN / UPLIFT=UNKNOWN。完整工作台固定源内存恢复与V3回滚已执行，独立模型宿主不可用。研究期间API暂时性错误和并行HEAD变化已核查，原件未覆盖。主分支、调度和其它项目未变更，不宣称已部署；未证明全库污染已清除。下一轮按[唯一V5任务](../prompts/tasks/verified-transfer-and-mainline-v5.md)以真实行动及成果检验知识治理，不继续重复框架。
