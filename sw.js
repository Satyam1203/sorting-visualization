let cacheName = 'sorting-web';
let contentToCache = [
    '/',
    '/index.html',
    './style.css',
    './scripts/script.js',
    './scripts/bubbleSort.js',
    './scripts/selectionSort.js',
    './scripts/mergeSort.js',
    './scripts/modifiedBubbleSort.js',
    './scripts/quickSort.js',
    './scripts/insertionSort.js',
    './images/surftocat-512x512.png'
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
              console.log('[Service Worker] Caching assets');
            cache.addAll(contentToCache);
        })
    );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
          if(key !== cacheName) {
            return caches.delete(key);
          }
      }));
    })
  );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then(res=>{
        return res || fetch(e.request);
      })
    );
});
