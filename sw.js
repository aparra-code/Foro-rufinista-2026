const CACHE_NAME = 'rufinista-v6';
const assets = [
  '/Foro-rufinista-2026/',
  '/Foro-rufinista-2026/index.html',
  '/Foro-rufinista-2026/manifest.json',
  '/Foro-rufinista-2026/icons/logo rufino 192.png',
  '/Foro-rufinista-2026/icons/logo rufino 512.png'
];

// Instalar el Service Worker y guardar en memoria los archivos esenciales
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => {
      return c.addAll(assets);
    })
  );
});

// Hacer que la app funcione incluso si el usuario se queda sin internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => {
      return r || fetch(e.request);
    })
  );
});
