# DecoUp Frontend

Structure only for the web application and landing-page scope of a mobile-first decor marketplace and decor/PC-assembly service-booking experience. Mobile planning now lives in sibling decoup-mb; its framework is not selected. The Spring Boot backend lives in the separate sibling repository.

## Layout

```text
.agents/skills/          28 skills: 21 Matt + 2 design providers + 5 project-owned
.scratch/               discovery / unpublished Trello drafts
apps/web/               Next.js + TypeScript skeleton, no screens
apps/mobile/            README reservation, not an active workspace
packages/               contracts / api-client / web ui (empty exports)
docs/                   architecture, ADR, agent configuration and guide
AGENTS.md               canonical agent instructions
CONTEXT.md              product glossary
```

## Check the scaffold

Use Node 22 LTS (or another compatible LTS) and npm 10+. From this directory:

```sh
npm ci
npm run check
```

Checks validate types and module/package import rules. No root layout/page exists, so there is deliberately no dev/build command or runnable UI yet. No API calls, fake endpoints, credentials, BFF or business implementation.

## Agent skills

Five project-owned skills extend the upstream set. The planning adapters below join the original two: `$mono-to-microservices` maintains migration guidance during implementation; `$update-matt-pocock-skills` audits upstream changes and useful new skills before approved updates. Both are documented in the guide below; neither runs on a background schedule.

Read [the complete Agent Skills Guide](docs/AGENT_SKILLS_GUIDE.md) for every installed skill, invocation type, dependencies, exact read/edit paths and recommended workflow. **To change settings:** edit [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md), [triage-labels.md](docs/agents/triage-labels.md) or [domain.md](docs/agents/domain.md). AGENTS.md is canonical.

Setup preserves local discovery and uses central Markdown specs; Trello is intended but disconnected. Open a task in this repo and start with `$ask-matt` or `$grill-with-docs`. No remote or commits were created. See [architecture](docs/ARCHITECTURE.md) before adding code.

### Project-owned planning

Use `$decoup-fe-to-spec` for canonical specs in `../decoup-specs/specs/frontend/`, then `$decoup-fe-to-ticket` for reviewed drafts and later Trello publication. Configure the sibling path and future verified board/list IDs in [planning.json](docs/agents/planning.json). See [the planning setup](docs/agents/project-planning.md) and [complete skill guide](docs/AGENT_SKILLS_GUIDE.md). Originals stay untouched; customize only namespaced project-owned skills.

### FE design additions

`$decoup-fe-skillui` extracts reference evidence (CLI execution deferred), `$hallmark` studies/designs/audits visual structure, and `$impeccable` provides shape/audit/polish and related commands through one skill. See [FE design workflow and caveats](docs/agents/frontend-design-skills.md). Installed in FE only; protected provider snapshots live in external-skills-source.json. The shared spec reader's Skills view diagrams the optional FE design handoffs.

## Contributing

See [Git hooks, commit conventions, CI and the branch workflow](CONTRIBUTING.md).
