(window["webpackJsonp_content_visibility"] = window["webpackJsonp_content_visibility"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_content_visibility"] = window["webpackJsonp_content_visibility"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/goober/dist/goober.esm.js":
/*!************************************************!*\
  !*** ./node_modules/goober/dist/goober.esm.js ***!
  \************************************************/
/*! exports provided: css, extractCss, glob, keyframes, setup, styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractCss", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glob", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return j; });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let d,f,g,b=u.bind({g:1}),h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/react-multi-select-component/dist/react-multi-select-component.esm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-multi-select-component/dist/react-multi-select-component.esm.js ***!
  \********************************************************************************************/
/*! exports provided: default, Dropdown, SelectItem, SelectPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItem", function() { return SelectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPanel", function() { return SelectPanel; });
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const defaultStrings = {
  allItemsAreSelected: "All items are selected.",
  clearSearch: "Clear Search",
  clearSelected: "Clear Selected",
  noOptions: "No options",
  search: "Search",
  selectAll: "Select All",
  selectSomeItems: "Select..."
};
const defaultProps = {
  value: [],
  focusSearchOnOpen: true,
  hasSelectAll: true,
  className: "multi-select",
  debounceDuration: 200,
  options: []
};
const MultiSelectContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
const MultiSelectProvider = ({
  props,
  children
}) => {
  const t = key => {
    var _props$overrideString;

    return ((_props$overrideString = props.overrideStrings) == null ? void 0 : _props$overrideString[key]) || defaultStrings[key];
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MultiSelectContext.Provider, {
    value: {
      t,
      ...defaultProps,
      ...props
    }
  }, children);
};
const useMultiSelect = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MultiSelectContext);

/**
 * combines classNames in a friendly way
 *
 * @param {*} classes
 */
const cn = (...classes) => classes.join(" ");

/**
 * similar to `useEffect` but gets triggered only when value changes
 * @param fn executable function on dependency updates
 * @param inputs dependency array
 */

function useDidUpdateEffect(fn, inputs) {
  const didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (didMountRef.current) fn();else didMountRef.current = true;
  }, inputs);
}

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(null, args);
    }, wait);
  };
};

/**
 * Filters React Select options and sorts by similarity to a search filter.
 * Handles partial matches, eg. searching for "Waberg High" will find "Raoul
 * Wallenberg Traditional High School". Case insensitive. Ignores
 * non-alphanumeric characters.
 *
 * @param  options  An unfiltered list of Options.
 * @param? filter  A string to compare against Option labels.
 * @param? substitutions  Strings with multiple spellings or variations that we
 *           expect to match, eg. accented characters or abbreviated words.
 *
 * @return A filtered and sorted array of Options.
 */
function filterOptions(options, filter, substitutions) {
  // If the filter is blank, return the full list of Options.
  if (!filter) {
    return options;
  }

  const cleanFilter = cleanUpText(filter, substitutions);
  return options // Filter out undefined or null Options.
  .filter(({
    label,
    value
  }) => label != null && value != null) // Create a {score, Option} pair for each Option based on its label's
  // similarity to the filter text.
  .map(option => ({
    option: option,
    score: typeaheadSimilarity(cleanUpText(option.label, substitutions), cleanFilter)
  })) // Only include matches of the entire substring, with a slight
  // affordance for transposition or extra characters.
  .filter(pair => pair.score >= cleanFilter.length - 2) // Sort 'em by order of their score.
  .sort((a, b) => b.score - a.score) // …and grab the original Options back from their pairs.
  .map(pair => pair.option);
}
/**
 * Scores the similarity between two strings by returning the length of the
 * longest common subsequence. Intended for comparing strings of different
 * lengths; eg. when matching a typeahead search input with a school name.

 * Meant for use in an instant search box where results are being fetched
 * as a user is typing.
 *
 * @param  a  The longer string (though, we flip them if it's shorter).
 * @param  b  The shorter string, eg. a typeahead search input.
 *
 * @return The length of the longest common subsequence. Higher scores indicate
 *           closer matches.
 */

function typeaheadSimilarity(a, b) {
  const aLength = a.length;
  const bLength = b.length;
  const table = [];

  if (!aLength || !bLength) {
    return 0;
  } // Ensure `a` isn't shorter than `b`.


  if (aLength < bLength) {
    [a, b] = [b, a];
  } // Early exit if `a` includes `b`; these will be scored higher than any
  // other options with the same `b` (filter string), with a preference for
  // shorter `a` strings (option labels).


  if (a.indexOf(b) !== -1) {
    return bLength + 1 / aLength;
  } // Initialize the table axes:
  //
  //    0 0 0 0 ... bLength
  //    0
  //    0
  //
  //   ...
  //
  // aLength
  //


  for (let x = 0; x <= aLength; ++x) {
    table[x] = [0];
  }

  for (let y = 0; y <= bLength; ++y) {
    table[0][y] = 0;
  } // Populate the rest of the table with a dynamic programming algorithm.


  for (let x = 1; x <= aLength; ++x) {
    for (let y = 1; y <= bLength; ++y) {
      table[x][y] = a[x - 1] === b[y - 1] ? 1 + table[x - 1][y - 1] : Math.max(table[x][y - 1], table[x - 1][y]);
    }
  }

  return table[aLength][bLength];
}
/**
 * Apply string substitutions, remove non-alphanumeric characters, and convert
 * all letters to uppercase.
 *
 * eg. 'Scoil Bhríde Primary School' may become 'SCOILBHRIDEPRIMARYSCHOOL'.
 *
 * @param  input  An unsanitized input string.
 * @param  substitutions  Strings with multiple spellings or variations that we
 *          expect to match, for example accented characters or abbreviated
 *          words.
 *
 * @return The sanitized text.
 */

function cleanUpText(input, substitutions) {
  if (!input) {
    return "";
  } // Uppercase and remove all non-alphanumeric, non-accented characters.
  // Also remove underscores.


  input = input.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g, "");

  if (!substitutions) {
    return input;
  }

  const safeSubstitutions = substitutions; // For Flow.
  // Replace all strings in `safeSubstitutions` with their standardized
  // counterparts.

  return Object.keys(safeSubstitutions).reduce((output, substitution) => {
    const unsubbed = new RegExp(substitution, "g");
    return output.replace(unsubbed, safeSubstitutions[substitution]);
  }, input);
}

const Cross = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  className: "dropdown-search-clear-icon gray"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

const DefaultRenderer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  "& input,& span": {
    verticalAlign: "middle",
    margin: 0
  },
  span: {
    display: "inline-block",
    paddingLeft: "5px"
  },
  "&.disabled": {
    opacity: 0.5
  }
});

const DefaultItemRenderer = ({
  checked,
  option,
  onClick,
  disabled
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: cn(DefaultRenderer, "item-renderer", disabled && "disabled")
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
  type: "checkbox",
  onChange: onClick,
  checked: checked,
  tabIndex: -1,
  disabled: disabled
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, option.label));

/**
 * This component represents an individual item in the multi-select drop-down
 */
const ItemContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  boxSizing: "border-box",
  cursor: "pointer",
  display: "block",
  padding: "var(--rmsc-p)",
  outline: 0,
  "&:hover,&:focus": {
    background: "var(--rmsc-hover)"
  },
  "&.selected": {
    background: "var(--rmsc-selected)"
  }
});

const SelectItem = ({
  itemRenderer: ItemRenderer = DefaultItemRenderer,
  option,
  checked,
  focused,
  tabIndex,
  disabled,
  onSelectionChanged,
  onClick
}) => {
  const itemRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    updateFocus(); // eslint-disable-next-line
  }, [checked, focused]);

  const toggleChecked = () => {
    onSelectionChanged(!checked);
  };

  const handleClick = e => {
    toggleChecked();
    onClick(e);
  };

  const updateFocus = () => {
    if (focused && !disabled && itemRef) {
      itemRef.current.focus();
    }
  };

  const handleKeyDown = e => {
    switch (e.which) {
      case 13: // Enter

      case 32:
        // Space
        toggleChecked();
        break;

      default:
        return;
    }

    e.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: cn(ItemContainer, "select-item", checked && "selected"),
    role: "option",
    "aria-selected": checked,
    tabIndex: tabIndex,
    ref: itemRef,
    onKeyDown: handleKeyDown
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemRenderer, {
    option: option,
    checked: checked,
    onClick: handleClick,
    disabled: disabled
  }));
};

