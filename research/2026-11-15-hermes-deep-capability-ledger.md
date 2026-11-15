# 2026-11-15｜Hermes Agent 深度能力账本与 ai-d 映射 V1.0

> 状态：SOURCE_RESEARCHED / CAPABILITY_LEDGER / CURRENT_MAPPING / NOT_YET_RUNTIME_VALIDATED
>
> 研究目标：先把 Hermes 作为现成 Runtime 的各个能力面真正理解清楚，再决定 ai-d 如何使用、扩展或不碰 Hermes。当前不以“改 Hermes”为目标。

## 1. 版本边界

截至 2026-11-15，GitHub 最新稳定发布为 Hermes Agent v0.23.1，2026-11-09 发布；v0.23.0 是 Hearth Release，核心变化是 Gateway 统一 Session ownership、Desktop/Webapp、插件、Delegation、Memory 与长期运行能力进一步整合。v0.23.1 是补丁版，主要修复插件目录大小导致的插件目录回退问题。

重要边界：Hermes 官方文档当前由 main/最新部署生成，其中部分内容可能领先于最新稳定 release。研究时必须区分：
- STABLE：v0.23.1 已发布、可作为当前安装基线；
- MAIN/DOC-LATEST：当前源码/文档已经存在，但不自动等于 v0.23.1 已稳定发布；
- OBSERVED：源码、文档或实际运行已核查；
- HYPOTHESIS：对 ai-d 的映射仍待真实任务验证。

## 2. Hermes 的正确定位

当前最准确的工作定义：

> Hermes 是一个可长期运行、可扩展、可连接外部能力、可保存经验、可委托任务并连接真实环境的 Agent Runtime / Execution Substrate。

它不是 ai-d 的认知核心。

其现成能力覆盖：
- Model / Provider / Auxiliary Model
- Tool / Toolset / Tool Search
- Web / Browser / Terminal / Files / Media
- Skills
- Memory / Session Search / Memory Providers
- MCP
- Plugins / Hooks
- Delegation / Subagents
- Execute Code
- Gateway / Sessions / Messaging
- Cron / Event-triggered automation
- Context Files
- Security / Approval / Isolation
- Profiles / Bots / Connectors / ACP 等

## 3. 能力账本

### A. Model / Provider

原生职责：
- 主模型负责每个用户 turn、工具调用循环和最终响应；
- Auxiliary Models 负责压缩、视觉、审批评分、标题、review、voice 等旁任务；
- 支持多 Provider、模型切换、fallback、reasoning 配置和本地模型。

关键理解：
> 一个 Hermes Agent 不等于一个模型；模型是可替换的推理资源。

ai-d 映射：
- 属于 Capability Provider；
- ai-d 不应把“某一个模型”固化为系统能力；
- 将来可根据任务类型、成本、风险和证据需求选择模型；
- 当前不修改 Hermes。

状态：SOURCE_RESEARCHED。

### B. Built-in Tools / Toolsets

当前官方文档给出的工具注册表约 85 个，涵盖 web、X、terminal、files、browser、vision、image、TTS、video、todo、clarify、execute_code、delegate_task、memory、session_search、cron 等。

Toolsets 可以按平台和场景启停，并有 basic/composite/scenario 等组织方式。

关键理解：
> Hermes 已经有大量“可执行能力”，问题不再是工具数量，而是如何正确发现、选择、授权和验证。

ai-d 映射：
- 直接作为 Capability Runtime；
- 不重复造同类工具；
- 重点观察工具选择错误、权限边界和结果验证。

状态：SOURCE_RESEARCHED。

### C. Tool Search / Progressive Disclosure

Hermes 的 Tool Search 是非常重要的能力：
- MCP/plugin 等可延迟工具不全部把完整 JSON Schema 塞入模型 context；
- 模型看到 tool_search、tool_describe、tool_call 三个桥接工具；
- 先搜索候选工具，再获取 schema，再调用；
- 支持批量独立调用；
- catalog 从 live tool definitions 构建，避免工具变化后旧 catalog 漂移。

