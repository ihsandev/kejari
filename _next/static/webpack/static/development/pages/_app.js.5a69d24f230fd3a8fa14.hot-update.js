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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('click', handleDocumentClick, false);
    return function () {
      document.removeEventListener('click', handleDocumentClick, false);
    };
  });

  var handleDocumentClick = function handleDocumentClick(e) {
    if (!wrapContacts.current.contains(e.target)) {
      setPositionX(false);
    }
  };

  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".overlayContact{visibility:", positionX === false ? "collapse" : "visible", ";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,153,51,0.8);z-index:98;}.wrapContact{background-color:#fff;position:fixed;right:0;top:0;bottom:0;z-index:99;padding:20px 30px;box-sizing:border-box;width:400px;box-shadow:-1px 0 5px rgba(0,0,0,0.1);transition:0.2s ease-in;transform:translateX(", positionX === false ? "400px" : "0", ");.closeContact{display:grid;justify-items:end;span{width:22px;height:22px;border-radius:50%;border:1.5px solid #d8d8d8;color:#d8d8d8;text-align:center;display:grid;align-items:center;font-size:20px;cursor:pointer;transition:0.2s;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, "}}}.hr{border:0.9px solid #d8d8d8;}.address{font-weight:500;font-size:16px;> div{display:grid;grid-template-columns:1fr 6fr;align-items:center;}img{width:30px;}}.wrapForm{display:grid;grid-template-columns:1fr;grid-row-gap:10px;span{color:red;}input,textarea{outline:none;border:1.5px solid #d8d8d8;border-radius:5px;padding:10px 5px;transition:0.3s;&:focus{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";box-shadow:0 1px 5px #d8d8d8;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnVCIiwiZmlsZSI6IkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAncmVhY3Rpc20vdXRpbHMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICh7IHBvc2l0aW9uWCwgc2V0UG9zaXRpb25YIH0pID0+IHtcclxuXHJcbiAgY29uc3Qgd3JhcENvbnRhY3RzID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2sgLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2sgLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRG9jdW1lbnRDbGljayAgPSBlID0+IHtcclxuICAgIGlmICghKHdyYXBDb250YWN0cy5jdXJyZW50KS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgc2V0UG9zaXRpb25YKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxyXG4gICAgLm92ZXJsYXlDb250YWN0IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiAkeyBwb3NpdGlvblggPT09IGZhbHNlID8gYGNvbGxhcHNlYCA6IGB2aXNpYmxlYCB9O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNTMsNTEsMC44KTtcclxuICAgICAgICB6LWluZGV4OiA5ODtcclxuICAgICAgfVxyXG4gICAgLndyYXBDb250YWN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgYm94LXNoYWRvdzogLTFweCAwIDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7IHBvc2l0aW9uWCA9PT0gZmFsc2UgPyBgNDAwcHhgIDogYDBgIH0pO1xyXG4gICAgLmNsb3NlQ29udGFjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgY29sb3I6ICNkOGQ4ZDg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Q29sb3Iuc3VjY2Vzc307XHJcbiAgICAgICAgICBjb2xvcjogJHsgQ29sb3Iuc3VjY2VzcyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaHIge1xyXG4gICAgICBib3JkZXI6IDAuOXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndyYXBGb3JtIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyBDb2xvci5zdWNjZXNzIH07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggI2Q4ZDhkODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBiYXNlU3R5bGUgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5Q29udGFjdFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcENvbnRhY3RcIiByZWY9eyB3cmFwQ29udGFjdHMgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlQ29udGFjdFwiPlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz0geyAoKSA9PiBzZXRQb3NpdGlvblgoZmFsc2UpIH0+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3NcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX2xva2FzaS5zdmdcIi8+XHJcbiAgICAgICAgICAgIDxwPkpMIFN1bHRhbiBIYXNzYW51ZGluIE5vLjQzLCBDb3BwbywgS2VjLiBCYXJydSwgS2FiLiBCYXJydSwgU3Vsc2VsIDkwNzEyPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbi9pY190ZWxlcG9uLnN2Z1wiLz5cclxuICAgICAgICAgICAgPHA+KDA0MjcpIDIxMDU3PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbi9pY19lbWFpbC5zdmdcIi8+XHJcbiAgICAgICAgICAgIDxwPmtlamFyaV9iYXJydUBtYWlsLmNvbTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHJcIiAvPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwRm9ybVwiPlxyXG4gICAgICAgICAgICA8aDI+UGVzYW4gVW50dWsgS2FtaTwvaDI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5OYW1hIExlbmdrYXAgPHNwYW4+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgIDxsYWJlbD5FbWFpbCAvIFRlbGVwb24gPHNwYW4+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgIDxsYWJlbD5QZXNhbiBBbmRhIDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIzXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInN1Y2Nlc3NcIj5LaXJpbSBQZXNhbjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdCJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlayContact"
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
//# sourceMappingURL=_app.js.5a69d24f230fd3a8fa14.hot-update.js.map