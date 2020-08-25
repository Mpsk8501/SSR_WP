webpackHotUpdate_N_E("pages/sale",{

/***/ "./components/SaleComponent/SaleComponent.js":
/*!***************************************************!*\
  !*** ./components/SaleComponent/SaleComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saleComponent.module.scss */ "./components/SaleComponent/saleComponent.module.scss");
/* harmony import */ var _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "H:\\forIT\\SSR_WP\\components\\SaleComponent\\SaleComponent.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SaleComponent = function SaleComponent(_ref) {
  _s();

  var motors = _ref.motors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(motors),
      table = _useState[0],
      setTable = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    num: 1,
    power: 2,
    capacity: 3,
    type: 4,
    speed: 5,
    price: 6
  }),
      sortState = _useState2[0],
      setSortState = _useState2[1];
  /*pagination*/


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      pagPage = _useState3[0],
      setPagPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(25),
      pagValue = _useState4[0],
      setPagValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Math.ceil(motors.length / pagValue)),
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


  var sortHandler = function sortHandler(e) {
    var value = e.target.value;
    console.log(value);
  };

  return __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.saleComponent,
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
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.table,
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
    value: sortState.num,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "\u041D\u043E\u043C\u0435\u0440"), __jsx("li", {
    value: sortState.power,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "\u043A\u0412\u0442"), __jsx("li", {
    value: sortState.capacity,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C"), __jsx("li", {
    value: sortState.type,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435/\u0422\u0438\u043F"), __jsx("li", {
    value: sortState.speed,
    onClick: sortHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "\u043E\u0431/\u043C\u0438\u043D"), __jsx("li", {
    value: sortState.price,
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
      //const price = item[8].split(',',2).join('')
      return __jsx("ul", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }
      }, item[0]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }
      }, item[5]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, item[3]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, item[4]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, item[6]), __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      }, item[8]));
    }
  })), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pagination,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 13
    }
  }, "prev"), __jsx("div", {
    className: _saleComponent_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paginationWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 94,
      columnNumber: 13
    }
  }, "next"))));
};

