webpackHotUpdate_N_E("pages/sale",{

/***/ "./components/SaleComponent/SaleComponent.js":
/*!***************************************************!*\
  !*** ./components/SaleComponent/SaleComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saleComponent.module.scss */ "./components/SaleComponent/saleComponent.module.scss");
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_arrSort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/arrSort */ "./helpers/arrSort.js");



var _this = undefined,
    _jsxFileName = "H:\\forIT\\SSR_WP\\components\\SaleComponent\\SaleComponent.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var SaleComponent = function SaleComponent(_ref) {
  _s();

  var motors = _ref.motors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(motors),
      table = _useState[0],
      setTable = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      sortBlock = _useState2[0],
      setSortBlock = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    num: 0,
    power: 0,
    capacity: 0,
    type: 0,
    speed: 0,
    price: 0
  }),
      sortState = _useState3[0],
      setSortState = _useState3[1];
  /*pagination*/


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      pagPage = _useState4[0],
      setPagPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(25),
      pagValue = _useState5[0],
      setPagValue = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Math.ceil(motors.length / pagValue)),
      pagPages = _useState6[0],
      setPagPages = _useState6[1];

  var pagNum = function pagNum() {
    var arr = [];

    for (var i = 1; i <= pagPages; i++) {
      var btnClass = '';

      if (i === pagPage) {
        btnClass = 'btn-pagination-active';
      } else {
        btnClass = 'btn-pagination';
      }

      arr.push(__jsx("button", {
        key: i,
        className: btnClass,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }, i));
    }

    return arr;
  };

  var paginationHandler = function paginationHandler(type) {
    if (type === '-') {
      if (pagPage >= 2) {
        setPagPage(pagPage - 1);
      } else setPagPage(1);
    } else if (type === '+') {
      if (pagPage <= pagPages - 1) {
        setPagPage(pagPage + 1);
      } else setPagPage(pagPages);
    }
  };
  /*end pagination */


  var sortHandler = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!sortBlock) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              value = e.target.value;
              console.log(value);
              setSortBlock(true);
              _context.next = 7;
              return Object(_helpers_arrSort__WEBPACK_IMPORTED_MODULE_4__["default"])(table);

            case 7:
              setSortBlock(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sortHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.saleComponent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "\u0426\u0435\u043D\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u044B \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u041D\u0414\u0421 \u043D\u0430 11.07.18 \u0433."), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("li", {
    value: 0,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "\u041D\u043E\u043C\u0435\u0440"), __jsx("li", {
    value: 5,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "\u043A\u0412\u0442"), __jsx("li", {
    value: 3,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C"), __jsx("li", {
    value: 4,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435/\u0422\u0438\u043F"), __jsx("li", {
    value: 6,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "\u043E\u0431/\u043C\u0438\u043D"), __jsx("li", {
    value: 8,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "\u0426\u0435\u043D\u0430,\u0420")), table.map(function (item, index) {
    if (index === 0) {
      return null;
    }

    if (index > (pagPage - 1) * pagValue && index <= pagPage * pagValue) {
      return __jsx("ul", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }
      }, item[0]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }
      }, item[5]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }
      }, item[3]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }
      }, item[4]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }
      }, item[6]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }, item[8]));
    }
  })), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pagination,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return paginationHandler('-');
    },
    className: "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "prev"), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.paginationWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, pagNum()), __jsx("div", {
    onClick: function onClick() {
      return paginationHandler('+');
    },
    className: "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "next"))));
};

_s(SaleComponent, "4ZQ1EqXYsvW8dAlDdW0E6tvPMUs=");

_c = SaleComponent;
/* harmony default export */ __webpack_exports__["default"] = (SaleComponent);

var _c;

$RefreshReg$(_c, "SaleComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/sale/index.js":
/*!*****************************!*\
  !*** ./pages/sale/index.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layout/MainLayout */ "./Layout/MainLayout.js");
/* harmony import */ var _components_SaleComponent_SaleComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SaleComponent/SaleComponent */ "./components/SaleComponent/SaleComponent.js");
var _this = undefined,
    _jsxFileName = "H:\\forIT\\SSR_WP\\pages\\sale\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Sale = function Sale(_ref) {
  var serverMotors = _ref.motors;
  return __jsx(_Layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    title: 'Распродажа',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: 'flexWrapper',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_SaleComponent_SaleComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    motors: serverMotors,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })));
};

_c = Sale;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Sale);

var _c;

