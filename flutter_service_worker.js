'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "15aa868f80e24eed9ed5d99fe351081c",
"/": "15aa868f80e24eed9ed5d99fe351081c",
"main.dart.js": "cdf76b9e710e9f8bd564a1ec941dba96",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
"assets/AssetManifest.json": "701ba10c615f4cb3e3b7aaa553fa3d34",
"assets/NOTICES": "badc96afb77e00aef99e721d38ab0745",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/cityfruit-11.png": "aa288c3e8b2852c2fa289e395e42c5f3",
"assets/assets/images/xuberance-2.png": "213774c596d173c6b11274480e2757f9",
"assets/assets/images/melodong-4.png": "ef38fd8c202c310acfb2a4c22d150b53",
"assets/assets/images/xuberance-3.png": "a488a8eaf8992309c35ce7f01015bfe6",
"assets/assets/images/cityfruit-10.png": "6fa70ba11fc0a74ecac0b6f1f2c6be67",
"assets/assets/images/cityfruit-12.png": "7b251f9f5912b7b361bff3cd6c102690",
"assets/assets/images/designer.png": "3a302283aa1d319fe5137887bc648346",
"assets/assets/images/xuberance-1.png": "7681563579c3c7d0afc760a6f2ce2f9c",
"assets/assets/images/zam-4.png": "3250d583c91f5941c8097f1426f7d7f2",
"assets/assets/images/cityFruit.png": "ab4c463ca11763b748eec45164570f71",
"assets/assets/images/melodong-3.png": "daacb2f2f311051b8eba4a917d1d0d39",
"assets/assets/images/xuberance-4.png": "d2e2ba05dd152127546dec8e451b8e35",
"assets/assets/images/melodong-2.png": "a949e0c7e9e366070622183d9c4d728d",
"assets/assets/images/zam-1.png": "d9023c4b91917dd6056a8199b4cb9c5b",
"assets/assets/images/cityfruit-8.png": "788f1c0a6b70275382904f80ad87991d",
"assets/assets/images/xuberance.png": "202841d4877832ad406f356ac9b13825",
"assets/assets/images/zam-3.png": "bce80e0ddec653a65d7a21eecae2b32f",
"assets/assets/images/melodong-1.png": "4bc2df8b8f6d1b95002a7cb1564a62a4",
"assets/assets/images/zam-2.png": "40f1512a00bf0963a7cc5a6d127d01ba",
"assets/assets/images/cityfruit-9.png": "db624356ce9ca3757cab58b7dc485b3a",
"assets/assets/images/surfer.png": "8503964d4e36098386954c4a0d306f1d",
"assets/assets/images/zam.png": "09fc2240fa4728313e5925ca49742931",
"assets/assets/images/xiaomi.png": "c379d10e6a6534230da33c8fb2441f82",
"assets/assets/images/sde.png": "15d73434a6c54942fe4c4ce76551caca",
"assets/assets/images/melodong.png": "f707fe6c962b0df97dc8e3014421c130",
"assets/assets/images/cityfruit-4.png": "e8b70e7300fa3ca85da98b7b37fdeafd",
"assets/assets/images/cityfruit-5.png": "d95b5441d49e891fae5a6843e83635c0",
"assets/assets/images/dad.png": "207ba8fecfac8bc6d7a2d3d591034ca2",
"assets/assets/images/cityfruit-7.png": "0c1af989cfa91aefb18769b3ea5c1848",
"assets/assets/images/cityfruit-6.png": "4d1184656f1e73343f6f8b2816a9aca0",
"assets/assets/images/cityfruit-2.png": "5b8d714ed7b13b17e6221744bf98ab63",
"assets/assets/images/cityfruit-3.png": "a47f4f137da71ce9affe0a1cee869f3e",
"assets/assets/images/cityfruit-1.png": "bdb951a38555e8f3b870c0cde47ce28c",
"assets/assets/videos/xiaomi-1.mov": "2ea8a23c116cd20b93224d48a86d45cb",
"assets/assets/videos/melodong-1.mov": "857c9caa00fd4569affdc892049f21ba",
"assets/assets/files/cityfruit-brandbook.pdf": "cf151ac3a2737ffcfba7be29d04fa6ad",
"assets/assets/files/resume.pdf": "d973b9dea2a9ee22ecf78c20f85d3ba5",
"assets/assets/files/portfolio.pdf": "b2a9a7aa780620bd2c668c6e214d09b7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
