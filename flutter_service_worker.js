'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "729f32dbd0856987b90ea3e22a853f73",
"/": "729f32dbd0856987b90ea3e22a853f73",
"main.dart.js": "e1ee205115ea111e30fcf094e68114e7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
"assets/AssetManifest.json": "c3e5e14afedb9f9a3e2207962e7c7585",
"assets/NOTICES": "5df27ff584e517883b8d1a34726d0eef",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "60114762957c6a50d2e0cd7d2c5b7b98",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "96e2c1d3cf169f2cb35655692d5077cb",
"assets/fonts/MaterialIcons-Regular.otf": "91dc113c91ed6b450e52deeb2d4388b5",
"assets/assets/images/spotify.png": "dbfa20c82635f952bcd62cbd41cb507b",
"assets/assets/images/cityfruit-11.png": "aa288c3e8b2852c2fa289e395e42c5f3",
"assets/assets/images/mentallystrong-3.png": "69544cc1e3078b97a0a140db636b7041",
"assets/assets/images/xuberance-2.png": "213774c596d173c6b11274480e2757f9",
"assets/assets/images/melodong-4.png": "ef38fd8c202c310acfb2a4c22d150b53",
"assets/assets/images/xuberance-3.png": "a488a8eaf8992309c35ce7f01015bfe6",
"assets/assets/images/mentallystrong-2.png": "023e83894ef881c61db52228a18fa960",
"assets/assets/images/cityfruit-10.png": "6fa70ba11fc0a74ecac0b6f1f2c6be67",
"assets/assets/images/cityfruit-12.png": "7b251f9f5912b7b361bff3cd6c102690",
"assets/assets/images/xuberance-1.png": "7681563579c3c7d0afc760a6f2ce2f9c",
"assets/assets/images/marketcrash.png": "266538ae1129fbbe24f101cfd32f320b",
"assets/assets/images/UCSD.png": "7971a9bf43969f22f0061b9cff58480c",
"assets/assets/images/zam-4.png": "3250d583c91f5941c8097f1426f7d7f2",
"assets/assets/images/mentallystrong-1.png": "0fc0b4910b40fb519dd86d04fcb64e3d",
"assets/assets/images/zuo-3.png": "4dea072a44eb6db5d88946d70bda6e44",
"assets/assets/images/cityfruit.png": "ab4c463ca11763b748eec45164570f71",
"assets/assets/images/mentallystrong-5.png": "e5a0d3216b3c17afb797e42d533eb480",
"assets/assets/images/melodong-3.png": "daacb2f2f311051b8eba4a917d1d0d39",
"assets/assets/images/xuberance-4.png": "d2e2ba05dd152127546dec8e451b8e35",
"assets/assets/images/melodong-2.png": "a949e0c7e9e366070622183d9c4d728d",
"assets/assets/images/zam-1.png": "d9023c4b91917dd6056a8199b4cb9c5b",
"assets/assets/images/mentallystrong-4.png": "8e487ac0b0ca5bcd2018d67d0b6b0bad",
"assets/assets/images/zuo-2.png": "a04131f9ca6f285cca3c0a8e115ad7ae",
"assets/assets/images/cityfruit-8.png": "788f1c0a6b70275382904f80ad87991d",
"assets/assets/images/xuberance.png": "202841d4877832ad406f356ac9b13825",
"assets/assets/images/zam-3.png": "6c748fa241c3b935bde00cfd5c1eaa74",
"assets/assets/images/mentallystrong-6.png": "09f21b3dac64c6fc9ec2fddecedbfd84",
"assets/assets/images/melodong-1.png": "4bc2df8b8f6d1b95002a7cb1564a62a4",
"assets/assets/images/zam-2.png": "91290c2da62bf99624628acc1d999929",
"assets/assets/images/zuo-1.png": "7a09e1b01bf5a3cde12d8f29faebbd47",
"assets/assets/images/cityfruit-9.png": "db624356ce9ca3757cab58b7dc485b3a",
"assets/assets/images/zam.png": "09fc2240fa4728313e5925ca49742931",
"assets/assets/images/xiaomi.png": "c379d10e6a6534230da33c8fb2441f82",
"assets/assets/images/melodong.png": "f707fe6c962b0df97dc8e3014421c130",
"assets/assets/images/ucsd-1.png": "97ce866156b36bdc7ee3b43df39c0c93",
"assets/assets/images/hema-2.png": "fe274831166745e382bc22137a08d439",
"assets/assets/images/ucsd-2.png": "fe274831166745e382bc22137a08d439",
"assets/assets/images/cityfruit-4.png": "e8b70e7300fa3ca85da98b7b37fdeafd",
"assets/assets/images/ml.png": "4d285aa2a46d19410ba0b1756c1b24be",
"assets/assets/images/ajiaji-3.png": "1da0923a900d67418a88565720ad3dca",
"assets/assets/images/ajiaji-2.png": "eedb4979c0f942262cee293affbe2ad2",
"assets/assets/images/cityfruit-5.png": "d95b5441d49e891fae5a6843e83635c0",
"assets/assets/images/cityfruit-7.png": "0c1af989cfa91aefb18769b3ea5c1848",
"assets/assets/images/ajiaji-1.png": "2f6136a7956fdc91b8597a4bd0092d7e",
"assets/assets/images/cityfruit-6.png": "4d1184656f1e73343f6f8b2816a9aca0",
"assets/assets/images/cityfruit-2.png": "5b8d714ed7b13b17e6221744bf98ab63",
"assets/assets/images/mentallystrong.png": "4838209db31f4d69b7922e23b303cd6f",
"assets/assets/images/ajiaji-4.png": "9054e29e6c7af05fbb1103ea1fd94d36",
"assets/assets/images/cityfruit-3.png": "a47f4f137da71ce9affe0a1cee869f3e",
"assets/assets/images/cityfruit-1.png": "bdb951a38555e8f3b870c0cde47ce28c",
"assets/assets/videos/xiaomi-1.mov": "2ea8a23c116cd20b93224d48a86d45cb",
"assets/assets/videos/melodong-1.mov": "857c9caa00fd4569affdc892049f21ba",
"assets/assets/videos/backgammon.mov": "eedf9e6f851d5fb86838747dafb71761",
"assets/assets/videos/toh.mov": "d5da43cc42fbdb2e5307a6ddc58b2b44",
"assets/assets/files/cityfruit-brandbook.pdf": "cf151ac3a2737ffcfba7be29d04fa6ad",
"assets/assets/files/resume.pdf": "3f31aa2621b6ed87c77050afc66a99c5",
"assets/assets/files/portfolio.pdf": "b2a9a7aa780620bd2c668c6e214d09b7",
"assets/assets/files/hema.pdf": "136f25891eb4631cab0e11585695cf43",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
