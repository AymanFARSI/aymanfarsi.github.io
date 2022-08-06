'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js": "7a3f77128e002fd9ce6c0a6787b19dda",
"version.json": "2a4bdd3370ee966319e180d97d91e050",
"assets/assets/images/image.png": "05028227e7b48cacbf5a07bd501b93f0",
"assets/assets/images/profile.jpg": "86c61353f5d3d64905d511499b21ea98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "ae9ac116ce85b0185fb6c2fe2418cdd9",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/NOTICES": "ffcaa66fca2d7ea2573cc843d0a24813",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "091aa5e049549bdabf3295fb42c03f13",
"/": "091aa5e049549bdabf3295fb42c03f13",
"manifest.json": "dc6043ecaaae9eb5f5d08e51cc7dda60",
"splash/style.css": "b84a76450a7da3c072809611870ee985",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "500e81033efe1cf256cf4145f8c29293",
".git/refs/remotes/origin/main": "500e81033efe1cf256cf4145f8c29293",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/80/fffd76c3afaabc4be6f351deb16681bb9e6348": "900a0e1d7a8d87d0aae53bbe95c7d35f",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/25/8fc3e92c51ec71e673f451e1937021748982d2": "edeb84fe0cc46c2487055961becaa747",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/89/be0b62fc4ce11018b0003d5eb62cdcd491e949": "aeace8e55ce272de3c98481dc42e583c",
".git/objects/89/1dcf1b0a876a01b3c2608dc922d0d32071e4eb": "44f6841b41e133f096fcd08f5fdc69a2",
".git/objects/5a/f02ad50c93bf02a19fbe92e739f948c9e7a278": "dd310778f16afa6e8728814aa200e53a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/b5de4eb999f8df85c55e3614884cac29056e31": "772fae805a5878e97524b874000618e3",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f8/9bc7c2d5bfde0664cba67303add4566ab215b0": "4264b4cece529a1de4fa8862a7b6ca64",
".git/objects/71/085c9fcacbd83c35e654df3bc88e3bf4b6d88c": "bb19eb2e1429f9cfabafe75d2a578824",
".git/objects/68/82d65666ebc4dbb2254847952d631175e9d7ba": "2881ef725f66c69fa4164646b2f1110b",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/9c/c0cc5ac930b4e3c0e12e2a5ccb04ba63c8508f": "4936a3c97058d33a29cf0fc14eef90bb",
".git/objects/f6/e22df0e9668c1056ae9e235e1e753e30e82a37": "e2cab2bd83ada250c9c5d23b2aac5591",
".git/objects/f6/d47cfd478d52370d5dd58b791a69910710f082": "ea26fb3757926ad3ac2d6ff48bab3222",
".git/objects/af/ddd56d750cc5bce8015516507ce03939416b6b": "90d58b12a6479d20a3c1986798a63135",
".git/objects/58/d0bafb1e7bcecc19e388eba8ddbfb0a0c1d3cf": "1a5ae8743150e1eb50b651870dc5245b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/38/b8789c9341fc78377b29dd2fca78f1c0719b5b": "715f25a5ef0e7641a176a136fd9c0abc",
".git/objects/f1/218498ac7a4d3fd26599f6156cf4c12db33cdd": "011096f5ab9ae0ac03f99b176ea5bc57",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a0/04a847033fb0b3e6e16207dc371d778a2bbecf": "4681e3bd1ad4938c39c7308fa3c68f65",
".git/objects/9b/5c0a37219fba4edd42346dacd57bb7ab91dd70": "1554ed71c5cb91bfa9d40e015205b4d2",
".git/objects/07/2300d40a750e314946783a00c5b72dc1cdd981": "03c9231c24888a34c1d3ee39445d4a0a",
".git/objects/8f/c88efbfbd93d5e3cbdd73448a426eac723b63e": "e318fce036dbd3da043627d9b16a661d",
".git/objects/0f/8d36a1508bd4c4c9f7f9f8838ff00b7d3c7e54": "533c7d4f4da21c2467fa508330983786",
".git/objects/6a/36b2bfdfa9c415db5f6dc310cfd9e043a99b24": "f3b0f846365c9dca070d20bb20d825b8",
".git/objects/0b/7bbbb8c9efcd2a29e8b532a23393d7ebb96266": "a6f523bf0327863153d3de6e40885af5",
".git/objects/96/10248b01266a53cbdb524f0533fac6af057c51": "fd8456b7201ef340cb3b804a3704d4a4",
".git/objects/32/5b3e1171ff2211b20bb312e928bb27bb1cf56f": "ba64633b671ab27147b7c3c467c8026e",
".git/objects/42/bc0c2bf7d1425e0d14940f1e6bb445e5be5e8f": "6829d7e74e5b2df9e51cc7b908491194",
".git/objects/a8/33df4d6a15c765f9e0cfe7669bdc46c21497d9": "28b17ac13d3c4ecd993afe4d496f4364",
".git/objects/fc/5c927dae5c248248242bc9f53b6f3088e81076": "005dd05c7e7ce394d5f461cad34775e9",
".git/objects/ab/458c452ff916c341f1293d82f6adc32d112ef4": "3b2c32da3c68d20f64e198dfe4a170be",
".git/objects/cc/2ac0ebf441c8fb893673134a34302342cea033": "2724704977db7bc8720c7bcb6235cb5a",
".git/objects/55/e685bf2ddb8103b77eed5c73f61703778023a7": "e20610051d07d97d608fa7a1f21a629a",
".git/objects/81/95c6c00417ca43d67caac04169e81315a3e85f": "42dd2d85c86e2c111b36ad833aecaecc",
".git/objects/e0/391047544ccbd528814c44fe1eaa50848756ac": "008cc7490ce6ca978eb3a7786d42c003",
".git/objects/82/2059b5c748d2f4361e861ea757407ee6b9391b": "9c0a70d352f5fb68527be2288420eebb",
".git/objects/65/50616e54e4aad5ce2c2f5b02f9bff3646847d2": "2dc59e44a22bb4c87a642969733ff253",
".git/objects/69/1de98e404c265873031cca4399f9c2dde122de": "bc91347ccfdeb804b1b1bc72b871be68",
".git/COMMIT_EDITMSG": "2a402a90b83b98ccfc2ffdae91bc8e61",
".git/logs/HEAD": "a80288cf2391a36fedb1246512767d90",
".git/logs/refs/heads/main": "a80288cf2391a36fedb1246512767d90",
".git/logs/refs/remotes/origin/main": "d3f0fe54d6f7125543f307f2cd2dbab1",
".git/FETCH_HEAD": "83fc1076d34b16859c9f61048362b001",
".git/ORIG_HEAD": "851e4613454dd8d8b8d0261119d800bd",
".git/config": "44f683573cb641e1ead42ed9b8101005",
".git/index": "6d98756d8884c799dd3e273ab49f6bbb",
"LICENSE": "0139e0eb450b7edf819e4b88a4381e7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
