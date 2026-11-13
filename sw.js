// Descent Systems service worker: makes the game installable and playable offline.
//
// The game page is fetched from the network first, so updates you push show up right away
// whenever there's a connection; the saved copy is used only when offline.
// Icons and fonts are served from the saved copy and refreshed in the background.
//
// Change VERSION only if you rename or remove files in CORE; normal game updates don't need it.
const VERSION = 'descent-v1';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req));
    return;
  }
  if (url.origin === self.location.origin || FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(req));
  }
});

// The page itself: try the network (giving up after a few seconds on a bad connection), else the saved copy.
async function networkFirst(req) {
  const cache = await caches.open(VERSION);
  try {
    const res = await Promise.race([
      // 'no-cache' makes the browser check with the server every time instead of reusing
      // a copy it saved up to 10 minutes ago, so a fresh push shows up on the next reload
      fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000))
    ]);
    if (res.ok) cache.put('./index.html', res.clone());
    return res;
  } catch (err) {
    return (await cache.match('./index.html')) || (await cache.match('./')) || Response.error();
  }
}

// Everything else: answer from the saved copy at once, and refresh it from the network for next time.
async function staleWhileRevalidate(req) {
  const cache = await caches.open(VERSION);
  const saved = await cache.match(req);
  const fresh = fetch(req)
    .then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    })
    .catch(() => saved);
  return saved || fresh;
}
