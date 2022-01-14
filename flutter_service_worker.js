'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1b4fbf1e92ca2f7a99fb0701c8da95c7",
"index.html": "259473cdd0e6b3719f8f2292dabcdddc",
"/": "259473cdd0e6b3719f8f2292dabcdddc",
"main.dart.js": "5baf51b74c25e2aada9bd4bc6fc240f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "acd8d03db460d881898236c87f7c8d76",
"assets/AssetManifest.json": "71b919341d6998744f7c012c4af8a430",
"assets/NOTICES": "179330996bf61c82d6e33582753637c0",
"assets/FontManifest.json": "ad363d4f7b60ef141a0a28a8bf8672b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/SF-UI-Display-Regular.ttf": "08397c215a9e579b48e778a2fe9b6214",
"assets/fonts/SF-UI-Display-Ultralight.otf": "564c75345b4e8a09a13b3b872e5ba43a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SF-UI-Display-Black.otf": "63f9e85acd5f75ff050441bf589fd2d5",
"assets/assets/task.svg": "ef76b127f51edb16e1c8f5f3a80a1afc",
"assets/assets/receipt.svg": "3cc085dff24ba32e442f2d91cfaa07dd",
"assets/assets/checkout.svg": "e1e71aa5c88cfb9c137fb91914628196",
"assets/assets/wellcome.svg": "e5c4ba08c1a82ef1dc0c72885b61ca05",
"assets/assets/no_data_project.svg": "6a4fef67b26aeca77d6e52ce4144bdf6",
"assets/assets/nopayslip.svg": "37eaaeb7227c7b8a335751559cda64d0",
"assets/assets/google-maps.svg": "de310801d79a6ee81ecf8b45bc54780c",
"assets/assets/pyslip.svg": "1462f937a1198cff1a8838bbea1cc7b2",
"assets/assets/gallery.svg": "b37dc6ca9d33acf9581da8990d0e124b",
"assets/assets/emplyee_maps.png": "58ee0c6fc5b2f35327b4f33ebe0516ac",
"assets/assets/login.svg": "7cfd4e21416983efa66da91cb44b9c29",
"assets/assets/home.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/check-in.svg": "aefb1cba8fde5bdcdea781113d5b023d",
"assets/assets/employees.svg": "d1d4524e1199d488224d5c4aece704b6",
"assets/assets/splass.jpg": "d69a58d59a340396ac6f06e4712fee75",
"assets/assets/photo.png": "66550a11aab753ec42bc745948627b77",
"assets/assets/leave.svg": "78df328376f47c17e588fb0b7fa1b485",
"assets/assets/fingerprint.png": "4cc5df29c5647ea5e02cb9faf4c05f78",
"assets/assets/nobudget.svg": "abe63c21e9b88f90f51398f042db87a2",
"assets/assets/absent.svg": "cbd4674b802b5bc04f3e574ce982031b",
"assets/assets/absen.jpeg": "fef98f155a07c2070d7b0b6d6c28ab4f",
"assets/assets/permission.svg": "96a12b73a315f9bb884a24eec82cf147",
"assets/assets/notification.svg": "8790c2b00fab925eeac90f83d7cbdbe4",
"assets/assets/budget.svg": "c79b36def6a2a61d933f748f042b076d",
"assets/assets/budgetin.png": "bce14ba9e4c841f6f68a1c0b1941d9e4",
"assets/assets/office.png": "0ca93b57f7cda69450015d796fd6b791",
"assets/assets/camera.svg": "92e346e618611922fce3097119aa76f0",
"assets/assets/map_style.json": "543cb673019b1afbec50e79c7ea426eb",
"assets/assets/sick.svg": "5434dbf6e2c854b1bc8e8e8a1518573f",
"assets/assets/splassscreen.svg": "2157eed573e5549570c0cd78846ebc2b",
"assets/assets/checkin.png": "640ca97917fe3798fb5c52076c63c186",
"assets/assets/employee_profile.svg": "6a3966fb7a834f454712c4596dd67d99",
"assets/assets/announcement.jpg": "f351709365d4b1ebb70a21130c0c51c4",
"assets/assets/loan.svg": "6c976c3868426272d995c6615d0a61f1",
"assets/assets/announcement.svg": "f1e5a05df7d29acec02433a3605a9c0a",
"assets/assets/offwork.svg": "82739d0e74324093255d20d8e87f42af",
"assets/assets/office.svg": "f71699f511216ebd4acf502e111019a3",
"assets/assets/overtimein.png": "f545fa08f3d475e47dc49094948acfb2",
"assets/assets/map.json": "4400a6e5921eda55ece914989e1598d2",
"assets/assets/budgetout.png": "dc5c69a357b9c9f81b428eea71143d88",
"assets/assets/overtimeout.png": "aa40337d7a64bff2529a9dd863a0324c",
"assets/assets/project.svg": "4627670cb8d332eb72b0e5e15e44a973",
"assets/assets/male_avatar.svg": "0c675689f904736df9b4408c1e33da49",
"assets/assets/female_avatar.svg": "31721699225819c35515bc3a7f91f795",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
