
# ai-d｜两项真实领域问题的源级核查与实用成果（2026-11-07）

> **性质：实际源码读取、静态断言回放、权威资料核查和可使用的教学成果。不是模型隔离 A/B、主网实跑、机器操作或真人教学效果实验。**
>
> 用户只说“可以”，延续前一轮提出的“从整体目标选择独立真实任务验证”。没有新增 Skill、Agent、固定专家、工作流或研究架构。两项独立案例分别来自软件产品与工业新手学习；均不要求扩权、付费、签名、安装及真实操作。

## 一、任务和选择理由

- 软件项目：从 Solana Meme 市场智能的完整价值链出发，验证用户已选的 Blix 到底能否安全用于只读调查，以及现行源码与测试是否一致。遵守 grok/blix 既定的**只读静态研究、暂停启动/代码修改/交易/安装**约束。
- 学习与人的现实能力：从“完全不认识激光设备或吊具按钮，怎样安全开始”出发，不以字面按钮解释取代专业理解。设备型号、现场授权未知，因此只做安全观察、问答与教学核查。

这是两个不同实际问题的交付，**不是整个 ai-d 目标的穷尽验证**，也没有声称 ai-d 方法相对基础模型产生净增益。

## 二、Blix 源码复核：先弄清真正能不能安全运行

**固定来源：** GitHub sunshihao001/grok，分支 blix，2026-11-07 检索。

