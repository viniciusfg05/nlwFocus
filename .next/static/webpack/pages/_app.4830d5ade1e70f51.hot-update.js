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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallegesProvider\": function() { return /* binding */ ChallegesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenge_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenge.json */ \"./challenge.json\");\n\n\n\nvar _s = $RefreshSig$();\nvar ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallegesProvider(param) {\n    var children = param.children;\n    var levelUp = function levelUp() {\n        setLevel(level + 1);\n    };\n    var startNewChallenge = function startNewChallenge() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenge_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenge_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    };\n    var resetChallenge = function resetChallenge() {\n        setActiveChallenge(null);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), level = ref[0], setLevel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentExperience = ref1[0], setCurrentExperience = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), challengeCompleted = ref2[0], setChallengeCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeChallengen = ref3[0], setActiveChallenge = ref3[1];\n    var experienceNextLevel = Math.pow((level + 1) * 4, 2);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            level: level,\n            currentExperience: currentExperience,\n            challengeCompleted: challengeCompleted,\n            levelUp: levelUp,\n            startNewChallenge: startNewChallenge,\n            activeChallengen: activeChallengen,\n            resetChallenge: resetChallenge\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\context\\\\ChallengesContext.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this));\n}\n_s(ChallegesProvider, \"NZ/82IpwZzb+7XmMJgrvUuUPGD4=\");\n_c = ChallegesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallegesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDYjs7QUFzQnRDLEdBQUssQ0FBQ0csaUJBQWlCLGlCQUFHSCxvREFBYSxDQUFDLENBQUMsQ0FBQztBQUUxQyxTQUFTSSxpQkFBaUIsQ0FBQyxLQUFrQyxFQUFHLENBQUM7UUFBckNDLFFBQVEsR0FBVCxLQUFrQyxDQUFqQ0EsUUFBUTtRQVNoQ0MsT0FBTyxHQUFoQixRQUFRLENBQUNBLE9BQU8sR0FBRyxDQUFDO1FBQ2xCQyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ3BCLENBQUM7UUFFUUMsaUJBQWlCLEdBQTFCLFFBQVEsQ0FBQ0EsaUJBQWlCLEdBQUcsQ0FBQztRQUM1QixHQUFLLENBQUNDLG9CQUFvQixHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEtBQUtYLG1EQUFpQjtRQUN6RSxHQUFLLENBQUNhLFNBQVMsR0FBR2IsNENBQVUsQ0FBQ1Esb0JBQW9CO1FBRWpETSxrQkFBa0IsQ0FBQ0QsU0FBUztJQUM5QixDQUFDO1FBRVFFLGNBQWMsR0FBdkIsUUFBUSxDQUFDQSxjQUFjLEdBQUcsQ0FBQztRQUN6QkQsa0JBQWtCLENBQUMsSUFBSTtJQUN6QixDQUFDOztJQXJCRCxHQUFLLENBQXFCZixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Qk8sS0FBSyxHQUFjUCxHQUFXLEtBQXZCTSxRQUFRLEdBQUlOLEdBQVc7SUFDckMsR0FBSyxDQUErQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBdERpQixpQkFBaUIsR0FBMkJqQixJQUFXLEtBQXBDa0Isb0JBQW9CLEdBQUtsQixJQUFXO0lBQy9ELEdBQUssQ0FBaURBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXhEbUIsa0JBQWtCLEdBQTRCbkIsSUFBVyxLQUFyQ29CLHFCQUFxQixHQUFLcEIsSUFBVztJQUVqRSxHQUFLLENBQTRDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0RHFCLGdCQUFnQixHQUF5QnJCLElBQWMsS0FBckNlLGtCQUFrQixHQUFLZixJQUFjO0lBRS9ELEdBQUssQ0FBQ3NCLG1CQUFtQixHQUFHWixJQUFJLENBQUNhLEdBQUcsRUFBRWhCLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFpQnZELE1BQU0sNkVBQ0hMLGlCQUFpQixDQUFDc0IsUUFBUTtRQUMzQkMsS0FBSyxFQUFFLENBQUM7WUFBQ2xCLEtBQUssRUFBTEEsS0FBSztZQUNaVSxpQkFBaUIsRUFBakJBLGlCQUFpQjtZQUNqQkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7WUFDbEJkLE9BQU8sRUFBUEEsT0FBTztZQUNQRyxpQkFBaUIsRUFBakJBLGlCQUFpQjtZQUNqQmEsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7WUFDaEJMLGNBQWMsRUFBZEEsY0FBYztRQUNoQixDQUFDO2tCQUNFWixRQUFROzs7Ozs7QUFHZixDQUFDO0dBckNlRCxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3g/ZmNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2UuanNvbidcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzIHtcclxuICB0eXBlOiAnYm9keScgfCAnZXllJ1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICBhY3RpdmVDaGFsbGVuZ2VuOiBDaGFsbGVuZ2VzO1xyXG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVnZXNQcm92aWRlcih7Y2hpbGRyZW59OkNoYWxsZW5nZXNQcm92aWRlclByb3BzICkge1xyXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgWyBjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2UgXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgWyBjaGFsbGVuZ2VDb21wbGV0ZWQsIHNldENoYWxsZW5nZUNvbXBsZXRlZCBdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgWyBhY3RpdmVDaGFsbGVuZ2VuLCBzZXRBY3RpdmVDaGFsbGVuZ2UgXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VOZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpXHJcblxyXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdXHJcblxyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgdmFsdWU9e3sgbGV2ZWwsXHJcbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICBjaGFsbGVuZ2VDb21wbGV0ZWQsXHJcbiAgICAgIGxldmVsVXAsXHJcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICBhY3RpdmVDaGFsbGVuZ2VuLFxyXG4gICAgICByZXNldENoYWxsZW5nZVxyXG4gICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiY2hhbGxlbmdlcyIsIkNoYWxsZW5nZXNDb250ZXh0IiwiQ2hhbGxlZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxldmVsVXAiLCJzZXRMZXZlbCIsImxldmVsIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZUNvbXBsZXRlZCIsInNldENoYWxsZW5nZUNvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZW4iLCJleHBlcmllbmNlTmV4dExldmVsIiwicG93IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});