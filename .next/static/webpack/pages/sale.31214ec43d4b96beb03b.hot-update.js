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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saleComponent.module.scss */ "./components/SaleComponent/saleComponent.module.scss");
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_arrSort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/arrSort */ "./helpers/arrSort.js");





var _this = undefined,
    _jsxFileName = "H:\\forIT\\SSR_WP\\components\\SaleComponent\\SaleComponent.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SaleComponent = function SaleComponent(_ref) {
  _s();

  var motors = _ref.motors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(motors),
      table = _useState[0],
      setTable = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      sortBlock = _useState2[0],
      setSortBlock = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    0: 0,
    5: 0,
    3: 0,
    4: 0,
    6: 0,
    8: 0
  }),
      sortState = _useState3[0],
      setSortState = _useState3[1];
  /*pagination*/


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      pagPage = _useState4[0],
      setPagPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(25),
      pagValue = _useState5[0],
      setPagValue = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Math.ceil(motors.length / pagValue)),
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var value, sortedTable;
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
              setSortBlock(true);

              if (!sortState[value]) {
                _context.next = 8;
                break;
              }

              setTable(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(table).reverse());
              setSortBlock(false);
              return _context.abrupt("return");

            case 8:
              console.log('sort');
              _context.next = 11;
              return Object(_helpers_arrSort__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(table), value);

            case 11:
              sortedTable = _context.sent;
              setSortState(_objectSpread(_objectSpread({}, sortState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, value, 1)));
              setTable(sortedTable);
              setSortBlock(false);

            case 15:
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
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.saleComponent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "\u0426\u0435\u043D\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u044B \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u041D\u0414\u0421 \u043D\u0430 11.07.18 \u0433."), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("li", {
    value: 0,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "\u041D\u043E\u043C\u0435\u0440"), __jsx("li", {
    value: 5,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "\u043A\u0412\u0442"), __jsx("li", {
    value: 3,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C"), __jsx("li", {
    value: 4,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435/\u0422\u0438\u043F"), __jsx("li", {
    value: 6,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "\u043E\u0431/\u043C\u0438\u043D"), __jsx("li", {
    value: 8,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
          lineNumber: 88,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }
      }, item[0]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }, item[5]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }
      }, item[3]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }
      }, item[4]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }
      }, item[6]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }
      }, item[8]));
    }
  })), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.pagination,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 13
    }
  }, "prev"), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.paginationWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }, "next"))));
};

