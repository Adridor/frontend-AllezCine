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
  '../css/main.css',
  '../css/menu.css',
  '../css/style.css',
  '../img/alien-banner.jpg',
  '../img/alien.jpeg',
  '../img/batmanmovie-2017-comedie.jpg',
  '../img/hostel-2005-thriller.jpg',
  '../img/intouchables-2011-comedie.jpg',
  '../img/lesdeuxtours-2002-aventure.jpg',
  '../img/inception-2010-scifi.jpg',
  '../img/thefall-2006-dramatique.jpg',
  '../img/shutterisland-2010-thriller.jpg',
  '../img/storks.jpeg',
  '../img/lepatientanglais-1996-dramatique.jpg',
  '../img/seven-1995-thriller.jpg',
  '../img/Solo.jpg',
  '../img/starwarsempire-1980-scifi.jpg',
  '../img/Survivestyle5-2004-comedie.jpg',
  '../img/swissarmyman-2016-comedie.jpg',
  '../img/WhatWeDoInTheShadows-2014-comedie.jpg',
  '../img/zoolander-2001-comedie.jpg',
  '../js/btton.js',
  '../js/form.js',
  '../js/main.js',
  '../js/movies.json',
  '../js/series.json',
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
