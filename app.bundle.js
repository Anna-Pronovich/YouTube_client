!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"048654ede8e7b0071d82961a4b106dae.eot"},function(t,e,n){var i,o,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,l=0,d=[],p=n(9);function u(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(b(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return g(e,t.attrs),h(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=l++;n=c||(c=v(e)),i=y.bind(null,n,s,!1),o=y.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),h(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=p(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return u(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&u(f(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var x,w=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function y(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e,n){var i=n(5);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(0)(!1);var i=n(1),o=i(n(2)),r=i(n(2)+"#iefix"),s=i(n(6)),a=i(n(7)),c=i(n(8)+"#icomoon");e.push([t.i,"@font-face {\n  font-family: 'icomoon';\n  src:  url("+o+");\n  src:  url("+r+") format('embedded-opentype'),\n    url("+s+") format('truetype'),\n    url("+a+") format('woff'),\n    url("+c+') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^="icon-"], [class*=" icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-eye:before {\n  content: "\\f06e";\n  padding: 0 10px;\n}\n\n.icon-calendar:before {\n  content: "\\f073";\n  padding: 0 10px;\n}\n\n.icon-child:before {\n  content: "\\f1ae";\n  padding: 0 10px;\n}\n\n.videos-list {\n  --videos-count-per-page:4;\n  --videos-total: 15;\n  --video-width: calc(100vw/var(--videos-count-per-page));\n\n  position: relative;\n  display: grid;\n  grid-template-rows: var(--video-height);\n  grid-template-columns: repeat(var(--videos-total),var(--video-width));\n  width: 100%;\n  margin: 0 auto;\n  overflow-x: scroll;\n  overflow-y: hidden;\n\n  white-space: nowrap;\n  transition: all 0.2s;\n  transform: scale(0.98);\n  will-change: transform;\n  user-select: none;\n  cursor: pointer;\n  position: relative;\n}\n .videos-list::-webkit-scrollbar {\n  width: 0;\n  background: transparent;\n}\n\n.videos-list.active {\n  background: rgba(255,255,255,0.3);\n  cursor: grabbing;\n  transform: scale(1);\n}\n\n.wrap-video-container {\n  box-sizing: border-box;\n  width: var(--video-width);\n  padding: 0 6rem;\n}\n\n.video-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 400px;\n  padding: 0;\n  list-style: none;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  white-space: normal;\n  color: #333;\n  background-color: #fafafa;\n  border-radius: 7px;\n  box-shadow: 0px 0px 9px 0px #AFAFAA;\n  overflow: hidden;\n}\n\n.video-container_item-media {\n    position: relative;\n    width: 100%;\n    height: 180px;\n  }\n\n  .item-media_img {\n    width: 100%;\n    height: 180px;\n  }\n\n  .video_link {\n    position: absolute;\n    top: 60px;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 50px;\n    padding: 7px 0;\n    font-style: italic ;\n    font-weight: bold;\n    color: black;\n    background-color:rgba(89, 219, 239, 0.9);\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .video-container_item-media:hover .video_link,\n  .video_link:focus {\n    background-color:rgba(249, 251, 112, 0.9);\n    text-decoration: none;\n  }\n\n  .video-container_item-description {\n    height: 50px;\n    padding: 0px 14px;\n    font-size: 14px;\n    text-align: justify;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .video-container_item-viewCount {\n    padding: 10px;\n  }\n  @media (max-width:1024px){\n    .videos-list {\n      --videos-count-per-page: 3;\n    }\n  }\n\n  @media (max-width:768px) {\n    .videos-list  {\n      --videos-count-per-page:2;\n    }\n  }\n\n  @media (max-width:480px) {\n    .videos-list {\n    --videos-count-per-page: 1;\n    }\n  }\n\n',""])},function(t,e,n){t.exports=n.p+"5e342d398789be5674ce114b1bddd222.ttf"},function(t,e,n){t.exports=n.p+"4c1fc4e6b3b67a420891997399732074.woff"},function(t,e,n){t.exports=n.p+"a828ba6eec3166eb14dfe75d4f701caf.svg"},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var i=n(11);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(0)(!1);var i=n(1)(n(12));e.push([t.i,"body {\n    position: fixed;\n    width: 100vw;\n    overflow-x:hidden;\n    background: url("+i+");\n    font-family: 'Signika Negative', Tahoma, sans-serif;\n}\n\nh1 {\n  margin: 20px 0;\n  font-size: 8rem;\n  color: #A4A3A3;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.wrap_form-search {\n    position: relative;\n    width: 60%;\n    margin: 20px auto;\n}\n\ninput {\n    width: 70%;\n    height: 38px;\n    margin-left: 40px;\n    padding: 0 15px;\n    box-sizing: border-box;\n    font-weight: bold;\n    font-size: 3rem;\n    line-height:2em;\n    color: black;\n    border: 1px solid #A4A3A3;\n    border-radius: 3px;\n    -moz-box-sizing: border-box;\n}\n\nbutton {\n    outline: none;\n    width: 10%;\n    height: 45px;\n    margin: 0 20px;\n    border: none;\n    border-radius: 10px;\n    box-shadow: 0 0 40px 40px rgb(241, 55, 55) inset, 0 0 0 0 rgb(241, 55, 55);\n    font-family: 'Montserrat', sans-serif;\n    font-weight: bold;\n    letter-spacing: 2px;\n    color: white;\n    transition: .15s ease-in-out;\n  }\n\nbutton:hover {\n  box-shadow: 0 0 10px 0 rgb(241, 55, 55) inset, 0 0 10px 4px rgb(241, 55, 55);\n  color: rgb(241, 55, 55);\n}\n\n@media (max-width:2560px) {\n  html {\n    font-size:6.2px;\n  }\n}\n@media (max-width:1440px) {\n  html {\n    font-size: 4px;\n  }\n}\n@media (max-width:1024px) {\n  .wrap_form-search {\n    width: 80%;\n  }\n}\n@media (max-width:768px) {\n  html {\n    font-size: 3.7px;\n  }\n  input {\n    width: 60%;\n    margin: 0;\n  }\n  button {\n    width: 20%;\n  }\n}\n@media (max-width:425px) {\n  html {\n    font-size: 3.5px;\n  }\n  .wrap_form-search {\n    width: 90%;\n  }\n  input {\n    width: 50%;\n    padding: 0 5px;\n  }\n\n  button {\n    width: 30%;\n    height: 40px;\n    font-weight: normal;\n  }\n}\n@media (max-width:375px) {\n  html {\n    font-size: 3px;\n  }\n}\n@media (max-width:320px) {\n  html {\n    font-size:3px;\n  }\n}\n",""])},function(t,e,n){t.exports=n.p+"0ce173f3f3a19936a000035c154d9e00.jpg"},function(t,e,n){"use strict";n.r(e);class i{constructor(){this.q="",this.baseLink="https://www.googleapis.com/youtube/v3/",this.endpoint="search",this.endpointStatist="videos",this.apiKey="AIzaSyBrg1WD0K5YTRi9XjsdamXd3j1d05Jt3sY",this.type="video",this.part="snippet",this.partStatist="statistics",this.maxResults="15",this.nextPageToken=""}static extractClipID(t){return t.items.map(t=>t.id.videoId)}static extractNextPageToken(t){return t.nextPageToken}static async getResponseData(t){return(await fetch(t)).json()}getBaseUrl(){return this.q=document.getElementById("search-video").value,`${this.baseLink+this.endpoint}?key=${this.apiKey}&type=${this.type}&part=${this.part}&maxResults=${this.maxResults}&q=${this.q}`}async makeUrlWithStatistics(t){const e=await i.getResponseData(t);this.nextPageToken=i.extractNextPageToken(e);const n=i.extractClipID(e).join(",");return`${this.baseLink+this.endpointStatist}?&key=${this.apiKey}&id=${n}&part=${this.part},${this.partStatist}`}async getUrlWithStatistic(){const t=this.getBaseUrl();return this.makeUrlWithStatistics(t)}async getNextPageUrlWithStatistic(){const t=`${this.getBaseUrl()}&pageToken=${this.nextPageToken}`;return this.makeUrlWithStatistics(t)}static changeValueProperty(){const t=document.querySelector(".videos-list");let e=+getComputedStyle(t).getPropertyValue("--videos-total");e+=15,t.style.setProperty("--videos-total",`${e}`)}}class o{constructor(t){this.url=t}static extractVideosData(t){return t.items.map(t=>{const e={};return e.image=t.snippet.thumbnails.medium.url,e.videoId=t.id,e.title=t.snippet.title,e.channelName=t.snippet.channelTitle,e.publishedData=(t=>t.match(/(\d{4}-\d{2}-\d{2})/)[0])(t.snippet.publishedAt),e.description=t.snippet.description,e.viewCount=t.statistics.viewCount,e})}async getVideosData(){const t=await fetch(this.url),e=await t.json();return o.extractVideosData(e)}}class r{static swipe(){const t=document.querySelector(".videos-list");let e,n,i=!1;t.addEventListener("mousedown",o=>{i=!0,t.classList.add("active"),e=o.pageX-t.offsetLeft,n=t.scrollLeft}),t.addEventListener("mouseleave",()=>{i=!1,t.classList.remove("active")}),t.addEventListener("mouseup",()=>{i=!1,t.classList.remove("active")}),t.addEventListener("mousemove",o=>{if(!i)return;o.preventDefault();const r=3*(o.pageX-t.offsetLeft-e);t.scrollLeft=n-r})}}n(4),n(10);var s=class{static cleanPage(){document.querySelector(".videos-list").innerHTML=""}static drawPage(){const t=document.createElement("h1");t.innerHTML="Youtube Video",document.body.appendChild(t);const e=document.createElement("div");e.setAttribute("class","wrap_form-search"),document.body.appendChild(e);const n=document.createElement("input");n.setAttribute("class","form-search"),n.setAttribute("id","search-video"),n.setAttribute("type","search"),n.setAttribute("placeholder","What do you want to find?"),n.setAttribute("autofocus","true"),e.appendChild(n);const i=document.createElement("button");i.innerHTML="Search",i.setAttribute("class","btn-search"),e.appendChild(i);const o=document.createElement("div");o.setAttribute("class","videos-list"),document.body.appendChild(o)}static drawVideos(t){const e=`\n    ${t.map(t=>`<div class = "wrap-video-container">\n    <ul class="video-container">\n      <li class = "video-container_item-media">\n          <img class = "item-media_img" src="${t.image}" alt="${t.title}">\n          <a class="video_link" href="https://www.youtube.com/watch?v=${t.videoId}" target="_blank">\n            ${t.title}\n          </a>\n      </li>\n      <li class = "video-container_item-channelName"><i class = "icon-child"></i>${t.channelName}</li>\n      <li class = "video-container_item-data"><i class = " icon-calendar"></i>${t.publishedData}</li>\n      <li class = "video-container_item-description"> ${t.description} </li>\n      <li class = "video-container_item-viewCount"><i class = "icon-eye"></i>${t.viewCount}</li>\n    </ul></div>`).join("")}`;document.querySelector(".videos-list").insertAdjacentHTML("beforeend",e),r.swipe()}};(new class{constructor(){this.controller=new i}async showVideos(){const t=await this.controller.getUrlWithStatistic(),e=new o(t),n=await e.getVideosData();s.drawVideos(n)}async showNextVideos(){const t=await this.controller.getNextPageUrlWithStatistic(),e=new o(t),n=await e.getVideosData();i.changeValueProperty(),s.drawVideos(n)}start(){s.drawPage();const t=document.querySelector(".btn-search"),e=document.querySelector(".form-search");t.addEventListener("click",()=>{s.cleanPage(),this.showVideos()}),e.addEventListener("keyup",e=>{13===e.keyCode&&(s.cleanPage(),e.preventDefault(),t.click())});const n=document.querySelector(".videos-list");n.addEventListener("scroll",()=>{const t=n.scrollLeft;n.scrollLeft=n.scrollWidth;const e=n.scrollLeft;n.scrollLeft=t,n.scrollLeft===e&&this.showNextVideos()})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map