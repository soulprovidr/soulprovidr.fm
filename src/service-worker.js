const fetchAndCache = (e, cache) => {
  fetch(e.request).then(function (response) {
    cache.put(e.request, response.clone());
    return response;
  });
}

self.addEventListener('fetch', function (e) {
  if (!e.request.url.match(/^.*(soundcloud.com\/(resolve|tracks)).*$/)) {
    return false;
  }
  e.respondWith(
    caches.open('soundcloud').then(function (cache) {
      return cache.match(e.request).then(function (response) {
        return response || fetchAndCache(e, cache);
      })
    })
  )
});