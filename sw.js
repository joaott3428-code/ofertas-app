const CACHE = "ofertas-semana-v7";
const ARQUIVOS = ["./", "./index.html", "./estilo.css", "./app.js", "./ofertas.json", "./icone.svg", "./icone-180.png", "./icone-192.png", "./icone-512.png", "./manifest.webmanifest"];

self.addEventListener("install", evento => {
  evento.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys()
      .then(chaves => Promise.all(chaves.filter(chave => chave !== CACHE).map(chave => caches.delete(chave))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", evento => {
  if (evento.data && evento.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", evento => {
  const url = new URL(evento.request.url);
  if (evento.request.method !== "GET" || url.origin !== self.location.origin) return;

  if (url.pathname.endsWith("ofertas.json")) {
    evento.respondWith(
      fetch(evento.request)
        .then(resposta => {
          const copia = resposta.clone();
          const canonica = new Request(new URL("ofertas.json", self.location.href).href);
          caches.open(CACHE).then(cache => Promise.all([
            cache.put(canonica, copia.clone()),
            cache.put(evento.request, copia)
          ]));
          return resposta;
        })
        .catch(() => caches.match(evento.request)
          || caches.match(new URL("ofertas.json", self.location.href).href))
    );
    return;
  }

  evento.respondWith(
    caches.match(evento.request).then(resposta => resposta || fetch(evento.request))
  );
});
