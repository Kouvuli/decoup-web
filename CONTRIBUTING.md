# Contributing

## Local setup

Use Node 24 (see `.nvmrc`) and npm; run `npm ci`.
Enable the versioned native Git hooks once in every clone:

```sh
git config --local core.hooksPath .githooks
sh scripts/test-hooks.sh
```

Use a POSIX shell (Git Bash on Windows). No hook framework is required.
The pre-commit hook checks staged whitespace/conflict markers and runs
`npm run check` against the working tree. Review `git diff --cached` before committing;
partially staged changes are validated with your unstaged work present. CI checks
the clean checkout. Hooks never auto-stage or rewrite files.

## Branch workflow

No `git-flow` extension is used; these are ordinary Git branches and pull requests.

| Branch | Start from | Merge into | Purpose |
| --- | --- | --- | --- |
| `main` | — | — | Production-ready releases |
| `develop` | `main` | `main` through `release/*` | Next release integration |
| `feature/DE-123-short-name` | `develop` | `develop` | Feature, fix, chore, or documentation ticket |
| `release/DE-123-v1.2.0` | `develop` | `main` | Release stabilization only |
| `hotfix/DE-123-short-name` | `main` | `main` | Urgent production fix |
| `support/1.x` | a release tag | — | Optional maintained release line |

1. Open one pull request per ticket. Link the issue/spec and include validation
   evidence. Use separate linked PRs for cross-repo work.
2. Squash short-lived `feature/*`, `release/*`, and `hotfix/*` pull requests,
   then delete them.
3. After a release or hotfix reaches `main`, merge `main` back into `develop`
   with a merge commit. Do not squash this synchronization PR; preserving the
   ancestry prevents already-released changes from reappearing in later PRs.
4. Create `support/<major>.x` only when an older major version actually needs
   maintenance. Branch it from that version's release tag and port fixes with
   separate ticketed pull requests.

Commit subjects and PR titles use Conventional Commits and a verified ticket ID:
`type(scope): DE-123 description`. Scope is optional; `!` marks a breaking change.
Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
`build`, `ci`, `chore`, `revert`. Examples:

```text
feat(booking): DE-123 add availability lookup
fix(api)!: DE-124 reject the old request shape
chore(release): DE-125 release 1.2.0
```

The commit-msg hook enforces local subjects; CI enforces PR titles because the
PR title should become the squash commit subject. Local WIP history need not
be preserved on `main`.

## GitHub repository settings

- Default branch: `main`; enable squash and merge commits, with the PR title as
  both default commit titles. Automatically delete merged branches. Use merge
  commits only for `main` → `develop` synchronization.
- Protect `main`, `develop`, `release/*`, and `support/*` with a ruleset requiring
  a pull request, resolved conversations, and the `check` status from this CI
  workflow after its first run. Block force pushes and deletion. Require branches
  to be current before merging.
- Require one approval when another maintainer is available; avoid an impossible
  self-approval requirement for a solo repository.
- Enable Dependabot alerts and available secret scanning/push protection.
  The checked-in Dependabot config updates pinned GitHub Actions weekly.

These hosted settings are not activated by files in this checkout. Ruleset
availability depends on repository visibility and the GitHub plan.

CI runs on PRs and pushes to protected long-lived branches with read-only
repository permission and no deployment credentials. Add deployment automation
when a deployment target and release policy exist. Never commit real `.env`
files, credentials, or scratch drafts. Dependency lockfiles and the Maven wrapper
belong in Git.

Vendored Hallmark/Impeccable snapshots retain upstream whitespace through
`.gitattributes`; conflict marker checks still apply.

References: [GitHub branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) and [squash merge settings](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests).
