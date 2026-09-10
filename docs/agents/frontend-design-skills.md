# FE design skills

These additions are FE-only. They support web app and landing-page work; installation does not authorize building a screen. Backend and mobile skill installations are unchanged.

## Choose the job, not three competing design directors

1. Optional reference study: use `$decoup-fe-skillui` for extracted token/code evidence, or `$hallmark study <source>` for qualitative structure and visual direction. Sources must be explicitly selected and appropriate to reuse; study is not a pixel-cloning request.
2. Use `$impeccable shape <surface>` to discuss UX and design decisions when useful. Reuse existing CONTEXT.md, ADRs and canonical spec facts. Do not invent product truth to populate PRODUCT.md.
3. Record agreed requirements/design in `$decoup-fe-to-spec`, approve the exact revision, then `$decoup-fe-to-ticket`.
4. For an explicitly requested implementation ticket, use implement/tdd for behavior and choose ONE visual lead: Hallmark for a distinct new visual structure, or Impeccable for a coordinated UX/design-system workflow. Neither overrides an approved brief, established design, accessibility or repo boundaries.
5. After code exists, use `hallmark audit` for visual anti-pattern findings or `impeccable audit/critique` for the relevant technical/UX review. Apply only agreed fixes; `impeccable polish` is a refinement request, not an automatic redesign. Finish with code-review and acceptance evidence.

These are suggested handoffs, not a chain of automatic commands. The design skills allow matching-task selection/direct invocation according to their installed metadata; the manual spec/ticket workflows remain manual. No design skill runs in the background.

## Ownership and updating

- Matt's source inventory stays in skills-source.json; his files are unchanged.
- Hallmark and Impeccable are unchanged pinned third-party skill folders, recorded in external-skills-source.json. Read SKILL.md and adjacent references in each folder. Customize by making a separately named project-owned adaptation, not editing these originals.
- decoup-fe-skillui is project-owned and registered in local-skills.json. Edit its SKILL.md directly.
- The Matt updater must preserve these three folders, external-skills-source.json and their setup choices. Updating Hallmark/Impeccable or the SkillUI CLI is a separate requested review, not part of updating Matt's repository.

## Runtime and side effects

SkillUI has no upstream SKILL.md at the inspected revision. The adapter is installed, not the CLI. The reviewed CLI version is 1.3.4. Its default generated-skill branch installs globally into ~/.claude/skills, so the adapter always uses a temporary output directory with --format design-md --no-skill. No extraction, CLI install or browser download was run during setup.

Impeccable is now one consolidated skill, not 23 separately installed skills. Its subcommands and supporting references are included. The bundled launcher may download an engine binary or reuse a cached/PATH binary on first use; inspect/approve runtime acquisition and verify the actual version before execution. Pinning the skill commit alone does not pin whichever cached executable it may find. No launcher, native hooks, browser extension, pin shortcut or live bridge was activated here. Request those capabilities separately if needed. Do not run a broad installer that edits other harnesses or global locations.

Hallmark and Impeccable can be read without invoking an external API. Their optional asset/browser/runtime workflows still need available tools and appropriate authorization; never claim unavailable checks passed. Honor the active host's browser-testing rules.

## Document authority

AGENTS.md remains the canonical agent instruction file. Canonical feature requirements and HLD/LLD/data modelling stay in decoup-specs. PRODUCT.md may summarize agreed product context and DESIGN.md may document agreed visual conventions, but neither silently replaces accepted specs/ADRs. Source studies are evidence, not project policy. No PRODUCT.md, DESIGN.md or mock UI was manufactured during this installation.

## Installation verification

The three required skill identities/descriptions and supporting resource copies were validated. Hallmark and Impeccable compare byte-for-byte with their recorded upstream revisions; Matt's existing 21 skill folders are unchanged. The generic bundled skill validator accepts Impeccable and the SkillUI adapter but flags Hallmark's upstream top-level `version` metadata key. That key is retained to preserve the upstream original; required name/description YAML and catalog ingestion validate independently. This is not a claim that the generic validator passed for Hallmark. Impeccable's launcher executable permission is restored to match its source Git mode, without running it.

### Pinned source links

- [SkillUI source](https://github.com/amaancoderx/npxskillui/tree/bc913a8d3503d6b2a683e4a3ac04ffe7304ac510)
- [Hallmark source](https://github.com/Nutlope/hallmark/tree/13ac0ec7e148655948100b6396439e481361d690/skills/hallmark)
- [Impeccable Codex skill](https://github.com/pbakaus/impeccable/tree/831cabee8b4bc1a2b66e5ae22003e9a19b57d464/.agents/skills/impeccable)
