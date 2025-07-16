'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ec74d1b04d02cd924ad4dbeaaeb2e71a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/17/24e4512faf1636ff4cc2d74cb8d537e0e787db": "60a2b0f1613e27f799e896e62abb5b14",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/942e324237a326ef6badcdd46f93a35fb72c54": "a1b49471ffd7c9b0a4d756ee5280b34c",
".git/objects/57/323ab3c72ae69fbc77d22386b3e4d3da74490c": "7d27828a2ca629edafdb6d96f3bc70ab",
".git/objects/a1/21459168a9ee2c7a0562c0ea3113762cf4701b": "3c801661e0483a0ccea96b5afaa6d9e7",
".git/objects/d5/0375dd6303e58691841540600f47b04d87988d": "8ccbca749a7fc98d2d92e7440542ee5b",
"assets/AssetManifest.bin": "6d2ebf5b451287572b8dc59eb9405f18",
"assets/AssetManifest.bin.json": "39aca48b10c0446c9f2f3cc5a91667ea",
"assets/AssetManifest.json": "95ebc3480019f0182e95bc86d7ea9cab",
"assets/assets/fonts/Cairo-Black.ttf": "2374c281704270d2e3008b421ed80885",
"assets/assets/fonts/Cairo-Bold.ttf": "19a30f18e32cf8dbb9d0cfcee9e2c01e",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "461a6eeaed7944175bd3b03209b6015a",
"assets/assets/fonts/Cairo-ExtraLight.ttf": "c78a99987273c45c6f7c6d7bcd2f7f76",
"assets/assets/fonts/Cairo-Light.ttf": "a6793d94c6568946c4755901ef0f04ed",
"assets/assets/fonts/Cairo-Medium.ttf": "76f957349a6defbef1b6980bc4c8892a",
"assets/assets/fonts/Cairo-Regular.ttf": "94c4feb516a9bd22a5ee417f6e099c93",
"assets/assets/fonts/Cairo-SemiBold.ttf": "a29aa6689e17cc4920f865b1e2f206fd",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "48ebb38b5445196e567f948e132230ca",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "a96ecd13655587d30a21265c547cd8aa",
"assets/assets/icons/app_icon.png": "fa891ca33ca5b16ee98e6c49c431609e",
"assets/assets/icons/email.png": "94935482aeb69791d75ee21dbaf9f383",
"assets/assets/icons/git.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/github.png": "7751dd67781c47c1f464ea790ce51bfe",
"assets/assets/icons/instagram.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/assets/icons/linkedin.png": "dda499d8edb884a5bab16b08c2a716cd",
"assets/assets/icons/user.png": "e27c8735da98ec6ccdcf12e258b26475",
"assets/assets/icons/whatsapp.png": "b22dcbacfd4d9842d8c9f5453c2f8638",
"assets/assets/images/cdws_mockups.png": "1d965ffd3e8cb9d52f000408a755b8e9",
"assets/assets/images/playstore_image.png": "5b7057a8210224461e0c304b35d47652",
"assets/assets/images/profile_image.jpg": "3179af76d4546990abfd922511e617a4",
"assets/assets/images/resume.jpg": "40be52f3b1333da1a2d527ee9a3ac094",
"assets/assets/images/screenshot_eight.jpg": "de82056f0545eb7b328e2986eda97d86",
"assets/assets/images/screenshot_five.jpg": "a11d741abb25a40849c5b740d95d183c",
"assets/assets/images/screenshot_four.jpg": "8ed81d11d8e8230e50a9eb23e7b9097c",
"assets/assets/images/screenshot_one.jpg": "f6b713e4e3d77f19b0b0de2024db9351",
"assets/assets/images/screenshot_seven.jpg": "00f01799ef0f1ef4596f355a28a6b4f8",
"assets/assets/images/screenshot_six.jpg": "f4a2194a370f190ed43fe27566631e28",
"assets/assets/images/screenshot_three.jpg": "922bc55e59f435a12c6970d5cac184ef",
"assets/assets/images/screenshot_two.jpg": "bf415149794cba5220519ae43fb0dff3",
"assets/assets/svg/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/FontManifest.json": "2f065835c52045eb52b9cd275086452f",
"assets/fonts/MaterialIcons-Regular.otf": "28b7c3e7a9ced2d3901534a28211397c",
"assets/NOTICES": "5ced7d1c7f04b66cbce1693f2611d8a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "e292e4063b114442981278ca99349b90",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "eca2ab0c520acb9c6485a0e5b0087f1b",
"icons/Icon-192.png": "a635e18c993e7e180e0a8b39106717f0",
"icons/Icon-512.png": "8cb0b0df76cd9ee8d30261d12ba9c60c",
"icons/Icon-maskable-192.png": "a635e18c993e7e180e0a8b39106717f0",
"icons/Icon-maskable-512.png": "8cb0b0df76cd9ee8d30261d12ba9c60c",
"index.html": "34fb00c9c88b26723de346cc9af1e0bf",
"/": "34fb00c9c88b26723de346cc9af1e0bf",
"main.dart.js": "4ed69dc6e591c333119c9afea6742769",
"manifest.json": "ac30527994de9d63900bc163f01149f5",
"version.json": "516e2ad42a3cdf6307d5469722fecb1a"};
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
