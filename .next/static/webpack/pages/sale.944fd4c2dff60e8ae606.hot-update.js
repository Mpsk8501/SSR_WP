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
      var value, sortType, sortedTable;
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
              sortType = value === 0 || 5 || 6 || 8 ? 'num' : 'str';
              _context.next = 12;
              return Object(_helpers_arrSort__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(table), value, 'num');

            case 12:
              sortedTable = _context.sent;
              setSortState(_objectSpread(_objectSpread({}, sortState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, value, 1)));
              setTable(sortedTable);
              setSortBlock(false);

            case 16:
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
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "\u0426\u0435\u043D\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u044B \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u041D\u0414\u0421 \u043D\u0430 11.07.18 \u0433."), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("li", {
    value: 0,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "\u041D\u043E\u043C\u0435\u0440"), __jsx("li", {
    value: 5,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "\u043A\u0412\u0442"), __jsx("li", {
    value: 3,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C"), __jsx("li", {
    value: 4,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435/\u0422\u0438\u043F"), __jsx("li", {
    value: 6,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "\u043E\u0431/\u043C\u0438\u043D"), __jsx("li", {
    value: 8,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
          lineNumber: 89,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }, item[0]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }
      }, item[5]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }
      }, item[3]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }
      }, item[4]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }
      }, item[6]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }
      }, item[8]));
    }
  })), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.pagination,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 13
    }
  }, "prev"), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.paginationWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 110,
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
            _context.next = 4;
            return Object(_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(100);

          case 4:
            if (!(type === 'num')) {
              _context.next = 9;
              break;
            }

            console.log('arrSortDelayNum');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlcnMvYXJyU29ydC5qcyJdLCJuYW1lcyI6WyJTYWxlQ29tcG9uZW50IiwibW90b3JzIiwidXNlU3RhdGUiLCJ0YWJsZSIsInNldFRhYmxlIiwic29ydEJsb2NrIiwic2V0U29ydEJsb2NrIiwic29ydFN0YXRlIiwic2V0U29ydFN0YXRlIiwicGFnUGFnZSIsInNldFBhZ1BhZ2UiLCJwYWdWYWx1ZSIsInNldFBhZ1ZhbHVlIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdQYWdlcyIsInNldFBhZ1BhZ2VzIiwicGFnTnVtIiwiYXJyIiwiaSIsImJ0bkNsYXNzIiwicHVzaCIsInBhZ2luYXRpb25IYW5kbGVyIiwidHlwZSIsInNvcnRIYW5kbGVyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicmV2ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJzb3J0VHlwZSIsImFyclNvcnQiLCJzb3J0ZWRUYWJsZSIsImNsYXNzZXMiLCJzYWxlQ29tcG9uZW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25XcmFwcGVyIiwia2V5IiwiZGVsYXkiLCJzb3J0IiwiYSIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDRCxNQUFELENBREE7QUFBQSxNQUMzQkUsS0FEMkI7QUFBQSxNQUNwQkMsUUFEb0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFM0JHLFNBRjJCO0FBQUEsTUFFaEJDLFlBRmdCOztBQUFBLG1CQUdBSixz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R0FBU0ksQ0FBQyxDQUFDSixHQUFELENBQW5CO0FBQUEsYUFBVCxDQUxHOztBQUFBO0FBQUEsNkNBT0h2QixHQVBHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBjLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFXZUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZS45NDRmZDRjMmRmZjYwZThhZTYwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc2FsZUNvbXBvbmVudC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGFyclNvcnQgZnJvbSAnLi4vLi4vaGVscGVycy9hcnJTb3J0J1xyXG5cclxuY29uc3QgU2FsZUNvbXBvbmVudCA9ICh7bW90b3JzfSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUobW90b3JzKVxyXG4gIGNvbnN0IFtzb3J0QmxvY2ssIHNldFNvcnRCbG9ja10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc29ydFN0YXRlLCBzZXRTb3J0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgMDogMCxcclxuICAgIDU6IDAsXHJcbiAgICAzOiAwLFxyXG4gICAgNDogMCxcclxuICAgIDY6IDAsXHJcbiAgICA4OiAwXHJcbiAgfSlcclxuICAvKnBhZ2luYXRpb24qL1xyXG4gIGNvbnN0IFtwYWdQYWdlLCBzZXRQYWdQYWdlXSAgPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtwYWdWYWx1ZSwgc2V0UGFnVmFsdWVdID0gdXNlU3RhdGUoMjUpXHJcbiAgY29uc3QgW3BhZ1BhZ2VzLCBzZXRQYWdQYWdlc10gPSB1c2VTdGF0ZShNYXRoLmNlaWwobW90b3JzLmxlbmd0aC9wYWdWYWx1ZSkpXHJcbiAgY29uc3QgcGFnTnVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJyID1bXVxyXG4gICAgZm9yKGxldCBpID0gMTsgaTw9IHBhZ1BhZ2VzOyBpKyspe1xyXG4gICAgICBsZXQgYnRuQ2xhc3MgPSAnJ1xyXG4gICAgICBpZiAoaSA9PT0gcGFnUGFnZSl7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24tYWN0aXZlJ1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24nXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyci5wdXNoKFxyXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IGNsYXNzTmFtZT17YnRuQ2xhc3N9PntpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxuICBjb25zdCBwYWdpbmF0aW9uSGFuZGxlciA9ICh0eXBlKSA9PiB7XHJcbiAgICBpZih0eXBlPT09Jy0nKXtcclxuICAgICAgaWYocGFnUGFnZT49Mil7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlIC0gMSlcclxuICAgICAgfWVsc2Ugc2V0UGFnUGFnZSgxKVxyXG4gICAgfWVsc2UgaWYgKHR5cGUgPT09ICcrJyl7XHJcbiAgICAgIGlmKHBhZ1BhZ2UgPD0gcGFnUGFnZXMtMSl7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlICsxKVxyXG4gICAgICB9ZWxzZSBzZXRQYWdQYWdlKHBhZ1BhZ2VzKVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmVuZCBwYWdpbmF0aW9uICovXHJcblxyXG4gIGNvbnN0IHNvcnRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGlmKHNvcnRCbG9jayl7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U29ydEJsb2NrKHRydWUpXHJcbiAgICBpZihzb3J0U3RhdGVbdmFsdWVdKXtcclxuICAgICAgc2V0VGFibGUoWy4uLnRhYmxlXS5yZXZlcnNlKCkpXHJcbiAgICAgIHNldFNvcnRCbG9jayhmYWxzZSlcclxuICAgICAgY29uc29sZS5sb2coJ3NvcnQnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHNvcnRUeXBlID0gdmFsdWUgPT09IDB8fDV8fDZ8fDggPyAnbnVtJyA6ICdzdHInXHJcbiAgICBjb25zdCBzb3J0ZWRUYWJsZSA9IGF3YWl0IGFyclNvcnQoWy4uLnRhYmxlXSx2YWx1ZSwnbnVtJylcclxuICAgIHNldFNvcnRTdGF0ZSh7Li4uc29ydFN0YXRlLFt2YWx1ZV06MX0pXHJcbiAgICBzZXRUYWJsZShzb3J0ZWRUYWJsZSlcclxuICAgIHNldFNvcnRCbG9jayhmYWxzZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNhbGVDb21wb25lbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDI+0K3Qu9C10LrRgtGA0L7QvtCx0L7RgNGD0LTQvtCy0LDQvdC40LUg0LIg0L3QsNC70LjRh9C40Lg8L2gyPlxyXG4gICAgICAgICAgPGg0PtCm0LXQvdGLINC/0YDQuNCy0LXQtNC10L3RiyDQsdC10Lcg0YPRh9C10YLQsCDQndCU0KEg0L3QsCAxMS4wNy4xOCDQsy48L2g0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXswfSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0J3QvtC80LXRgDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs1fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0LrQktGCPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezN9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QmtC+0LzQv9C70LXQutGC0L3QvtGB0YLRjDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs0fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0J7QsdC+0LfQvdCw0YfQtdC90LjQtS/QotC40L88L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17Nn0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC+0LEv0LzQuNC9PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezh9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QptC10L3QsCzQoDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0YWJsZS5tYXAoKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4PT09MCl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD4ocGFnUGFnZS0xKSpwYWdWYWx1ZSAmJiBpbmRleDw9KHBhZ1BhZ2UpKnBhZ1ZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzVdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVszXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzZdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs4XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCctJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIHByZXZcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICB7cGFnTnVtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCcrJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIG5leHRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FsZUNvbXBvbmVudCIsImltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5J1xyXG5cclxuY29uc3QgYXJyU29ydCA9IGFzeW5jIChhcnIsa2V5PW51bGwsdHlwZT1udWxsKSA9PiB7XHJcblxyXG4gICBhd2FpdCBkZWxheSgxMDApXHJcbiAgIGlmICh0eXBlID09PSAnbnVtJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnYXJyU29ydERlbGF5TnVtJylcclxuICAgICAgcmV0dXJuIGFyci5zb3J0KChhLGIpID0+IGFba2V5XSAtIGJba2V5XSlcclxuICAgfWVsc2Uge1xyXG4gICAgICByZXR1cm4gYXJyXHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJyU29ydCJdLCJzb3VyY2VSb290IjoiIn0=