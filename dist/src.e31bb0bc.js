// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/preload.js":[function(require,module,exports) {
// const preloading = document.querySelector('.preloading');
// preload.classList.add('play');
var preload = document.querySelector('.preload');
preload.classList.add('preload_play');
setTimeout(function () {
  preload.classList.remove('preload');
  preload.classList.remove('preload_play');
}, 2900);
},{}],"scripts/menu.js":[function(require,module,exports) {
var burger = document.querySelector('.burger');
var header = document.querySelector('.header');
var menu = document.querySelector('.menu');
burger.addEventListener('click', function (e) {
  var isShowMenu = burger.classList.contains('show');

  if (isShowMenu) {
    burger.classList.remove('show');
    header.classList.remove('show');
    menu.classList.remove('menu_show');
    document.body.style.overflow = "visible";
  } else {
    burger.classList.add('show');
    header.classList.add('show');
    menu.classList.add('menu_show');
    document.body.style.overflow = "hidden";
  }
});
var btnContact = document.querySelector('.menu_btn_contact');
var menuForm = document.querySelector('.menu_form');
var menuSoc = document.querySelector('.menu_col_1');
var menuLinks = document.querySelector('.menu_col_2');
btnContact.addEventListener('click', function (e) {
  menuSoc.classList.add('menu_col-1_hide');
  menuLinks.classList.add('menu_col-2_hide');
  menuForm.classList.remove('menu_form_hide');
});
var btnClose = document.querySelector('.menu_form_close');
btnClose.addEventListener('click', function (e) {
  menuSoc.classList.remove('menu_col-1_hide');
  menuLinks.classList.remove('menu_col-2_hide');
  menuForm.classList.add('menu_form_hide');
});
var menuLinksAll = document.querySelectorAll('.menu_a');
menuLinksAll.forEach(function (link) {
  link.addEventListener('click', function (e) {
    burger.classList.remove('show');
    header.classList.remove('show');
    menu.classList.remove('menu_show');
    document.body.style.overflow = "visible";
  });
});
},{}],"scripts/slider.js":[function(require,module,exports) {
var btnsLeft = document.querySelectorAll('.slider-arr_left');
var btnsRight = document.querySelectorAll('.slider-arr_right');
var isAnimate = false;

var handleClick = function handleClick() {
  var diffIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (e) {
    if (isAnimate) return;
    var btn = e.currentTarget;
    var id = btn.getAttribute('data-id');
    var sliderElement = document.getElementById(id);
    var sliderContainer = sliderElement.querySelector('.slider_container');
    var items = sliderContainer.querySelectorAll('.slider_item');
    var itemWidth = items[0].clientWidth;
    var offsetLeft = sliderContainer.offsetLeft;
    var maxIndex = items.length;
    var currentIndex = Math.abs(offsetLeft) / Math.abs(itemWidth);
    currentIndex = Math.abs(currentIndex);
    var nextIndex = currentIndex + diffIndex;

    if (nextIndex >= 0 && nextIndex < maxIndex) {
      isAnimate = true;
      var offset = nextIndex * itemWidth; // console.log(offset);

      sliderContainer.style.marginLeft = '-' + offset + 'px';
      setTimeout(function () {
        isAnimate = false;
        hideItems(sliderContainer);
      }, 310);
    }

    var btns_right = document.querySelectorAll('[data-id="' + id + '"]' + '.slider-arr_right');
    var btns_left = document.querySelectorAll('[data-id="' + id + '"]' + '.slider-arr_left'); // console.log(nextIndex);

    if (nextIndex === 0 || nextIndex === -1) {
      btns_left.forEach(function (element) {
        element.classList.add('no-active');
        element.classList.remove('active');
      });
    } else if (nextIndex === maxIndex - 1 || nextIndex === maxIndex) {
      btns_right.forEach(function (element) {
        element.classList.add('no-active');
        element.classList.remove('active');
      });
    } else {
      btns_left.forEach(function (element) {
        if (element.classList.contains('no-active')) {
          element.classList.remove('no-active');
          element.classList.add('active');
        }
      });
      btns_right.forEach(function (element) {
        if (element.classList.contains('no-active')) {
          element.classList.remove('no-active');
          element.classList.add('active');
        }
      });
    }
  };
};

var hideItems = function hideItems(parent) {
  var items = parent.querySelectorAll('.slider_item');
  items.forEach(function (element) {
    var windowWidth = window.innerWidth;
    var offsetLeft = element.offsetLeft,
        offsetWidth = element.offsetWidth;
    var offsetRight = windowWidth - (offsetLeft + offsetWidth); // console.log(offsetLeft, offsetRight);

    if (offsetLeft < 0 || offsetRight < 0) {
      element.classList.add('slider_item_hide');
    } else if (offsetLeft >= 0 && offsetRight >= 0) {
      element.classList.remove('slider_item_hide');
    }
  });
};

var resetSlider = function resetSlider() {
  var sliders = document.querySelectorAll('.slider_container');
  sliders.forEach(function (element) {
    element.style.transition = 'none';
    element.style.marginLeft = 0;
    element.style.transition = null;
  });
  var btns = document.querySelectorAll('.slider-arr_left');
  btns.forEach(function (element) {
    element.classList.add('no-active');
    element.classList.remove('active');
  });
  hideItems(document);
};

var onClickLeft = handleClick(-1);
var onClickRight = handleClick(1);
window.addEventListener('resize', resetSlider);
hideItems(document);
btnsLeft.forEach(function (element) {
  element.addEventListener('click', onClickLeft);
});
btnsRight.forEach(function (element) {
  element.addEventListener('click', onClickRight);
});
},{}],"scripts/scroll.js":[function(require,module,exports) {
var elements = document.querySelectorAll('.scroll');

var scrollToProjects = function scrollToProjects() {
  var main = document.querySelector('.main');
  var height = main.clientHeight;
  console.log(height);
  window.scrollTo({
    top: height,
    behavior: 'smooth'
  });
};

elements.forEach(function (element) {
  element.addEventListener('click', scrollToProjects);
});
var footerBtn = document.querySelector('.f_top-arrow');

var scrollToStart = function scrollToStart() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

footerBtn.addEventListener('click', scrollToStart);
},{}],"scripts/parallax.js":[function(require,module,exports) {
// const parallax = document.querySelectorAll('.parallax_container');
// parallax.forEach((contsiner) => {
//     contsiner.addEventListener("mousemove", (e) => {
//         const img = contsiner.querySelector('.parallax_img');
//         let xPos = (e.clientX / img.clientWidth - 0.5) * 15;
//         let yPos = (e.clientY / img.clientHeight - 0.5) * 15;
//         img.style.transform = `translate3d(0px, 0px, 0px) rotateY(${yPos}deg) rotateX(${xPos}deg)`
//     });
// });
// parallax.forEach((contsiner) => {
//     contsiner.addEventListener("mouseout", (e) => {
//         const img = contsiner.querySelector('.parallax_img');
//         img.style.transition = '0.3s'
//         img.style.transition = '0.3s'
//         img.style.transform = `translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)`
//     });
// });
},{}],"scripts/projects.js":[function(require,module,exports) {
var cards = document.querySelectorAll('.card');
window.addEventListener('scroll', function (e) {
  cards.forEach(function (card) {
    var _card$getBoundingClie = card.getBoundingClientRect(),
        top = _card$getBoundingClie.top;

    var bottom = window.innerHeight - card.clientHeight - top;
    var breakPointOpacity = window.innerHeight * 0.08;
    var isOpacity = top < breakPointOpacity || bottom < breakPointOpacity;
    var active = window.innerHeight - card.clientHeight + 300;

    if (top <= active) {
      card.classList.remove('card_hide');
      card.classList.add('card_show');
      card.classList.add('card_active');
      var title = card.querySelector('.card_title');
    }

    if (isOpacity) {
      card.classList.remove('card_active');
      var img = card.querySelector('.parallax_img');
      img.style.transition = '0.5s';
      img.style.transform = " rotateY(0deg) rotateX(0deg)";
      setTimeout(function () {
        img.style.transition = null;
      }, 500);
    } else {
      card.classList.add('card_active');
    }
  });
});
window.addEventListener("mousemove", function (e) {
  var card = document.querySelector('.card_active');
  var img = card.querySelector('.parallax_img');
  var xPos = (e.clientX / img.clientWidth - 0.5) * 8;
  var yPos = (e.clientY / img.clientHeight - 0.5) * 8;
  img.style.transform = "rotateY(".concat(yPos, "deg) rotateX(").concat(xPos, "deg)");
});
},{}],"index.js":[function(require,module,exports) {
require('./scripts/preload');

require('./scripts/menu');

require('./scripts/slider');

require('./scripts/scroll');

require('./scripts/parallax');

require('./scripts/projects');
},{"./scripts/preload":"scripts/preload.js","./scripts/menu":"scripts/menu.js","./scripts/slider":"scripts/slider.js","./scripts/scroll":"scripts/scroll.js","./scripts/parallax":"scripts/parallax.js","./scripts/projects":"scripts/projects.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44891" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map