| 原始文件 | Blob SHA / 可复核事实 |
| --- | --- |
| [package.json](https://github.com/sunshihao001/grok/blob/blix/package.json) | 20de7a90f4fa9cd940f1025ea61f2589df70792f；npm start 先执行静态启动阻断 |
| [scripts/read-only-audit.mjs](https://github.com/sunshihao001/grok/blob/blix/scripts/read-only-audit.mjs) | d1fece79f899f15aa7ca7518f321fc26b9a13f50；定义 7 项 blocker、2 项 review，明示非 runtime sandbox |
| [test/read-only-audit.test.mjs](https://github.com/sunshihao001/grok/blob/blix/test/read-only-audit.test.mjs) | 655eff34075ff2ce8139e5f0bbdffe1f32b594a6；测试明确预期风险存在与 gate 拒绝 |
| [bin/supervise.mjs](https://github.com/sunshihao001/grok/blob/blix/bin/supervise.mjs) | c89942da9fd02d3527d0b877e4ec3cc38d991fb3；直接 spawn server/server.js，没有经过 npm gate，并在相邻 blix-vault 存在时会尝试启动 Vault 子进程 |
| [server/intelligence/index.mjs](https://github.com/sunshihao001/grok/blob/blix/server/intelligence/index.mjs) | d4eee25244f43bdc33069a56315fcc1cdb1c50ce；当前只登记一个懒加载的 mint-facts 能力 |
| [server/intelligence/mint-facts.mjs](https://github.com/sunshihao001/grok/blob/blix/server/intelligence/mint-facts.mjs) | 22906314742329563d01254166dbcd3a899084b8；保留不完整 Holder 覆盖、来源标签与非经济控制归因等未知，不宣称链上核实 |
| [docs/project/state.json](https://github.com/sunshihao001/grok/blob/blix/docs/project/state.json) | 88b83d7ca3816e446d39086eca2f9fc639100d7a；最新状态仍为暂停运行 |
| [test/project-goals.test.mjs](https://github.com/sunshihao001/grok/blob/blix/test/project-goals.test.mjs) | fad70607a258dafad4a0b8d9adfdc048f146c380；存在旧状态期望 |

**实际完成的静态执行：** 通过 GitHub 连接器分别读出 server/accounts.js、server/hosted-accounts.js、server/autoclaim.js、server/settings.js、server/server.js、public/mcp-tools.js 当前内容。在隔离 JavaScript 调用中，按 read-only-audit.mjs 的 **9 项原始正则**逐项匹配对应源：**7/7 blocker 仍然 present、2/2 review 仍然 present，按 gate 规则 allowed=false**。

另外对照 test/project-goals.test.mjs 的七个状态断言与 state.json 的真实值：**5 项一致、2 项不一致**：

- SAFE：测试预期 STATIC_AUDIT_BLOCKED；当前 JSON 实值 STATIC_AUDIT_ONLY_NO_RUNTIME；
- MINT：测试预期 NOT_RUN；当前 JSON 实值 PAUSED_UNTIL_USER_AUTHORIZES_EXECUTION。

**证据等级准确表述：** 上述是“针对最新原始代码的静态断言回放”，不是执行 Blix 的完整 Node 测试。当前容器 Node v22.16.0，Blix 要求 >=24.16.0；**未启动服务、未跑 Mint 网络查询、未进行真实交易或调用付费模型**。

**不是全新漏洞：** 这些阻断与状态期望冲突在 Blix 的 [read-only-safety.md](https://github.com/sunshihao001/grok/blob/blix/docs/project/read-only-safety.md) 和 [delivery.md](https://github.com/sunshihao001/grok/blob/blix/docs/project/delivery.md) 已经指出。本轮价值是最新源码下的独立再核查，且补充确认 supervisor 存在直接启动服务器和相邻 Vault 的路径，绝不能把“npm start 有 gate”理解成“整个宿主已隔离”。

**当前可采取的正确选择：** 保留 Blix 现有 Pulse/Wallet/Coin 等成品以及单个 mint-facts 只读能力作为研究对象；在另行授权之前，不直接启动原服务，也不把静态工具过滤或“已经归档历史知识”说成完成了真正的只读生产验收。缺口是实际运行隔离与可靠性，而不是先补一套专家系统。

## 三、工业新手学习：从按钮关键词升级为安全观察成果

**原始专业来源：**

- [HSE Training and competence](https://www.hse.gov.uk/work-equipment-machinery/training-competence.htm)：设备使用者须获得适当培训。
- [HSE PUWER overview](https://www.hse.gov.uk/work-equipment-machinery/puwer-overview.htm)：防护、紧急停止、设备使用风险与监督。
- [HSE Cutting metals](https://www.hse.gov.uk/Welding/similar-to-welding-fume.htm)：金属激光切割烟尘需要控制。
- [HSE Planning lifting operations](https://www.hse.gov.uk/work-equipment-machinery/planning-organising-lifting-operations.htm)：吊运计划、合格人员、监督与危险区域。
- [UCL Laser cutting guidance (2024)](https://www.ucl.ac.uk/safety-services/news/2024/nov/new-laser-cutting-guidance-released)：激光以外的火灾、烟尘与设备培训风险。

**可立即使用的新手观察卡（不是操作说明）：**

> 初到车间，先请现场师傅说明机器品牌型号、学徒工作范围、允许接触哪些设备、危险区与停止求助方式。观察激光机的封闭防护、排烟、急停位置，以及板材和吊运物体的运动区域。
>
> 如果方向感不清楚，不靠猜箭头或试按按钮学习。固定在现场指导人员指定的安全观察位置，以固定机架/轨道作参照，观察**获授权人员**按具体设备规范示范，并用自己的话复述移动方向、观察盲区和停止条件。
>
> 未获授权不要单独操作激光、吊运或其他运动设备；机器出现未知报警、防护与排烟异常时，停止并寻求现场人员检查。任何人不得进入悬吊载荷下方危险区。

**五题自检与参考回答：**

1. 看不懂行车遥控方向能否试按？——不能；由现场合格人员按指定条件示范，并用固定参照理解。
2. 激光机已经封闭，排烟故障还可继续？——不能因此判断安全；须停止、报告并确认控制措施。
3. 可以从吊起的板材下方走过去吗？——不能，遵守吊装隔离区域。
4. 知道急停在哪就算学会机器了吗？——不算，还须知道危险源、岗位权限和报告方式，并完成现场培训。
5. 能复述操作逻辑但未获准，能独立开机吗？——不能；知识和操作授权不同。

英国安全资料仅用于知识研究，不自动构成其他司法辖区的法律标准。具体型号的操作应以厂家手册、现场风险评估、师傅培训和授权为准。**教学卡形成：DONE；真人理解与技能测量：NOT_MEASURED。**

## 四、对 ai-d“完整目标”真正发生了什么

| 曾经的推定 | 经两项真实任务修正 |
| --- | --- |
| 用户说“可以”，应继续上一轮 Hermes/Skills 的局部研究 | 本轮选择两个不同的现实问题；已有 GPT/GitHub/权威资料足够，无需安装 Agent |
| 新知识越多、文档越多，综合能力越强 | 现有 Blix 安全风险、测试不一致已有研究记录，关键是核实是否解决，不能重复记账 |
| 只读 MCP 工具或静态启动 gate = 全程序只读 | 不成立：HTTP/后台/Vault/其他启动入口的权限与风险需要独立隔离 |
| AI 输出新手按钮教程 = 帮用户学会 | 应先建立任务问题、风险与授权；教学材料存在不等于技能转移 |
| 本轮 GitHub 成功保存 = AI 认知内核实验证明 | 不成立：源码核查和文件提交可证，独立模型效果、人的现实收益仍未知 |

**本轮完成的是两类不同真实问题的证据核查和可用成果，不是“ai-d 已在独立随机实验中胜过基础 GPT”。** 后续应该由新的真实需求、用户反馈或明确授权决定深入方向；不因此再建固定层级、扩建专家或自动部署。

**状态概括：** GitHub 当前源码/九项静态风险/七个状态断言核验 DONE；工业安全原始来源和观察卡 DONE；Blix live runtime、Mint 真实核验、真人学习效果及严格模型 A/B 均 NOT_RUN。
