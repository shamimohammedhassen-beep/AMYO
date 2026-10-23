import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
for (const app of ['website', 'erp']) {
  test(app + ' has deployable isolated static content', async () => {
    const dir = resolve(root, 'apps', app, 'dist');
    assert.equal((await stat(dir)).isDirectory(), true);
    const html = await readFile(resolve(dir, 'index.html'), 'utf8');
    assert.match(html, /<html lang="en">/);
    assert.match(html, /noindex, nofollow/);
    assert.doesNotMatch(html, /service_role|supabase_secret|sb_secret_/i);
  });
}
test('ERP shell is explicitly non-operational', async () => {
  const html = await readFile(resolve(root, 'apps/erp/dist/index.html'), 'utf8');
  assert.match(html, /not a login or ERP system/i);
});
