---
name: mono-to-microservices
description: Maintain DecoUp's migration readiness during implementation, review module or contract changes, and plan incremental extraction when explicitly requested. Refresh this skill's repo-specific state as boundaries evolve; do not turn ordinary feature work into a microservices migration.
---

# Monolith to microservices

Keep the monolith easy to change today and preserve evidence for a future extraction decision. A clean package is not proof that a distributed service is needed or ready.

## Orient

Read root `AGENTS.md`, `docs/ARCHITECTURE.md`, relevant ADRs and the approved task/spec. Load [project-state.md](references/project-state.md) for this repository's current seams, blockers and evidence; verify affected entries against code before trusting them.

This is the **frontend** edition. Keep one web application and FE-only ownership. Backend microservices do not imply microfrontends; mobile remains a separate future consumer.

Use one mode matching the request:

- **Maintain (default during implementation):** assess the change's boundary impact and refresh the living reference where facts changed.
- **Assess:** report evidence and unknowns for a named candidate; a recommendation to stay monolithic is valid.
- **Plan extraction:** only for an explicit migration-planning request; create a scoped plan using the extraction reference. Planning is not execution.

## Maintain alongside feature work

1. Inspect the approved change, including uncommitted and new files. Compare against the actual task-start state; an unborn Git repository has no valid HEAD baseline.
2. Review the affected interfaces, owners and dependencies using the repo-specific checklist below. Stay within the requested feature; surface unrelated coupling as a linked follow-up rather than silently refactoring it.
3. Run the relevant existing guard and behavioral checks when applicable. Distinguish checks actually run from prior evidence; a dependency test alone does not prove runtime compatibility.
4. Update affected entries in `references/project-state.md` with a source path or ticket/ADR, verification date, observed state and unresolved blocker. Replace stale claims; keep unaffected rows untouched. If the change has no migration impact, say so in the existing ticket/completion note without changing the reference just to update a timestamp.
5. When an agreed, enduring project decision changes this skill's checklist or extraction guidance, update the relevant SKILL.md section or reference in the same change and record the reason/evidence in the reference's maintenance log. Ordinary implementation facts go in project-state.md, not an ever-growing SKILL.md.
6. Report the migration impact, reference updates and unresolved risks in the task closeout. Keep the maintenance log compact; link old detail to primary artifacts rather than copying entire specs.

This is event-driven agent work, not a daemon or scheduled watcher. After manual/external edits, invoke `$mono-to-microservices refresh` to reconcile the reference. Do not silently relax ownership rules or tests to make an implementation appear extraction-ready.

## Frontend review checklist

- App composition uses domain public entrypoints; shared packages do not import applications. Review actual exports for semantic leaks, not just import syntax.
- Transport-facing contracts agree with the backend-owned contract. Track consumers, versions, error shapes, pagination and compatibility expectations only when they exist.
- Keep backend topology out of screens: routing/endpoint changes belong at a defined client seam. Do not invent a gateway or BFF to prepare for hypothetical services.
- For contract changes, account for old web clients and future mobile compatibility, cache invalidation, authentication/session boundaries, partial failures and non-idempotent retries. Do not retry a payment/order action blindly.
- Shared mobile candidates stay platform-neutral; DOM UI and Next.js routes stay web-specific. FE does not own inventory, payment, booking or shipping authority.
- Default structural guard: `npm run check`; inspect package scripts if it changes. Link relevant contract/browser checks once they exist.
- A backend dependency or unknown API is a linked counterpart ticket, not permission to add backend code here.

## Extraction planning

Read [extraction-checklist.md](references/extraction-checklist.md) only for a candidate assessment or extraction plan. Record decisions in ADRs only after they are agreed, and use the configured central-spec/local-draft workflow for proposed work. Suggest `decoup-fe-to-spec` / `decoup-fe-to-ticket` as next user-invoked steps; do not launch them automatically.

Related installed disciplines: `codebase-design` for interface shape, `domain-modeling` for agreed language/ADRs, `research` for current primary-source facts, `code-review` for standards/spec fidelity. These support the request; they do not expand its authority.

Done means the affected facts are reconciled, validation is reported honestly, and blockers have owners or explicit unknowns. No percent-ready score without measurable criteria. No extraction, infrastructure, schema or product implementation is authorized by maintaining this skill.
