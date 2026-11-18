# 14｜Research Runs, Checkpoints and Budgets

## Purpose

Long-running research must be observable, resumable and bounded.

A Research Run records **what the system actually did**, separate from the Research Ledger, which records conclusions.

## Research Run

Minimum fields:

- run_id
- parent_batch_id, if applicable
- goal
- plan/version
- agents/models
- start/end time
- current state
- tasks completed
- searches
- fetches
- model calls
- failures
- retries
- cost/usage
- evidence produced
- candidates produced
- final outcome

## Run states

`CREATED → RUNNING → PAUSED → COMPLETED`

Alternative:

`FAILED / CANCELLED / DEGRADED`

A degraded result is preferable to an infinite retry loop.

## Checkpoint

A checkpoint records enough state to resume safely.

Minimum:

- run_id
- last completed unit
- pending units
- active tasks
- retry state
- accumulated results
- budget remaining
- relevant version/configuration
- timestamp

If a process stops after item 734, the next run resumes from the persisted state instead of restarting item 1.

## Budget

Budget is multidimensional.

Possible limits:

- search calls;
- fetches;
- cheap-model calls;
- strong-model calls;
- concurrency;
- wall-clock time;
- retries;
- optional monetary/token usage.

The system should spend expensive reasoning only where expected information value justifies it.

## Cost-aware routing

Default principle:

`Cheap discovery → stronger filtering → expensive judgment → real experiment`

This is a policy, not a fixed model assignment. Actual performance should determine routing over time.

## Execution trace

Record enough trace to answer:

- What happened?
- Which agent/model did it?
- Which source was used?
- Why did the system continue?
- Why did it stop?
- Where did it fail?
- What evidence changed the decision?

Do not store every internal model token. Store decision-relevant execution events.

## Retry policy

Retries must be bounded and classified.

Examples:

- transient network failure → retry;
- provider timeout → retry;
- invalid source → do not retry indefinitely;
- unsupported operation → block;
- contradictory evidence → research, not retry.

## Separation

Run records are operational history.

Research conclusions belong in research/evidence/decision records.

Neither should silently replace the other.
