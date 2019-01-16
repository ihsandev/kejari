webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./components/containers/News/partials/item.jsx":
/*!******************************************************!*\
  !*** ./components/containers/News/partials/item.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");
/* harmony import */ var Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Routes */ "./config/routes.js");
/* harmony import */ var Routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactism_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/utils */ "./components/utilities/index.jsx");
/* harmony import */ var reactism_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactism/components */ "./components/containers/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactism_actions_news__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactism/actions/news */ "./redux/actions/news.js");






 // redux




var Item = function Item(_ref) {
  var getNews = _ref.getNews,
      _ref$news = _ref.news,
      news = _ref$news === void 0 ? [] : _ref$news;
  console.log(news.length);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getNews();
  }, []);
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".wrapper{display:grid;grid-template-columns:2fr 1fr;grid-column-gap:1.5em;grid-template-areas:\"col1 col2\";> div:nth-child(1){grid-area:col1;a{text-decoration:none;color:#000;transition:0.2s ease;&:hover{color:", reactism_utils__WEBPACK_IMPORTED_MODULE_4__["Color"].success, ";}}h2{margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}p.content{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;}}.imageBox{grid-area:col2;overflow:hidden;img{width:100%;height:33vh;object-fit:fill;}}span{p{color:rgba(0,0,0,0.5);}}@media (max-width:700px){grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-template-areas:\"col2\" \"col1\";}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xcY29udGFpbmVyc1xcTmV3c1xccGFydGlhbHNcXGl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxjb250YWluZXJzXFxOZXdzXFxwYXJ0aWFsc1xcaXRlbS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiZW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBXcmFwcGVyIH0gZnJvbSBcInJlYWN0aXNtL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiUm91dGVzXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInJlYWN0aXNtL3V0aWxzXCI7XHJcbmltcG9ydCB7IExvYWRpbmdOZXdzIH0gZnJvbSBcInJlYWN0aXNtL2NvbXBvbmVudHNcIjtcclxuXHJcbi8vIHJlZHV4XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gJ3JlYWN0aXNtL2FjdGlvbnMvbmV3cydcclxuXHJcbmNvbnN0IEl0ZW0gPSAoeyBnZXROZXdzLCBuZXdzID0gW10gfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG5ld3MubGVuZ3RoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TmV3cygpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDEuNWVtO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNvbDEgY29sMlwiO1xyXG4gICAgICA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGdyaWQtYXJlYTogY29sMTtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke0NvbG9yLnN1Y2Nlc3N9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLmNvbnRlbnQge1xyXG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlQm94IHtcclxuICAgICAgICBncmlkLWFyZWE6IGNvbDI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMzdmg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgXCJjb2wyXCJcclxuICAgICAgICAgIFwiY29sMVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlU3R5bGV9PlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBuZXdzLmxlbmd0aCA8IDAgXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBuZXdzLm1hcCgoaXRlbU5ld3MsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1OZXdzKTtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxDYXJkIHNoYWRvdz1cInRydWVcIiBwZD17MTh9IG1iPXsyfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbU5ld3MudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPntpdGVtTmV3cy5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbU5ld3MuY3JlYXRlZF9hdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1OZXdzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZCBzaGFkb3c9XCJ0cnVlXCIgcGQ9ezE4fSBtYj17Mn0+XHJcbiAgICAgICAgICAgICAgPExvYWRpbmdOZXdzIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPENhcmQgc2hhZG93PVwidHJ1ZVwiIHBkPXsxOH0gbWI9ezJ9PlxyXG4gICAgICAgICAgICAgIDxMb2FkaW5nTmV3cyAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHsgbmV3czogc3RhdGUubmV3cy5uZXdzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGdldE5ld3NcclxufSkoSXRlbSk7XHJcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], null, news.length < 0 ? news.map(function (itemNews, index) {
    console.log(itemNews);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      shadow: "true",
      pd: 18,
      mb: 2,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "detail"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, itemNews.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "content"
    }, itemNews.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, itemNews.created_at))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "imageBox"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: itemNews.image
    }))));
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    shadow: "true",
    pd: 18,
    mb: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components__WEBPACK_IMPORTED_MODULE_5__["LoadingNews"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    shadow: "true",
    pd: 18,
    mb: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components__WEBPACK_IMPORTED_MODULE_5__["LoadingNews"], null)))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    news: state.news.news
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  getNews: reactism_actions_news__WEBPACK_IMPORTED_MODULE_7__["getNews"]
})(Item));

/***/ })

})
//# sourceMappingURL=news.js.4e4286c1681714d0bc34.hot-update.js.map