_s(SaleComponent, "IspRX0YFGmLna8q2Em6p3XILOXA=");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYWxlQ29tcG9uZW50L1NhbGVDb21wb25lbnQuanMiXSwibmFtZXMiOlsiU2FsZUNvbXBvbmVudCIsIm1vdG9ycyIsInVzZVN0YXRlIiwidGFibGUiLCJzZXRUYWJsZSIsIm51bSIsInBvd2VyIiwiY2FwYWNpdHkiLCJ0eXBlIiwic3BlZWQiLCJwcmljZSIsInNvcnRTdGF0ZSIsInNldFNvcnRTdGF0ZSIsInBhZ1BhZ2UiLCJzZXRQYWdQYWdlIiwicGFnVmFsdWUiLCJzZXRQYWdWYWx1ZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnUGFnZXMiLCJzZXRQYWdQYWdlcyIsInBhZ051bSIsImFyciIsImkiLCJidG5DbGFzcyIsInB1c2giLCJwYWdpbmF0aW9uSGFuZGxlciIsInNvcnRIYW5kbGVyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJzYWxlQ29tcG9uZW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25XcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQ0QsTUFBRCxDQURBO0FBQUEsTUFDM0JFLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9COztBQUFBLG1CQUVBRixzREFBUSxDQUFDO0FBQ3pDRyxPQUFHLEVBQUUsQ0FEb0M7QUFFekNDLFNBQUssRUFBRSxDQUZrQztBQUd6Q0MsWUFBUSxFQUFFLENBSCtCO0FBSXpDQyxRQUFJLEVBQUUsQ0FKbUM7QUFLekNDLFNBQUssRUFBRSxDQUxrQztBQU16Q0MsU0FBSyxFQUFFO0FBTmtDLEdBQUQsQ0FGUjtBQUFBLE1BRTNCQyxTQUYyQjtBQUFBLE1BRWhCQyxZ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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsSUFBSSxDQUFDLENBQUQsQ0FBVCxDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQSxJQUFJLENBQUMsQ0FBRCxDQUFULENBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtBLElBQUksQ0FBQyxDQUFELENBQVQsQ0FORixDQURKO0FBU0Q7QUFFRSxHQWpCTCxDQVZKLENBSEYsRUFrQ0U7QUFBSyxhQUFTLEVBQUVILGlFQUFPLENBQUNLLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1aLGlCQUFpQixDQUFDLEdBQUQsQ0FBdkI7QUFBQSxLQUFkO0FBQTRDLGFBQVMsRUFBQyxLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRTtBQUFLLGFBQVMsRUFBRU8saUVBQU8sQ0FBQ00saUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2xCLE1BQU0sRUFEVCxDQUpGLEVBT0U7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNSyxpQkFBaUIsQ0FBQyxHQUFELENBQXZCO0FBQUEsS0FBZDtBQUE0QyxhQUFTLEVBQUMsS0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLENBbENGLENBREYsQ0FESjtBQW1ERCxDQWxHRDs7R0FBTTNCLGE7O0tBQUFBLGE7QUFvR1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGUuMzE1YzdhNWNjMmI3MTZmYjY2MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3NhbGVDb21wb25lbnQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBTYWxlQ29tcG9uZW50ID0gKHttb3RvcnN9KSA9PiB7XHJcbiAgY29uc3QgW3RhYmxlLCBzZXRUYWJsZV0gPSB1c2VTdGF0ZShtb3RvcnMpXHJcbiAgY29uc3QgW3NvcnRTdGF0ZSwgc2V0U29ydFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIG51bTogMSxcclxuICAgIHBvd2VyOiAyLFxyXG4gICAgY2FwYWNpdHk6IDMsXHJcbiAgICB0eXBlOiA0LFxyXG4gICAgc3BlZWQ6IDUsXHJcbiAgICBwcmljZTogNlxyXG4gIH0pXHJcbiAgLypwYWdpbmF0aW9uKi9cclxuICBjb25zdCBbcGFnUGFnZSwgc2V0UGFnUGFnZV0gID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbcGFnVmFsdWUsIHNldFBhZ1ZhbHVlXSA9IHVzZVN0YXRlKDI1KVxyXG4gIGNvbnN0IFtwYWdQYWdlcywgc2V0UGFnUGFnZXNdID0gdXNlU3RhdGUoTWF0aC5jZWlsKG1vdG9ycy5sZW5ndGgvcGFnVmFsdWUpKVxyXG4gIGNvbnN0IHBhZ051bSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFyciA9W11cclxuICAgIGZvcihsZXQgaSA9IDE7IGk8PSBwYWdQYWdlczsgaSsrKXtcclxuICAgICAgbGV0IGJ0bkNsYXNzID0gJydcclxuICAgICAgaWYgKGkgPT09IHBhZ1BhZ2Upe1xyXG4gICAgICAgIGJ0bkNsYXNzID0gJ2J0bi1wYWdpbmF0aW9uLWFjdGl2ZSdcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGJ0bkNsYXNzID0gJ2J0bi1wYWdpbmF0aW9uJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcnIucHVzaChcclxuICAgICAgICAgIDxidXR0b24ga2V5PXtpfSBjbGFzc05hbWU9e2J0bkNsYXNzfT57aX08L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJcclxuICB9XHJcbiAgY29uc3QgcGFnaW5hdGlvbkhhbmRsZXIgPSAodHlwZSkgPT4ge1xyXG4gICAgaWYodHlwZT09PSctJyl7XHJcbiAgICAgIGlmKHBhZ1BhZ2U+PTIpe1xyXG4gICAgICAgIHNldFBhZ1BhZ2UocGFnUGFnZSAtIDEpXHJcbiAgICAgIH1lbHNlIHNldFBhZ1BhZ2UoMSlcclxuICAgIH1lbHNlIGlmICh0eXBlID09PSAnKycpe1xyXG4gICAgICBpZihwYWdQYWdlIDw9IHBhZ1BhZ2VzLTEpe1xyXG4gICAgICAgIHNldFBhZ1BhZ2UocGFnUGFnZSArMSlcclxuICAgICAgfWVsc2Ugc2V0UGFnUGFnZShwYWdQYWdlcylcclxuICAgIH1cclxuICB9XHJcbiAgLyplbmQgcGFnaW5hdGlvbiAqL1xyXG5cclxuICBjb25zdCBzb3J0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2FsZUNvbXBvbmVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMj7QrdC70LXQutGC0YDQvtC+0LHQvtGA0YPQtNC+0LLQsNC90LjQtSDQsiDQvdCw0LvQuNGH0LjQuDwvaDI+XHJcbiAgICAgICAgICA8aDQ+0KbQtdC90Ysg0L/RgNC40LLQtdC00LXQvdGLINCx0LXQtyDRg9GH0LXRgtCwINCd0JTQoSDQvdCwIDExLjA3LjE4INCzLjwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9e3NvcnRTdGF0ZS5udW19IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QndC+0LzQtdGAPC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9e3NvcnRTdGF0ZS5wb3dlcn0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC60JLRgjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXtzb3J0U3RhdGUuY2FwYWNpdHl9IG9uQ2xpY2s9e3NvcnRIYW5kbGVyfT7QmtC+0LzQv9C70LXQutGC0L3QvtGB0YLRjDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIHZhbHVlPXtzb3J0U3RhdGUudHlwZX0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCe0LHQvtC30L3QsNGH0LXQvdC40LUv0KLQuNC/PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9e3NvcnRTdGF0ZS5zcGVlZH0gb25DbGljaz17c29ydEhhbmRsZXJ9PtC+0LEv0LzQuNC9PC9saT5cclxuICAgICAgICAgICAgICA8bGkgdmFsdWU9e3NvcnRTdGF0ZS5wcmljZX0gb25DbGljaz17c29ydEhhbmRsZXJ9PtCm0LXQvdCwLNCgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRhYmxlLm1hcCgoaXRlbSwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXg9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGluZGV4PihwYWdQYWdlLTEpKnBhZ1ZhbHVlICYmIGluZGV4PD0ocGFnUGFnZSkqcGFnVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnN0IHByaWNlID0gaXRlbVs4XS5zcGxpdCgnLCcsMikuam9pbignJylcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bMF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzVdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVszXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2l0ZW1bNF19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpdGVtWzZdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aXRlbVs4XX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCctJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIHByZXZcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICB7cGFnTnVtKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBhZ2luYXRpb25IYW5kbGVyKCcrJyl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgIG5leHRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FsZUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=