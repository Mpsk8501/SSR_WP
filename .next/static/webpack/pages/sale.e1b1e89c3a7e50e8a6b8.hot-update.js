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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    num: 0,
    power: 0,
    capacity: 0,
    type: 0,
    speed: 0,
    price: 0
  }),
      sortState = _useState2[0],
      setSortState = _useState2[1];
  /*pagination*/


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      pagPage = _useState3[0],
      setPagPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(25),
      pagValue = _useState4[0],
      setPagValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Math.ceil(motors.length / pagValue)),
      pagPages = _useState5[0],
      setPagPages = _useState5[1];

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
          lineNumber: 29,
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
              value = e.target.value;
              console.log(value);

            case 2:
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
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\u0426\u0435\u043D\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u044B \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u041D\u0414\u0421 \u043D\u0430 11.07.18 \u0433."), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("li", {
    value: 0,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "\u041D\u043E\u043C\u0435\u0440"), __jsx("li", {
    value: 5,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "\u043A\u0412\u0442"), __jsx("li", {
    value: 3,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C"), __jsx("li", {
    value: 4,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435/\u0422\u0438\u043F"), __jsx("li", {
    value: 6,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "\u043E\u0431/\u043C\u0438\u043D"), __jsx("li", {
    value: 8,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
          lineNumber: 72,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }, item[0]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }
      }, item[5]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }
      }, item[3]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, item[4]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, item[6]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, item[8]));
    }
  })), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pagination,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
      columnNumber: 13
    }
  }, "prev"), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.paginationWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 93,
      columnNumber: 13
    }
  }, "next"))));
};

_s(SaleComponent, "5kceqCaWdbZCGDVheR2OiaInobs=");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiXSwibmFtZXMiOlsiU2FsZUNvbXBvbmVudCIsIm1vdG9ycyIsInVzZVN0YXRlIiwidGFibGUiLCJzZXRUYWJsZSIsIm51bSIsInBvd2VyIiwiY2FwYWNpdHkiLCJ0eXBlIiwic3BlZWQiLCJwcmljZSIsInNvcnRTdGF0ZSIsInNldFNvcnRTdGF0ZSIsInBhZ1BhZ2UiLCJzZXRQYWdQYWdlIiwicGFnVmFsdWUiLCJzZXRQYWdWYWx1ZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnUGFnZXMiLCJzZXRQYWdQYWdlcyIsInBhZ051bSIsImFyciIsImkiLCJidG5DbGFzcyIsInB1c2giLCJwYWdpbmF0aW9uSGFuZGxlciIsInNvcnRIYW5kbGVyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJzYWxlQ29tcG9uZW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25XcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQ0QsTUFBRCxDQURBO0FBQUEsTUFDM0JFLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9COztBQUFBLG1CQUVBRixzREFBUSxDQUFDO0FBQ3pDRyxPQUFHLEVBQUUsQ0FEb0M7QUFF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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbENBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlLmUxYjFlODljM2E3ZTUwZThhNmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zYWxlQ29tcG9uZW50Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgU2FsZUNvbXBvbmVudCA9ICh7bW90b3JzfSkgPT4ge1xyXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUobW90b3JzKVxyXG4gIGNvbnN0IFtzb3J0U3RhdGUsIHNldFNvcnRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBudW06IDAsXHJcbiAgICBwb3dlcjogMCxcclxuICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgdHlwZTogMCxcclxuICAgIHNwZWVkOiAwLFxyXG4gICAgcHJpY2U6IDBcclxuICB9KVxyXG4gIC8qcGFnaW5hdGlvbiovXHJcbiAgY29uc3QgW3BhZ1BhZ2UsIHNldFBhZ1BhZ2VdICA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW3BhZ1ZhbHVlLCBzZXRQYWdWYWx1ZV0gPSB1c2VTdGF0ZSgyNSlcclxuICBjb25zdCBbcGFnUGFnZXMsIHNldFBhZ1BhZ2VzXSA9IHVzZVN0YXRlKE1hdGguY2VpbChtb3RvcnMubGVuZ3RoL3BhZ1ZhbHVlKSlcclxuICBjb25zdCBwYWdOdW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcnIgPVtdXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpPD0gcGFnUGFnZXM7IGkrKyl7XHJcbiAgICAgIGxldCBidG5DbGFzcyA9ICcnXHJcbiAgICAgIGlmIChpID09PSBwYWdQYWdlKXtcclxuICAgICAgICBidG5DbGFzcyA9ICdidG4tcGFnaW5hdGlvbi1hY3RpdmUnXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBidG5DbGFzcyA9ICdidG4tcGFnaW5hdGlvbidcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJyLnB1c2goXHJcbiAgICAgICAgICA8YnV0dG9uIGtleT17aX0gY2xhc3NOYW1lPXtidG5DbGFzc30+e2l9PC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgfVxyXG4gIGNvbnN0IHBhZ2luYXRpb25IYW5kbGVyID0gKHR5cGUpID0+IHtcclxuICAgIGlmKHR5cGU9PT0nLScpe1xyXG4gICAgICBpZihwYWdQYWdlPj0yKXtcclxuICAgICAgICBzZXRQYWdQYWdlKHBhZ1BhZ2UgLSAxKVxyXG4gICAgICB9ZWxzZSBzZXRQYWdQYWdlKDEpXHJcbiAgICB9ZWxzZSBpZiAodHlwZSA9PT0gJysnKXtcclxuICAgICAgaWYocGFnUGFnZSA8PSBwYWdQYWdlcy0xKXtcclxuICAgICAgICBzZXRQYWdQYWdlKHBhZ1BhZ2UgKzEpXHJcbiAgICAgIH1lbHNlIHNldFBhZ1BhZ2UocGFnUGFnZXMpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qZW5kIHBhZ2luYXRpb24gKi9cclxuXHJcbiAgY29uc3Qgc29ydEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNhbGVDb21wb25lbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDI+0K3Qu9C10LrRgtGA0L7QvtCx0L7RgNGD0LTQvtCy0LDQvdC40LUg0LIg0L3QsNC70LjRh9C40Lg8L2gyPlxyXG4gICAgICAgICAgPGg0PtCm0LXQvdGLINC/0YDQuNCy0LXQtNC10L3RiyDQsdC10Lcg0YPRh9C10YLQsCDQndCU0KEg0L3QsCAxMS4wNy4xOCDQsy48L2g0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXswfSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0J3QvtC80LXRgDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs1fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0LrQktGCPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezN9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QmtC+0LzQv9C70LXQutGC0L3QvtGB0YLRjDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs0fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0J7QsdC+0LfQvdCw0YfQtdC90LjQtS/QotC40L88L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17Nn0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC+0LEv0LzQuNC9PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezh9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QptC10L3QsCzQoDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0YWJsZS5tYXAoKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4PT09MCl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD4ocGFnUGFnZS0xKSpwYWdWYWx1ZSAmJiBpbmRleDw9KHBhZ1BhZ2UpKnBhZ1ZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzVdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVszXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzZdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs4XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCctJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIHByZXZcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICB7cGFnTnVtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCcrJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIG5leHRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FsZUNvbXBvbmVudCIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9