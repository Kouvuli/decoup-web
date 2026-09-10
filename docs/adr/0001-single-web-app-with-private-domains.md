# One web application with private domain modules

Use one Next.js application with a small npm workspace for FE-only shared packages rather than microfrontends or a combined FE/BE monorepo. This keeps web delivery simple while leaving room for a later mobile consumer; the trade-off is maintaining explicit import rules and client/server contract discipline. Backend service extraction does not require splitting this frontend.

The initial ownership map is provisional and creates no screens or domain behavior. Revisit boundaries when actual user journeys show friction, not just because the backend might later use microservices.
