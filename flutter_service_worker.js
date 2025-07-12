'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0d065be7dec6ae9fbcbc2e4222dd90f0",
"version.json": "980547175e325fe622a3362b84d55b6a",
"splash/img/light-2x.png": "d29eb70da62a635a8b9bfe413d5992f6",
"splash/img/dark-4x.png": "1449ff08b75a911d2592812abb75a0e2",
"splash/img/light-3x.png": "5dfefa0d491294f4f5d61487e09c2e8f",
"splash/img/dark-3x.png": "5dfefa0d491294f4f5d61487e09c2e8f",
"splash/img/light-4x.png": "1449ff08b75a911d2592812abb75a0e2",
"splash/img/dark-2x.png": "d29eb70da62a635a8b9bfe413d5992f6",
"splash/img/dark-1x.png": "7931d68d932dc52b75eab149d904272b",
"splash/img/light-1x.png": "7931d68d932dc52b75eab149d904272b",
"index.html": "e51f614a5d5248a4d7602a763e171476",
"/": "e51f614a5d5248a4d7602a763e171476",
"main.dart.js": "b95c8b0d03708677be697be465d71bbe",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-192.png": "e328795d096c5f06011c35fcd3574638",
"icons/Icon-maskable-192.png": "e328795d096c5f06011c35fcd3574638",
"icons/Icon-maskable-512.png": "1819804f641ed4c253689ace221858f2",
"icons/Icon-512.png": "1819804f641ed4c253689ace221858f2",
"manifest.json": "89870ee4a7f0ca47ae5f22d04bcb18bc",
"assets/AssetManifest.json": "92ab3dfcb29d1410bc33ca8a9ac333ad",
"assets/NOTICES": "d46666d19e3091beb5589856f06988c8",
"assets/FontManifest.json": "65b2e2329bd1c6f8d8d08b5507f5310d",
"assets/AssetManifest.bin.json": "bb49b1e076711ae0abca025463db1c7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "389fc38284b1b23ad0b0bba4b3671c20",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3e6432d78f4566c5b6fe0cf0f94fcc89",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/email.png": "d53447b42f0e520eca497e5e5e6d9ff1",
"assets/assets/images/android.png": "f900fa4ceda22c11f63a795c7d3e6d97",
"assets/assets/images/mac.png": "fdccaa599b58d90cbc2a0eb7fdaddae2",
"assets/assets/images/apple.png": "9f7abc236a294b7c31234b6c78ff2bbf",
"assets/assets/images/logo.png": "8e3e02aeb943378b0f810242f932a248",
"assets/assets/images/google.png": "a696be4710211b53f27405b71c0637e6",
"assets/assets/sounds/begin.mp3": "b4a9472cbe7ed19702bd40e40efaf4fb",
"assets/assets/sounds/done.mp3": "7a3389aa036b9739d6a74dcba348c76e",
"assets/assets/sounds/end.mp3": "4006227c8c6aa82ac1c9a418ff912c2d",
"assets/assets/photos/image8.jpg": "4473eb3dd7a36c5bafe5f33559270785",
"assets/assets/photos/image9.jpg": "f37a32440b211df5d0eff75697353d2a",
"assets/assets/photos/image12.jpg": "368b3fe8c2f8a37196eebcb9e2a35602",
"assets/assets/photos/image11.jpg": "f9a54afaf1e69131df15cdd616c0dfec",
"assets/assets/photos/image10.jpg": "99c5d0828c1a0002045cc515bbd591b0",
"assets/assets/photos/image7.jpg": "b1a131165d1eaf9e80457c6b17874ce3",
"assets/assets/photos/image6.jpg": "df2fb191ce9d256c1ef44cdb9d9659da",
"assets/assets/photos/image4.jpg": "fc0c7b140f0fdac5671b6743b53093a4",
"assets/assets/photos/image5.jpg": "bc65218345c0079f6ae127b5d51819cf",
"assets/assets/photos/image1.jpg": "2754427239a0b1f0b588692bfe972dea",
"assets/assets/photos/image2.jpg": "da78decd68eaacbe7c970e5aac113e12",
"assets/assets/photos/image3.jpg": "76db32f9ad8be0a100ce36f8c4ba310d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"favicon.svg": "12ae7ce89d1c7000b4c4663981d654bb",
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
