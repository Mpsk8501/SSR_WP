webpackHotUpdate_N_E("pages/sale",{

/***/ "./helpers/arrSort.js":
/*!****************************!*\
  !*** ./helpers/arrSort.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var arrSort = function arrSort(arr) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('arrSort');
      resolve(arr.reverse());
    }, 1000);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (arrSort);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hcnJTb3J0LmpzIl0sIm5hbWVzIjpbImFyclNvcnQiLCJhcnIiLCJrZXkiLCJ0eXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtEQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQTRCO0FBQUEsTUFBdkJDLEdBQXVCLHVFQUFuQixJQUFtQjtBQUFBLE1BQWRDLElBQWMsdUVBQVQsSUFBUztBQUN6QyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLGNBQVUsQ0FBQyxZQUFJO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUosYUFBTyxDQUFDSixHQUFHLENBQUNTLE9BQUosRUFBRCxDQUFQO0FBQ0QsS0FIUyxFQUdSLElBSFEsQ0FBVjtBQUlELEdBTE0sQ0FBUDtBQU9GLENBUkQ7O0FBVWVWLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGUuN2M1YmEwZWIxNmJiYTE1MjA3M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFyclNvcnQgPSAoYXJyLGtleT1udWxsLHR5cGU9bnVsbCkgPT4ge1xyXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgIGNvbnNvbGUubG9nKCdhcnJTb3J0JylcclxuICAgICAgIHJlc29sdmUoYXJyLnJldmVyc2UoKSlcclxuICAgICB9LDEwMDApXHJcbiAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcnJTb3J0Il0sInNvdXJjZVJvb3QiOiIifQ==