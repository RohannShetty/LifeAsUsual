import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const SCOPE = 'https://example.test/LifeAsUsual/';
const workerSource = fs.readFileSync(new URL('../public/sw.js', import.meta.url), 'utf8');

// Runs the real service worker in a VM with mocked Cache Storage, fetch and
// lifecycle methods, so the offline contracts are checked rather than assumed.
function createWorker({ entries = new Map(), cacheKeys = ['lasu-v0'], network } = {}) {
  const listeners = new Map();
  const calls = { deleted: [], claimed: false, skippedWaiting: false, precached: [], puts: [], fetches: 0 };
  const cache = {
    async match(request, options = {}) {
      const key = typeof request === 'string' ? request : request.url;
      if (!options.ignoreSearch) return entries.get(key);
      const wanted = new URL(key);
      for (const [cachedKey, value] of entries) {
        const candidate = new URL(cachedKey);
        if (candidate.origin === wanted.origin && candidate.pathname === wanted.pathname) return value;
      }
      return undefined;
    },
    async put(request, response) {
      const key = typeof request === 'string' ? request : request.url;
      entries.set(key, response);
      calls.puts.push(key);
    },
    async addAll(urls) {
      calls.precached.push(...urls);
      for (const url of urls) entries.set(url, new Response('precached', { status: 200 }));
    },
  };
  const context = {
    self: {
      registration: { scope: SCOPE },
      addEventListener: (name, callback) => listeners.set(name, callback),
      skipWaiting: async () => { calls.skippedWaiting = true; },
      clients: { claim: async () => { calls.claimed = true; } },
    },
    URL,
    Response,
    caches: {
      open: async () => cache,
      keys: async () => [...cacheKeys],
      delete: async (key) => { calls.deleted.push(key); return true; },
    },
    // Real fetch rejects; the mock must not throw synchronously or the worker
    // would see an exception where production sees a rejected promise.
    fetch: (input) => {
      calls.fetches += 1;
      return Promise.resolve().then(() => (network || (() => Promise.reject(new Error('offline'))))(input));
    },
  };
  vm.runInNewContext(workerSource, context);
  return { listeners, calls, entries };
}

async function dispatchFetch(worker, { url, method = 'GET', mode = 'cors' }) {
  const request = { method, url, mode };
  let captured;
  worker.listeners.get('fetch')({ request, respondWith: (promise) => { captured = Promise.resolve(promise); } });
  return captured ? await captured : undefined;
}

async function dispatchLifecycle(worker, name) {
  const waits = [];
  worker.listeners.get(name)({ waitUntil: (promise) => waits.push(Promise.resolve(promise)) });
  await Promise.all(waits);
}

test('an uncached asset requested offline resolves to a valid 503 Response, not null', async () => {
  const worker = createWorker();
  const response = await dispatchFetch(worker, { url: SCOPE + '_astro/app.js' });
  assert.ok(response instanceof Response);
  assert.equal(response.status, 503);
  assert.match(response.headers.get('content-type') || '', /text\/plain/);
  assert.match(await response.text(), /unavailable offline/);
});

test('a cached asset is served from the cache while the background refresh fails', async () => {
  const cached = new Response('cached JS', { status: 200 });
  const worker = createWorker({ entries: new Map([[SCOPE + '_astro/app.js', cached]]) });
  const response = await dispatchFetch(worker, { url: SCOPE + '_astro/app.js' });
  assert.equal(response, cached);
  assert.equal(await response.text(), 'cached JS');
});

test('an uncached asset with a working network returns and caches the network response', async () => {
  const fresh = new Response('fresh JS', { status: 200 });
  const worker = createWorker({ network: async () => fresh });
  const response = await dispatchFetch(worker, { url: SCOPE + '_astro/fresh.js' });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'fresh JS');
  assert.ok(worker.entries.has(SCOPE + '_astro/fresh.js'));
});

test('a non-ok asset response is not cached', async () => {
  const worker = createWorker({ network: async () => new Response('missing', { status: 404 }) });
  const response = await dispatchFetch(worker, { url: SCOPE + '_astro/missing.js' });
  assert.equal(response.status, 404);
  assert.equal(worker.calls.puts.length, 0);
});

test('offline navigation falls back to the precached offline page', async () => {
  const offlinePage = new Response('<h1>You are offline</h1>', { status: 200 });
  const worker = createWorker({ entries: new Map([[SCOPE + 'offline/', offlinePage]]) });
  const response = await dispatchFetch(worker, { url: SCOPE + 'chapters/09-never-visited/', mode: 'navigate' });
  assert.equal(response, offlinePage);
});

test('offline navigation reuses an already cached page, ignoring query strings', async () => {
  const page = new Response('<h1>Chapter</h1>', { status: 200 });
  const worker = createWorker({ entries: new Map([[SCOPE + 'chapters/01-do-not-die-early/', page]]) });
  const response = await dispatchFetch(worker, { url: SCOPE + 'chapters/01-do-not-die-early/?utm_source=test', mode: 'navigate' });
  assert.equal(response, page);
});

test('same-origin scope protection leaves cross-origin, out-of-scope and non-GET requests alone', async () => {
  const worker = createWorker();
  const crossOrigin = worker.listeners.get('fetch')({ request: { method: 'GET', url: 'https://cdn.example.test/app.js', mode: 'cors' }, respondWith: () => { throw new Error('should not intercept'); } });
  worker.listeners.get('fetch')({ request: { method: 'GET', url: 'https://example.test/other/app.js', mode: 'cors' }, respondWith: () => { throw new Error('should not intercept'); } });
  worker.listeners.get('fetch')({ request: { method: 'POST', url: SCOPE + '_astro/app.js', mode: 'cors' }, respondWith: () => { throw new Error('should not intercept'); } });
  assert.equal(crossOrigin, undefined);
  assert.equal(worker.calls.fetches, 0);
});

test('install precaches the scope-relative shell and activates immediately', async () => {
  const worker = createWorker();
  await dispatchLifecycle(worker, 'install');
  assert.deepEqual(worker.calls.precached, ['', 'chapters/', 'guides/', 'offline/', 'manifest.webmanifest', 'favicon.svg'].map((path) => new URL(path, SCOPE).href));
  assert.equal(worker.calls.skippedWaiting, true);
});

test('activate deletes stale caches only and claims open clients', async () => {
  const worker = createWorker({ cacheKeys: ['lasu-v0', 'lasu-v1', 'unrelated'] });
  await dispatchLifecycle(worker, 'activate');
  assert.deepEqual(worker.calls.deleted.sort(), ['lasu-v0', 'unrelated']);
  assert.equal(worker.calls.claimed, true);
});
