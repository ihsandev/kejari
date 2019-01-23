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
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");






var Contact = function Contact(_ref) {
  var positionX = _ref.positionX,
      setPositionX = _ref.setPositionX;
  var wrapContacts = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".overlayContact{visibility:", positionX === false ? "collapse" : "visible", ";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,153,51,0.8);z-index:98;}.wrapContact{background-color:#fff;position:fixed;right:0;top:0;bottom:0;z-index:99;padding:20px 30px;box-sizing:border-box;width:400px;box-shadow:-1px 0 5px rgba(0,0,0,0.1);transition:0.2s ease-in;transform:translateX(", positionX === false ? "400px" : "0", ");.closeContact{display:grid;justify-items:end;span{width:22px;height:22px;border-radius:50%;border:1.5px solid #d8d8d8;color:#d8d8d8;text-align:center;display:grid;align-items:center;font-size:20px;cursor:pointer;transition:0.2s;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, "}}}.hr{border:0.9px solid #d8d8d8;}.address{font-weight:500;font-size:16px;> div{display:grid;grid-template-columns:1fr 6fr;align-items:center;}img{width:30px;}}.wrapForm{display:grid;grid-template-columns:1fr;grid-row-gap:10px;span{color:red;}input,textarea{outline:none;border:1.5px solid #d8d8d8;border-radius:5px;padding:10px 5px;transition:0.3s;&:focus{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";box-shadow:0 1px 5px #d8d8d8;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxwYWdlTGF5b3V0c1xccGFydGlhbHNcXGhlYWRlclxccGFydGlhbHNcXGNvbnRhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdyZWFjdGlzbS91dGlscydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3Rpc20vZWxlbWVudHMnXHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgcG9zaXRpb25YLCBzZXRQb3NpdGlvblggfSkgPT4ge1xyXG5cclxuICBjb25zdCB3cmFwQ29udGFjdHMgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxyXG4gICAgLm92ZXJsYXlDb250YWN0IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiAkeyBwb3NpdGlvblggPT09IGZhbHNlID8gYGNvbGxhcHNlYCA6IGB2aXNpYmxlYCB9O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNTMsNTEsMC44KTtcclxuICAgICAgICB6LWluZGV4OiA5ODtcclxuICAgICAgfVxyXG4gICAgLndyYXBDb250YWN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgYm94LXNoYWRvdzogLTFweCAwIDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7IHBvc2l0aW9uWCA9PT0gZmFsc2UgPyBgNDAwcHhgIDogYDBgIH0pO1xyXG4gICAgLmNsb3NlQ29udGFjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgY29sb3I6ICNkOGQ4ZDg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Q29sb3Iuc3VjY2Vzc307XHJcbiAgICAgICAgICBjb2xvcjogJHsgQ29sb3Iuc3VjY2VzcyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaHIge1xyXG4gICAgICBib3JkZXI6IDAuOXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndyYXBGb3JtIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyBDb2xvci5zdWNjZXNzIH07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggI2Q4ZDhkODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBiYXNlU3R5bGUgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5Q29udGFjdFwiIG9uQ2xpY2s9eyBzZXRQb3NpdGlvblgoZmFsc2UpIH0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwQ29udGFjdFwiIHJlZj17IHdyYXBDb250YWN0cyB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VDb250YWN0XCI+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPSB7ICgpID0+IHNldFBvc2l0aW9uWChmYWxzZSkgfT4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfbG9rYXNpLnN2Z1wiLz5cclxuICAgICAgICAgICAgPHA+SkwgU3VsdGFuIEhhc3NhbnVkaW4gTm8uNDMsIENvcHBvLCBLZWMuIEJhcnJ1LCBLYWIuIEJhcnJ1LCBTdWxzZWwgOTA3MTI8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX3RlbGVwb24uc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD4oMDQyNykgMjEwNTc8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX2VtYWlsLnN2Z1wiLz5cclxuICAgICAgICAgICAgPHA+a2VqYXJpX2JhcnJ1QG1haWwuY29tPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoclwiIC8+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBGb3JtXCI+XHJcbiAgICAgICAgICAgIDxoMj5QZXNhbiBVbnR1ayBLYW1pPC9oMj5cclxuICAgICAgICAgICAgPGxhYmVsPk5hbWEgTGVuZ2thcCA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsPkVtYWlsIC8gVGVsZXBvbiA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsPlBlc2FuIEFuZGEgPHNwYW4+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjNcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic3VjY2Vzc1wiPktpcmltIFBlc2FuPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il19 */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlayContact",
    onClick: setPositionX(false)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapContact",
    ref: wrapContacts
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "closeContact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick() {
      return setPositionX(false);
    }
  }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "success"
  }, "Kirim Pesan")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=_app.js.ca80ccedd400741811b1.hot-update.js.map