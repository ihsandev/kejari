webpackHotUpdate("static\\development\\pages\\events.js",{

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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("visibility:", onVisible ? 'visible' : 'collapse', ";position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.7);z-index:99;display:grid;justify-items:center;img{align-self:center;width:60%;z-index:100;}.closeLightBox{width:25px;height:25px;border-radius:50%;border:1.5px solid #fff;display:grid;justify-items:center;color:#fff;span{align-self:center;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcZ2FsbGVyeVxccGFydGlhbHNcXGxpZ2h0Qm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxjb250YWluZXJzXFxnYWxsZXJ5XFxwYXJ0aWFsc1xcbGlnaHRCb3guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMaWdodEJveCA9ICh7IG9uVmlzaWJsZSwgc2V0T25WaXNpYmxlIH0pID0+IHtcclxuICBcclxuICBjb25zdCBiYXNlU3R5bGUgPSBjc3NgXHJcbiAgICB2aXNpYmlsaXR5OiAke29uVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSd9O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB9XHJcbiAgICAuY2xvc2VMaWdodEJveCB7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGJhc2VTdHlsZSB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlTGlnaHRCb3hcIj5cclxuICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2Jvb2sxLmpwZ1wiIGFsdD1cIlwiLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRCb3giXX0= */");
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
//# sourceMappingURL=events.js.3202540da2b9daa183d4.hot-update.js.map