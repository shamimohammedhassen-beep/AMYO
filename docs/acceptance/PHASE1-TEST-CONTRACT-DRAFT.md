# Phase 1 — proposed security acceptance contract

**Draft only.** Tests become executable specifications only after the underlying corporate authority and data model are approved. All fixtures must use fictitious identities/data.

| Target | Required negative/positive evidence |
|---|---|
| AT01 | Same human holding several capacities cannot approve an action that requires a different human. |
| AT02 | Authorized company reviewers can inspect granted records and evidence; unauthorized edits and exports are rejected at the backend. |
| AT04 | A material version change to a previously approved record invalidates approval before any execution. |
| AT16 | Public visitors, unassociated accounts and other principals cannot fetch private ERP rows, attachments or document URLs. |
| Recovery | MFA recovery does not create an unreviewed superuser or bypass independent approvals. |
| Revocation | Removed users and expired grants cannot continue accessing protected data through cached or stale tokens beyond the documented session policy. |
| Security boundaries | Anonymous grants, table RLS, view behavior, file access, object URL expiration, server-side secrets and HTTP API authorization are independently tested. |
| Audit | Security-sensitive operations record real actors and policy versions; test log mutation/privileged exports with appropriate evidence. |

## Stop conditions

- Real owner/partner identity or governing authority not validated.
- No isolated synthetic environment or no proper RLS/permission test suite.
- User token, application role or system environment can bypass business approval invariants.
- A public Pages URL can expose private ERP information or server credentials.
- No recovery and backup evidence.

Technical passing tests are not legal, accountant, partner or owner acceptance. The owner must approve the next implementation phase explicitly.
