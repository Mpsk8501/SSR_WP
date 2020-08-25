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
                _context.next = 9;
                break;
              }

              setTable(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(table).reverse());
              setSortBlock(false);
              console.log('sort');
              return _context.abrupt("return");

            case 9:
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

/***/ }),

/***/ "./helpers/arrSort.js":
/*!****************************!*\
  !*** ./helpers/arrSort.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delay */ "./helpers/delay.js");




function compare(field, order) {
  var len = arguments.length;

  if (len === 0) {
    return function (a, b) {
      return a < b && -1 || a > b && 1 || 0;
    };
  }

  if (len === 1) {
    switch (typeof field) {
      case 'number':
        return field < 0 ? function (a, b) {
          return a < b && 1 || a > b && -1 || 0;
        } : function (a, b) {
          return a < b && -1 || a > b && 1 || 0;
        };

      case 'string':
        return function (a, b) {
          return a[field] < b[field] && -1 || a[field] > b[field] && 1 || 0;
        };
    }
  }

  if (len === 2 && typeof order === 'number') {
    return order < 0 ? function (a, b) {
      return a[field] < b[field] && 1 || a[field] > b[field] && -1 || 0;
    } : function (a, b) {
      return a[field] < b[field] && -1 || a[field] > b[field] && 1 || 0;
    };
  }

  var fields, orders;

  if (typeof field === 'object') {
    fields = Object.getOwnPropertyNames(field);
    orders = fields.map(function (key) {
      return field[key];
    });
    len = fields.length;
  } else {
    fields = new Array(len);
    orders = new Array(len);

    for (var i = len; i--;) {
      fields[i] = arguments[i];
      orders[i] = 1;
    }
  }

  return function (a, b) {
    for (var _i = 0; _i < len; _i++) {
      if (a[fields[_i]] < b[fields[_i]]) return orders[_i];
      if (a[fields[_i]] > b[fields[_i]]) return -orders[_i];
    }

    return 0;
  };
}

