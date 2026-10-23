# ADR-0001 — AMYO cloud platform and data boundaries

**Status:** Proposed design, hosting resources provisioned; **not a complete approved system architecture**  
**Date:** 2026-10-24  
**Decision class:** Infrastructure and security boundaries  
**Approval:** Hosting choices authorized by project owner; identity/accounting/domain contracts remain to be approved.

## Context

AMYO intends a public site, a restricted operational ERP and later mobile clients that share one authoritative enterprise data foundation. The project currently has only preliminary static shells; no authenticated application or business APIs exist.

## Hosting allocation already provisioned

| Workload | Provisioned resource | Release state |
|---|---|---|
| Public informational frontend | Cloudflare Pages project `amyo` | Git linked, deployments off |
| Restricted ERP frontend | Cloudflare Pages project `amyo-erp` | Git linked, deployments off |
| Authoritative relational database | Supabase PostgreSQL project `ttaijzrvlaernjpxrnxx` | Healthy, no AMYO migrations |
| Source and reproducibility | GitHub `shamimohammedhassen-beep/AMYO` | npm workspaces, CI scaffold |

## Proposed logical boundaries

- `apps/website`: content + prospect submission only after security/anti-abuse validation; never direct financial posting, private document access or authoritative transaction approval.
- `apps/erp`: privileged *UI*, never authority by itself; all permissions validated at the secured API/database layers.
- `shared/backend`: future modular business services and atomic transactions; cloud runtime to be chosen from appropriate managed functions/edge deployment before implementation.
- `shared/database`: ERD, source-of-truth catalog, owner-review artefacts and database tests; operational Supabase CLI migrations will use `supabase/migrations/` after explicit schema authorization.
- Future mobile/offline clients have a separate trust boundary. Device-entered signoff does not substitute for separately authenticated approval; any import/sync requires idempotent reconciliation.

## Security invariants

1. **Deny by default** for private company data. Separate user membership from role names; effective permissions are server-enforced.
2. Explicit PostgreSQL grants + RLS on every API-exposed table, independently tested; restricted documents require separate storage access tests.
3. Admin secret/service-role credentials are never distributed to browser clients, included in git or emitted in logs.
4. All accounting posting, approval, financial state transitions and external submission status changes require central atomic validation, audit and retry safety.
5. Cloudflare access policies (if adopted) add perimeter defense only; they do not replace application authorization.
6. No live operations without tested backups, restoration, accounting signoff and permission/exception tests.

## Tradeoffs and deferred choices

- Free managed hosting reduces initial server cost but does not guarantee business-grade backup, service continuity or fixed pricing; no live financial records without an approved operations/recovery plan.
- A modular monolith minimizes distributed transaction and operational complexity compared with microservices.
- Cloudflare Pages serves frontends; it is not the ledger. Supabase is not a replacement for reviewed business approval logic.
- Authentication framework, runtime for secure services, API versioning, staging isolation, retention, company formal authorities, and recovery targets remain undecided.

## Record of alternatives

- Hosting both apps as separate Pages projects: selected as a reversible, low-cost frontend arrangement.
- Hosting ERP entirely in a serverless Pages UI with direct database writes: **rejected for controlled financial workflows**.
- Introducing independent ERP and mobile ledgers: **rejected**.
- Migrating all offline dispatch data automatically: **deferred** until data lineage and sync semantics are tested.

**STOP:** This ADR does not approve Phase 1 implementation, migrations, public ERP exposure or production financial transactions.

### Technical references

- https://developers.cloudflare.com/pages/configuration/monorepos/
- https://developers.cloudflare.com/pages/configuration/build-watch-paths/
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/deployment
