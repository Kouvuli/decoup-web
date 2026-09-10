# Domain docs

Use a single documentation context: `CONTEXT.md` at the repository root and `docs/adr/`. An npm workspace is only a packaging convenience here, not a reason to split a small project's glossary. No `CONTEXT-MAP.md` is needed today.

Before exploring domain code, read `CONTEXT.md` and ADRs relevant to the area. Use canonical terminology in tickets, tests and code. Surface conflicts with an ADR rather than silently overriding it.

`CONTEXT.md` is a glossary only. Product requirements belong in canonical sibling `../decoup-specs/specs/`; technical structure belongs in `docs/ARCHITECTURE.md`; consequential trade-offs belong in numbered ADRs. The installed domain-modeling skill includes CONTEXT-FORMAT.md and ADR-FORMAT.md.

Create further ADRs only when a consequential decision actually lands. Introduce a context map and per-context glossaries later only if terminology genuinely diverges. Coordinate shared product term changes with the sibling repository; do not silently copy over its decisions.