_s(SaleComponent, "uLwEifnkWWDOYPdykQzIbAsWlKg=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiXSwibmFtZXMiOlsiU2FsZUNvbXBvbmVudCIsIm1vdG9ycyIsInVzZVN0YXRlIiwidGFibGUiLCJzZXRUYWJsZSIsInNvcnRCbG9jayIsInNldFNvcnRCbG9jayIsInNvcnRTdGF0ZSIsInNldFNvcnRTdGF0ZSIsInBhZ1BhZ2UiLCJzZXRQYWdQYWdlIiwicGFnVmFsdWUiLCJzZXRQYWdWYWx1ZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnUGFnZXMiLCJzZXRQYWdQYWdlcyIsInBhZ051bSIsImFyciIsImkiLCJidG5DbGFzcyIsInB1c2giLCJwYWdpbmF0aW9uSGFuZGxlciIsInR5cGUiLCJzb3J0SGFuZGxlciIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInJldmVyc2UiLCJjb25zb2xlIiwibG9nIiwiYXJyU29ydCIsInNvcnRlZFRhYmxlIiwiY2xhc3NlcyIsInNhbGVDb21wb25lbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDRCxNQUFELENBREE7QUFBQSxNQUMzQkUsS0FEMkI7QUFBQSxNQUNwQkMsUUFEb0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFM0JHLFNBRjJCO0FBQUEsTUFFaEJDLFlBRmdCOztBQUFBLG1CQUdBSixzREFBUSxDQUFDO0FBQ3pDLE9BQUcsQ0FEc0M7QUFFekMsT0FBRyxDQUZzQztBQUd6QyxPQUFHLENBSHNDO0FBSXpDLE9BQUcsQ0FKc0M7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QUE7QUFBQSxZQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVXLGlFQUFPLENBQUNNLGlCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d0QixNQUFNLEVBRFQsQ0FKRixFQU9FO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTUssaUJBQWlCLENBQUMsR0FBRCxDQUF2QjtBQUFBLEtBQWQ7QUFBNEMsYUFBUyxFQUFDLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixDQWpDRixDQURGLENBREo7QUFrREQsQ0FoSEQ7O0dBQU12QixhOztLQUFBQSxhO0FBa0hTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlLjMxMjE0ZWM0M2Q0Yjk2YmViMDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zYWxlQ29tcG9uZW50Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgYXJyU29ydCBmcm9tICcuLi8uLi9oZWxwZXJzL2FyclNvcnQnXHJcblxyXG5jb25zdCBTYWxlQ29tcG9uZW50ID0gKHttb3RvcnN9KSA9PiB7XHJcbiAgY29uc3QgW3RhYmxlLCBzZXRUYWJsZV0gPSB1c2VTdGF0ZShtb3RvcnMpXHJcbiAgY29uc3QgW3NvcnRCbG9jaywgc2V0U29ydEJsb2NrXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzb3J0U3RhdGUsIHNldFNvcnRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAwOiAwLFxyXG4gICAgNTogMCxcclxuICAgIDM6IDAsXHJcbiAgICA0OiAwLFxyXG4gICAgNjogMCxcclxuICAgIDg6IDBcclxuICB9KVxyXG4gIC8qcGFnaW5hdGlvbiovXHJcbiAgY29uc3QgW3BhZ1BhZ2UsIHNldFBhZ1BhZ2VdICA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW3BhZ1ZhbHVlLCBzZXRQYWdWYWx1ZV0gPSB1c2VTdGF0ZSgyNSlcclxuICBjb25zdCBbcGFnUGFnZXMsIHNldFBhZ1BhZ2VzXSA9IHVzZVN0YXRlKE1hdGguY2VpbChtb3RvcnMubGVuZ3RoL3BhZ1ZhbHVlKSlcclxuICBjb25zdCBwYWdOdW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcnIgPVtdXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpPD0gcGFnUGFnZXM7IGkrKyl7XHJcbiAgICAgIGxldCBidG5DbGFzcyA9ICcnXHJcbiAgICAgIGlmIChpID09PSBwYWdQYWdlKXtcclxuICAgICAgICBidG5DbGFzcyA9ICdidG4tcGFnaW5hdGlvbi1hY3RpdmUnXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBidG5DbGFzcyA9ICdidG4tcGFnaW5hdGlvbidcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8YnV0dG9uIGtleT17aX0gY2xhc3NOYW1lPXtidG5DbGFzc30+e2l9PC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgfVxyXG4gIGNvbnN0IHBhZ2luYXRpb25IYW5kbGVyID0gKHR5cGUpID0+IHtcclxuICAgIGlmKHR5cGU9PT0nLScpe1xyXG4gICAgICBpZihwYWdQYWdlPj0yKXtcclxuICAgICAgICBzZXRQYWdQYWdlKHBhZ1BhZ2UgLSAxKVxyXG4gICAgICB9ZWxzZSBzZXRQYWdQYWdlKDEpXHJcbiAgICB9ZWxzZSBpZiAodHlwZSA9PT0gJysnKXtcclxuICAgICAgaWYocGFnUGFnZSA8PSBwYWdQYWdlcy0xKXtcclxuICAgICAgICBzZXRQYWdQYWdlKHBhZ1BhZ2UgKzEpXHJcbiAgICAgIH1lbHNlIHNldFBhZ1BhZ2UocGFnUGFnZXMpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qZW5kIHBhZ2luYXRpb24gKi9cclxuXHJcbiAgY29uc3Qgc29ydEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgaWYoc29ydEJsb2NrKXtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTb3J0QmxvY2sodHJ1ZSlcclxuICAgIGlmKHNvcnRTdGF0ZVt2YWx1ZV0pe1xyXG4gICAgICBzZXRUYWJsZShbLi4udGFibGVdLnJldmVyc2UoKSlcclxuICAgICAgc2V0U29ydEJsb2NrKGZhbHNlKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdzb3J0JylcclxuICAgIGNvbnN0IHNvcnRlZFRhYmxlID0gYXdhaXQgYXJyU29ydChbLi4udGFibGVdLHZhbHVlKVxyXG4gICAgc2V0U29ydFN0YXRlKHsuLi5zb3J0U3RhdGUsW3ZhbHVlXToxfSlcclxuICAgIHNldFRhYmxlKHNvcnRlZFRhYmxlKVxyXG4gICAgc2V0U29ydEJsb2NrKGZhbHNlKVxyXG5cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2FsZUNvbXBvbmVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMj7QrdC70LXQutGC0YDQvtC+0LHQvtGA0YPQtNC+0LLQsNC90LjQtSDQsiDQvdCw0LvQuNGH0LjQuDwvaDI+XHJcbiAgICAgICAgICA8aDQ+0KbQtdC90Ysg0L/RgNC40LLQtdC00LXQvdGLINCx0LXQtyDRg9GH0LXRgtCwINCd0JTQoSDQvdCwIDExLjA3LjE4INCzLjwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezB9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QndC+0LzQtdGAPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezV9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QutCS0YI8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17M30gb25DbGljaz17c29ydEhhbmRsZXJ9PtCa0L7QvNC/0LvQtdC60YLQvdC+0YHRgtGMPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezR9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QntCx0L7Qt9C90LDRh9C10L3QuNC1L9Ci0LjQvzwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs2fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0L7QsS/QvNC40L08L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17OH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCm0LXQvdCwLNCgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRhYmxlLm1hcCgoaXRlbSwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXg9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGluZGV4PihwYWdQYWdlLTEpKnBhZ1ZhbHVlICYmIGluZGV4PD0ocGFnUGFnZSkqcGFnVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVswXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNV19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzNdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs0XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNl19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzhdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnaW5hdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcGFnaW5hdGlvbkhhbmRsZXIoJy0nKX0gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgcHJldlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnaW5hdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIHtwYWdOdW0oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcGFnaW5hdGlvbkhhbmRsZXIoJysnKX0gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgbmV4dFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYWxlQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==