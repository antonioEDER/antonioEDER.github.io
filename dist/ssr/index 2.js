void 0===process.env.NODE_ENV&&(process.env.NODE_ENV="production"),(()=>{var e={118:e=>{e.exports.UY=function(e){return e},e.exports.h5=function(e){return e}},599:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});const n=require("compression");var o=t.n(n);const s=(0,t(118).UY)((({app:e})=>{e.use(o()({threshold:0}))}))},100:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});const n=(0,t(118).UY)((({app:e,resolve:r,render:t,serve:n})=>{e.get(r.urlPath("*"),((e,r)=>{r.setHeader("Content-Type","text/html"),t({req:e,res:r}).then((e=>{r.send(e)})).catch((e=>{e.url?e.code?r.redirect(e.code,e.url):r.redirect(e.url):404===e.code?r.status(404).send("404 | Page Not Found"):r.status(500).send("500 | Internal Server Error")}))}))}))}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var s=r[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";t.d(n,{default:()=>w});const e=require("path"),r=require("express");var o=t.n(r);const s=require("@vue/server-renderer"),a=require("@quasar/ssr-helpers/create-renderer");var i=t.n(a);const u=require("./render-template.js");var d=t.n(u);const l=require("./quasar.server-manifest.json");var c=t.n(l);const p=require("./quasar.client-manifest.json");var v=t.n(p);const f=(0,t(118).h5)((({app:e,port:r,isReady:t})=>t().then((()=>{e.listen(r,(()=>{console.log("Server listening at port "+r)}))})))),m=o()(),h=process.env.PORT||3e3,g=e=>e||"/",b=__dirname,y=(0,e.join)(__dirname,"www");function S(){return(0,e.join)(y,...arguments)}const q=(e,r={})=>o().static(S(e),{...r,maxAge:void 0===r.maxAge?2592e6:r.maxAge}),x=i()({vueRenderToString:s.renderToString,basedir:__dirname,serverManifest:c(),clientManifest:v(),manualStoreSerialization:!1});m.use(g("/"),q("."));const P={app:m,resolve:{urlPath:g,root(){return(0,e.join)(b,...arguments)},public:S},publicPath:"/",folders:{root:b,public:y},render:e=>x(e,d()),serve:{static:q}},_=(j=P,Promise.all([Promise.resolve().then(t.bind(t,599)),Promise.resolve().then(t.bind(t,100))]).then((async e=>{const r=e.map((e=>e.default));for(let e=0;e<r.length;e++)try{await r[e](j)}catch(e){return void console.error("[Quasar SSR] middleware error:",e)}})));var j;const O=()=>_,w=f({port:h,isReady:O,ssrHandler:(e,r,t)=>O().then((()=>m(e,r,t))),...P})})(),module.exports=n.default})();