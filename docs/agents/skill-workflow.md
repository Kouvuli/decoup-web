# Host and scope adaptations

## Setup completed

The prompt-driven `setup-matt-pocock-skills` procedure was applied on 2026-09-06 after inspecting the new repo: no remote, no prior docs/configuration, triage installed. The user's scaffold request supplied authority for repo-local installation and setup; local Markdown, canonical AGENTS.md and the minimal single-context layout implement that request. Default triage labels were chosen as a reversible default, not represented as a separate answered interview. No setup executable exists upstream.

Outputs: root AGENTS.md with one Agent skills block; issue-tracker.md, triage-labels.md and domain.md in this directory. Edit these files to change settings.

## Upstream and Codex

The 21 upstream skill folders, including SKILL.md, references, templates and Codex metadata, are copied unchanged from the pinned source recorded in [skills-source.json](skills-source.json). Upstream already supplies `agents/openai.yaml` with explicit-only policy for user-invoked skills. Supporting skills retain automatic discovery. Five project-owned skills are recorded separately in [local-skills.json](local-skills.json), and two third-party design skills in [external-skills-source.json](external-skills-source.json), for a total of 28.

Upstream slash notation such as `/to-spec` describes a skill, not a shell command. In Codex use `$to-spec` or select the skill. If there is no generic Skill tool, load the local SKILL.md and relevant supporting references. If a host does not discover repo-local skills, explicitly reference the absolute file path; do not claim the skill was installed globally.

User-only orchestration skills recommend next entry points, not automatically launch each other. Supporting model-invoked skills may be used when the authorized task fits. Start a task in this repository to discover its skills; this project-mirror task does not automatically adopt a sibling directory's skills.

## Repository-specific interpretation

- A vertical ticket covers all necessary layers **within this repository's ownership**. Link a companion FE/BE ticket for the other repo and agree the external contract; a skill's schema/API/UI example is not authorization to cross repo scope.
- Prototype UI or client-state questions in a separately authorized temporary workspace; there are no application routes yet. Do not add screens just to run a skill.
- Research notes go in `docs/research/`. Handoff documents and architecture-review HTML go in OS temp as upstream requires; link durable decisions from the local tracker, and do not rely on temp artifacts surviving cleanup.
- Upstream prototype/wayfinder ask for branches and implement/wizard may ask for commits; AGENTS.md requires explicit authorization first. No branch/commit/push is implied by choosing a workflow.
- The code-review skill's fixed-commit workflow cannot run on an unborn repository. Until the first authorized commit, review newly created files against the request directly and disclose the missing baseline. Later select a real fixed point; include uncommitted work explicitly when that is the intended scope.
- Research and code-review request subagents. Use available delegation, not an invented tool; if unavailable, disclose sequential execution and keep Standards and Spec findings separate.
- Upstream wizard/template examples mention providers and GitHub secrets. They are examples, not configured services. Inspect generated scripts; never execute them unattended or store real secrets in tracked files.
- Upstream setup prefers CLAUDE.md if both exist. This repository's canonical-file rule overrides that: edit AGENTS.md; no CLAUDE.md copy was created.

## Project-owned extensions

Use `mono-to-microservices` alongside implementation to keep its repo-specific `references/project-state.md` current. Update the durable skill/checklist only when a real decision or lesson changes it; link the evidence. AGENTS.md provides the task-start/closeout hook, including work performed through upstream implement/tdd/review. No upstream SKILL.md was modified to add this behavior.

Use `update-matt-pocock-skills` for requested upstream audits, relevant new-skill discovery and approved selective application. Its preservation policy handles local patches, dependencies and mixed per-skill revisions. The source manifest remains upstream-only; project-owned skills and their state must not be replaced by upstream updates. Both custom skills allow model invocation for matching requests; updater application still needs approval of the specific changes.

These are prompt-driven workflows, not scripts or scheduled automations. They operate during agent sessions in this repository. After manual architectural changes, request `$mono-to-microservices refresh`; when you want upstream discovery, request `$update-matt-pocock-skills`.

## Optional router mentions, not missing dependencies

`ask-matt` also describes grill-me, teach, to-questionnaire and wait-what. They are optional routes, not supporting calls required by this installation. They are intentionally omitted. Use grill-with-docs for repo-backed interviews. Do not claim uninstalled routes are available.

No misc or in-progress skills are installed. In particular, setup-ts-deep-modules is omitted (beta/in-progress); the repository has its own small, explicit boundary check instead.

## Central planning update — 2026-09-06

The original local setup above is historical. Defaults now use `decoup-fe-to-spec` for canonical specs in the configured sibling checkout and `decoup-fe-to-ticket` for local drafts plus later Trello publication. See planning.json and issue-tracker.md. Discovery maps remain local. No upstream files were changed. Both new adapters preserve the explicit-only policy of the upstream workflows they adapt; the original migration/updater pair remain model-invoked. Four local entries are independently versioned in local-skills.json. Do not reset these settings during upstream setup/update.

## FE design installation — 2026-09-06

Added unchanged pinned Hallmark and Impeccable skill folders with their supporting resources, plus the project-owned decoup-fe-skillui adapter. See frontend-design-skills.md for source, routing, runtime and authority rules. No product dependency, global install, hook, engine execution, extraction or business UI was added. Matt's 21 original folders and all BE/mobile skills remain unchanged. No extra Impeccable command shortcuts were installed.

## Delivery hierarchy update — 2026-09-08

The project-owned spec/ticket adapters now use Epic → Feature → User Story → Acceptance Criterion → repo-owned ticket. This prevents oversized Feature specs and maps each Trello card to canonical IDs without duplicating requirements. Stable local ticket IDs remain the pre-publication reconciliation key; verified human-facing `DE-` keys are stored separately and never guessed. Matt's upstream skills remain unchanged.

## FE spec question rounds — 2026-09-09

The project-owned `decoup-fe-to-spec` adapter now resolves remaining Open Questions in dependency-aware rounds. Each question explains why it matters, presents trade-offs and recommends an answer; the user must confirm or override it. Answers are collected before one consolidated revision per affected canonical document, followed by separate exact-revision approval. The adapter uses the supporting `grilling` and `domain-modeling` disciplines directly and does not auto-invoke or modify the explicit-only upstream `grill-with-docs` skill.
