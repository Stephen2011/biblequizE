const CACHE = "bible-quiz-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./audio/worship.mp3"
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request))
  );
});
