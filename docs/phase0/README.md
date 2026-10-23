# Phase 0 — readiness (PUBLIC, NON-CONFIDENTIAL SUMMARY)

Status: **DRAFT / OPEN — pending owner and required domain reviews** (2026-10-24).

The current repository contains scaffolded frontends and no operational ERP, public business site, financial schema, authenticated identity service, or live data integrations.

## Required acceptance before Phase 1 implementation

1. Approve legal-entity authority, person-aware roles, conflict/independent-approval rules, delegated authority and partner access (in a **restricted evidence location**, not this public repository).
2. Engage qualified accounting validation for chart of accounts, fiscal policy, opening balances and source-of-truth/period controls before financial posting is designed.
3. Adopt domain/API/data ownership with explicit deny-by-default authorization, RLS testing, object-storage protection and migration/recovery procedures.
4. Decide real-user authentication, MFA, emergency access, leaver offboarding and administrative recovery; require independent tests before ERP release.
5. Review source and data sensitivity: the repository is publicly accessible; never upload internal approvals, personal details, financial records, confidential contracts or evidence here.
6. Prepare Phase 1 detailed interface/data/test plan and record owner acceptance separately.

## Recorded deployment status

- GitHub AMYO source repository, CI: scaffold build-and-test baseline only.
- Cloudflare Pages: two Git-connected projects; automatic deployments disabled.
- Supabase: provisioned project, **no AMYO application migrations applied** at 2026-10-24 inspection.
- No bank, compliance authority, live customer, ERP or dispatch sync integration is configured.

## Governing source status

An ERP specification dated 2026-10-17 defines staged acceptance tests AT01–AT18, separates confirmed statements from proposed defaults and requires Phase 0 review prior to Phase 1 coding. The detailed source and private decision package are kept outside this public repository.

**Gate: STOP pending documented owner/qualified reviewer approval.**
