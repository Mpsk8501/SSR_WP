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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saleComponent.module.scss */ "./components/SaleComponent/saleComponent.module.scss");
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_arrSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/arrSort */ "./helpers/arrSort.js");




var _this = undefined,
    _jsxFileName = "H:\\forIT\\SSR_WP\\components\\SaleComponent\\SaleComponent.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var SaleComponent = function SaleComponent(_ref) {
  _s();

  var motors = _ref.motors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(motors),
      table = _useState[0],
      setTable = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      sortBlock = _useState2[0],
      setSortBlock = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
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


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      pagPage = _useState4[0],
      setPagPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(25),
      pagValue = _useState5[0],
      setPagValue = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Math.ceil(motors.length / pagValue)),
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
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
              setSortBlock(true);

              if (setSortState[value]) {
                setTable(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(table).reverse());
                setSortBlock(false);
              }

              console.log(value);
              /* const sortedTable = await arrSort([...table],value)
               setTable(sortedTable)
               setSortBlock(false)*/

            case 6:
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
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.saleComponent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "\u0426\u0435\u043D\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u044B \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u041D\u0414\u0421 \u043D\u0430 11.07.18 \u0433."), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("li", {
    value: 0,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "\u041D\u043E\u043C\u0435\u0440"), __jsx("li", {
    value: 5,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "\u043A\u0412\u0442"), __jsx("li", {
    value: 3,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C"), __jsx("li", {
    value: 4,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435/\u0422\u0438\u043F"), __jsx("li", {
    value: 6,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "\u043E\u0431/\u043C\u0438\u043D"), __jsx("li", {
    value: 8,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
          lineNumber: 86,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }, item[0]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }
      }, item[5]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }
      }, item[3]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }, item[4]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }
      }, item[6]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }
      }, item[8]));
    }
  })), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.pagination,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 13
    }
  }, "prev"), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.paginationWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiXSwibmFtZXMiOlsiU2FsZUNvbXBvbmVudCIsIm1vdG9ycyIsInVzZVN0YXRlIiwidGFibGUiLCJzZXRUYWJsZSIsInNvcnRCbG9jayIsInNldFNvcnRCbG9jayIsInNvcnRTdGF0ZSIsInNldFNvcnRTdGF0ZSIsInBhZ1BhZ2UiLCJzZXRQYWdQYWdlIiwicGFnVmFsdWUiLCJzZXRQYWdWYWx1ZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnUGFnZXMiLCJzZXRQYWdQYWdlcyIsInBhZ051bSIsImFyciIsImkiLCJidG5DbGFzcyIsInB1c2giLCJwYWdpbmF0aW9uSGFuZGxlciIsInR5cGUiLCJzb3J0SGFuZGxlciIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInJldmVyc2UiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInNhbGVDb21wb25lbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUNELE1BQUQsQ0FEQTtBQUFBLE1BQzNCRSxLQUQyQjtBQUFBLE1BQ3BCQyxRQURvQjs7QUFBQSxtQkFFQUYsc0RBQVEsQ0FBQyxLQUFELENBRlI7QUFBQSxNQUUzQkcsU0FGMkI7QUFBQSxNQUVoQkMsWUFGZ0I7O0FBQUEsbUJBR0FKLHNEQUFRLENBQUM7QUFDekMsT0FBRyxDQURzQztBQUV6QyxPQUFHLENBRnNDO0FBR3pDLE9BQUcsQ0FIc0M7QUFJekMsT0FBRyxDQUpzQztBQUt6QyxPQUFHLENBTHNDO0FBTXpDLE9BQUc7QUFO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Q0FqQ0YsQ0FERixDQURKO0FBa0RELENBOUdEOztHQUFNdkIsYTs7S0FBQUEsYTtBQWdIU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZS43MzcyZDkyNzQ2ZGU3MWZjM2E1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc2FsZUNvbXBvbmVudC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGFyclNvcnQgZnJvbSAnLi4vLi4vaGVscGVycy9hcnJTb3J0J1xyXG5cclxuY29uc3QgU2FsZUNvbXBvbmVudCA9ICh7bW90b3JzfSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUobW90b3JzKVxyXG4gIGNvbnN0IFtzb3J0QmxvY2ssIHNldFNvcnRCbG9ja10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc29ydFN0YXRlLCBzZXRTb3J0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgMDogMCxcclxuICAgIDU6IDAsXHJcbiAgICAzOiAwLFxyXG4gICAgNDogMCxcclxuICAgIDY6IDAsXHJcbiAgICA4OiAwXHJcbiAgfSlcclxuICAvKnBhZ2luYXRpb24qL1xyXG4gIGNvbnN0IFtwYWdQYWdlLCBzZXRQYWdQYWdlXSAgPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtwYWdWYWx1ZSwgc2V0UGFnVmFsdWVdID0gdXNlU3RhdGUoMjUpXHJcbiAgY29uc3QgW3BhZ1BhZ2VzLCBzZXRQYWdQYWdlc10gPSB1c2VTdGF0ZShNYXRoLmNlaWwobW90b3JzLmxlbmd0aC9wYWdWYWx1ZSkpXHJcbiAgY29uc3QgcGFnTnVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJyID1bXVxyXG4gICAgZm9yKGxldCBpID0gMTsgaTw9IHBhZ1BhZ2VzOyBpKyspe1xyXG4gICAgICBsZXQgYnRuQ2xhc3MgPSAnJ1xyXG4gICAgICBpZiAoaSA9PT0gcGFnUGFnZSl7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24tYWN0aXZlJ1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgYnRuQ2xhc3MgPSAnYnRuLXBhZ2luYXRpb24nXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyci5wdXNoKFxyXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IGNsYXNzTmFtZT17YnRuQ2xhc3N9PntpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxuICBjb25zdCBwYWdpbmF0aW9uSGFuZGxlciA9ICh0eXBlKSA9PiB7XHJcbiAgICBpZih0eXBlPT09Jy0nKXtcclxuICAgICAgaWYocGFnUGFnZT49Mil7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlIC0gMSlcclxuICAgICAgfWVsc2Ugc2V0UGFnUGFnZSgxKVxyXG4gICAgfWVsc2UgaWYgKHR5cGUgPT09ICcrJyl7XHJcbiAgICAgIGlmKHBhZ1BhZ2UgPD0gcGFnUGFnZXMtMSl7XHJcbiAgICAgICAgc2V0UGFnUGFnZShwYWdQYWdlICsxKVxyXG4gICAgICB9ZWxzZSBzZXRQYWdQYWdlKHBhZ1BhZ2VzKVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmVuZCBwYWdpbmF0aW9uICovXHJcblxyXG4gIGNvbnN0IHNvcnRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGlmKHNvcnRCbG9jayl7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U29ydEJsb2NrKHRydWUpXHJcbiAgICBpZihzZXRTb3J0U3RhdGVbdmFsdWVdKXtcclxuICAgICAgc2V0VGFibGUoWy4uLnRhYmxlXS5yZXZlcnNlKCkpXHJcbiAgICAgIHNldFNvcnRCbG9jayhmYWxzZSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAvKiBjb25zdCBzb3J0ZWRUYWJsZSA9IGF3YWl0IGFyclNvcnQoWy4uLnRhYmxlXSx2YWx1ZSlcclxuICAgIHNldFRhYmxlKHNvcnRlZFRhYmxlKVxyXG4gICAgc2V0U29ydEJsb2NrKGZhbHNlKSovXHJcblxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zYWxlQ29tcG9uZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyPtCt0LvQtdC60YLRgNC+0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1INCyINC90LDQu9C40YfQuNC4PC9oMj5cclxuICAgICAgICAgIDxoND7QptC10L3RiyDQv9GA0LjQstC10LTQtdC90Ysg0LHQtdC3INGD0YfQtdGC0LAg0J3QlNChINC90LAgMTEuMDcuMTgg0LMuPC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17MH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCd0L7QvNC10YA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17NX0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC60JLRgjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXszfSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0JrQvtC80L/Qu9C10LrRgtC90L7RgdGC0Yw8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17NH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCe0LHQvtC30L3QsNGH0LXQvdC40LUv0KLQuNC/PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezZ9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QvtCxL9C80LjQvTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs4fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0KbQtdC90LAs0KA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGFibGUubWFwKChpdGVtLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD09PTApe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXg+KHBhZ1BhZ2UtMSkqcGFnVmFsdWUgJiYgaW5kZXg8PShwYWdQYWdlKSpwYWdWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzBdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs1XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bM119PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzRdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs2XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bOF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0aW9uSGFuZGxlcignLScpfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICBwcmV2XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAge3BhZ051bSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0aW9uSGFuZGxlcignKycpfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICBuZXh0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9