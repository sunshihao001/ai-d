# 02｜Space Map

This is the physical organization for the external intelligence layer. It is deliberately shallow: folders are containers, while the contracts define how information moves.

```
ai-intelligence/
├── 00-CHARTER.md
├── 01-BOUNDARIES.md
├── 02-SPACE-MAP.md
├── 03-RESEARCH-PROTOCOL.md
├── 04-SOURCE-POLICY.md
├── 05-EVIDENCE-POLICY.md
├── 06-ASSET-LIFECYCLE.md
├── 07-PROMOTION-POLICY.md
├── 08-POLLUTION-CONTROL.md
├── 09-AUTOMATION-READINESS.md
├── 10-EVALUATION.md
├── 11-OPEN-QUESTIONS.md
├── 12-BULK-INTAKE.md
├── 13-COVERAGE-AND-GAPS.md
├── 14-RUN-AND-CHECKPOINTS.md
├── 15-ENTITY-CLAIM-EVIDENCE.md
├── 16-SKILL-EVALUATION.md
├── RESEARCH-LEDGER.md
├── RUN-REGISTRY.md
├── ASSET-REGISTRY.md
├── ENTITY-REGISTRY.md
├── COVERAGE.md
├── QUEUE.md
│
├── intake/
│   ├── batches/
│   ├── raw/
│   ├── normalized/
│   ├── dedup/
│   └── rejected/
│
├── sources/
├── discoveries/
├── research/
├── evidence/
├── candidates/
├── experiments/
├── decisions/
└── archive/
```

## Architectural layers

### 1. Intake

`Batch → Raw → Normalize → Canonicalize → Entity Resolution → Dedup/Cluster → Triage`

This is the high-volume buffer. It is not a knowledge store.

### 2. Intelligence

`Coverage → Research Queue → Research Run → Evidence → Claims/Conflicts → Gap-directed follow-up`

This is where the system tries to understand what the external material actually means.

### 3. Capability

`Candidate → Experiment → Skill/Method/Workflow/Architecture Evaluation → Decision`

This is where reusable mechanisms are tested rather than merely described.

### 4. Durable Knowledge

Only adopted, sufficiently validated and still relevant assets are promoted to `ai-d` main.

## Registry roles

- `RESEARCH-LEDGER.md`: conclusions and research records;
- `RUN-REGISTRY.md`: operational execution history;
- `ASSET-REGISTRY.md`: candidate/adopted reusable assets;
- `ENTITY-REGISTRY.md`: canonical entities behind multiple sources;
- `COVERAGE.md`: research dimensions and unresolved gaps;
- `QUEUE.md`: current research work.

These registries should remain lightweight. They are indexes/control records, not a replacement for the actual evidence and research material.

## Why these spaces exist

- `intake/`: high-volume incoming material before research;
- `sources/`: provenance and source identity;
- `discoveries/`: initial findings before deeper investigation;
- `research/`: active investigations and synthesis;
- `evidence/`: evidence bundles and counter-evidence;
- `candidates/`: extracted reusable assets not yet adopted;
- `experiments/`: real-world tests;
- `decisions/`: adoption/rejection/defer decisions;
- `archive/`: deprecated material kept for traceability.

The folders are containers, not a mandatory sequence. A research item may move, split, merge, pause or return to an earlier state.
