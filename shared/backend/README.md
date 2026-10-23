# Shared backend (reserved)

Business APIs, integrations and transaction workflows will be placed here **after** the approved AMYO business-process and security design. There is no live backend in this scaffold.

Boundaries:
- Do not access operational PostgreSQL with private credentials from browser code.
- Authorize every action on the server; use transactional business rules and audit events for financial actions.
- Public website inquiries must be validated and quarantined from accounting postings.
- Use independently verified migration, rollback and reconciliation procedures.
- Prefer one modular backend, not multiple independently posting ledgers.

This directory is a documented placeholder, not an implemented endpoint.
