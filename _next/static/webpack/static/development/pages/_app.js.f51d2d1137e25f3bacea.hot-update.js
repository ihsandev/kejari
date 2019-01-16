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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("background-color:#fff;border-bottom:2px solid rgba(0,0,0,0.1);.wrapper{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:35px;justify-items:stretch;align-items:center;a{display:block;text-decoration:none;color:#000;margin-left:10px;font-size:1em;}div:nth-child(2){justify-self:center;position:relative;.wrapLogo{width:140px;height:140px;border-radius:50%;position:absolute;background-color:#fff;box-shadow:0px 7px 0px -5px rgba(0,0,0,0.1);top:-2.7em;left:-4.5em;z-index:3;display:grid;justify-items:center;align-items:center;img{width:65%;}}}div:nth-child(3){justify-self:end;img{float:left;width:25px;margin-top:-2px;}a{float:left;}}}@media (max-width:700px){display:none;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxoZWFkZXJPbmUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU91QiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxrZWphcmlcXGNvbXBvbmVudHNcXHBhZ2VMYXlvdXRzXFxwYXJ0aWFsc1xcaGVhZGVyXFxwYXJ0aWFsc1xcaGVhZGVyT25lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCJyZWFjdGlzbS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIlJvdXRlc1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBIZWFkZXJPbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzVweDtcclxuICAgICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAud3JhcExvZ28ge1xyXG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggN3B4IDBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgIHRvcDogLTIuN2VtO1xyXG4gICAgICAgICAgbGVmdDogLTQuNWVtO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8qICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgfSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtiYXNlU3R5bGV9PlxyXG4gICAgICA8V3JhcHBlciBwbD17N30gcHI9ezd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+S0VKQVJJIEJBUlJVPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBMb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ29fa2VqYXJpX2NvbG9yLnN2Z1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfaHVidW5naV9rYW1pLnN2Z1wiIGFsdD1cImljb24gY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICA8YT5IVUJVTkdJIEtBTUk8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXJPbmUpO1xyXG4iXX0= */");
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
//# sourceMappingURL=_app.js.f51d2d1137e25f3bacea.hot-update.js.map