const CACHE_NAME = "ik-planlama-v1";

const APP_SHELL = [
  "index.html",
  "products.html",
  "detail.html",
  "about.html",
  "faq.html",
  "contact.html",
  "offline.html",
  "manifest.json",
  "js/app.js"
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_SHELL);
    })
  );
});


self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request)
        .then(res => res || caches.match("offline.html"));
    })
  );
});
