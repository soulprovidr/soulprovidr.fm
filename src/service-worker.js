self.addEventListener('fetch', function (e) {
  // Don't cache non-SoundCloud responses.
  if (!e.request.url.match(/^.*(soundcloud.com).*$/)) {
    return false;
  }
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request).then(function (response) {
        caches.put(e.request, response.clone());
        return response;
      });
    })
  )
});