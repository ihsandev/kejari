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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("background-color:#fff;border-bottom:2px solid rgba(0,0,0,0.1);.wrapper{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:35px;justify-items:stretch;align-items:center;a{display:block;text-decoration:none;color:#000;margin-left:10px;font-size:12px;}div:nth-child(2){justify-self:center;position:relative;.wrapLogo{width:140px;height:140px;border-radius:50%;position:absolute;background-color:#fff;box-shadow:0px 7px 0px -5px rgba(0,0,0,0.1);top:-2.7em;left:-4.5em;z-index:3;display:grid;justify-items:center;align-items:center;img{width:65%;}}}div:nth-child(3){justify-self:end;img{float:left;width:25px;margin-top:-2px;}a{float:left;}}}@media (max-width:700px){display:none;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxoZWFkZXJPbmUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU91QiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxrZWphcmlcXGNvbXBvbmVudHNcXHBhZ2VMYXlvdXRzXFxwYXJ0aWFsc1xcaGVhZGVyXFxwYXJ0aWFsc1xcaGVhZGVyT25lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCJyZWFjdGlzbS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIlJvdXRlc1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBIZWFkZXJPbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzVweDtcclxuICAgICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLndyYXBMb2dvIHtcclxuICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDdweCAwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICB0b3A6IC0yLjdlbTtcclxuICAgICAgICAgIGxlZnQ6IC00LjVlbTtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvKiAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgIH0gKi9cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17YmFzZVN0eWxlfT5cclxuICAgICAgPFdyYXBwZXIgcGw9ezd9IHByPXs3fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPktFSkFSSSBCQVJSVTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwTG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvX2tlamFyaV9jb2xvci5zdmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX2h1YnVuZ2lfa2FtaS5zdmdcIiBhbHQ9XCJpY29uIGNvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGE+SFVCVU5HSSBLQU1JPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyT25lKTtcclxuIl19 */");
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
//# sourceMappingURL=_app.js.3d235cd2fd62d996bf92.hot-update.js.map