关键理解：
> 这是 Hermes 对“工具规模过大 → Context 污染 → 模型选择能力下降”的直接工程解决方案。

与 ai-d 的关系：
- Hermes Tool Search = 已有工具空间中的 discovery；
- ai-d Capability Discovery = 从用户目标判断“缺什么能力”，再寻找模型/工具/Skill/MCP/软件/知识/专家方法等；
- 前者是 capability namespace search，后者是 goal-to-capability reasoning。
- 不应把二者合并成一个概念。

状态：SOURCE_RESEARCHED；ai-d 映射仍需真实任务验证。

### D. Skills

Hermes Skills 是按需加载的知识/流程文档，遵循 progressive disclosure，并兼容 Agent Skills 标准。

官方定位非常接近：
> procedural memory / reusable approach。

Skill 可以：
- 查看；
- 创建；
- 修改；
- 删除；
- 从 Skill Hub / bundled / optional / external directories 加载；
- 被 Cron、任务等复用。

关键边界：
> Skill 是“如何做某类事情”的可执行经验，不等于整个长期知识系统。

ai-d 映射：
- 属于 Capability Asset + Experience Asset；
- 适合保存已经被真实任务验证的重复方法；
- 不应把所有研究资料都写成 Skill；
- Skill 必须有适用条件、失败条件和验证意识，避免把一次成功固化为永久规则。

状态：SOURCE_RESEARCHED。

### E. Memory

Hermes 当前区分：
- MEMORY.md：少量关键持久事实；
- USER.md：用户信息/偏好；
- Session Search：SQLite/FTS5 历史会话检索；
- Memory Provider Plugins：可接外部记忆系统。

当前文档指出 Persistent Memory 约 1,300 token 的常驻规模，而 Session Search 可以在需要时从历史会话中检索，不产生 LLM 调用。

关键理解：
> Memory 不是“把所有历史都塞进 Prompt”。

更合理的是：
- 高频、稳定、必须知道的内容 → 常驻 memory；
- 具体历史 → session search；
- 专业知识 → 外部/项目知识；
- 当前任务需要的证据 → 按需检索。

ai-d 映射：
- 直接继承“按需召回、有限常驻、历史可查”的方向；
- 不能把 ai-d 全量知识库写入 Hermes Memory；
- 必须保留知识新鲜度、适用性、冲突、废弃和污染治理。

状态：SOURCE_RESEARCHED。

### F. Context Files

Hermes 支持：
- .hermes.md / HERMES.md
- AGENTS.override.md
- AGENTS.md
- CLAUDE.md
- SOUL.md
- .cursorrules / cursor rules

它会按 git root → working directory 逐层发现，越深越具体；进入子目录后还会渐进式发现对应上下文。

同时有：
- prompt-injection scan；
- 截断；
- 路径边界；
- 子目录渐进注入。

关键理解：
> Context File 是“当前环境的局部规则/项目上下文”，不是长期知识库。

ai-d 映射：
- 适合保存项目/领域当前的稳定约束；
- 不适合承载动态事实和全部研究资料；
- 可以作为未来“项目状态/当前规则”与 Runtime 的接口。

状态：SOURCE_RESEARCHED。

### G. MCP

Hermes MCP 是外部能力入口：
- local stdio；
- remote HTTP；
- 自动 discovery；
- per-server include/exclude；
- glob filtering；
- resource/prompt wrappers；
- runtime tool list change；
- /reload-mcp；
- mcp-<server> toolset；
- stdio env filtering。

重要理解：
> MCP 是“能力连接协议”，不是能力判断本身。

ai-d 映射：
- Capability Provider / external execution；
- 适合连接 GitHub、数据库、Blix 数据源、浏览器栈、内部 API 等；
- ai-d 不需要知道 MCP 的全部细节，只需要知道“这个目标所需能力可由某个 MCP provider 提供”；
- 权限、include/exclude、成本应属于 capability admission 的证据。

