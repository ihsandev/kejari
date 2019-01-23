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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".overlayContact{visibility:", positionX ? "collapse" : "visible", ";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,153,51,0.8);z-index:98;}.wrapContact{background-color:#fff;position:fixed;right:0;top:0;bottom:0;z-index:99;padding:20px 30px;box-sizing:border-box;width:400px;box-shadow:-1px 0 5px rgba(0,0,0,0.1);transition:0.2s ease-in;transform:translateX(", positionX ? "400px" : "0", ");.closeContact{display:grid;justify-items:end;span{width:22px;height:22px;border-radius:50%;border:1.5px solid #d8d8d8;color:#d8d8d8;text-align:center;display:grid;align-items:center;font-size:20px;cursor:pointer;transition:0.2s;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, "}}}.hr{border:0.9px solid #d8d8d8;}.address{font-weight:500;font-size:16px;> div{display:grid;grid-template-columns:1fr 6fr;align-items:center;}img{width:30px;}}.wrapForm{display:grid;grid-template-columns:1fr;grid-row-gap:10px;span{color:red;}input,textarea{outline:none;border:1.5px solid #d8d8d8;border-radius:5px;padding:10px 5px;transition:0.3s;&:focus{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";box-shadow:0 1px 5px #d8d8d8;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxwYWdlTGF5b3V0c1xccGFydGlhbHNcXGhlYWRlclxccGFydGlhbHNcXGNvbnRhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdyZWFjdGlzbS91dGlscydcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoeyBwb3NpdGlvblgsIHNldFBvc2l0aW9uWCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcclxuICAgIC5vdmVybGF5Q29udGFjdCB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogJHsgcG9zaXRpb25YID8gYGNvbGxhcHNlYCA6IGB2aXNpYmxlYCB9O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNTMsNTEsMC44KTtcclxuICAgICAgICB6LWluZGV4OiA5ODtcclxuICAgICAgfVxyXG4gICAgLndyYXBDb250YWN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgYm94LXNoYWRvdzogLTFweCAwIDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7IHBvc2l0aW9uWCA/IGA0MDBweGAgOiBgMGAgfSk7XHJcbiAgICAuY2xvc2VDb250YWN0IHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAganVzdGlmeS1pdGVtczogZW5kO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2Q4ZDhkODtcclxuICAgICAgICBjb2xvcjogI2Q4ZDhkODtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtDb2xvci5zdWNjZXNzfTtcclxuICAgICAgICAgIGNvbG9yOiAkeyBDb2xvci5zdWNjZXNzIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ociB7XHJcbiAgICAgIGJvcmRlcjogMC45cHggc29saWQgI2Q4ZDhkODtcclxuICAgIH1cclxuICAgIC5hZGRyZXNzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcEZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7IENvbG9yLnN1Y2Nlc3MgfTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjZDhkOGQ4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDbG9zZUNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgLy8gICBzZXRQb3NpdGlvblgoNDAwKVxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBiYXNlU3R5bGUgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5Q29udGFjdFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcENvbnRhY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlQ29udGFjdFwiIG9uQ2xpY2s9IHsgKCkgPT4gc2V0UG9zaXRpb25YKDQwMCkgfT5cclxuICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbi9pY19sb2thc2kuc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD5KTCBTdWx0YW4gSGFzc2FudWRpbiBOby40MywgQ29wcG8sIEtlYy4gQmFycnUsIEthYi4gQmFycnUsIFN1bHNlbCA5MDcxMjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfdGVsZXBvbi5zdmdcIi8+XHJcbiAgICAgICAgICAgIDxwPigwNDI3KSAyMTA1NzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfZW1haWwuc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD5rZWphcmlfYmFycnVAbWFpbC5jb208L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyXCIgLz5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcEZvcm1cIj5cclxuICAgICAgICAgICAgPGgyPlBlc2FuIFVudHVrIEthbWk8L2gyPlxyXG4gICAgICAgICAgICA8bGFiZWw+TmFtYSBMZW5na2FwIDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8bGFiZWw+RW1haWwgLyBUZWxlcG9uIDxzcGFuPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGVzYW4gQW5kYSA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il19 */"); // const handleCloseContact = () => {
  //   setPositionX(400)
  // }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlayContact"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapContact"
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
//# sourceMappingURL=_app.js.02cff6a0d3358ae88772.hot-update.js.map