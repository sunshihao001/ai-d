# 高阶提示词工程专项 V1.1｜从自我审查指令到证据驱动的主动缺陷发现
2026-11-27；基线 d28ed1166df40e980a4de33ed4d31f566d460051；承接[认知连续性专项](2026-11-27-prompt-engineering-and-cognitive-continuity.md)、[V23.2](2026-11-27-v23-2-problem-formulation-prompt-optimization.md)、[V23.3](2026-11-27-v23-3-verified-solutions-and-prompt-regression.md)与[执行预算专项](2026-11-27-deep-cognitive-production-and-execution-budget.md)。SOURCE_REVIEWED / EXTERNAL_TABLE_REANALYSIS_DONE / RULE_REPLAY_DONE / MODEL_AB=NOT_RUN / UPLIFT=UNKNOWN。未改自动任务、业务仓库或主分支。
## 1. 问题重表征与竞争路径
已读取AGENTS、现行台账、专项正本、V23.2/3，恢复真实失败：研究时长短、未执行关键步骤、已知方法未激活、需人工指出。既有GEPA反馈、评价真值、留出回归与知识保存不应重新发明。主动发现不同于已定位后的修复；检验是否发现此前未告知的缺陷、是否有真值证据、是否能正确保留原有正常行为、是否产生净专业价值。竞争解释：提示词未触发调查、专业问题表征漏掉必要条件、缺少外部证据/工具、模型本身检测能力不足、指令诱发过度挑错、运行资源受限。当前选择可核实缺陷领域的原始实证与源级验证；开放探索保留，不将代码审查当所有研究的代表。
## 2. 原始研究：发现、定位、修复应区分
- [Huang等 ICLR 2024](https://openreview.net/forum?id=IkmD3fKBPQ) 发现部分推理任务中仅要求模型自行修正可能降低准确率；[Tyen等 ACL Findings 2024](https://aclanthology.org/2024.findings-acl.826/) 将错误发现和已知错误位置下的修复分开，五种推理任务中给正确位置可改善修复。小分类器也能提供检测线索。非现代模型通用定律。
- 竞争反证：[Wu等 EMNLP 2024 关键条件验证](https://aclanthology.org/2024.emnlp-main.714/) 报告明确抽取并验证关键条件可改善部分任务的自身纠错。因此不能断言内在纠错永远无效。 [Kamoi等 TACL 2024综述](https://doi.org/10.1162/tacl_a_00713) 强调可靠外部反馈的作用。对AI-D：需要把“深入反思”具体化成证据生产操作；发现和修复分别评价。
- [CheckList ACL 2020](https://aclanthology.org/2020.acl-main.442/) 从能力×行为测试类型设计测试，包含基本功能、无关变化不变性、方向性变化。论文实践发现测试者可发现更多缺陷。复用其问题生成思想，非要求建立新系统。
- [2026年代码需求符合性研究](https://doi.org/10.1007/s10515-026-00638-5) 比较三种提示要求、5模型、3数据集，约1400+实例，正确/缺陷成对。原文以正确为阳性：GPT-4o在HumanEval中拒绝正确程序的FNR从26.2%升至73.2%，MBPP从35.9%升至87.9%（较复杂模式），同时部分错误接受率降至接近0。故必须测误报与误修，不能强制每轮有缺陷。
## 3. 实证提示词与计算配置：CRBugBench 原表再分析
[2026-10-09原文](https://arxiv.org/html/2610.13668v1)，[项目](https://github.com/malusamayo/CRBugBench)。1000开源、800企业任务，以历史人类核实且修复的缺陷为参考；Recall@5衡量前五条意见是否命中已知缺陷，不是所有意见的精确率。研究报告最佳模型开源71.9%，企业环境有下降。表2原始数据按模型/轨道复算，Cmt是合并前人工审查发现、Fix是合并后修复追溯，成本为论文估计的美元，不是本轮开支。
| 模型 | 轨道 | 默认召回% | 探索提示召回% | 默认成本 | 探索成本 | 召回百分点变化 |
|---|---|---:|---:|---:|---:|---:|
| Opus 5 | Cmt | 79.6 | 79.9 | 2.55 | 2.76 | +0.3 |
| Opus 5 | Fix | 64.2 | 62.4 | 3.38 | 3.60 | -1.8 |
| Opus 4.8 | Cmt | 70.0 | 75.5 | 1.54 | 1.67 | +5.5 |
| Opus 4.8 | Fix | 46.6 | 52.6 | 1.98 | 2.21 | +6.0 |
| GPT-5.6-sol | Cmt | 65.6 | 71.3 | 1.50 | 1.36 | +5.7 |
| GPT-5.6-sol | Fix | 49.0 | 54.0 | 2.03 | 1.81 | +5.0 |
| GPT-5.5 | Cmt | 63.3 | 67.4 | 1.86 | 1.82 | +4.1 |
| GPT-5.5 | Fix | 47.8 | 53.0 | 2.33 | 1.97 | +5.2 |
本轮JS复算8组，7升1降、简单不加权平均+3.75个百分点，4组估计成本下降。GPT-5.6-sol Cmt同模型表3：自修订67.1%/$3.10、5次集成70.4%/$8.07、子代理61.9%/$5.24，对照默认65.6%/$1.50及探索提示71.3%/$1.36。不是同成本独立A/B，表中成本舍入、未评估意见精确率，不推广到AI-D；具体模型和宿主变化需重测。
## 4. 提示词自我进化与反回归
[STEVE预印本](https://arxiv.org/abs/2609.23716)，[作者2026-11公开解释与消融](https://dream.ischool.illinois.edu/blogs/why_prompt_optimization_makes_prompts_worse.html)：错误样本生成修订信号、成功样本做保留验证；在10个推理基准及三种评估/优化模型报告较稳定结果；作者报告从正确样本生成反馈的单例使准确率74.1→38.5%，失败样本改进到88.9%，非一般因果倍率。作者亦列出竞争方法TRAS使用正确样本作为保留信号，未头对头比较。与V23.3真实训练提升留出下降、GEPA反馈和多目标边界相连。裁决：保留成功行为作为测试，失败及可证遗漏作为改动理由；没有证据时不为每轮产生缺陷而重写；模型变化后重新验证。未安装或执行优化器，未读取STEVE完整源代码/原论文全文，证据为原摘要及作者说明。
## 5. 实际专业劳动：QuixBugs 真实基准代码双版本复算
已通过GitHub读取固定commit 4257f44b0ff1181dedaedee6a447e133219fcebf 中两组真实基准算法的缺陷及正确函数。路径：python_programs/levenshtein.py (blob ba5c682177a5c2336c251ecc690f1020ae378a91)、correct_python_programs/levenshtein.py (52fadb61e87b471cfff974750bfee0fc747f3652)、python_programs/is_valid_parenthesization.py (a339ac2c4cefb7547ab4beaecd791e96c678f8e4)、correct_python_programs/is_valid_parenthesization.py (ae70a3f22f90a68ca74e8af99eddd3eee894099b)。[固定版本原件](https://github.com/jkoppel/QuixBugs/tree/4257f44b0ff1181dedaedee6a447e133219fcebf)。本轮将函数逻辑准确转录成Python并实际执行，而非下载运行完整仓库。自己独立实现DP编辑距离及反复消除相邻括号的判据，对长度0–4、字母表ab的31个字符串两两配对961例；对长度0–8的括号串511例。
| 函数 | 输入数 | 缺陷版错误 | 正确版错误 | 反例 |
|---|---:|---:|---:|---|
| 编辑距离 | 961 | 856 | 0 | a,a应0而实际1 |
| 合法括号 | 511 | 125 | 0 | ( 应假而实际真 |
普通示例：编辑距离空串与ab、a与b、aaa与bbb三例均过；原括号文档两例均过。机制：相同字符无需编辑；合法括号须每个前缀非负且最终平衡。两个已知缺陷通过专业不变量/独立计算定位，不是盲发现；样例选取有目的，不能以错误数推断真实分布或模型准确率。不将正确版有限通过声称全域证明。复现：
```python
from itertools import product
def lev(a,b,bug):
    if not a or not b: return len(a) or len(b)
    if a[0]==b[0]: return int(bug)+lev(a[1:],b[1:],bug)
    return 1+min(lev(a,b[1:],bug),lev(a[1:],b[1:],bug),lev(a[1:],b,bug))
def par(x,bug):
    depth=0
    for c in x:
        depth+=1 if c=='(' else -1
        if depth<0:return False
    return True if bug else depth==0
def dp(a,b):
    r=list(range(len(b)+1))
    for i,x in enumerate(a,1):
        s=[i]
        for j,y in enumerate(b,1):s.append(min(s[-1]+1,r[j]+1,r[j-1]+(x!=y)))
        r=s
    return r[-1]
def oracle(x):
    while '()' in x:x=x.replace('()','')
    return x==''
s=[''.join(x) for n in range(5) for x in product('ab',repeat=n)]
p=[''.join(x) for n in range(9) for x in product('()',repeat=n)]
for bug in (True,False):
    print(bug,sum(lev(a,b,bug)!=dp(a,b) for a in s for b in s),sum(par(x,bug)!=oracle(x) for x in p))
```
预期输出 True 856 125; False 0 0。已执行同逻辑的独立函数版，未把原外部代码或完整数据集上传。
## 6. 专业提示词候选与实际激活
不把“必须找问题”当成完整表达；将未知缺陷发现拆成对象契约/必要条件、可观测反证、替代解释、独立验收与保留正常行为。对于复杂高价值任务，可按需使用以下短条款替换笼统自审：“从当前目标和专业对象的成立条件出发，主动寻找会实质改变结论的遗漏、异常或反例；对可疑项定位对象、证据、影响及竞争解释，并选择有效的原始资料、独立计算、测试或实际调用验证。允许未发现缺陷；区分已证缺陷、合理怀疑、未检查。修订指令须对应失败机制，并保留原有效行为的回归验证；不要用文字反思、报告长度或问题数量代替实际劳动。”
本轮激活V23.2对象/规格与V23.3评价真值，新增正确负例及行为测试用于发现/修复分离。用户原意仍是充分发挥AI专业智能和持续进化，不缩成软件审查。暂只作专项候选，AGENTS已有主动发现要求，不累加无证据全局规则。
## 7. 下一阶段
优先用陌生真实任务和独立参考，模型/权限/预算相同，比较原指令、专业条件验证、证据工具反馈、组合，保留明确正常行为的负例及留出；评价已知缺陷召回、新缺陷证据、误报、误修、完整交付、成本及人负担。允许未发现缺陷。优先实际可执行、未见、非MEME专业任务，或从CRBugBench公开数据中抽取未读任务（需防泄漏、可用执行宿主），不强制继续局部复算；有合适独立环境再运行模型。及时记录新认知与实际证据，不等待用户指出，保留开放机会和V23.7。未验证：独立模型效果、自动跨会话调用、长时运行预算、全部历史回收。没有因果证明提示词造成增益。
