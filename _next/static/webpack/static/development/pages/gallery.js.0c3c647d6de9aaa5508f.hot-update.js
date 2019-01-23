webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./components/containers/gallery/partials/lightBox.jsx":
/*!*************************************************************!*\
  !*** ./components/containers/gallery/partials/lightBox.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/utils */ "./components/utilities/index.jsx");





var LightBox = function LightBox(_ref) {
  var onVisible = _ref.onVisible,
      setOnVisible = _ref.setOnVisible;
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("visibility:", onVisible ? 'visible' : 'collapse', ";position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.7);z-index:99;display:grid;justify-items:center;img{align-self:center;width:60%;z-index:100;}.closeLightBox{position:absolute;right:20px;top:20px;width:25px;height:25px;border-radius:50%;border:1.5px solid #fff;text-align:center;font-size:20px;color:#fff;align-self:center;cursor:pointer;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcZ2FsbGVyeVxccGFydGlhbHNcXGxpZ2h0Qm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxjb250YWluZXJzXFxnYWxsZXJ5XFxwYXJ0aWFsc1xcbGlnaHRCb3guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAncmVhY3Rpc20vdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExpZ2h0Qm94ID0gKHsgb25WaXNpYmxlLCBzZXRPblZpc2libGUgfSkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcclxuICAgIHZpc2liaWxpdHk6ICR7b25WaXNpYmxlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ307XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuICAgIC5jbG9zZUxpZ2h0Qm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsgQ29sb3Iuc3VjY2VzcyB9O1xyXG4gICAgICAgICAgY29sb3I6ICR7IENvbG9yLnN1Y2Nlc3MgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgYFxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZUxpZ2h0Ym94ID0gKCkgPT4ge1xyXG4gICAgc2V0T25WaXNpYmxlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGJhc2VTdHlsZSB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlTGlnaHRCb3hcIiBvbkNsaWNrPXsgaGFuZGxlQ2xvc2VMaWdodGJveCB9PlxyXG4gICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvYm9vazEuanBnXCIgYWx0PVwiXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWdodEJveCJdfQ== */");

  var handleCloseLightbox = function handleCloseLightbox() {
    setOnVisible(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "closeLightBox",
    onClick: handleCloseLightbox
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/book1.jpg",
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LightBox);

/***/ })

})
//# sourceMappingURL=gallery.js.0c3c647d6de9aaa5508f.hot-update.js.map