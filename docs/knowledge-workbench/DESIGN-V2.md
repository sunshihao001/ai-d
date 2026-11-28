# AI-D 共享工作台 V2｜专业交互与系统设计契约
状态：静态投影实作与专业设计候选；非自动运行时。正本 [机器可读设计](design-v2.json)，[界面](index.html)。

## 首页与成果
- 用户任务：手机首屏理解根本目标、最近实作、重要未知与接力
- 数据对象：semantic-map coverage + receipts + fixed baseline
- 操作：查看真实覆盖、三项实作和下一任务
- 状态/异常：快照日期、来源版本、未实测、当前HEAD未知
- 验收：覆盖数从数据计算；状态非颜色唯一表达；不显示伪进度/实时性
- 尚待：独立新会话和实际运行状态需可用宿主提供

## 目标意图
- 用户任务：理解当前目标、历史方向与人的决策权
- 数据对象：K-GOAL/K-INTENT/K-AUTH/K-DECISION
- 操作：查看主张、条件、边界及原件
- 状态/异常：现行目标、历史候选、待确认改变分别显示
- 验收：历史B路线不冒充当前目标；重要授权单独披露
- 尚待：目标变更回执、可撤回决定和实时反馈

## 知识体系
- 用户任务：按问题、域、来源、原文与关键词定位
- 数据对象：27 cards + 72 inventory + 846 headings
- 操作：搜索主张、按六域和P入口筛选、展开章节、跳固定版本
- 状态/异常：候选语义、源版本、未复核细节、空结果
- 验收：59文档均有关联；搜索对空/大小写/中文有效；不能把章节命中当真值
- 尚待：细化段落级主张、外部证据及版本更新

## 关系与情境调用
- 用户任务：查看何时用知识、为何有关、具体怎样行动
- 数据对象：typed relations + trigger/action/limit + routes
- 操作：选卡查看正反向边、条件、证据；复制含仓库和分支的专属请求
- 状态/异常：关系为综合候选；版本变更触发复查，不自动判假
- 验收：32条关系有端点、类型及理由；复制失败反馈；不自动发送GPT
- 尚待：按实际任务选择和独立检验召回

## 研究证据
- 用户任务：区分原始材料、研究主张、运行产物、真实验收
- 数据对象：inventory + receipts + historical source links
- 操作：打开原始代码、数据、结果及失败反例
- 状态/异常：原件、历史结果、实际局部运行、未验分别标识
- 验收：所有链接有精确路径；不能以原始资料数量代替证据
- 尚待：逐项核外部来源与复现

## 专业能力
- 用户任务：明确专家具体方法和可用能力，而非专家名称
- 数据对象：K-EXPERT/K-CAP/K-RUNTIME + expert audit
- 操作：按真实问题看具名方法、适用界限、原件与使用收据
- 状态/异常：方法借鉴、历史工具版本、未安装、未独立协作
- 验收：无虚构专家活动、工具调用或角色配置
- 尚待：按任务的能力可用性探测、许可与成本

## 提示词版本
- 用户任务：区分历史25章、现行AGENTS、V2执行、后续任务
- 数据对象：prompts README + old archive + specific task specs
- 操作：查看版本差别和任务请求，复制短接力
- 状态/异常：历史候选、用户授权本轮、未来候选、不自动部署
- 验收：历史原件固定链接；现行入口分开；手机无安装
- 尚待：独立新会话的入口可用性与留出对照

## 任务与验收
- 用户任务：理解已做什么、知识怎样改变行动、实际成果
- 数据对象：receipts + numeric boundary + validation
- 操作：看三个真实任务、证据、反例及下一可验收行动
- 状态/异常：实际执行、局部结构检查、未独立验证与阻塞
- 验收：保留事前任务及实际结果；不以completed替代成果
- 尚待：受控独立模型/真实行业任务对照

