(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["huts"] = factory();
	else
		root["huts"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n/**\r\n * 数组声明式迭代方法\r\n * @param {Array} array \r\n * @param {Function} callback \r\n * @param {Number} initValue\r\n */\r\nfunction map (array, callback) {\r\n    const arr = []\r\n    // 遍历调用的数组，调用callback得到结果，添加到arr\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        const result = callback(element, index)\r\n        arr.push(result)\r\n    }\r\n    return arr\r\n}\r\n\r\nfunction reduce (array, callback, initValue) {\r\n    let total = initValue\r\n    // 遍历调用的数组，调用callback得到累加的结果数据\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        total = callback(total, element, index)\r\n        \r\n    }\r\n    return total\r\n}\r\n\r\nfunction filter (array, callback) {\r\n    const arr = []\r\n    // 遍历调用的数组，调用callback得到一个布尔值，如果为true，将当前element添加到arr\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        const result = callback(element, index)\r\n        if (result) {\r\n            arr.push(element)\r\n        }\r\n    }\r\n    return arr\r\n}\r\n\r\nfunction find (array, callback) {\r\n    // 遍历调用的数组，调用callback得到一个布尔值，如果为true，将当前返回element\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        const result = callback(element, index)\r\n        if (result) {\r\n            return element\r\n        }\r\n    }\r\n    return undefined\r\n}\r\n\r\nfunction findIndex (array, callback) {\r\n    // 遍历调用的数组，调用callback得到一个布尔值，如果为true，将当前返回element\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        const result = callback(element, index)\r\n        if (result) {\r\n            return index\r\n        }\r\n    }\r\n    return -1\r\n}\r\n\r\nfunction every (array, callback) {\r\n    // 遍历调用的数组，调用callback得到一个布尔值，一false则false\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        const result = callback(element, index)\r\n        if (!result) {\r\n            return false\r\n        }\r\n    }\r\n    return true\r\n}\r\n\r\nfunction some (array, callback) {\r\n    // 遍历调用的数组，调用callback得到一个布尔值，一true则true\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        const result = callback(element, index)\r\n        if (result) {\r\n            return true\r\n        }\r\n    }\r\n    return false\r\n}\n\n//# sourceURL=webpack://huts/./src/array/declares.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply (fn, obj, args) {\r\n    if (obj == null) {obj = window}\r\n    obj.tempFn = fn\r\n    const result = obj.tempFn(...args)\r\n    delete obj.tempFn\r\n    return result\r\n}\n\n//# sourceURL=webpack://huts/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction bind (fn, obj, ...args) {\r\n    // 返回一个新函数\r\n    return (...args2) => {\r\n        // 调用原函数，指定 this 为 obj，参数列表由 args 和 args2 依次组成\r\n        return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn, obj, ...args, ...args2)\r\n    }\r\n}\n\n//# sourceURL=webpack://huts/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return call; });\nfunction call (fn, obj, ...args) {\r\n    // 判断是否为 undefined 或 null\r\n    if (obj == null) {obj = window}\r\n    // 将原函数赋值给临时函数\r\n    obj.tempFn = fn\r\n    // 调用临时函数\r\n    const result = obj.tempFn(...args)\r\n    // 删除临时函数\r\n    delete obj.tempFn\r\n    // 返回结果\r\n    return result\r\n}\n\n//# sourceURL=webpack://huts/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce, debounce2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce2\", function() { return debounce2; });\n/**\r\n * 用来返回防抖函数的工具函数\r\n * @param {Function} callback\r\n * @param {Number} delay \r\n */\r\n\r\n// debounce 方式1\r\nfunction debounce (callback, delay) {\r\n    return function (event) {\r\n        // 如果上次事件还没有真正处理，取消它\r\n        // if (callback.timeoutId) {  // 两种方式均可，但此方式会查找原型链\r\n        if (callback.hasOwnProperty('timeoutId')) {\r\n            // 清除定时器\r\n            clearTimeout(callback.timeoutId)\r\n        }\r\n        // 在发生指定事件后才调用处理事件的回调函数\r\n        // 启动定时器，只是准备真正处理\r\n        callback.timeoutId = setTimeout(() => {\r\n            // 正在处理事件\r\n            callback.call(this, event)\r\n            // 删除准备处理的标记\r\n            delete callback.timeoutId\r\n        }, delay);\r\n    }\r\n}\r\n\r\n// debounce 方式2\r\nfunction debounce2 (callback, delay=500) {\r\n    // timer 是在闭包中的\r\n    let timer=null \r\n    return function(){\r\n        if(timer){clearTimeout(timer)}\r\n        timer=setTimeout(()=>{ \r\n            callback.apply(this, arguments)\r\n            timer=null  //清空定时器\r\n        }, delay)\r\n    }\r\n}\n\n//# sourceURL=webpack://huts/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle, throttle2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle2\", function() { return throttle2; });\n/**\r\n * 用来返回节流函数的工具函数\r\n * @param {Function} callback\r\n * @param {Number} delay \r\n */\r\n\r\n// 实现方式 1\r\nfunction throttle(callback, delay) {\r\n    let pre = 0 // 默认值不是 Data.now() -> 第一次事件立即调用\r\n    return function (event) {  // 节流函数/真正的事件回调函数 this 是发生事件的标签\r\n        console.log('事件 throttle')\r\n        const current = Date.now()\r\n        if(current - pre > delay){ // 只有离上一次调用 callback 的时间差大于 delay\r\n            // 调用真正处理事件的函数，this 是事件源，参数是 event\r\n            callback.call(this, event)\r\n            // 记录此次调用的时间\r\n            pre = current\r\n        }\r\n    }\r\n}\r\n\r\n// 实现方式 2\r\nfunction throttle2 (callback, delay=100) {\r\n    // timer 是在闭包中的\r\n    let timer=null \r\n    return function(){\r\n        console.log('事件 throttle')\r\n        if(timer){return}\r\n        timer=setTimeout(()=>{ \r\n            callback.apply(this, arguments)\r\n            timer=null  //清空定时器\r\n        }, delay)\r\n    }\r\n}\n\n//# sourceURL=webpack://huts/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: call, apply, bind, debounce, debounce2, throttle, throttle2, map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_3__[\"debounce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce2\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_3__[\"debounce2\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle2\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_4__[\"throttle2\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/**\r\n * 入口js\r\n * 向外暴露工具函数\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://huts/./src/main.js?");

/***/ })

/******/ });
});