self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'https://adridor.github.io/frontend-AllezCine/assets/css/main.css',
  'https://adridor.github.io/frontend-AllezCine/assets/css/menu.css',
  'https://adridor.github.io/frontend-AllezCine/assets/css/style.css',
  'https://adridor.github.io/frontend-AllezCine/assets/img/alien-banner.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/alien.jpeg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/batmanmovie-2017-comedie.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/hostel-2005-thriller.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/intouchables-2011-comedie.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/lesdeuxtours-2002-aventure.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/inception-2010-scifi.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/thefall-2006-dramatique.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/shutterisland-2010-thriller.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/storks.jpeg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/lepatientanglais-1996-dramatique.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/seven-1995-thriller.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/Solo.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/starwarsempire-1980-scifi.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/Survivestyle5-2004-comedie.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/swissarmyman-2016-comedie.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/WhatWeDoInTheShadows-2014-comedie.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/img/zoolander-2001-comedie.jpg',
  'https://adridor.github.io/frontend-AllezCine/assets/js/btton.js',
  'https://adridor.github.io/frontend-AllezCine/assets/js/form.js',
  'https://adridor.github.io/frontend-AllezCine/assets/js/main.js',
  'https://adridor.github.io/frontend-AllezCine/assets/js/movies.json',
  'https://adridor.github.io/frontend-AllezCine/assets/js/series.json',
];
console.log(urlsToCache);
console.log('test url');
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
