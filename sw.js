```javascript
const CACHE_NAME = 'rufinista-v5';
const assets = [
  '/Foro-rufinista-2026/',
  '/Foro-rufinista-2026/index.html',
  '/Foro-rufinista-2026/manifest.json',
  '/Foro-rufinista-2026/icons/icon-192x192.png',
  '/Foro-rufinista-2026/icons/icon-512x512.png'
];

// Instalar el Service Worker y guardar en memoria los archivos esenciales
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(assets))
  );
});

// Hacer que la app funcione incluso si el usuario se queda sin internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
