if(!self.define){let a,c={};const e=(e,d)=>(e=new URL(e+".js",d).href,c[e]||new Promise((c=>{if("document"in self){const a=document.createElement("script");a.src=e,a.onload=c,document.head.appendChild(a)}else a=e,importScripts(e),c()})).then((()=>{let a=c[e];if(!a)throw new Error(`Module ${e} didn’t register its module`);return a})));self.define=(d,b)=>{const i=a||("document"in self?document.currentScript.src:"")||location.href;if(c[i])return;let f={};const o=a=>e(a,i),r={module:{uri:i},exports:f,require:o};c[i]=Promise.all(d.map((a=>r[a]||o(a)))).then((a=>(b(...a),f)))}}define(["./workbox-ad8011fb"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/binaries/stremio_core_web_bg.wasm",revision:"e5dbae37554a7edb7c39361852d78b50"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/favicons/favicon.ico",revision:"73f6cce044fafd48bf447d80487f5a63"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/favicons/icon-96.png",revision:"de1c79ffc899cb64fbaf6a6d17d364a5"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-BoldItalic.ttf",revision:"5b44818d2b9eda3e23cd5edd7b49b7d5"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-Light.ttf",revision:"88823c2015ffd5fa89d567e17297a137"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-LightItalic.ttf",revision:"a3ce4440f2abf76f4a1b14b83920138c"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-Medium.ttf",revision:"58aef543c97bbaf6a9896e8484456d98"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-MediumItalic.ttf",revision:"cf23e1bb619029496260760b72aebd30"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-Regular.ttf",revision:"11eabca2251325cfc5589c9c6fb57b46"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/fonts/Roboto-RegularItalic.ttf",revision:"a720f17aa773e493a7ebf8b08459e66c"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/anonymous.png",revision:"3c24e42de8822c3e2dc0c20a04cb18c2"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/default_avatar.png",revision:"e574e5a876fb07bb28b07dd60bd63429"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/empty.png",revision:"ff850d70fd43d29b6d8c7055f33d8dbb"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/icon_x192.png",revision:"f91415b051185986aedf4187c90ea6f7"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/icon_x512.png",revision:"5a446747b1843c1aac2c386b1005ab78"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/intro_background.jpg",revision:"96ccc21bab56c04153a6400842b8a9dd"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/maskable_icon_x192.png",revision:"73f3a1cb7aeabde43ba2ed935fde06b1"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/maskable_icon_x512.png",revision:"88f79bb79e6039edee6367ffa081aa06"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/images/stremio_symbol.png",revision:"9d75b8169c82b11f5399be4129e7757f"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/scripts/main.js",revision:"0ab37eb35c8dac75cfdbfc8bbd36beb6"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/scripts/worker.js",revision:"6881c1c40ee1cf19a387ccb6c8316789"},{url:"ba25c4791da8aa1214b07f0c1c3a91de315d5050/styles/main.css",revision:"1e7887b185863b75bfe4400e8711c7a9"},{url:"index.html",revision:"32cc7fdeac1fc6e11cce59f52157fadc"}],{})}));
//# sourceMappingURL=service-worker.js.map
