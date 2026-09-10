# Frontend architecture

## Today

One Next.js + TypeScript application in a small npm workspace for the web side of a mobile-first product. Web app and landing-page requirements are distinguished by spec surface, without adding another runnable app yet. No microfrontends, BFF, backend business logic or mobile runtime. There are no UI screens; `src/app/` is reserved for App Router composition. The app is deliberately not runnable until an approved request supplies a root layout and page.

```text
apps/web/src/app → apps/web/src/modules/<domain>/index.ts → packages/* public exports
                                        ↓
                                   internal/
```

Domain modules do not import each other. The app shell composes user journeys across marketplace orders and service bookings. Shared packages cannot reach upward into applications. The table in `apps/web/src/modules/README.md` records the ten domains.

## Enforcement

`npm run check` checks TypeScript and the resolved import graph, including type-only imports. `.dependency-cruiser.cjs` rejects cycles, unresolved imports, cross-domain dependencies, external deep imports, reverse package→app dependencies, and framework/Node imports in portable packages. It follows resolved destinations, so relative paths are not an escape hatch. Keep public exports intentional; tooling cannot decide whether an exported type leaks business semantics.

When adding a domain/package, use the same public-entrypoint structure; the check discovers new directories. A source-level import check is not a runtime security boundary. Do not expose backend secrets through client packages or NEXT_PUBLIC variables.

## Contracts and separate mobile repository

The backend owns business rules and eventually its external API contract. FE contracts are consumer-facing transport types derived/reviewed from that agreement, not Java entities or duplicated rules. Nothing is generated until a real contract exists.

`apps/mobile/` is a historical pointer excluded from workspaces. Mobile lives in sibling decoup-mb, initialized with React Native + Expo + TypeScript from the original research recommendation. It contains a bootstrap screen and domain placeholders, not product behavior. Prefer sharing platform-neutral contracts and client helpers through reviewed versioned packages rather than importing sibling source or forcing Next.js pages/DOM UI into native screens. Add package exports only for intended entrypoints. Canonical shared/owner specs live in sibling decoup-specs.

## Backend extraction later

Backend module extraction should normally change a transport adapter or backend routing contract, not dictate a matching microfrontend split. Preserve a stable client contract, use additive/versioned changes, and coordinate compatibility tests with backend tickets. Add a BFF only if concrete web/mobile aggregation or session needs justify it; no network adapter or gateway is prebuilt here.

Microservice extraction is not automatic: deployment, consistency, observability and failure behavior remain backend concerns to plan explicitly. FE remains one deployable unless an independent delivery need emerges.

## Tooling baseline

Pinned Next.js 16.3.4, React 19.2.8 and TypeScript 5.9.3; npm lockfile supplies reproducibility. TypeScript 5.9 and dependency-cruiser 17.4.3 are deliberately conservative, compatible choices, not claims to be the newest release. Use Node 22 LTS or newer compatible LTS for future work; checks also support this machine's Node 20.19.4. No runtime tests or browser tests exist because no product behavior exists.

Primary references: [Next.js structure](https://nextjs.org/docs/app/getting-started/project-structure), [Next.js setup requirements](https://nextjs.org/docs/app/getting-started/installation), [dependency-cruiser rules](https://github.com/sverweij/dependency-cruiser/blob/main/doc/rules-reference.md).
