webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/pageLayouts/partials/header/partials/contact.jsx":
/*!*********************************************************************!*\
  !*** ./components/pageLayouts/partials/header/partials/contact.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/utils */ "./components/utilities/index.jsx");





var Contact = function Contact(_ref) {
  var positionX = _ref.positionX,
      setPositionX = _ref.setPositionX;
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".overlayContact{visibility:", positionX ? "collapse" : "visible", ";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,153,51,0.8);z-index:98;}.wrapContact{background-color:#fff;position:fixed;right:0;top:0;bottom:0;z-index:99;padding:20px 30px;box-sizing:border-box;width:400px;box-shadow:-1px 0 5px rgba(0,0,0,0.1);transition:0.2s ease-in;transform:translateX(", positionX ? "400px" : "0", ");.closeContact{display:grid;justify-items:end;span{width:22px;height:22px;border-radius:50%;border:1.5px solid #d8d8d8;color:#d8d8d8;text-align:center;display:grid;align-items:center;font-size:20px;cursor:pointer;transition:0.2s;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, "}}}.hr{border:0.9px solid #d8d8d8;}.address{font-weight:500;font-size:16px;> div{display:grid;grid-template-columns:1fr 6fr;align-items:center;}img{width:30px;}}.wrapForm{display:grid;grid-template-columns:1fr;grid-row-gap:10px;span{color:red;}input,textarea{outline:none;border:1.5px solid #d8d8d8;border-radius:5px;padding:10px 5px;transition:0.3s;&:focus{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";box-shadow:0 1px 5px #d8d8d8;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxwYWdlTGF5b3V0c1xccGFydGlhbHNcXGhlYWRlclxccGFydGlhbHNcXGNvbnRhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdyZWFjdGlzbS91dGlscydcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgcG9zaXRpb25YLCBzZXRQb3NpdGlvblggfSkgPT4ge1xyXG5cclxuICBjb25zdCBiYXNlU3R5bGUgPSBjc3NgXHJcbiAgICAub3ZlcmxheUNvbnRhY3Qge1xyXG4gICAgICAgIHZpc2liaWxpdHk6ICR7IHBvc2l0aW9uWCA/IGBjb2xsYXBzZWAgOiBgdmlzaWJsZWAgfTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTUzLDUxLDAuOCk7XHJcbiAgICAgICAgei1pbmRleDogOTg7XHJcbiAgICAgIH1cclxuICAgIC53cmFwQ29udGFjdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IC0xcHggMCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkeyBwb3NpdGlvblggPyBgNDAwcHhgIDogYDBgIH0pO1xyXG4gICAgLmNsb3NlQ29udGFjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgY29sb3I6ICNkOGQ4ZDg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Q29sb3Iuc3VjY2Vzc307XHJcbiAgICAgICAgICBjb2xvcjogJHsgQ29sb3Iuc3VjY2VzcyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaHIge1xyXG4gICAgICBib3JkZXI6IDAuOXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndyYXBGb3JtIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyBDb2xvci5zdWNjZXNzIH07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggI2Q4ZDhkODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuICBjb25zdCB7IHdyYXBDb250YWN0IH0gPSB1c2VSZWY7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgYmFzZVN0eWxlIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheUNvbnRhY3RcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBDb250YWN0XCIgcmVmPXsgd3JhcENvbnRhY3QgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlQ29udGFjdFwiIG9uQ2xpY2s9IHsgKCkgPT4gc2V0UG9zaXRpb25YKDQwMCkgfT5cclxuICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbi9pY19sb2thc2kuc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD5KTCBTdWx0YW4gSGFzc2FudWRpbiBOby40MywgQ29wcG8sIEtlYy4gQmFycnUsIEthYi4gQmFycnUsIFN1bHNlbCA5MDcxMjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfdGVsZXBvbi5zdmdcIi8+XHJcbiAgICAgICAgICAgIDxwPigwNDI3KSAyMTA1NzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfZW1haWwuc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD5rZWphcmlfYmFycnVAbWFpbC5jb208L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyXCIgLz5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcEZvcm1cIj5cclxuICAgICAgICAgICAgPGgyPlBlc2FuIFVudHVrIEthbWk8L2gyPlxyXG4gICAgICAgICAgICA8bGFiZWw+TmFtYSBMZW5na2FwIDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8bGFiZWw+RW1haWwgLyBUZWxlcG9uIDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGVzYW4gQW5kYSA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il19 */");
  var wrapContact = react__WEBPACK_IMPORTED_MODULE_0__["useRef"].wrapContact;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlayContact"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapContact",
    ref: wrapContact
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "closeContact",
    onClick: function onClick() {
      return setPositionX(400);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "address"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/ic_lokasi.svg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "JL Sultan Hassanudin No.43, Coppo, Kec. Barru, Kab. Barru, Sulsel 90712")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/ic_telepon.svg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "(0427) 21057")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/ic_email.svg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "kejari_barru@mail.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hr"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapForm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Pesan Untuk Kami"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Nama Lengkap ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email / Telepon ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Pesan Anda ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    cols: "30",
    rows: "3"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=_app.js.b5e400a8d8e0ab4d838a.hot-update.js.map