'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f9d20b32188e47fc32ceb2d9b1b5a7b0",
"version.json": "980547175e325fe622a3362b84d55b6a",
"splash/img/light-2x.png": "a48f90c9c84f98ee7f71e0fe93c2777c",
"splash/img/dark-4x.png": "a5d24314000808de4a26a6b92a64461c",
"splash/img/light-3x.png": "bf11502c32a0dc5a644cd59f8da2dbf8",
"splash/img/dark-3x.png": "bf11502c32a0dc5a644cd59f8da2dbf8",
"splash/img/light-4x.png": "a5d24314000808de4a26a6b92a64461c",
"splash/img/dark-2x.png": "a48f90c9c84f98ee7f71e0fe93c2777c",
"splash/img/dark-1x.png": "b41482933f3350f016e4cf5b6dedc98c",
"splash/img/light-1x.png": "b41482933f3350f016e4cf5b6dedc98c",
"index.html": "95f3c64288d181114dadb632aa0a8ac6",
"/": "95f3c64288d181114dadb632aa0a8ac6",
"main.dart.js": "015b21c21f3dfb60cbdd95fa503f6b68",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "e30ff1b47c7a9080b776559cf056b026",
"icons/Icon-192.png": "e328795d096c5f06011c35fcd3574638",
"icons/Icon-maskable-192.png": "e328795d096c5f06011c35fcd3574638",
"icons/Icon-maskable-512.png": "1819804f641ed4c253689ace221858f2",
"icons/Icon-512.png": "1819804f641ed4c253689ace221858f2",
"manifest.json": "89870ee4a7f0ca47ae5f22d04bcb18bc",
"assets/AssetManifest.json": "8683ac7c3674c20589115c1745757fc3",
"assets/NOTICES": "b244bc08ad00f193f53e9ff153e6f57d",
"assets/FontManifest.json": "65b2e2329bd1c6f8d8d08b5507f5310d",
"assets/AssetManifest.bin.json": "4f1abaa13832bb66cd7a3d04e1205716",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2fa2730ea86ad6bddf36eb8d0dc04362",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "49132fee43defecafee9a4a2802f1e07",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/gSignIn.png": "a696be4710211b53f27405b71c0637e6",
"assets/assets/images/aSignIn.png": "9f7abc236a294b7c31234b6c78ff2bbf",
"assets/assets/images/huawei.png": "99860cb073f31f30b8c292109214f741",
"assets/assets/images/mSignIn.png": "d53447b42f0e520eca497e5e5e6d9ff1",
"assets/assets/images/apple.png": "03d14e77df23beb58b2ca9f6c9ce1626",
"assets/assets/images/logo.png": "1819804f641ed4c253689ace221858f2",
"assets/assets/images/google.png": "70a928ab185fa70c1613595643e58b25",
"assets/assets/sounds/begin.mp3": "b4a9472cbe7ed19702bd40e40efaf4fb",
"assets/assets/sounds/done.mp3": "7a3389aa036b9739d6a74dcba348c76e",
"assets/assets/sounds/end.mp3": "4006227c8c6aa82ac1c9a418ff912c2d",
"assets/assets/photos/image8.jpg": "f141a7ebd4882b7620dc629f80861386",
"assets/assets/photos/image9.jpg": "8f8428798ccf1eae63888c533e6bf7c6",
"assets/assets/photos/image7.jpg": "8793f606e8246ed2f2be51eec163b637",
"assets/assets/photos/image6.jpg": "57ec78d2893578245728634db0bb8530",
"assets/assets/photos/image4.jpg": "5bd3a61ee77d9ab98d3eb6aad2ea7bf5",
"assets/assets/photos/image5.jpg": "95319ba93458cee633827a09972acb59",
"assets/assets/photos/image1.jpg": "33b484db0669acac36c622be0d25820e",
"assets/assets/photos/image2.jpg": "334b3589aa28573a87786a9f3218d89f",
"assets/assets/photos/image3.jpg": "3ea8e6d5adff0465ba5a82f19c085237",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
