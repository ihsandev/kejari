webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("visibility:", onVisible ? 'visible' : 'collapse', ";position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.7);z-index:99;display:grid;justify-items:center;img{align-self:center;width:60%;z-index:100;}.closeLightBox{position:absolute;right:20px;top:20px;width:25px;height:25px;border-radius:50%;border:1.5px solid #fff;text-align:center;font-size:20px;color:#fff;align-self:center;cursor:pointer;&:hover{border-color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcZ2FsbGVyeVxccGFydGlhbHNcXGxpZ2h0Qm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxjb250YWluZXJzXFxnYWxsZXJ5XFxwYXJ0aWFsc1xcbGlnaHRCb3guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAncmVhY3Rpc20vdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExpZ2h0Qm94ID0gKHsgb25WaXNpYmxlLCBzZXRPblZpc2libGUgfSkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcclxuICAgIHZpc2liaWxpdHk6ICR7b25WaXNpYmxlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ307XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuICAgIC5jbG9zZUxpZ2h0Qm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsgQ29sb3Iuc3VjY2VzcyB9O1xyXG4gICAgICAgICAgY29sb3I6ICR7IENvbG9yLnN1Y2Nlc3MgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgYFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBiYXNlU3R5bGUgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZUxpZ2h0Qm94XCI+XHJcbiAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ib29rMS5qcGdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0Qm94Il19 */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "closeLightBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/book1.jpg",
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LightBox);

/***/ })

})
//# sourceMappingURL=_app.js.886cfb7c1840a10905f9.hot-update.js.map