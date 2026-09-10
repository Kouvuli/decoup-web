# Living migration reference — DecoUp frontend

Last verified scope: initial scaffold inspected on 2026-09-06. No feature implementation or service extraction is present. This is a bounded evidence index, not the product specification or a second architecture document.

## Standing decisions

- [Architecture](../../../../docs/ARCHITECTURE.md) and [ADR-0001](../../../../docs/adr/0001-single-web-app-with-private-domains.md) are authoritative for architectural decisions.
- One Next.js application; sibling decoup-mb has a React Native + Expo + TypeScript bootstrap, without product behavior. Backend extraction does not require microfrontends.
- The counterpart repo is `../decoup-be` relative to this repository root; coordinate via linked tickets. Its current state must be inspected separately before making cross-repo claims.

## Observed boundary inventory

| Area | Observed facts / evidence | Extraction or compatibility status |
| --- | --- | --- |
| Domain ownership | Ten placeholders: identity, marketplace, order, booking, payment, shipping, chat, notification, media, search. [Domain inventory](../../../../apps/web/src/modules/README.md). | Scaffold only; no extraction candidate selected. |
| Web composition | App Router directory reserved; module index.ts files export nothing. | No actual UI or user-journey compatibility evidence. |
| Shared packages | [Package conventions](../../../../packages/README.md): contracts, api-client, web-only ui; empty exports. | No endpoint or transport contract exists. |
| Structural guard | [.dependency-cruiser.cjs](../../../../.dependency-cruiser.cjs); `npm run check`. | Prior scaffold validation passed; this is not a runtime/API compatibility test. |
| Mobile / BFF | Separate Expo mobile scaffold; no BFF. | Mobile-first product direction is agreed; concrete client/API contracts remain unspecified. |

## Open gates

No measured extraction motivation, rollout design, operational owner, failure-recovery evidence or accepted migration plan exists. Stay monolithic. These absences are expected at scaffold stage, not tickets to build unnecessary infrastructure now.

As features land, expand only affected rows to record actual owners, contracts, dependencies, client assumptions and compatibility risks, with source/ticket/ADR links and a per-entry verification date. Record remaining uncertainty rather than inferring behavior from folder names.

## Maintenance log

- 2026-09-07: Verified repository renames to decoup-web, decoup-be and decoup-mb; mobile bootstrap and engineering skills added. Skill commands and canonical spec scope identifiers are unchanged. No business contract or extraction decision changed.

- 2026-09-06: Added independent mobile planning and canonical sibling decoup-specs repository. Planning uses repo-specific spec/ticket adapters; Trello remains disabled. Product module boundaries and runtime contracts are unchanged. See docs/agents/planning.json relative to the code repo root.

- 2026-09-06: Created the custom skill and this initial state from the inspected scaffold. No product code changed. Future implementation sessions maintain this reference; enduring checklist changes require a recorded reason.
