!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=0)}([function(n,r,t){"use strict";t.r(r);var e,o;t(1);e=document.querySelector(".iconSelect"),o=document.querySelector(".navbar .navDiv"),e.addEventListener("click",(function(){e.classList.toggle("closeOnly"),o.classList.toggle("navLinks-onScreen")}))},function(n,r,t){var e=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(e(n.i,o,a),o.locals?o.locals:{});n.exports=i},function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),i={};function c(n,r,t){for(var e=0;e<r.length;e++){var o={css:r[e][1],media:r[e][2],sourceMap:r[e][3]};i[n][e]?i[n][e](o):i[n].push(x(o,t))}}function l(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var s,p=(s=[],function(n,r){return s[n]=r,s.filter(Boolean).join("\n")});function d(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function u(n,r,t){var e=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var f=null,g=0;function x(n,r){var t,e,o;if(r.singleton){var a=g++;t=f||(f=l(r)),e=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=l(r),e=u.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o()),n=t.base?n+t.base:n,r=r||[],i[n]||(i[n]=[]),c(n,r,t),function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){i[n]||(i[n]=[]),c(n,r,t);for(var e=r.length;e<i[n].length;e++)i[n][e]();i[n].length=r.length,0===i[n].length&&delete i[n]}}}},function(n,r,t){var e=t(4),o=t(5),a=t(6);r=e(!1);var i=o(a);r.push([n.i,"/* Extra small devices (phones, 600px and down) */\r\n\r\n\r\n*{\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing:border-box; \r\n}\r\n\r\nbody{\r\n\t\r\n\toverflow-x: hidden;\r\n\tfont-family: 'Roboto Mono', monospace;\r\n\r\n\r\n}\r\nsection h2{\r\n\t/*text-shadow: 2px 2px 4px #0f0f0f;*/\r\n\tpadding-top:40px;\r\n\tpadding-bottom: 30px;\r\n\tcolor: white;\r\n}\r\n.projects h2{\r\n\tcolor: black;\r\n}\r\nsection{\r\n\t\r\n\t\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\n/* Navigation Bar*/\r\n\r\n.headerClass{\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\t\r\n\tjustify-content: flex-end;\r\n\theight:auto;\r\n\tposition:fixed;\r\n\ttop:0px;\r\n\twidth:100%;\r\n\tz-index:1; \r\n\tbackground-color: black;\r\n\r\n}\r\n/*\r\n.logo{\r\n\tcolor:white;\r\n}\r\n*/\r\n.navbar{\r\n\t\r\n\tmargin-top:0px;\r\n\tdisplay:flex; \r\n\tflex-direction: row;\r\n}\r\n\r\n\r\n.iconSelect{\r\n\tbackground-color: black;\r\n\t\r\n\tmax-height:100%;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navbar .burger,.navbar .closeIcon{\r\n\tbackground-color: black;\r\n\tpadding:8px;\r\n\tdisplay: none;\r\n\tcolor:grey;\r\n}\r\n\r\n.navbar ul{\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-end;\r\n\tlist-style: none;\r\n}\r\n.navbar ul li{\r\n\tpadding:10px;\r\n}\r\n.navbar ul  a{\r\n\ttext-decoration: none;\r\n\tcolor:white;\r\n}\r\nheader .navbar li a{\r\n\tcolor:white;\r\n\tpadding-right:25px;\r\n\tfont-size: 1em;\r\n\tfont-family: 'Signika', sans-serif;\r\n\tletter-spacing: .1rem;\r\n\ttext-transform: uppercase;\r\n\r\n\ttext-decoration:none;\r\n}\r\n.navbar ul a:hover {\r\n\tcolor: #a76676;\r\n}\r\n.navbar ul a:active {\r\n\tcolor: #a76676;\r\n}\r\n\r\n/***** Home  Page ****/\r\n#homePage{\r\n\t\r\n\twidth:100%;\r\n/*\theight:93vh; */\r\n    height:100vh;\r\n\tmargin:auto;\r\n\t\r\n}\r\n#particles-js{\r\n\theight:90vh;\r\n\r\n}\r\n#homePage{\r\n\tbackground-image: url("+i+");\r\n\t/*background-image: url(\"../images/box.png\"); */\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\toverflow-x: hidden;\r\n\talign-content: center;\r\n\t/*filter:blur(1px);*/\r\n\t\r\n\r\n}\r\n\r\n\r\n.homePageFlex{\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n\talign-content: center;\r\n\tposition:absolute;\r\n\tmin-width:50%;\r\n\tmin-height:50%;\r\n\ttop:15%;\r\n\tbottom: 15%;\r\n\tmargin:auto;\r\n\tleft:15%;\r\n\tright:15%;\r\n\tbackground-color: rgba(0,0,0,0.7);\r\n\tcolor: white;\r\n\tpadding:20px 30px;\r\n\tbox-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);\r\n\tborder-radius: 5px;\r\n\r\n}\r\n.homePageFlex .iconsHomePage{\r\n\tpadding:10px;\r\n\tmargin : 10px;\r\n}\r\n\r\n.homePageFlex .iconsHomePage a{\r\n\t\ttext-decoration: none;\r\n\t\tcolor: white;\r\n\t\tfont-size: 1.2em;\r\n}\r\n\r\n.homePageFlex .iconsHomePage a:hover{\r\n\t\tcolor: #883444;\r\n\t\t\t\t/* #001323;*/\r\n\t\t\t\r\n}\r\n\r\n.homePageFlex h1{\r\n\tfont-family: 'Noto Sans', sans-serif;\r\n\tfont-size: 2.4em;\r\n\tpadding:5px 3px 0px 3px;\r\n\tcolor: white;\r\n\t/*text-shadow: 2px 2px 4px black;  */\r\n\ttext-align: left;\r\n\tletter-spacing: .1em;\r\n\r\n\r\n\r\n}\r\n/*\r\n\r\n.homePageFlex h1.h1First{\r\n\tanimation: slide-caption 0.5s ease-in 1s;\r\n}\r\n.homePageFlex h1.h1Second{\r\n\tanimation: slide-caption 1s ease-in 1.5s;\r\n}\r\n\r\n\r\n*/\r\n.homePageFlex button{\r\n\tanimation: button-spin 1s ease-in 2.5s;\r\n\tbackground-color: transparent;\r\n\t/*border:2px solid #155c61;*/\r\n\tborder:2px solid #883444;\r\n\tfont-weight: 400;\r\n\t\r\n\tborder-radius: 10px;\r\n\tmargin-top: 20px;\r\n\tpadding:8px 15px;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 1.2em;\r\n\tfont-family: 'Noto Sans', sans-serif;\r\n\tletter-spacing: .2em;\r\n\tcolor: white;\r\n\tcursor:pointer;\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\r\n\t\r\n\t\r\n\r\n\r\n}\r\n.homePageFlex button a{\r\n\ttext-decoration: none;\r\n\tcolor:white;\r\n}\r\n.homePageFlex button:hover{\r\n\t\r\n\tborder:2px solid white;\t\r\n}\r\n\r\n\r\n/*About Me */\r\n#aboutMe{\r\n\t/*background-color: #ccc;  */\r\n\tbackground-color: #883444;\r\n\ttext-align: center;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tcolor: black;\r\n\r\n}\r\n#aboutMe h2{\r\n\tpadding-top: 40px;\r\n\tpadding-bottom:20px;\r\n\tfont-family: 'Roboto Mono', monospace;\r\n\r\n\r\n}\r\n#aboutMe p{\r\n\ttext-align: center;\r\n\tfont-size: 1.1em;\r\n\tfont-family: 'Roboto Mono', monospace;\r\n\tpadding-bottom:50px;\r\n\tpadding-left:25px;\r\n\tpadding-right:25px;\r\n\tcolor: #ececec;\r\n\r\n\r\n}\r\n\r\n/*Skills*/\r\n#skillsSection{\r\n\tbackground-color: #323232;\r\n\tborder-bottom: 4px solid #883444;\r\n}\r\n\r\n#skillsSection h2{\r\n\tcolor: black;\r\n\tpadding-top: 40px;\r\n\tpadding-bottom:20px;\r\n\tfont-family: 'Roboto Mono', monospace;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.skillsLogos{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-around;\r\n\r\n}\r\n.logoCard{\r\n\t\r\n\tmargin: 45px;\r\n\tbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\r\n}\r\n\r\n.logoCard h4{\r\n\tmargin: 10px 5px 10px 5px;\r\n}\r\n\r\n#projectsSection{\r\n\t/*background-image: url('../images/paperBG.jpg');*/\r\n\tbackground-color: #e2e2e2;\r\n}\r\n/*projects*/\r\n.projects{\r\n\t/*background-color: #883444;\r\n\t/*herergba(255, 255, 0,0.5);*/\r\n\tmargin-bottom: 0px;\r\n\t/*background-image: url('images/paperBG.jpg'); */\r\n\r\n}\r\n.projectsFlexContainer{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-around;\r\n\tflex-wrap: wrap;\r\n}\r\n.projectCard .featuredProject{\r\n\tpadding: 10px;\r\n\tbackground-color: red;\r\n\tcolor: white;\r\n}\r\n.projectCard button {\r\n  background-color: #3f3f3f; \r\n  border: none;\r\n  border-radius: 3px;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.disabled{\r\n\topacity:0.8;\r\n\tcursor:not-allowed !important;\r\n\r\n}\r\ndiv.projectCard {\r\n  width: 350px;\r\n  height:auto;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  text-align: center;\r\n  background-color: #883444;\r\n  padding-bottom: 10px;\r\n  margin:25px;\r\n  padding-bottom:10px;\r\n\r\n}\r\n\r\n.projectCard {\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  width: 40%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.projectCard:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);\r\n  background-color: #977f7f;\r\n}\r\n.projectCard img{\r\n\theight:auto;\r\n}\r\n\r\ndiv.detailsContainer {\r\n  padding: 10px;\r\n}\r\ndiv.detailsContainer button a{\r\n\ttext-decoration:none;\r\n\tcolor:white;\r\n\r\n}\r\n\r\ndiv.detailsContainer p:first-of-type{\r\n\t\tcolor: white;\r\n}\r\ndiv.detailsContainer p{\r\n\tcolor: #e2e2e2;\r\n}\r\n\r\n\r\ndiv.detailsContainer h3:first-of-type{\r\n\tcolor: #ececec;\r\n}\r\n\r\n\r\ndiv.projects{\r\n\t\r\n\tpadding-bottom: 50px;\r\n}\r\n\r\n\r\n/*footer*/\r\n#contactSection .socialIcons h3{\r\n\tfont-family: 'Pacifico', cursive;\r\n\tcolor:rgba(0,0,0,0.7);\r\n}\r\n.socialIcons div{\r\n\tmargin:20px;\r\n}\r\n.socialIcons div h3{\r\n    font-family: 'Signika', sans-serif;\r\n}\r\nfooter section{\r\n\tbackground-color: #353c44;\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 10px;\r\n}\r\nfooter a{\r\n\ttext-decoration: none;\r\n\tcolor:black;\r\n}\r\n\r\n\r\nfooter .gmail{\r\n\tfont-family: 'Roboto Mono', monospace;\r\n\t/*color:rgba(0,0,0,0.8); */\r\n\tcolor: #e2e2e2;\r\n\tpadding-bottom: 20px;\r\n\r\n}\r\nfooter a:hover{\r\n\tcolor: #883444;\r\n\t/* #001323;*/\r\n}\r\n\r\ndiv.copyright .copyrightInfo{\r\n\t\r\n\tcolor: rgba(255,255,255,0.4);\r\n}\r\n\r\n#copyrightFooter{\r\n\tbackground-color: black;\r\n}\r\n\r\n\r\n/****For smaller screens (to make it responsive)**/\r\n\r\n@media screen and (max-width: 800px){\r\n\t.headerClass{\r\n\t\tdisplay:block;\r\n\t\t\r\n\t\tmin-height:50px;\r\n\r\n\t}\r\n\t\r\n\t.navbar ul{\r\n\t\t\r\n  \t  \tdisplay:flex ;\r\n\t\tflex-direction: column;\r\n\r\n\t}\r\n\t.navbar .navDiv{\r\n\t\ttransform: translateX(100%);\r\n\t\ttransition: transform 0.2s ease-in;\r\n\r\n\r\n\t}\r\n\t.navbar .navDiv{\r\n\t\tposition:absolute;\r\n\t\ttop:50px; /*with respect to its previus or parent?! */ \r\n\t\tright:0px;\r\n\t\tbackground-color: rgba(0,0,0,0.9);\r\n\t\t\r\n\t}\r\n\r\n\t.headerClass .navbar .navLinks-onScreen{\r\n\t\ttransform: translateX(0%);\r\n\t}\r\n\t.navbar .burger{\r\n\t\tdisplay: block;\r\n\t\t\r\n\r\n\t\tmargin-right:10px;\r\n\r\n\t}\r\n\r\n\t.navbar .closeIcon{\r\n\t\tdisplay: none;\r\n\t\tmargin-right:auto;\r\n\r\n\t\t\r\n\t}\r\n\t.navbar{\r\n\t\tdisplay:flex;\r\n\t\tjustify-content: flex-end;\r\n\t}\r\n\r\n\t.closeOnly .burger{\r\n\t\tdisplay:none;\r\n\t}\r\n\t.closeOnly .closeIcon{\r\n\t\tdisplay:block;\r\n\t\tmargin-right: 10px;\r\n\t}\r\n\t.homePageFlex h1{\r\n\t\tfont-size: 2em;\r\n\t   padding:3px 2px 0px 2px;\r\n\r\n\r\n\t}\r\n\t#homePage{\r\n\t\theight: auto;\r\n\t}\r\n\t.homePageFlex button{\r\n\t\tfont-size: 1em;\r\n\t}\r\n\t#homePage{\r\n\t\toverflow-y: hidden;\r\n\t}\r\n\t/*\r\n\t#homePage{\r\n\tbackground-image: url(\"./images/notebook_smallscreen.jpg\"); \r\n\t}*/\r\n}\r\n\r\n@keyframes button-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n@keyframes slide {\r\n  from {\r\n    transform: translateX(130%);;\r\n  }\r\n  to {\r\n      transform: translateX(0%);;\r\n  }\r\n}\r\n\r\n/*\r\n@keyframes slide-caption {\r\n  from {\r\n    transform: translateX(-10%);;\r\n  }\r\n  to {\r\n      transform: translateX(0%);;\r\n  }\r\n}\r\n\r\n*/",""]),n.exports=r},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(i=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,l;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);e&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},function(n,r,t){"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,t){n.exports=t.p+"images/the-polygon.jpg"}]);