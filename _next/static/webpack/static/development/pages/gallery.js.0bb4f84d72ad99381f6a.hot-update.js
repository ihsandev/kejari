webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./components/containers/gallery/partials/itemOne.jsx":
/*!************************************************************!*\
  !*** ./components/containers/gallery/partials/itemOne.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");
/* harmony import */ var _lightBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightBox */ "./components/containers/gallery/partials/lightBox.jsx");
/* harmony import */ var reactism_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/components */ "./components/containers/index.jsx");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ItemOne = function ItemOne(_ref) {
  var _ref$dataImage = _ref.dataImage,
      dataImage = _ref$dataImage === void 0 ? [] : _ref$dataImage;
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".lightbox{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.8);z-index:99;visibility:collapse;opacity:0;display:grid;img{transition:.4s;z-index:999;width:20%;margin:auto;opacity:0;}&.show{visibility:visible;opacity:1;img{opacity:1;width:50%;border-radius:5px;}}}.wrapper{border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:2em;display:grid;grid-template-columns:1fr;> div:nth-child(1){width:60%;h2{margin-bottom:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}p{margin-top:5px;}}.imgGallery{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1.5em;grid-template-areas:\"col1 col1 col2 col4\" \"col1 col1 col3 col5\";div{cursor:zoom-in;overflow:hidden;img{width:100%;height:100%;object-fit:cover;}box-shadow:0px 4px 0px 0 rgba(0,0,0,0.2);border-radius:8px;}div:nth-child(1){height:55vh;grid-area:col1;}div:nth-child(2){grid-area:col2;}div:nth-child(3){grid-area:col3;}div:nth-child(4){grid-area:col4;}div:nth-child(5){grid-area:col5;}div:nth-child(2),div:nth-child(3),div:nth-child(4),div:nth-child(5){height:25.7vh;}}}@media (max-width:700px){.wrapper{.imgGallery{div:nth-child(1){height:30vh;}grid-template-columns:repeat(2,1fr);grid-template-areas:\"col1 col1\" \"col2 col3\" \"col4 col5\";}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcZ2FsbGVyeVxccGFydGlhbHNcXGl0ZW1PbmUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU91QiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxrZWphcmlcXGNvbXBvbmVudHNcXGNvbnRhaW5lcnNcXGdhbGxlcnlcXHBhcnRpYWxzXFxpdGVtT25lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcInJlYWN0aXNtL2VsZW1lbnRzXCI7XHJcbmltcG9ydCBMaWdodEJveCBmcm9tIFwiLi9saWdodEJveFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nR2FsbGVyeSB9IGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgSXRlbU9uZSA9ICh7IGRhdGFJbWFnZSA9IFtdIH0pID0+IHtcclxuICBjb25zdCBiYXNlU3R5bGUgPSBjc3NgXHJcbiAgICAubGlnaHRib3gge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC8qIHRyYW5zaXRpb246IC4yczsgKi9cclxuICAgICAgfVxyXG4gICAgICAmLnNob3cge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaW1nR2FsbGVyeSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAxLjVlbTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgXCJjb2wxIGNvbDEgY29sMiBjb2w0XCJcclxuICAgICAgICAgIFwiY29sMSBjb2wxIGNvbDMgY29sNVwiO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU1dmg7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGNvbDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBjb2wyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogY29sMztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGNvbDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBjb2w1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXY6bnRoLWNoaWxkKDIpLFxyXG4gICAgICAgIGRpdjpudGgtY2hpbGQoMyksXHJcbiAgICAgICAgZGl2Om50aC1jaGlsZCg0KSxcclxuICAgICAgICBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICAgIGhlaWdodDogMjUuN3ZoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgLmltZ0dhbGxlcnkge1xyXG4gICAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICBcImNvbDEgY29sMVwiXHJcbiAgICAgICAgICAgIFwiY29sMiBjb2wzXCJcclxuICAgICAgICAgICAgXCJjb2w0IGNvbDVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG5cclxuICBjb25zdCBbIG9uVmlzaWJsZSwgc2V0T25WaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZVN0eWxlfT5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGlnaHRib3hcIiBpZD1cImxpZ2h0Ym94XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2hhbW1lci5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxMaWdodEJveCBvblZpc2libGU9eyBvblZpc2libGUgfSBzZXRPblZpc2libGU9eyBzZXRPblZpc2libGUgfSAvPlxyXG4gICAgICA8V3JhcHBlciBwbD17N30gcHI9ezd9PlxyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YUltYWdlLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xyXG4gICAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hPC9oMj5cclxuICAgICAgICAgICAgICA8cD4yMCBPa3RvYmVyIDIwMTg8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0dhbGxlcnlcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhSW1hZ2UubWFwKChpdGVtSW1nLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBzZXRPblZpc2libGUoIW9uVmlzaWJsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpbWdVcmxcIiBzcmM9e2l0ZW1JbWcuaW1hZ2VfdXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8TG9hZGluZ0dhbGxlcnkgLz5cclxuICAgICAgfVxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbU9uZTtcclxuIl19 */");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      onVisible = _useState2[0],
      setOnVisible = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lightBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onVisible: onVisible,
    setOnVisible: setOnVisible
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    pl: 7,
    pr: 7
  }, dataImage.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "20 Oktober 2018")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imgGallery"
  }, dataImage.map(function (itemImg, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      onClick: function onClick() {
        return setOnVisible(!onVisible);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "imgUrl",
      src: itemImg.image_url,
      alt: ""
    }));
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components__WEBPACK_IMPORTED_MODULE_4__["LoadingGallery"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemOne);

/***/ })

})
//# sourceMappingURL=gallery.js.0bb4f84d72ad99381f6a.hot-update.js.map