/**
 * This component represents an unadorned list of SelectItem (s).
 */
const SelectListUl = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  margin: 0,
  paddingLeft: 0,
  li: {
    listStyle: "none",
    margin: 0
  }
});
const skipIndex = 2;

const SelectList = ({
  options,
  focusIndex,
  onClick
}) => {
  const {
    disabled,
    value,
    onChange,
    ItemRenderer
  } = useMultiSelect();

  const handleSelectionChanged = (option, checked) => {
    if (disabled) {
      return;
    }

    onChange(checked ? [...value, option] : value.filter(o => o.value !== option.value));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: SelectListUl
  }, options.map((o, i) => {
    const tabIndex = i + skipIndex;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: (o == null ? void 0 : o.key) || i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectItem, {
      focused: focusIndex === tabIndex,
      tabIndex: tabIndex,
      option: o,
      onSelectionChanged: c => handleSelectionChanged(o, c),
      checked: value.find(s => s.value === o.value) ? true : false,
      onClick: e => onClick(e, tabIndex),
      itemRenderer: ItemRenderer,
      disabled: o.disabled || disabled
    }));
  }));
};

/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
var FocusType;

(function (FocusType) {
  FocusType[FocusType["SEARCH"] = -1] = "SEARCH";
  FocusType[FocusType["NONE"] = 1] = "NONE";
})(FocusType || (FocusType = {}));

const SelectSearchContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  width: "100%",
  position: "relative",
  borderBottom: "1px solid var(--rmsc-border)",
  input: {
    height: "var(--rmsc-h)",
    padding: "0 var(--rmsc-p)",
    width: "100%",
    outline: 0,
    border: 0
  }
});
const SearchClearButton = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  cursor: "pointer",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  background: "none",
  border: 0,
  padding: "0 calc(var(--rmsc-p)/2)",
  "[hidden]": {
    display: "none"
  }
});
const NoOptions = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  padding: "var(--rmsc-p)",
  textAlign: "center",
  color: "var(--rmsc-gray)"
});

const SelectPanel = () => {
  const {
    t,
    onChange,
    options,
    value,
    filterOptions: customFilterOptions,
    selectAllLabel,
    ItemRenderer,
    disabled,
    disableSearch,
    focusSearchOnOpen,
    hasSelectAll,
    ClearIcon,
    debounceDuration
  } = useMultiSelect();
  const searchInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const [searchText, setSearchText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [filteredOptions, setFilteredOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(options);
  const [searchTextForFilter, setSearchTextForFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [focusIndex, setFocusIndex] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(focusSearchOnOpen && !disableSearch ? FocusType.SEARCH : FocusType.NONE);
  const debouncedSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(debounce(query => setSearchTextForFilter(query), debounceDuration), []);
  const selectAllOption = {
    label: selectAllLabel || t("selectAll"),
    value: ""
  };

  const selectAllValues = checked => {
    const filteredValues = filteredOptions.filter(o => !o.disabled).map(o => o.value);

    if (checked) {
      const selectedValues = value.map(o => o.value);
      const finalSelectedValues = [...selectedValues, ...filteredValues];
      return filteredOptions.filter(o => finalSelectedValues.includes(o.value));
    }

    return value.filter(o => !filteredValues.includes(o.value));
  };

  const selectAllChanged = checked => {
    const newOptions = selectAllValues(checked);
    onChange(newOptions);
  };

  const handleSearchChange = e => {
    debouncedSearch(e.target.value);
    setSearchText(e.target.value);
    setFocusIndex(FocusType.SEARCH);
  };

  const handleClear = () => {
    var _searchInputRef$curre;

    setSearchTextForFilter("");
    setSearchText("");
    searchInputRef == null ? void 0 : (_searchInputRef$curre = searchInputRef.current) == null ? void 0 : _searchInputRef$curre.focus();
  };

  const handleItemClicked = index => setFocusIndex(index);

  const handleKeyDown = e => {
    switch (e.which) {
      case 38:
        // Up Arrow
        if (e.altKey) {
          return;
        }

        updateFocus(-1);
        break;

      case 40:
        // Down Arrow
        if (e.altKey) {
          return;
        }

        updateFocus(1);
        break;

      default:
        return;
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleSearchFocus = () => {
    setFocusIndex(FocusType.SEARCH);
  };

  const getFilteredOptions = async () => customFilterOptions ? await customFilterOptions(options, searchTextForFilter) : filterOptions(options, searchTextForFilter);

  const updateFocus = offset => {
    let newFocus = focusIndex + offset;
    newFocus = Math.max(1, newFocus);
    newFocus = Math.min(newFocus, options.length + 1);
    setFocusIndex(newFocus);
  };

  const [isAllOptionSelected, hasSelectableOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const filteredOptionsList = filteredOptions.filter(o => !o.disabled);
    return [filteredOptionsList.every(o => value.findIndex(v => v.value === o.value) !== -1), filteredOptionsList.length !== 0]; // eslint-disable-next-line
  }, [filteredOptions, value]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getFilteredOptions().then(setFilteredOptions);
  }, [searchTextForFilter, options]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "select-panel",
    role: "listbox",
    onKeyDown: handleKeyDown
  }, !disableSearch && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: SelectSearchContainer
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoFocus: focusSearchOnOpen,
    placeholder: t("search"),
    type: "text",
    "aria-describedby": t("search"),
    onKeyDown: e => e.stopPropagation(),
    onChange: handleSearchChange,
    onFocus: handleSearchFocus,
    value: searchText,
    ref: searchInputRef
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: cn(SearchClearButton, "search-clear-button"),
    hidden: !searchText,
    onClick: handleClear,
    "aria-label": t("clearSearch")
  }, ClearIcon || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cross, null))), hasSelectAll && hasSelectableOptions && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectItem, {
    focused: focusIndex === 1,
    tabIndex: 1,
    checked: isAllOptionSelected,
    option: selectAllOption,
    onSelectionChanged: selectAllChanged,
    onClick: () => handleItemClicked(1),
    itemRenderer: ItemRenderer,
    disabled: disabled
  }), filteredOptions.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectList, {
    options: filteredOptions,
    focusIndex: focusIndex,
    onClick: (_e, index) => handleItemClicked(index)
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cn(NoOptions, "no-options")
  }, t("noOptions")));
};

const Arrow = ({
  expanded
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  className: "dropdown-heading-dropdown-arrow gray"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: expanded ? "M18 15 12 9 6 15" : "M6 9L12 15 18 9"
}));

const DropdownHeader = () => {
  const {
    t,
    value,
    options,
    valueRenderer
  } = useMultiSelect();
  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;
  const customText = valueRenderer && valueRenderer(value, options);

  const getSelectedText = () => value.map(s => s.label).join(", ");

  return noneSelected ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "gray"
  }, customText || t("selectSomeItems")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, customText || (allSelected ? t("allItemsAreSelected") : getSelectedText()));
};

const Spinner = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  animation: "rotate 2s linear infinite",
  "& .path": {
    stroke: "var(--rmsc-border)",
    strokeWidth: "4px",
    strokeLinecap: "round",
    animation: "dash 1.5s ease-in-out infinite"
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  "@keyframes dash": {
    "0%": {
      strokeDasharray: "1,150",
      strokeDashoffset: 0
    },
    "50%": {
      strokeDasharray: "90,150",
      strokeDashoffset: "-35"
    },
    "100%": {
      strokeDasharray: "90,150",
      strokeDashoffset: "-124"
    }
  }
});
const Loading = ({
  size = 24
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
  style: {
    width: size,
    marginRight: "0.2rem"
  }
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
  width: size,
  height: size,
  className: Spinner,
  viewBox: "0 0 50 50",
  style: {
    display: "inline",
    verticalAlign: "middle"
  }
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none",
  className: "path"
})));

