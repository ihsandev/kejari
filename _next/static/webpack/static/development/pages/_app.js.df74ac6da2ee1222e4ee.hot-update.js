webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/pageLayouts/partials/header/partials/headerOne.jsx":
/*!***********************************************************************!*\
  !*** ./components/pageLayouts/partials/header/partials/headerOne.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");
/* harmony import */ var Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Routes */ "./config/routes.js");
/* harmony import */ var Routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

 // import Link from "next/link";





var HeaderOne = function HeaderOne() {
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("background-color:#fff;border-bottom:2px solid rgba(0,0,0,0.1);.wrapper{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:35px;justify-items:stretch;align-items:center;a{display:block;text-decoration:none;color:red;}div:nth-child(2){justify-self:center;position:relative;.wrapLogo{width:140px;height:140px;border-radius:50%;position:absolute;background-color:#fff;box-shadow:0px 7px 0px -5px rgba(0,0,0,0.1);top:-2.7em;left:-4.5em;z-index:3;display:grid;justify-items:center;align-items:center;img{width:65%;}}}div:nth-child(3){justify-self:end;img{float:left;width:25px;margin-top:-2px;}a{float:left;}}}@media (max-width:700px){display:none;a{margin-left:10px;font-size:10px !important;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxoZWFkZXJPbmUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU91QiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxrZWphcmlcXGNvbXBvbmVudHNcXHBhZ2VMYXlvdXRzXFxwYXJ0aWFsc1xcaGVhZGVyXFxwYXJ0aWFsc1xcaGVhZGVyT25lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCJyZWFjdGlzbS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIlJvdXRlc1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBIZWFkZXJPbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzVweDtcclxuICAgICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC53cmFwTG9nbyB7XHJcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgdG9wOiAtMi43ZW07XHJcbiAgICAgICAgICBsZWZ0OiAtNC41ZW07XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyogJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICB9ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgYSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2Jhc2VTdHlsZX0+XHJcbiAgICAgIDxXcmFwcGVyIHBsPXs3fSBwcj17N30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgICAgICA8YT5LRUpBUkkgQkFSUlU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcExvZ29cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nb19rZWphcmlfY29sb3Iuc3ZnXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbi9pY19odWJ1bmdpX2thbWkuc3ZnXCIgYWx0PVwiaWNvbiBjb250YWN0XCIgLz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgIDxhPkhVQlVOR0kgS0FNSTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlck9uZSk7XHJcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    pl: 7,
    pr: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "KEJARI BARRU"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapLogo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo_kejari_color.svg",
    alt: "logo"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/ic_hubungi_kami.svg",
    alt: "icon contact"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "HUBUNGI KAMI"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(HeaderOne));

/***/ })

})
//# sourceMappingURL=_app.js.df74ac6da2ee1222e4ee.hot-update.js.map