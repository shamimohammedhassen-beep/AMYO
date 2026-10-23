# AMYO hosting and deployment contract

State: infrastructure scaffold. **Automatic Git deployments and production release are paused.**

| Cloudflare Pages project | Git repository | Production branch | Root directory | Build command | Output directory |
|---|---|---|---|---|---|
| `amyo` | `shamimohammedhassen-beep/AMYO` | `main` | repository root | `npm run build:website` | `apps/website/dist` |
| `amyo-erp` | same | `main` | repository root | `npm run build:erp` | `apps/erp/dist` |

Source paths: `apps/website/**`, `apps/erp/**`, and shared `scripts/**`, root npm manifests, and appropriate shared files. Add build watch paths when automatic deployments are enabled.

Public URL reserved: `https://amyo-8fp.pages.dev` (not deployed).
ERP URL reserved: `https://amyo-erp.pages.dev` (not deployed).

Shared backend: existing Supabase `ttaijzrvlaernjpxrnxx`; database integrations **not configured**.

## Non-negotiable release checks

1. ERP authentication and backend authorization are functioning, with RLS verified, before putting any sensitive workflow online.
2. Protect ERP at the edge with an approved Cloudflare Access policy (or equivalent); a login-page mockup or robots noindex is NOT security.
3. Public project cannot read private corporate data or process unscreened postings.
4. Build and test passes, proper per-project output verified; production deployment requires owner approval.
5. Use server-side secrets in secret stores only; never commit secrets or frontend service-role credentials.
6. Backup and restore checks are required before real accounting or financial records.

Free-tier limits and pause policies must be reviewed again before accepting live business traffic. Hosting availability does not equal ERP readiness.
