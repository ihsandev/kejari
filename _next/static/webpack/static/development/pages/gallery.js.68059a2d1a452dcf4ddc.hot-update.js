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




var LightBox = function LightBox(_ref) {
  var onVisible = _ref.onVisible,
      setOnVisible = _ref.setOnVisible;
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("visibility:", onVisible ? 'visible' : 'collapse', ";position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.7);z-index:99;display:grid;justify-items:center;img{align-self:center;width:60%;z-index:100;}.closeLightBox{position:absolute;right:20px;top:20px;width:25px;height:25px;border-radius:50%;border:1.5px solid #fff;text-align:center;font-size:20px;color:#fff;align-self:center;cursor:pointer;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcZ2FsbGVyeVxccGFydGlhbHNcXGxpZ2h0Qm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxjb250YWluZXJzXFxnYWxsZXJ5XFxwYXJ0aWFsc1xcbGlnaHRCb3guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMaWdodEJveCA9ICh7IG9uVmlzaWJsZSwgc2V0T25WaXNpYmxlIH0pID0+IHtcclxuICBcclxuICBjb25zdCBiYXNlU3R5bGUgPSBjc3NgXHJcbiAgICB2aXNpYmlsaXR5OiAke29uVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSd9O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB9XHJcbiAgICAuY2xvc2VMaWdodEJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgYFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBiYXNlU3R5bGUgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZUxpZ2h0Qm94XCI+XHJcbiAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ib29rMS5qcGdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0Qm94Il19 */");
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
//# sourceMappingURL=gallery.js.68059a2d1a452dcf4ddc.hot-update.js.map