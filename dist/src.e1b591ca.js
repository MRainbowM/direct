parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ClBR":[function(require,module,exports) {
var s=document.querySelector(".preload");window.innerWidth>765?s.classList.add("preload_play"):s.classList.add("preload_play_mobi"),setTimeout(function(){s.classList.remove("preload"),console.log(s.classList),s.classList.contains("preload_play")?s.classList.remove("preload_play"):s.classList.contains("preload_play_mobi")&&s.classList.remove("preload_play_mobi")},2900);
},{}],"rGp8":[function(require,module,exports) {
var e=document.querySelectorAll(".cursor"),n=document.querySelector(".cursor-shadow"),o=document.querySelector(".cursor-dot");window.addEventListener("mousemove",function(e){o.style.left=e.clientX+"px",o.style.top=e.clientY+"px",n.style.transform="matrix(1, 0, 0, 1,"+e.clientX+", "+e.clientY+")"});var t=document.querySelectorAll(".cursor_link");t.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("active")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("active")})})});var r=document.querySelectorAll(".cursor_jump");r.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("jump")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("jump")})})});var c=document.querySelectorAll(".cursor_on_red");c.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("on_red")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("on_red")})})});var s=document.querySelectorAll(".cursor_on_black");s.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("on_black")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("on_black")})})});var i=document.querySelectorAll(".cursor_on_white");i.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("on_white")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("on_white")})})});var u=document.querySelectorAll(".cursor_review-1");u.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("review-1")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("review-1")})})});var a=document.querySelectorAll(".cursor_review-2");a.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("review-2")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("review-2")})})});var f=document.querySelectorAll(".cursor_review-3");f.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("review-3")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("review-3")})})});var d=document.querySelectorAll(".cursor_review-4");d.forEach(function(n){n.addEventListener("mouseenter",function(){e.forEach(function(e){e.classList.add("review-4")})}),n.addEventListener("mouseleave",function(){e.forEach(function(e){e.classList.remove("review-4")})})});
},{}],"dzCO":[function(require,module,exports) {
var e=document.querySelector(".burger");e.addEventListener("touchstart",function(t){e.classList.remove("show_hover")});var t=document.querySelectorAll(".cursor");document.addEventListener("touchstart",function(e){t.forEach(function(e){e.style.display="none"})});
},{}],"moGU":[function(require,module,exports) {
var e=document.querySelector(".burger"),s=e.querySelectorAll(".line"),o=document.querySelector(".header"),t=document.querySelector(".menu"),c=document.querySelector(".menu_btn_contact"),l=document.querySelector(".menu_form"),d=document.querySelector(".menu_col_1"),r=document.querySelector(".menu_col_2"),n=document.querySelector(".btn_peoples"),i=document.querySelector(".job_page"),a=document.querySelectorAll(".policy_link"),u=document.querySelector(".policy"),_=document.querySelector(".contact_page"),m=!1;a.forEach(function(t){t.addEventListener("click",function(t){o.classList.add("header_show_on_white"),e.classList.add("burger_show_on_white"),u.classList.add("policy_show"),e.classList.contains("burger_show")?m=!1:(document.body.style.overflow="hidden",document.body.style.marginRight="7px",o.classList.add("header_show"),e.classList.add("burger_show"),m=!0),s.forEach(function(e){e.style.width=null})})}),n.addEventListener("click",function(t){e.classList.add("burger_show"),i.classList.add("job_page_show"),s.forEach(function(e){e.style.width=null}),o.classList.add("header_show"),document.body.style.overflow="hidden",document.body.style.marginRight="7px"}),e.addEventListener("click",function(s){var c=e.classList.contains("burger_show"),n=u.classList.contains("policy_show");c&&!n?(document.body.style.overflow="visible",document.body.style.marginRight=null,e.classList.remove("burger_show"),o.classList.remove("header_show"),t.classList.remove("menu_show"),d.classList.remove("menu_col-1_hide"),r.classList.remove("menu_col-2_hide"),l.classList.add("menu_form_hide"),_.classList.remove("contact_page_show"),i.classList.remove("job_page_show")):c||n||(e.classList.add("burger_show"),o.classList.add("header_show"),t.classList.add("menu_show"),document.body.style.overflow="hidden",document.body.style.marginRight="7px"),n&&(document.body.style.overflow="visible",document.body.style.marginRight=null,o.classList.remove("header_show_on_white"),e.classList.remove("burger_show_on_white"),u.classList.remove("policy_show"),m&&(e.classList.remove("burger_show"),o.classList.remove("header_show")))}),c.addEventListener("click",function(e){d.classList.add("menu_col-1_hide"),r.classList.add("menu_col-2_hide"),l.classList.remove("menu_form_hide")});
},{}],"xStd":[function(require,module,exports) {
var e=document.querySelectorAll(".slider-arr_left"),t=document.querySelectorAll(".slider-arr_right"),i=!1,n=function(e,t){var n=document.getElementById(e).querySelector(".slider_container"),r=n.querySelectorAll(".slider_item"),a=r.length,o=r[0].clientWidth,l=0;t>=0&&t<a?(i=!0,l=t*o):t>=a?(i=!0,l=(a-1)*o):t<0&&(i=!0,l=0),n.style.marginLeft="-"+l+"px",setTimeout(function(){i=!1,c(n)},320);var s=document.querySelectorAll('[data-id="'+e+'"].slider-arr_right'),d=document.querySelectorAll('[data-id="'+e+'"].slider-arr_left');0===t||-1===t?d.forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}):t===a-1||t===a?s.forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}):(d.forEach(function(e){e.classList.contains("no-active")&&(e.classList.remove("no-active"),e.classList.add("active"))}),s.forEach(function(e){e.classList.contains("no-active")&&(e.classList.remove("no-active"),e.classList.add("active"))}))},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){if(!i){var r=t.currentTarget,c="";c=r.getAttribute("data-id")?r.getAttribute("data-id"):r.closest(".slider").id;var o=document.getElementById(c).querySelector(".slider_container"),l=o.querySelectorAll(".slider_item")[0].clientWidth,s=a(o,l);n(c,s+e)}}},a=function(e,t){var i=e.offsetLeft,n=Math.abs(i)/t;return n=Math.ceil(n)},c=function(e){e.querySelectorAll(".slider_item").forEach(function(e){var t=window.innerWidth,i=e.offsetLeft,n=t-(i+e.offsetWidth);i<0||n<0?e.classList.add("slider_item_hide"):i>=0&&n>=0&&e.classList.remove("slider_item_hide")})},o=function(){document.querySelectorAll(".slider_container").forEach(function(e){e.style.transition="none",e.style.marginLeft=0,e.style.transition=null}),document.querySelectorAll(".slider-arr_left").forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}),c(document)},l=r(-1),s=r(1);window.addEventListener("resize",o),c(document),e.forEach(function(e){e.addEventListener("click",l)}),t.forEach(function(e){e.addEventListener("click",s)});var d,u=0,f=30,v=0,h=0,m=0,L=0,y="",g=function(){document.querySelectorAll(".slider").forEach(function(e){e.addEventListener("touchstart",E),e.addEventListener("touchmove",_),e.addEventListener("touchend",q),e.addEventListener("mousedown",A),e.addEventListener("mousemove",S),e.addEventListener("mouseup",p)})};function E(e){u=e.changedTouches[0].pageX;var t=e.currentTarget;y=t.getAttribute("id"),(d=t.querySelector(".slider_container")).style.transition="none";var i=d.querySelectorAll(".slider_item");L=i[0].clientWidth,m=a(d,L),v=m*L}function _(e){if(0!=u){var t=u-e.changedTouches[0].pageX;h=v+t,d.style.marginLeft=-1*h+"px"}}function q(e){v=0,d.style.transition=null;var t=h/L,i=t-m;i>0?t=Math.ceil(t):i<0&&(t=Math.floor(t));var r=e.changedTouches[0].pageX-u;Math.abs(r)>f&&n(y,t),u=0}function A(e){u=e.pageX;var t=e.currentTarget;y=t.getAttribute("id"),(d=t.querySelector(".slider_container")).style.transition="none";var i=d.querySelectorAll(".slider_item");L=i[0].clientWidth,m=a(d,L),v=m*L}function S(e){if(0!=u){var t=u-e.pageX;h=v+t,d.style.marginLeft=-1*h+"px"}}function p(e){v=0,d.style.transition=null;var t=h/L,i=t-m;i>0?t=Math.ceil(t):i<0&&(t=Math.floor(t));var r=e.pageX-u;Math.abs(r)>f&&n(y,t),u=0}g();
},{}],"QN18":[function(require,module,exports) {
var e=document.querySelectorAll(".scroll_to_projects"),o=function(){var e=document.querySelector(".main").clientHeight;console.log(e),window.scrollTo({top:e,behavior:"smooth"})};e.forEach(function(e){e.addEventListener("click",o)});var t=document.querySelector(".f_top-arrow"),r=function(){window.scrollTo({top:0,behavior:"smooth"})};t.addEventListener("click",r);var c=document.querySelector(".burger"),n=document.querySelector(".header"),l=document.querySelector(".menu"),s=document.querySelectorAll(".menu_a");s.forEach(function(e){var o=e.getAttribute("data-link"),t=document.querySelector("#"+o);e.addEventListener("click",function(e){c.classList.remove("show"),n.classList.remove("show"),l.classList.remove("menu_show"),document.body.style.overflow="visible";var o=t.offsetTop;console.log(o),window.scrollTo({top:o,behavior:"smooth"})})});
},{}],"TJpn":[function(require,module,exports) {

},{}],"QjyC":[function(require,module,exports) {
var e=document.querySelectorAll(".card");window.addEventListener("scroll",function(t){e.forEach(function(e){var t=e.getBoundingClientRect().top,c=window.innerHeight-e.clientHeight-t,i=.05*window.innerHeight,a=t<i||c<i;if(t<=window.innerHeight-e.clientHeight+300){e.classList.remove("card_hide"),e.classList.add("card_show"),e.classList.add("card_active");e.querySelector(".card_title")}if(a){e.classList.remove("card_active"),null==document.querySelector(".card_active")&&e.classList.add("card_active");var r=e.querySelector(".parallax_img");r.style.transition="0.5s",r.style.transform=" rotateY(0deg) rotateX(0deg)",setTimeout(function(){r.style.transition=null},500)}else{document.querySelector(".card_active").classList.remove("card_active"),e.classList.add("card_active")}})}),window.addEventListener("mousemove",function(e){var t=document.querySelector(".card_active").querySelector(".parallax_img"),c=3.5*(e.clientX/t.clientWidth-.5),i=3.5*(e.clientY/t.clientHeight-.5);t.style.transform="rotateY(".concat(i,"deg) rotateX(").concat(c,"deg)")});
},{}],"dV4E":[function(require,module,exports) {
var e=document.querySelector(".header"),o=e.querySelector(".logo"),t=e.querySelector(".burger"),r=document.querySelector(".contacts"),c=document.querySelector(".footer"),l=0;window.addEventListener("scroll",function(e){var o=document.scrollingElement.scrollTop,n=t.querySelectorAll(".line");t.classList.add("burger_animate"),o>=c.offsetTop?n.forEach(function(e){e.style.backgroundColor="white"}):n.forEach(function(e){e.style.backgroundColor=null}),o>=r.offsetTop&&o<=c.offsetTop?t.classList.add("hover_white"):t.classList.remove("hover_white"),o>l&&o>0?n.forEach(function(e){e.style.width="0"}):n.forEach(function(e){e.style.width=null}),setTimeout(function(){t.classList.remove("burger_animate")},400),l=o});
},{}],"Gpwn":[function(require,module,exports) {
var n=document.querySelectorAll(".no-drag"),o=5,e=!1;function t(){n.forEach(function(n){n.onmousemove=null,n.ondragstart=null,n.onmouseleave=null}),e=!1}n.forEach(function(n){n.onmousedown=function(u){n.attributes.href&&(n.onclick=function(n){e&&n.preventDefault(),t()}),n.onmouseleave=function(){t()},n.onmousemove=function(t){n.ondragstart=function(n){n.preventDefault()},(Math.abs(t.x-u.x)>=o||Math.abs(t.y-u.y)>=o)&&(window.getSelection().selectAllChildren(n),e=!0)}}});
},{}],"AM7d":[function(require,module,exports) {
var e=document.querySelector(".menu_form"),t=document.querySelector(".contacts_form"),o=document.querySelector(".burger"),c=document.querySelector(".header"),d=o.querySelectorAll(".line"),n=document.querySelector(".contact_page");e.addEventListener("submit",function(e){r(e)}),t.addEventListener("submit",function(t){r(t),e.classList.add("menu_form_hide"),n.classList.add("contact_page_show"),o.classList.add("burger_show"),c.classList.add("header_show"),document.body.style.overflow="hidden",document.body.style.marginRight="7px",d.forEach(function(e){e.style.width=null})});var r=function(t){t.preventDefault(),e.classList.add("menu_form_hide"),n.classList.add("contact_page_show")};
},{}],"HZAp":[function(require,module,exports) {
var e=document.querySelectorAll(".content_hide"),t=document.querySelector(".peoples"),n=t.querySelectorAll(".content_hide"),o=0;n.forEach(function(e){o+=.2,e.style.transitionDelay=o+"s"});var c=document.querySelector(".events"),l=c.querySelectorAll(".content_hide");o=0,l.forEach(function(e){o+=.2,e.style.transitionDelay=o+"s"});var r=document.querySelector(".contacts"),i=r.querySelectorAll(".content_hide");o=0,i.forEach(function(e){o+=.2,e.style.transitionDelay=o+"s"});var s=function(){e.forEach(function(e){e.offsetTop<document.scrollingElement.scrollTop+window.innerHeight&&(e.classList.add("content_show"),setTimeout(function(){e.classList.remove("content_hide")},2e3))})};window.addEventListener("scroll",function(e){s()});
},{}],"Focm":[function(require,module,exports) {
require("./scripts/preload"),require("./scripts/cursor"),require("./scripts/touchstart"),require("./scripts/menu"),require("./scripts/slider"),require("./scripts/scroll"),require("./scripts/parallax"),require("./scripts/projects"),require("./scripts/burger"),require("./scripts/links_drags"),require("./scripts/submit_forms"),require("./scripts/content_animate");
},{"./scripts/preload":"ClBR","./scripts/cursor":"rGp8","./scripts/touchstart":"dzCO","./scripts/menu":"moGU","./scripts/slider":"xStd","./scripts/scroll":"QN18","./scripts/parallax":"TJpn","./scripts/projects":"QjyC","./scripts/burger":"dV4E","./scripts/links_drags":"Gpwn","./scripts/submit_forms":"AM7d","./scripts/content_animate":"HZAp"}]},{},["Focm"], null)
//# sourceMappingURL=/direct/dist/src.e1b591ca.js.map