webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/pageLayouts/partials/header/partials/headerTwo.jsx":
/*!***********************************************************************!*\
  !*** ./components/pageLayouts/partials/header/partials/headerTwo.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/utils */ "./components/utilities/index.jsx");
/* harmony import */ var _contactMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactMobile */ "./components/pageLayouts/partials/header/partials/contactMobile.jsx");
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");
/* harmony import */ var Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Routes */ "./config/routes.js");
/* harmony import */ var Routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var HeaderTwo = function HeaderTwo(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropDown = _useState2[0],
      setDropDown = _useState2[1];

  var wrapNav = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      positionX = _useState4[0],
      setPositionX = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('click', handleDocumentClick, false);
    return function () {
      document.removeEventListener('click', handleDocumentClick, false);
    };
  });

  var handleDocumentClick = function handleDocumentClick(e) {
    if (!wrapNav.current.contains(e.target)) {
      setDropDown(false);
    }
  };

  var onClickBurger = function onClickBurger() {
    setDropDown(!dropDown); // console.log(show)
  };

  var menuClick = function menuClick() {
    setDropDown(false);
  };

  var handleClickContact = function handleClickContact() {
    setPositionX(!setPositionX);
  };

  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("background-color:#fff;border-bottom:2px solid rgba(0,0,0,0.1);.contactIcon{visibility:collapse;position:fixed;right:20px;bottom:30px;img{background:#fff;width:50px;border-radius:50%;}}.burgerButton{display:none;position:absolute;top:10px;right:10px;z-index:11;.bar1,.bar2,.bar3{width:30px;height:4px;background-color:#333;margin:5px 0;transition:0.4s;}}.show{display:none;position:absolute;top:10px;right:10px;z-index:11;.bar1,.bar2,.bar3{width:30px;height:4px;background-color:#333;margin:5px 0;transition:0.3s;}.bar1{-webkit-transform:rotate(-45deg) translate(-5px,5px);transform:rotate(-45deg) translate(-5px,5px);}.bar2{opacity:0;}.bar3{-webkit-transform:rotate(45deg) translate(-8px,-8px);transform:rotate(45deg) translate(-8px,-8px);}}.logo{display:none;position:absolute;width:100%;top:-8px;left:1em;z-index:11;img{width:40px;}}.wrapper{visibility:", dropDown ? "collapse" : "visible", ";display:grid;grid-template-columns:11.2% 11.2% 11.2% auto auto 12% 12% 12%;justify-items:center;margin:0;padding:0;a{text-decoration:none;display:block;padding:0.8rem 0;color:#000;font-weight:bold;transition:0.2s ease;&:hover{font-weight:bold;color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";}}li{list-style:none;margin:0;transition:0.2s ease;&.active a{color:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";font-weight:bold;border-bottom:3px solid ", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";}&:hover:not(.active){border-bottom:3px solid ", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";}}li:nth-child(1),li:nth-child(2),li:nth-child(3),li:nth-child(4){justify-self:start;}li:nth-child(5),li:nth-child(6),li:nth-child(7),li:nth-child(8){justify-self:end;}}@media (max-width:700px){background:#fff;height:55px;position:fixed;top:0;left:0;right:0;z-index:10;.burgerButton,.show{display:inline-block;}.logo{display:grid;grid-template-columns:13% 1fr;align-items:center;width:80%;margin-top:10px;h2{font-size:1.2em;margin-left:10px;}}.wrapper{visibility:", dropDown ? "visible" : "collapse", ";border-bottom:2px solid rgba(0,0,0,0.2);grid-template-columns:1fr;position:absolute;display:block;background-color:#fff;padding-top:50px;left:0;right:0;top:1em;padding-left:1em;padding-right:1em;transition:0.2s;li{transition:none;a{transition:none;padding:1em;}&.active a{border:none;color:#fff;background:", reactism_utils__WEBPACK_IMPORTED_MODULE_2__["Color"].success, ";}}}}@media(max-width:700px){.contactIcon{visibility:visible;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEVENcXFByb2plY3QgUmVhY3RcXGtlamFyaVxcY29tcG9uZW50c1xccGFnZUxheW91dHNcXHBhcnRpYWxzXFxoZWFkZXJcXHBhcnRpYWxzXFxoZWFkZXJUd28uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDdUIiLCJmaWxlIjoiRDpcXERUQ1xcUHJvamVjdCBSZWFjdFxca2VqYXJpXFxjb21wb25lbnRzXFxwYWdlTGF5b3V0c1xccGFydGlhbHNcXGhlYWRlclxccGFydGlhbHNcXGhlYWRlclR3by5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcImVtb3Rpb25cIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwicmVhY3Rpc20vdXRpbHNcIjtcclxuaW1wb3J0IENvbnRhY3RNb2JpbGUgZnJvbSAnLi9jb250YWN0TW9iaWxlJ1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcInJlYWN0aXNtL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiUm91dGVzXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlclR3byA9ICh7IHJvdXRlciB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFsgZHJvcERvd24sIHNldERyb3BEb3duIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB3cmFwTmF2ID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGNvbnN0IFtwb3NpdGlvblgsIHNldFBvc2l0aW9uWF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2sgLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2sgLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRG9jdW1lbnRDbGljayAgPSBlID0+IHtcclxuICAgIGlmICghKHdyYXBOYXYuY3VycmVudCkuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgIHNldERyb3BEb3duKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DbGlja0J1cmdlciA9ICgpID0+IHtcclxuICAgIHNldERyb3BEb3duKCFkcm9wRG93bik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzaG93KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVudUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0RHJvcERvd24oZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0NvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBzZXRQb3NpdGlvblgoIXNldFBvc2l0aW9uWClcclxuICB9XHJcblxyXG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgLmNvbnRhY3RJY29uIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5idXJnZXJCdXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcclxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zaG93IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXIxIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgNXB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC01cHgsIDVweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXIyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXIzIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgbGVmdDogMWVtO1xyXG4gICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgIHZpc2liaWxpdHk6ICR7IGRyb3BEb3duID8gYGNvbGxhcHNlYCA6IGB2aXNpYmxlYH07XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExLjIlIDExLjIlIDExLjIlIGF1dG8gYXV0byAxMiUgMTIlIDEyJTtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbSAwO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICR7Q29sb3Iuc3VjY2Vzc307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICAgICAgJi5hY3RpdmUgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke0NvbG9yLnN1Y2Nlc3N9O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7Q29sb3Iuc3VjY2Vzc307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke0NvbG9yLnN1Y2Nlc3N9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDEpLFxyXG4gICAgICAgIGxpOm50aC1jaGlsZCgyKSxcclxuICAgICAgICBsaTpudGgtY2hpbGQoMyksXHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOm50aC1jaGlsZCg1KSxcclxuICAgICAgICBsaTpudGgtY2hpbGQoNiksXHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDcpLFxyXG4gICAgICAgIGxpOm50aC1jaGlsZCg4KSB7XHJcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICAvKiBoZWlnaHQ6IDUwcHg7ICovXHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgLmJ1cmdlckJ1dHRvbiwgLnNob3cge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMyUgMWZyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJHsgZHJvcERvd24gPyBgdmlzaWJsZWAgOiBgY29sbGFwc2VgfTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMWVtOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZSBhIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtDb2xvci5zdWNjZXNzfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICAuY29udGFjdEljb24ge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG5hdiBjbGFzc05hbWU9eyBiYXNlU3R5bGUgfSByZWY9eyB3cmFwTmF2IH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGRyb3BEb3duID8gYHNob3dgIDogYGJ1cmdlckJ1dHRvbmAgfSBvbkNsaWNrPXsgKCk9PiBvbkNsaWNrQnVyZ2VyKCkgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIxXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIzXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvX2tlamFyaV9jb2xvci5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDI+S0VKQVJJIEJBUlJVPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8V3JhcHBlciBwbD17N30gcHI9ezd9PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9ob21lXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gb25DbGljaz17ICgpID0+IG1lbnVDbGljaygpIH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGE+QmVyYW5kYTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9wcm9maWxlXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gb25DbGljaz17ICgpID0+IG1lbnVDbGljaygpIH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cInByb2ZpbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Qcm9maWw8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gXCIvdG9vbHNcIiA/IFwiYWN0aXZlXCIgOiBudWxsfSBvbkNsaWNrPXsgKCkgPT4gbWVudUNsaWNrKCkgfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwic2FyYW5hXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlNhcmFuYTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9vcmdhbml6YXRpb25cIiA/IFwiYWN0aXZlXCIgOiBudWxsfSBvbkNsaWNrPXsgKCkgPT4gbWVudUNsaWNrKCkgfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwib3JnYW5pc2FzaVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5PcmdhbmlzYXNpPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGhuYW1lID09PSBcIi9uZXdzXCIgfHwgcGF0aG5hbWUgPT09IFwiL2RldGFpbFwiID8gXCJhY3RpdmVcIiA6IG51bGwgfSBvbkNsaWNrPXsgKCkgPT4gbWVudUNsaWNrKCkgfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiYmVyaXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkJlcml0YTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9nYWxsZXJ5XCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gb25DbGljaz17ICgpID0+IG1lbnVDbGljaygpIH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cImdhbGVyaVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5HYWxlcmk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gXCIvZXZlbnRzXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gb25DbGljaz17ICgpID0+IG1lbnVDbGljaygpIH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cImtlZ2lhdGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPktlZ2lhdGFuPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IFwiL2ZlYXR1cmVzXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gb25DbGljaz17ICgpID0+IG1lbnVDbGljaygpIH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cImxheWFuYW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGE+TGF5YW5hbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0SWNvblwiIG9uQ2xpY2s9eyBoYW5kbGVDbGlja0NvbnRhY3QgfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb24vaWNfaHVidW5naV9rYW1pLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxDb250YWN0TW9iaWxlIHBvc2l0aW9uWD17IHBvc2l0aW9uWCB9IHNldFBvc2l0aW9uWD17IHNldFBvc2l0aW9uWCB9IC8+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlclR3byk7XHJcbiJdfQ== */");
  var pathname = router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: baseStyle,
    ref: wrapNav
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: dropDown ? "show" : "burgerButton",
    onClick: function onClick() {
      return onClickBurger();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar3"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo_kejari_color.svg",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "KEJARI BARRU")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    pl: 7,
    pr: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/home" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Beranda"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/profile" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "profil"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Profil"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/tools" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "sarana"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Sarana"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/organization" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "organisasi"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Organisasi"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/news" || pathname === "/detail" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "berita"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Berita"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/gallery" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "galeri"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Galeri"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/events" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "kegiatan"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Kegiatan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pathname === "/features" ? "active" : null,
    onClick: function onClick() {
      return menuClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "layanan"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Layanan"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contactIcon",
    onClick: handleClickContact
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/ic_hubungi_kami.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contactMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    positionX: positionX,
    setPositionX: setPositionX
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(HeaderTwo));

/***/ })

})
//# sourceMappingURL=_app.js.05a77dfa100ae0ebd6f7.hot-update.js.map