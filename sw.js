const CACHE = "ofertas-semana-v5";
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

self.addEventListener("fetch", evento => {
  const url = new URL(evento.request.url);
  if (evento.request.method !== "GET" || url.origin !== self.location.origin) return;

  if (url.pathname.endsWith("ofertas.json")) {
    evento.respondWith(
      fetch(evento.request)
        .then(resposta => {
          const copia = resposta.clone();
          caches.open(CACHE).then(cache => cache.put(evento.request, copia));
          return resposta;
        })
        .catch(() => caches.match(evento.request))
    );
    return;
  }

  evento.respondWith(
    caches.match(evento.request).then(resposta => resposta || fetch(evento.request))
  );
});
