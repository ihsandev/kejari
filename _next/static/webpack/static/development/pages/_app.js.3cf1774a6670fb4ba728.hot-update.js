webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/elements/loadingPage/index.jsx":
/*!***************************************************!*\
  !*** ./components/elements/loadingPage/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/utils */ "./components/utilities/index.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-bar */ "./node_modules/react-loading-bar/dist/index.js");
/* harmony import */ var react_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loading_bar_dist_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-bar/dist/index.css */ "./node_modules/react-loading-bar/dist/index.css");
/* harmony import */ var react_loading_bar_dist_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_bar_dist_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var LoadingPage = function LoadingPage(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', function () {
      setShow(true);
    });
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeComplete', function () {
      setShow(false);
    });
  }, [router]);
  var style =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".Loading__bar___21yOt{z-index:9999999999999;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcZWxlbWVudHNcXGxvYWRpbmdQYWdlXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJtQiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxrZWphcmlcXGNvbXBvbmVudHNcXGVsZW1lbnRzXFxsb2FkaW5nUGFnZVxcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJ1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3JlYWN0aXNtL3V0aWxzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nLWJhcidcclxuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLWJhci9kaXN0L2luZGV4LmNzcydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgTG9hZGluZ1BhZ2UgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IHtcclxuICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgfSlcclxuXHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4ge1xyXG4gICAgICBzZXRTaG93KGZhbHNlKVxyXG4gICAgfSlcclxuICB9LCBbcm91dGVyXSlcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAuTG9hZGluZ19fYmFyX19fMjF5T3Qge1xyXG4gICAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5O1xyXG4gICAgfVxyXG4gIGBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGUgfT5cclxuICAgICAgPExvYWRpbmdcclxuICAgICAgICBzaG93PXsgc2hvdyB9XHJcbiAgICAgICAgY29sb3I9eyBDb2xvci5zdWNjZXNzIH1cclxuICAgICAgICBzaG93U3Bpbm5lcj17IGZhbHNlIH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuTG9hZGluZ1BhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUGFnZVxyXG4iXX0= */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_bar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    show: show,
    color: reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success,
    showSpinner: false
  }));
};

LoadingPage.propTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingPage);

/***/ })

})
//# sourceMappingURL=_app.js.3cf1774a6670fb4ba728.hot-update.js.map