# AMYO — cloud development baseline

Status: **infrastructure scaffold only**. This repository does not yet contain an operational ERP, accounting system, or public business website.

## Structure

- `apps/website` — public-facing static shell; deployed independently to Cloudflare Pages project `amyo`.
- `apps/erp` — internal ERP shell; **not an authenticated system**; deployed independently to Cloudflare Pages project `amyo-erp` only after security release review.
- `shared/backend` — future secured business API and integration code.
- `shared/database` — proposed PostgreSQL migrations and Supabase policy tests (none implemented).
- `scripts` — dependency-free build and development tools.
- `.devcontainer` — reproducible GitHub Codespaces / compatible cloud workspace setup.

## Requirements

Node.js 22, npm 10+. Third-party packages: **none in this infrastructure baseline**. Introducing React, a UI kit, Supabase client, or other packages requires a scoped implementation decision and a verified lockfile.

```bash
npm ci
npm run check
npm run build
npm test
npm run dev:website
# separate terminal:
npm run dev:erp
```

Website development preview: port 4173. ERP shell preview: port 4174.

## Hosting

- Public Pages project: `amyo` — reserved `amyo-8fp.pages.dev`.
- Internal Pages project: `amyo-erp` — reserved `amyo-erp.pages.dev`.
- Both projects track this repository's `main` branch but use separate build outputs.
- Automatic production deployments are intentionally **disabled** until access control and owner release approval.
- Shared database project: Supabase `ttaijzrvlaernjpxrnxx` (Frankfurt); no application schema or integration configured.

See [hosting and security](docs/HOSTING.md) and [cloud workspace](docs/CLOUD_WORKSPACE.md).

**Security:** Never commit passwords, private keys, Supabase secret/service-role keys, customer data or operational records. Public frontend code may only hold publishable configuration. The ERP must be protected by real authentication, authorization, database row-level security and an access gate before public deployment.
