# Scaffold validation — 2026-09-06

## Verified

- A clean `npm ci --ignore-scripts` succeeds from the committed-format lockfile (no Git commit was made).
- `npm run check` passes: TypeScript and resolved import boundaries (13 empty source modules, zero production import edges).
- `npm audit` reports zero known vulnerabilities at validation time. This is not a security certification.
- Twelve isolated temporary import-graph fixtures pass: legal shell/public/own-internal usage succeeds; deep imports, nested-index bypass, type-only cross-domain imports, domain→shell and package→app imports, package deep imports, reverse contracts dependencies, framework/Node imports in portable packages, unresolved imports and cycles are rejected.
- Validation host: Node 20.19.4, npm 10.9.8. Node 22 LTS is the recommended future development baseline.
- All 21 skill directories match the pinned upstream source byte-for-byte, including supporting files and Codex metadata; the upstream license is preserved.
- Guide skill paths, local documentation links, single canonical AGENTS.md block, invocation policies and local-only Git state were checked.
- No remotes or commits exist. Skills and local tracker artifacts are not ignored by Git.

## Limits and caveats

No product behavior exists, so no feature, browser, provider, schema or end-to-end validation is claimed. Temporary negative fixtures were outside the delivered repositories and cleaned up automatically.

The generic bundled skill-creator validator rejects upstream's `disable-model-invocation` frontmatter key because that helper accepts a narrower schema. This is a helper limitation, not a changed skill: original SKILL.md files and upstream `agents/openai.yaml` invocation policies were preserved and separately audited. Repo-local discovery requires opening a task with this repository as its working directory; actual next-task skill selection was not exercised here.

Generated node_modules/ is ignored. No initial commit was created, so the upstream code-review skill's fixed-commit comparison cannot yet be used; scaffold checks and direct artifact audits were used instead.
