webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./components/containers/loading/LoadingNews.jsx":
/*!*******************************************************!*\
  !*** ./components/containers/loading/LoadingNews.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");


var baseStyle =
/*#__PURE__*/
Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("display:grid;grid-template-columns:1fr 1fr;grid-column-gap:1.5em;grid-template-areas:\"col1 col2\";div{animation:animate;}div:nth-of-type(1){grid-area:col1;width:110vh;div{margin-bottom:10px;background-color:#eaeaea;&:nth-last-of-type(){margin-bottom:0;}}div:nth-of-type(1){height:30px;width:95%;margin-bottom:1.5em;}div:nth-of-type(2),div:nth-of-type(3),div:nth-of-type(4),div:nth-of-type(5),div:nth-of-type(6),div:nth-of-type(7){height:13px;width:100%;}div:nth-of-type(7){margin-top:1.5em;width:30%;margin-bottom:0;}}div:nth-of-type(2){grid-area:col2;width:100%;div{background-color:#eaeaea;height:32vh;width:100%;}}@media (max-width:768px){grid-template-columns:1fr;grid-gap:1em;grid-template-areas:\"col2\" \"col1\";div:nth-of-type(1){width:50vh;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcbG9hZGluZ1xcTG9hZGluZ05ld3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVxQiIsImZpbGUiOiJEOlxcRFRDXFxQcm9qZWN0IFJlYWN0XFxrZWphcmlcXGNvbXBvbmVudHNcXGNvbnRhaW5lcnNcXGxvYWRpbmdcXExvYWRpbmdOZXdzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcImVtb3Rpb25cIjtcclxuXHJcbmNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDEuNWVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY29sMSBjb2wyXCI7XHJcbiAgZGl2IHtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTtcclxuICB9XHJcbiAgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgIGdyaWQtYXJlYTogY29sMTtcclxuICAgIHdpZHRoOiAxMTB2aDtcclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbiAgICAgICY6bnRoLWxhc3Qtb2YtdHlwZSgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgZGl2Om50aC1vZi10eXBlKDIpLFxyXG4gICAgZGl2Om50aC1vZi10eXBlKDMpLFxyXG4gICAgZGl2Om50aC1vZi10eXBlKDQpLFxyXG4gICAgZGl2Om50aC1vZi10eXBlKDUpLFxyXG4gICAgZGl2Om50aC1vZi10eXBlKDYpLFxyXG4gICAgZGl2Om50aC1vZi10eXBlKDcpIHtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGRpdjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgZ3JpZC1hcmVhOiBjb2wyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgICBoZWlnaHQ6IDMydmg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDFlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwiY29sMlwiXHJcbiAgICAgIFwiY29sMVwiO1xyXG4gICAgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgd2lkdGg6IDUwdmg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgYW5pbWF0ZSA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAzMCU7XHJcbiAgfVxyXG5cclxuICA3MCUge1xyXG4gICAgb3BhY2l0eTogNjAlXHJcbiAgfVxyXG5cclxuICAxMDAle1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2FkaW5nTmV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VTdHlsZX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdOZXdzO1xyXG4iXX0= */");
var animate =
/*#__PURE__*/
Object(emotion__WEBPACK_IMPORTED_MODULE_1__["keyframes"])("0%{opacity:0%;}50%{opacity:30%;}70%{opacity:60%}100%{opacity:100%;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcbG9hZGluZ1xcTG9hZGluZ05ld3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEeUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxjb250YWluZXJzXFxsb2FkaW5nXFxMb2FkaW5nTmV3cy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJlbW90aW9uXCI7XHJcblxyXG5jb25zdCBiYXNlU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVlbTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNvbDEgY29sMlwiO1xyXG4gIGRpdiB7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGU7XHJcbiAgfVxyXG4gIGRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBncmlkLWFyZWE6IGNvbDE7XHJcbiAgICB3aWR0aDogMTEwdmg7XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgICAmOm50aC1sYXN0LW9mLXR5cGUoKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgIH1cclxuICAgIGRpdjpudGgtb2YtdHlwZSgyKSxcclxuICAgIGRpdjpudGgtb2YtdHlwZSgzKSxcclxuICAgIGRpdjpudGgtb2YtdHlwZSg0KSxcclxuICAgIGRpdjpudGgtb2YtdHlwZSg1KSxcclxuICAgIGRpdjpudGgtb2YtdHlwZSg2KSxcclxuICAgIGRpdjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBkaXY6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICAgIGdyaWQtYXJlYTogY29sMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGl2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxuICAgICAgaGVpZ2h0OiAzMnZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxZW07XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImNvbDJcIlxyXG4gICAgICBcImNvbDFcIjtcclxuICAgIGRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGFuaW1hdGUgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMzAlO1xyXG4gIH1cclxuXHJcbiAgNzAlIHtcclxuICAgIG9wYWNpdHk6IDYwJVxyXG4gIH1cclxuXHJcbiAgMTAwJXtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9hZGluZ05ld3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlU3R5bGV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nTmV3cztcclxuIl19 */");

var LoadingNews = function LoadingNews() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingNews);

/***/ })

})
//# sourceMappingURL=news.js.4de104abc6b4683ce4a3.hot-update.js.map