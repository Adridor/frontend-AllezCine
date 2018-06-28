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
  '/assets/css/main.css',
  '/assets/css/menu.css',
  '/assets/css/style.css',
  '/assets/img/alien-banner.jpg',
  '/assets/img/alien.jpeg',
  '/assets/img/batmanmovie-2017-comedie.jpg',
  '/assets/img/hostel-2005-thriller.jpg',
  '/assets/img/intouchables-2011-comedie.jpg',
  '/assets/img/lesdeuxtours-2002-aventure.jpg',
  '/assets/img/inception-2010-scifi.jpg',
  '/assets/img/thefall-2006-dramatique.jpg',
  '/assets/img/shutterisland-2010-thriller.jpg',
  '/assets/img/storks.jpeg',
  '/assets/img/lepatientanglais-1996-dramatique.jpg',
  '/assets/img/seven-1995-thriller.jpg',
  '/assets/img/Solo.jpg',
  '/assets/img/starwarsempire-1980-scifi.jpg',
  '/assets/img/Survivestyle5-2004-comedie.jpg',
  '/assets/img/swissarmyman-2016-comedie.jpg',
  '/assets/img/WhatWeDoInTheShadows-2014-comedie.jpg',
  '/assets/img/zoolander-2001-comedie.jpg',
  '/assets/js/btton.js',
  '/assets/js/form.js',
  '/assets/js/main.js',
  '/assets/js/movies.json',
  '/assets/js/series.json',
];


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
