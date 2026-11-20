/* Life as Usual service worker.
 * Scope-relative by design: the site is served under a subpath on GitHub Pages,
 * so every cached URL is resolved against the registration scope instead of
 * hardcoding a base path.
 * No third-party origins, no analytics, no network calls beyond same-origin GETs.
 */
const VERSION = 'v1';
const CACHE = 'lasu-' + VERSION;
const OFFLINE_URL = 'offline/';

const scopeUrl = new URL(self.registration.scope);
const abs = (path) => new URL(path, scopeUrl).href;

const PRECACHE = ['', 'chapters/', 'guides/', 'offline/', 'manifest.webmanifest', 'favicon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE.map(abs))).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request, fallbackUrl) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = (await cache.match(request, { ignoreSearch: true })) || (await cache.match(fallbackUrl));
    if (cached) return cached;
    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);
  // A rejected fetch resolves to null above. Returning that null from respondWith
  // violates the FetchEvent contract (it requires a Response) and produces an
  // opaque service-worker error when an uncached asset is requested offline.
  // Cached assets remain available while the background refresh fails.
  if (cached) return cached;
  const response = await network;
  return response || new Response('Asset unavailable offline', {
    status: 503,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== scopeUrl.origin || !url.pathname.startsWith(scopeUrl.pathname)) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, abs(OFFLINE_URL)));
    return;
  }
  if (/\.(?:css|js|woff2?|png|svg|webp|avif|ico|webmanifest|json)$/.test(url.pathname) || url.pathname.includes('/_astro/')) {
    event.respondWith(staleWhileRevalidate(request));
  }
});