/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
const PanelContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  position: "absolute",
  zIndex: 1,
  top: "100%",
  width: "100%",
  paddingTop: "8px",
  ".panel-content": {
    maxHeight: "300px",
    overflowY: "auto",
    borderRadius: "var(--rmsc-radius)",
    background: "var(--rmsc-bg)",
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1)"
  }
});
const DropdownContainer = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  position: "relative",
  outline: 0,
  backgroundColor: "var(--rmsc-bg)",
  border: "1px solid var(--rmsc-border)",
  borderRadius: "var(--rmsc-radius)",
  "&:focus-within": {
    boxShadow: "var(--rmsc-main) 0 0 0 1px",
    borderColor: "var(--rmsc-main)"
  }
});
const DropdownHeading = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  position: "relative",
  padding: "0 var(--rmsc-p)",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "var(--rmsc-h)",
  cursor: "default",
  outline: 0,
  ".dropdown-heading-value": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: 1
  }
});
const ClearSelectedButton = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  cursor: "pointer",
  background: "none",
  border: 0,
  padding: 0,
  display: "flex"
});

const Dropdown = () => {
  const {
    t,
    onMenuToggle,
    ArrowRenderer,
    shouldToggleOnHover,
    isLoading,
    disabled,
    onChange,
    labelledBy,
    value,
    isOpen,
    defaultIsOpen,
    ClearSelectedIcon
  } = useMultiSelect();
  const [isInternalExpand, setIsInternalExpand] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [expanded, setExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultIsOpen);
  const [hasFocus, setHasFocus] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const FinalArrow = ArrowRenderer || Arrow;
  const wrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  useDidUpdateEffect(() => {
    onMenuToggle && onMenuToggle(expanded);
  }, [expanded]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (defaultIsOpen === undefined && typeof isOpen === "boolean") {
      setIsInternalExpand(false);
      setExpanded(isOpen);
    }
  }, [isOpen]);

  const handleKeyDown = e => {
    var _wrapper$current;

    if (isInternalExpand) {
      switch (e.which) {
        case 27: // Escape

        case 38:
          // Up Arrow
          setExpanded(false);
          wrapper == null ? void 0 : (_wrapper$current = wrapper.current) == null ? void 0 : _wrapper$current.focus();
          break;

        case 32: // Space

        case 13: // Enter Key

        case 40:
          // Down Arrow
          setExpanded(true);
          break;

        default:
          return;
      }
    }

    e.preventDefault();
  };

  const handleHover = iexpanded => {
    isInternalExpand && shouldToggleOnHover && setExpanded(iexpanded);
  };

  const handleFocus = () => !hasFocus && setHasFocus(true);

  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget) && isInternalExpand) {
      setHasFocus(false);
      setExpanded(false);
    }
  };

  const handleMouseEnter = () => handleHover(true);

  const handleMouseLeave = () => handleHover(false);

  const toggleExpanded = () => {
    isInternalExpand && setExpanded(isLoading || disabled ? false : !expanded);
  };

  const handleClearSelected = e => {
    e.stopPropagation();
    onChange([]);
    isInternalExpand && setExpanded(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    tabIndex: 0,
    className: cn(DropdownContainer, "dropdown-container"),
    "aria-labelledby": labelledBy,
    "aria-expanded": expanded,
    "aria-readonly": true,
    "aria-disabled": disabled,
    ref: wrapper,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cn(DropdownHeading, "dropdown-heading"),
    onClick: toggleExpanded
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dropdown-heading-value"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownHeader, null)), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, null), value.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: cn(ClearSelectedButton, "clear-selected-button"),
    onClick: handleClearSelected,
    disabled: disabled,
    "aria-label": t("clearSelected")
  }, ClearSelectedIcon || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cross, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FinalArrow, {
    expanded: expanded
  })), expanded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cn(PanelContainer, "dropdown-content")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "panel-content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectPanel, null))));
};

const MultiSelectBox = /*#__PURE__*/Object(goober__WEBPACK_IMPORTED_MODULE_0__["css"])({
  "--rmscMain": "#4285f4",
  "--rmscHover": "#f1f3f5",
  "--rmscSelected": "#e2e6ea",
  "--rmscBorder": "#ccc",
  "--rmscGray": "#aaa",
  "--rmscBg": "#fff",
  "--rmscP": "10px",
  "--rmscRadius": "4px",
  "--rmscH": "38px",
  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease"
  },
  ".gray": {
    color: "var(--rmsc-gray)"
  }
});

const MultiSelect = props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MultiSelectProvider, {
  props: props
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: cn(MultiSelectBox, props.className || "multi-select")
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dropdown, null)));

/* harmony default export */ __webpack_exports__["default"] = (MultiSelect);

//# sourceMappingURL=react-multi-select-component.esm.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/controls/content-visibility-controls.js":
/*!*****************************************************!*\
  !*** ./src/controls/content-visibility-controls.js ***!
  \*****************************************************/
/*! exports provided: contentVisibilityControls, addContentVisibilityRulesAttribute, addContentVisibilityRulesPropOnSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentVisibilityControls", function() { return contentVisibilityControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContentVisibilityRulesAttribute", function() { return addContentVisibilityRulesAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContentVisibilityRulesPropOnSave", function() { return addContentVisibilityRulesPropOnSave; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _content_visibility_rules_enabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-visibility-rules-enabled */ "./src/controls/content-visibility-rules-enabled.js");
/* harmony import */ var _content_visibility_displayed_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-visibility-displayed-control */ "./src/controls/content-visibility-displayed-control.js");
/* harmony import */ var _helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/is-valid-blocktype */ "./src/helpers/is-valid-blocktype.js");













var contentVisibilityControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    if (!Object(_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_11__["default"])(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    // Add a class to the div contining the rules so we can show/hide them when they are enabled/disabled.
    // Normally this would be props.attributes.contentVisibilityRules for anything registered in core, or in JS. However, as it's
    // possible to register attributes in PHP _alone_ we need to look at props.block.attributes.contentVisibilityRules -- both
    // get updated when a block is updated.
    var showControls = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled ? 'show-controls' : 'hide-controls';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Visibility', 'content-visibility'),
      className: "content-visibility-controls",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], {
      className: "content-visibility-rules-enabled"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_rules_enabled__WEBPACK_IMPORTED_MODULE_9__["ContentVisibilityRulesEnabled"], {
      props: props
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: showControls + " content-visibility-controls-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], {
      className: "content-visibility-displayed-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_displayed_control__WEBPACK_IMPORTED_MODULE_10__["ContentVisibilityDisplayedControl"], {
      props: props
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Slot"], {
      name: "content-visibility-extra-controls",
      fillProps: props
    })))));
  };
}, 'contentVisibilityControls');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('editor.BlockEdit', 'content-visibility/content-visibility-controls', contentVisibilityControls);

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addContentVisibilityRulesAttribute(settings) {
  // If this is a valid block
  if (Object(_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_11__["default"])(settings.name)) {
    // Run the rules through a filter so we're able to add rules externally.
    var defaultRules = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["applyFilters"])('contentVisibility.defaultContentVisibilityRules', {
      contentVisibilityRulesEnabled: false,
      userAuthenticated: ''
    });

    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(settings.attributes, {
      contentVisibilityRules: {
        type: 'object',
        default: defaultRules
      }
    });
  }
  return settings;
} // end addContentVisibilityRulesAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addContentVisibilityRulesPropOnSave(extraProps, blockType, attributes) {
  // If the current block is valid, add our prop.
  if (Object(_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_11__["default"])(blockType.name)) {
    extraProps.contentVisibilityRules = attributes.contentVisibilityRules;
  }
  return extraProps;
} // end addContentVisibilityRulesPropOnSave()

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('blocks.registerBlockType', 'content-visibility/addContentVisibilityRulesAttribute', addContentVisibilityRulesAttribute);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('blocks.getSaveContent.extraProps', 'content-visibility/addContentVisibilityRulesPropOnSave', addContentVisibilityRulesPropOnSave);

