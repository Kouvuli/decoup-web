# DecoUp frontend

This repository is FE-only: web application and landing-page scope; mobile has its own sibling decoup-mb repository. No product screens exist yet. Read `docs/ARCHITECTURE.md` before structural changes and `CONTEXT.md` for domain terms.

## Scope and safeguards

- The initial deliverable is scaffolding only. Implement features only on a later explicit request.
- Keep business authority, persistence, payment processing and shipping orchestration in the backend. Cross-repo work needs separate linked tickets, not a wider interpretation of a skill.
- Commit, create branches, push, provision services and change remote trackers only when explicitly requested. An installed skill is not authorization.
- `AGENTS.md` is canonical, including when running setup. Edit it rather than creating or preferring `CLAUDE.md`.
- When a skill names a generic Skill tool, read the installed `.agents/skills/<name>/SKILL.md` and required references using the available host tools. User-only skills remain explicit entry points.
- Upstream auto-commit/branch instructions in implement, prototype, wayfinder, wizard and merge-conflict flows are subordinate to these safeguards. Without authorization, retain local evidence and report the next Git action.
- If subagents are unavailable, report that limitation and use sequential research or separately labeled review passes; do not claim independent parallel review.
- Before work involving skill behavior, read `docs/agents/skill-workflow.md`. Configuration changes belong in `docs/agents/`, skill instruction changes in `.agents/skills/`.

## Boundaries

- Compose domains in `apps/web/src/app/`; domain modules never import other domain modules or the app shell.
- Each domain exposes only `index.ts`; internals stay private. Shared packages expose only their declared public entrypoints.
- `packages/` cannot depend on `apps/`. Share transport contracts and portable client helpers, not backend entities or domain authority.
- Run `npm run check` for TypeScript and import boundaries. No page, dev server, or production build is configured yet.

## Agent skills

### FE visual design

For cross-client branding, read ../decoup-specs/docs/shared-brand-native-ui.md. Extracted web references are inspiration, not approved requirements. Record actual shared decisions in canonical shared specs with revision approval and link from web/mobile specs. Mobile uses Expo UI guidance and native implementation, not copied DOM/CSS or sibling source. Supporting PRODUCT.md/DESIGN.md cannot override approved shared decisions.

Read docs/agents/frontend-design-skills.md before using hallmark, impeccable or decoup-fe-skillui. Choose one visual lead per surface; do not run competing redesign passes. These skills support an authorized FE task, not automatic product implementation. Keep canonical spec/revision approval intact and AGENTS.md authoritative. Treat PRODUCT.md/DESIGN.md and extracted references as scoped supporting docs, not replacement requirements.

Hallmark/Impeccable are protected third-party originals tracked in docs/agents/external-skills-source.json; the Matt updater must not update or overwrite them. SkillUI extraction uses temporary output with --format design-md --no-skill to avoid its global skill-install branch. Do not enable Impeccable hooks, live bridges, shortcut pins, cross-harness/global installation or download/execute its engine as a side effect of ordinary skill setup; review and authorize those runtime capabilities separately.

### Living migration guidance

For implementation, refactoring or contract work, read `.agents/skills/mono-to-microservices/SKILL.md` before changing affected boundaries. At ticket closeout, assess migration impact; refresh its `references/project-state.md` when facts change, and update the skill's durable guidance when an agreed architectural decision changes it. Report no-impact changes without unnecessary document churn. This is task-time maintenance, not a background watcher.

### Skill updates

For upstream skill refresh/discovery requests, use `.agents/skills/update-matt-pocock-skills/SKILL.md`. Audit first and apply only the specifically approved set. `docs/agents/local-skills.json` identifies project-owned skills; upstream updates must preserve them and their living references.

### Issue tracker

Use `decoup-fe-to-spec` and `decoup-fe-to-ticket` for DecoUp planning. Read `docs/agents/planning.json` and `docs/agents/issue-tracker.md`. Canonical specs live in the configured sibling decoup-specs checkout; these workflows may write this repo's scoped specs there after reading its AGENTS.md. Cross-scope changes require explicit scope approval. Discovery stays in .scratch; Trello drafts/sync records live in .scratch/trello. Trello is intended but disabled until MCP, verified destination IDs and publication approval exist.

Delivery hierarchy is Epic → Feature → User Story → Acceptance Criterion → repo-owned ticket. Trello cards are tickets, not copies of Epics or Stories; preserve verified `DE-` keys separately from stable local draft IDs.

Preserve these custom routing/configuration choices when running setup or updating upstream. Explicit upstream to-spec/to-tickets requests must follow central-source and publication safeguards; recommend the project-owned adaptation rather than silently launching a different user-only skill. Never create a second canonical local spec.

### Triage labels

Use the five default state roles plus bug/enhancement categories. Read `docs/agents/triage-labels.md` before triage.

### Domain docs

Single-context documentation: root `CONTEXT.md` and `docs/adr/`. Read `docs/agents/domain.md` before consuming or changing domain documentation.
