const CACHE_NAME = 'BurakAseCountSite';
const urlsToCache = [
  '/',
  '/index.html',
  '/biz.jpg',
  '/perfct.mp3',
  '/favicon.ico',
  '/jquery.flipper-responsive.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  'https://code.jquery.com/jquery-3.4.1.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 