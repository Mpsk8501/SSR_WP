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
              return Object(_helpers_arrSort__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(table), value, 'num');

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




var arrSort = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(arr) {
    var key,
        type,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            type = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            console.log('arrSortDelay');
            _context.next = 5;
            return Object(_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(1000);

          case 5:
            if (!(type === 'num')) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", arr.sort(function (a, b) {
              return a[key] - b[key];
            }));

          case 9:
            return _context.abrupt("return", arr);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function arrSort(_x) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlcnMvYXJyU29ydC5qcyJdLCJuYW1lcyI6WyJTYWxlQ29tcG9uZW50IiwibW90b3JzIiwidXNlU3RhdGUiLCJ0YWJsZSIsInNldFRhYmxlIiwic29ydEJsb2NrIiwic2V0U29ydEJsb2NrIiwic29ydFN0YXRlIiwic2V0U29ydFN0YXRlIiwicGFnUGFnZSIsInNldFBhZ1BhZ2UiLCJwYWdWYWx1ZSIsInNldFBhZ1ZhbHVlIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdQYWdlcyIsInNldFBhZ1BhZ2VzIiwicGFnTnVtIiwiYXJyIiwiaSIsImJ0bkNsYXNzIiwicHVzaCIsInBhZ2luYXRpb25IYW5kbGVyIiwidHlwZSIsInNvcnRIYW5kbGVyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicmV2ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJhcnJTb3J0Iiwic29ydGVkVGFibGUiLCJjbGFzc2VzIiwic2FsZUNvbXBvbmVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uV3JhcHBlciIsImtleSIsImRlbGF5Iiwic29ydCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQ0QsTUFBRCxDQURBO0FBQUEsTUFDM0JFLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9COztBQUFBLG1CQUVBRixzREFBUSxDQUFDLEtBQUQsQ0FGUjtBQUFBLE1BRTNCRyxTQUYyQjtBQUFBLE1BRWhCQyxZQUZnQjs7QUFBQSxtQkFHQUosc0RBQVEsQ0FBQztB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QUg7O0FBQUEsa0JBQVBhLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFVZUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZS5iMDg3OTYwOTAwYmQ0NTY0ZGFmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc2FsZUNvbXBvbmVudC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGFyclNvcnQgZnJvbSAnLi4vLi4vaGVscGVycy9hcnJTb3J0J1xyXG5cclxuY29uc3QgU2FsZUNvbXBvbmVudCA9ICh7bW90b3JzfSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUobW90b3JzKVxyXG4gIGNvbnN0IFtzb3J0QmxvY2ssIHNldFNvcnRCbG9ja10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc29ydFN0YXRlLCBzZXRTb3J0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgMDogMCxcclxuICAgIDU6IDAsXHJcbiAgICAzOiAwLFxyXG4gICAgNDogMCxcclxuICAgIDY6IDAsXHJcbiAgICA4OiAwXHJcbiAgfSlcclxuICAvKnBhZ2luYXRpb24qL1xyXG4gIGNvbnN0IFtwYWdQYWdlLCBzZXRQYWdQYWdlXSAgPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtwYWdWYWx1ZSwgc2V0UGFnVmFsdWVdID0gdXNlU3RhdGUoMjUpXHJcbiAgY29uc3QgW3BhZ1BhZ2VzLCBzZXRQYWdQYWdlc10gPSB1c2VTdGF0ZShNYXRoLmNlaWwobW90b3JzLmxlbmd0aC9wYWdWYWx1ZSkpXHJcbiAgY29uc3QgcGFnTnVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJyID1bXVxyXG4gICAgZm9yKGxldCBpID0gMTsgaTw9IHBhZ1BhZ2VzOyBpKyspe1xyXG4gICAgICBsZXQgYnRuQ2xhc3MgPSAnJ1xyXG4gICAgICBpZiAoaSA9PT0gcGFnUGFnZSl7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24tYWN0aXZlJ1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24nXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyci5wdXNoKFxyXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IGNsYXNzTmFtZT17YnRuQ2xhc3N9PntpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxuICBjb25zdCBwYWdpbmF0aW9uSGFuZGxlciA9ICh0eXBlKSA9PiB7XHJcbiAgICBpZih0eXBlPT09Jy0nKXtcclxuICAgICAgaWYocGFnUGFnZT49Mil7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlIC0gMSlcclxuICAgICAgfWVsc2Ugc2V0UGFnUGFnZSgxKVxyXG4gICAgfWVsc2UgaWYgKHR5cGUgPT09ICcrJyl7XHJcbiAgICAgIGlmKHBhZ1BhZ2UgPD0gcGFnUGFnZXMtMSl7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlICsxKVxyXG4gICAgICB9ZWxzZSBzZXRQYWdQYWdlKHBhZ1BhZ2VzKVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmVuZCBwYWdpbmF0aW9uICovXHJcblxyXG4gIGNvbnN0IHNvcnRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGlmKHNvcnRCbG9jayl7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U29ydEJsb2NrKHRydWUpXHJcbiAgICBpZihzb3J0U3RhdGVbdmFsdWVdKXtcclxuICAgICAgc2V0VGFibGUoWy4uLnRhYmxlXS5yZXZlcnNlKCkpXHJcbiAgICAgIHNldFNvcnRCbG9jayhmYWxzZSlcclxuICAgICAgY29uc29sZS5sb2coJ3NvcnQnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHNvcnRlZFRhYmxlID0gYXdhaXQgYXJyU29ydChbLi4udGFibGVdLHZhbHVlLCdudW0nKVxyXG4gICAgc2V0U29ydFN0YXRlKHsuLi5zb3J0U3RhdGUsW3ZhbHVlXToxfSlcclxuICAgIHNldFRhYmxlKHNvcnRlZFRhYmxlKVxyXG4gICAgc2V0U29ydEJsb2NrKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2FsZUNvbXBvbmVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMj7QrdC70LXQutGC0YDQvtC+0LHQvtGA0YPQtNC+0LLQsNC90LjQtSDQsiDQvdCw0LvQuNGH0LjQuDwvaDI+XHJcbiAgICAgICAgICA8aDQ+0KbQtdC90Ysg0L/RgNC40LLQtdC00LXQvdGLINCx0LXQtyDRg9GH0LXRgtCwINCd0JTQoSDQvdCwIDExLjA3LjE4INCzLjwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezB9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QndC+0LzQtdGAPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezV9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QutCS0YI8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17M30gb25DbGljaz17c29ydEhhbmRsZXJ9PtCa0L7QvNC/0LvQtdC60YLQvdC+0YHRgtGMPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezR9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QntCx0L7Qt9C90LDRh9C10L3QuNC1L9Ci0LjQvzwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs2fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0L7QsS/QvNC40L08L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17OH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCm0LXQvdCwLNCgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRhYmxlLm1hcCgoaXRlbSwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXg9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGluZGV4PihwYWdQYWdlLTEpKnBhZ1ZhbHVlICYmIGluZGV4PD0ocGFnUGFnZSkqcGFnVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVswXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNV19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzNdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs0XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNl19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzhdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnaW5hdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcGFnaW5hdGlvbkhhbmRsZXIoJy0nKX0gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgcHJldlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnaW5hdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIHtwYWdOdW0oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcGFnaW5hdGlvbkhhbmRsZXIoJysnKX0gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgbmV4dFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYWxlQ29tcG9uZW50IiwiaW1wb3J0IGRlbGF5IGZyb20gJy4vZGVsYXknXHJcblxyXG5jb25zdCBhcnJTb3J0ID0gYXN5bmMgKGFycixrZXk9bnVsbCx0eXBlPW51bGwpID0+IHtcclxuICAgY29uc29sZS5sb2coJ2FyclNvcnREZWxheScpXHJcbiAgIGF3YWl0IGRlbGF5KDEwMDApXHJcbiAgIGlmICh0eXBlID09PSAnbnVtJykge1xyXG4gICAgICByZXR1cm4gYXJyLnNvcnQoKGEsYikgPT4gYVtrZXldIC0gYltrZXldKVxyXG4gICB9ZWxzZSB7XHJcbiAgICAgIHJldHVybiBhcnJcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcnJTb3J0Il0sInNvdXJjZVJvb3QiOiIifQ==