$RefreshReg$(_c, "Sale");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NhbGUvaW5kZXguanMiXSwibmFtZXMiOlsiU2FsZUNvbXBvbmVudCIsIm1vdG9ycyIsInVzZVN0YXRlIiwidGFibGUiLCJzZXRUYWJsZSIsInNvcnRCbG9jayIsInNldFNvcnRCbG9jayIsIm51bSIsInBvd2VyIiwiY2FwYWNpdHkiLCJ0eXBlIiwic3BlZWQiLCJwcmljZSIsInNvcnRTdGF0ZSIsInNldFNvcnRTdGF0ZSIsInBhZ1BhZ2UiLCJzZXRQYWdQYWdlIiwicGFnVmFsdWUiLCJzZXRQYWdWYWx1ZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnUGFnZXMiLCJzZXRQYWdQYWdlcyIsInBhZ051bSIsImFyciIsImkiLCJidG5DbGFzcyIsInB1c2giLCJwYWdpbmF0aW9uSGFuZGxlciIsInNvcnRIYW5kbGVyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImFyclNvcnQiLCJjbGFzc2VzIiwic2FsZUNvbXBvbmVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uV3JhcHBlciIsIlNhbGUiLCJzZXJ2ZXJNb3RvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDRCxNQUFELENBREE7QUFBQSxNQUMzQkUsS0FEMkI7QUFBQSxNQUNwQkMsUUFEb0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFM0JHLFNBRjJCO0FBQUEsTUFFaEJDLFlBRmdCOztBQUFBLG1CQUdBSixzREFBUSxDQUFDO0FBQ3pDSyxPQUFHLEVBQUUsQ0FEb0M7QUFFekNDLFNBQUssRUFBRSxDQUZrQztBQUd6Q0MsWUFBUSxFQUFFLENBSCtCO0FBSXpDQyxRQUFJLEVBQUUsQ0FKbUM7QUFLekNDLFNBQUssRUFBRSxDQUxrQztBQU16Q0MsU0FBSyxFQUFFO0FBTmtDLEdBQUQsQ0FIUjtBQUFBLE1BRzNCQyxTQUgyQjtBQUFBLE1BR2hCQyxZQUhnQjtBQVdsQzs7O0FBWGtDLG1CQVlIWixzREFBUSxDQUFDLENBQUQsQ0FaTDtBQUFBLE1BWTNCYSxPQVoyQjtBQUFBLE1BWWxCQyxVQVprQjs7QUFBQSxtQkFhRmQsc0RBQVEsQ0FBQyxFQUFELENBYk47QUFBQSxNQWEzQmUsUUFiMkI7QUFBQSxNQWFqQkMsV0FiaUI7O0FBQUEsbUJBY0ZoQixzREFBUSxDQUFDaUIsSUFBSSxDQUFDQyxJQUFMLENBQVVuQixNQUFNLENBQUNvQixNQUFQLEdBQWNKLFFBQXhCLENBQUQsQ0FkTjtBQUFBLE1BYzNCSyxRQWQyQjtBQUFBLE1BY2pCQyxXQWRpQjs7QUFlbEMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixRQUFNQyxHQUFHLEdBQUUsRUFBWDs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBR0osUUFBbkIsRUFBNkJJLENBQUMsRUFBOUIsRUFBaUM7QUFDL0IsVUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBSUQsQ0FBQyxLQUFLWCxPQUFWLEVBQWtCO0FBQ2hCWSxnQkFBUSxHQUFHLHVCQUFYO0FBQ0QsT0FGRCxNQUVNO0FBQ0pBLGdCQUFRLEdBQUcsZ0JBQVg7QUFDRDs7QUFFREYsU0FBRyxDQUFDRyxJQUFKLENBQ0k7QUFBUSxXQUFHLEVBQUVGLENBQWI7QUFBZ0IsaUJBQVMsRUFBRUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFzQ0QsQ0FBdEMsQ0FESjtBQUdEOztBQUNELFdBQU9ELEdBQVA7QUFDRCxHQWZEOztBQWdCQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNuQixJQUFELEVBQVU7QUFDbEMsUUFBR0EsSUFBSSxLQUFHLEdBQVYsRUFBYztBQUNaLFVBQUdLLE9BQU8sSUFBRSxDQUFaLEVBQWM7QUFDWkMsa0JBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVjtBQUNELE9BRkQsTUFFTUMsVUFBVSxDQUFDLENBQUQsQ0FBVjtBQUNQLEtBSkQsTUFJTSxJQUFJTixJQUFJLEtBQUssR0FBYixFQUFpQjtBQUNyQixVQUFHSyxPQUFPLElBQUlPLFFBQVEsR0FBQyxDQUF2QixFQUF5QjtBQUN2Qk4sa0JBQVUsQ0FBQ0QsT0FBTyxHQUFFLENBQVYsQ0FBVjtBQUNELE9BRkQsTUFFTUMsVUFBVSxDQUFDTSxRQUFELENBQVY7QUFDUDtBQUNGLEdBVkQ7QUFXQTs7O0FBRUEsTUFBTVEsV0FBVztBQUFBLGlNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNmMUIsU0FEZTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUlaMkIsbUJBSlksR0FJSkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBSkw7QUFLbEJFLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBMUIsMEJBQVksQ0FBQyxJQUFELENBQVo7QUFOa0I7QUFBQSxxQkFPWjhCLGdFQUFPLENBQUNqQyxLQUFELENBUEs7O0FBQUE7QUFRbEJHLDBCQUFZLENBQUMsS0FBRCxDQUFaOztBQVJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYd0IsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFXQSxTQUNJO0FBQUssYUFBUyxFQUFFTyxpRUFBTyxDQUFDQyxhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0S0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMExBRkYsRUFHRTtBQUFLLGFBQVMsRUFBRUQsaUVBQU8sQ0FBQ2xDLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUUsQ0FBWDtBQUFjLFdBQU8sRUFBRTJCLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsRUFFRTtBQUFJLFNBQUssRUFBRSxDQUFYO0FBQWMsV0FBTyxFQUFFQSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLEVBR0U7QUFBSSxTQUFLLEVBQUUsQ0FBWDtBQUFjLFdBQU8sRUFBRUEsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRkFIRixFQUlFO0FBQUksU0FBSyxFQUFFLENBQVg7QUFBYyxXQUFPLEVBQUVBLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBSkYsRUFLRTtBQUFJLFNBQUssRUFBRSxDQUFYO0FBQWMsV0FBTyxFQUFFQSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUxGLEVBTUU7QUFBSSxTQUFLLEVBQUUsQ0FBWDtBQUFjLFdBQU8sRUFBRUEsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FORixDQURGLEVBVUkzQixLQUFLLENBQUNvQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWdCO0FBQ3hCLFFBQUdBLEtBQUssS0FBRyxDQUFYLEVBQWE7QUFDWCxhQUFPLElBQVA7QUFDRDs7QUFDRCxRQUFHQSxLQUFLLEdBQUMsQ0FBQzFCLE9BQU8sR0FBQyxDQUFULElBQVlFLFFBQWxCLElBQThCd0IsS0FBSyxJQUFHMUIsT0FBRCxHQUFVRSxRQUFsRCxFQUEyRDtBQUN6RCxhQUNJO0FBQUksV0FBRyxFQUFFd0IsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLRCxJQUFJLENBQUMsQ0FBRCxDQUFULENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtBLElBQUksQ0FBQyxDQUFELENBQVQsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsSUFBSSxDQUFDLENBQUQsQ0FBVCxDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQSxJQUFJLENBQUMsQ0FBRCxDQUFULENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtBLElBQUksQ0FBQyxDQUFELENBQVQsQ0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsSUFBSSxDQUFDLENBQUQsQ0FBVCxDQU5GLENBREo7QUFTRDtBQUVFLEdBaEJMLENBVkosQ0FIRixFQWlDRTtBQUFLLGFBQVMsRUFBRUgsaUVBQU8sQ0FBQ0ssVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTWIsaUJBQWlCLENBQUMsR0FBRCxDQUF2QjtBQUFBLEtBQWQ7QUFBNEMsYUFBUyxFQUFDLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlFO0FBQUssYUFBUyxFQUFFUSxpRUFBTyxDQUFDTSxpQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbkIsTUFBTSxFQURULENBSkYsRUFPRTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1LLGlCQUFpQixDQUFDLEdBQUQsQ0FBdkI7QUFBQSxLQUFkO0FBQTRDLGFBQVMsRUFBQyxLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsQ0FqQ0YsQ0FERixDQURKO0FBa0RELENBekdEOztHQUFNN0IsYTs7S0FBQUEsYTtBQTJHU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBOztBQUVBLElBQU00QyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE0QjtBQUFBLE1BQWxCQyxZQUFrQixRQUExQjVDLE1BQTBCO0FBRXZDLFNBQ0ksTUFBQyw2REFBRDtBQUFZLFNBQUssRUFBRSxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUUsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsK0VBQUQ7QUFDSSxVQUFNLEVBQUU0QyxZQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURGLENBREo7QUFVRCxDQVpEOztLQUFNRCxJOztBQXlCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZS40OGI5MzI2MTA2MmQ0NWI1NGNhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc2FsZUNvbXBvbmVudC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGFyclNvcnQgZnJvbSAnLi4vLi4vaGVscGVycy9hcnJTb3J0J1xyXG5cclxuY29uc3QgU2FsZUNvbXBvbmVudCA9ICh7bW90b3JzfSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUobW90b3JzKVxyXG4gIGNvbnN0IFtzb3J0QmxvY2ssIHNldFNvcnRCbG9ja10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc29ydFN0YXRlLCBzZXRTb3J0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbnVtOiAwLFxyXG4gICAgcG93ZXI6IDAsXHJcbiAgICBjYXBhY2l0eTogMCxcclxuICAgIHR5cGU6IDAsXHJcbiAgICBzcGVlZDogMCxcclxuICAgIHByaWNlOiAwXHJcbiAgfSlcclxuICAvKnBhZ2luYXRpb24qL1xyXG4gIGNvbnN0IFtwYWdQYWdlLCBzZXRQYWdQYWdlXSAgPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtwYWdWYWx1ZSwgc2V0UGFnVmFsdWVdID0gdXNlU3RhdGUoMjUpXHJcbiAgY29uc3QgW3BhZ1BhZ2VzLCBzZXRQYWdQYWdlc10gPSB1c2VTdGF0ZShNYXRoLmNlaWwobW90b3JzLmxlbmd0aC9wYWdWYWx1ZSkpXHJcbiAgY29uc3QgcGFnTnVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJyID1bXVxyXG4gICAgZm9yKGxldCBpID0gMTsgaTw9IHBhZ1BhZ2VzOyBpKyspe1xyXG4gICAgICBsZXQgYnRuQ2xhc3MgPSAnJ1xyXG4gICAgICBpZiAoaSA9PT0gcGFnUGFnZSl7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24tYWN0aXZlJ1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24nXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyci5wdXNoKFxyXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IGNsYXNzTmFtZT17YnRuQ2xhc3N9PntpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxuICBjb25zdCBwYWdpbmF0aW9uSGFuZGxlciA9ICh0eXBlKSA9PiB7XHJcbiAgICBpZih0eXBlPT09Jy0nKXtcclxuICAgICAgaWYocGFnUGFnZT49Mil7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlIC0gMSlcclxuICAgICAgfWVsc2Ugc2V0UGFnUGFnZSgxKVxyXG4gICAgfWVsc2UgaWYgKHR5cGUgPT09ICcrJyl7XHJcbiAgICAgIGlmKHBhZ1BhZ2UgPD0gcGFnUGFnZXMtMSl7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlICsxKVxyXG4gICAgICB9ZWxzZSBzZXRQYWdQYWdlKHBhZ1BhZ2VzKVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmVuZCBwYWdpbmF0aW9uICovXHJcblxyXG4gIGNvbnN0IHNvcnRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGlmKHNvcnRCbG9jayl7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICBzZXRTb3J0QmxvY2sodHJ1ZSlcclxuICAgIGF3YWl0IGFyclNvcnQodGFibGUpXHJcbiAgICBzZXRTb3J0QmxvY2soZmFsc2UpXHJcblxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zYWxlQ29tcG9uZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyPtCt0LvQtdC60YLRgNC+0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1INCyINC90LDQu9C40YfQuNC4PC9oMj5cclxuICAgICAgICAgIDxoND7QptC10L3RiyDQv9GA0LjQstC10LTQtdC90Ysg0LHQtdC3INGD0YfQtdGC0LAg0J3QlNChINC90LAgMTEuMDcuMTgg0LMuPC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17MH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCd0L7QvNC10YA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17NX0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC60JLRgjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXszfSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0JrQvtC80L/Qu9C10LrRgtC90L7RgdGC0Yw8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17NH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCe0LHQvtC30L3QsNGH0LXQvdC40LUv0KLQuNC/PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezZ9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QvtCxL9C80LjQvTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs4fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0KbQtdC90LAs0KA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGFibGUubWFwKChpdGVtLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD09PTApe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXg+KHBhZ1BhZ2UtMSkqcGFnVmFsdWUgJiYgaW5kZXg8PShwYWdQYWdlKSpwYWdWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs1XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bM119PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzRdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs2XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bOF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0aW9uSGFuZGxlcignLScpfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICBwcmV2XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAge3BhZ051bSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0aW9uSGFuZGxlcignKycpfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICBuZXh0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVDb21wb25lbnQiLCJpbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSAnLi4vLi4vTGF5b3V0L01haW5MYXlvdXQnXHJcbmltcG9ydCBTYWxlQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2FsZUNvbXBvbmVudC9TYWxlQ29tcG9uZW50J1xyXG5cclxuY29uc3QgU2FsZSA9ICh7bW90b3JzOiBzZXJ2ZXJNb3RvcnN9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxNYWluTGF5b3V0IHRpdGxlPXsn0KDQsNGB0L/RgNC+0LTQsNC20LAnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXhXcmFwcGVyJ30+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIDxTYWxlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICBtb3RvcnM9e3NlcnZlck1vdG9yc30vPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01haW5MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93cC10ZXN0L3dwLWpzb24vdGFibGVwcmVzcy9hcGkvdjEvdGFibGUvMScpXHJcbiAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgcmVzcG9uc2VEYXRhLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW1bOF0gPSBpdGVtWzhdLnNwbGl0KCcsJywyKS5qb2luKCcnKVxyXG4gIH0pXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7bW90b3JzOiByZXNwb25zZURhdGEuZGF0YX1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=