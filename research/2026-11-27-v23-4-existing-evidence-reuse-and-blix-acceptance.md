# V23.4｜已有专业劳动继承：Blix 真实验收与定向修复接力

日期：2026-11-27。AI-D 基线 2958d852ba6ba3851a5e4174da669f77c2cd8980。完成范围：真实已有 CI 证据恢复、七项失败归因审查、针对性查询边界复现、可执行修复交接；未改 Grok、未启动服务/真实链/交易/付费、未完成业务修复或新完整行业交付。MODEL_AB=NOT_RUN / UPLIFT=UNKNOWN。

## 路径裁决与实际借用

比较三个入口：A. 现有 MEME 未闭合验收（已取得完整日志和源码，优先）；B. 成熟工具直接完成陌生行业交付（保留，需真实输入与验收）；C. 继续调查高产出创造者（保留，不重复 Simon/DSPy 研究）。本轮借用 GitHub Actions 原生运行历史、日志、Git 提交及文件对象比对，不重新造 CI/日志系统，不为已有同版本证据重跑。专业方法：[GitHub workflow logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs)、[Google 可操作测试失败](https://testing.googleblog.com/2024/05/test-failures-should-be-actionable.html)、[SQLite SELECT](https://www.sqlite.org/lang_select.html)。直接利用已完成的专业劳动包括原项目的测试、CI执行、测试失败栈、原始证据约束及成熟数据库查询能力，而不是声称外部研究本身已经转化为普遍智能增益。

## 实际版本与验收证据

[PR #25](https://github.com/sunshihao001/grok/pull/25) head 4953dcc4b20c8be6a965613c2a473b1e7d746239；其 state.json 仍为 PATCH_CANDIDATE_TEST_PENDING，实际 [CI 日志](https://github.com/sunshihao001/grok/actions/runs/45395039616/job/138448423408)（2026-11-24）已记录结果。CI 实际 checkout 临时合并提交 998f6c460d642b43842519da687a7a754e934939，父提交 36a97e27298408eafc441442769c7eedf5c5935c 与 4953dcc4...；已比对 head 与 CI merge 的七个关键文件 blob SHA 相同（economic-events.mjs、db.js、economic-events.test.mjs、wallet-evidence-chain.test.mjs、ai-economic-workflow.test.mjs、intelligence-inspect-sqlite-http.test.mjs、offline-mint-report.test.mjs）。不能当作当前所有集成分支已验收。

| 实际 CI 项目 | 结果 | 已有测试运行时间 |
| --- | --- | --- |
| npm test | 599/606；失败7 | 29.741秒 |
| npm run test:security | 20/20 | 0.176秒 |
| npm run test:evidence | 89/96；同样七项失败 | 10.471秒 |
| Web 构建 | 成功 | 未统计 |
| [audit](https://github.com/sunshihao001/grok/actions/runs/45395039633) | 成功 | 未统计 |

新增 recipient follow-up seconds 回归在全量及证据套件均通过。仅说明该 fixture 的秒/毫秒、窗口、归档和排序断言通过。两套测试重复覆盖，不相加当独立测试数；合计约40.39秒是三个已完成测试命令报告的运行时间，不是本轮研究耗时、用户节省时间或完整 CI 成本。本轮无用户补充输入、未额外触发 CI、未使用付费模型/API；总成本、端到端人时、独立基线未测。PR23 当前集成 head b69c685201ab2798588f0f31f9e89f1b2be7be85；PR25 已有基线记录过时，修改前须再检查最新合并基准，不能直接合并。

## 七项失败的证据驱动处理（不是已修复）

1. [economic-events.test.mjs:28](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/test/economic-events.test.mjs#L28)：只归档中间原生币转移，首尾成交只有 wallet_trades；新版 [crossMintCandidates](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/server/economic-events.mjs#L222-L245) 要求两端成功归档且严格 slot 顺序，现结果0而旧预期1。补真实结构的合成 RPC fixture、匹配签名、成功状态和递增 slot；保留缺归档负例。
2. [economic-events.test.mjs:95-104](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/test/economic-events.test.mjs#L95-L104)：收款后卖出、跨 Mint 同样缺少归档。补端到端所需归档，不改变证据门槛。
3. [ai-economic-workflow.test.mjs:22-41](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/test/ai-economic-workflow.test.mjs#L22-L41)：receiver-sells 只有摘要；预期 observedSells[0] 导致 undefined。补归档，同时保留数据库哈希不变及缺证不升级。
4. [intelligence-inspect-sqlite-http.test.mjs:28-50](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/test/intelligence-inspect-sqlite-http.test.mjs#L28-L50)：synthetic-local-sell 未归档，实际 NOT_OBSERVED_IN_CAPTURED_WINDOW；同样修 fixture，不放松只读/无模型调用。
5. [offline-mint-report.test.mjs:23-58](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/test/offline-mint-report.test.mjs#L23-L58)：recipient-later-sale 只有摘要；补归档并保持 sender/Mint 两种入口与哈希断言。
6. [wallet-evidence-chain.test.mjs:39-42](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/test/wallet-evidence-chain.test.mjs#L39-L42)：在证据初始化前检查 status 列；db.js 无该表初始化，initEvidence 定义中确有 status。区分空库读路径不创建表与显式初始化后结构契约。建议分别测试二者，优先确认启动契约，不以启动交易服务作为修复。
7. [wallet-evidence-chain.test.mjs:196](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/test/wallet-evidence-chain.test.mjs#L174-L196)：CI 实际期望 TOKEN_2022_TRANSFER_FEE_PRESENT_PROVENANCE_UNPROVEN、实际 PRIOR_CAPTURED_INBOUND_ACTIVITY_EXISTS。源码 [L337-L368](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/server/economic-events.mjs#L337-L368) 单字段后置 priorInbound 覆盖除单次转入数量不足之外的标签；前序同钱包同 Mint 的入账确存在。两项事实不互斥，不能通过调整断言、清空历史或取消 priorInbound 掩盖。候选修复：单独保留既有手续费金额、混合流标志、priorInbound 布尔事实和可兼容原字段的归因裁决；明确优先级与消费方兼容。另查同一综合测试后续 mixed flow 及 fee 行的对象选择是否以签名精确定位（当前 mixed.rows[0] 可能是较新的 fee transfer）；尚未运行，不能称新增 CI 失败。

上述五项是源码与真实 CI 一致的强归因，尚未逐一改 fixture 重跑；第六项需确认业务初始化契约；第七项真实标签覆盖冲突已由源与日志确认，修法仍需测试。将七个表面失败聚焦为三个责任域：证据 fixture 契约、初始化生命周期、非互斥归因事实；不是宣称只需改三个文件。

## 新的直接业务边界：有效候选被 LIMIT 提前截断

[原始查询 L302-316](https://github.com/sunshihao001/grok/blob/4953dcc4b20c8be6a965613c2a473b1e7d746239/server/economic-events.mjs#L302-L316) 在 SQL 只排除部分不合格同 slot 记录，ORDER BY 后 LIMIT 6，再 JS 检查交易索引先后。SQLite 文档确认 LIMIT 在 SQL 返回集合上生效。本轮在 SQLite 3.46.1 执行原始 SELECT（原字段和参数顺序）与完整顺序谓词前移版本，使用只含七条合成记录的最小业务反例：transfer slot20/index10/second1000；六个同 slot index0..5 的更早 sell，另有 slot21/second1001 的成功 sell。原 SQL 返回6条 prior，后置过滤为空；前移顺序谓词后返回 later。已执行并断言成功。此为实际源码查询边界复现，未运行完整应用或发现主网事件。

修复候选：将同 slot 条件改为 e.slot=? AND ? IS NOT NULL AND e.block_tx_index>?，传入转移 index 两次；保证严格先后发生在 LIMIT 前，保留不同 slot 分支、时间范围、成功归档、排除同签名、最大5条结果和第6条截断信号。用同一测试加入未知转移 index、较早同 slot、较晚同 slot、不同 slot 和超过5个合格结果。另审查 crossMintCandidates 的候选截断与随后筛选，未验证该处有同类问题。

复算依据（Python sqlite3；已运行的等价 SQL 投影；原实验 SELECT 还返回 wallet/mint/side/sol/t/block_time）：
```python
import sqlite3
c=sqlite3.connect(':memory:')
c.executescript("CREATE TABLE wallet_trades(sig TEXT,wallet TEXT,mint TEXT,side TEXT,sol REAL,t INTEGER); CREATE TABLE econ_transactions(sig TEXT PRIMARY KEY,slot INTEGER,block_time INTEGER,block_tx_index INTEGER,status TEXT);")
for i in range(6):
 s=f'prior-{i}';c.execute('INSERT INTO wallet_trades VALUES(?,?,?,?,?,?)',(s,'B','M','sell',1,1000000));c.execute('INSERT INTO econ_transactions VALUES(?,?,?,?,?)',(s,20,1000,i,'RPC_OBSERVED'))
c.execute('INSERT INTO wallet_trades VALUES(?,?,?,?,?,?)',('later','B','M','sell',1,1001000))
c.execute('INSERT INTO econ_transactions VALUES(?,?,?,?,?)',('later',21,1001,None,'RPC_OBSERVED'))
q="""SELECT w.sig,e.slot,e.block_tx_index FROM wallet_trades w JOIN econ_transactions e ON e.sig=w.sig
WHERE w.wallet=? AND w.mint=? AND w.side='sell' AND e.status='RPC_OBSERVED'
AND e.block_time IS NOT NULL AND e.block_time>=? AND e.block_time<=?
AND (e.slot>? OR (e.slot=? AND e.block_tx_index IS NOT NULL)) AND w.sig!=?
ORDER BY e.slot ASC,e.block_tx_index ASC LIMIT 6"""
old=c.execute(q,('B','M',1000,4600,20,20,'transfer')).fetchall()
new=c.execute(q.replace('e.slot=? AND e.block_tx_index IS NOT NULL','e.slot=? AND ? IS NOT NULL AND e.block_tx_index>?'),('B','M',1000,4600,20,20,10,10,'transfer')).fetchall()
assert len(old)==6 and not [r for r in old if r[1]>20 or (r[1]==20 and r[2] is not None and r[2]>10)]
assert [r[0] for r in new]==['later']
```

## 可直接执行的下游修复接力（尚未执行）

在 Grok / Blix 授权候选分支上，先核对最新 HEAD、PR23/25 和已保存 CI 998f6c4 的差异，再完成三类责任域修复与 LIMIT 反例回归。先用当前版本现有测试确认归因；优先恢复 fixture 的证据契约，保留负例、只读、未知、非归因和同 slot 顺序；初始化显式分责；不互斥归因事实分别保留，检查消费者兼容；有效筛选在限量前。仅在测试环境使用 Node24+，执行 npm test、npm run test:security、npm run test:evidence、必要前端静态构建；记录实际 SHA 与结果，不跳过失败、不放宽证据、不运行真实服务/钱包/签名/资金/付费，不直接合并。若当前版本已修复，先核验其证据不重复修改。保存实际修复差异与 Git 回读。完整原始依据为本文件链接，不需将所有源码重新写进提示词。当前 V23.4 只授权 AI-D 保存，Grok 未修改。

## AI-D 的实质认知修订
实际激活历史知识：V16 召回与候选生成；V21 适用性前置；V23.2 账户/归属与证据边界；V23.3 证据可见性、先验证评价及已完成专业劳动继承。新知识：交付物的验证状态必须绑定实际运行对象（CI 临时合并 SHA 与文件对象），不能只看过期任务台账；在重跑之前可直接复用已存结果。专业任务表达应引用真实日志、固定源码和验收条件，而非扩写角色和抽象方法。已有测试失败不必然为生产错误，维护新版专业契约而非追求绿色状态。多个非互斥事实不宜单标签覆盖；候选筛选须在截断前保证合格性。该报告为真实验收审查与可执行交接，不是完整修复/生产能力/收益证明。当前本地 Node22.16、项目要求24.16+，外网 DNS 失败，未下载完整仓库或重新执行 Node 测试。仍保留独立行业探索与高杠杆实证，下一步应选择更有价值的实际能力交付，而不是反复审核同一 PR。 
