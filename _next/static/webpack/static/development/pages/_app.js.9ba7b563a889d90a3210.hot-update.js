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
  var wrapContact = react__WEBPACK_IMPORTED_MODULE_0__["useRef"].wrapContact;
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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".overlayContact{visibility:", positionX ? "collapse" : "visible", ";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,153,51,0.8);z-index:98;}.wrapContact{background-color:#fff;position:fixed;right:0;top:0;bottom:0;z-index:99;padding:20px 30px;box-sizing:border-box;width:400px;box-shadow:-1px 0 5px rgba(0,0,0,0.1);transition:0.2s ease-in;transform:translateX(", positionX ? "400px" : "0", ");.closeContact{display:grid;justify-items:end;span{width:22px;height:22px;border-radius:50%;border:1.5px solid #d8d8d8;color:#d8d8d8;text-align:center;display:grid;align-items:center;font-size:20px;cursor:pointer;transition:0.2s;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, "}}}.hr{border:0.9px solid #d8d8d8;}.address{font-weight:500;font-size:16px;> div{display:grid;grid-template-columns:1fr 6fr;align-items:center;}img{width:30px;}}.wrapForm{display:grid;grid-template-columns:1fr;grid-row-gap:10px;span{color:red;}input,textarea{outline:none;border:1.5px solid #d8d8d8;border-radius:5px;padding:10px 5px;transition:0.3s;&:focus{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";box-shadow:0 1px 5px #d8d8d8;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnVCIiwiZmlsZSI6IkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAncmVhY3Rpc20vdXRpbHMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgcG9zaXRpb25YLCBzZXRQb3NpdGlvblggfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IHdyYXBDb250YWN0IH0gPSB1c2VSZWY7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRG9jdW1lbnRDbGljayAsIGZhbHNlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRG9jdW1lbnRDbGljayAsIGZhbHNlKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVEb2N1bWVudENsaWNrICA9IGUgPT4ge1xyXG4gICAgaWYgKCEod3JhcENvbnRhY3QuY3VycmVudCkuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgIHNldFBvc2l0aW9uWChmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcclxuICAgIC5vdmVybGF5Q29udGFjdCB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogJHsgcG9zaXRpb25YID8gYGNvbGxhcHNlYCA6IGB2aXNpYmxlYCB9O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNTMsNTEsMC44KTtcclxuICAgICAgICB6LWluZGV4OiA5ODtcclxuICAgICAgfVxyXG4gICAgLndyYXBDb250YWN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgYm94LXNoYWRvdzogLTFweCAwIDVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7IHBvc2l0aW9uWCA/IGA0MDBweGAgOiBgMGAgfSk7XHJcbiAgICAuY2xvc2VDb250YWN0IHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAganVzdGlmeS1pdGVtczogZW5kO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2Q4ZDhkODtcclxuICAgICAgICBjb2xvcjogI2Q4ZDhkODtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtDb2xvci5zdWNjZXNzfTtcclxuICAgICAgICAgIGNvbG9yOiAkeyBDb2xvci5zdWNjZXNzIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ociB7XHJcbiAgICAgIGJvcmRlcjogMC45cHggc29saWQgI2Q4ZDhkODtcclxuICAgIH1cclxuICAgIC5hZGRyZXNzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcEZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7IENvbG9yLnN1Y2Nlc3MgfTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjZDhkOGQ4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGJhc2VTdHlsZSB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlDb250YWN0XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwQ29udGFjdFwiIHJlZj17IHdyYXBDb250YWN0IH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZUNvbnRhY3RcIiBvbkNsaWNrPSB7ICgpID0+IHNldFBvc2l0aW9uWCg0MDApIH0+XHJcbiAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfbG9rYXNpLnN2Z1wiLz5cclxuICAgICAgICAgICAgPHA+SkwgU3VsdGFuIEhhc3NhbnVkaW4gTm8uNDMsIENvcHBvLCBLZWMuIEJhcnJ1LCBLYWIuIEJhcnJ1LCBTdWxzZWwgOTA3MTI8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX3RlbGVwb24uc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD4oMDQyNykgMjEwNTc8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX2VtYWlsLnN2Z1wiLz5cclxuICAgICAgICAgICAgPHA+a2VqYXJpX2JhcnJ1QG1haWwuY29tPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoclwiIC8+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBGb3JtXCI+XHJcbiAgICAgICAgICAgIDxoMj5QZXNhbiBVbnR1ayBLYW1pPC9oMj5cclxuICAgICAgICAgICAgPGxhYmVsPk5hbWEgTGVuZ2thcCA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsPkVtYWlsIC8gVGVsZXBvbiA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsPlBlc2FuIEFuZGEgPHNwYW4+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjNcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdCJdfQ== */");
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
//# sourceMappingURL=_app.js.9ba7b563a889d90a3210.hot-update.js.map