/* -------------- 

const ContentVisibilityPluginBlockSettingsMenuItem = () => (
    <PluginBlockSettingsMenuItem
        allowedBlocks={ [ 'core/paragraph' ] }
        icon="smiley"
        label="Menu item text"
        onClick={ () => {
            console.log( [wp.data.select( 'core/block-editor' ).getSelectedBlock()] );
        } }
    />
);
 
registerPlugin( 'block-settings-menu-group-test', {
    render: ContentVisibilityPluginBlockSettingsMenuItem,
} );

-------------- */

/***/ }),

/***/ "./src/controls/content-visibility-displayed-control.js":
/*!**************************************************************!*\
  !*** ./src/controls/content-visibility-displayed-control.js ***!
  \**************************************************************/
/*! exports provided: ContentVisibilityDisplayedControl, addContentVisibilityAttribute, addBlockVisibilityPropOnSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityDisplayedControl", function() { return ContentVisibilityDisplayedControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContentVisibilityAttribute", function() { return addContentVisibilityAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBlockVisibilityPropOnSave", function() { return addBlockVisibilityPropOnSave; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shown_or_hidden_content_visibility_shown_hidden_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shown-or-hidden/content-visibility-shown-hidden-control */ "./src/controls/shown-or-hidden/content-visibility-shown-hidden-control.js");
/* harmony import */ var _helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/is-valid-blocktype */ "./src/helpers/is-valid-blocktype.js");








var ContentVisibilityDisplayedControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  option: ''
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props;
  var rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  if (!rulesEnabled) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_shown_or_hidden_content_visibility_shown_hidden_control__WEBPACK_IMPORTED_MODULE_6__["ContentVisibilityShownHiddenControl"], {
      props: props
    }));
  }
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_shown_or_hidden_content_visibility_shown_hidden_control__WEBPACK_IMPORTED_MODULE_6__["ContentVisibilityShownHiddenControl"], {
    props: props
  });
});

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addContentVisibilityAttribute(settings) {
  // If this is a valid block
  if (Object(_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__["default"])(settings.name)) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_5___default()(settings.attributes, {
      contentVisibility: {
        type: 'string'
      }
    });
  }
  return settings;
} // end addContentVisibilityAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addBlockVisibilityPropOnSave(extraProps, blockType, attributes) {
  // If the current block is valid, add our prop.
  if (Object(_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_7__["default"])(blockType.name)) {
    extraProps.contentVisibility = attributes.contentVisibility;
  }
  return extraProps;
} // end addBlockVisibilityPropOnSave()

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('blocks.registerBlockType', 'content-visibility/addContentVisibilityAttribute', addContentVisibilityAttribute);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('blocks.getSaveContent.extraProps', 'content-visibility/addBlockVisibilityPropOnSave', addBlockVisibilityPropOnSave);

/***/ }),

/***/ "./src/controls/content-visibility-rules-enabled.js":
/*!**********************************************************!*\
  !*** ./src/controls/content-visibility-rules-enabled.js ***!
  \**********************************************************/
/*! exports provided: ContentVisibilityRulesEnabled, addContentVisibilityRulesEnabledAttribute, addContentVisibilityRulesEnabledPropOnSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityRulesEnabled", function() { return ContentVisibilityRulesEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContentVisibilityRulesEnabledAttribute", function() { return addContentVisibilityRulesEnabledAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContentVisibilityRulesEnabledPropOnSave", function() { return addContentVisibilityRulesEnabledPropOnSave; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/is-valid-blocktype */ "./src/helpers/is-valid-blocktype.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var ContentVisibilityRulesEnabled = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["withState"])({
  rulesEnabled: false
})(function (_ref) {
  var rulesEnabled = _ref.rulesEnabled,
    setState = _ref.setState,
    props = _ref.props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Rules Enabled', 'content-visibility') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Rules Disabled', 'content-visibility'),
    checked: props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled || rulesEnabled,
    onChange: function onChange(rulesEnabled) {
      return setState(function (state) {
        var newBVRules = _objectSpread({}, props.attributes.contentVisibilityRules);
        newBVRules.contentVisibilityRulesEnabled = rulesEnabled;
        props.setAttributes({
          contentVisibilityRules: newBVRules
        });

        // Fire an action so we can see what's happened in other controls. This can be useful,
        // for example when setting rules for roles - pointless if a user isn't signed in.
        Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["doAction"])('contentVisibility.onChange.contentVisibilityRulesEnabled', 'content-visibility/onChange', rulesEnabled, props);

        // Sets the state
        return {
          rulesEnabled: !state.rulesEnabled
        };
      });
    }
  });
});

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addContentVisibilityRulesEnabledAttribute(settings) {
  // If this is a valid block
  if (Object(_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_8__["default"])(settings.name)) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_7___default()(settings.attributes, {
      contentVisibilityRulesEnabled: {
        type: 'boolean'
      }
    });
  }
  return settings;
} // end addContentVisibilityRulesEnabledAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addContentVisibilityRulesEnabledPropOnSave(extraProps, blockType, attributes) {
  // If the current block is valid, add our prop.
  if (Object(_helpers_is_valid_blocktype__WEBPACK_IMPORTED_MODULE_8__["default"])(blockType.name)) {
    extraProps.contentVisibilityRulesEnabled = attributes.contentVisibilityRulesEnabled;
  }
  return extraProps;
} // end addContentVisibilityRulesEnabledPropOnSave()

/**
 * Add a custom class name to each block that has content visibility rules enabled.
 *
 * @param {Object} BlockListBlock The current block
 *
 * @return {Object} The block with a custom class name added if the block has rules enabled. The unmodified block otherwise.
 */
var withCustomClassName = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (!props.attributes.contentVisibility || !props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockListBlock, props);
    }
    var iconClassName = 'content-visibility-rules-enabled-' + props.attributes.contentVisibility;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockListBlock, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      className: iconClassName
    }));
  };
}, 'withCustomClassName');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["addFilter"])('blocks.registerBlockType', 'content-visibility/addContentVisibilityRulesEnabledAttribute', addContentVisibilityRulesEnabledAttribute, 999);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["addFilter"])('blocks.getSaveContent.extraProps', 'content-visibility/addContentVisibilityRulesEnabledPropOnSave', addContentVisibilityRulesEnabledPropOnSave, 999);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["addFilter"])('editor.BlockListBlock', 'content-visibility/add-class-name-for-blocks-with-rules', withCustomClassName, 999);

/***/ }),

/***/ "./src/controls/content-visibility-user-authentication.js":
/*!****************************************************************!*\
  !*** ./src/controls/content-visibility-user-authentication.js ***!
  \****************************************************************/
/*! exports provided: ContentVisibilityUserAuthenticationControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityUserAuthenticationControl", function() { return ContentVisibilityUserAuthenticationControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_authentication_user_authentication_panel_body_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-authentication/user-authentication-panel-body-control */ "./src/controls/user-authentication/user-authentication-panel-body-control.js");






var ContentVisibilityUserAuthenticationControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  option: ''
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props;
  var rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  var contentVisibility = props.attributes.hasOwnProperty('contentVisibility');
  if (!rulesEnabled || !contentVisibility) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_user_authentication_user_authentication_panel_body_control__WEBPACK_IMPORTED_MODULE_5__["ContentVisibilityUserAuthenticationPanelBodyControl"], {
      props: props
    }));
  }
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_user_authentication_user_authentication_panel_body_control__WEBPACK_IMPORTED_MODULE_5__["ContentVisibilityUserAuthenticationPanelBodyControl"], {
    props: props
  });
});

