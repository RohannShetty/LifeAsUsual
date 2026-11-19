import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const workerSource = fs.readFileSync(new URL('../public/sw.js', import.meta.url), 'utf8');

function harness(cached) {
  const listeners = new Map();
  const cache = {
    match: async () => cached,
    put: async () => {},
  };
  const context = {
    self: {
      registration: { scope: 'https://example.test/LifeAsUsual/' },
      addEventListener: (name, callback) => listeners.set(name, callback),
    },
    URL, Response,
    caches: { open: async () => cache },
    fetch: async () => { throw new Error('offline'); },
  };
  vm.runInNewContext(workerSource, context);
  const request = { method: 'GET', url: 'https://example.test/LifeAsUsual/_astro/app.js', mode: 'cors' };
  let responsePromise;
  listeners.get('fetch')({
    request,
    respondWith: (promise) => { responsePromise = Promise.resolve(promise); },
  });
  return responsePromise;
}

test('uncached asset offline resolves to a valid 503 Response, not null', async () => {
  const response = await harness(undefined);
  assert.ok(response instanceof Response);
  assert.equal(response.status, 503);
  assert.match(await response.text(), /unavailable offline/);
});

test('cached asset remains available when background refresh fails', async () => {
  const cached = new Response('cached JS', { status: 200 });
  const response = await harness(cached);
  assert.equal(response, cached);
  assert.equal(await response.text(), 'cached JS');
});
