import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const app = process.argv[2];
if (!['website', 'erp'].includes(app)) throw new Error('Expected website or erp');
const root = resolve(import.meta.dirname, '..', 'apps', app, 'public');
const port = app === 'website' ? 4173 : 4174;
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
    const raw = new URL(req.url, 'http://localhost').pathname;
    const candidate = resolve(root, '.' + decodeURIComponent(raw.endsWith('/') ? raw + 'index.html' : raw));
    if (candidate !== root && !candidate.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    const info = await stat(candidate);
    if (!info.isFile()) throw new Error('Not a file');
    const bytes = await readFile(candidate);
    res.writeHead(200, { 'Content-Type': mime[extname(candidate)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : bytes);
  } catch { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Not found'); }
});
server.listen(port, '0.0.0.0', () => console.log(app + ' workspace preview listening on port ' + port));
