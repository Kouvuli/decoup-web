# DecoUp Frontend — Agent Skills Guide

For brand reuse across web/mobile, follow [Shared brand, native mobile UI](../../decoup-specs/docs/shared-brand-native-ui.md). Keep web design tools here; mobile consumes approved shared decisions with separately installed Expo skills, not copied web components.

## Where can I set that?

Repository: `/home/kali/Desktop/DecoUp/decoup-web`.

| Setting | Read/edit here, relative to this repository |
| --- | --- |
| Canonical instructions and repo scope | [AGENTS.md](../AGENTS.md) |
| Central repo path and future Trello destination | [docs/agents/planning.json](agents/planning.json) |
| Tracker, spec and ticket locations | [docs/agents/issue-tracker.md](agents/issue-tracker.md) |
| Triage state/category vocabulary | [docs/agents/triage-labels.md](agents/triage-labels.md) |
| Glossary and ADR layout | [docs/agents/domain.md](agents/domain.md) |
| Product language | [CONTEXT.md](../CONTEXT.md) |
| Structural ownership and extraction conventions | [docs/ARCHITECTURE.md](ARCHITECTURE.md) |
| Skill instructions | `.agents/skills/<skill-name>/SKILL.md` |
| Skill UI metadata and invocation policy | `.agents/skills/<skill-name>/agents/openai.yaml`; user-invoked skills explicitly disable implicit invocation |
| Host adaptations and setup record | [docs/agents/skill-workflow.md](agents/skill-workflow.md) |
| Upstream version/source inventory | [docs/agents/skills-source.json](agents/skills-source.json) |
| Project-owned skills (protected from upstream updates) | [docs/agents/local-skills.json](agents/local-skills.json) |
| Living migration evidence | [mono-to-microservices/references/project-state.md](../.agents/skills/mono-to-microservices/references/project-state.md) |

These are editable repository files, not an app settings screen. Each repo owns its copies; editing one does not alter the other or your global skills.

## Start here

Setup has already been applied; you do not need to repeat it to start. Open this repository as the task's working directory. On the next turn its repo-scoped skills should be available; if discovery is stale, restart Codex. Invoke with `$ask-matt` or `$grill-with-docs`. Upstream docs use slash notation; that is not a shell command.

**User-invoked** means you explicitly start the workflow. **Model-invoked** means the agent may use that supporting discipline for an authorized task; you can invoke it directly too. Installing implement or prototype is not a request to build features.

Web is the only application target today. Mobile is reserved, not scaffolded as another running app.

## Recommended flow

1. For a large unclear initiative, `$wayfinder` maps decisions. For a focused question, begin with `$grill-with-docs`.
2. Supporting `research`, `grilling` and `domain-modeling` gather facts, clarify terms and record agreed decisions. Use prototype only when a visual or client-state experiment will resolve an explicit question.
3. Explicitly invoke `$decoup-fe-to-spec` to record an Epic and bounded Feature with stable Story/Acceptance IDs, then `$decoup-fe-to-ticket` after Feature revision approval. Keep discovery/spec/ticket context together when practical.
4. On a future implementation request, use `$implement` on one unblocked ticket. It uses `tdd` (and `codebase-design` as needed), then `code-review`. Git commits still require your explicit request.
5. Use `diagnosing-bugs` for failures, `$triage` only for raw incoming reports, and `$improve-codebase-architecture` once real friction exists.
6. Use `$handoff` when changing FE/BE directories. Reference the contract/spec and counterpart ticket; do not move business ownership into the wrong repo.

For this initial scaffold, stop before steps that create product behavior. Validation is TypeScript plus import-boundary checks; there are no UI/e2e tests or screens yet.

## Installed skills (28: 21 Matt + 2 external design + 5 project-owned)

Dependencies below distinguish actual supporting calls from related next steps. Setup configuration is a shared prerequisite, not a runtime package dependency.

### setup-matt-pocock-skills