/**
 * Render the <ContentVisibilityUserAuthenticationControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityUserAuthenticationControl component.
 */
function BlockVisibilityUserAuthenitcationFill() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Fill"], {
    name: "content-visibility-extra-controls"
  }, function (fillProps) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentVisibilityUserAuthenticationControl, {
      props: fillProps
    });
  });
}

// Add our component to the Slot provided by BlockVisibilityControls
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__["registerPlugin"])('content-visibility-01-user-authentication-fill', {
  render: BlockVisibilityUserAuthenitcationFill
});

/***/ }),

/***/ "./src/controls/multiselect/content-visibility-multiselect.js":
/*!********************************************************************!*\
  !*** ./src/controls/multiselect/content-visibility-multiselect.js ***!
  \********************************************************************/
/*! exports provided: ContentVisibilityMultiSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityMultiSelect", function() { return ContentVisibilityMultiSelect; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-select-component */ "./node_modules/react-multi-select-component/dist/react-multi-select-component.esm.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * Reusable, accessible multi-select component which includes a fuzzy search, select all/none using the react-multi-select-component
 * by Harsh Zalavadiya : https://github.com/harshzalavadiya/react-multi-select-component#readme.
 *
 * I've expanded it slightly, by allowing the data passed in to accept an `icon` property which should be a WordPress Icon compnent.
 *
 * Requires passing in the onChange function to handle data saving. i.e. import this component and then use it like:
 *
 * ```
 * <ContentVisibilityMultiSelect data={ fruits } labelledBy="Select Page Type" props={ props } onChange={ onChange } />
 * ```
 *
 * the `onChange` function can look like this:
 *
 * ```
 * const onChange = ( option ) => {
 *     // Set the state and props.
 *     setState( { option } );
 *     props.setAttributes( {
 *         contentVisibilityRules: {
 *             ...props.attributes.contentVisibilityRules,
 *             specialPage: {
 *                 ...props.attributes.contentVisibilityRules.specialPage,
 *                 pages: option
 *             }
 *         },
 *     } );
 *
 * }
 * ```
 *
 * `data` should be an array of objects which contains label (string), a value (string) and an optional icon (WordPress Icon compnent)
 */

var ContentVisibilityMultiSelect = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["withState"])({
  option: []
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props,
    data = _ref.data,
    labelledBy = _ref.labelledBy,
    type = _ref.type;
  /**
   * onChange callback for the ContentVisibilityMultiSelect component. This handles setting the props and state for
   * this instance of the component.
   * 
   * @param {array} option current value of what is selected.
   */
  var onChange = function onChange(option) {
    // Set the state and props.
    setState({
      option: option
    });
    props.setAttributes({
      contentVisibilityRules: _objectSpread(_objectSpread({}, props.attributes.contentVisibilityRules), {}, {
        specialPage: _objectSpread(_objectSpread({}, props.attributes.contentVisibilityRules.specialPage), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, type, option))
      })
    });
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "content-visibility-multi-select"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_multi_select_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: data,
    value: props.attributes.contentVisibilityRules.specialPage[type] || option,
    onChange: onChange,
    labelledBy: labelledBy,
    ItemRenderer: function ItemRenderer(_ref2) {
      var checked = _ref2.checked,
        option = _ref2.option,
        onClick = _ref2.onClick,
        disabled = _ref2.disabled;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "item-renderer content-visibility-multi-select-item ".concat(disabled && "disabled")
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
        type: "checkbox",
        onChange: onClick,
        checked: checked,
        tabIndex: -1,
        disabled: disabled
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, option.icon || "", " ", option.label));
    }
    // isOpen={ true }
  }));
});

/***/ }),

/***/ "./src/controls/shown-or-hidden/content-visibility-shown-hidden-control.js":
/*!*********************************************************************************!*\
  !*** ./src/controls/shown-or-hidden/content-visibility-shown-hidden-control.js ***!
  \*********************************************************************************/
/*! exports provided: ContentVisibilityShownHiddenControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityShownHiddenControl", function() { return ContentVisibilityShownHiddenControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var ContentVisibilityShownHiddenControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  option: ''
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Shown or Hidden', 'content-visibility-user-role'),
    initialOpen: true,
    className: "content-visibility-control-panel content-visibility-user-role-controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("When the rules below are true, this block will be: ", 'content-visibility'),
    help: "",
    selected: props.attributes.contentVisibility || option,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Shown', 'content-visibility'),
      value: 'shown'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hidden', 'content-visibility'),
      value: 'hidden'
    }],
    onChange: function onChange(option) {
      setState({
        option: option
      });
      props.setAttributes({
        contentVisibility: option
      });
    }
  })));
});

/***/ }),

/***/ "./src/controls/special-page/content-visibility-page-page-inserter.js":
/*!****************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-page-page-inserter.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-pages */ "./src/helpers/get-pages.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