var arrSort = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(arr, key) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(100);

          case 2:
            return _context.abrupt("return", arr.sort(compare(key)));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function arrSort(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlcnMvYXJyU29ydC5qcyJdLCJuYW1lcyI6WyJTYWxlQ29tcG9uZW50IiwibW90b3JzIiwidXNlU3RhdGUiLCJ0YWJsZSIsInNldFRhYmxlIiwic29ydEJsb2NrIiwic2V0U29ydEJsb2NrIiwic29ydFN0YXRlIiwic2V0U29ydFN0YXRlIiwicGFnUGFnZSIsInNldFBhZ1BhZ2UiLCJwYWdWYWx1ZSIsInNldFBhZ1ZhbHVlIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdQYWdlcyIsInNldFBhZ1BhZ2VzIiwicGFnTnVtIiwiYXJyIiwiaSIsImJ0bkNsYXNzIiwicHVzaCIsInBhZ2luYXRpb25IYW5kbGVyIiwidHlwZSIsInNvcnRIYW5kbGVyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicmV2ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJhcnJTb3J0Iiwic29ydGVkVGFibGUiLCJjbGFzc2VzIiwic2FsZUNvbXBvbmVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uV3JhcHBlciIsImNvbXBhcmUiLCJmaWVsZCIsIm9yZGVyIiwibGVuIiwiYXJndW1lbnRzIiwiYSIsImIiLCJmaWVsZHMiLCJvcmRlcnMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5IiwiQXJyYXkiLCJkZWxheSIsInNvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDRCxNQUFELENBREE7QUFBQSxNQUMzQkUsS0FEMkI7QUFBQSxNQUNwQkMs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TSxDQUFDNUIsRUFBRCxDQUFQLENBQW5CLEVBQWdDLE9BQU8sQ0FBQzZCLE1BQU0sQ0FBQzdCLEVBQUQsQ0FBZDtBQUNsQzs7QUFDRCxXQUFPLENBQVA7QUFDRixHQU5EO0FBT0Y7O0FBSUQsSUFBTVksT0FBTztBQUFBLDhMQUFHLGlCQUFPYixHQUFQLEVBQVdpQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNQRSxzREFBSyxDQUFDLEdBQUQsQ0FERTs7QUFBQTtBQUFBLDZDQUVObkMsR0FBRyxDQUFDb0MsSUFBSixDQUFTZCxPQUFPLENBQUNXLEdBQUQsQ0FBaEIsQ0FGTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQcEIsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQUtlQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlLjY2MzM1NjJhYmYyZjNlNDEyODViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zYWxlQ29tcG9uZW50Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgYXJyU29ydCBmcm9tICcuLi8uLi9oZWxwZXJzL2FyclNvcnQnXHJcblxyXG5jb25zdCBTYWxlQ29tcG9uZW50ID0gKHttb3RvcnN9KSA9PiB7XHJcbiAgY29uc3QgW3RhYmxlLCBzZXRUYWJsZV0gPSB1c2VTdGF0ZShtb3RvcnMpXHJcbiAgY29uc3QgW3NvcnRCbG9jaywgc2V0U29ydEJsb2NrXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzb3J0U3RhdGUsIHNldFNvcnRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAwOiAwLFxyXG4gICAgNTogMCxcclxuICAgIDM6IDAsXHJcbiAgICA0OiAwLFxyXG4gICAgNjogMCxcclxuICAgIDg6IDBcclxuICB9KVxyXG4gIC8qcGFnaW5hdGlvbiovXHJcbiAgY29uc3QgW3BhZ1BhZ2UsIHNldFBhZ1BhZ2VdICA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW3BhZ1ZhbHVlLCBzZXRQYWdWYWx1ZV0gPSB1c2VTdGF0ZSgyNSlcclxuICBjb25zdCBbcGFnUGFnZXMsIHNldFBhZ1BhZ2VzXSA9IHVzZVN0YXRlKE1hdGguY2VpbChtb3RvcnMubGVuZ3RoL3BhZ1ZhbHVlKSlcclxuICBjb25zdCBwYWdOdW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcnIgPVtdXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpPD0gcGFnUGFnZXM7IGkrKyl7XHJcbiAgICAgIGxldCBidG5DbGFzcyA9ICcnXHJcbiAgICAgIGlmIChpID09PSBwYWdQYWdlKXtcclxuICAgICAgICBidG5DbGFzcyA9ICdidG4tcGFnaW5hdGlvbi1hY3RpdmUnXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBidG5DbGFzcyA9ICdidG4tcGFnaW5hdGlvbidcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8YnV0dG9uIGtleT17aX0gY2xhc3NOYW1lPXtidG5DbGFzc30+e2l9PC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgfVxyXG4gIGNvbnN0IHBhZ2luYXRpb25IYW5kbGVyID0gKHR5cGUpID0+IHtcclxuICAgIGlmKHR5cGU9PT0nLScpe1xyXG4gICAgICBpZihwYWdQYWdlPj0yKXtcclxuICAgICAgICBzZXRQYWdQYWdlKHBhZ1BhZ2UgLSAxKVxyXG4gICAgICB9ZWxzZSBzZXRQYWdQYWdlKDEpXHJcbiAgICB9ZWxzZSBpZiAodHlwZSA9PT0gJysnKXtcclxuICAgICAgaWYocGFnUGFnZSA8PSBwYWdQYWdlcy0xKXtcclxuICAgICAgICBzZXRQYWdQYWdlKHBhZ1BhZ2UgKzEpXHJcbiAgICAgIH1lbHNlIHNldFBhZ1BhZ2UocGFnUGFnZXMpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qZW5kIHBhZ2luYXRpb24gKi9cclxuXHJcbiAgY29uc3Qgc29ydEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgaWYoc29ydEJsb2NrKXtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTb3J0QmxvY2sodHJ1ZSlcclxuICAgIGlmKHNvcnRTdGF0ZVt2YWx1ZV0pe1xyXG4gICAgICBzZXRUYWJsZShbLi4udGFibGVdLnJldmVyc2UoKSlcclxuICAgICAgc2V0U29ydEJsb2NrKGZhbHNlKVxyXG4gICAgICBjb25zb2xlLmxvZygnc29ydCcpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3Qgc29ydGVkVGFibGUgPSBhd2FpdCBhcnJTb3J0KFsuLi50YWJsZV0sdmFsdWUpXHJcbiAgICBzZXRTb3J0U3RhdGUoey4uLnNvcnRTdGF0ZSxbdmFsdWVdOjF9KVxyXG4gICAgc2V0VGFibGUoc29ydGVkVGFibGUpXHJcbiAgICBzZXRTb3J0QmxvY2soZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zYWxlQ29tcG9uZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyPtCt0LvQtdC60YLRgNC+0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1INCyINC90LDQu9C40YfQuNC4PC9oMj5cclxuICAgICAgICAgIDxoND7QptC10L3RiyDQv9GA0LjQstC10LTQtdC90Ysg0LHQtdC3INGD0YfQtdGC0LAg0J3QlNChINC90LAgMTEuMDcuMTgg0LMuPC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17MH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCd0L7QvNC10YA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17NX0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC60JLRgjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXszfSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0JrQvtC80L/Qu9C10LrRgtC90L7RgdGC0Yw8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17NH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCe0LHQvtC30L3QsNGH0LXQvdC40LUv0KLQuNC/PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezZ9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QvtCxL9C80LjQvTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs4fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0KbQtdC90LAs0KA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGFibGUubWFwKChpdGVtLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD09PTApe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXg+KHBhZ1BhZ2UtMSkqcGFnVmFsdWUgJiYgaW5kZXg8PShwYWdQYWdlKSpwYWdWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs1XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bM119PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzRdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs2XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bOF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0aW9uSGFuZGxlcignLScpfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICBwcmV2XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAge3BhZ051bSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0aW9uSGFuZGxlcignKycpfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICBuZXh0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVDb21wb25lbnQiLCJpbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSdcclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmUoZmllbGQsIG9yZGVyKSB7XHJcbiAgIGxldCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICBpZihsZW4gPT09IDApIHtcclxuICAgICAgcmV0dXJuIChhLCBiKSA9PiAoYSA8IGIgJiYgLTEpIHx8IChhID4gYiAmJiAxKSB8fCAwO1xyXG4gICB9XHJcbiAgIGlmKGxlbiA9PT0gMSkge1xyXG4gICAgICBzd2l0Y2godHlwZW9mIGZpZWxkKSB7XHJcbiAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZCA8IDAgP1xyXG4gICAgICAgICAgICAgICAgKChhLCBiKSA9PiAoYSA8IGIgJiYgMSkgfHwgKGEgPiBiICYmIC0xKSB8fCAwKSA6XHJcbiAgICAgICAgICAgICAgICAoKGEsIGIpID0+IChhIDwgYiAmJiAtMSkgfHwgKGEgPiBiICYmIDEpIHx8IDApO1xyXG4gICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gKGEsIGIpID0+IChhW2ZpZWxkXSA8IGJbZmllbGRdICYmIC0xKSB8fCAoYVtmaWVsZF0gPiBiW2ZpZWxkXSAmJiAxKSB8fCAwO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgaWYobGVuID09PSAyICYmIHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIG9yZGVyIDwgMCA/XHJcbiAgICAgICAgICAoKGEsIGIpID0+IChhW2ZpZWxkXSA8IGJbZmllbGRdICYmIDEpIHx8IChhW2ZpZWxkXSA+IGJbZmllbGRdICYmIC0xKSB8fCAwKSA6XHJcbiAgICAgICAgICAoKGEsIGIpID0+IChhW2ZpZWxkXSA8IGJbZmllbGRdICYmIC0xKSB8fCAoYVtmaWVsZF0gPiBiW2ZpZWxkXSAmJiAxKSB8fCAwKTtcclxuICAgfVxyXG4gICBsZXQgZmllbGRzLCBvcmRlcnM7XHJcbiAgIGlmKHR5cGVvZiBmaWVsZCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgZmllbGRzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZmllbGQpO1xyXG4gICAgICBvcmRlcnMgPSBmaWVsZHMubWFwKGtleSA9PiBmaWVsZFtrZXldKTtcclxuICAgICAgbGVuID0gZmllbGRzLmxlbmd0aDtcclxuICAgfSBlbHNlIHtcclxuICAgICAgZmllbGRzID0gbmV3IEFycmF5KGxlbik7XHJcbiAgICAgIG9yZGVycyA9IG5ldyBBcnJheShsZW4pO1xyXG4gICAgICBmb3IobGV0IGkgPSBsZW47IGktLTspIHtcclxuICAgICAgICAgZmllbGRzW2ldID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICBvcmRlcnNbaV0gPSAxO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIChhLCBiKSA9PiB7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICBpZihhW2ZpZWxkc1tpXV0gPCBiW2ZpZWxkc1tpXV0pIHJldHVybiBvcmRlcnNbaV07XHJcbiAgICAgICAgIGlmKGFbZmllbGRzW2ldXSA+IGJbZmllbGRzW2ldXSkgcmV0dXJuIC1vcmRlcnNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDA7XHJcbiAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgYXJyU29ydCA9IGFzeW5jIChhcnIsa2V5KSA9PiB7XHJcbiAgIGF3YWl0IGRlbGF5KDEwMClcclxuICAgcmV0dXJuIGFyci5zb3J0KGNvbXBhcmUoa2V5KSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJyU29ydCJdLCJzb3VyY2VSb290IjoiIn0=