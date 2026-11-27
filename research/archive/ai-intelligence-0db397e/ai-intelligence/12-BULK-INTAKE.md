# 12｜Bulk Intake Architecture

## Purpose

Bulk Intake is the controlled entry boundary for large external research batches.

It separates **capturing information** from **believing information**.

The system must be able to ingest thousands of search results without turning them into knowledge, while preserving provenance, resumability, deduplication, and cost visibility.

## Core pipeline

`External Search → Batch → Raw Items → Normalize → Canonicalize → Entity Resolution → Dedup/Cluster → Triage → Research Queue`

No item is promoted to durable knowledge merely because it entered the system.

## Batch

Every bulk operation has a stable Batch ID.

Minimum fields:

- batch_id
- created_at
- research_goal
- search_questions
- source_types
- queries / discovery strategy
- agents / models used
- time window
- budget limits
- item counts
- status
- failures / retries
- cost or usage when available

## Item states

`PENDING → PROCESSING → NORMALIZED → DEDUPED → TRIAGED → QUEUED`

Failure states:

`FAILED / RETRY / BLOCKED / UNKNOWN / REJECTED`

State must be persisted so interrupted work can resume without reprocessing completed items.

## Raw vs normalized

Raw capture preserves what was found.

Normalization may:

- canonicalize URLs;
- normalize repository identities;
- extract source metadata;
- detect obvious mirrors;
- attach timestamps;
- compute content fingerprints.

Normalization must not silently turn interpretation into fact.

## Deduplication

Deduplicate at multiple levels:

1. exact URL;
2. canonical URL;
3. source/content fingerprint;
4. same underlying project/entity;
5. repeated claim;
6. syndicated or derivative coverage.

Multiple sources discussing the same entity are retained as separate sources but must not be counted as independent evidence automatically.

## Triage

Use simple transparent classes first:

- P0 — immediate research
- P1 — strong candidate
- P2 — useful but deferred
- P3 — low value
- UNKNOWN — insufficient information
- REJECTED — clearly irrelevant/invalid

Do not introduce elaborate numeric scores until real batches demonstrate that scoring improves decisions.

## Batch completion

A batch is not considered successful because all URLs were processed.

A completed batch should report:

- discovered;
- normalized;
- unique;
- entities;
- clusters;
- relevant;
- research queued;
- rejected;
- unknown;
- failed;
- retry pending;
- adopted downstream, if any.

The useful output of a 10,000-item batch may be only a small number of validated assets.

## Reprocessing

A batch must be safely rerunnable.

Repeated ingestion should identify previously seen sources/entities and update rather than duplicate them.

## Boundary

Bulk Intake owns **entry, provenance, normalization and triage**.

It does not own final research conclusions or durable knowledge.
