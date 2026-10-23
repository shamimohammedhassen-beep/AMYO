# Reproducible AMYO cloud workspace

The repository includes `.devcontainer/devcontainer.json`, compatible with GitHub Codespaces and other Development Containers hosts.

1. Open the AMYO GitHub repository -> **Code** -> **Codespaces** -> **Create codespace on main** (requires your account's Codespaces entitlement).
2. The devcontainer uses Node.js 22. Its `postCreateCommand` runs `npm ci --ignore-scripts && npm run check && npm run build && npm test`.
3. Run `npm run dev:website` or `npm run dev:erp`. Ports 4173/4174 are forwarded privately by the cloud editor's usual port-security controls.
4. Make changes on a working branch, run checks, and review before merging to `main`.

No paid cloud instance is created automatically by committing devcontainer configuration. GitHub Codespaces has separate usage and billing rules. This configuration does NOT provision a persistent ChatGPT Work or Codex machine: those are managed through their respective product environments.

Initially there are no third-party runtime/development packages. `npm ci` installs the root's local npm workspace links. Add pinned dependencies and update the lockfile when the application framework is chosen.

Do not load production secrets into interactive previews; keep cloud dev/test projects and privileges separate from the production database.
