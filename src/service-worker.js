const fetchAndCache = (e, cache) => {
  return fetch(e.request).then(function (response) {
    cache.put(e.request, response.clone());
    return response;
  });
}

self.addEventListener('fetch', function (e) {
  const streamRegex = /^.*soundcloud.com\/tracks\/\d*\/stream.*$/;
  if (!e.request.url.includes('soundcloud.com')) {
    return false;
  }
  if (e.request.url.match(streamRegex)) {
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