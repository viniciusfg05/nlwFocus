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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallegesProvider\": function() { return /* binding */ ChallegesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenge_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenge.json */ \"./challenge.json\");\n\n\n\nvar _s = $RefreshSig$();\nvar ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallegesProvider(param) {\n    var children = param.children;\n    var levelUp = function levelUp() {\n        setLevel(level + 1);\n    };\n    var startNewChallenge = function startNewChallenge() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenge_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenge_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), level = ref[0], setLevel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentExperience = ref1[0], setCurrentExperience = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), challengeCompleted = ref2[0], setChallengeCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), hasActiveChallengen = ref3[0], setActiveChallenge = ref3[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            level: level,\n            currentExperience: currentExperience,\n            challengeCompleted: challengeCompleted,\n            levelUp: levelUp,\n            startNewChallenge: startNewChallenge\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\context\\\\ChallengesContext.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this));\n}\n_s(ChallegesProvider, \"NZ/82IpwZzb+7XmMJgrvUuUPGD4=\");\n_c = ChallegesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallegesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDYjs7QUFldEMsR0FBSyxDQUFDRyxpQkFBaUIsaUJBQUdILG9EQUFhLENBQUMsQ0FBQyxDQUFDO0FBRTFDLFNBQVNJLGlCQUFpQixDQUFDLEtBQWtDLEVBQUcsQ0FBQztRQUFyQ0MsUUFBUSxHQUFULEtBQWtDLENBQWpDQSxRQUFRO1FBT2hDQyxPQUFPLEdBQWhCLFFBQVEsQ0FBQ0EsT0FBTyxHQUFHLENBQUM7UUFDbEJDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDcEIsQ0FBQztRQUVRQyxpQkFBaUIsR0FBMUIsUUFBUSxDQUFDQSxpQkFBaUIsR0FBRyxDQUFDO1FBQzVCLEdBQUssQ0FBQ0Msb0JBQW9CLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sS0FBS1gsbURBQWlCO1FBQ3pFLEdBQUssQ0FBQ2EsU0FBUyxHQUFHYiw0Q0FBVSxDQUFDUSxvQkFBb0I7UUFFakRNLGtCQUFrQixDQUFDRCxTQUFTO0lBQzlCLENBQUM7O0lBZkQsR0FBSyxDQUFxQmQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBN0JPLEtBQUssR0FBY1AsR0FBVyxLQUF2Qk0sUUFBUSxHQUFJTixHQUFXO0lBQ3JDLEdBQUssQ0FBK0NBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXREZ0IsaUJBQWlCLEdBQTJCaEIsSUFBVyxLQUFwQ2lCLG9CQUFvQixHQUFLakIsSUFBVztJQUMvRCxHQUFLLENBQWlEQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUF4RGtCLGtCQUFrQixHQUE0QmxCLElBQVcsS0FBckNtQixxQkFBcUIsR0FBS25CLElBQVc7SUFFakUsR0FBSyxDQUErQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBekRvQixtQkFBbUIsR0FBeUJwQixJQUFjLEtBQXJDZSxrQkFBa0IsR0FBS2YsSUFBYztJQWFsRSxNQUFNLDZFQUNIRSxpQkFBaUIsQ0FBQ21CLFFBQVE7UUFDM0JDLEtBQUssRUFBRSxDQUFDO1lBQUNmLEtBQUssRUFBTEEsS0FBSztZQUNaUyxpQkFBaUIsRUFBakJBLGlCQUFpQjtZQUNqQkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7WUFDbEJiLE9BQU8sRUFBUEEsT0FBTztZQUNQRyxpQkFBaUIsRUFBakJBLGlCQUFpQjtRQUNuQixDQUFDO2tCQUNFSixRQUFROzs7Ozs7QUFHZixDQUFDO0dBN0JlRCxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3g/ZmNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2UuanNvbidcclxuXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGNoYWxsZW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZWdlc1Byb3ZpZGVyKHtjaGlsZHJlbn06Q2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMgKSB7XHJcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbIGN1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZSBdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbIGNoYWxsZW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlQ29tcGxldGVkIF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbIGhhc0FjdGl2ZUNoYWxsZW5nZW4sIHNldEFjdGl2ZUNoYWxsZW5nZSBdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF1cclxuXHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgdmFsdWU9e3sgbGV2ZWwsXHJcbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICBjaGFsbGVuZ2VDb21wbGV0ZWQsXHJcbiAgICAgIGxldmVsVXAsXHJcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJjaGFsbGVuZ2VzIiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJDaGFsbGVnZXNQcm92aWRlciIsImNoaWxkcmVuIiwibGV2ZWxVcCIsInNldExldmVsIiwibGV2ZWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZUNvbXBsZXRlZCIsInNldENoYWxsZW5nZUNvbXBsZXRlZCIsImhhc0FjdGl2ZUNoYWxsZW5nZW4iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});