- **Invocation:** User-invoked (explicit only).
- **What it does:** Configure tracker, triage vocabulary and domain-document pointers.
- **When:** Initial setup or changing tracker/document layout.
- **Dependencies / related:** None; related: triage and all engineering workflows.
- **Read/edit:** [`.agents/skills/setup-matt-pocock-skills/SKILL.md`](../.agents/skills/setup-matt-pocock-skills/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/setup-matt-pocock-skills/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** AGENTS.md; docs/agents/issue-tracker.md, triage-labels.md, domain.md.
- **Do not use for:** Not product planning or implementation.

### ask-matt

- **Invocation:** User-invoked (explicit only).
- **What it does:** Recommend the appropriate skill or workflow; a router, not an executor.
- **When:** When unsure which workflow fits the current question.
- **Dependencies / related:** Related: all installed workflows; optional upstream recommendations are listed below.
- **Read/edit:** [`.agents/skills/ask-matt/SKILL.md`](../.agents/skills/ask-matt/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/ask-matt/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Normally none; reads workflow configuration.
- **Do not use for:** Not an automatic chain that launches other user-only skills.

### wayfinder

- **Invocation:** User-invoked (explicit only).
- **What it does:** Map a large, uncertain effort into linked decision tickets.
- **When:** Multi-session discovery before an implementation spec exists.
- **Dependencies / related:** research, prototype, grilling, domain-modeling; related: to-spec, to-tickets.
- **Read/edit:** [`.agents/skills/wayfinder/SKILL.md`](../.agents/skills/wayfinder/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/wayfinder/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** .scratch/<effort>/map.md and issues/*.md; research assets; CONTEXT.md and ADRs through dependencies.
- **Do not use for:** Not a well-scoped feature or permission to implement its map.

### grill-with-docs

- **Invocation:** User-invoked (explicit only).
- **What it does:** Interview about a design while maintaining domain language and decisions.
- **When:** Before specifying an ambiguous feature or integration.
- **Dependencies / related:** grilling, domain-modeling.
- **Read/edit:** [`.agents/skills/grill-with-docs/SKILL.md`](../.agents/skills/grill-with-docs/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/grill-with-docs/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** CONTEXT.md; docs/adr/*.md.
- **Do not use for:** Not implementation; do not invent answers on the user's behalf.

### grilling

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Ask decision questions in dependency-aware rounds.
- **When:** As the interview discipline underneath planning workflows.
- **Dependencies / related:** None; related: grill-with-docs, wayfinder, triage, domain-modeling.
- **Read/edit:** [`.agents/skills/grilling/SKILL.md`](../.agents/skills/grilling/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/grilling/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** No persistent output on its own; wrappers save agreed decisions.
- **Do not use for:** Not a substitute for looking up facts or implementing work.

### domain-modeling

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Clarify domain terms and record consequential decisions.
- **When:** When terms conflict or a design trade-off becomes settled.
- **Dependencies / related:** None; related: grilling, writing-for-agents.
- **Read/edit:** [`.agents/skills/domain-modeling/SKILL.md`](../.agents/skills/domain-modeling/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/domain-modeling/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** CONTEXT.md (glossary only); docs/adr/*.md.
- **Do not use for:** Not entity generation, database design or an implementation spec.

### research

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Investigate primary sources and save cited findings.
- **When:** Before choosing technology or evaluating a provider/API.
- **Dependencies / related:** No skill dependency; upstream expects a background subagent.
- **Read/edit:** [`.agents/skills/research/SKILL.md`](../.agents/skills/research/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/research/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** docs/research/<topic>.md, linked from the relevant local issue.
- **Do not use for:** Not permission to provision services; never assume a subagent is available.

### prototype

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Build throwaway visual or logic experiments to settle one design question.
- **When:** Only after a concrete question and prototype scope are agreed.
- **Dependencies / related:** No direct skill dependency; related: handoff, wayfinder, to-spec.
- **Read/edit:** [`.agents/skills/prototype/SKILL.md`](../.agents/skills/prototype/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/prototype/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Temporary prototype workspace; verdict/pointer in the configured decoup-specs scoped document or a decision ticket; ADR only if warranted.
- **Do not use for:** Not production code, a real integration or an activity for this scaffold-only request.

### to-spec

- **Invocation:** User-invoked (explicit only).
- **What it does:** Synthesize the discussed solution into a buildable spec.
- **When:** When decisions are sufficiently clear; confirm test seams before publishing.
- **Dependencies / related:** Setup configuration; related: domain-modeling, tdd, to-tickets.
- **Read/edit:** [`.agents/skills/to-spec/SKILL.md`](../.agents/skills/to-spec/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/to-spec/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** the configured decoup-specs scoped document using central metadata/approval rules; prefer the project-owned adapter.
- **Do not use for:** Not discovery from scratch or permission to invent unresolved requirements.

### to-tickets

- **Invocation:** User-invoked (explicit only).
- **What it does:** Split an agreed spec into small, independently verifiable slices with blockers.
- **When:** For implementation spanning more than one session.
- **Dependencies / related:** Setup configuration; related: to-spec, implement.
- **Read/edit:** [`.agents/skills/to-tickets/SKILL.md`](../.agents/skills/to-tickets/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/to-tickets/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** .scratch/<feature>/issues/<NN>-<slug>.md, one ticket per file.
- **Do not use for:** Not a request to create backend code in FE or frontend code in BE.

### implement

- **Invocation:** User-invoked (explicit only).
- **What it does:** Execute an approved spec/ticket using tests and a final review.
- **When:** Only when product implementation is explicitly requested later.
- **Dependencies / related:** tdd, code-review; codebase-design via tdd when seams need design.
- **Read/edit:** [`.agents/skills/implement/SKILL.md`](../.agents/skills/implement/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/implement/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Approved source/tests; ticket status and evidence; docs only when warranted.
- **Do not use for:** Not for initial scaffolding-only scope. Upstream auto-commit is overridden by AGENTS.md.

### tdd

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Build one behavioral test and the minimum implementation per cycle.
- **When:** During approved feature work or bug fixes at agreed public seams.
- **Dependencies / related:** codebase-design when the interface needs design; related: code-review.
- **Read/edit:** [`.agents/skills/tdd/SKILL.md`](../.agents/skills/tdd/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/tdd/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Source/tests for the approved slice; reads CONTEXT.md and relevant ADRs.
- **Do not use for:** Not bulk speculative tests, private-method tests, or a mandate to build features now.

### codebase-design

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Design small public interfaces that hide meaningful complexity.
- **When:** When deciding module shape, dependency direction or test seams.
- **Dependencies / related:** None; related: tdd, improve-codebase-architecture; optional parallel design exploration.
- **Read/edit:** [`.agents/skills/codebase-design/SKILL.md`](../.agents/skills/codebase-design/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/codebase-design/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Normally advice; an agreed decision may enter docs/adr/ through domain-modeling.
- **Do not use for:** Not one interface per class, speculative abstraction, or merging bounded contexts for code reuse.

### code-review

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Review standards compliance and spec fidelity independently.
- **When:** After a meaningful diff exists and a baseline/spec are known.
- **Dependencies / related:** No skill dependency; upstream expects two subagents; reads tracker config.
- **Read/edit:** [`.agents/skills/code-review/SKILL.md`](../.agents/skills/code-review/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/code-review/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Normally review findings; optional durable report under docs/reviews/.
- **Do not use for:** Not automatic fixes or sign-off without evidence; upstream commit-range flow needs existing commits.

### diagnosing-bugs

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Reproduce and minimize a failure before testing hypotheses and fixing it.
- **When:** A hard bug, intermittent failure or performance regression.
- **Dependencies / related:** No direct dependency; related: tdd, codebase-design, improve-codebase-architecture.
- **Read/edit:** [`.agents/skills/diagnosing-bugs/SKILL.md`](../.agents/skills/diagnosing-bugs/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/diagnosing-bugs/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Regression tests/source for an authorized fix; temporary redacted diagnostic evidence.
- **Do not use for:** Not guessing from logs alone or modifying production without authorization.

### improve-codebase-architecture

- **Invocation:** User-invoked (explicit only).
- **What it does:** Survey real architectural friction and discuss selected improvements.
- **When:** After code/change history exists or a specific friction point is named.
- **Dependencies / related:** codebase-design, grilling, domain-modeling; exploration subagent.
- **Read/edit:** [`.agents/skills/improve-codebase-architecture/SKILL.md`](../.agents/skills/improve-codebase-architecture/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/improve-codebase-architecture/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** OS temp architecture-review-<timestamp>.html; CONTEXT.md and docs/adr/ when decisions land.
- **Do not use for:** Not speculative rewrites of this empty scaffold or automatic microservice extraction.

### resolving-merge-conflicts

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Resolve an in-progress merge/rebase by each side's intended behavior.
- **When:** Only when Git actually reports a merge/rebase conflict.
- **Dependencies / related:** No direct dependency; related: code-review and originating tickets/specs.
- **Read/edit:** [`.agents/skills/resolving-merge-conflicts/SKILL.md`](../.agents/skills/resolving-merge-conflicts/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/resolving-merge-conflicts/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Conflicted files; active Git operation, subject to AGENTS.md authorization rules.
- **Do not use for:** Not starting a merge, dropping changes, force pushing or blanket choosing one side.

### wizard

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Author an interactive shell walkthrough for steps requiring a human.
- **When:** Later account setup or credentials/dashboard actions an agent cannot perform.
- **Dependencies / related:** No skill dependency; includes template.sh; related: research.
- **Read/edit:** [`.agents/skills/wizard/SKILL.md`](../.agents/skills/wizard/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/wizard/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** scripts/<purpose>-wizard.sh; README link. Running it later may write ignored .env files or configured secrets.
- **Do not use for:** Not executing the wizard unattended, inventing a provider, or publishing credentials.

### writing-for-agents

- **Invocation:** Model-invoked (also directly invokable).
- **What it does:** Write concise agent instructions with clear pointers and completion criteria.
- **When:** Editing AGENTS.md, skill instructions or agent-facing docs.
- **Dependencies / related:** None; related: domain-modeling and setup-matt-pocock-skills.
- **Read/edit:** [`.agents/skills/writing-for-agents/SKILL.md`](../.agents/skills/writing-for-agents/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/writing-for-agents/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** AGENTS.md; docs/agents/*.md; .agents/skills/<name>/SKILL.md and referenced files.
- **Do not use for:** Not a general marketing/copywriting workflow or justification for duplicating instructions.

### handoff

- **Invocation:** User-invoked (explicit only).
- **What it does:** Create a portable, redacted continuation document referencing primary artifacts.
- **When:** Switching FE/BE working directories, agents or colleagues.
- **Dependencies / related:** None; related: ask-matt, prototype and the skills needed next.
- **Read/edit:** [`.agents/skills/handoff/SKILL.md`](../.agents/skills/handoff/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/handoff/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** OS temporary directory, not the repository; includes repo paths and suggested skills.
- **Do not use for:** Not a second copy of specs/ADRs or guaranteed permanent storage.

### triage

- **Invocation:** User-invoked (explicit only).
- **What it does:** Evaluate raw requests and bugs, then classify and prepare actionable briefs.
- **When:** When actual incoming reports exist; optional until then.
- **Dependencies / related:** grilling, domain-modeling; setup tracker and label docs.
- **Read/edit:** [`.agents/skills/triage/SKILL.md`](../.agents/skills/triage/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/triage/SKILL.md`. Supporting references/templates are alongside it; edit them only when changing that behavior.
- **May create/update:** Local issue Status/Category/Comments; .out-of-scope/*.md for rejected enhancements; domain docs if needed.
- **Do not use for:** Not re-triaging to-tickets output, inventing reports, or implementing requests.

## Project-owned skills

### mono-to-microservices (project-owned)

- **Invocation:** Model-invoked for relevant implementation/design work; directly invoke `$mono-to-microservices refresh` or ask it to assess a named extraction candidate.
- **What it does:** Keeps migration guidance aligned with actual implementation while retaining the monolith; supports a separately requested incremental extraction plan.
- **When:** Module, contract, dependency, data ownership or transaction changes, and implementation closeout. The AGENTS.md hook ensures affected migration facts are reviewed during agent work.
- **Dependencies / related:** No mandatory skill dependency; related: codebase-design, domain-modeling, research and code-review. It suggests user-invoked planning workflows without starting them.
- **Read/edit:** [`.agents/skills/mono-to-microservices/SKILL.md`](../.agents/skills/mono-to-microservices/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/mono-to-microservices/SKILL.md`.
- **May create/update:** Its `references/project-state.md` tracks observed seams, blockers and evidence. Durable lessons may update SKILL.md or extraction-checklist.md with reasons; agreed decisions may enter docs/adr and explicit migration plans the local tracker. Keep CONTEXT.md a glossary, not a migration log.
- **Do not use for:** Automatically extracting services, deploying infrastructure or adding speculative features. FE handles client compatibility, not backend ownership. It is session-driven maintenance, not monitoring when no agent is running.

### update-matt-pocock-skills (project-owned)

- **Invocation:** Model-invoked when a request concerns upstream skill maintenance; directly invoke `$update-matt-pocock-skills` for an audit. Applying changes requires approval of the concrete set and immutable revision.
- **What it does:** Compares historical upstream, current local and latest upstream skill folders; recommends relevant new stable skills and applies approved upgrades with local-patch preservation.
- **When:** You want to refresh the existing collection or discover newly published skills relevant to this particular repo.
- **Dependencies / related:** Read access to GitHub plus local file/Git tools; optional trusted skill-installer for staging, writing-for-agents for edits and research for investigation. No connector or remote on the DecoUp repo is required.
- **Read/edit:** [`.agents/skills/update-matt-pocock-skills/SKILL.md`](../.agents/skills/update-matt-pocock-skills/SKILL.md); absolute path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/update-matt-pocock-skills/SKILL.md`. The adjacent `references/update-policy.md` specifies backup, conflict handling, validation and provenance.
- **May create/update:** Audit reports under docs/agents/skill-updates; approved upstream skill folders; per-skill revision records in skills-source.json; skill guide/counts and reviewed host-setup adaptations. Audit mode never changes installed skills.
- **Do not use for:** Bulk blind installs, automatic beta adoption, overwriting custom skills/local edits, silently resetting AGENTS.md/tracker settings or claiming offline results are current. No scheduled upstream monitoring is configured.

## DecoUp planning adapters

These are independently editable project-owned adaptations, not wrappers that invoke upstream user-only skills. Matt's originals remain installed unchanged. Planning configuration is in [planning.json](agents/planning.json); detailed setup is in [project-planning.md](agents/project-planning.md). No Trello cards exist yet.

### decoup-fe-to-spec

- **Invocation:** User-invoked (explicit only, matching the upstream orchestration policy).
- **What / when:** Resolve a Feature's Open Questions in dependency-aware rounds, with an explanation, choices and recommended answer for each, then synthesize or revise the bounded Feature under a lightweight Epic with stable User Story and Acceptance Criterion mappings; use after discovery, before ticket planning.
- **Dependencies / related:** Requires the configured decoup-specs checkout and its authoring/workflow/Trello docs. Uses the installed grilling style and domain-modeling discipline directly; related: research and decoup-fe-to-ticket. It does not auto-invoke the explicit-only grill-with-docs orchestration skill. Catalog refresh needs the spec repo's Node/npm dependencies.
- **Read/edit:** [`.agents/skills/decoup-fe-to-spec/SKILL.md`](../.agents/skills/decoup-fe-to-spec/SKILL.md); exact path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/decoup-fe-to-spec/SKILL.md`. Invocation metadata lives alongside it in agents/openai.yaml. Settings belong in docs/agents/planning.json, not in copied upstream files.
- **May create/update:** After all blocking questions are answered or explicitly deferred, canonical `../decoup-specs/epics/<ID>.md` when outcome grouping is requested, `../decoup-specs/specs/frontend/<ID>.md`, and generated reader catalog/raw sources. It may update settled glossary terms and justified ADRs; shared proposals still require explicitly authorized cross-scope work.
- **Do not use for:** Product implementation, treating recommendations as answers, invented approvals, duplicate local specs or rewriting another owner's accepted scope.

### decoup-fe-to-ticket

- **Invocation:** User-invoked (explicit only, matching the upstream orchestration policy).
- **What / when:** Break an approved Feature into small repo-owned tickets mapped to its Epic, revision, Stories, and Acceptance Criteria; stage drafts and later publish specifically approved Trello cards.
- **Dependencies / related:** Requires the configured decoup-specs checkout and its authoring/workflow/Trello docs. Related: decoup-fe-to-spec and implement. Actual publishing needs connected, verified Trello read/search/create/update capabilities; drafting does not. No upstream orchestration skill is automatically invoked.
- **Read/edit:** [`.agents/skills/decoup-fe-to-ticket/SKILL.md`](../.agents/skills/decoup-fe-to-ticket/SKILL.md); exact path: `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/decoup-fe-to-ticket/SKILL.md`. Invocation metadata lives alongside it in agents/openai.yaml. Settings belong in docs/agents/planning.json, not in copied upstream files.
- **May create/update:** `.scratch/trello/<local-ticket-id>/draft.md` and `sync.json`; later verified Trello cards with Epic/Feature/Story/Acceptance mappings. Verified `DE-` keys are stored separately and never guessed. Does not modify canonical requirements.
- **Do not use for:** Product implementation, creating boards, blind retrying card creation, automatic publishing on MCP connection, or treating localhost as a collaborator-accessible spec link.

## Editing and upgrading safely

Edit workflow settings in `docs/agents/`. Customize project-owned `decoup-*` skills at their linked SKILL.md paths; do not modify Matt's originals. To adapt another upstream skill, create a new namespaced folder and register its derivation in local-skills.json. Keep AGENTS.md canonical, maintain sibling reference links, and retain invocation policy when replacing a skill. Record local edits and their reason in skill-workflow.md.

The upstream installation is a pinned editable copy, not a plugin subscription or a skills.sh-managed install. Automatic `npx skills update` is not configured. Use `$update-matt-pocock-skills` to audit first, then approve the specific updates/additions. Its preservation policy protects local edits and tracks selective updates per skill. The upstream MIT license is retained in `.agents/MATT_POCOCK_LICENSE`; custom skills are recorded separately in local-skills.json.

Excluded: productivity-only grill-me, teach, wait-what, to-questionnaire; all misc and in-progress skills, especially setup-ts-deep-modules. The installed ask-matt router can mention those optional routes; they are not installed and are not required dependencies.

## References

- [Pinned Matt Pocock source and skill reference](https://github.com/mattpocock/skills/tree/3cca18b368ae95cdbdebbff572ccafa662551015).
- [Official Codex local skill discovery and invocation policy](https://learn.chatgpt.com/docs/build-skills).
- [Setup record and host caveats](agents/skill-workflow.md).
- [Scaffold validation evidence and limitations](SCAFFOLD_VALIDATION.md).

## FE design providers and adapter

See [FE design workflow](agents/frontend-design-skills.md) and [external provenance](agents/external-skills-source.json). Local means repository scope, not necessarily manual invocation. The three additions allow matching-task selection/direct invocation; no implicit invocation policy was disabled. User-only spec/ticket workflows stay manual.

Recommended flow: optional SkillUI extraction **or** Hallmark study → Impeccable shape as needed → decoup-fe-to-spec → exact-revision approval → decoup-fe-to-ticket → explicitly authorized implement/tdd with **one** visual lead → appropriate audit/critique → approved polish → code-review. Never run all design commands just because they are installed.

### decoup-fe-skillui

- **Invocation:** Model-invoked for matching tasks; also directly invokable with `$decoup-fe-skillui`. Execution remains scoped to the request.
- **Purpose:** Extract design-system evidence using SkillUI; project-owned adapter, not an upstream skill.
- **When:** When the user supplies a design-reference URL, repo or owned local directory.
- **Dependencies / related:** Pinned skillui@1.3.4 CLI, Node 18+, network when needed; CLI is not installed. Related: hallmark study (alternative), impeccable shape and decoup-fe-to-spec.
- **Read/edit path:** `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/decoup-fe-skillui/SKILL.md`.
- **Customization:** Edit this project-owned adapter directly; register changes in local-skills.json.
- **May create/update:** Temporary extraction output; reviewed docs/design/references/<source>.md; authorized visual decisions in DESIGN.md.
- **Do not use for:** Global installation, generated CLAUDE.md, default skill-generation mode, pixel cloning, automatic browser capture or product implementation.

### hallmark

- **Invocation:** Model-invoked for matching tasks; also directly invokable with `$hallmark`. Execution remains scoped to the request.
- **Purpose:** Study or create a distinctive visual structure; audit existing UI for visual anti-patterns.
- **When:** Study before design; new FE UI only on an implementation request; audit for a read-only punch list.
- **Dependencies / related:** Bundled references/ are included; no direct skill dependency. Related: prototype, impeccable (alternative lead), implement and code-review.
- **Read/edit path:** `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/hallmark/SKILL.md`.
- **Customization:** Read the installed original and adjacent references; create a differently named project-owned copy for custom behavior. Keep the pinned original untouched.
- **May create/update:** Optional design.md study handoff; approved UI changes or audit findings. Canonical specs stay central.
- **Do not use for:** Automatically replacing an existing visual system, paid-template cloning, backend/mobile work or treating its theme advice as authorization to redesign.

### impeccable

- **Invocation:** Model-invoked for matching tasks; also directly invokable with `$impeccable`. Execution remains scoped to the request.
- **Purpose:** Consolidated UX/design workflow with shape, audit, critique, polish and other subcommands.
- **When:** Plan UI before spec approval; review/refine an existing authorized FE surface.
- **Dependencies / related:** Bundled reference/ and scripts/ included. Launcher may acquire or reuse an engine: runtime activation is deferred. Related: hallmark (alternative lead), spec/ticket and code-review.
- **Read/edit path:** `/home/kali/Desktop/DecoUp/decoup-web/.agents/skills/impeccable/SKILL.md`.
- **Customization:** Read the installed original and adjacent references; create a differently named project-owned copy for custom behavior. Keep the pinned original untouched.
- **May create/update:** When requested: PRODUCT.md, DESIGN.md, surface briefs, design findings and approved UI refinements. No documents were invented by installing it.
- **Do not use for:** Automatically installing hooks/bridges, running all subcommands, hidden runtime downloads, replacing accepted product requirements or unauthorized browser testing.
