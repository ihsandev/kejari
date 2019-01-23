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
  var wrapContacts = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // useEffect(() => {
  //   document.addEventListener('click', handleDocumentClick , false);
  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick , false);
  //   }
  // })
  // const handleDocumentClick  = e => {
  //   if (!(wrapContacts.current).contains(e.target)) {
  //     setPositionX(false)
  //   }
  // }

  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".overlayContact{visibility:", positionX ? "collapse" : "visible", ";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,153,51,0.8);z-index:98;}.wrapContact{background-color:#fff;position:fixed;right:0;top:0;bottom:0;z-index:99;padding:20px 30px;box-sizing:border-box;width:400px;box-shadow:-1px 0 5px rgba(0,0,0,0.1);transition:0.2s ease-in;transform:translateX(", positionX ? "400px" : "0", ");.closeContact{display:grid;justify-items:end;span{width:22px;height:22px;border-radius:50%;border:1.5px solid #d8d8d8;color:#d8d8d8;text-align:center;display:grid;align-items:center;font-size:20px;cursor:pointer;transition:0.2s;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, "}}}.hr{border:0.9px solid #d8d8d8;}.address{font-weight:500;font-size:16px;> div{display:grid;grid-template-columns:1fr 6fr;align-items:center;}img{width:30px;}}.wrapForm{display:grid;grid-template-columns:1fr;grid-row-gap:10px;span{color:red;}input,textarea{outline:none;border:1.5px solid #d8d8d8;border-radius:5px;padding:10px 5px;transition:0.3s;&:focus{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";box-shadow:0 1px 5px #d8d8d8;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnVCIiwiZmlsZSI6IkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxjb250YWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAncmVhY3Rpc20vdXRpbHMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICh7IHBvc2l0aW9uWCwgc2V0UG9zaXRpb25YIH0pID0+IHtcclxuXHJcbiAgY29uc3Qgd3JhcENvbnRhY3RzID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2sgLCBmYWxzZSk7XHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2sgLCBmYWxzZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSlcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlRG9jdW1lbnRDbGljayAgPSBlID0+IHtcclxuICAvLyAgIGlmICghKHdyYXBDb250YWN0cy5jdXJyZW50KS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAvLyAgICAgc2V0UG9zaXRpb25YKGZhbHNlKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxyXG4gICAgLm92ZXJsYXlDb250YWN0IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiAkeyBwb3NpdGlvblggPyBgY29sbGFwc2VgIDogYHZpc2libGVgIH07XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE1Myw1MSwwLjgpO1xyXG4gICAgICAgIHotaW5kZXg6IDk4O1xyXG4gICAgICB9XHJcbiAgICAud3JhcENvbnRhY3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAtMXB4IDAgNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsgcG9zaXRpb25YID8gYDQwMHB4YCA6IGAwYCB9KTtcclxuICAgIC5jbG9zZUNvbnRhY3Qge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgICAgIGNvbG9yOiAjZDhkOGQ4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke0NvbG9yLnN1Y2Nlc3N9O1xyXG4gICAgICAgICAgY29sb3I6ICR7IENvbG9yLnN1Y2Nlc3MgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhyIHtcclxuICAgICAgYm9yZGVyOiAwLjlweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3Mge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC53cmFwRm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2Q4ZDhkODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsgQ29sb3Iuc3VjY2VzcyB9O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4ICNkOGQ4ZDg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgYmFzZVN0eWxlIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheUNvbnRhY3RcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBDb250YWN0XCIgcmVmPXsgd3JhcENvbnRhY3RzIH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZUNvbnRhY3RcIiBvbkNsaWNrPSB7ICgpID0+IHNldFBvc2l0aW9uWCg0MDApIH0+XHJcbiAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfbG9rYXNpLnN2Z1wiLz5cclxuICAgICAgICAgICAgPHA+SkwgU3VsdGFuIEhhc3NhbnVkaW4gTm8uNDMsIENvcHBvLCBLZWMuIEJhcnJ1LCBLYWIuIEJhcnJ1LCBTdWxzZWwgOTA3MTI8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX3RlbGVwb24uc3ZnXCIvPlxyXG4gICAgICAgICAgICA8cD4oMDQyNykgMjEwNTc8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29uL2ljX2VtYWlsLnN2Z1wiLz5cclxuICAgICAgICAgICAgPHA+a2VqYXJpX2JhcnJ1QG1haWwuY29tPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoclwiIC8+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBGb3JtXCI+XHJcbiAgICAgICAgICAgIDxoMj5QZXNhbiBVbnR1ayBLYW1pPC9oMj5cclxuICAgICAgICAgICAgPGxhYmVsPk5hbWEgTGVuZ2thcCA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsPkVtYWlsIC8gVGVsZXBvbiA8c3Bhbj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsPlBlc2FuIEFuZGEgPHNwYW4+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjNcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8QnV0dG9uPktpcmltIFBlc2FuPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il19 */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlayContact"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapContact",
    ref: wrapContacts
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "Kirim Pesan")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=_app.js.f7bf4a1836e74f8ac74c.hot-update.js.map