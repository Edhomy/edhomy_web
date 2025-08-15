'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9af190aa27a2bfc40601c2041b261290",
"version.json": "980547175e325fe622a3362b84d55b6a",
"splash/img/light-2x.png": "d29eb70da62a635a8b9bfe413d5992f6",
"splash/img/dark-4x.png": "1449ff08b75a911d2592812abb75a0e2",
"splash/img/light-3x.png": "5dfefa0d491294f4f5d61487e09c2e8f",
"splash/img/dark-3x.png": "5dfefa0d491294f4f5d61487e09c2e8f",
"splash/img/light-4x.png": "1449ff08b75a911d2592812abb75a0e2",
"splash/img/dark-2x.png": "d29eb70da62a635a8b9bfe413d5992f6",
"splash/img/dark-1x.png": "7931d68d932dc52b75eab149d904272b",
"splash/img/light-1x.png": "7931d68d932dc52b75eab149d904272b",
"index.html": "ce8da4df1559515cc11f3081f3efa19b",
"/": "ce8da4df1559515cc11f3081f3efa19b",
"main.dart.js": "6859614f7d552a55983c9cf2dc9a05e3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-192.png": "8424864e845fed6e862ad0cee508244b",
"icons/Icon-maskable-192.png": "8424864e845fed6e862ad0cee508244b",
"icons/Icon-maskable-512.png": "bb4f04a68d644791399ab66ea313ed6d",
"icons/Icon-512.png": "bb4f04a68d644791399ab66ea313ed6d",
"manifest.json": "89870ee4a7f0ca47ae5f22d04bcb18bc",
"assets/AssetManifest.json": "cf7c8029e453e7374937ff4cf9fbab50",
"assets/NOTICES": "2887bc74891cebd3c0ad27e62daa2efe",
"assets/FontManifest.json": "538b1f45dc619a237e05c5021d97d35f",
"assets/AssetManifest.bin.json": "87acd084498fcdd8d5f3272b4552225f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "389fc38284b1b23ad0b0bba4b3671c20",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9ce3d4a5b700ecad463cd91774194c90",
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
"assets/assets/photos/image8.jpg": "e9f337e502d8c872f2c091cbc0045120",
"assets/assets/photos/image9.jpg": "50d201afd3876189570e43fe04fd3427",
"assets/assets/photos/image12.jpg": "43cad456a24d434505223a7a2c911fb8",
"assets/assets/photos/image11.jpg": "22227186ed217ddd77ce60b293a6baaa",
"assets/assets/photos/image10.jpg": "dbc90a3732f89de946a85ced9c394ff8",
"assets/assets/photos/image7.jpg": "94bc6ce00a83443a0a5dc5c4dd27a8e7",
"assets/assets/photos/image6.jpg": "9466383d9611e7c74bdda1451a683ea9",
"assets/assets/photos/image4.jpg": "359146e53678aea626b8830fdb192abf",
"assets/assets/photos/image5.jpg": "e7bb6c6456b3232e297f87e0ef3c3125",
"assets/assets/photos/image1.jpg": "8f5e22d649c3aa464f0236c2451cdc6b",
"assets/assets/photos/image2.jpg": "a9aaf24bfdc260ab10d24745dbb2d6f7",
"assets/assets/photos/image3.jpg": "d9998aae80b99bc12643f4aa497172a8",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansLight.ttf": "9fdb7fe1c6114fac5ce771d33f5b95dc",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansMedium.ttf": "d68c561bec0bcba82f4077af34396997",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansBold.ttf": "42fb882132e7b91a2d4c6e192b97308f",
"favicon.svg": "12ae7ce89d1c7000b4c4663981d654bb",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
