/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Animal.js":
/*!***********************!*\
  !*** ./src/Animal.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Animal\": () => (/* binding */ Animal)\n/* harmony export */ });\nclass Animal {\n\tconstructor(type, strength) {\n\t\tthis.type = type;\n\t\tthis.strength = strength;\n\t}\n}\n\n\n//# sourceURL=webpack://webpack/./src/Animal.js?");

/***/ }),

/***/ "./src/Constant.js":
/*!*************************!*\
  !*** ./src/Constant.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LION\": () => (/* binding */ LION),\n/* harmony export */   \"RABBIT\": () => (/* binding */ RABBIT)\n/* harmony export */ });\nconst LION = \"Lion\";\nconst RABBIT = \"Rabbit\";\n\n\n//# sourceURL=webpack://webpack/./src/Constant.js?");

/***/ }),

/***/ "./src/Lion.js":
/*!*********************!*\
  !*** ./src/Lion.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lion\": () => (/* binding */ Lion)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Animal.js\");\n/* harmony import */ var _Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constant */ \"./src/Constant.js\");\n\n\n\nclass Lion extends _Animal__WEBPACK_IMPORTED_MODULE_0__.Animal {\n  constructor() {\n    super(_Constant__WEBPACK_IMPORTED_MODULE_1__.LION, 1000);\n  }\n}\n\n\n//# sourceURL=webpack://webpack/./src/Lion.js?");

/***/ }),

/***/ "./src/Rabbit.js":
/*!***********************!*\
  !*** ./src/Rabbit.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rabbit\": () => (/* binding */ Rabbit)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Animal.js\");\n/* harmony import */ var _Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constant */ \"./src/Constant.js\");\n\n\n\nclass Rabbit extends _Animal__WEBPACK_IMPORTED_MODULE_0__.Animal {\n  constructor() {\n    super(_Constant__WEBPACK_IMPORTED_MODULE_1__.RABBIT, 100);\n  }\n}\n\n\n//# sourceURL=webpack://webpack/./src/Rabbit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Lion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lion */ \"./src/Lion.js\");\n/* harmony import */ var _Rabbit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rabbit */ \"./src/Rabbit.js\");\n\n\n\nconst lion = new _Lion__WEBPACK_IMPORTED_MODULE_0__.Lion();\nconst rabbit1 = new _Rabbit__WEBPACK_IMPORTED_MODULE_1__.Rabbit();\nconst rabbit2 = new _Rabbit__WEBPACK_IMPORTED_MODULE_1__.Rabbit();\nconst test = () => {\n\tif (lion.strength > rabbit1.strength) {\n\t\treturn \"Lion is stronger than rabbit\";\n\t} else {\n\t\treturn \"Rabbit is stronger than lion\";\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;