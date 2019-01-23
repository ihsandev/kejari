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
  var wrapContact = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('click', handleDocumentClick, false);
    return function () {
      document.removeEventListener('click', handleDocumentClick, false);
    };
  });

  var handleDocumentClick = function handleDocumentClick(e) {
    if (!wrapContact.current.contains(e.target)) {
      setPositionX(false);
    }
  };

  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".overlayContact{visibility:", positionX ? "collapse" : "visible", ";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,153,51,0.8);z-index:98;}.wrapContact{background-color:#fff;position:fixed;right:0;top:0;bottom:0;z-index:99;padding:20px 30px;box-sizing:border-box;width:400px;box-shadow:-1px 0 5px rgba(0,0,0,0.1);transition:0.2s ease-in;transform:translateX(", positionX ? "400px" : "0", ");.closeContact{display:grid;justify-items:end;span{width:22px;height:22px;border-radius:50%;border:1.5px solid #d8d8d8;color:#d8d8d8;text-align:center;display:grid;align-items:center;font-size:20px;cursor:pointer;transition:0.2s;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, "}}}.hr{border:0.9px solid #d8d8d8;}.address{font-weight:500;font-size:16px;> div{display:grid;grid-template-columns:1fr 6fr;align-items:center;}img{width:30px;}}.wrapForm{display:grid;grid-template-columns:1fr;grid-row-gap:10px;span{color:red;}input,textarea{outline:none;border:1.5px solid #d8d8d8;border-radius:5px;padding:10px 5px;transition:0.3s;&:focus{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";box-shadow:0 1px 5px #d8d8d8;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnVCIiwiZmlsZSI6IkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAncmVhY3Rpc20vdXRpbHMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgcG9zaXRpb25YLCBzZXRQb3NpdGlvblggfSkgPT4ge1xyXG5cclxuICBjb25zdCB3cmFwQ29udGFjdCA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEb2N1bWVudENsaWNrICwgZmFsc2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEb2N1bWVudENsaWNrICwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZURvY3VtZW50Q2xpY2sgID0gZSA9PiB7XHJcbiAgICBpZiAoISh3cmFwQ29udGFjdC5jdXJyZW50KS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgc2V0UG9zaXRpb25YKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxyXG4gICAgLm92ZXJsYXlDb250YWN0IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiAkeyBwb3NpdGlvblggPyBgY29sbGFwc2VgIDogYHZpc2libGVgIH07XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE1Myw1MSwwLjgpO1xyXG4gICAgICAgIHotaW5kZXg6IDk4O1xyXG4gICAgICB9XHJcbiAgICAud3JhcENvbnRhY3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAtMXB4IDAgNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsgcG9zaXRpb25YID8gYDQwMHB4YCA6IGAwYCB9KTtcclxuICAgIC5jbG9zZUNvbnRhY3Qge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgICAgIGNvbG9yOiAjZDhkOGQ4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke0NvbG9yLnN1Y2Nlc3N9O1xyXG4gICAgICAgICAgY29sb3I6ICR7IENvbG9yLnN1Y2Nlc3MgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhyIHtcclxuICAgICAgYm9yZGVyOiAwLjlweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3Mge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC53cmFwRm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2Q4ZDhkODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsgQ29sb3Iuc3VjY2VzcyB9O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4ICNkOGQ4ZDg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgYmFzZVN0eWxlIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheUNvbnRhY3RcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBDb250YWN0XCIgcmVmPXsgd3JhcENvbnRhY3QgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlQ29udGFjdFwiIG9uQ2xpY2s9IHsgKCkgPT4gc2V0UG9zaXRpb25YKDQwMCkgfT5cclxuICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbi9pY19sb2thc2kuc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD5KTCBTdWx0YW4gSGFzc2FudWRpbiBOby40MywgQ29wcG8sIEtlYy4gQmFycnUsIEthYi4gQmFycnUsIFN1bHNlbCA5MDcxMjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfdGVsZXBvbi5zdmdcIi8+XHJcbiAgICAgICAgICAgIDxwPigwNDI3KSAyMTA1NzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfZW1haWwuc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD5rZWphcmlfYmFycnVAbWFpbC5jb208L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyXCIgLz5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcEZvcm1cIj5cclxuICAgICAgICAgICAgPGgyPlBlc2FuIFVudHVrIEthbWk8L2gyPlxyXG4gICAgICAgICAgICA8bGFiZWw+TmFtYSBMZW5na2FwIDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8bGFiZWw+RW1haWwgLyBUZWxlcG9uIDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGVzYW4gQW5kYSA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il19 */");
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
//# sourceMappingURL=_app.js.83e8026ddac920ca6ea1.hot-update.js.map