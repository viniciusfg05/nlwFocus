"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ExperinceBar.tsx":
/*!*****************************************!*\
  !*** ./src/components/ExperinceBar.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExperienceBar\": function() { return /* binding */ ExperienceBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ \"./src/context/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ \"./src/styles/components/ExperienceBar.module.css\");\n/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ExperienceBar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.ChallengesContext), currentExperience = ref.currentExperience, experienceNextLevel = ref.experienceNextLevel;\n    var porcentalNextLevel = Math.round(currentExperience * 100 / experienceNextLevel);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().experienceBar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"0 xp\"\n            }, void 0, false, {\n                fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ExperinceBar.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"\".concat(currentExperience)\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ExperinceBar.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentExperience),\n                        style: {\n                            left: \"\".concat(porcentalNextLevel)\n                        },\n                        children: [\n                            currentExperience,\n                            \" xp\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ExperinceBar.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ExperinceBar.tsx\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    experienceNextLevel,\n                    \" xp\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ExperinceBar.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ExperinceBar.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this));\n}\n_s(ExperienceBar, \"hyslqjLypLEunCZz/Lu9GeUa2Bo=\");\n_c = ExperienceBar;\nvar _c;\n$RefreshReg$(_c, \"ExperienceBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmluY2VCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUM4QjtBQUNFOztBQUUzRCxTQUFTRyxhQUFhLEdBQUcsQ0FBQzs7SUFDN0IsR0FBSyxDQUE4Q0gsR0FBNkIsR0FBN0JBLGlEQUFVLENBQUNDLHlFQUFpQixHQUF2RUcsaUJBQWlCLEdBQTBCSixHQUE2QixDQUF4RUksaUJBQWlCLEVBQUVDLG1CQUFtQixHQUFLTCxHQUE2QixDQUFyREssbUJBQW1CO0lBRTlDLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFFSixpQkFBaUIsR0FBRyxHQUFHLEdBQUlDLG1CQUFtQjtJQUVyRixNQUFNLDZFQUNESSxDQUFNO1FBQUNDLFNBQVMsRUFBRVIsa0dBQW9COzt3RkFDbENVLENBQUk7MEJBQUMsQ0FBSTs7Ozs7O3dGQUNMQyxDQUFHOztnR0FDQ0EsQ0FBRzt3QkFBQ0MsS0FBSyxFQUFFLENBQUM7NEJBQUNDLEtBQUssRUFBRyxHQUFvQixPQUFsQlgsaUJBQWlCO3dCQUFFLENBQUM7Ozs7OztnR0FFM0NRLENBQUk7d0JBQUNGLFNBQVMsRUFBRVIsc0dBQXdCO3dCQUFFWSxLQUFLLEVBQUUsQ0FBQzs0QkFBQ0UsSUFBSSxFQUFHLEdBQXFCLE9BQW5CVixrQkFBa0I7d0JBQUUsQ0FBQzs7NEJBQUdGLGlCQUFpQjs0QkFBQyxDQUFHOzs7Ozs7Ozs7Ozs7O3dGQUVqSFEsQ0FBSTs7b0JBQUVQLG1CQUFtQjtvQkFBQyxDQUFHOzs7Ozs7Ozs7Ozs7O0FBRzFDLENBQUM7R0FoQmVGLGFBQWE7S0FBYkEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBlcmluY2VCYXIudHN4P2ZjOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4cGVyaWVuY2VCYXIoKSB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRFeHBlcmllbmNlLCBleHBlcmllbmNlTmV4dExldmVsIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IHBvcmNlbnRhbE5leHRMZXZlbCA9IE1hdGgucm91bmQoKGN1cnJlbnRFeHBlcmllbmNlICogMTAwKSAvIGV4cGVyaWVuY2VOZXh0TGV2ZWwpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUJhcn0+XHJcbiAgICAgICAgICAgIDxzcGFuPjAgeHA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke2N1cnJlbnRFeHBlcmllbmNlfWB9fS8+IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfSBzdHlsZT17eyBsZWZ0OiBgJHtwb3JjZW50YWxOZXh0TGV2ZWx9YH19PntjdXJyZW50RXhwZXJpZW5jZX0geHA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+e2V4cGVyaWVuY2VOZXh0TGV2ZWx9IHhwPC9zcGFuPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0eWxlcyIsIkV4cGVyaWVuY2VCYXIiLCJjdXJyZW50RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VOZXh0TGV2ZWwiLCJwb3JjZW50YWxOZXh0TGV2ZWwiLCJNYXRoIiwicm91bmQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJleHBlcmllbmNlQmFyIiwic3BhbiIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ExperinceBar.tsx\n");

/***/ })

});