function cacheForDomain(domain) {
  return function (e) {
    if (!e.request.url.match(`/^.*(${domain}).*$/`)) {
      return false;
    }
    e.respondWith(
      caches.open(domain).then(function (cache) {
        return cache.match(e.request).then(function (response) {
          return response || fetch(e.request).then(function (response) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      })
    )
  }
}

self.addEventListener('fetch', function (e) {
  cacheForDomain('soundcloud.com')(e);
});