状态：SOURCE_RESEARCHED。

### H. Plugins

Hermes Plugin 是比修改 core 更正式的扩展边界。

当前插件可以提供：
- tools；
- hooks；
- slash commands；
- CLI commands；
- integrations；
- providers；
- auxiliary functionality。

插件默认 opt-in；当前有丰富生命周期 hooks。

重要 hooks 包括：
- pre_tool_call
- post_tool_call
- pre_llm_call
- post_llm_call
- pre_verify
- pre_gateway_dispatch
- transform_tool_result
- transform_llm_output
- session lifecycle
- subagent lifecycle
- approval lifecycle
- API request lifecycle
- skill lifecycle

关键理解：
> Plugin 是 ai-d 将来观察/增强 Hermes 行为的首选候选边界之一，但不是现在就要实现的结论。

尤其值得注意：
- pre_tool_call 可以 block / modify；
- pre_llm_call 可以注入临时 context，也可以在模型调用前 block；
- post_* hooks 可用于 trace / metrics；
- hook callback 本身有 timeout/fail-open/failed behavior 等约束。

ai-d 映射：
- 很适合未来做 Traceability / Verification Adapter；
- 也可能适合做 Goal/Evidence context injection；
- 但必须先真实运行证明需求。

状态：SOURCE_RESEARCHED；实现方式 NOT_YET_VALIDATED。

### I. Delegation / Subagents

Hermes 可创建隔离 child agents：
- 独立 conversation；
- 独立 terminal；
- 独立 toolset；
- 中间 tool calls 不回流父 context；
- 最终摘要返回；
- 可并行；
- 可有 structured output / bounded correction；
- child 可以 resume。

适用：
- reasoning-heavy subtask；
- 大量中间数据；
- 并行独立研究；
- fresh-context 复核。

不适用：
- 单工具调用；
- 机械多步逻辑；
- 需要用户交互；
- 需要长时间跨进程持久执行。

关键理解：
> Delegation 是 execution decomposition，不是自动解决目标分解正确性。

ai-d 映射：
- 属于 Capability Composition；
- ai-d 应决定“是否需要委托、为什么、如何验证子结果”，而不是默认多 Agent。

状态：SOURCE_RESEARCHED。

### J. execute_code

Programmatic Tool Calling：
- 允许模型通过 Python 对多个 Hermes tools 做组合；
- 中间结果可以在代码侧处理；
- 最终只把需要的结果回传给模型。

关键理解：
> execute_code 适合机械、批量、过滤、循环和数据处理；不应被误当作额外推理 Agent。

ai-d 映射：
- Capability Composition 的高价值执行机制；
- 对大量数据/多工具 pipeline 很重要；
- 可以减少 context pollution。

状态：SOURCE_RESEARCHED。

### K. Gateway / Sessions

Gateway 是当前 Hermes 体系的关键架构变化：
- 单个 gateway 负责 profile/session；
- CLI、TUI、Desktop、编辑器、Bots、Cron 等连接到统一 session authority；
- 统一消息投递和长期运行；
- 可以运行 messaging gateway。

关键理解：
> Gateway 使 Hermes 从“一次 Agent 进程”转向“长期存在的 Agent 服务”。

ai-d 映射：
- Runtime substrate；
- 对 State Continuity、Traceability、长期任务非常重要；
- 不应重复造第二套 session runtime，除非真实需求证明 Hermes 不够。

状态：SOURCE_RESEARCHED。

### L. Cron / Automation

Cron 当前支持：
- one-shot；
- recurring；
- pause/resume/edit/run/remove；
- skills；
- delivery；
- fresh sessions；
- no-agent script mode；
- event-triggered jobs；
- continuity；
- context_from；
- model pin/default；
- workdir；
- recovery receipts；
- concurrency controls。

尤其值得注意：
> cron 可以有 continuity，把上次实质输出带入下一次，从而实现监测去重和多阶段任务。

