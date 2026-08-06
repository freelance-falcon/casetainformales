/* Service worker — cache básico para funcionar sin conexión */

const CACHE = "informales-v21";

const PRECACHE = [
  "./",
  "index.html",
  "css/styles.css",
  "js/app.js",
  "js/data.js",
  "manifest.webmanifest",
  "assets/header-900.webp",
  "assets/header-1800.webp",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((c) => Promise.allSettled(PRECACHE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Red primero para HTML/JS (contenido fresco), caché primero para el resto */
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;

  const esContenido =
    e.request.mode === "navigate" || url.pathname.endsWith(".js") || url.pathname.endsWith(".css");

  if (esContenido) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copia = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copia));
          return res;
        })
        .catch(() => caches.match(e.request).then((r) => r || caches.match("index.html")))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(
        (r) =>
          r ||
          fetch(e.request).then((res) => {
            const copia = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copia));
            return res;
          })
      )
    );
  }
});
