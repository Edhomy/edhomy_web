'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a0e2c37747e0cfabcbe81395347cd32f",
"version.json": "3144945c576529402509764e50c85266",
"splash/img/light-2x.png": "4e3eb1733ada7514a59b1c1c668e8055",
"splash/img/dark-4x.png": "de3922ffe41db58a8332f1b93294c46c",
"splash/img/light-3x.png": "ed6b2a2915a09188d79af2e4fabc9b57",
"splash/img/dark-3x.png": "ed6b2a2915a09188d79af2e4fabc9b57",
"splash/img/light-4x.png": "de3922ffe41db58a8332f1b93294c46c",
"splash/img/dark-2x.png": "4e3eb1733ada7514a59b1c1c668e8055",
"splash/img/dark-1x.png": "1efea91038f5d2530f1f2bbe840b2e1b",
"splash/img/light-1x.png": "1efea91038f5d2530f1f2bbe840b2e1b",
"index.html": "23eb0c4660cf479b0d85981bf095db88",
"/": "23eb0c4660cf479b0d85981bf095db88",
"main.dart.js": "84cc3fb4bc07f13cfc338b9e72f109c2",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-192.png": "2be0aeea59f1dfeb27d91b00e14e56c1",
"icons/Icon-maskable-192.png": "2be0aeea59f1dfeb27d91b00e14e56c1",
"icons/Icon-maskable-512.png": "10aee388f499c2d5755abdf12e7d914d",
"icons/Icon-512.png": "10aee388f499c2d5755abdf12e7d914d",
"manifest.json": "9027ce6cbf16926882ed8c890926e5ef",
"assets/NOTICES": "457d34f05229776737c40312288e23a4",
"assets/FontManifest.json": "538b1f45dc619a237e05c5021d97d35f",
"assets/AssetManifest.bin.json": "dad4b7a3404be1eea898bdc5755e4095",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dbe934e17e130d2188f5a4043b811c21",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "506b1e6e68464a3fbc964df4c9c66b9a",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/email.png": "d53447b42f0e520eca497e5e5e6d9ff1",
"assets/assets/images/googlePlay.png": "70a928ab185fa70c1613595643e58b25",
"assets/assets/images/android.png": "f900fa4ceda22c11f63a795c7d3e6d97",
"assets/assets/images/mac.png": "fdccaa599b58d90cbc2a0eb7fdaddae2",
"assets/assets/images/appStore.png": "03d14e77df23beb58b2ca9f6c9ce1626",
"assets/assets/images/apple.png": "9f7abc236a294b7c31234b6c78ff2bbf",
"assets/assets/images/logo.png": "a7f23061a4f7bc98105e4766c1ea101d",
"assets/assets/images/google.png": "a696be4710211b53f27405b71c0637e6",
"assets/assets/sounds/begin.mp3": "b4a9472cbe7ed19702bd40e40efaf4fb",
"assets/assets/sounds/done.mp3": "7a3389aa036b9739d6a74dcba348c76e",
"assets/assets/sounds/end.mp3": "4006227c8c6aa82ac1c9a418ff912c2d",
"assets/assets/photos/image7.jpg": "536cd82f0b932cd47a191a376e356ad0",
"assets/assets/photos/image6.jpg": "b995e8d3b2e5ebadecefbde53c8693f0",
"assets/assets/photos/image4.jpg": "7a3001d10add0e1a35306d816a249c73",
"assets/assets/photos/image5.jpg": "78e6e6eff8d651084656a75698e5e996",
"assets/assets/photos/image1.jpg": "96016e86f420ca311535c88e8e1a2cff",
"assets/assets/photos/image2.jpg": "5f297ce3c1ef1b47cdc62c852a5cbeca",
"assets/assets/photos/image3.jpg": "7685e89e5409aef30d713d0e886b5b5b",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansLight.ttf": "9fdb7fe1c6114fac5ce771d33f5b95dc",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansMedium.ttf": "d68c561bec0bcba82f4077af34396997",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansBold.ttf": "42fb882132e7b91a2d4c6e192b97308f",
"favicon.svg": "b774b986252e516ecc0a82f9183a80fb",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