## 变更与决策
- 用户任务：掌握知识更新、冲突、必要复查及保留项
- 数据对象：drift audit + historical decision + current branch
- 操作：查看7处实际差异、旧/新blob、合并处置
- 状态/异常：最新基线为历史时点；合并导航需语义核对；未合并主线
- 验收：来源版本差异明示；不能用陈旧快照自动覆盖
- 尚待：提交前检查HEAD；处理未来并行修改

## 保全与恢复
- 用户任务：原件、版本、引用、产物、状态可恢复
- 数据对象：Git snapshots + manifest + existing verify_snapshot.py
- 操作：查看源路径、SHA、覆盖、验证脚本与失败记录
- 状态/异常：Git保全非异地备份；实际恢复未验；DNS阻塞
- 验收：缺源/陈旧/悬空关系可识别；不伪造恢复成功
- 尚待：完整导出、独立环境恢复及产品独有数据测试

## 外部专业参照
- 用户任务：知道方法为何借鉴、哪里不可照搬
- 数据对象：W3C SKOS / OpenWiki / Ars Contexta / Diátaxis / Agent Skills
- 操作：查方法及其具体改动
- 状态/异常：文档核对、方法借鉴，未安装或端到端运行
- 验收：概念、证据、行动边分别处理；不直接推广外部效应
- 尚待：真实缺口触发隔离试用

## 全域系统契约
- authoritative：README/AGENTS/INDEX/ledger及各专业原件继续正本；semantic-map-v2.json为可再生成/修订的语义投影，receipts记录实际动作；历史固定提交不可冒充HEAD
- objects：Source(path,commit,blob,line,heading,locatorPrecision); Claim(id,status,domain,questions,claim,trigger,action,limit,sources); Edge(from,type,to,why); Receipt(task,knowledge,condition,action,evidence,result,status,limit); Inventory(path,sha,sectionCount,claimIds)
- identity：稳定ID与文件路径分离；Git SHA固定来源；主张ID不因UI重排改变；来源或条件变更标复查而非自动删除/证伪
- validation：源文件存在、blob一致、ID唯一、边端点存在、覆盖清单；外部事实/语义真值仍需人工或独立证据审查
- sync：当前离线静态；生成器输入固定快照和收据/设计JSON。后续任务读取实际HEAD并比较差异，在审查分支刷新投影。不得假称网页自动同步
- permissions：静态只读，无网络API、账户、密钥、Git写入、自动GPT调用；复制文本由人手动发送或在GPT中直接继续；公开仓库仅公开专业材料
- recovery：Git版本与原始资产；复用现有verify_snapshot.py；完整异地备份与空环境恢复尚未完成
- performance：原件链接与展开阅读，默认避免正文全文加载；快照JSON只保留章节和候选主张；无外部字体/脚本/服务
- accessibility：语义标题、导航、label、状态文本、键盘焦点、可折叠、窄屏单列、空态及复制失败提示；实际手机/屏幕阅读器尚未实测
- operation：读取→选情境→查原件→形成任务→授权内执行→证据→复核→写回；UI仅辅助查阅，不是独立执行端

## 方法继承
- [Ars Contexta](https://github.com/agenticnotetaking/arscontexta)：重织旧知识与复查 → 把遗漏旧决策单独恢复，并区分现行/候选/历史；不安装插件。
- [OpenWiki](https://github.com/langchain-ai/openwiki/blob/main/openwiki/concepts/grounded-claims.md)：版本化主张及证据 → 主张附原件commit、blob及章节；源变化标复查。其代码Wiki证据不能证明个人知识真值。
- [SKOS](https://www.w3.org/TR/skos-primer/)：层级与关联语义 → 组织多轴与有类型的知识关系，避免把引用当语义或因果；未实现RDF。
- [Diátaxis](https://diataxis.fr/start-here/)：区分学习、解释、操作与参考 → 原件、解释、行动导航、任务验收各有职责；不要求目录硬迁移。
- [Agent Skills](https://agentskills.io/)：按需加载专业方法 → 情境→具体主张→原件→任务；当前GPT并未部署技能宿主。
