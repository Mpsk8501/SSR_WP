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
              console.log(Object(_helpers_arrSort__WEBPACK_IMPORTED_MODULE_4__["default"])(table));
              setSortBlock(false);

            case 7:
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiXSwibmFtZXMiOlsiU2FsZUNvbXBvbmVudCIsIm1vdG9ycyIsInVzZVN0YXRlIiwidGFibGUiLCJzZXRUYWJsZSIsInNvcnRCbG9jayIsInNldFNvcnRCbG9jayIsIm51bSIsInBvd2VyIiwiY2FwYWNpdHkiLCJ0eXBlIiwic3BlZWQiLCJwcmljZSIsInNvcnRTdGF0ZSIsInNldFNvcnRTdGF0ZSIsInBhZ1BhZ2UiLCJzZXRQYWdQYWdlIiwicGFnVmFsdWUiLCJzZXRQYWdWYWx1ZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnUGFnZXMiLCJzZXRQYWdQYWdlcyIsInBhZ051bSIsImFyciIsImkiLCJidG5DbGFzcyIsInB1c2giLCJwYWdpbmF0aW9uSGFuZGxlciIsInNvcnRIYW5kbGVyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImFyclNvcnQiLCJjbGFzc2VzIiwic2FsZUNvbXBvbmVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUNELE1BQUQsQ0FEQTtBQUFBLE1BQzNCRSxLQUQyQjtBQUFBLE1BQ3BCQyxRQURvQjs7QUFBQSxtQkFFQUYsc0RBQVEsQ0FBQyxLQUFELENBRlI7QUFBQSxNQUUzQkcsU0FGMkI7QUFBQSxNQUVoQkMsWUFGZ0I7O0FBQUEsbUJBR0FKLHNEQUFRLENBQUM7QUFDekNLLE9BQUcsRUFBRSxDQURvQztBQUV6Q0MsU0FBSyxFQUFFLENBRmtDO0FBR3pDQyxZQUFRLEVB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QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLENBakNGLENBREYsQ0FESjtBQWtERCxDQXpHRDs7R0FBTTdCLGE7O0tBQUFBLGE7QUEyR1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGUuZTBiNWViMzEyZTFjMmNmY2ZjMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3NhbGVDb21wb25lbnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBhcnJTb3J0IGZyb20gJy4uLy4uL2hlbHBlcnMvYXJyU29ydCdcclxuXHJcbmNvbnN0IFNhbGVDb21wb25lbnQgPSAoe21vdG9yc30pID0+IHtcclxuICBjb25zdCBbdGFibGUsIHNldFRhYmxlXSA9IHVzZVN0YXRlKG1vdG9ycylcclxuICBjb25zdCBbc29ydEJsb2NrLCBzZXRTb3J0QmxvY2tdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NvcnRTdGF0ZSwgc2V0U29ydFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIG51bTogMCxcclxuICAgIHBvd2VyOiAwLFxyXG4gICAgY2FwYWNpdHk6IDAsXHJcbiAgICB0eXBlOiAwLFxyXG4gICAgc3BlZWQ6IDAsXHJcbiAgICBwcmljZTogMFxyXG4gIH0pXHJcbiAgLypwYWdpbmF0aW9uKi9cclxuICBjb25zdCBbcGFnUGFnZSwgc2V0UGFnUGFnZV0gID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbcGFnVmFsdWUsIHNldFBhZ1ZhbHVlXSA9IHVzZVN0YXRlKDI1KVxyXG4gIGNvbnN0IFtwYWdQYWdlcywgc2V0UGFnUGFnZXNdID0gdXNlU3RhdGUoTWF0aC5jZWlsKG1vdG9ycy5sZW5ndGgvcGFnVmFsdWUpKVxyXG4gIGNvbnN0IHBhZ051bSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFyciA9W11cclxuICAgIGZvcihsZXQgaSA9IDE7IGk8PSBwYWdQYWdlczsgaSsrKXtcclxuICAgICAgbGV0IGJ0bkNsYXNzID0gJydcclxuICAgICAgaWYgKGkgPT09IHBhZ1BhZ2Upe1xyXG4gICAgICAgIGJ0bkNsYXNzID0gJ2J0bi1wYWdpbmF0aW9uLWFjdGl2ZSdcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGJ0bkNsYXNzID0gJ2J0bi1wYWdpbmF0aW9uJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcnIucHVzaChcclxuICAgICAgICAgIDxidXR0b24ga2V5PXtpfSBjbGFzc05hbWU9e2J0bkNsYXNzfT57aX08L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJcclxuICB9XHJcbiAgY29uc3QgcGFnaW5hdGlvbkhhbmRsZXIgPSAodHlwZSkgPT4ge1xyXG4gICAgaWYodHlwZT09PSctJyl7XHJcbiAgICAgIGlmKHBhZ1BhZ2U+PTIpe1xyXG4gICAgICAgIHNldFBhZ1BhZ2UocGFnUGFnZSAtIDEpXHJcbiAgICAgIH1lbHNlIHNldFBhZ1BhZ2UoMSlcclxuICAgIH1lbHNlIGlmICh0eXBlID09PSAnKycpe1xyXG4gICAgICBpZihwYWdQYWdlIDw9IHBhZ1BhZ2VzLTEpe1xyXG4gICAgICAgIHNldFBhZ1BhZ2UocGFnUGFnZSArMSlcclxuICAgICAgfWVsc2Ugc2V0UGFnUGFnZShwYWdQYWdlcylcclxuICAgIH1cclxuICB9XHJcbiAgLyplbmQgcGFnaW5hdGlvbiAqL1xyXG5cclxuICBjb25zdCBzb3J0SGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBpZihzb3J0QmxvY2spe1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgc2V0U29ydEJsb2NrKHRydWUpXHJcbiAgICBjb25zb2xlLmxvZyhhcnJTb3J0KHRhYmxlKSlcclxuICAgIHNldFNvcnRCbG9jayhmYWxzZSlcclxuXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNhbGVDb21wb25lbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDI+0K3Qu9C10LrRgtGA0L7QvtCx0L7RgNGD0LTQvtCy0LDQvdC40LUg0LIg0L3QsNC70LjRh9C40Lg8L2gyPlxyXG4gICAgICAgICAgPGg0PtCm0LXQvdGLINC/0YDQuNCy0LXQtNC10L3RiyDQsdC10Lcg0YPRh9C10YLQsCDQndCU0KEg0L3QsCAxMS4wNy4xOCDQsy48L2g0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXswfSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0J3QvtC80LXRgDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs1fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0LrQktGCPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezN9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QmtC+0LzQv9C70LXQutGC0L3QvtGB0YLRjDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXs0fSBvbkNsaWNrPXtzb3J0SGFuZGxlcn0+0J7QsdC+0LfQvdCw0YfQtdC90LjQtS/QotC40L88L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSB2YWx1ZT17Nn0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC+0LEv0LzQuNC9PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9ezh9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QptC10L3QsCzQoDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0YWJsZS5tYXAoKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4PT09MCl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD4ocGFnUGFnZS0xKSpwYWdWYWx1ZSAmJiBpbmRleDw9KHBhZ1BhZ2UpKnBhZ1ZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzVdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVszXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzZdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs4XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCctJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIHByZXZcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICB7cGFnTnVtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCcrJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIG5leHRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FsZUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=