import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const app = process.argv[2];
if (!['website', 'erp'].includes(app)) throw new Error('Expected website or erp');
const root = resolve(import.meta.dirname, '..');
const source = join(root, 'apps', app, 'public');
const target = join(root, 'apps', app, 'dist');
await stat(join(source, 'index.html'));
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
const files = await readdir(target);
if (!files.includes('index.html')) throw new Error('index.html not copied');
console.log('Built ' + app + ' to ' + target);
