import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const required = [
  'apps/website/public/index.html',
  'apps/erp/public/index.html',
  'shared/backend/README.md',
  'shared/database/README.md',
  '.devcontainer/devcontainer.json',
  'package-lock.json'
];
for (const file of required) await access(resolve(root, file));
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
if (!pkg.private || pkg.workspaces?.length !== 2) throw new Error('Invalid workspace configuration');
for (const app of ['website', 'erp']) {
  const pkgApp = JSON.parse(await readFile(resolve(root, 'apps', app, 'package.json'), 'utf8'));
  if (pkgApp.name !== '@amyo/' + app) throw new Error('Incorrect app package name');
}
console.log('AMYO workspace structure verified');
