const CACHE = "classmate-v1";
const ASSETS = [
    ".",
    "menu-bg.png",
    "bg.png",
    "icecream.png",
    "roller.png",
    "avatar.png",
    "ex.png",
    "school_bg.png",
    "alice_body.png",
    "ex_body.png",
    "icon.png"
];

self.addEventListener("install", e => {
    e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});