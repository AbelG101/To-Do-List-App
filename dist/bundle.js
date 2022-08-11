/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: calc(15px + 0.390625vw);\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 90%;\\r\\n  box-shadow: rgba(0, 0, 0, 0.28) 0 3px 8px;\\r\\n}\\r\\n\\r\\n.container > .item {\\r\\n  border-bottom: 0.5px solid #d3d3d3;\\r\\n}\\r\\n\\r\\n.container .item:nth-child(1) {\\r\\n  padding: 10px 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.container .item:nth-child(2) {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.item .sync-btn {\\r\\n  font-size: 0.85rem;\\r\\n  color: #a1a1a1;\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s ease-in;\\r\\n}\\r\\n\\r\\n.item .sync-btn:hover {\\r\\n  color: #595959;\\r\\n}\\r\\n\\r\\n.item .task-adder-input {\\r\\n  color: #404040;\\r\\n  padding: 8px 0 8px 20px;\\r\\n  font-size: 0.85rem;\\r\\n  width: 100%;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.task-content input {\\r\\n  width: auto;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.item .task-adder-input::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.add-task-btn {\\r\\n  font-size: 0.85rem;\\r\\n  margin-right: 20px;\\r\\n  color: #d3d3d3;\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.add-task-btn:hover {\\r\\n  color: #595959;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 20px;\\r\\n  align-items: center;\\r\\n  border-bottom: 0.5px solid #d3d3d3;\\r\\n}\\r\\n\\r\\n.task:last-child {\\r\\n  border-bottom: 0;\\r\\n}\\r\\n\\r\\n.task .dots-icon,\\r\\n.trash-icon {\\r\\n  color: #a1a1a1;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.task .trash-icon {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.dots-icon.active {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.trash-icon.active {\\r\\n  display: block;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.trash-icon.active:hover {\\r\\n  color: #595959;\\r\\n  transition-duration: 0.2s;\\r\\n}\\r\\n\\r\\n.tasks-container .task-content {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.task-content .task-value {\\r\\n  font-size: 0.85rem;\\r\\n  width: 100%;\\r\\n  padding: 10px 0;\\r\\n  outline: none;\\r\\n  cursor: text;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\ninput:checked~.task-value {\\r\\n  text-decoration: line-through;\\r\\n  opacity: 0.4;\\r\\n}\\r\\n\\r\\n.task.active {\\r\\n  background-color: #ffc;\\r\\n  transition: 0.2s ease-in;\\r\\n}\\r\\n\\r\\n.item .clear-all-btn {\\r\\n  width: 100%;\\r\\n  padding: 8px 12px;\\r\\n  font-size: 0.8rem;\\r\\n  border-radius: 0;\\r\\n  border: none;\\r\\n  color: #595959;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  .container {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/JS/statusUpdates.js":
/*!*********************************!*\
  !*** ./src/JS/statusUpdates.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskOperations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskOperations.js */ \"./src/JS/taskOperations.js\");\n\r\n\r\nconst updateTaskStatus = (index) => {\r\n  if (_taskOperations_js__WEBPACK_IMPORTED_MODULE_0__.tasksList[index].completed === true) {\r\n    _taskOperations_js__WEBPACK_IMPORTED_MODULE_0__.tasksList[index].completed = false;\r\n  } else {\r\n    _taskOperations_js__WEBPACK_IMPORTED_MODULE_0__.tasksList[index].completed = true;\r\n  }\r\n  localStorage.setItem('tasks: ', JSON.stringify(_taskOperations_js__WEBPACK_IMPORTED_MODULE_0__.tasksList));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskStatus);\n\n//# sourceURL=webpack://to-do-list-app/./src/JS/statusUpdates.js?");

/***/ }),

