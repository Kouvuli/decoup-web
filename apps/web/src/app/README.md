# Web composition and routing

Reserved for Next.js App Router composition: layouts, routes and entry points added only with an approved feature. There is intentionally no layout, page, route handler, API endpoint or UI screen today. As a result, this skeleton is typecheckable but not a runnable/buildable Next.js app yet.

Future routes compose domain public entrypoints at `../modules/<domain>/index.ts`; they must not deep-import module internals. Keep business decisions in the backend. There is no BFF today; any later server-side session adapter requires an explicit design decision, not duplicated backend logic.
