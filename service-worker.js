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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b29adc4ab65cde1b5bad8849491599cb"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8a2735be.css",
    "revision": "72fd9a587951ebf415b8d5ee13055012"
  },
  {
    "url": "assets/img/create_board_result.7ab1209b.png",
    "revision": "7ab1209b7aa89025655a8625643333d8"
  },
  {
    "url": "assets/img/create_board.1ca30d47.png",
    "revision": "1ca30d476d798423091fdf0e35994f50"
  },
  {
    "url": "assets/img/delete_board_result.74052ae6.png",
    "revision": "74052ae6caf840bc437f3059152ed4ce"
  },
  {
    "url": "assets/img/delete_board.0f4536da.png",
    "revision": "0f4536da601a5aa8058d1a3dbfebf699"
  },
  {
    "url": "assets/img/get_boards.5974589f.png",
    "revision": "5974589fab3b13376d167eb8a38c069c"
  },
  {
    "url": "assets/img/read_board.9dee2b20.png",
    "revision": "9dee2b204a375f1d0a1ec444e4c87753"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_board_result.52722b99.png",
    "revision": "52722b99873948ed762e6e48d9615e72"
  },
  {
    "url": "assets/img/update_board.cd2221b1.png",
    "revision": "cd2221b1c76b713fd0dee53717ce4e2a"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.cec2ed9f.js",
    "revision": "84b987c051a2f5be2207e7f758438054"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.755985e5.js",
    "revision": "348d7225e0afeb13272f3ff115e91862"
  },
  {
    "url": "assets/js/14.49aa7893.js",
    "revision": "e269fd883dad74f1b705eefcdd6fc9c3"
  },
  {
    "url": "assets/js/15.8fe6f540.js",
    "revision": "de9f4575acd30107b930c1cde0dc12bb"
  },
  {
    "url": "assets/js/16.d915a530.js",
    "revision": "3b8a96fc973868f34ad2aa265ca6607a"
  },
  {
    "url": "assets/js/17.f1330ea1.js",
    "revision": "06e3ed0224b60a56db2fc3c5ed8ad8c9"
  },
  {
    "url": "assets/js/18.16895400.js",
    "revision": "32e8241f595bd0ed61440f17cab423c5"
  },
  {
    "url": "assets/js/19.c92fb24c.js",
    "revision": "a5802eb33547b0a7ecee4cecb81340b9"
  },
  {
    "url": "assets/js/2.abc37fd7.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.59562d31.js",
    "revision": "73aa3efbee863ee706369ca5333f6c4e"
  },
  {
    "url": "assets/js/21.532c2a92.js",
    "revision": "22701d7282a458b94c38f37ca598f05b"
  },
  {
    "url": "assets/js/22.366e6187.js",
    "revision": "ce351d8cd1fa1c75ddcc2a46ef413529"
  },
  {
    "url": "assets/js/23.68c3f70d.js",
    "revision": "dd8a3678f1c5f95cf3900921d078309a"
  },
  {
    "url": "assets/js/24.5f6286e6.js",
    "revision": "03e92b5d65bb3702fd707cecd9d4a997"
  },
  {
    "url": "assets/js/26.3c108c65.js",
    "revision": "14070395307afbb22387ff5bad8d960c"
  },
  {
    "url": "assets/js/3.3380e586.js",
    "revision": "e16df77f4ccd58df6191eb090046e552"
  },
  {
    "url": "assets/js/4.4ded2ed6.js",
    "revision": "e82d2d7c0cbf65eceb164c2b4d9f1db9"
  },
  {
    "url": "assets/js/5.77652e35.js",
    "revision": "956a31b5a51211553849fb62eae2af2a"
  },
  {
    "url": "assets/js/6.cb1ca25b.js",
    "revision": "fa5e8c6dd8fcfb1e81a1277f88437590"
  },
  {
    "url": "assets/js/7.eb73e1ac.js",
    "revision": "5b4888d3d6bfcdf50f41d84f97b97416"
  },
  {
    "url": "assets/js/8.f7398b0c.js",
    "revision": "b6a14a3bc9caded74fad7965e01d9116"
  },
  {
    "url": "assets/js/9.27eee956.js",
    "revision": "d2266c2bfc79643ecc07363288a46254"
  },
  {
    "url": "assets/js/app.89c3bd94.js",
    "revision": "54d9cb3dc9e7b81e61eb0701fc800f6d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b8653d6aeebe25c1ae2cee5aa0904208"
  },
  {
    "url": "design/index.html",
    "revision": "f64ccaaaf80b03ab367f03ffcedcbfa6"
  },
  {
    "url": "index.html",
    "revision": "4c30ef8267b6bfdf7ddb85dcacecc9bb"
  },
  {
    "url": "intro/index.html",
    "revision": "864eccc386ad0e9f9ceb072b9c1d8f41"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "82ece3ca1c2db03dec8543160432f04d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "025fa18ebf789045b568dd4fde65dc00"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "aca3601f8d40d13bb8444b98a8ec1d40"
  },
  {
    "url": "software/index.html",
    "revision": "ac8250ac8652dd2ed46673d7f38df056"
  },
  {
    "url": "test/index.html",
    "revision": "97f2e50a38abe9e4ce81c2f0c4bd2c73"
  },
  {
    "url": "use cases/index.html",
    "revision": "817b082c910ce326d8d72544e7a0f1ce"
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
