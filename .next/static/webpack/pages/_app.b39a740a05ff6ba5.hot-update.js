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

/***/ "./lib/store.js":
/*!**********************!*\
  !*** ./lib/store.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSiteInfo: function() { return /* binding */ useSiteInfo; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n\n\nconst useSiteInfo = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((set)=>({\n        theme: \"#FE6D3B\",\n        username: null,\n        logo: null,\n        setTheme: (theme)=>set({\n                theme\n            }),\n        setUsername: (username)=>set({\n                username\n            }),\n        setLogo: (logo)=>set({\n                logo\n            })\n    }), {\n    name: \"theme\"\n}, {\n    name: \"username\"\n}, {\n    name: \"logo\"\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBQ1k7QUFFdEMsTUFBTUUsY0FBY0YsK0NBQU1BLENBQy9CQywyREFBT0EsQ0FDTCxDQUFDRSxNQUFTO1FBQ1JDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLFVBQVUsQ0FBQ0gsUUFBVUQsSUFBSTtnQkFBRUM7WUFBTTtRQUNqQ0ksYUFBYSxDQUFDSCxXQUFhRixJQUFJO2dCQUFFRTtZQUFTO1FBQzFDSSxTQUFTLENBQUNILE9BQVNILElBQUk7Z0JBQUVHO1lBQUs7SUFDaEMsSUFDQTtJQUNFSSxNQUFNO0FBQ1IsR0FDQTtJQUNFQSxNQUFNO0FBQ1IsR0FDQTtJQUNFQSxNQUFNO0FBQ1IsSUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvc3RvcmUuanM/MDRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0IH0gZnJvbSBcInp1c3RhbmQvbWlkZGxld2FyZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNpdGVJbmZvID0gY3JlYXRlKFxyXG4gIHBlcnNpc3QoXHJcbiAgICAoc2V0KSA9PiAoe1xyXG4gICAgICB0aGVtZTogXCIjRkU2RDNCXCIsXHJcbiAgICAgIHVzZXJuYW1lOiBudWxsLFxyXG4gICAgICBsb2dvOiBudWxsLFxyXG4gICAgICBzZXRUaGVtZTogKHRoZW1lKSA9PiBzZXQoeyB0aGVtZSB9KSxcclxuICAgICAgc2V0VXNlcm5hbWU6ICh1c2VybmFtZSkgPT4gc2V0KHsgdXNlcm5hbWUgfSksXHJcbiAgICAgIHNldExvZ286IChsb2dvKSA9PiBzZXQoeyBsb2dvIH0pLFxyXG4gICAgfSksXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwidGhlbWVcIiwgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInVzZXJuYW1lXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImxvZ29cIixcclxuICAgIH1cclxuICApXHJcbik7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJwZXJzaXN0IiwidXNlU2l0ZUluZm8iLCJzZXQiLCJ0aGVtZSIsInVzZXJuYW1lIiwibG9nbyIsInNldFRoZW1lIiwic2V0VXNlcm5hbWUiLCJzZXRMb2dvIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/store.js\n"));

/***/ })

});