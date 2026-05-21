'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
"assets/AssetManifest.bin": "2e3c3eba81375fe328c27157aa321450",
"assets/AssetManifest.bin.json": "e7c795f47b0b6c131eface6c4f756dbc",
"assets/assets/icons/abdominal.svg": "b184a4b3c0a09767e8a272a82684a210",
"assets/assets/icons/dental.svg": "821dc096c824f0291097418efcb540e0",
"assets/assets/icons/dermatology.svg": "2e0ce0a73d2e8554cd165d270d5d9c91",
"assets/assets/icons/ear.svg": "0333e34eb817097ce9598227766dea32",
"assets/assets/icons/emergency.svg": "da0db308787f6052e390ec5bfa96a38b",
"assets/assets/icons/extra%2520service@2x.png": "5dda22ee20ada1351b68ab4f4590eee9",
"assets/assets/icons/eye.svg": "aa8508a9de76ac512c72cd2aebe23d97",
"assets/assets/icons/facebook.svg": "5bd4b087589bbf1bc6557fca8e331dc4",
"assets/assets/icons/female.jpeg": "d15b7eec11dc2a13436e717656e476a7",
"assets/assets/icons/heart.svg": "a345c75f6570310e4158f8ee976dee27",
"assets/assets/icons/intoxication.svg": "3b4919f1599a8ef6fac026a7b8883864",
"assets/assets/icons/kidney.svg": "203420a379fe58adcb9e65908cde4bda",
"assets/assets/icons/male.jpeg": "32aac751d5252999f19e58800c30d75f",
"assets/assets/icons/neurology.svg": "ff863c6e20c27e79d28754b026e0b143",
"assets/assets/icons/nursing.svg": "0d6680b3b008fbe7c12fcbf36a75857c",
"assets/assets/icons/orthopedic.svg": "ef288a550505affdec14e31ef5b2e6ea",
"assets/assets/icons/pet.svg": "e6f536f80a525cc62711827e06a7b14d",
"assets/assets/icons/psychiatric.svg": "ff863c6e20c27e79d28754b026e0b143",
"assets/assets/images/20824307_6358740%25201.svg": "8100c24026b414b858e7bed6cc292712",
"assets/assets/images/8611174_3929710%25201.png": "df9f981b2375146aa7b92f74ece65276",
"assets/assets/images/8611174_3929710%25201.svg": "26aa51029c0f8a38a63f329d8b3bc734",
"assets/assets/images/9019197_4059668%25201.svg": "8e6559e48d2249813c37c54edb95ec1f",
"assets/assets/images/accident_and_emergency%25201.svg": "d098908d9efc3b8003bbb908d2f30b25",
"assets/assets/images/allergies%25201.svg": "94a5d6cfb9ae823c8ae35cd3e8746eea",
"assets/assets/images/amex-svgrepo-com%25201.svg": "b6a33ccd99bb1d24f6c9d9c315a4d42b",
"assets/assets/images/amex.png": "92d9c267c80167fb9d86a9e2bb33c156",
"assets/assets/images/animal.jpg": "6dc07a27b7f95ed3d840c5fc8f58b1a5",
"assets/assets/images/avatar.png": "dfed516a852f6eaef48db3a59deca7e3",
"assets/assets/images/clincs.jpg": "84ae60972493f003ff54cbb1f5ed8e25",
"assets/assets/images/colon%25201.svg": "623e295b871bcd6e473d8de220dfaa16",
"assets/assets/images/community_healthworker%25201.svg": "68d91c8f33991eb878379fbcfa125e84",
"assets/assets/images/coughing_alt%25201.svg": "4f3213ef35de1cf27f0c83449f020062",
"assets/assets/images/ear%25201.svg": "342d493f4250c5ea373360294895e3bb",
"assets/assets/images/eye%25201.svg": "395cdce857ea24b79260da850e7a54ed",
"assets/assets/images/female.jpeg": "d15b7eec11dc2a13436e717656e476a7",
"assets/assets/images/Frame-1.svg": "956c0343d447d883352c912c27fbfcfb",
"assets/assets/images/Frame-10.svg": "7eeb204d3d01e7e0ad174f805ec80e90",
"assets/assets/images/Frame-11.svg": "2ab6cafffabc95d3ac0d849150113767",
"assets/assets/images/Frame-12.svg": "8d6b3dcdef7dce0f7475d2690900954e",
"assets/assets/images/Frame-13.svg": "05e12c3e7a7e8fa6df84df954eefce2d",
"assets/assets/images/Frame-14.svg": "07a65638354eb258fb4364d8582fa5d2",
"assets/assets/images/Frame-15.svg": "5e83f0a571c9470f8cc63d0a0af5d8d6",
"assets/assets/images/Frame-16.svg": "72d589781b338d386734eaf1af1e5b0d",
"assets/assets/images/Frame-17.svg": "a26450c6840dfdd1abf490a99bf5c817",
"assets/assets/images/Frame-18.svg": "b422255911b3e0fb2d5130ac450581b9",
"assets/assets/images/Frame-19.svg": "9972dcdbd3ed5c2c3460cdce1f3e6090",
"assets/assets/images/Frame-2.svg": "b2ba823d7fbd6df9a1c447ad2d13e192",
"assets/assets/images/Frame-20.svg": "2b4677cac4ebaa55424172ebf4a1f37e",
"assets/assets/images/Frame-21.svg": "c0f4950ff74301ab78cd08d42a9b9423",
"assets/assets/images/Frame-3.svg": "2b4677cac4ebaa55424172ebf4a1f37e",
"assets/assets/images/Frame-4.svg": "e63e46f327323726264841c724438c51",
"assets/assets/images/Frame-5.svg": "ccebbf84239d0df22ce4d1ea6ec019e7",
"assets/assets/images/Frame-6.svg": "2d542011a67ec5bb3158eec252febc42",
"assets/assets/images/Frame-7.svg": "7835ad3968eb51ba9ac848dc75c6741e",
"assets/assets/images/Frame-8.svg": "fba38782f7f2cf19432ca49cfbd17897",
"assets/assets/images/Frame-9.svg": "930c46f1cf4d63e9420d73343871295c",
"assets/assets/images/Frame.svg": "32bf9d4b39b1b9ddab373e2580e9faaa",
"assets/assets/images/guide-dog%25201.svg": "38fd4414bde23d130a69f7686b1c4407",
"assets/assets/images/heart_organ%25201.svg": "b9be27493a16c66116f05414c38b960d",
"assets/assets/images/horizontal%2520color.png": "5394f489b975990565f614f0ba033277",
"assets/assets/images/idZc1RFBzO_logos%25201.svg": "30b116640fc4ccc8c04d4a1a0a269285",
"assets/assets/images/instaclinic-logo.json": "9de8a6a78236952c257f36654a71dabe",
"assets/assets/images/intravenous_drip%25201.svg": "544a354b70d68d55d17bb34f50ce61db",
"assets/assets/images/joints%25201.svg": "c7c71a244e37815fc514d200eea767dc",
"assets/assets/images/kidneys%25203.svg": "6a58babd60e2ec9a5eacddcfcf272e00",
"assets/assets/images/liver%25201.svg": "8b872ddeefbd6b0ba923b047286aee84",
"assets/assets/images/logo2.png": "105a2bc4a2e82ddcf53b435602434b74",
"assets/assets/images/male.jpeg": "32aac751d5252999f19e58800c30d75f",
"assets/assets/images/mastercard-svgrepo-com%25202.svg": "412c8ce379350c43ca11f07a79e8f6a4",
"assets/assets/images/mastercard.png": "c7034032071c31c852a811bd550ed9d5",
"assets/assets/images/mental_health%25201.svg": "41f8f087a15982c1bfea9708b97f8225",
"assets/assets/images/nerve%25201.svg": "7d2968dc60c1b5ffca919360c8dc301a",
"assets/assets/images/paymob.png": "5ea9f40adb99e78d24d772dd37f4181d",
"assets/assets/images/poison%25201.svg": "0c6507ccad660c4ebd17d2cfddb49379",
"assets/assets/images/profile%2520icon-1.svg": "d2d158c12fc931088de88a1d0501841a",
"assets/assets/images/profile%2520icon.svg": "e8e3906e53408d194dfe65d7a4155bf2",
"assets/assets/images/special.png": "477b2b33842c8555e57ccbfefe634511",
"assets/assets/images/tooth%25201.svg": "670dd5fb5158ede1548b3c68c0548a66",
"assets/assets/images/vertical%2520color-2.png": "b826d8b3cba96adf421f6aa5715b7d9d",
"assets/assets/images/visa-svgrepo-com%25201.svg": "557085c0899072ed76a679af9fde9c61",
"assets/assets/images/visa.png": "b6a0e958cdbd70663e9cb523ad3b9306",
"assets/assets/images/wave%2520BG@2x.png": "5b509b0ed6df5a495e0d6a1ae5b6344b",
"assets/assets/images/weaccept.png": "3835db4a04e3bb1f45aeec12b83d9538",
"assets/assets/images/whatsapp-white-icon%25201.svg": "5dcede46ac38876defcb695d6415950b",
"assets/config.env": "e76dd564b602d9fe1848374712e1fec0",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "251249155b03d232bb8ca75c0384176c",
"assets/NOTICES": "6db977b1e4ce3296f639cf39350bfa87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "950e358c056a65a3fe2c55fc6b76779a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "d27e66928fc257409c5b285ca140647d",
"canvaskit/canvaskit.wasm": "0601f94e5ba7422d7d0f15082f291f59",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "c21f552d607bfd35d6c2c65e7594e17b",
"canvaskit/chromium/canvaskit.wasm": "a3ac017bb86e93f8e7aa79afdb9a6a7a",
"canvaskit/skwasm.js": "95f1685cbe3a3e1d94cac24eb0148a02",
"canvaskit/skwasm.js.symbols": "1a5b8c8bd31b6b53fd8a420bfc634397",
"canvaskit/skwasm.wasm": "87c3f232cc3c98bc37a5857ce259dcb5",
"canvaskit/skwasm_heavy.js": "53b1d7d620269ae543e0dc5311a07f49",
"canvaskit/skwasm_heavy.js.symbols": "3b16e8e140eebd4a10c80852be7e9354",
"canvaskit/skwasm_heavy.wasm": "7d6fb8111343b68829a36dfba156fc57",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "35408b1be0f5de68cc5d1c5175d717ed",
"flutter_bootstrap.js": "f70e02f28b7d89c491654fcf0ad20d1d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "94c6cf351b0dee65dfeacf9ff2f944ab",
"/": "94c6cf351b0dee65dfeacf9ff2f944ab",
"index_final.zip": "b03ee24c08af20a4e18de9c1a28aedad",
"main.dart.js": "dcb867d5f80b57029eaa988ff5a16723",
"manifest.json": "719d0ff6eae49b4fda883ba541443762",
"splash/img/dark-1x.png": "e8de9adfbd812a09ad0275fb539c0500",
"splash/img/dark-2x.png": "92392bbc9e6f9a822f51772513f779cd",
"splash/img/dark-3x.png": "6fc123680d97a4dbfdf85754f3e7b2dd",
"splash/img/dark-4x.png": "431c23b291b3e5e3e7e8897b0eb79a72",
"splash/img/light-1x.png": "e8de9adfbd812a09ad0275fb539c0500",
"splash/img/light-2x.png": "92392bbc9e6f9a822f51772513f779cd",
"splash/img/light-3x.png": "6fc123680d97a4dbfdf85754f3e7b2dd",
"splash/img/light-4x.png": "431c23b291b3e5e3e7e8897b0eb79a72",
"splash.zip": "abba60150b825c2f1226fc47b7755da8",
"version.json": "c1a8a419c257d95a5641c1b100628c55"};
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