关键理解：
> Cron 是时间/触发层，不是自主智能。

ai-d 映射：
- 持续监测、定期研究、状态检查；
- Blix 市场监测尤其适合；
- 但“是否值得提醒”仍需 Verification / Evidence 判断。

状态：SOURCE_RESEARCHED。

### M. Security / Approval

Hermes 有多层安全：
1. user authorization；
2. dangerous command approval；
3. file write safety；
4. container isolation；
5. MCP credential filtering；
6. context file scanning；
7. cross-session isolation；
8. input sanitization。

关键理解：
> 安全不是单独的外围模块，而是 Runtime 的执行前提。

ai-d 映射：
- Governance / Human Authority；
- 不确定、不可逆、高风险动作不能只靠模型自觉；
- 未来若实现“uncertainty stop”，应尽量利用 Hermes 已有 approval/block 边界，而不是另造平行权限体系。

状态：SOURCE_RESEARCHED。

## 4. Hermes 内部架构的关键关系

源码结构显示：
- agent/：Agent lifecycle、memory、context engine、review、session；
- tools/：具体工具；
- plugins/：插件；
- plugins/platforms/：消息平台；
- plugins/memory/：memory provider；
- plugins/context_engine/：context engine；
- skills/ / optional-skills/：Skill；
- gateway/：长期服务和 session authority；
- cron/：scheduler；
- acp_adapter/：编辑器协议；
- tests/：大规模回归测试。

当前源码的 AIAgent 进一步通过多个 mixin / runtime helper 组织 session、compression、tool execution、delegation、API hooks 等。

关键理解：
> Hermes 自己已经在内部把“认知/执行/持久化/平台/扩展/调度”拆开；ai-d 没有理由重新复制这些 Runtime 分层。

## 5. Hermes 已经具备的“我们曾经以为需要自己造”的能力

| 我们曾经担心的能力 | Hermes 现状 | 当前判断 |
|---|---|---|
| Tool Registry | 有 | 直接用 |
| Tool Discovery | Tool Search | 先用 |
| External Capability | MCP | 直接用 |
| Extension | Plugin | 优先候选 |
| Procedural Knowledge | Skill | 直接用 |
| Long-term memory | Memory Providers | 直接用/谨慎 |
| Historical recall | Session Search | 直接用 |
| Multi-agent | Delegation | 直接用 |
| Programmatic composition | execute_code | 直接用 |
| Long-running service | Gateway | 直接用 |
| Scheduled execution | Cron | 直接用 |
| Context | Context Files | 直接用 |
| Human approval | Security/Approval | 直接用 |
| Trace hooks | Plugin hooks / API hooks | 重点利用候选 |
| Goal understanding | Model能力 | 尚非 Hermes 专门机制 |
| Epistemic state | 没有完整专门层 | ai-d 可能需要研究 |
| Capability gap reasoning | 没有完整通用机制 | ai-d 可能需要研究 |
| Goal fidelity | 没有完整独立机制 | ai-d 需要验证 |
| Uncertainty Stop | 有局部 block/approval 能力，但不是完整 epistemic stop system | ai-d 重点研究 |
| Cross-step verification | 有 review / verify hooks 等局部机制 | 需要真实任务验证 |
| Knowledge applicability / deprecation | 没有替我们解决 | ai-d 重点研究 |
| Experience governance | Skill/Memory/curator 有基础 | 需要验证是否足够 |
| Goal change governance | 没有完整通用机制 | ai-d 重点研究 |

## 6. 与 ai-d 六域的最终初步映射

### Human & Goal
Hermes：用户输入、session、clarify、approval。
ai-d：Goal recovery、goal hierarchy、goal fidelity、goal change。

### Knowledge & Epistemics
Hermes：web、skills、memory、session search、context、MCP resources。
ai-d：source quality、applicability、evidence state、UNKNOWN、conflict、freshness、deprecation。

