parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ClBR":[function(require,module,exports) {
var a=document.querySelector(".preload");a.classList.add("play");
},{}],"moGU":[function(require,module,exports) {
var e=document.querySelector(".burger"),s=document.querySelector(".header"),o=document.querySelector(".menu");e.addEventListener("click",function(c){e.classList.contains("show")?(e.classList.remove("show"),s.classList.remove("show"),o.classList.remove("menu_show"),document.body.style.overflow="visible"):(e.classList.add("show"),s.classList.add("show"),o.classList.add("menu_show"),document.body.style.overflow="hidden")});var c=document.querySelector(".menu_btn_contact"),t=document.querySelector(".menu_form"),n=document.querySelector(".menu_col_1"),d=document.querySelector(".menu_col_2");c.addEventListener("click",function(e){n.classList.add("menu_col-1_hide"),d.classList.add("menu_col-2_hide"),t.classList.remove("menu_form_hide")});var r=document.querySelector(".menu_form_close");r.addEventListener("click",function(e){n.classList.remove("menu_col-1_hide"),d.classList.remove("menu_col-2_hide"),t.classList.add("menu_form_hide")});
},{}],"xStd":[function(require,module,exports) {
var e=document.querySelectorAll(".slider-arr_left"),t=document.querySelectorAll(".slider-arr_right"),i=!1,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){if(!i){var r=t.currentTarget.getAttribute("data-id"),n=document.getElementById(r).querySelector(".slider_container"),a=n.querySelectorAll(".slider_item"),o=a[0].clientWidth,s=n.offsetLeft,l=a.length,d=Math.abs(s)/o+e;if(d>=0&&d<l){i=!0;var f=d*o;n.style.marginLeft="-"+f+"px",setTimeout(function(){i=!1,c(n)},310)}var u=document.querySelectorAll('[data-id="'+r+'"].slider-arr_right'),v=document.querySelectorAll('[data-id="'+r+'"].slider-arr_left');0===d||-1===d?v.forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}):d===l-1||d===l?u.forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}):(v.forEach(function(e){e.classList.contains("no-active")&&(e.classList.remove("no-active"),e.classList.add("active"))}),u.forEach(function(e){e.classList.contains("no-active")&&(e.classList.remove("no-active"),e.classList.add("active"))}))}}},c=function(e){e.querySelectorAll(".slider_item").forEach(function(e){var t=window.innerWidth,i=e.offsetLeft,r=t-(i+e.offsetWidth);console.log(i,r),i<0||r<0?e.classList.add("slider_item_hide"):i>=0&&r>=0&&e.classList.remove("slider_item_hide")})},n=function(){document.querySelectorAll(".slider_container").forEach(function(e){e.style.transition="none",e.style.marginLeft=0,e.style.transition=null}),document.querySelectorAll(".slider-arr_left").forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}),c(document)},a=r(-1),o=r(1);window.addEventListener("resize",n),c(document),e.forEach(function(e){e.addEventListener("click",a)}),t.forEach(function(e){e.addEventListener("click",o)});
},{}],"QN18":[function(require,module,exports) {
var o=document.querySelectorAll(".scroll"),e=function(){var o=document.querySelector(".main").clientHeight;console.log(o),window.scrollTo({top:o,behavior:"smooth"})};o.forEach(function(o){o.addEventListener("click",e)});
},{}],"TJpn":[function(require,module,exports) {
var t=document.querySelectorAll(".parallax_container");t.forEach(function(t){t.addEventListener("mousemove",function(e){var a=t.querySelector(".parallax_img"),r=12*(e.clientX/a.clientWidth-.5),n=12*(e.clientY/a.clientHeight-.5);a.style.transform="translate3d(0px, 0px, 0px) rotateY(".concat(n,"deg) rotateX(").concat(r,"deg)")})}),t.forEach(function(t){t.addEventListener("mouseout",function(e){t.querySelector(".parallax_img").style.transform="translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)"})});
},{}],"Focm":[function(require,module,exports) {
require("./scripts/preload"),require("./scripts/menu"),require("./scripts/slider"),require("./scripts/scroll"),require("./scripts/parallax");
},{"./scripts/preload":"ClBR","./scripts/menu":"moGU","./scripts/slider":"xStd","./scripts/scroll":"QN18","./scripts/parallax":"TJpn"}]},{},["Focm"], null)
//# sourceMappingURL=src.d22fd629.js.map