var PagePageInserter = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  isVisible: false
})(function (_ref) {
  var isVisible = _ref.isVisible,
    setState = _ref.setState,
    props = _ref.props;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  var data = Object(_helpers_get_pages__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  var type = 'pages';

  /**
   * Helps with the content of the inserter button.
   */
  var niceName = {
    singular: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Page', 'content-visibility'),
    plural: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Pages', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  var toggleVisible = function toggleVisible() {
    setState(function (state) {
      return {
        isVisible: !state.isVisible
      };
    });
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "content-visibility-special-page-inserter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "networking",
    iconSize: "12"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: Object(_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, Object(_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select specific pages', 'content-visibility'), niceName), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Pages', 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select the pages upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__["ContentVisibilityMultiSelect"], {
    data: data,
    labelledBy: "Select Page",
    props: props,
    type: type
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-submit-special-pages-button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    className: "content-visibility-submit-special-pages",
    onClick: toggleVisible
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Set Selected', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "editor-help",
    iconSize: "12"
  }), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Help', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Selecting one or more pages from this list will mean that this block will only be ".concat(props.attributes.contentVisibility, " on those pages. If you want this block to be ").concat(props.attributes.contentVisibility, " on ALL pages, please use the 'Special Pages' option and select 'Any Page'"), 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    className: "content-visibility-close-popover",
    icon: "no",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (PagePageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-post-page-inserter.js":
/*!****************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-post-page-inserter.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-posts */ "./src/helpers/get-posts.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









var PostPageInserter = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  isVisible: false
})(function (_ref) {
  var isVisible = _ref.isVisible,
    setState = _ref.setState,
    props = _ref.props;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  var data = Object(_helpers_get_posts__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  var type = 'posts';

  /**
   * Helps with the content of the inserter button.
   */
  var niceName = {
    singular: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Post', 'content-visibility'),
    plural: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Posts', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  var toggleVisible = function toggleVisible() {
    setState(function (state) {
      return {
        isVisible: !state.isVisible
      };
    });
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "content-visibility-special-page-inserter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "admin-post",
    iconSize: "12"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: Object(_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, Object(_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select specific posts', 'content-visibility'), niceName), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Posts', 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select the posts upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__["ContentVisibilityMultiSelect"], {
    data: data,
    labelledBy: "Select Page",
    props: props,
    type: type
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-submit-special-pages-button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    className: "content-visibility-submit-special-pages",
    onClick: toggleVisible
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Set Selected', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "editor-help",
    iconSize: "12"
  }), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Help', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Selecting one or more posts from this list will mean that this block will only be ".concat(props.attributes.contentVisibility, " on those posts. If you want this block to be ").concat(props.attributes.contentVisibility, " on ALL posts, please use the 'Special Pages' option and select 'Any Post'"), 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    className: "content-visibility-close-popover",
    icon: "no",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (PostPageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-category-inserter.js":
/*!****************************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-category-inserter.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-categories */ "./src/helpers/get-categories.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









var CategoryPageInserter = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  isVisible: false
})(function (_ref) {
  var isVisible = _ref.isVisible,
    setState = _ref.setState,
    props = _ref.props;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  var data = Object(_helpers_get_categories__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  var type = 'categories';

  /**
   * Helps with the content of the inserter button.
   */
  var niceName = {
    singular: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Category', 'content-visibility'),
    plural: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Categories', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  var toggleVisible = function toggleVisible() {
    setState(function (state) {
      return {
        isVisible: !state.isVisible
      };
    });
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "content-visibility-special-page-inserter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "category",
    iconSize: "12"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: Object(_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, Object(_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select specific categories', 'content-visibility'), niceName), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Categories', 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select the categories upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__["ContentVisibilityMultiSelect"], {
    data: data,
    labelledBy: "Select Category",
    props: props,
    type: type
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-submit-categories-button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    className: "content-visibility-submit-categories",
    onClick: toggleVisible
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Set Selected', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "editor-help",
    iconSize: "12"
  }), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Help', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Selecting one or more categories from this list will mean that this block will only be ".concat(props.attributes.contentVisibility, " when the post being viewed is in that category. If you want this block to be ").concat(props.attributes.contentVisibility, " on ALL categories, please use the 'Special Pages' option and select 'Any Category'"), 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    className: "content-visibility-close-popover",
    icon: "no",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (CategoryPageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-controls.js":
/*!*******************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-controls.js ***!
  \*******************************************************************************/
/*! exports provided: ContentVisibilitySpecialPageControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilitySpecialPageControls", function() { return ContentVisibilitySpecialPageControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _content_visibility_special_page_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-visibility-special-page-panel */ "./src/controls/special-page/content-visibility-special-page-panel.js");






var ContentVisibilitySpecialPageControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  option: ''
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props;
  var rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  var contentVisibility = props.attributes.hasOwnProperty('contentVisibility');
  if (!rulesEnabled || !contentVisibility) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_special_page_panel__WEBPACK_IMPORTED_MODULE_5__["ContentVisibilitySpecialPagePanelBodyControl"], {
      props: props
    }));
  }
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_special_page_panel__WEBPACK_IMPORTED_MODULE_5__["ContentVisibilitySpecialPagePanelBodyControl"], {
    props: props
  });
});

/**
 * Render the <ContentVisibilitySpecialPageControls> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilitySpecialPageControls component.
 */
function ContentVisibilitySpecialPageFill() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Fill"], {
    name: "content-visibility-extra-controls"
  }, function (fillProps) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentVisibilitySpecialPageControls, {
      props: fillProps
    });
  });
}

// Only load the Widgets-related controls on the widgets screen or we're local, due to Widgets Screen bug.
if ('appearance_page_gutenberg-widgets' === ContentVisibility.screen || 'widgets' === ContentVisibility.screen || '1' === ContentVisibility.local) {
  // Add our component to the Slot provided by BlockVisibilityControls
  Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__["registerPlugin"])('content-visibility-04-special-page-fill', {
    render: ContentVisibilitySpecialPageFill
  });
}

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-page-inserter.js":
/*!************************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-page-inserter.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_special_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-special-pages */ "./src/helpers/get-special-pages.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









var SpecialPagePageInserter = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  isVisible: false
})(function (_ref) {
  var isVisible = _ref.isVisible,
    setState = _ref.setState,
    props = _ref.props;
  /**
   * A list of special pages, their associated title and icon are passed in from PHP as ContentVisibility.specialPages
   * We manipulate this associative PHP array (which in turn becomes a JS object) into something usable for our dropdown.
   */
  var specialPages = Object(_helpers_get_special_pages__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  var type = 'specialPages';

  /**
   * Helps with the content of the inserter button.
   */
  var niceName = {
    singular: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Special Page', 'content-visibility'),
    plural: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Special Pages', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  var toggleVisible = function toggleVisible() {
    setState(function (state) {
      return {
        isVisible: !state.isVisible
      };
    });
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "content-visibility-special-page-inserter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "text-page",
    iconSize: "12"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: Object(_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, Object(_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select special pages', 'content-visibility'), niceName), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Insert Special Pages', 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select the special pages upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__["ContentVisibilityMultiSelect"], {
    data: specialPages,
    labelledBy: "Select Page Type",
    props: props,
    type: type
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-submit-special-pages-button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    className: "content-visibility-submit-special-pages",
    onClick: toggleVisible
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Set Selected', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "editor-help",
    iconSize: "12"
  }), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('What are Special Pages?', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('By default, WordPress websites contain more than just the posts and pages you create here in the dashboard. Content Visibility allows you to display your blocks on any of the following types of pages that your theme can make available to your visitors. ', 'content-visibility-special-page')), specialPages.map(function (specialPage) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, specialPage.label), ": ", specialPage.notes);
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    className: "content-visibility-close-popover",
    icon: "no",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (SpecialPagePageInserter);

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-panel.js":
/*!****************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-panel.js ***!
  \****************************************************************************/
/*! exports provided: ContentVisibilitySpecialPagePanelBodyControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilitySpecialPagePanelBodyControl", function() { return ContentVisibilitySpecialPagePanelBodyControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _content_visibility_special_page_page_inserter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-visibility-special-page-page-inserter */ "./src/controls/special-page/content-visibility-special-page-page-inserter.js");
/* harmony import */ var _content_visibility_page_page_inserter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-visibility-page-page-inserter */ "./src/controls/special-page/content-visibility-page-page-inserter.js");
/* harmony import */ var _content_visibility_post_page_inserter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-visibility-post-page-inserter */ "./src/controls/special-page/content-visibility-post-page-inserter.js");
/* harmony import */ var _content_visibility_special_page_category_inserter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-visibility-special-page-category-inserter */ "./src/controls/special-page/content-visibility-special-page-category-inserter.js");
/* harmony import */ var _content_visibility_special_page_tag_inserter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-visibility-special-page-tag-inserter */ "./src/controls/special-page/content-visibility-special-page-tag-inserter.js");
/* harmony import */ var _helpers_has_rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/has-rules */ "./src/helpers/has-rules.js");











var ContentVisibilitySpecialPagePanelBodyControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  option: []
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props;
  var hasRulesClass = Object(_helpers_has_rules__WEBPACK_IMPORTED_MODULE_10__["default"])(props, 'specialPage') ? ' has-active-rules' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Special Page', 'content-visibility'),
    initialOpen: false,
    className: "content-visibility-control-panel block-visibility-special-page-controls" + hasRulesClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], {
    className: "content-visibility-page-inserter-panel-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_special_page_page_inserter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    props: props
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_page_page_inserter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    props: props
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_post_page_inserter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    props: props
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_special_page_category_inserter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    props: props
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_special_page_tag_inserter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    props: props
  })), props.attributes.contentVisibility && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "special-page-help-intro content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select the types of content upon which this block will be ' + props.attributes.contentVisibility + '.', 'content-visibility')));
});

// Register our visibility rule in the main rules object.
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('contentVisibility.defaultContentVisibilityRules', 'content-visibility-special-page/block-visibility-rules', registerSpecialPageVisibilityRule);
function registerSpecialPageVisibilityRule(defaultRules) {
  defaultRules.specialPage = {
    pages: [],
    specialPages: [],
    posts: [],
    categories: [],
    tags: []
  };
  return defaultRules;
}

/***/ }),

/***/ "./src/controls/special-page/content-visibility-special-page-tag-inserter.js":
/*!***********************************************************************************!*\
  !*** ./src/controls/special-page/content-visibility-special-page-tag-inserter.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_get_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/get-tags */ "./src/helpers/get-tags.js");
/* harmony import */ var _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/keep-popup-open */ "./src/helpers/keep-popup-open.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/special-page-insert-text */ "./src/helpers/special-page-insert-text.js");
/* harmony import */ var _helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/special-pages-insert-button-class */ "./src/helpers/special-pages-insert-button-class.js");
/* harmony import */ var _multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiselect/content-visibility-multiselect */ "./src/controls/multiselect/content-visibility-multiselect.js");









