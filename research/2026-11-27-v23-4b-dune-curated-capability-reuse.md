# V23.4 补充｜成熟行业数据能力直接继承：Dune Solana
2026-11-27；当前基线 2b4df3709d6b032070c723a71751859b0af1c496 已有 V23.4 Blix CI 复用报告及 V23.5 接力。保留其有效成果，不重复执行旧验收；本轮作为 V23.4b 补充，不覆盖已有轮次。SOURCE_REVIEWED / QUERY_TEMPLATE_PREPARED / LIVE_QUERY=NOT_RUN / MODEL_AB=NOT_RUN / UPLIFT=UNKNOWN。

## 真实需求、竞争路径与选择
目标是以尽可能少的自建采集、解析和维护劳动，取得 MEME 跨代币早期交易候选及可追溯交易证据（候选非内幕身份、非交易决策）。候选 A：Blix PR25 修复，现行台账已定位三类问题，业务修改未获本次单独授权；不重做。B：直接利用成熟行业数据层 Dune，优先本轮。C：优秀使用者/其他行业成果直接继承，继续保留，避免固定 MEME。当前未获得 Dune 执行工具、账号或 API 授权，插件目录搜索未发现匹配连接。没有启动付费查询、修改业务仓库、进行实盘或请求私钥。故交付为可执行候选查询与数据能力选型，不是主网数据结果。无法测得完整交付时间及节约倍率，不新增无意义局部模拟实验。

