# 15｜Entity, Claim and Evidence Model

## Purpose

Large-scale research needs a stable relationship between what was found, what it refers to, what is being claimed, and what supports or contradicts the claim.

## Core objects

### Source

Where information came from.

Examples:

- GitHub repository;
- X post;
- Reddit discussion;
- official documentation;
- paper;
- book;
- runtime observation.

A Source is not automatically evidence for every statement it contains.

### Entity

The underlying thing being discussed.

Examples:

- project;
- product;
- Skill;
- workflow;
- architecture;
- technique;
- organization;
- implementation.

Multiple Sources may refer to one Entity.

### Claim

A specific proposition that can be evaluated.

Example:

> Project X supports automatic Skill evaluation.

Claims must be narrow enough to verify or challenge.

### Evidence

A source-backed observation that supports, contradicts or limits a Claim.

Evidence should preserve:

- evidence_id
- source_id
- entity_id
- claim_id
- source URL/reference
- captured_at
- relevant excerpt/location
- source/version metadata where available
- content fingerprint when useful
- evidence role: SUPPORT / CONTRADICT / LIMIT / CONTEXT
- verification state

## Provenance chain

`Source → Entity → Claim → Evidence → Interpretation → Decision`

The chain must remain traceable.

## Independence

Ten posts repeating one README claim are not automatically ten independent evidence sources.

Evidence independence should be considered when assessing confidence.

## Contradiction

Conflicting evidence is first-class data.

Do not resolve contradiction by silently selecting the most convenient source.

Record:

- conflicting claims;
- sources;
- scope/version differences;
- possible explanation;
- unresolved status.

## Evidence quality

Prefer, where relevant:

1. runtime behavior;
2. executable code/tests;
3. issue/PR history and user reports;
4. primary documentation;
5. independent secondary reports;
6. social claims.

This is a preference, not an absolute hierarchy.

## UNKNOWN

If evidence is insufficient, retain UNKNOWN.

UNKNOWN is a valid research result and must not be converted into a positive claim merely to complete a record.

## Deduplication

Evidence may be duplicated across sources.

The system should distinguish:

- same source copied elsewhere;
- same claim independently observed;
- same entity with different versions;
- genuinely independent corroboration.

## Boundary

This model supports research traceability.

It is not a mandate to build a large graph database. Simple files/records are sufficient until scale demonstrates the need for a graph implementation.
