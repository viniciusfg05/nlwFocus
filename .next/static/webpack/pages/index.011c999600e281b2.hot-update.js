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

/***/ "./src/components/ChallegesBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallegesBox.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallegesBox\": function() { return /* binding */ ChallegesBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ \"./src/context/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ChallegesBox.module.css */ \"./src/styles/components/ChallegesBox.module.css\");\n/* harmony import */ var _styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChallegesBox() {\n    _s();\n    var activeChallengen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.ChallengesContext).activeChallengen;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().ChallegesBoxContainer),\n        children: activeChallengen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().ChallegesBoxActive),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: [\n                        \"Ganhe \",\n                        activeChallengen.amount,\n                        \"xp\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"icons/body.svg\",\n                            alt: \"Ganhe 400xp\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Novo desafio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Levente e fa\\xe7a uma caminhada de 3 minutos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().ChallegesFailedButton),\n                            children: \"Falhei\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: (_styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().ChallegesCompleteButton),\n                            children: \"Completei\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_components_ChallegesBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().ChallegesBoxNotActive),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Finalize um ciclo para receber um desafio\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"icons/level-up.svg\",\n                            alt: \"Level up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        \"Avance de level completando os desafios\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJETOS GITHUB\\\\nlwFocus\\\\src\\\\components\\\\ChallegesBox.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_s(ChallegesBox, \"Z0ZooOOYYsqNsoxTq+43/oNS0Kk=\");\n_c = ChallegesBox;\nvar _c;\n$RefreshReg$(_c, \"ChallegesBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFsbGVnZXNCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUM4QjtBQUNDOztBQUUxRCxTQUFTRyxZQUFZLEdBQUcsQ0FBQzs7SUFDOUIsR0FBSyxDQUFHQyxnQkFBZ0IsR0FBS0osaURBQVUsQ0FBQ0MseUVBQWlCLEVBQWpERyxnQkFBZ0I7SUFHeEIsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVKLHlHQUE0QjtrQkFDekNFLGdCQUFnQiwrRUFDZEMsQ0FBRztZQUFDQyxTQUFTLEVBQUVKLHNHQUF5Qjs7NEZBQ3RDTyxDQUFNOzt3QkFBQyxDQUFNO3dCQUFDTCxnQkFBZ0IsQ0FBQ00sTUFBTTt3QkFBQyxDQUFFOzs7Ozs7OzRGQUN4Q0MsQ0FBSTs7b0dBQ0ZDLENBQUc7NEJBQUNDLEdBQUcsRUFBQyxDQUFnQjs0QkFBQ0MsR0FBRyxFQUFDLENBQWE7Ozs7OztvR0FDMUNDLENBQU07c0NBQUMsQ0FBWTs7Ozs7O29HQUNuQkMsQ0FBQztzQ0FBQyxDQUF5Qzs7Ozs7Ozs7Ozs7OzRGQUc3Q0MsQ0FBTTs7b0dBQ0pDLENBQU07NEJBQ1BDLElBQUksRUFBQyxDQUFROzRCQUNiYixTQUFTLEVBQUVKLHlHQUE0QjtzQ0FDdEMsQ0FFRDs7Ozs7O29HQUVDZ0IsQ0FBTTs0QkFDUEMsSUFBSSxFQUFDLENBQVE7NEJBQ2JiLFNBQVMsRUFBRUosMkdBQThCO3NDQUN4QyxDQUVEOzs7Ozs7Ozs7Ozs7Ozs7OzsrRkFNSEcsQ0FBRztZQUFDQyxTQUFTLEVBQUVKLHlHQUE0Qjs7NEZBQzNDYSxDQUFNOzhCQUFDLENBQXlDOzs7Ozs7NEZBQ2hEQyxDQUFDOztvR0FDQ0osQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQW9COzRCQUFDQyxHQUFHLEVBQUMsQ0FBVTs7Ozs7O3dCQUFHLENBRWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUixDQUFDO0dBNUNlWCxZQUFZO0tBQVpBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlZ2VzQm94LnRzeD81MGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NoYWxsZW5nZXNDb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZWdlc0JveC5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZWdlc0JveCgpIHtcclxuICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZW4gfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaGFsbGVnZXNCb3hDb250YWluZXJ9PlxyXG4gICAgICB7YWN0aXZlQ2hhbGxlbmdlbiA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNoYWxsZWdlc0JveEFjdGl2ZX0+XHJcbiAgICAgICAgICA8aGVhZGVyPkdhbmhlIHthY3RpdmVDaGFsbGVuZ2VuLmFtb3VudH14cDwvaGVhZGVyPlxyXG4gICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvYm9keS5zdmdcIiBhbHQ9XCJHYW5oZSA0MDB4cFwiIC8+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+Tm92byBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxwPkxldmVudGUgZSBmYcOnYSB1bWEgY2FtaW5oYWRhIGRlIDMgbWludXRvczwvcD5cclxuICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbGxlZ2VzRmFpbGVkQnV0dG9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRmFsaGVpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkNoYWxsZWdlc0NvbXBsZXRlQnV0dG9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29tcGxldGVpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbGxlZ2VzQm94Tm90QWN0aXZlfT5cclxuICAgICAgICA8c3Ryb25nPkZpbmFsaXplIHVtIGNpY2xvIHBhcmEgcmVjZWJlciB1bSBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIkxldmVsIHVwXCIgLz5cclxuICAgICAgICAgIEF2YW5jZSBkZSBsZXZlbCBjb21wbGV0YW5kbyBvcyBkZXNhZmlvcyBcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0eWxlcyIsIkNoYWxsZWdlc0JveCIsImFjdGl2ZUNoYWxsZW5nZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJDaGFsbGVnZXNCb3hDb250YWluZXIiLCJDaGFsbGVnZXNCb3hBY3RpdmUiLCJoZWFkZXIiLCJhbW91bnQiLCJtYWluIiwiaW1nIiwic3JjIiwiYWx0Iiwic3Ryb25nIiwicCIsImZvb3RlciIsImJ1dHRvbiIsInR5cGUiLCJDaGFsbGVnZXNGYWlsZWRCdXR0b24iLCJDaGFsbGVnZXNDb21wbGV0ZUJ1dHRvbiIsIkNoYWxsZWdlc0JveE5vdEFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ChallegesBox.tsx\n");

/***/ })

});