var TagPageInserter = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  isVisible: false
})(function (_ref) {
  var isVisible = _ref.isVisible,
    setState = _ref.setState,
    props = _ref.props;
  /**
   * Our data, passed from PHP and manipulated to be useful here in JS.
   */
  var data = Object(_helpers_get_tags__WEBPACK_IMPORTED_MODULE_3__["default"])();

  /**
   * This controls the key used where the data is stored.
   */
  var type = 'tags';

  /**
   * Helps with the content of the inserter button.
   */
  var niceName = {
    singular: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tag', 'content-visibility'),
    plural: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tags', 'content-visibility')
  };

  /**
   * Toggle the visible state. Detemines whether the popup is open or not.
   */
  var toggleVisible = function toggleVisible() {
    setState(function (state) {
      return {
        isVisible: !state.isVisible
      };
    });
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "content-visibility-special-page-inserter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "tag",
    iconSize: "12"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSecondary: true,
    isSmall: true,
    isLink: true,
    onClick: toggleVisible,
    className: Object(_helpers_special_pages_insert_button_class__WEBPACK_IMPORTED_MODULE_7__["default"])(props, type)
  }, Object(_helpers_special_page_insert_text__WEBPACK_IMPORTED_MODULE_6__["default"])(props, type, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select specific tags', 'content-visibility'), niceName), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    position: "middle left",
    className: "content-visibility-special-page-help-instructions-popover",
    onClick: _helpers_keep_popup_open__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Tags', 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select the tags upon which you would like this block to be ', 'content-visibility') + props.attributes.contentVisibility), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_multiselect_content_visibility_multiselect__WEBPACK_IMPORTED_MODULE_8__["ContentVisibilityMultiSelect"], {
    data: data,
    labelledBy: "Select Tag",
    props: props,
    type: type
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "content-visibility-submit-tags-button-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    className: "content-visibility-submit-tags",
    onClick: toggleVisible
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Set Selected', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "editor-help",
    iconSize: "12"
  }), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Help', 'content-visibility'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Selecting one or more tags from this list will mean that this block will only be ".concat(props.attributes.contentVisibility, " when the post being viewed is in that tag. If you want this block to be ").concat(props.attributes.contentVisibility, " on ALL tags, please use the 'Special Pages' option and select 'Any tag'"), 'content-visibility')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    className: "content-visibility-close-popover",
    icon: "no",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Close', 'content-visibility'),
    onClick: toggleVisible
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (TagPageInserter);

/***/ }),

/***/ "./src/controls/user-authentication/content-visibility-user-authentication-radio-control.js":
/*!**************************************************************************************************!*\
  !*** ./src/controls/user-authentication/content-visibility-user-authentication-radio-control.js ***!
  \**************************************************************************************************/
/*! exports provided: ContentVisibilityUserAuthenticationRadioControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityUserAuthenticationRadioControl", function() { return ContentVisibilityUserAuthenticationRadioControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var ContentVisibilityUserAuthenticationRadioControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["withState"])({
  option: ''
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    label: "",
    help: "",
    className: "content-visibility-user-authenticated-control",
    selected: props.attributes.contentVisibilityRules.userAuthenticated || option,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Signed Out', 'content-visibility'),
      value: 'logged-out'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Signed In', 'content-visibility'),
      value: 'logged-in'
    }],
    onChange: function onChange(option) {
      // Set the state and props.
      setState({
        option: option
      });
      var newBVRules = _objectSpread({}, props.attributes.contentVisibilityRules);
      newBVRules.userAuthenticated = option;
      props.setAttributes({
        contentVisibilityRules: newBVRules
      });

      // Fire an action so we can see what's happened in other controls. This can be useful,
      // for example when setting rules for roles - pointless if a user isn't signed in.
      Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["doAction"])('contentVisibility.onChange.userAuthenticated', 'content-visibility/onChange', option, props);
    }
  });
});

/***/ }),

/***/ "./src/controls/user-authentication/user-authentication-panel-body-control.js":
/*!************************************************************************************!*\
  !*** ./src/controls/user-authentication/user-authentication-panel-body-control.js ***!
  \************************************************************************************/
/*! exports provided: ContentVisibilityUserAuthenticationPanelBodyControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityUserAuthenticationPanelBodyControl", function() { return ContentVisibilityUserAuthenticationPanelBodyControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _content_visibility_user_authentication_radio_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-visibility-user-authentication-radio-control */ "./src/controls/user-authentication/content-visibility-user-authentication-radio-control.js");





var ContentVisibilityUserAuthenticationPanelBodyControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
  option: ''
})(function (_ref) {
  var option = _ref.option,
    setState = _ref.setState,
    props = _ref.props;
  var hasRulesClass = props.attributes.contentVisibilityRules && props.attributes.contentVisibilityRules.userAuthenticated && props.attributes.contentVisibilityRules.userAuthenticated !== '' ? ' has-active-rules' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('User Authentication', 'content-visibility'),
    initialOpen: false,
    className: "content-visibility-control-panel content-visibility-user-authenticated-controls" + hasRulesClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_visibility_user_authentication_radio_control__WEBPACK_IMPORTED_MODULE_4__["ContentVisibilityUserAuthenticationRadioControl"], {
    props: props
  }), props.attributes.contentVisibility && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "user-auth-help-intro content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select whether this block will be ' + props.attributes.contentVisibility + ' if a user is signed in to this site. If neither is selected, this block will be ' + props.attributes.contentVisibility + ' regardless of whether a user is signed in or not.', 'content-visibility-user-role'))));
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers/get-categories.js":
/*!***************************************!*\
  !*** ./src/helpers/get-categories.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the categories on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */
function getCategories() {
  var categories = [];
  if (ContentVisibility.categories.length === 0) {
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('No categories found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (var category in ContentVisibility.categories) {
    categories.push({
      label: ContentVisibility.categories[category].label,
      value: ContentVisibility.categories[category].id,
      notes: ContentVisibility.categories[category].notes
    });
  }
  return categories;
} // end getCategories()

/* harmony default export */ __webpack_exports__["default"] = (getCategories);

/***/ }),

/***/ "./src/helpers/get-pages.js":
/*!**********************************!*\
  !*** ./src/helpers/get-pages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the pages on the site (in any status). We massage that data to be
 * usable by our Dropdown.
 *
 */
function getPages() {
  var pages = [];
  if (ContentVisibility.pages.length === 0) {
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('No pages found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (var page in ContentVisibility.pages) {
    pages.push({
      label: ContentVisibility.pages[page].label,
      value: ContentVisibility.pages[page].id,
      notes: ContentVisibility.pages[page].notes
    });
  }
  return pages;
} // end getPages()

/* harmony default export */ __webpack_exports__["default"] = (getPages);

/***/ }),

/***/ "./src/helpers/get-posts.js":
/*!**********************************!*\
  !*** ./src/helpers/get-posts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the posts on the site (in any status). We massage that data to be
 * usable by our Dropdown.
 *
 */
function getPosts() {
  var posts = [];
  if (ContentVisibility.posts.length === 0) {
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('No posts found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (var post in ContentVisibility.posts) {
    posts.push({
      label: ContentVisibility.posts[post].label,
      value: ContentVisibility.posts[post].id,
      notes: ContentVisibility.posts[post].notes
    });
  }
  return posts;
} // end getPosts()

/* harmony default export */ __webpack_exports__["default"] = (getPosts);

/***/ }),

/***/ "./src/helpers/get-special-pages.js":
/*!******************************************!*\
  !*** ./src/helpers/get-special-pages.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



/**
 * A list of special pages, their associated title and icon are passed in from PHP as ContentVisibility.specialPages
 * We manipulate this associative PHP array (which in turn becomes a JS object) into something usable for our dropdown.
 *
 */
