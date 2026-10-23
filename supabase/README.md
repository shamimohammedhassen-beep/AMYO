# Supabase source boundary

This directory reserves the **standard Supabase CLI project layout** for future approved migrations, function code and database tests.

- Project `ttaijzrvlaernjpxrnxx` currently exists but AMYO application migrations were not found on 2026-10-24.
- Empty `migrations` folder is **not** a schema or a connected Git deployment.
- Official Supabase Git integration/CLI discovers `supabase/migrations`, not `shared/database/migrations`.
- DO NOT add database-changing SQL until domain/permission/accounting policies and sandbox testing are authorized.
- Migrations must include reviewed grants + RLS for exposed tables; test deny cases as well as permitted cases.
- Secrets live in the provider secret manager, not here. Avoid attaching production credentials to development runners.
- Production schema release requires an explicit environment protection and rollback/restore procedure.

Resources: https://supabase.com/docs/guides/deployment ; https://supabase.com/docs/guides/database/postgres/row-level-security
