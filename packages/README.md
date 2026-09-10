# Shared package conventions

- `@decoup/contracts`: reserved for transport-facing types aligned with a future backend-owned API contract, never ORM entities or invented payloads. Platform-neutral.
- `@decoup/api-client`: reserved for a portable transport adapter consuming contracts. No fake API, URL, credentials or request code exists. Platform-neutral.
- `@decoup/ui`: reserved for domain-neutral **web** presentation, not a promise of native-compatible components.
- Source entrypoint for each package: `src/index.ts`; package exports expose only `.`. Consume `@decoup/<name>`, never deep source paths.
- Dependencies flow app → modules → packages; packages never import apps. API client may depend on contracts. Contracts depend on no sibling package; UI does not depend on API client/contracts.
- Portable packages do not import React, Next.js, React Native or Node built-ins. Use platform adapters later only when a real variation exists. DOM-global usage still requires code review; import checks are not a complete platform-compatibility proof.
- Workspace packages are private source packages consumed by Next.js transpilation, not published libraries. Add independently versioned builds only when there is an actual consumer outside this workspace.
- Do not add a global store, `common`, `utils` or shared business-domain package to bypass ownership. Promote reuse only after a real second consumer.
