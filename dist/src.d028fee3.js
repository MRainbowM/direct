parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ClBR":[function(require,module,exports) {
var e=document.querySelector(".preload");e.classList.add("preload_play"),setTimeout(function(){e.classList.remove("preload"),e.classList.remove("preload_play")},2900);
},{}],"moGU":[function(require,module,exports) {
var e=document.querySelector(".burger"),s=document.querySelector(".header"),o=document.querySelector(".menu");e.addEventListener("click",function(c){e.classList.contains("show")?(e.classList.remove("show"),s.classList.remove("show"),o.classList.remove("menu_show"),document.body.style.overflow="visible"):(e.classList.add("show"),s.classList.add("show"),o.classList.add("menu_show"),document.body.style.overflow="hidden")});var c=document.querySelector(".menu_btn_contact"),t=document.querySelector(".menu_form"),n=document.querySelector(".menu_col_1"),d=document.querySelector(".menu_col_2");c.addEventListener("click",function(e){n.classList.add("menu_col-1_hide"),d.classList.add("menu_col-2_hide"),t.classList.remove("menu_form_hide")});var r=document.querySelector(".menu_form_close");r.addEventListener("click",function(e){n.classList.remove("menu_col-1_hide"),d.classList.remove("menu_col-2_hide"),t.classList.add("menu_form_hide")});
},{}],"xStd":[function(require,module,exports) {
var e=document.querySelectorAll(".slider-arr_left"),t=document.querySelectorAll(".slider-arr_right"),i=!1,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){if(!i){var r=t.currentTarget.getAttribute("data-id"),n=document.getElementById(r).querySelector(".slider_container"),a=n.querySelectorAll(".slider_item"),o=a[0].clientWidth,s=n.offsetLeft,l=a.length,d=Math.abs(s)/o+e;if(d>=0&&d<l){i=!0;var f=d*o;console.log(f),n.style.marginLeft="-"+f+"px",setTimeout(function(){i=!1,c(n)},310)}var u=document.querySelectorAll('[data-id="'+r+'"].slider-arr_right'),v=document.querySelectorAll('[data-id="'+r+'"].slider-arr_left');0===d||-1===d?v.forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}):d===l-1||d===l?u.forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}):(v.forEach(function(e){e.classList.contains("no-active")&&(e.classList.remove("no-active"),e.classList.add("active"))}),u.forEach(function(e){e.classList.contains("no-active")&&(e.classList.remove("no-active"),e.classList.add("active"))}))}}},c=function(e){e.querySelectorAll(".slider_item").forEach(function(e){var t=window.innerWidth,i=e.offsetLeft,r=t-(i+e.offsetWidth);i<0||r<0?e.classList.add("slider_item_hide"):i>=0&&r>=0&&e.classList.remove("slider_item_hide")})},n=function(){document.querySelectorAll(".slider_container").forEach(function(e){e.style.transition="none",e.style.marginLeft=0,e.style.transition=null}),document.querySelectorAll(".slider-arr_left").forEach(function(e){e.classList.add("no-active"),e.classList.remove("active")}),c(document)},a=r(-1),o=r(1);window.addEventListener("resize",n),c(document),e.forEach(function(e){e.addEventListener("click",a)}),t.forEach(function(e){e.addEventListener("click",o)});
},{}],"QN18":[function(require,module,exports) {
var o=document.querySelectorAll(".scroll"),e=function(){var o=document.querySelector(".main").clientHeight;console.log(o),window.scrollTo({top:o,behavior:"smooth"})};o.forEach(function(o){o.addEventListener("click",e)});
},{}],"TJpn":[function(require,module,exports) {
var t=document.querySelectorAll(".parallax_container");t.forEach(function(t){t.addEventListener("mousemove",function(e){var a=t.querySelector(".parallax_img"),r=15*(e.clientX/a.clientWidth-.5),n=15*(e.clientY/a.clientHeight-.5);a.style.transform="translate3d(0px, 0px, 0px) rotateY(".concat(n,"deg) rotateX(").concat(r,"deg)")})}),t.forEach(function(t){t.addEventListener("mouseout",function(e){t.querySelector(".parallax_img").style.transform="translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)"})});
},{}],"QjyC":[function(require,module,exports) {
var t=document.querySelectorAll(".card"),e=[];function r(t,e){var r=this;this.now,this.then=Date.now(),this.delta,this.currentTimeOffset=0,this.word=null,this.currentWord=null,this.currentCharacter=0,this.currentWordLength=0;var i={fps:20,timeOffset:5,textColor:"#000",fontSize:"50px",useCanvas:!1,mixCapital:!1,mixSpecialCharacters:!1,needUpdate:!0,colors:["#000000"]};if(void 0!==e)for(key in e)i[key]=e[key];this.needUpdate=!0,this.fps=i.fps,this.interval=1e3/this.fps,this.timeOffset=i.timeOffset,this.textColor=i.textColor,this.fontSize=i.fontSize,this.mixCapital=i.mixCapital,this.mixSpecialCharacters=i.mixSpecialCharacters,this.colors=i.colors,this.useCanvas=i.useCanvas,this.chars=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this.specialCharacters=["!","§","$","%","&","/","(",")","=","?","_","<",">","^","°","*","#","-",":",";","~"],this.mixSpecialCharacters&&(this.chars=this.chars.concat(this.specialCharacters)),this.getRandomColor=function(){var t=Math.floor(Math.random()*this.colors.length);return this.colors[t]},this.position={x:0,y:50},void 0!==t&&(this.holder=t),this.useCanvas||void 0!==this.holder||console.warn("Holder must be defined in DOM Mode. Use Canvas or define Holder"),this.getRandCharacter=function(t){if(" "==t)return" ";var e=Math.floor(Math.random()*this.chars.length),r=-.5+Math.random(),i=this.chars[e],s=i.toLowerCase();return this.mixCapital&&(s=r<0?i.toLowerCase():i),s},this.writeWord=function(t){this.word=t,this.currentWord=t.split(""),this.currentWordLength=this.currentWord.length},this.generateSingleCharacter=function(t,e){var r=document.createElement("span");return r.style.color=t,r.innerHTML=e,r},this.updateCharacter=function(t){if(this.now=Date.now(),this.delta=this.now-this.then,this.delta>this.interval){this.currentTimeOffset++;var e=[];this.currentTimeOffset===this.timeOffset&&this.currentCharacter!==this.currentWordLength&&(this.currentCharacter++,this.currentTimeOffset=0);for(var i=0;i<this.currentCharacter;i++)e.push(this.currentWord[i]);for(var s=0;s<this.currentWordLength-this.currentCharacter;s++)e.push(this.getRandCharacter(this.currentWord[this.currentCharacter+s]));if(r.useCanvas){c.clearRect(0,0,stage.x*stage.dpr,stage.y*stage.dpr),c.font=r.fontSize+" sans-serif";var a=0;e.forEach(function(t,e){e>r.currentCharacter?c.fillStyle=r.getRandomColor():c.fillStyle=r.textColor,c.fillText(t,r.position.x+a,r.position.y),a+=c.measureText(t).width})}else r.currentCharacter===r.currentWordLength&&(r.needUpdate=!1),this.holder.innerHTML="",e.forEach(function(t,e){var i=null;i=e>r.currentCharacter?r.getRandomColor():r.textColor,r.holder.appendChild(r.generateSingleCharacter(i,t))});this.then=this.now-this.delta%this.interval}},this.restart=function(){this.currentCharacter=0,this.needUpdate=!0},this.writeWord(this.holder.innerHTML),function t(e){e++,r.needUpdate&&r.updateCharacter(e),requestAnimationFrame(t)}(0)}window.addEventListener("scroll",function(r){t.forEach(function(t){var r=t.getBoundingClientRect().top,i=window.innerHeight-t.clientHeight+300;if(r<=i&&-1==e.indexOf(t)){console.log(i),e.push(t),t.classList.remove("card_hide"),t.classList.add("card_show");t.querySelector(".card_title")}})});
},{}],"Focm":[function(require,module,exports) {
require("./scripts/preload"),require("./scripts/menu"),require("./scripts/slider"),require("./scripts/scroll"),require("./scripts/parallax"),require("./scripts/projects");
},{"./scripts/preload":"ClBR","./scripts/menu":"moGU","./scripts/slider":"xStd","./scripts/scroll":"QN18","./scripts/parallax":"TJpn","./scripts/projects":"QjyC"}]},{},["Focm"], null)
//# sourceMappingURL=/src.d028fee3.js.map