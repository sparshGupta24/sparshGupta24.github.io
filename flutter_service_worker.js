'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4832ccd3b64ccacfa63929722867decf",
".git/config": "8062261fc79bd307c1d152f51b48f34e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "7967611656d4d748c7b43aef538fa68f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebdedea2ec90779aba5137dff5eddca3",
".git/logs/refs/heads/master": "ebdedea2ec90779aba5137dff5eddca3",
".git/logs/refs/remotes/origin/master": "177d265f5ae923cba8618cd0a1f7bb8c",
".git/objects/03/13968bdf6ee1fe8f85063e4109def4c2859c4a": "268546cc73f9241649593514b8756abb",
".git/objects/04/5f8d0525a8d56f853c68830cbef12cb6a7bbdb": "d4a87fa843b15c09c316718584a73384",
".git/objects/08/e75f25140ce18e0b8aededbd4eb6a73fe94ab3": "fd059d1e35037770858c7ce5fa46b99a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/3c5aa795464b92a404040a174389ebe3737c17": "d046bed4cb37c873fa62bcd80ca7a800",
".git/objects/12/daabdcb69a51b2ee521d1dc873e31589783a43": "6a842e7b45ec240a86d7881a5d220606",
".git/objects/1e/84f42fa8e6bfbcdcb7a7c14d15e2abfeacc8aa": "9f7440d689d6304c037e0e0a6bcff7b2",
".git/objects/1e/a707babf52d54df04cc5e8f7a13b44185e486a": "260cf8a5e6747b5c67e25e2b25dc157f",
".git/objects/22/16be41eb1f11906c558d6a659fb559fc83445b": "0aeff922a386be0b8fc82858473c7f21",
".git/objects/22/b2f56cf970b5732ffc98f6d0128f3401b057e3": "83b5ab09b0936a5c5434a7ed90e8d18e",
".git/objects/23/2491c12073766c6205c473d776f64f49e5cf46": "96d43a9755442c6fdfbeaa7ba385193e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/85466692230a3425368e58c4499b30389da8d4": "b85c7ddbb75cad33095efc627e8d0ec2",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/541c5c436d9c5a7ada5484051fd0a9e69cb594": "ea3877c7c7702da2189dc11ddfd33b76",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3f/2d43302a46be6d22114380603800dc601651c2": "2983882479cb06e45a67f8ef2e1dcdb9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/75af8d5d3de0af3f7e69dde84dee1f6c3ba2dc": "78a051644168aa4e1b0cb24db466bb1b",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4c/8e750a217969b63843901dc7aa6eca85d85947": "e9ffed76e1b02610cc05918a28956f74",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/dbf76f95a530c4019763cc8b8fcccc9d6c4e8f": "66ebb849f2e411a56393119e7047900a",
".git/objects/57/e34f0ff4fbe33b12c9113ea45537d3de2d6eda": "f88eed3f33f28fe2d33d0eb408fdcd48",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/6a/60c7db23dde62f8c40929f432d57201b294926": "9c38e83895cf9e366b3bc28a3c86db2b",
".git/objects/70/2e98dc81c802b4cc4a888182cd86be9c431c4f": "a471c6c074adbd53e28098277d8277a3",
".git/objects/71/33f84a1cf4fd32b8fa0a5424653a72d5742346": "e8ecaef9d73c5fdb4f9778db033fb8fb",
".git/objects/71/c54dfddcba5d2e13cdb561c3d69b8bb0e1e6ca": "a39ede4ef3a9fcf0ab1b2913fec0b603",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/c7d0fdbcc395d96babdd9099c1c06f30bd0791": "a687fc7d16c4edd37133899534a92521",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/a0e8fb50b215878a834a6e7f627c41acfa260e": "de62fee16a2b1afb4f6cffd3440690d8",
".git/objects/7e/69c843cfe496192eb0eda73ced299bc4f6bda8": "33267f976db8f7123eeee1dd64e1c94b",
".git/objects/84/282a2a53d79e73ce13a349c5ed6461ac37f4f8": "65914942a5aecccc5af8f2a1cc2a6b42",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e98adb7795a23524f06081999fb60ca465432f": "b82c8cc279a476e545f3b2a6425178e9",
".git/objects/8e/6cb79c5a7519b1decac92f57790c809a95cf0e": "b0354f94ba20e3413b1f63c3d8671da5",
".git/objects/8f/1ff90f7bb2743dfbc40d54470dd0c09a6c3b5f": "f563c316e5846c412fb8d3e864c98acb",
".git/objects/90/60b48de5e5a7a9821a16ec3377331676647843": "91c95e1fca88b0065ec57a192d18f10b",
".git/objects/90/717de1ba218e1df375c27543889085e8d4cec8": "a1da3f27f589f3aaf03ee9b3e1df9f5d",
".git/objects/94/8c7a1025c11e8ff54761a3034bdcf62c827461": "07bb2e7f2a5b86febd5465db2226c0a4",
".git/objects/9b/8f9b4e6da2d7de9ba12145151fb5fef18d052b": "168e80b6e6e215d18886c335f1df8502",
".git/objects/9c/86f582e2fb814e47da8e89882bc365e3f7109d": "a5c7a0f5d3b353e99e1d69048ea2825f",
".git/objects/9d/8aa4f359f64ae79b6a7373d7f4a7fb3b72b10d": "f489d25c6d74c9fba5266cc578547417",
".git/objects/a0/f0c6b0d90b34891c30891826ff2a5eae6d6053": "28ed4af80a16551e844e1ef5a810088f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/389a9a7db517d14b447fa7c6fa1e549c9f16c1": "48329551cd80b9b868b60efcf2d7f56e",
".git/objects/a6/6d7dd4adc6f285bbfd98effb90e1e52f4881e0": "09b1e401ea6d91d95c3da22ff3a968ba",
".git/objects/aa/3a2ec79d687b52017ef5a712cc1e13699b9270": "ee0087ca716f663cf2eb35439d95e2b3",
".git/objects/aa/88bbad8bd8fedcbe691df2123da0e0ccd400d1": "9da01e5528ea82456119ae3efa711779",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/62bf365bef5d011922490ede7b215da62e36a6": "4e8f1420a4cb849b0fccaeda474a72a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/572f2c2071a590bc59dae1b2ce82418c728ec0": "f449d100e3786447a35d1cf839ae255b",
".git/objects/c6/2c1f95451f25b352cccf95c1a9032372b7ba17": "cce387a2e0a64b284a651533a4c5ea04",
".git/objects/c8/72058874519f89097c34eef8125187e95febf9": "fe3c6000a5333e36e901e7a8813d28a4",
".git/objects/ca/fa1824c8bbe7ea01235adc586010c8d3257894": "52dfde36a51eda4f9e659f05691ef061",
".git/objects/cb/daed88bb664c3a2849cefa2af6cc665f6d0183": "a139e5b1484d76a7c3a37c297e6781b4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/38d74e761cf0e60a8b4f33c6b16b357ccd8888": "6653f9d12348eef69517c89f048e0ffa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/82ca662774cb6490218254f825247d50befbd8": "f7c3a25db35028b8f6ca117d98f7a62f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/6330a7c927e9f54e28ac37a88021dffebff539": "81681cc4157b68c64dafa93e8d5760ee",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/d5502da87492de9406058272e059a5afb67f9b": "21b05e3b8d9caa36c055acfa87fbe1c7",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/43aea989398b8ad0bbfbd763feec15d19cb9d5": "68cc68d3ea4267544f8cefd1e9e8155c",
".git/objects/ef/ba6c4ab7f76b52c8616a687e123b666f749354": "a2bc2e93e2314ffa755d50e0f06bdbf1",
".git/objects/fc/be16bc91423e4898a439d3a958522f8a01f4e8": "2d862a1e662ea765b3cc4e82f15d916e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "c4c144c246589560bed5b83d850d4ad2",
".git/refs/remotes/origin/master": "c4c144c246589560bed5b83d850d4ad2",
"assets/AssetManifest.json": "e216d6ad823551e24331511820836d5c",
"assets/assets/behance.svg": "333fff8ec8b31bc170047c5840038746",
"assets/assets/BG.gif": "e931b3aabb3d4f76ea9ddc0d0bb43121",
"assets/assets/college.png": "692ee40da1317e2a048a7adc24c7f62b",
"assets/assets/dp.png": "66e560695599f6000b610bdf68538290",
"assets/assets/github.svg": "2f55debd98b4040009b3ab545969577d",
"assets/assets/instagram.svg": "ac26d95bf0a8fd4b110a73ad0f556c42",
"assets/assets/linkedin.svg": "c49133724ed00e78e1b06a1d62e30012",
"assets/assets/pic.jpg": "9899beb36b064b56fc18154f8b329d5a",
"assets/assets/Projects/20.jpg": "6a73d151b6141029e6d52ad609abac9c",
"assets/assets/Projects/27.png": "c85111d2b43a95ca9e0db749e70dd121",
"assets/assets/Projects/4.png": "6baabb51f664954101e8dc5ab8d0e1df",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4ed0b163e1310b492d6f1004b283e40b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "72e82c01d1af10f6f7ff9f05541d631f",
"/": "72e82c01d1af10f6f7ff9f05541d631f",
"main.dart.js": "2c66944d04559c80abf04d55aab8d8f8",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
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
