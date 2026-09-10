# Extraction assessment

Use for an explicitly named candidate. Keep evidence, a proposal and an accepted decision visibly distinct.

## Decision gate

Establish the actual reason: independent scaling, release cadence, ownership, isolation or a measurable operational bottleneck. Compare with fixing the modular monolith. Record the evidence, expected benefit, added operational cost and success criteria; do not assume chat/search/media must be extracted first.

Use `unknown`, `not applicable (reason)`, `blocked (evidence)` or `verified (evidence)` for each applicable item. Scaffold-only modules have no demonstrated extraction readiness.

## Backend plan

- Name the boundary, owners, inbound/outbound contracts and all callers. Account for hidden shared-library and synchronous-chain coupling.
- List data owners, cross-owner access, atomicity requirements and consistency expectations. Define a single writer during transition; any dual-write proposal needs explicit failure/reconciliation design.
- Define contract/event evolution, consumer compatibility, authentication/authorization and secrets boundaries. Verify current framework/provider guidance rather than assuming a library feature exists.
- For asynchronous interactions, define durable publication, at-least-once effects, idempotency, ordering scope, replay, dead-letter handling and recovery. Do not promise exactly-once behavior end to end.
- For network calls, define timeouts, bounded retries with safe idempotency, overload handling and observability. Add distributed tracing/metrics only when justified by the selected design.
- Sequence an incremental replacement: contract tests, compatibility layer if needed, data backfill/catch-up and verification, controlled traffic cutover, observation period, retirement.
- Name acceptance thresholds, operator ownership, failure tests, dashboards/alerts and reconciliation checks. Specify rollback conditions and data compatibility; after irreversible writes, a forward-repair plan may be necessary instead of pretending rollback is trivial.
- Separate deploy/provision/data-migration execution into explicitly authorized work. Do not place secrets or real customer records in planning artifacts.

## Frontend compatibility plan

- Track the externally visible contract independently of backend topology. Identify affected API-client seam, consumer versions and user journeys.
- Prefer additive compatibility during backend cutover. Coordinate FE releases, cached/stale clients, authentication, error semantics, loading/partial-failure states and non-idempotent commands.
- Link counterpart BE decisions and contract tests. Treat an unavailable sibling repository as unverified, not as evidence of compatibility.
- Keep one frontend deployable; introduce neither microfrontends nor BFF nor mobile implementation without a separate concrete requirement.
- Plan a client-side rollback only if it remains compatible with backend data and contracts.

## Artifact and stop condition

Write one assessment/plan under the configured `.scratch/<effort>/` with rationale, evidence, sequence, counterpart links, unresolved decisions, acceptance criteria and rollback/repair conditions. Update project-state.md with the decision pointer, not the entire plan.

The outcome may be **remain monolithic**, **investigate further**, or **propose extraction subject to the stated gates**. A successful boundary test is evidence for structure, not approval to cut over production.

References: [DecoUp architecture](../../../../docs/ARCHITECTURE.md); [Spring Modulith structural verification](https://docs.spring.io/spring-modulith/reference/verification.html).
