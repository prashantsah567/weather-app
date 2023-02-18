"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#header{\n    text-align: center;\n    font-weight: bold;\n}\n\n.container{\n    font-size: larger;\n}\n\n.left-container{\n    float:left;\n    width: 70%;\n}\n\n.right-container{\n    float:right;\n    width: 30%;\n}\n\ntable{\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n}\ntd {\n    padding: 20px;\n}\n\n.hidden-part{\n    display: none;\n}\n\n.temp-header{\n    text-align: center;\n    font-size:xx-large;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,UAAU;AACd;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["#header{\n    text-align: center;\n    font-weight: bold;\n}\n\n.container{\n    font-size: larger;\n}\n\n.left-container{\n    float:left;\n    width: 70%;\n}\n\n.right-container{\n    float:right;\n    width: 30%;\n}\n\ntable{\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n}\ntd {\n    padding: 20px;\n}\n\n.hidden-part{\n    display: none;\n}\n\n.temp-header{\n    text-align: center;\n    font-size:xx-large;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/clear-day.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/clear-day.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/clear-day.jpg");

/***/ }),

/***/ "./src/assets/images/clear-night.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/clear-night.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/clear-night.jpg");

/***/ }),

/***/ "./src/assets/images/cloudy-day.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/cloudy-day.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/cloudy-day.jpg");

/***/ }),

/***/ "./src/assets/images/fogg.jpg":
/*!************************************!*\
  !*** ./src/assets/images/fogg.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/fogg.jpg");

/***/ }),

/***/ "./src/assets/images/overcast.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/overcast.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/overcast.jpg");

/***/ }),

/***/ "./src/assets/images/rain.jpg":
/*!************************************!*\
  !*** ./src/assets/images/rain.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/rain.jpg");

/***/ }),

/***/ "./src/assets/images/snow.jpg":
/*!************************************!*\
  !*** ./src/assets/images/snow.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/snow.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_images_clear_day_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/clear-day.jpg */ "./src/assets/images/clear-day.jpg");
/* harmony import */ var _assets_images_clear_night_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/clear-night.jpg */ "./src/assets/images/clear-night.jpg");
/* harmony import */ var _assets_images_rain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/rain.jpg */ "./src/assets/images/rain.jpg");
/* harmony import */ var _assets_images_snow_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/snow.jpg */ "./src/assets/images/snow.jpg");
/* harmony import */ var _assets_images_cloudy_day_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/cloudy-day.jpg */ "./src/assets/images/cloudy-day.jpg");
/* harmony import */ var _assets_images_overcast_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/overcast.jpg */ "./src/assets/images/overcast.jpg");
/* harmony import */ var _assets_images_fogg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/fogg.jpg */ "./src/assets/images/fogg.jpg");









const input = document.getElementById('myInput');

//set background color
document.body.style.backgroundColor = "#94b8b8";

//handling the input value
input.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        getData();
        $(".hidden-part").show();
    }
});