### Capability & Method
Hermes：tools、tool search、skills、MCP、plugins、delegation、execute_code。
ai-d：goal-to-capability gap、selection、composition、substitution、minimum sufficient capability。

### Runtime & Execution
Hermes：核心强项。
ai-d：尽量不重复实现，只做适配、决策和验证。

### Domain & Reality
Hermes：通用 Runtime。
ai-d：Blix/Solana、软件工程、制造、学习等领域知识与真实反馈。

### Verification & Evolution
Hermes：hooks、review、verify、session state、cron receipts、security。
ai-d：需要把“结果是否真的完成目标、证据是否足够、何时停、为何修正、经验是否应该更新”提升为跨能力的判断层。

## 7. 最关键的边界

当前不要把 ai-d 定义为：
- Hermes fork；
- 超级 Skill；
- 巨型 Prompt；
- MCP aggregator；
- Capability Graph UI；
- Multi-Agent framework；
- Memory replacement。

当前更合理的假设：

> ai-d 负责目标—问题—证据—知识—能力之间的判断与协调；Hermes 负责把已经决定要做的事情可靠地运行起来。

但这仍是待验证假设，不是最终架构。

## 8. 第一阶段真正值得实跑的能力组合

不要一次把所有 Hermes 功能打开。

先做一个最小闭环：

自然语言目标
→ 主模型
→ web / file / terminal 中最小能力集合
→ 结果
→ verification
→ trace
→ success / revise / stop

然后逐步加入：
1. Skill
2. MCP
3. execute_code
4. delegation
5. memory/session search
6. cron/gateway
7. plugin hooks

每增加一层，都记录：
- 它解决了什么；
- 是否减少用户工作；
- 是否引入新的失败；
- 是否增加 context pollution；
- 是否让 trace 更难；
- 是否需要新的 ai-d 机制。

## 9. 第一阶段必须特别验证的四个问题

### Q1 Goal Fidelity
用户一句话进入 Hermes 后，系统实际执行的目标是否仍然是用户目标？

### Q2 Uncertainty Stop
关键证据缺失时，系统是否会：
- 继续盲猜；
- 主动补证；
- 请求用户；
- 或明确停止？

### Q3 Traceability
能否从最终结果追溯：
目标 → 判断 → 工具 → 证据 → 结果 → 验证 → 修正？

### Q4 Recovery
中间步骤出错后，是：
- 修正上游；
- 重试同一个错误；
- 继续污染后续；
- 还是停止？

## 10. 研究状态

已确认：
- Hermes 当前 Runtime 能力已经非常完整；
- Tool Search 已解决工具规模与 context 的一部分问题；
- Skills/Memory/MCP/Plugins/Delegation/execute_code/Gateway/Cron/Security 已形成较完整执行生态；
- Hermes 的扩展边界已经明显偏向 Plugin/MCP/Skill，而不是修改 core；
- Gateway/Session 是长期运行的关键基础；
- Context/Memory 已采用渐进/按需策略，说明“全部知识塞进去”不是正确方向。

尚未确认：
- Hermes 在真实复杂任务中 Goal Fidelity 的实际表现；
- Uncertainty Stop 是否能成为稳定行为；
- Traceability 是否足够支持完整 RCA；
- Memory/Skill 是否会产生可测量的长期增益还是污染；
- ai-d 最终应该是 Plugin、外部协调层、MCP、混合还是其他形式；
- 是否真的需要修改 Hermes core。

## 11. 下一步

不再继续扩充 Hermes 功能清单。

下一轮转为：
> **真实运行验证。**

选择一个与 Solana 明显不同、可读、可验收、允许失败的任务，实际跑 Hermes，并记录：
- 用户原话；
- 系统实际目标；
- 自动选了哪些能力；
- 哪些能力没有必要；
- 哪一步产生 UNKNOWN；
- 有没有停止；
- 有没有改变目标；
- 能否追溯；
- 出错能否恢复；
- 最后到底有没有完成真实目标。

然后才决定 ai-d 需要新增什么。

