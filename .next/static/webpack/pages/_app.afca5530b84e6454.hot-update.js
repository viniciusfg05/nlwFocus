"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/ChallengesContext.tsx":
/*!*******************************************!*\
  !*** ./src/context/ChallengesContext.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallegesProvider\": function() { return /* binding */ ChallegesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenge_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenge.json */ \"./challenge.json\");\n\n\n\nvar _s = $RefreshSig$();\nvar ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallegesProvider(param) {\n    var children = param.children;\n    var levelUp = function levelUp() {\n        setLevel(level + 1);\n    };\n    var startNewChallenge = function startNewChallenge() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenge_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenge_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    };\n    var resetChallenge = function resetChallenge() {\n        setActiveChallenge(null);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), level = ref[0], setLevel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentExperience = ref1[0], setCurrentExperience = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), challengeCompleted = ref2[0], setChallengeCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeChallengen = ref3[0], setActiveChallenge = ref3[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            level: level,\n            currentExperience: currentExperience,\n            challengeCompleted: challengeCompleted,\n            levelUp: levelUp,\n            startNewChallenge: startNewChallenge,\n            activeChallengen: activeChallengen,\n            resetChallenge: resetChallenge\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\context\\\\ChallengesContext.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n}\n_s(ChallegesProvider, \"NZ/82IpwZzb+7XmMJgrvUuUPGD4=\");\n_c = ChallegesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallegesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDYjs7QUFzQnRDLEdBQUssQ0FBQ0csaUJBQWlCLGlCQUFHSCxvREFBYSxDQUFDLENBQUMsQ0FBQztBQUUxQyxTQUFTSSxpQkFBaUIsQ0FBQyxLQUFrQyxFQUFHLENBQUM7UUFBckNDLFFBQVEsR0FBVCxLQUFrQyxDQUFqQ0EsUUFBUTtRQU9oQ0MsT0FBTyxHQUFoQixRQUFRLENBQUNBLE9BQU8sR0FBRyxDQUFDO1FBQ2xCQyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ3BCLENBQUM7UUFFUUMsaUJBQWlCLEdBQTFCLFFBQVEsQ0FBQ0EsaUJBQWlCLEdBQUcsQ0FBQztRQUM1QixHQUFLLENBQUNDLG9CQUFvQixHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEtBQUtYLG1EQUFpQjtRQUN6RSxHQUFLLENBQUNhLFNBQVMsR0FBR2IsNENBQVUsQ0FBQ1Esb0JBQW9CO1FBRWpETSxrQkFBa0IsQ0FBQ0QsU0FBUztJQUM5QixDQUFDO1FBRVFFLGNBQWMsR0FBdkIsUUFBUSxDQUFDQSxjQUFjLEdBQUcsQ0FBQztRQUN6QkQsa0JBQWtCLENBQUMsSUFBSTtJQUN6QixDQUFDOztJQW5CRCxHQUFLLENBQXFCZixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Qk8sS0FBSyxHQUFjUCxHQUFXLEtBQXZCTSxRQUFRLEdBQUlOLEdBQVc7SUFDckMsR0FBSyxDQUErQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBdERpQixpQkFBaUIsR0FBMkJqQixJQUFXLEtBQXBDa0Isb0JBQW9CLEdBQUtsQixJQUFXO0lBQy9ELEdBQUssQ0FBaURBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXhEbUIsa0JBQWtCLEdBQTRCbkIsSUFBVyxLQUFyQ29CLHFCQUFxQixHQUFLcEIsSUFBVztJQUVqRSxHQUFLLENBQTRDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0RHFCLGdCQUFnQixHQUF5QnJCLElBQWMsS0FBckNlLGtCQUFrQixHQUFLZixJQUFjO0lBaUIvRCxNQUFNLDZFQUNIRSxpQkFBaUIsQ0FBQ29CLFFBQVE7UUFDM0JDLEtBQUssRUFBRSxDQUFDO1lBQUNoQixLQUFLLEVBQUxBLEtBQUs7WUFDWlUsaUJBQWlCLEVBQWpCQSxpQkFBaUI7WUFDakJFLGtCQUFrQixFQUFsQkEsa0JBQWtCO1lBQ2xCZCxPQUFPLEVBQVBBLE9BQU87WUFDUEcsaUJBQWlCLEVBQWpCQSxpQkFBaUI7WUFDakJhLGdCQUFnQixFQUFoQkEsZ0JBQWdCO1lBQ2hCTCxjQUFjLEVBQWRBLGNBQWM7UUFDaEIsQ0FBQztrQkFDRVosUUFBUTs7Ozs7O0FBR2YsQ0FBQztHQW5DZUQsaUJBQWlCO0tBQWpCQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2ZjYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlLmpzb24nXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlcyB7XHJcbiAgdHlwZTogJ2JvZHknIHwgJ2V5ZSdcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGNoYWxsZW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgYWN0aXZlQ2hhbGxlbmdlbjogQ2hhbGxlbmdlcztcclxuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlZ2VzUHJvdmlkZXIoe2NoaWxkcmVufTpDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFsgY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlIF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFsgY2hhbGxlbmdlQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQgXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IFsgYWN0aXZlQ2hhbGxlbmdlbiwgc2V0QWN0aXZlQ2hhbGxlbmdlIF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XVxyXG5cclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcclxuICAgIHZhbHVlPXt7IGxldmVsLFxyXG4gICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgY2hhbGxlbmdlQ29tcGxldGVkLFxyXG4gICAgICBsZXZlbFVwLFxyXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgYWN0aXZlQ2hhbGxlbmdlbixcclxuICAgICAgcmVzZXRDaGFsbGVuZ2VcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNoYWxsZW5nZXMiLCJDaGFsbGVuZ2VzQ29udGV4dCIsIkNoYWxsZWdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbFVwIiwic2V0TGV2ZWwiLCJsZXZlbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2VuIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});