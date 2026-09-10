# Local planning artifacts

This versionable folder stores discovery maps/decision issues and unpublished ticket drafts, not canonical specifications. Specs live in the configured sibling decoup-specs repo. Read [tracker conventions](../docs/agents/issue-tracker.md).

Trello drafts appear in `trello/<local-ticket-id>/draft.md` with `sync.json` only when the repo-specific to-ticket workflow is requested. Each draft maps Epic, Feature revision, Story and Acceptance IDs; a verified `DE-` key is stored separately. Creating this folder or connecting MCP never publishes cards. No product work is queued. Keep secrets/customer data out.