/***/ "./src/JS/taskOperations.js":
/*!**********************************!*\
  !*** ./src/JS/taskOperations.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToArray\": () => (/* binding */ addTaskToArray),\n/* harmony export */   \"clearCompletedTasks\": () => (/* binding */ clearCompletedTasks),\n/* harmony export */   \"highlightTask\": () => (/* binding */ highlightTask),\n/* harmony export */   \"loadTasksFromLS\": () => (/* binding */ loadTasksFromLS),\n/* harmony export */   \"modifyTask\": () => (/* binding */ modifyTask),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"tasksList\": () => (/* binding */ tasksList)\n/* harmony export */ });\nlet tasksList = [];\r\n\r\nconst addOnLocalStorage = (task) => {\r\n  tasksList = JSON.parse(localStorage.getItem('tasks: '));\r\n  if (tasksList == null) tasksList = [];\r\n  tasksList.push(task);\r\n  localStorage.setItem('tasks: ', JSON.stringify(tasksList));\r\n};\r\n\r\nconst addTaskToPage = (taskToBeDone) => {\r\n  const tasksContainerElt = document.querySelector('.tasks-container');\r\n  const taskDiv = document.createElement('div');\r\n  const taskContentDiv = document.createElement('div');\r\n  const taskValue = document.createElement('input');\r\n  const checkboxElt = document.createElement('input');\r\n  const trashIcon = document.createElement('i');\r\n  const dotsIcon = document.createElement('i');\r\n  taskDiv.setAttribute('class', 'task');\r\n  taskContentDiv.setAttribute('class', 'task-content');\r\n  taskValue.setAttribute('class', 'task-value');\r\n  taskValue.setAttribute('type', 'text');\r\n  checkboxElt.setAttribute('type', 'checkbox');\r\n  trashIcon.setAttribute('class', 'fa fa-trash trash-icon');\r\n  dotsIcon.setAttribute('class', 'fa fa-ellipsis-v dots-icon');\r\n  checkboxElt.checked = taskToBeDone.completed;\r\n  taskValue.value = taskToBeDone.description;\r\n  taskContentDiv.appendChild(checkboxElt);\r\n  taskContentDiv.appendChild(taskValue);\r\n  taskDiv.appendChild(taskContentDiv);\r\n  taskDiv.appendChild(trashIcon);\r\n  taskDiv.appendChild(dotsIcon);\r\n  tasksContainerElt.appendChild(taskDiv);\r\n};\r\n\r\nconst loadTasksFromLS = () => {\r\n  tasksList = JSON.parse(localStorage.getItem('tasks: '));\r\n  if (tasksList !== null) {\r\n    tasksList.forEach((taskToBeDone) => {\r\n      addTaskToPage(taskToBeDone);\r\n    });\r\n  } else {\r\n    tasksList = [];\r\n  }\r\n};\r\n\r\nconst addTaskToArray = (taskToBeDone) => {\r\n  const task = {\r\n    description: String,\r\n    completed: false,\r\n    index: Number,\r\n  };\r\n  task.description = taskToBeDone;\r\n  task.index = tasksList.length;\r\n  addOnLocalStorage(task);\r\n  addTaskToPage(task);\r\n};\r\n\r\nconst removeTask = (index) => {\r\n  const tasksElt = document.querySelectorAll('.task');\r\n  tasksList.splice(index, 1);\r\n  tasksElt[index].remove();\r\n  for (let i = tasksList.length - 1; i >= 0; i -= 1) {\r\n    tasksList[i].index = i;\r\n  }\r\n  localStorage.setItem('tasks: ', JSON.stringify(tasksList));\r\n};\r\n\r\nconst modifyTask = (taskToBeDone, index) => {\r\n  tasksList[index].description = taskToBeDone;\r\n  localStorage.setItem('tasks: ', JSON.stringify(tasksList));\r\n};\r\n\r\nconst highlightTask = (index) => {\r\n  const moveBtns = document.querySelectorAll('.fa.fa-ellipsis-v.dots-icon');\r\n  const deleteBtns = document.querySelectorAll('.fa.fa-trash.trash-icon');\r\n  const activeTasks = document.querySelectorAll('.task.active');\r\n  const tasksElt = document.querySelectorAll('.task');\r\n  activeTasks.forEach((activeTask) => {\r\n    activeTask.classList.remove('active');\r\n  });\r\n  moveBtns.forEach((btn, index) => {\r\n    btn.classList.remove('active');\r\n    deleteBtns[index].classList.remove('active');\r\n  });\r\n\r\n  tasksElt[index].classList.toggle('active');\r\n  moveBtns[index].classList.toggle('active');\r\n  deleteBtns[index].classList.toggle('active');\r\n};\r\n\r\nconst  clearCompletedTasks = () => {\r\n  const tasksElt = document.querySelectorAll('.task');\r\n  tasksList = tasksList.filter((task, index) => {\r\n    if (task.completed) {\r\n      tasksElt[index].remove();\r\n\r\n    } else {\r\n      return task;\r\n    }\r\n  });\r\n  for (let i = tasksList.length - 1; i >= 0; i -= 1) {\r\n    tasksList[i].index = i;\r\n  }\r\n  localStorage.setItem('tasks: ', JSON.stringify(tasksList));\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/JS/taskOperations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/taskOperations.js */ \"./src/JS/taskOperations.js\");\n/* harmony import */ var _JS_statusUpdates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/statusUpdates.js */ \"./src/JS/statusUpdates.js\");\n\r\n\r\n\r\n\r\nconst onPageLoad = () => {\r\n  (0,_JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__.loadTasksFromLS)();\r\n};\r\nwindow.onload = onPageLoad();\r\n\r\nconst addTaskInput = document.querySelector('.task-adder-input');\r\nconst addTaskBtn = document.querySelector('.add-task-btn');\r\nconst clearAllBtn = document.querySelector('.clear-all-btn');\r\naddTaskInput.addEventListener('keyup', (event) => {\r\n  if (event.key === 'Enter') {\r\n    const taskValue = addTaskInput.value.trim();\r\n    if (taskValue !== '') {\r\n      (0,_JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToArray)(taskValue);\r\n      addTaskInput.value = '';\r\n    }\r\n  }\r\n});\r\naddTaskBtn.addEventListener('click', () => {\r\n  const taskValue = addTaskInput.value.trim();\r\n  if (taskValue !== '') {\r\n    (0,_JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToArray)(taskValue);\r\n    addTaskInput.value = '';\r\n  }\r\n});\r\ndocument.addEventListener('click', (e) => {\r\n  if (!(e.target.matches('.task-value') || e.target.matches('.trash-icon'))) {\r\n    return;\r\n  }\r\n  if (e.target.matches('.task-value')) {\r\n    const tasks = document.querySelectorAll('.task-value');\r\n    tasks.forEach((task, index) => {\r\n      if (e.target === task) {\r\n        (0,_JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__.highlightTask)(index);\r\n      }\r\n    });\r\n  } else {\r\n    const deleteBtn = document.querySelectorAll('.trash-icon');\r\n    deleteBtn.forEach((btn, index) => {\r\n      if (e.target === btn) {\r\n        (0,_JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__.removeTask)(index);\r\n      }\r\n    });\r\n  }\r\n});\r\ndocument.addEventListener('change', (e) => {\r\n  if (!(e.target.matches('.task-value') || e.target.matches('input[type=checkbox]') )) {\r\n    return;\r\n  }\r\n  if (e.target.matches('.task-value')) {\r\n    const tasks = document.querySelectorAll('.task-value');\r\n    tasks.forEach((task, index) => {\r\n      if (e.target === task) {\r\n        (0,_JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__.modifyTask)(task.value, index);\r\n      }\r\n    });\r\n  } else {\r\n    const checkBoxes = document.querySelectorAll('input[type=checkbox]');\r\n    checkBoxes.forEach((checkBox, index) => {\r\n      if (e.target == checkBox) {\r\n        (0,_JS_statusUpdates_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(index);\r\n      }\r\n    });\r\n  }\r\n});\r\nclearAllBtn.addEventListener('click', () => {\r\n  (0,_JS_taskOperations_js__WEBPACK_IMPORTED_MODULE_1__.clearCompletedTasks)();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;