async function getData() {
    try{   
        const cityName = input.value.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g,'');
        const fetchUrl = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=LJZYFMZ2G2GD9SU8MEHMYLXVL&contentType=json`,
        { mode: 'cors' });
        const data = await fetchUrl.json();

        console.log(data);

        //setting custom image
        const iconVal = data.days[0].icon;
        const img = new Image();
        if(iconVal=="clear-day")
            img.src = _assets_images_clear_day_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
        else if(iconVal=="clear-night")
            img.src = _assets_images_clear_night_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
        else if(iconVal=="rain")
            img.src = _assets_images_rain_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
        else if(iconVal=="snow")
            img.src = _assets_images_snow_jpg__WEBPACK_IMPORTED_MODULE_4__["default"];
        else if(iconVal="cloudy")
            img.src = _assets_images_cloudy_day_jpg__WEBPACK_IMPORTED_MODULE_5__["default"];
        else if(iconVal="overcast")
            img.src = _assets_images_overcast_jpg__WEBPACK_IMPORTED_MODULE_6__["default"];
        else if(iconVal="fogg")
            img.src = _assets_images_fogg_jpg__WEBPACK_IMPORTED_MODULE_7__["default"];
        //console.log(iconVal);
        document.body.setAttribute("style",`background-image:url(${img.src}); background-size:cover; background-repeat:no-repeat;background-attachment: fixed;`);


        //assigning all the data fields for current condition
        $("#condition").html(data.days[0].conditions);
        $("#address").html(data.resolvedAddress);
        $("#date").html(data.days[0].datetime);
        $("#latitude").html(data.latitude);
        $("#longitude").html(data.longitude);
        $("#temp").html(data.currentConditions.temp);
        $("#feelslike").html(data.currentConditions.feelslike);
        $("#sunrise").html(data.currentConditions.sunrise);
        $("#sunset").html(data.currentConditions.sunset);
        $("#humidity").html(data.currentConditions.humidity);
        $("#visibility").html(data.currentConditions.visibility);
        $("#windSpeed").html(data.currentConditions.windspeed);
        $("#weatherDesc").html(data.days[0].description);
        
        //api calls for background image change
        // const fetchImg = await fetch(`https://pixabay.com/api/?key=32846660-95d8df5d4035034b605954169&q=${data.days[0].icon}&image_type=photo`,{mod: 'cors'});
        // const imgData = await fetchImg.json();
        // console.log(imgData);
        // const imgURL = imgData.hits[Math.floor(Math.random() * 20)].largeImageURL;
        // document.body.setAttribute("style",`background-image:url(${imgURL}); background-size:cover; background-repeat:no-repeat;`);
    
        //now i wanted to add the 14 days forcast result
        //not working for now
        // const container = document.createElement('div');
        // container.style.display = 'flex';
        // container.style.flexWrap = 'wrap';
        // container.style.justifyContent = 'center';
        // container.style.alignItems = 'center';
        // container.style.position = 'fixed';
        // container.style.bottom = '0';
        // container.style.width = '100%';
        // document.body.appendChild(container);

        // for (let i = 1; i <= 14; i++) {
        //     const item = document.createElement('div');
        //     item.textContent = 
        //     `data.days[${i}].datetime,
        //     data.days[${i}].temp,
        //     data.days[${i}].tempmax,
        //     data.days[${i}].tempmin
        //     `;
        //     item.style.width = 'calc(100% / 7 - 20px)';
        //     item.style.height = '100px';
        //     item.style.margin = '10px';
        //     item.style.backgroundColor = 'gray';
        //     container.appendChild(item);
        // }

        //for day-1
        $("#day-1").html(data.days[1].datetime);
        $("#day-1-temp").html(data.days[1].temp);
        $("#day-1-max").html(data.days[1].tempmax);
        $("#day-1-min").html(data.days[1].tempmin);
        
        //for day-2
        $("#day-2").html(data.days[2].datetime);
        $("#day-2-temp").html(data.days[2].temp);
        $("#day-2-max").html(data.days[2].tempmax);
        $("#day-2-min").html(data.days[2].tempmin);

        //for day-3
        $("#day-3").html(data.days[3].datetime);
        $("#day-3-temp").html(data.days[3].temp);
        $("#day-3-max").html(data.days[3].tempmax);
        $("#day-3-min").html(data.days[3].tempmin);

        //for day-4
        $("#day-4").html(data.days[4].datetime);
        $("#day-4-temp").html(data.days[4].temp);
        $("#day-4-max").html(data.days[4].tempmax);
        $("#day-4-min").html(data.days[4].tempmin);

        //for day-5
        $("#day-5").html(data.days[5].datetime);
        $("#day-5-temp").html(data.days[5].temp);
        $("#day-5-max").html(data.days[5].tempmax);
        $("#day-5-min").html(data.days[5].tempmin);

        //for day-6
        $("#day-6").html(data.days[6].datetime);
        $("#day-6-temp").html(data.days[6].temp);
        $("#day-6-max").html(data.days[6].tempmax);
        $("#day-6-min").html(data.days[6].tempmin);

        //for day-7
        $("#day-7").html(data.days[7].datetime);
        $("#day-7-temp").html(data.days[7].temp);
        $("#day-7-max").html(data.days[7].tempmax);
        $("#day-7-min").html(data.days[7].tempmin);

        //for day-8
        $("#day-8").html(data.days[8].datetime);
        $("#day-8-temp").html(data.days[8].temp);
        $("#day-8-max").html(data.days[8].tempmax);
        $("#day-8-min").html(data.days[8].tempmin);

        //for day-9
        $("#day-9").html(data.days[9].datetime);
        $("#day-9-temp").html(data.days[9].temp);
        $("#day-9-max").html(data.days[9].tempmax);
        $("#day-9-min").html(data.days[9].tempmin);

        //for day-10
        $("#day-10").html(data.days[10].datetime);
        $("#day-10-temp").html(data.days[10].temp);
        $("#day-10-max").html(data.days[10].tempmax);
        $("#day-10-min").html(data.days[10].tempmin);

        //for day-11
        $("#day-11").html(data.days[11].datetime);
        $("#day-11-temp").html(data.days[11].temp);
        $("#day-11-max").html(data.days[11].tempmax);
        $("#day-11-min").html(data.days[11].tempmin);

        //for day-12
        $("#day-12").html(data.days[12].datetime);
        $("#day-12-temp").html(data.days[12].temp);
        $("#day-12-max").html(data.days[12].tempmax);
        $("#day-12-min").html(data.days[12].tempmin);

        //for day-13
        $("#day-13").html(data.days[13].datetime);
        $("#day-13-temp").html(data.days[13].temp);
        $("#day-13-max").html(data.days[13].tempmax);
        $("#day-13-min").html(data.days[13].tempmin);

        //for day-14
        $("#day-14").html(data.days[14].datetime);
        $("#day-14-temp").html(data.days[14].temp);
        $("#day-14-max").html(data.days[14].tempmax);
        $("#day-14-min").html(data.days[14].tempmin);

    }catch(err){
        $("#errId").html("Something wrong");
    }  
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwrREFBSTtBQUMxQjtBQUNBLG1FQUFtRSxRQUFRLEdBQUcsdUJBQXVCLDRCQUE0Qiw2QkFBNkI7OztBQUc5SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RyxrQkFBa0Isb0JBQW9CLFlBQVk7QUFDL0o7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLE9BQU8sR0FBRyx1QkFBdUIsNEJBQTRCO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUIsMkJBQTJCLEVBQUU7QUFDN0IsMkJBQTJCLEVBQUU7QUFDN0IsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9jbGVhci1kYXkuanBnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9jbGVhci1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2Nsb3VkeS1kYXkuanBnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9mb2dnLmpwZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvb3ZlcmNhc3QuanBnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9yYWluLmpwZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvc25vdy5qcGciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmxlZnQtY29udGFpbmVye1xcbiAgICBmbG9hdDpsZWZ0O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ucmlnaHQtY29udGFpbmVye1xcbiAgICBmbG9hdDpyaWdodDtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxudGFibGV7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxudGQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaGlkZGVuLXBhcnR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZW1wLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6eHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5sZWZ0LWNvbnRhaW5lcntcXG4gICAgZmxvYXQ6bGVmdDtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnJpZ2h0LWNvbnRhaW5lcntcXG4gICAgZmxvYXQ6cmlnaHQ7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbnRhYmxle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbnRkIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhpZGRlbi1wYXJ0e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGVtcC1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOnh4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2NsZWFyLWRheS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2NsZWFyLW5pZ2h0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY2xvdWR5LWRheS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ZvZ2cuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9vdmVyY2FzdC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3JhaW4uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9zbm93LmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjbGVhckRheSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2xlYXItZGF5LmpwZyc7XG5pbXBvcnQgY2xlYXJOaWdodCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2xlYXItbmlnaHQuanBnJztcbmltcG9ydCByYWluIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9yYWluLmpwZyc7XG5pbXBvcnQgc25vdyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc25vdy5qcGcnO1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2xvdWR5LWRheS5qcGcnO1xuaW1wb3J0IG92ZXJjYXN0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9vdmVyY2FzdC5qcGcnO1xuaW1wb3J0IGZvZ2cgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2ZvZ2cuanBnJztcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlJbnB1dCcpO1xuXG4vL3NldCBiYWNrZ3JvdW5kIGNvbG9yXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzk0YjhiOFwiO1xuXG4vL2hhbmRsaW5nIHRoZSBpbnB1dCB2YWx1ZVxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PntcbiAgICBpZihldmVudC5rZXkgPT09IFwiRW50ZXJcIil7XG4gICAgICAgIGdldERhdGEoKTtcbiAgICAgICAgJChcIi5oaWRkZW4tcGFydFwiKS5zaG93KCk7XG4gICAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgdHJ5eyAgIFxuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hVcmwgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtjaXR5TmFtZX0/dW5pdEdyb3VwPXVzJmtleT1MSlpZRk1aMkcyR0Q5U1U4TUVITVlMWFZMJmNvbnRlbnRUeXBlPWpzb25gLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXJsLmpzb24oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAvL3NldHRpbmcgY3VzdG9tIGltYWdlXG4gICAgICAgIGNvbnN0IGljb25WYWwgPSBkYXRhLmRheXNbMF0uaWNvbjtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGlmKGljb25WYWw9PVwiY2xlYXItZGF5XCIpXG4gICAgICAgICAgICBpbWcuc3JjID0gY2xlYXJEYXk7XG4gICAgICAgIGVsc2UgaWYoaWNvblZhbD09XCJjbGVhci1uaWdodFwiKVxuICAgICAgICAgICAgaW1nLnNyYyA9IGNsZWFyTmlnaHQ7XG4gICAgICAgIGVsc2UgaWYoaWNvblZhbD09XCJyYWluXCIpXG4gICAgICAgICAgICBpbWcuc3JjID0gcmFpbjtcbiAgICAgICAgZWxzZSBpZihpY29uVmFsPT1cInNub3dcIilcbiAgICAgICAgICAgIGltZy5zcmMgPSBzbm93O1xuICAgICAgICBlbHNlIGlmKGljb25WYWw9XCJjbG91ZHlcIilcbiAgICAgICAgICAgIGltZy5zcmMgPSBjbG91ZHk7XG4gICAgICAgIGVsc2UgaWYoaWNvblZhbD1cIm92ZXJjYXN0XCIpXG4gICAgICAgICAgICBpbWcuc3JjID0gb3ZlcmNhc3Q7XG4gICAgICAgIGVsc2UgaWYoaWNvblZhbD1cImZvZ2dcIilcbiAgICAgICAgICAgIGltZy5zcmMgPSBmb2dnO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGljb25WYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsYGJhY2tncm91bmQtaW1hZ2U6dXJsKCR7aW1nLnNyY30pOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO2ApO1xuXG5cbiAgICAgICAgLy9hc3NpZ25pbmcgYWxsIHRoZSBkYXRhIGZpZWxkcyBmb3IgY3VycmVudCBjb25kaXRpb25cbiAgICAgICAgJChcIiNjb25kaXRpb25cIikuaHRtbChkYXRhLmRheXNbMF0uY29uZGl0aW9ucyk7XG4gICAgICAgICQoXCIjYWRkcmVzc1wiKS5odG1sKGRhdGEucmVzb2x2ZWRBZGRyZXNzKTtcbiAgICAgICAgJChcIiNkYXRlXCIpLmh0bWwoZGF0YS5kYXlzWzBdLmRhdGV0aW1lKTtcbiAgICAgICAgJChcIiNsYXRpdHVkZVwiKS5odG1sKGRhdGEubGF0aXR1ZGUpO1xuICAgICAgICAkKFwiI2xvbmdpdHVkZVwiKS5odG1sKGRhdGEubG9uZ2l0dWRlKTtcbiAgICAgICAgJChcIiN0ZW1wXCIpLmh0bWwoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wKTtcbiAgICAgICAgJChcIiNmZWVsc2xpa2VcIikuaHRtbChkYXRhLmN1cnJlbnRDb25kaXRpb25zLmZlZWxzbGlrZSk7XG4gICAgICAgICQoXCIjc3VucmlzZVwiKS5odG1sKGRhdGEuY3VycmVudENvbmRpdGlvbnMuc3VucmlzZSk7XG4gICAgICAgICQoXCIjc3Vuc2V0XCIpLmh0bWwoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXQpO1xuICAgICAgICAkKFwiI2h1bWlkaXR5XCIpLmh0bWwoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eSk7XG4gICAgICAgICQoXCIjdmlzaWJpbGl0eVwiKS5odG1sKGRhdGEuY3VycmVudENvbmRpdGlvbnMudmlzaWJpbGl0eSk7XG4gICAgICAgICQoXCIjd2luZFNwZWVkXCIpLmh0bWwoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy53aW5kc3BlZWQpO1xuICAgICAgICAkKFwiI3dlYXRoZXJEZXNjXCIpLmh0bWwoZGF0YS5kYXlzWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vYXBpIGNhbGxzIGZvciBiYWNrZ3JvdW5kIGltYWdlIGNoYW5nZVxuICAgICAgICAvLyBjb25zdCBmZXRjaEltZyA9IGF3YWl0IGZldGNoKGBodHRwczovL3BpeGFiYXkuY29tL2FwaS8/a2V5PTMyODQ2NjYwLTk1ZDhkZjVkNDAzNTAzNGI2MDU5NTQxNjkmcT0ke2RhdGEuZGF5c1swXS5pY29ufSZpbWFnZV90eXBlPXBob3RvYCx7bW9kOiAnY29ycyd9KTtcbiAgICAgICAgLy8gY29uc3QgaW1nRGF0YSA9IGF3YWl0IGZldGNoSW1nLmpzb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW1nRGF0YSk7XG4gICAgICAgIC8vIGNvbnN0IGltZ1VSTCA9IGltZ0RhdGEuaGl0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCldLmxhcmdlSW1hZ2VVUkw7XG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKFwic3R5bGVcIixgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtpbWdVUkx9KTsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YCk7XG4gICAgXG4gICAgICAgIC8vbm93IGkgd2FudGVkIHRvIGFkZCB0aGUgMTQgZGF5cyBmb3JjYXN0IHJlc3VsdFxuICAgICAgICAvL25vdCB3b3JraW5nIGZvciBub3dcbiAgICAgICAgLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAvLyBjb250YWluZXIuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgICAgIC8vIGNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgICAgICAvLyBjb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgICAvLyBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAvLyBjb250YWluZXIuc3R5bGUuYm90dG9tID0gJzAnO1xuICAgICAgICAvLyBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8PSAxNDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vICAgICBpdGVtLnRleHRDb250ZW50ID0gXG4gICAgICAgIC8vICAgICBgZGF0YS5kYXlzWyR7aX1dLmRhdGV0aW1lLFxuICAgICAgICAvLyAgICAgZGF0YS5kYXlzWyR7aX1dLnRlbXAsXG4gICAgICAgIC8vICAgICBkYXRhLmRheXNbJHtpfV0udGVtcG1heCxcbiAgICAgICAgLy8gICAgIGRhdGEuZGF5c1ske2l9XS50ZW1wbWluXG4gICAgICAgIC8vICAgICBgO1xuICAgICAgICAvLyAgICAgaXRlbS5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMCUgLyA3IC0gMjBweCknO1xuICAgICAgICAvLyAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgICAgICAvLyAgICAgaXRlbS5zdHlsZS5tYXJnaW4gPSAnMTBweCc7XG4gICAgICAgIC8vICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmF5JztcbiAgICAgICAgLy8gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vZm9yIGRheS0xXG4gICAgICAgICQoXCIjZGF5LTFcIikuaHRtbChkYXRhLmRheXNbMV0uZGF0ZXRpbWUpO1xuICAgICAgICAkKFwiI2RheS0xLXRlbXBcIikuaHRtbChkYXRhLmRheXNbMV0udGVtcCk7XG4gICAgICAgICQoXCIjZGF5LTEtbWF4XCIpLmh0bWwoZGF0YS5kYXlzWzFdLnRlbXBtYXgpO1xuICAgICAgICAkKFwiI2RheS0xLW1pblwiKS5odG1sKGRhdGEuZGF5c1sxXS50ZW1wbWluKTtcbiAgICAgICAgXG4gICAgICAgIC8vZm9yIGRheS0yXG4gICAgICAgICQoXCIjZGF5LTJcIikuaHRtbChkYXRhLmRheXNbMl0uZGF0ZXRpbWUpO1xuICAgICAgICAkKFwiI2RheS0yLXRlbXBcIikuaHRtbChkYXRhLmRheXNbMl0udGVtcCk7XG4gICAgICAgICQoXCIjZGF5LTItbWF4XCIpLmh0bWwoZGF0YS5kYXlzWzJdLnRlbXBtYXgpO1xuICAgICAgICAkKFwiI2RheS0yLW1pblwiKS5odG1sKGRhdGEuZGF5c1syXS50ZW1wbWluKTtcblxuICAgICAgICAvL2ZvciBkYXktM1xuICAgICAgICAkKFwiI2RheS0zXCIpLmh0bWwoZGF0YS5kYXlzWzNdLmRhdGV0aW1lKTtcbiAgICAgICAgJChcIiNkYXktMy10ZW1wXCIpLmh0bWwoZGF0YS5kYXlzWzNdLnRlbXApO1xuICAgICAgICAkKFwiI2RheS0zLW1heFwiKS5odG1sKGRhdGEuZGF5c1szXS50ZW1wbWF4KTtcbiAgICAgICAgJChcIiNkYXktMy1taW5cIikuaHRtbChkYXRhLmRheXNbM10udGVtcG1pbik7XG5cbiAgICAgICAgLy9mb3IgZGF5LTRcbiAgICAgICAgJChcIiNkYXktNFwiKS5odG1sKGRhdGEuZGF5c1s0XS5kYXRldGltZSk7XG4gICAgICAgICQoXCIjZGF5LTQtdGVtcFwiKS5odG1sKGRhdGEuZGF5c1s0XS50ZW1wKTtcbiAgICAgICAgJChcIiNkYXktNC1tYXhcIikuaHRtbChkYXRhLmRheXNbNF0udGVtcG1heCk7XG4gICAgICAgICQoXCIjZGF5LTQtbWluXCIpLmh0bWwoZGF0YS5kYXlzWzRdLnRlbXBtaW4pO1xuXG4gICAgICAgIC8vZm9yIGRheS01XG4gICAgICAgICQoXCIjZGF5LTVcIikuaHRtbChkYXRhLmRheXNbNV0uZGF0ZXRpbWUpO1xuICAgICAgICAkKFwiI2RheS01LXRlbXBcIikuaHRtbChkYXRhLmRheXNbNV0udGVtcCk7XG4gICAgICAgICQoXCIjZGF5LTUtbWF4XCIpLmh0bWwoZGF0YS5kYXlzWzVdLnRlbXBtYXgpO1xuICAgICAgICAkKFwiI2RheS01LW1pblwiKS5odG1sKGRhdGEuZGF5c1s1XS50ZW1wbWluKTtcblxuICAgICAgICAvL2ZvciBkYXktNlxuICAgICAgICAkKFwiI2RheS02XCIpLmh0bWwoZGF0YS5kYXlzWzZdLmRhdGV0aW1lKTtcbiAgICAgICAgJChcIiNkYXktNi10ZW1wXCIpLmh0bWwoZGF0YS5kYXlzWzZdLnRlbXApO1xuICAgICAgICAkKFwiI2RheS02LW1heFwiKS5odG1sKGRhdGEuZGF5c1s2XS50ZW1wbWF4KTtcbiAgICAgICAgJChcIiNkYXktNi1taW5cIikuaHRtbChkYXRhLmRheXNbNl0udGVtcG1pbik7XG5cbiAgICAgICAgLy9mb3IgZGF5LTdcbiAgICAgICAgJChcIiNkYXktN1wiKS5odG1sKGRhdGEuZGF5c1s3XS5kYXRldGltZSk7XG4gICAgICAgICQoXCIjZGF5LTctdGVtcFwiKS5odG1sKGRhdGEuZGF5c1s3XS50ZW1wKTtcbiAgICAgICAgJChcIiNkYXktNy1tYXhcIikuaHRtbChkYXRhLmRheXNbN10udGVtcG1heCk7XG4gICAgICAgICQoXCIjZGF5LTctbWluXCIpLmh0bWwoZGF0YS5kYXlzWzddLnRlbXBtaW4pO1xuXG4gICAgICAgIC8vZm9yIGRheS04XG4gICAgICAgICQoXCIjZGF5LThcIikuaHRtbChkYXRhLmRheXNbOF0uZGF0ZXRpbWUpO1xuICAgICAgICAkKFwiI2RheS04LXRlbXBcIikuaHRtbChkYXRhLmRheXNbOF0udGVtcCk7XG4gICAgICAgICQoXCIjZGF5LTgtbWF4XCIpLmh0bWwoZGF0YS5kYXlzWzhdLnRlbXBtYXgpO1xuICAgICAgICAkKFwiI2RheS04LW1pblwiKS5odG1sKGRhdGEuZGF5c1s4XS50ZW1wbWluKTtcblxuICAgICAgICAvL2ZvciBkYXktOVxuICAgICAgICAkKFwiI2RheS05XCIpLmh0bWwoZGF0YS5kYXlzWzldLmRhdGV0aW1lKTtcbiAgICAgICAgJChcIiNkYXktOS10ZW1wXCIpLmh0bWwoZGF0YS5kYXlzWzldLnRlbXApO1xuICAgICAgICAkKFwiI2RheS05LW1heFwiKS5odG1sKGRhdGEuZGF5c1s5XS50ZW1wbWF4KTtcbiAgICAgICAgJChcIiNkYXktOS1taW5cIikuaHRtbChkYXRhLmRheXNbOV0udGVtcG1pbik7XG5cbiAgICAgICAgLy9mb3IgZGF5LTEwXG4gICAgICAgICQoXCIjZGF5LTEwXCIpLmh0bWwoZGF0YS5kYXlzWzEwXS5kYXRldGltZSk7XG4gICAgICAgICQoXCIjZGF5LTEwLXRlbXBcIikuaHRtbChkYXRhLmRheXNbMTBdLnRlbXApO1xuICAgICAgICAkKFwiI2RheS0xMC1tYXhcIikuaHRtbChkYXRhLmRheXNbMTBdLnRlbXBtYXgpO1xuICAgICAgICAkKFwiI2RheS0xMC1taW5cIikuaHRtbChkYXRhLmRheXNbMTBdLnRlbXBtaW4pO1xuXG4gICAgICAgIC8vZm9yIGRheS0xMVxuICAgICAgICAkKFwiI2RheS0xMVwiKS5odG1sKGRhdGEuZGF5c1sxMV0uZGF0ZXRpbWUpO1xuICAgICAgICAkKFwiI2RheS0xMS10ZW1wXCIpLmh0bWwoZGF0YS5kYXlzWzExXS50ZW1wKTtcbiAgICAgICAgJChcIiNkYXktMTEtbWF4XCIpLmh0bWwoZGF0YS5kYXlzWzExXS50ZW1wbWF4KTtcbiAgICAgICAgJChcIiNkYXktMTEtbWluXCIpLmh0bWwoZGF0YS5kYXlzWzExXS50ZW1wbWluKTtcblxuICAgICAgICAvL2ZvciBkYXktMTJcbiAgICAgICAgJChcIiNkYXktMTJcIikuaHRtbChkYXRhLmRheXNbMTJdLmRhdGV0aW1lKTtcbiAgICAgICAgJChcIiNkYXktMTItdGVtcFwiKS5odG1sKGRhdGEuZGF5c1sxMl0udGVtcCk7XG4gICAgICAgICQoXCIjZGF5LTEyLW1heFwiKS5odG1sKGRhdGEuZGF5c1sxMl0udGVtcG1heCk7XG4gICAgICAgICQoXCIjZGF5LTEyLW1pblwiKS5odG1sKGRhdGEuZGF5c1sxMl0udGVtcG1pbik7XG5cbiAgICAgICAgLy9mb3IgZGF5LTEzXG4gICAgICAgICQoXCIjZGF5LTEzXCIpLmh0bWwoZGF0YS5kYXlzWzEzXS5kYXRldGltZSk7XG4gICAgICAgICQoXCIjZGF5LTEzLXRlbXBcIikuaHRtbChkYXRhLmRheXNbMTNdLnRlbXApO1xuICAgICAgICAkKFwiI2RheS0xMy1tYXhcIikuaHRtbChkYXRhLmRheXNbMTNdLnRlbXBtYXgpO1xuICAgICAgICAkKFwiI2RheS0xMy1taW5cIikuaHRtbChkYXRhLmRheXNbMTNdLnRlbXBtaW4pO1xuXG4gICAgICAgIC8vZm9yIGRheS0xNFxuICAgICAgICAkKFwiI2RheS0xNFwiKS5odG1sKGRhdGEuZGF5c1sxNF0uZGF0ZXRpbWUpO1xuICAgICAgICAkKFwiI2RheS0xNC10ZW1wXCIpLmh0bWwoZGF0YS5kYXlzWzE0XS50ZW1wKTtcbiAgICAgICAgJChcIiNkYXktMTQtbWF4XCIpLmh0bWwoZGF0YS5kYXlzWzE0XS50ZW1wbWF4KTtcbiAgICAgICAgJChcIiNkYXktMTQtbWluXCIpLmh0bWwoZGF0YS5kYXlzWzE0XS50ZW1wbWluKTtcblxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAkKFwiI2VycklkXCIpLmh0bWwoXCJTb21ldGhpbmcgd3JvbmdcIik7XG4gICAgfSAgXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9