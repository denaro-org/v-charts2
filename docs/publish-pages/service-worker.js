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
    "revision": "3b2231eefc485a4ea37e7269143763da"
  },
  {
    "url": "assets/css/0.styles.cbbbf4c6.css",
    "revision": "bb739e237e21f9252d517a0ca410a401"
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
    "url": "assets/js/1.643c8f95.js",
    "revision": "8f8781498229b75f83c1358eb9952e9d"
  },
  {
    "url": "assets/js/10.a35c7670.js",
    "revision": "c14f026f044ae8df6c7991b18f0d1ece"
  },
  {
    "url": "assets/js/100.343d599e.js",
    "revision": "60b4af17ab69930cb942bccff62dbad8"
  },
  {
    "url": "assets/js/101.e01458f6.js",
    "revision": "4ab350c21ada03bbe069e8674df085b0"
  },
  {
    "url": "assets/js/102.3ec02bb2.js",
    "revision": "aaeab6e5b36c22bcdce87a51f9052cba"
  },
  {
    "url": "assets/js/103.9a94156b.js",
    "revision": "6ed81d87c4ed2d0367aced70fac0828d"
  },
  {
    "url": "assets/js/104.cbf807ec.js",
    "revision": "036bf95ccce3c5f04b70fd98e1e321d7"
  },
  {
    "url": "assets/js/105.1c3a99d3.js",
    "revision": "8167dc63ab3af9825c4349efce5a5890"
  },
  {
    "url": "assets/js/106.f3cade99.js",
    "revision": "8e858496ad0580ebf2124e1ac49a9db9"
  },
  {
    "url": "assets/js/107.9697f7ec.js",
    "revision": "671a9422fe377a035738160ec868b393"
  },
  {
    "url": "assets/js/108.42463265.js",
    "revision": "337ae23930cf5d31c9b454154ad352db"
  },
  {
    "url": "assets/js/109.86bcee8f.js",
    "revision": "7a07261911e63b0a226ca7ec0ee4fc1f"
  },
  {
    "url": "assets/js/11.a2c466e3.js",
    "revision": "0e1b3976283cc2186607c0e325a9a017"
  },
  {
    "url": "assets/js/110.d328ec3c.js",
    "revision": "89dee302fc08d9d92ef40967db0af2f6"
  },
  {
    "url": "assets/js/111.c0d023c2.js",
    "revision": "1f8afae5ea156bc168dc3c8c8f996001"
  },
  {
    "url": "assets/js/112.f350988c.js",
    "revision": "59671b4e897f3c93f0cee236080ccc4c"
  },
  {
    "url": "assets/js/113.0a24c925.js",
    "revision": "ab8124bd6725b5a6a5ed48bc2bfb1757"
  },
  {
    "url": "assets/js/114.131ec3f1.js",
    "revision": "16c6f61c882f5ab2b01ccb0628da436a"
  },
  {
    "url": "assets/js/115.822b7965.js",
    "revision": "27153651ed24706a3798b620d1e190ee"
  },
  {
    "url": "assets/js/116.d8b94393.js",
    "revision": "14bdc53d625a866d3d3a7ff037a46136"
  },
  {
    "url": "assets/js/117.47203505.js",
    "revision": "a04330dd74e0ef6f38c0308ad5db0a14"
  },
  {
    "url": "assets/js/118.c5433120.js",
    "revision": "c66db596840c48febe510ed888dc60a2"
  },
  {
    "url": "assets/js/119.bd4007ce.js",
    "revision": "8624b16889aaad1b10e59579c5a4eae8"
  },
  {
    "url": "assets/js/12.6adf86f8.js",
    "revision": "ecd29c97566465520126bee3faccf2ac"
  },
  {
    "url": "assets/js/120.41b37dc8.js",
    "revision": "f0ad6e6b142ed64678b4011df2301ec1"
  },
  {
    "url": "assets/js/121.bb3755df.js",
    "revision": "44d1aaa8ec7a581ba3555d7ee984ec1a"
  },
  {
    "url": "assets/js/122.4f362905.js",
    "revision": "7a0abe868814ea43721a6231fac2d620"
  },
  {
    "url": "assets/js/123.d0e4bdf6.js",
    "revision": "b5018874c9ac0d510841ea17a45ba8dd"
  },
  {
    "url": "assets/js/124.8e2000ff.js",
    "revision": "dc50f6d44d01adb32c4853327f45131b"
  },
  {
    "url": "assets/js/125.e0b6a446.js",
    "revision": "ff4d324e8ce895704020198a26c15077"
  },
  {
    "url": "assets/js/126.20ee6da1.js",
    "revision": "e29622989619a535cf312a33a493bb7f"
  },
  {
    "url": "assets/js/127.206cbac2.js",
    "revision": "8969f81619f6a9b697996e7351bf13b7"
  },
  {
    "url": "assets/js/128.0d3ad335.js",
    "revision": "6bc637670976bd3384dab532f2264c53"
  },
  {
    "url": "assets/js/129.e1cf1181.js",
    "revision": "884d80f1eea2fb366ab6f6974f7dc0d7"
  },
  {
    "url": "assets/js/13.87fd9099.js",
    "revision": "ed075d408cdb78aa54b4e5b598740535"
  },
  {
    "url": "assets/js/130.96f35680.js",
    "revision": "cebc687587e5aec0a9737b7b89fc86b2"
  },
  {
    "url": "assets/js/131.742e4ead.js",
    "revision": "9b8386b408602ec43e94e27256ebc8cb"
  },
  {
    "url": "assets/js/132.f157b81a.js",
    "revision": "f5b365db09776d3922d481b41598ea74"
  },
  {
    "url": "assets/js/133.e03bc14a.js",
    "revision": "2d21b1f0f4a9b432c7c7eabfe906f47f"
  },
  {
    "url": "assets/js/134.09c72b31.js",
    "revision": "a74be5e307f54e6d9dae908cca96906f"
  },
  {
    "url": "assets/js/135.5164e6aa.js",
    "revision": "401aebbb5a57650b7d64de199d12eeff"
  },
  {
    "url": "assets/js/136.36a3edd6.js",
    "revision": "e55520715d7a756e7b2fe5e79efb2d77"
  },
  {
    "url": "assets/js/137.f0751350.js",
    "revision": "ced188531d1f399a34b1c4cd4900971b"
  },
  {
    "url": "assets/js/138.6e56d69a.js",
    "revision": "d76539f09170161dde4434e72b02f6d4"
  },
  {
    "url": "assets/js/139.4a069193.js",
    "revision": "f87b7cc61de37f75f22f6f1c49f08774"
  },
  {
    "url": "assets/js/14.1cf74f1c.js",
    "revision": "846b28e816dbe9e89b74cb1fab0907fa"
  },
  {
    "url": "assets/js/140.84139a2b.js",
    "revision": "e35f7ad7ac7e1a881e9dc20c85e04f57"
  },
  {
    "url": "assets/js/141.49860724.js",
    "revision": "464e2d93ce739082099dd24ae2337819"
  },
  {
    "url": "assets/js/142.1faa2fb4.js",
    "revision": "0b1dcbb7b6934a97aa583f80b2b4e54d"
  },
  {
    "url": "assets/js/143.b3daa5fb.js",
    "revision": "2884969c8eaacb092fe5e2bb9e4b11ed"
  },
  {
    "url": "assets/js/144.1bcdef7e.js",
    "revision": "56d746ccdaa63aae2be2e53be38d1b21"
  },
  {
    "url": "assets/js/145.c7133477.js",
    "revision": "cba8dec5c2f27372c762469d5ff1355d"
  },
  {
    "url": "assets/js/146.f5134bda.js",
    "revision": "b24d1d0e18db7548d780316167c74ed5"
  },
  {
    "url": "assets/js/147.6e6e8fdc.js",
    "revision": "87c115c9d68e6ec0ebc6d653d83861e9"
  },
  {
    "url": "assets/js/15.02f33ba0.js",
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
    "url": "assets/js/21.fe08fcdc.js",
    "revision": "9ef18cde4e660adc4e81fbcffc4fafb4"
  },
  {
    "url": "assets/js/22.56cc0714.js",
    "revision": "1415649053e18111080a9d04d78ee560"
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
    "url": "assets/js/26.0d470e04.js",
    "revision": "59d4057be963e08ca28e1d3afb31c2ab"
  },
  {
    "url": "assets/js/27.ab6219e4.js",
    "revision": "0a9d711227174b4dcfdf12d86909992b"
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
    "url": "assets/js/3.04b9915f.js",
    "revision": "a86d38dc163867be0cea5c596ba8af42"
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
    "url": "assets/js/32.1ca4bcfd.js",
    "revision": "2b611f2d552d3b91d0e1ffd4526e332d"
  },
  {
    "url": "assets/js/33.8a4769aa.js",
    "revision": "4e74f1077b27b5f9a76c0ea24d03c0cc"
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
    "url": "assets/js/4.145713f9.js",
    "revision": "d0458a58caed4d1a5197ded15746d893"
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
    "url": "assets/js/48.f8592467.js",
    "revision": "54fcc6ddf42c1e3601e3614047225534"
  },
  {
    "url": "assets/js/49.d2af705a.js",
    "revision": "cabb4d3ddc7891de426aaa8eac562b77"
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
    "url": "assets/js/51.daa8bcf3.js",
    "revision": "f56a79279fa964129c3cd8395de46e9d"
  },
  {
    "url": "assets/js/52.e69775b9.js",
    "revision": "9b9ab5cf720a2c5bdea1256cdf0b5448"
  },
  {
    "url": "assets/js/53.7f05fe80.js",
    "revision": "92723c91dcac8472534d80b45b40ea1f"
  },
  {
    "url": "assets/js/54.1ff3c5d8.js",
    "revision": "ac18a15d6f2c52fc6ec65fffde17f7ea"
  },
  {
    "url": "assets/js/55.6b8215ac.js",
    "revision": "52630d18d611f1dfda5f90e089946bdb"
  },
  {
    "url": "assets/js/56.27327f0e.js",
    "revision": "59b6b1272f2dc6f339068e09918598a6"
  },
  {
    "url": "assets/js/57.a080f0a2.js",
    "revision": "016513ba8df271e64dabb7bd9032404e"
  },
  {
    "url": "assets/js/58.8e7f222d.js",
    "revision": "89255c74f64455b4b50b646185ee7bd9"
  },
  {
    "url": "assets/js/59.cf3ce8a6.js",
    "revision": "781f233e7ac8c89bd11f24f88aa4e55f"
  },
  {
    "url": "assets/js/6.6e2d1228.js",
    "revision": "fb4421e6c4ac86f0255d37c1f7a899fe"
  },
  {
    "url": "assets/js/60.5067a27d.js",
    "revision": "7b5d1061905ff619e3073e9182ff22a4"
  },
  {
    "url": "assets/js/61.e50929f5.js",
    "revision": "e6dbda6bc8e8be11d9968a8eef98c7b2"
  },
  {
    "url": "assets/js/62.9e34deb5.js",
    "revision": "fc5f771430e7dfebee5b7d1c4a43e45f"
  },
  {
    "url": "assets/js/63.e55774c5.js",
    "revision": "1a8dbde3611ad1d02baead20a527526a"
  },
  {
    "url": "assets/js/64.45f24d6d.js",
    "revision": "296bb2111e0f09be185180b3165093c8"
  },
  {
    "url": "assets/js/65.71d79450.js",
    "revision": "6f23ef7da6b1db36cf21946d8fdf4705"
  },
  {
    "url": "assets/js/66.35acb6fc.js",
    "revision": "77bfd3b51f4a9c8874b306ad77bfa278"
  },
  {
    "url": "assets/js/67.bbfdb308.js",
    "revision": "3cf9f4a505e5266cbba89bd74084ebc4"
  },
  {
    "url": "assets/js/68.36090a3e.js",
    "revision": "3db38823514b5bbeca3ddb4d56a44364"
  },
  {
    "url": "assets/js/69.7265af06.js",
    "revision": "bb934cf7f11598941718f5466729ffab"
  },
  {
    "url": "assets/js/7.dbdd6117.js",
    "revision": "471bc1647e87725253bda552a916752b"
  },
  {
    "url": "assets/js/70.c3734b11.js",
    "revision": "472db416de01db46f56be067406df151"
  },
  {
    "url": "assets/js/71.6bbe4fd8.js",
    "revision": "4328e093a944f971fbe3e6bc293819dc"
  },
  {
    "url": "assets/js/72.429e2ad0.js",
    "revision": "9a7d5ef32d30b80fc1733ba6bc459573"
  },
  {
    "url": "assets/js/73.e8dc01ad.js",
    "revision": "e6b82b796abac0d5b9fbb60de66acf6c"
  },
  {
    "url": "assets/js/74.26fae197.js",
    "revision": "1749ee2ef4e3e612667eac62fcca0be7"
  },
  {
    "url": "assets/js/75.dbbf4b23.js",
    "revision": "8792c661e2f018bf0a2cdf0dd25bc53a"
  },
  {
    "url": "assets/js/76.c3709ba8.js",
    "revision": "4d6c064a39708a731150d258ea959621"
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
    "url": "assets/js/79.d3f891b2.js",
    "revision": "b52fefa4d03b3a57898c4ecfc4f98692"
  },
  {
    "url": "assets/js/8.ad29bc34.js",
    "revision": "686c02c4ca0ae308cd8ce5b38524d77a"
  },
  {
    "url": "assets/js/80.bb839e9b.js",
    "revision": "cb15d69caca4c206bd4460f2d29ebe4c"
  },
  {
    "url": "assets/js/81.29ae727d.js",
    "revision": "80c7a52820c6849b5c5614d5640a59d5"
  },
  {
    "url": "assets/js/82.ff1a41c7.js",
    "revision": "858b64b60ee50da51f0e1df4421c970f"
  },
  {
    "url": "assets/js/83.f77757b1.js",
    "revision": "924bcfbbc75157ffacf52e0c131bb821"
  },
  {
    "url": "assets/js/84.54fbc47e.js",
    "revision": "d89b4357dffb0cb416a4805ca25eb342"
  },
  {
    "url": "assets/js/85.3dc83b56.js",
    "revision": "2cf495b420bdd7c8b03e81d2ea52e57a"
  },
  {
    "url": "assets/js/86.43a2ecf4.js",
    "revision": "afcaa23c852b76f2ccbe3ef083927899"
  },
  {
    "url": "assets/js/87.9bfb7a46.js",
    "revision": "85822b25d20f88e688c6c50f8b7a0be9"
  },
  {
    "url": "assets/js/88.d99b8dfc.js",
    "revision": "f3a2b35922ffc8b8e5a5097563007202"
  },
  {
    "url": "assets/js/89.7f5e9910.js",
    "revision": "a16759069804c0eee3f1c3c6b7b2253d"
  },
  {
    "url": "assets/js/9.772242ca.js",
    "revision": "7a23a1ced90797e8a358f4f79e985446"
  },
  {
    "url": "assets/js/90.be92d0e1.js",
    "revision": "02fc32220a60272063b3c8cdea148bdc"
  },
  {
    "url": "assets/js/91.3dd7e870.js",
    "revision": "3da9904b491d7694c0df8bf995f42ac7"
  },
  {
    "url": "assets/js/92.5306f44d.js",
    "revision": "152ce859dadfa5e654819e8e3e3b87a7"
  },
  {
    "url": "assets/js/93.cb0eb360.js",
    "revision": "cc62ab27f39c4a687b325376ddbdab44"
  },
  {
    "url": "assets/js/94.6e013700.js",
    "revision": "5280cdc52dd5f5d6af93ac4ed9574e01"
  },
  {
    "url": "assets/js/95.f332ab16.js",
    "revision": "5da756550542320627bfa2268935393d"
  },
  {
    "url": "assets/js/96.494bcca9.js",
    "revision": "03b87c7f52bd7790bfbed35f7c89b89a"
  },
  {
    "url": "assets/js/97.95d61f79.js",
    "revision": "1fb141b97ff7109a7f2b16a3c17b9c38"
  },
  {
    "url": "assets/js/98.2ef1f25e.js",
    "revision": "445f817ad5f968d58ea7410120b7daaa"
  },
  {
    "url": "assets/js/99.ea47959c.js",
    "revision": "71d988299077ea9598e0f55271af9e6c"
  },
  {
    "url": "assets/js/app.4b2be0a3.js",
    "revision": "5b0c0fb8209d96b65a8fb5bf80a03b15"
  },
  {
    "url": "CHANGELOG.html",
    "revision": "7194cd575c22290fc3376574478b83b7"
  },
  {
    "url": "changelog/CHANGELOG.html",
    "revision": "b9e5907df22bdbf8dffec79218ba848c"
  },
  {
    "url": "charts/amap.html",
    "revision": "cea74c52d6262b462667ba6d39644c6b"
  },
  {
    "url": "charts/bar.html",
    "revision": "08a937e7fdf285e05c6928a240abcac1"
  },
  {
    "url": "charts/candle.html",
    "revision": "74333a382ed0d7093777a76b8694c9fe"
  },
  {
    "url": "charts/funnel.html",
    "revision": "350e669b87667297bd23ac778ef7b99a"
  },
  {
    "url": "charts/gauge.html",
    "revision": "9cd7f3f1eb4dffac3b4d6e40cba10fd8"
  },
  {
    "url": "charts/heatmap.html",
    "revision": "a5151748c290cdb6d480f5ab0536798b"
  },
  {
    "url": "charts/histogram.html",
    "revision": "62fab4b445f8270365109233334e0abd"
  },
  {
    "url": "charts/hot-chart.html",
    "revision": "3b1205be087c09bf76af16c243d10582"
  },
  {
    "url": "charts/index.html",
    "revision": "35b97e6d9ad03e6f1f421219def4e311"
  },
  {
    "url": "charts/line.html",
    "revision": "622b33735e782f1fc4d3a9bcaebcbdd1"
  },
  {
    "url": "charts/liquidfill.html",
    "revision": "e62e3626ecb33273ea7c605064791f08"
  },
  {
    "url": "charts/map.html",
    "revision": "440bd3f44dd9035c083c482b497f90eb"
  },
  {
    "url": "charts/pie.html",
    "revision": "c6fd2e185d968b0affa8325c62184fc2"
  },
  {
    "url": "charts/radar.html",
    "revision": "5f9bbfc6befbb47157482baf875a0a4e"
  },
  {
    "url": "charts/ring.html",
    "revision": "136a1fb6ff0b3335edadc8ed53c04829"
  },
  {
    "url": "charts/sankey.html",
    "revision": "4c08bcb951dae347184cbd708ac08305"
  },
  {
    "url": "charts/scatter.html",
    "revision": "0210a62dc85f70356f1c3fa648821525"
  },
  {
    "url": "charts/tree.html",
    "revision": "bbd4205cdb4f7c108887bd4015c1fdf5"
  },
  {
    "url": "charts/waterfall.html",
    "revision": "a5a0e0d7594e29b1cfd9da512b923113"
  },
  {
    "url": "charts/wordcloud.html",
    "revision": "153f40dd764559102d05581dbcca3e29"
  },
  {
    "url": "guide/data.html",
    "revision": "a6feef85fe8d24698807e17f6f5cf2ab"
  },
  {
    "url": "guide/event.html",
    "revision": "dd7ec197b2920a95c6606ae0747b612e"
  },
  {
    "url": "guide/index.html",
    "revision": "1f0fd4d959e2320260b9ca99e5fd0ddd"
  },
  {
    "url": "index.html",
    "revision": "61a476b905d65cfb9f9517a4c72727f5"
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
