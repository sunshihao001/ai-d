# 16｜Skill Evaluation and Evolution

## Purpose

A Skill Candidate becomes a durable capability only when its behavior is demonstrated.

Documentation, a prompt, or an agent's self-assessment is not sufficient.

## Lifecycle

`DISCOVERED → CANDIDATE → EXTRACTED → EVALUATING → ADOPTED`

Alternative:

`REJECTED / DEFERRED / UNKNOWN / DEPRECATED`

A Skill may return to evaluation after changes.

## Evaluation object

Each Skill evaluation should define:

- skill/version under test;
- target behavior;
- baseline without the Skill;
- candidate with the Skill;
- representative cases;
- environment/workspace requirements;
- evaluation criteria;
- judge type;
- results;
- failures;
- regression cases;
- decision.

## Baseline comparison

Where feasible:

`Agent + Skill` vs `Agent without Skill`

The question is not:

> Does the Skill sound useful?

It is:

> Does the Skill measurably improve the intended behavior under relevant conditions?

Alibaba's skill-up explicitly supports evaluation with and without Skills, independent judges, multi-turn cases, workspace fixtures, structured reports and repeated evolution. citeturn446721search0turn446721search1

## Judges

Possible evaluation modes:

- deterministic rule;
- script/test;
- independent model judge;
- human review for consequential cases.

Model judges are evidence, not unquestionable truth.

## Evaluation dimensions

Depending on the Skill:

- correctness;
- task completion;
- consistency;
- tool use;
- evidence grounding;
- efficiency;
- failure handling;
- regression resistance;
- transfer to new but related cases.

## Evolution loop

`Run → Observe Failure → Diagnose → Modify → Add/Improve Eval → Rerun`

A change should not be adopted merely because one test improved.

Protect against regressions by retaining representative previous cases.

## Versioning

Every adopted Skill should be traceable to:

- version;
- evaluation run;
- evidence;
- known limitations;
- applicable contexts;
- rejected contexts.

## Promotion

A Skill may enter durable ai-d knowledge when:

- the target problem is relevant;
- the mechanism is understood;
- evidence is traceable;
- evaluation shows useful behavior;
- limitations are known;
- the improvement survives representative tests.

## Rollback

If later evidence shows degradation:

`ADOPTED → DEPRECATED / RE-EVALUATING`

The previous version and reason for rollback remain traceable.

## Important boundary

Skill Evaluation is a capability validation layer.

It does not imply that every useful observation must become a Skill.