function getSpecialPages() {
  var specialPages = [];
  for (var specialPage in ContentVisibility.specialPages) {
    specialPages.push({
      label: ContentVisibility.specialPages[specialPage].label,
      value: ContentVisibility.specialPages[specialPage].keyValue,
      notes: ContentVisibility.specialPages[specialPage].notes,
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        size: "12",
        icon: ContentVisibility.specialPages[specialPage].icon
      })
    });
  }
  return specialPages;
} // end getSpecialPages()

/* harmony default export */ __webpack_exports__["default"] = (getSpecialPages);

/***/ }),

/***/ "./src/helpers/get-tags.js":
/*!*********************************!*\
  !*** ./src/helpers/get-tags.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PHP sends through a list of all the tags on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */
function getTags() {
  var tags = [];
  if (ContentVisibility.tags.length === 0) {
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('No tags found.', 'content-visibility'),
      value: 0,
      notes: ''
    }];
  }
  for (var tag in ContentVisibility.tags) {
    tags.push({
      label: ContentVisibility.tags[tag].label,
      value: ContentVisibility.tags[tag].id,
      notes: ContentVisibility.tags[tag].notes
    });
  }
  return tags;
} // end getTags()

/* harmony default export */ __webpack_exports__["default"] = (getTags);

/***/ }),

/***/ "./src/helpers/has-parent-with-class.js":
/*!**********************************************!*\
  !*** ./src/helpers/has-parent-with-class.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Is the passed element a child of an element that has a class of the passed parentClassName.
 * From: https://codepen.io/ross-angus/pen/eYJRmZR
 *
 * @param {object} element The name of the block.
 * @param {string} parentClassName the name of the class on the parent to check for.
 */
function hasParentWithClass(element, classname) {
  // SVGs are weird, man.
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(element.className) !== 'object' && element.className.split(' ').indexOf(classname) >= 0) {
    return true;
  } else if (element.tagName !== 'HTML') {
    // If you've reached the body, you've gone too far
    return element.parentNode && hasParentWithClass(element.parentNode, classname);
  } else {
    return false;
  }
} //end hasParentWithClass()

/* harmony default export */ __webpack_exports__["default"] = (hasParentWithClass);

/***/ }),

/***/ "./src/helpers/has-rules.js":
/*!**********************************!*\
  !*** ./src/helpers/has-rules.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Determine if the passed block props contain rules of the passed type.
 *
 * @param {object} props The currently selected block's props.
 * @param {string} type The type of the rules i.e. userAuthenticated or specialPage (or ones from add-ons).
 *
 * @return {bool} true if the passed props contain non-empty rules of the passed type. False otherwise.
 */
function hasRules(props, type) {
  if (!props.attributes.contentVisibilityRules) {
    return false;
  }
  if (!props.attributes.contentVisibilityRules[type]) {
    return false;
  }

  // Default to false. Passed through a filter later.
  var hasRules = false;
  switch (type) {
    case 'userAuthenticated':
      if (props.attributes.contentVisibilityRules[type] !== '') {
        hasRules = true;
      }
      break;
    case 'specialPage':
      var allSpecialPageRules = props.attributes.contentVisibilityRules.specialPage;

      // If *any* of the special pages contains rules, then this is true. Is an array of arrays.
      var specialPageRulesValues = Object.values(allSpecialPageRules);

      // if any of the arrays in specialPageRulesValues is non-empty then we have SOME rules.
      hasRules = specialPageRulesValues.some(function (el) {
        return el.length > 0;
      });
      break;
    default:
      break;
  }
  return Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('content-visibility-has-rules', hasRules, props, type);
} // end hasRules()

/* harmony default export */ __webpack_exports__["default"] = (hasRules);

/***/ }),

/***/ "./src/helpers/is-valid-blocktype.js":
/*!*******************************************!*\
  !*** ./src/helpers/is-valid-blocktype.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Is the passed block name one which supports our custom field?
 *
 * @param {string} name The name of the block.
 */
function isValidBlockType(name) {
  var invalidBlockTypes = ['something/unsupported'];
  return !invalidBlockTypes.includes(name);
} // end isValidBlockType()

/* harmony default export */ __webpack_exports__["default"] = (isValidBlockType);

/***/ }),

/***/ "./src/helpers/keep-popup-open.js":
/*!****************************************!*\
  !*** ./src/helpers/keep-popup-open.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _has_parent_with_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-parent-with-class */ "./src/helpers/has-parent-with-class.js");


/**
 * The Popup component closes if it loses focus by default. For us, we want to ensure it
 * stays open until someone intentially closes it via either setting the selected items,
 * pressing a close button, or clicking the button they initially used to open the popup.
 *
 * @param {event} event The click event.
 * @return null
 */
var keepPopupOpen = function keepPopupOpen(event) {
  if (false === event) {
    return;
  }

  // Determine if what has been clicked on is in the popover or not.
  var eTarget = event.target;
  if (Object(_has_parent_with_class__WEBPACK_IMPORTED_MODULE_0__["default"])(eTarget, 'components-popover__content')) {
    event.stopPropagation();
  }
  return;
};
/* harmony default export */ __webpack_exports__["default"] = (keepPopupOpen);

/***/ }),

/***/ "./src/helpers/special-page-insert-text.js":
/*!*************************************************!*\
  !*** ./src/helpers/special-page-insert-text.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Determine the text for the button which opens the popup for the special pages inserter. By default, if there are
 * no special pages selected, it will be 'Select special pages'. However, if there are special pages set, it will
 * say how many.
 *
 * @param object props the props for this current iteration of the inserter.
 * @param string type the key in the object data store for specialPages
 * @param string defaultVal the original, default, text for the button (which is shown we no special pages are selected)
 * @param object niceName the text-friendly versions of the type of special page. i.e. "Special Pages" as opposed to 'special-page'.
 *                        object contains a singular and plural property.
 * @return string the text to be used for the button.
 */
var specialPagesInsertText = function specialPagesInsertText(props, type, defaultVal, niceName) {
  // if nothing is set, return a prompt to select special pages.
  if (props.attributes.contentVisibilityRules.specialPage[type] === undefined || props.attributes.contentVisibilityRules.specialPage[type].length === 0) {
    return defaultVal;
  }
  var shownOrHidden = props.attributes.contentVisibility;
  var specialPages = props.attributes.contentVisibilityRules.specialPage[type];
  var specialPagesCount = specialPages.length;
  var niceType = specialPagesCount === 1 ? niceName.singular : niceName.plural;
  var insertText = shownOrHidden + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(' on ') + specialPagesCount + ' ' + niceType;
  return insertText;
};
/* harmony default export */ __webpack_exports__["default"] = (specialPagesInsertText);

/***/ }),

/***/ "./src/helpers/special-pages-insert-button-class.js":
/*!**********************************************************!*\
  !*** ./src/helpers/special-pages-insert-button-class.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The class which is given to the button used to toggle the popover where people can select which content to select.
 * We add a 'has-items' class if someone has chosen at least one item.
 *
 * @return string
 */
var specialPagesInsertButtonClass = function specialPagesInsertButtonClass(props, type) {
  // If we don't have any items selected, just basic class.
  if (props.attributes.contentVisibilityRules.specialPage[type] === undefined || props.attributes.contentVisibilityRules.specialPage[type].length === 0) {
    return 'content-visibility-special-page-inserter-toggle';
  }

  // We have some items selected, so we have a couple classes.
  return 'content-visibility-special-page-inserter-toggle has-items';
};
/* harmony default export */ __webpack_exports__["default"] = (specialPagesInsertButtonClass);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls_content_visibility_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/content-visibility-controls.js */ "./src/controls/content-visibility-controls.js");
/* harmony import */ var _controls_content_visibility_user_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/content-visibility-user-authentication */ "./src/controls/content-visibility-user-authentication.js");
/* harmony import */ var _controls_special_page_content_visibility_special_page_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/special-page/content-visibility-special-page-controls */ "./src/controls/special-page/content-visibility-special-page-controls.js");






/***/ }),

/***/ "@wordpress/blockEditor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map