## 已完成的专业劳动及适用边界
固定 Spellbook 版本 a4e07a351a91184503a7087836d8ff7ae79a2e90。实际读取：
- [基础成交整合](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/_sector/dex/dex_solana_base_trades.sql)：直接从有效 Jinja 列表提取 36 个不同上游模型引用（含协议版本，非36独立DEX、非全市场覆盖）；明确排除 Sanctum router。统一指令索引、交易位置、原始数量、Vault、参与者。
- [成交估值](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/_sector/dex/dex_solana_trades.sql)：补充 Mint 元数据、代币精度和分钟价格，优先可信买入币价格，再卖出币价格及买入币价格；缺价格可为 NULL。不可把金额当实际成本、盈亏或全部用户订单；聚合路由可能有多腿，计数须明确记录粒度。
- [成交模型 schema](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/_sector/dex/_schema.yml) 与 [水位过滤](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/_sector/dex/dex_solana_stg_max_block_slot.sql)：增量唯一键 tx_id/outer_instruction_index/inner_instruction_index/tx_index/block_month；输出受近三日 transfers 表最大日期/时间/slot 限制。三个最大值是数据处理限制，非证明每个历史块覆盖完整或当前发布已同步。
- [Jupiter 聚合成交](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/jupiter/jupiter_solana_aggregator_swaps.sql)、[Jupiter schema](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/jupiter/_schema.yml)：合并 v4/v5/v6，保留 AMM、交易签名、log_index；是路由成交腿，不是已证明的完整用户意图。不要与 DEX 腿无条件相加。
- [每日余额](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/solana_utils/solana_utils_daily_balances.sql)：对有 SOL/代币余额变化的成功交易选地址/日最后记录。它不是每个地址每天完整快照；持仓未变的日期需按时点向前寻找正确状态；只有 owner 变更但数量不变的情景可能被过滤，须用独立证据检查。
- [最新余额](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/solana_utils/solana_utils_latest_balances.sql) 与 [代币账户](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/solana_utils/solana_utils_token_accounts.sql)：后者明确使用当前 active state_history 兼容视图；前者缺 owner/mint 时用当前信息补充。不能当历史 owner 真值。历史分析需按当时状态及原始 RPC 证据核实；未核查 state_history 的完整时间契约。
- [净转移日聚合](https://github.com/duneanalytics/spellbook/blob/a4e07a351a91184503a7087836d8ff7ae79a2e90/dbt_subprojects/solana/models/_sector/transfers/tokens_solana_net_transfers_daily.sql)：先按 owner 计算流入/流出，再汇总正净流入对象；全网日粒度结果不是指定钱包或 Mint 资金流证据。
真实实践复用入口：[Dune 公开转移语义查询](https://dune.com/queries/8435548) 区分指令/交易/账户/owner；[公开时点成交样例](https://dune.com/queries/8011519) 采用协议覆盖起始时间与指令去重；[公开数据新鲜度查询](https://dune.com/queries/9150126) 区分多表水位。仅阅读公开 SQL，不宣称实际查询结果；本报告不复制第三方查询全文。外部许可字段未明确为标准 SPDX，实际调用服务或再分发前核查许可和条款。本次仅引用和撰写独立查询。Dune [字段目录](https://dune.com/data/dex_solana.trades)、[价格/权限](https://dune.com/pricing)（当前免费计划页面列查看/复制，执行权限/费用以实际账号为准）。

## 可直接使用的独立查询交付
目标：一 Mint 已知且外部证据核实的 UTC 锚点起 1 小时，输出每个 trader_id 的候选交易明细（不使用数量限制截断）；多 Mint 重复执行后按 trader_id 关联，不能据此判定实际控制人或同群。直接用成熟交易行，而不从原始指令重建全部 DEX。仅观察含目标 Mint 的单向成交腿；不保证覆盖路由终点或完整买卖、非持仓净变化。保留 NULL 金额、排序索引及签名，不根据价格过滤潜在候选。研究者须先将两个文本参数填为核实的 base58 Mint 与 UTC 时间（YYYY-MM-DD HH:MM:SS），禁止任意 SQL 片段。锚点未知则停止/显式改称观察窗口，不能自动把首条 DEX 记录称发行时间。仅由具有授权及预算的宿主运行。
```sql
-- DuneSQL: read-only, parameters mint, anchor_utc.
WITH params AS (
    SELECT '{{mint}}' AS mint,
           TIMESTAMP '{{anchor_utc}}' AS anchor_utc
), legs AS (
    SELECT t.trader_id AS observed_trader, t.tx_id,
           t.block_slot, t.tx_index, t.block_time,
           t.outer_instruction_index, t.inner_instruction_index,
           t.project, t.token_bought_mint_address, t.token_sold_mint_address,
           t.token_bought_amount_raw, t.token_sold_amount_raw,
           t.amount_usd,
           CASE WHEN t.token_bought_mint_address = p.mint THEN 'TARGET_BOUGHT_LEG'
                ELSE 'TARGET_SOLD_LEG' END AS observed_side
    FROM dex_solana.trades t
    CROSS JOIN params p
    WHERE t.block_month BETWEEN CAST(date_trunc('month', p.anchor_utc) AS date)
      AND CAST(date_trunc('month', p.anchor_utc + INTERVAL '1' HOUR) AS date)
      AND t.block_date BETWEEN CAST(p.anchor_utc AS date)
      AND CAST(p.anchor_utc + INTERVAL '1' HOUR AS date)
      AND t.block_time >= p.anchor_utc
      AND t.block_time < p.anchor_utc + INTERVAL '1' HOUR
      AND ((t.token_bought_mint_address = p.mint AND t.token_sold_mint_address <> p.mint)
        OR (t.token_sold_mint_address = p.mint AND t.token_bought_mint_address <> p.mint))
)
SELECT *
FROM legs
ORDER BY block_slot, tx_index, outer_instruction_index, inner_instruction_index, tx_id;
```
**实际检查**：从固定源码机器提取 36/36 不同上游 refs；核对上述查询用到的15个字段（block_month/date/time/slot, tx_index, outer/inner_instruction_index, trader_id, tx_id, project, bought/sold mint, bought/sold raw amount, amount_usd）均出现在成交 SELECT 中。不是 SQL 编译、远程执行或数据覆盖验收。若单次输出过大、宿主截断或存在未提供的行，须缩短时间窗分批并检验连续边界，不得只看前 N 条。每次执行前查数据新鲜度/历史覆盖、重复复合键、NULL trader/价格、未知对手 Mint、同交易双向腿、返回分页及实际执行参数/查询 ID。由于 SQL 三值逻辑，空对手 Mint 会被排除，需用相同窗口单独计数并标记；两边均为目标 Mint 的腿也另计。多 Mint 按每个 Mint 的独立锚点对齐、每地址/每Mint/每交易 distinct，保留买卖腿数及首次观察时间；禁止将腿数、交易数、用户订单、持仓及控制权混同。按历史样板池去重后只形成复现候选；控制关系需独立转账、权限、同步行为、身份中性排除及完整性核验。不可把同一交易的多腿美元金额当独立交易总额；无真实数据不计算收益。

## 对提示词工程的实际修订
原表达：“找出首小时的内幕钱包/重复出现的钱包”。专业表达应先调用成熟成交模型与相应证据，不从全链自建；对象改为指定 Mint 和核实 UTC 锚点内的**观察到的成交参与者候选**；限定版本、粒度和市场覆盖；输出原始签名及排序、缺失与排除计数；跨 Mint 复现不能替代控制关系。再按目标决定是否调用转移/余额/原始交易，避免把当前 owner、route legs、USD 估值等代理指标当业务真值。调用指令可以短，但引用已审核的成熟数据契约、前置条件与验收不可丢。新知识是“成熟数据语义契约的直接继承 + 观察/行动对象分层 + 数据处理水位不等于覆盖”。关联 V16 候选召回、V20 状态估计、V21 适用性、V22 身份时间语义、V23.2 owner 变更、V23.3 工具语义及 V23.4 版本绑定。无需新建技术模块或强制每次都运行Dune。
下一轮 V23.5 保持原台账高杠杆方向：优先取得真实数据执行授权/可访问现成果，或转向能够直接完成并验收的其他成熟专业劳动；若无授权不等待、不虚构、不反复写查询。跨行业和优秀创造者实践保持开放，关注实际能力利用、成果/人时/总成本，而非仅知识数量。独立模型对照仍未执行。
