/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6b846dfcce0edea27e218930045173a7"
  },
  {
    "url": "assets/css/0.styles.7cc401dd.css",
    "revision": "4efbcd2ab2d840d24e0860a4e028baa7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/1.03c05116.js",
    "revision": "6fecefdc36a42ac5dfa8030462924237"
  },
  {
    "url": "assets/js/10.01ab61a6.js",
    "revision": "bad02242e64e96f3e41898bff16f52ef"
  },
  {
    "url": "assets/js/100.1cbedf68.js",
    "revision": "5cd64c804848f2907a4c8475476fb2ea"
  },
  {
    "url": "assets/js/101.28e9718b.js",
    "revision": "46efa671b65f6b854760e7a8bbc34e8e"
  },
  {
    "url": "assets/js/102.2d2c022e.js",
    "revision": "f6f307efbdbd71bbb46d3067c34a4a10"
  },
  {
    "url": "assets/js/103.e5b2e63b.js",
    "revision": "9eeb7a188a9f225047e2c521362bad24"
  },
  {
    "url": "assets/js/104.ee38c42c.js",
    "revision": "ef1ce085b998343698d8b7d63d3df894"
  },
  {
    "url": "assets/js/105.0dff0193.js",
    "revision": "8bb8c301e2af17d13559b171ec7c9080"
  },
  {
    "url": "assets/js/106.7b7c0d35.js",
    "revision": "49caf873e1ada6beb1112f6f5e23917d"
  },
  {
    "url": "assets/js/107.79a83cc9.js",
    "revision": "1bb7b58937601a98795b99269e40a7a9"
  },
  {
    "url": "assets/js/108.010117ed.js",
    "revision": "b2dee70a4b9d72a3e7268eb988f1b3ec"
  },
  {
    "url": "assets/js/109.281864e1.js",
    "revision": "5f21abb89e6e9d99ec191a25cd0d086a"
  },
  {
    "url": "assets/js/11.a2c466e3.js",
    "revision": "0e1b3976283cc2186607c0e325a9a017"
  },
  {
    "url": "assets/js/110.f4ee8585.js",
    "revision": "d125e3b889f2465d9ada0fb7b07be7c6"
  },
  {
    "url": "assets/js/111.654a29a5.js",
    "revision": "964e3b852e43c1e6c0a995f98a69e850"
  },
  {
    "url": "assets/js/112.45f865ef.js",
    "revision": "c54f3af0257fea8c86cd56eda75ab504"
  },
  {
    "url": "assets/js/113.40d2d118.js",
    "revision": "f23a5f09767cfaa31a2b2d2e961de889"
  },
  {
    "url": "assets/js/114.26bf4570.js",
    "revision": "da2bca5b94007d1de1b20fcf04e3f7f0"
  },
  {
    "url": "assets/js/115.309da56e.js",
    "revision": "4dd02183a02d94fb551e0d4b77923d9d"
  },
  {
    "url": "assets/js/116.eeb2876e.js",
    "revision": "8e2b61aa7206683460d65531864f311a"
  },
  {
    "url": "assets/js/117.2885c991.js",
    "revision": "00e8517e11ae3466afc6bbb811148f04"
  },
  {
    "url": "assets/js/118.6999467c.js",
    "revision": "3dcc4b33065869a4f719deb6964bdb9e"
  },
  {
    "url": "assets/js/119.134a8f5a.js",
    "revision": "8456cd20844da09f537f8c50d185f24f"
  },
  {
    "url": "assets/js/12.3eabfce7.js",
    "revision": "ecd29c97566465520126bee3faccf2ac"
  },
  {
    "url": "assets/js/120.0bdf9c78.js",
    "revision": "725972da74befdd9899d5b8543368c03"
  },
  {
    "url": "assets/js/121.7bcaafa8.js",
    "revision": "7089fba23447088cefed8a7a72c4a9da"
  },
  {
    "url": "assets/js/122.0b1a0537.js",
    "revision": "91645f208f4b3fd4aa59ba055e7eb24f"
  },
  {
    "url": "assets/js/123.1b5d3570.js",
    "revision": "ac0dbfebf6759ad490880521bc1d2bec"
  },
  {
    "url": "assets/js/124.66fc116c.js",
    "revision": "315cac55e363437d41abba4b93d0535c"
  },
  {
    "url": "assets/js/125.6aa438fe.js",
    "revision": "c551732117842aca206912c9fadd15dc"
  },
  {
    "url": "assets/js/126.3efca3ec.js",
    "revision": "c325ea59b9c74d0ab65f2d7a79105bcd"
  },
  {
    "url": "assets/js/127.5a132e63.js",
    "revision": "df17d1a8c086353c1edbc1ef4a37d128"
  },
  {
    "url": "assets/js/128.1b61991d.js",
    "revision": "c20cfaca4e6942efa25bac624cec6e2a"
  },
  {
    "url": "assets/js/129.e2c3d268.js",
    "revision": "5a238df843b2539d7c6a2034a7a4e925"
  },
  {
    "url": "assets/js/13.8ff6c83a.js",
    "revision": "738189e9eeaf2f795db2b6a35bbe9325"
  },
  {
    "url": "assets/js/130.5e104e15.js",
    "revision": "e2364e186927c391b75e72e5821c4a5d"
  },
  {
    "url": "assets/js/131.f3449c1d.js",
    "revision": "6a200c84c7c2b32dc4e229c3b2209c29"
  },
  {
    "url": "assets/js/132.9f831d59.js",
    "revision": "fc4274c663ccd9d0c891363299a13919"
  },
  {
    "url": "assets/js/133.7d05717a.js",
    "revision": "ef682ee4e0d4a2d2f26898eaaad219cb"
  },
  {
    "url": "assets/js/134.43077d24.js",
    "revision": "d4508bb3079e29c1b085249e81cc27fc"
  },
  {
    "url": "assets/js/135.280e2ec9.js",
    "revision": "b1e02b1079afa07554f4e591339b1bca"
  },
  {
    "url": "assets/js/136.54e21273.js",
    "revision": "4ea735104f3ead9bf788ae919b0075b2"
  },
  {
    "url": "assets/js/137.a880e84c.js",
    "revision": "68da5cf93ad6fde0975b309f625388c8"
  },
  {
    "url": "assets/js/138.2a525630.js",
    "revision": "4911418b5a9b51b1b8010b6890a2a1fc"
  },
  {
    "url": "assets/js/139.02808761.js",
    "revision": "277e9309acb5f340084bc9f3a62706b6"
  },
  {
    "url": "assets/js/14.957bd6be.js",
    "revision": "e4f5b652c06df95336bb916dda8e84ac"
  },
  {
    "url": "assets/js/140.69a9f6f7.js",
    "revision": "c482fd9e0dd5d6d3f5939a149a1eb822"
  },
  {
    "url": "assets/js/141.ebe38f78.js",
    "revision": "5814fe7e69abd19c71969f3efce9aec2"
  },
  {
    "url": "assets/js/142.c8626d5e.js",
    "revision": "943e0da7fc2551684d1bfac3d142bd89"
  },
  {
    "url": "assets/js/143.8bebe021.js",
    "revision": "cf441e9d9e61c4a3023f5c6b0459b306"
  },
  {
    "url": "assets/js/144.bb2ba59f.js",
    "revision": "20ec3d85d4bffaef37d6689c56d4cf47"
  },
  {
    "url": "assets/js/145.da1587a6.js",
    "revision": "a0b63602c5a97657f52e98e3f7cc3c67"
  },
  {
    "url": "assets/js/146.8a86c878.js",
    "revision": "b55cc541568f78590161646bdaaea70f"
  },
  {
    "url": "assets/js/15.d4f1f9b6.js",
    "revision": "b6bec20ff9f02ba6e769fb46e002f180"
  },
  {
    "url": "assets/js/16.a57803e4.js",
    "revision": "7b5c5650186f12330baf5d2f521583e1"
  },
  {
    "url": "assets/js/17.29ce2419.js",
    "revision": "2eb9f8223fb8420eee59ae0ffd433f9b"
  },
  {
    "url": "assets/js/18.94108ba2.js",
    "revision": "338f1e51057a2c3d9293e72b019a1d5a"
  },
  {
    "url": "assets/js/19.dfb8dd20.js",
    "revision": "1b3e93efd78d458fd4a669caeb077e20"
  },
  {
    "url": "assets/js/20.114d19e4.js",
    "revision": "dc65ed6411c664c065bfb1634b837139"
  },
  {
    "url": "assets/js/21.83c2c058.js",
    "revision": "884b7b67de853f467a8199b39754c4b0"
  },
  {
    "url": "assets/js/22.c3089e56.js",
    "revision": "f32a590dd32ef950ac638f878a25858c"
  },
  {
    "url": "assets/js/23.58572740.js",
    "revision": "d6f0872061515f754c06bcea5e14b85e"
  },
  {
    "url": "assets/js/24.a14a3545.js",
    "revision": "5e5952020e75f506badad59b13471e77"
  },
  {
    "url": "assets/js/25.104f98d6.js",
    "revision": "dc12bcf2d3ff2b102e4343859e57f927"
  },
  {
    "url": "assets/js/26.36c00347.js",
    "revision": "28134ef7af9dfbd851b54feac828fffb"
  },
  {
    "url": "assets/js/27.8bea7d17.js",
    "revision": "752aeb8d39775ebae8eeb3a1e4264ce7"
  },
  {
    "url": "assets/js/28.4265c17f.js",
    "revision": "6448686d85602bb63c028fc1b0ce0588"
  },
  {
    "url": "assets/js/29.c676fb7e.js",
    "revision": "ae049171872db9280acce2fe099ee172"
  },
  {
    "url": "assets/js/3.7162c5bf.js",
    "revision": "5e0dba266029130334e2ce38536afc78"
  },
  {
    "url": "assets/js/30.d00abf11.js",
    "revision": "c59f151ea21add424d20534c61a6a773"
  },
  {
    "url": "assets/js/31.f2c89cea.js",
    "revision": "524c593c1b4c077c430c1fd0b3af16dd"
  },
  {
    "url": "assets/js/32.79f336cb.js",
    "revision": "2e6a85d60e1203737b02a8aa9eb28fde"
  },
  {
    "url": "assets/js/33.c38fec32.js",
    "revision": "41ceb0c2c22b1da57ff62e1283d7c667"
  },
  {
    "url": "assets/js/34.5bff0a91.js",
    "revision": "aebd78071621c7dcdae7e14d080f1fa7"
  },
  {
    "url": "assets/js/35.7bb68c6f.js",
    "revision": "cc7488e7c12a5471c70a46c9eca8b9ea"
  },
  {
    "url": "assets/js/36.87a46394.js",
    "revision": "7d8f819b622f5a9542d2e6951413f0ea"
  },
  {
    "url": "assets/js/37.9768363b.js",
    "revision": "5c73188eaa2fcea13f8f78203450c5ad"
  },
  {
    "url": "assets/js/38.3198baa4.js",
    "revision": "63f72f643d37e22d7d4557f14420bff9"
  },
  {
    "url": "assets/js/39.cd6d6dde.js",
    "revision": "73a2dfb83f8cccd63aafcfef720d9660"
  },
  {
    "url": "assets/js/4.c6060c63.js",
    "revision": "be323ccfb5cab90a3cdcfc9418f754e6"
  },
  {
    "url": "assets/js/40.93c4a545.js",
    "revision": "fc0738116b4cc6257ef725ab3d2745d5"
  },
  {
    "url": "assets/js/41.d6afae7c.js",
    "revision": "de1c009c62b11b9f023deb9f0c24e936"
  },
  {
    "url": "assets/js/42.728dea78.js",
    "revision": "30b80eac6fd8b44ed1caa24d1e7f03a9"
  },
  {
    "url": "assets/js/43.faa447b9.js",
    "revision": "e5aae76f72d98a795f4e7808774c1dfa"
  },
  {
    "url": "assets/js/44.87c94727.js",
    "revision": "1df77d58754b55659911d25ea9a3b2f9"
  },
  {
    "url": "assets/js/45.a9e344de.js",
    "revision": "32a8b8dfd30c7bc63a549314201f9cb8"
  },
  {
    "url": "assets/js/46.ec4a3e7d.js",
    "revision": "33134df9b24248df1f59daa226e248db"
  },
  {
    "url": "assets/js/47.224dcede.js",
    "revision": "b8b5492c2b71d37f3c7e6a79c0c5c2ae"
  },
  {
    "url": "assets/js/48.b6b411e3.js",
    "revision": "c1efda8211715bf83638b176cd8ce71b"
  },
  {
    "url": "assets/js/49.c708ccb4.js",
    "revision": "e4dfc903e5d8a15a5e9df46754f144f7"
  },
  {
    "url": "assets/js/5.072b1340.js",
    "revision": "bffb135391d59eefc849a81e493ecff7"
  },
  {
    "url": "assets/js/50.43d09000.js",
    "revision": "3db3db2b50500e2642fa9d15edc88905"
  },
  {
    "url": "assets/js/51.3ed06e84.js",
    "revision": "544defc8b0050f6b472da5ae1db7049b"
  },
  {
    "url": "assets/js/52.82c1a0ee.js",
    "revision": "3774c1a5b55474794383cdbf08bc348a"
  },
  {
    "url": "assets/js/53.8e9168e4.js",
    "revision": "92723c91dcac8472534d80b45b40ea1f"
  },
  {
    "url": "assets/js/54.d2971997.js",
    "revision": "ac18a15d6f2c52fc6ec65fffde17f7ea"
  },
  {
    "url": "assets/js/55.343ce6df.js",
    "revision": "52630d18d611f1dfda5f90e089946bdb"
  },
  {
    "url": "assets/js/56.6e95e885.js",
    "revision": "59b6b1272f2dc6f339068e09918598a6"
  },
  {
    "url": "assets/js/57.e1d48e4b.js",
    "revision": "016513ba8df271e64dabb7bd9032404e"
  },
  {
    "url": "assets/js/58.ebbe424c.js",
    "revision": "89255c74f64455b4b50b646185ee7bd9"
  },
  {
    "url": "assets/js/59.5c742de9.js",
    "revision": "781f233e7ac8c89bd11f24f88aa4e55f"
  },
  {
    "url": "assets/js/6.6e2d1228.js",
    "revision": "fb4421e6c4ac86f0255d37c1f7a899fe"
  },
  {
    "url": "assets/js/60.efffc7c7.js",
    "revision": "700c2e8682fc385577f5a3d15ea137b6"
  },
  {
    "url": "assets/js/61.1efa1e45.js",
    "revision": "5ea400c2dcca5f859f9f80f2cb07ebf7"
  },
  {
    "url": "assets/js/62.d257b354.js",
    "revision": "ace4cca4285318a6449b152c5e924db5"
  },
  {
    "url": "assets/js/63.5764d80f.js",
    "revision": "c1648eaba403323a1ace83f225e060dc"
  },
  {
    "url": "assets/js/64.03ce0743.js",
    "revision": "1a146da87c0e0df68d8cd5c9fb0b9821"
  },
  {
    "url": "assets/js/65.1fe25adc.js",
    "revision": "3014c4272f6d3e73b3706209916dab82"
  },
  {
    "url": "assets/js/66.35acb6fc.js",
    "revision": "77bfd3b51f4a9c8874b306ad77bfa278"
  },
  {
    "url": "assets/js/67.d6e674b1.js",
    "revision": "3cf9f4a505e5266cbba89bd74084ebc4"
  },
  {
    "url": "assets/js/68.e54d4d3d.js",
    "revision": "dee41d81b67ce569781035432c3b22bf"
  },
  {
    "url": "assets/js/69.f7b69b89.js",
    "revision": "04830df766748078e1036a3c4d8ac218"
  },
  {
    "url": "assets/js/7.e9698ea5.js",
    "revision": "ba1349ef042396ec4dbbbe194a640e1a"
  },
  {
    "url": "assets/js/70.76bb9a48.js",
    "revision": "472db416de01db46f56be067406df151"
  },
  {
    "url": "assets/js/71.b3068bc7.js",
    "revision": "4328e093a944f971fbe3e6bc293819dc"
  },
  {
    "url": "assets/js/72.87280c0a.js",
    "revision": "9a7d5ef32d30b80fc1733ba6bc459573"
  },
  {
    "url": "assets/js/73.a0c6b983.js",
    "revision": "e6b82b796abac0d5b9fbb60de66acf6c"
  },
  {
    "url": "assets/js/74.26fae197.js",
    "revision": "1749ee2ef4e3e612667eac62fcca0be7"
  },
  {
    "url": "assets/js/75.21357399.js",
    "revision": "1736bf61ab974f65a93585e97bd59c7b"
  },
  {
    "url": "assets/js/76.d65d8b87.js",
    "revision": "26cf4573468a602b21b54ac5743977d3"
  },
  {
    "url": "assets/js/77.dd36c137.js",
    "revision": "187795f86b15409c7a373bb4661172ce"
  },
  {
    "url": "assets/js/78.514718e7.js",
    "revision": "d8d3e4ea295dcb5dbd1e23d46bae1a50"
  },
  {
    "url": "assets/js/79.8a1356e7.js",
    "revision": "42a432e19aac5ecbd606e82f408a9f87"
  },
  {
    "url": "assets/js/8.368e1f85.js",
    "revision": "56dc9b94263ca952543fc91f7b680bd6"
  },
  {
    "url": "assets/js/80.00bb83a8.js",
    "revision": "2d958cc60374c96429bd9ab91691c335"
  },
  {
    "url": "assets/js/81.585e69ff.js",
    "revision": "cf9188bff11c4895802988e0b750a770"
  },
  {
    "url": "assets/js/82.64c336ae.js",
    "revision": "746c6ea00f2383bf3a4f255646e9e849"
  },
  {
    "url": "assets/js/83.b127a1d7.js",
    "revision": "8bb85ae5dad95c2db25d602ce8c5b7ee"
  },
  {
    "url": "assets/js/84.43d69f95.js",
    "revision": "c2137cd56b96f8d22b9d1c01194895e2"
  },
  {
    "url": "assets/js/85.73de755e.js",
    "revision": "5e6ed4dcf8fd958718ea58b4eeb5563d"
  },
  {
    "url": "assets/js/86.d64450bb.js",
    "revision": "61193246455adfd457c529775dc1dddd"
  },
  {
    "url": "assets/js/87.8b2aba66.js",
    "revision": "304878d0cb4f07177e38b2b1590fecd9"
  },
  {
    "url": "assets/js/88.d2b0895d.js",
    "revision": "89e78adfb19edcda5ed23de88a0f9218"
  },
  {
    "url": "assets/js/89.6fb47151.js",
    "revision": "345398adcc587dfbfb644399f2a74daf"
  },
  {
    "url": "assets/js/9.772242ca.js",
    "revision": "7a23a1ced90797e8a358f4f79e985446"
  },
  {
    "url": "assets/js/90.1b1202ea.js",
    "revision": "3df18053e69ebab60b0fc39eab1fdaf8"
  },
  {
    "url": "assets/js/91.de381603.js",
    "revision": "598dde84d7f05921dae7e81ae179b84c"
  },
  {
    "url": "assets/js/92.79360990.js",
    "revision": "97e36e86d91bb890386b1f5d1b431e27"
  },
  {
    "url": "assets/js/93.d8faa474.js",
    "revision": "6e621ef6df80453503166a416fe4c803"
  },
  {
    "url": "assets/js/94.70c45ab8.js",
    "revision": "a183395e801c5a78a135a23b872bb00c"
  },
  {
    "url": "assets/js/95.feed1080.js",
    "revision": "a29a9c62b10dbd2bd5e04e1372901011"
  },
  {
    "url": "assets/js/96.6556ad1d.js",
    "revision": "2e45040deea93d21e5a1145899542030"
  },
  {
    "url": "assets/js/97.085bba3d.js",
    "revision": "7a5d2d90c0872ee9d13bbc5bdb25f3b9"
  },
  {
    "url": "assets/js/98.5841d514.js",
    "revision": "c7c404a6d049622f73b2b9d3bf7e780b"
  },
  {
    "url": "assets/js/99.3277e704.js",
    "revision": "7c7913b0f07883e99d23fe5b5226590d"
  },
  {
    "url": "assets/js/app.9cfb57ca.js",
    "revision": "3e451c74c29f7c2c9b6926da17f30d6a"
  },
  {
    "url": "CHANGELOG.html",
    "revision": "428155b45e17b11146397e0326a3535c"
  },
  {
    "url": "changelog/CHANGELOG.html",
    "revision": "96b15a8859121a9d10e03d9c4540b260"
  },
  {
    "url": "charts/amap.html",
    "revision": "5491cd4053ad7890d8b829e1a5d45438"
  },
  {
    "url": "charts/bar.html",
    "revision": "a428c72fcc221a5c5054be91895a364c"
  },
  {
    "url": "charts/candle.html",
    "revision": "54c285a82699550066cd28bc7c268c6f"
  },
  {
    "url": "charts/funnel.html",
    "revision": "688d908286a9cb09c97eb7b077f2d4a5"
  },
  {
    "url": "charts/gauge.html",
    "revision": "b34f139f688b76f54d1a8204dfa4339f"
  },
  {
    "url": "charts/heatmap.html",
    "revision": "c32932f341fc8ffc47e43d0593cc3552"
  },
  {
    "url": "charts/histogram.html",
    "revision": "a22917995d74608a76c23acc5533bc12"
  },
  {
    "url": "charts/hot-chart.html",
    "revision": "1fd4ac95f68ed1d0a20be6f1439c036c"
  },
  {
    "url": "charts/index.html",
    "revision": "a40d87b7bd44be2514b7dcd04acf19ce"
  },
  {
    "url": "charts/line.html",
    "revision": "1119995b82cbcaa559d4e4b7ef71f8dc"
  },
  {
    "url": "charts/liquidfill.html",
    "revision": "5438af6bad06c8385530aa9a74eec164"
  },
  {
    "url": "charts/map.html",
    "revision": "e2b6989ab811c53d2415ace05b13dc3e"
  },
  {
    "url": "charts/pie.html",
    "revision": "2048ae970f6beb13e30c2fc796fb5f81"
  },
  {
    "url": "charts/radar.html",
    "revision": "4cf983027de93ef7c0cf5c4f6662dbda"
  },
  {
    "url": "charts/ring.html",
    "revision": "d0b503a796b26a43d563c8b48d5822d5"
  },
  {
    "url": "charts/sankey.html",
    "revision": "b655bc3bebaa94ca13b7324e043ada84"
  },
  {
    "url": "charts/scatter.html",
    "revision": "fa7acf9c2277400daf7e7c843ba82d8f"
  },
  {
    "url": "charts/tree.html",
    "revision": "61e2db81baeb17971e5b43469efef1d7"
  },
  {
    "url": "charts/waterfall.html",
    "revision": "50c37452218b2e69aef9a8858f1c4aca"
  },
  {
    "url": "charts/wordcloud.html",
    "revision": "5ff44ac84ed243b8b7486f7a213023a8"
  },
  {
    "url": "guide/data.html",
    "revision": "7bed0e3cb142adb273e1ed95a5fce3e9"
  },
  {
    "url": "guide/event.html",
    "revision": "7863f58b0c4576e4ea9115fb23814574"
  },
  {
    "url": "guide/index.html",
    "revision": "71f81a9b7e76bbc94f334d6a9862fbad"
  },
  {
    "url": "index.html",
    "revision": "95de498b1fea4743b58a0757020bf2e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
