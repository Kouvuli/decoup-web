# Frontend domain boundaries

Each folder is a client-side domain area, not a backend service or microfrontend. `index.ts` is its sole public entry point; `internal/` owns future implementation. All exports are empty today.

| Module | Scope |
| --- | --- |
| identity | Identity and account-facing concerns; authentication policy remains to be decided. |
| marketplace | Offers for new/used decor items, with listing terminology. |
| order | Purchases of marketplace items, distinct from service bookings. |
| booking | Service offerings and bookings for decor work and PC assembly. |
| payment | Payment-facing concerns; provider and settlement/refund rules remain undecided. |
| shipping | Shipment-facing concerns and future shipping-provider integration. |
| chat | Conversations; transport and retention policy remain undecided. |
| notification | User notifications; channels and delivery rules remain undecided. |
| media | Media assets; storage provider and processing rules remain undecided. |
| search | Search capability; begin with the simplest justified implementation, not a separate engine. |

No domain imports another domain. The app shell composes them via public exports. Modules may import appropriate shared package entrypoints. A required future cross-domain dependency needs a documented decision and a narrow check update, not a deep import or a shared catch-all store.
