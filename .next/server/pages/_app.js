/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ChallengesContext.tsx":
/*!*******************************************!*\
  !*** ./src/context/ChallengesContext.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": () => (/* binding */ ChallengesContext),\n/* harmony export */   \"ChallegesProvider\": () => (/* binding */ ChallegesProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenge_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenge.json */ \"./challenge.json\");\n\n\n\nconst ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallegesProvider({ children  }) {\n    const { 0: level , 1: setLevel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { 0: currentExperience , 1: setCurrentExperience  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: challengeCompleted , 1: setChallengeCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: activeChallengen , 1: setActiveChallenge  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const experienceNextLevel = Math.pow((level + 1) * 4, 2);\n    function levelUp() {\n        setLevel(level + 1);\n    }\n    function startNewChallenge() {\n        const randomChallengeIndex = Math.floor(Math.random() * _challenge_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        const challenge = _challenge_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    }\n    function resetChallenge() {\n        setActiveChallenge(null);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            level,\n            currentExperience,\n            challengeCompleted,\n            levelUp,\n            startNewChallenge,\n            activeChallengen,\n            resetChallenge,\n            experienceNextLevel\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\context\\\\ChallengesContext.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDYjtBQXVCdEMsS0FBSyxDQUFDRyxpQkFBaUIsaUJBQUdILG9EQUFhLENBQUMsQ0FBQyxDQUFDO0FBRTFDLFNBQVNJLGlCQUFpQixDQUFDLENBQUNDLENBQUFBLFFBQVEsRUFBd0IsQ0FBQyxFQUFHLENBQUM7SUFDdEUsS0FBSyxNQUFFQyxLQUFLLE1BQUVDLFFBQVEsTUFBSU4sK0NBQVEsQ0FBQyxDQUFDO0lBQ3BDLEtBQUssTUFBR08saUJBQWlCLE1BQUVDLG9CQUFvQixNQUFLUiwrQ0FBUSxDQUFDLENBQUM7SUFDOUQsS0FBSyxNQUFHUyxrQkFBa0IsTUFBRUMscUJBQXFCLE1BQUtWLCtDQUFRLENBQUMsQ0FBQztJQUVoRSxLQUFLLE1BQUdXLGdCQUFnQixNQUFFQyxrQkFBa0IsTUFBS1osK0NBQVEsQ0FBQyxJQUFJO0lBRTlELEtBQUssQ0FBQ2EsbUJBQW1CLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxFQUFFVixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBRTlDVyxPQUFPLEdBQUcsQ0FBQztRQUNsQlYsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQztJQUNwQixDQUFDO2FBRVFZLGlCQUFpQixHQUFHLENBQUM7UUFDNUIsS0FBSyxDQUFDQyxvQkFBb0IsR0FBR0osSUFBSSxDQUFDSyxLQUFLLENBQUNMLElBQUksQ0FBQ00sTUFBTSxLQUFLbkIsbURBQWlCO1FBQ3pFLEtBQUssQ0FBQ3FCLFNBQVMsR0FBR3JCLDRDQUFVLENBQUNpQixvQkFBb0I7UUFFakROLGtCQUFrQixDQUFDVSxTQUFTO0lBQzlCLENBQUM7YUFFUUMsY0FBYyxHQUFHLENBQUM7UUFDekJYLGtCQUFrQixDQUFDLElBQUk7SUFDekIsQ0FBQztJQUVELE1BQU0sNkVBQ0hWLGlCQUFpQixDQUFDc0IsUUFBUTtRQUMzQkMsS0FBSyxFQUFFLENBQUM7WUFBQ3BCLEtBQUs7WUFDWkUsaUJBQWlCO1lBQ2pCRSxrQkFBa0I7WUFDbEJPLE9BQU87WUFDUEMsaUJBQWlCO1lBQ2pCTixnQkFBZ0I7WUFDaEJZLGNBQWM7WUFDZFYsbUJBQW1CO1FBQ3JCLENBQUM7a0JBQ0VULFFBQVE7Ozs7OztBQUdmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ubHc0LWZvY3VzLW5leHQvLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3g/ZmNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2UuanNvbidcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzIHtcclxuICB0eXBlOiAnYm9keScgfCAnZXllJ1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICBhY3RpdmVDaGFsbGVuZ2VuOiBDaGFsbGVuZ2VzO1xyXG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gIGV4cGVyaWVuY2VOZXh0TGV2ZWw6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlZ2VzUHJvdmlkZXIoe2NoaWxkcmVufTpDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFsgY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlIF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFsgY2hhbGxlbmdlQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQgXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IFsgYWN0aXZlQ2hhbGxlbmdlbiwgc2V0QWN0aXZlQ2hhbGxlbmdlIF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBleHBlcmllbmNlTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKVxyXG5cclxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XVxyXG5cclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcclxuICAgIHZhbHVlPXt7IGxldmVsLFxyXG4gICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgY2hhbGxlbmdlQ29tcGxldGVkLFxyXG4gICAgICBsZXZlbFVwLFxyXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgYWN0aXZlQ2hhbGxlbmdlbixcclxuICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgIGV4cGVyaWVuY2VOZXh0TGV2ZWxcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNoYWxsZW5nZXMiLCJDaGFsbGVuZ2VzQ29udGV4dCIsIkNoYWxsZWdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZUNvbXBsZXRlZCIsInNldENoYWxsZW5nZUNvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZW4iLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlTmV4dExldmVsIiwiTWF0aCIsInBvdyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ \"./src/context/ChallengesContext.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.ChallegesProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUVzRDtTQUUxRUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsTUFBTSw2RUFDSEgseUVBQWlCOzhGQUNmRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL25sdzQtZm9jdXMtbmV4dC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IENoYWxsZWdlc1Byb3ZpZGVyLCBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVnZXNQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DaGFsbGVnZXNQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJuYW1lcyI6WyJDaGFsbGVnZXNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./challenge.json":
/*!************************!*\
  !*** ./challenge.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"type":"body","description":"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.","amount":80},{"type":"body","description":"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.","amount":60},{"type":"body","description":"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.","amount":70},{"type":"body","description":"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.","amount":60},{"type":"body","description":"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.","amount":100},{"type":"body","description":"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.","amount":80},{"type":"body","description":"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.","amount":50},{"type":"body","description":"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.","amount":80},{"type":"eye","description":"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.","amount":90},{"type":"eye","description":"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.","amount":140},{"type":"eye","description":"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.","amount":70},{"type":"body","description":"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.","amount":90}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();