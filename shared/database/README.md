# Shared database (reserved)

Supabase project: `ttaijzrvlaernjpxrnxx` (Frankfurt, PostgreSQL 17). No schema migrations are approved or applied yet.

Proposed workflow: version-controlled SQL migrations, review, isolated tests, security advisors and owner-approved release. All exposed tables must have appropriate RLS and privileges; never create generic permissive policies.

Place approved forward migrations under `shared/database/migrations` and accompanying fixtures/tests in a later authorized phase. Do not infer that a directory creates database state.
