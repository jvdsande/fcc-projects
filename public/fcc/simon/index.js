/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/* no static exports found */
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/***/ (function(module, exports) {

eval("module.exports = vendor;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvclwiP2I5NDAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 1:
/* no static exports found */
/* all exports used */
/*!*************************************************************************!*\
  !*** delegated ./node_modules/react/react.js from dll-reference vendor ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(28);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcj85NDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDI4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 2:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference vendor ***!
  \*****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(46);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3I/OTkyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ 27:
/* no static exports found */
/* all exports used */
/*!**********************************!*\
  !*** ./src/fcc/simon/styles.jsx ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Wins = exports.Score = exports.Reset = exports.NumberOfSteps = exports.Option = exports.OptionMode = exports.Cell = exports.BoardMiddle = exports.BoardBody = exports.BoardBackground = exports.TitleGame = exports.TitleSimon = exports.Title = undefined;\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  position: absolute;\\n  top: 2vh;\\n  left: 0;\\n  right: 0;\\n  font-size: 15vmin;\\n  text-align: center;\\n  color: #F5F5F5;\\n'], ['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  position: absolute;\\n  top: 2vh;\\n  left: 0;\\n  right: 0;\\n  font-size: 15vmin;\\n  text-align: center;\\n  color: #F5F5F5;\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n  color: #FFEBEE;\\n'], ['\\n  color: #FFEBEE;\\n']),\n    _templateObject3 = _taggedTemplateLiteral(['\\n  color: #F1F8E9;\\n'], ['\\n  color: #F1F8E9;\\n']),\n    _templateObject4 = _taggedTemplateLiteral(['\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  background-color: ', ';\\n  transition: all .5s\\n'], ['\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  background-color: ', ';\\n  transition: all .5s\\n']),\n    _templateObject5 = _taggedTemplateLiteral(['\\n  position: absolute;\\n  bottom: 15vh;\\n  left: calc(50% - 25vh);\\n  width: 50vh;\\n  height: 50vh;\\n'], ['\\n  position: absolute;\\n  bottom: 15vh;\\n  left: calc(50% - 25vh);\\n  width: 50vh;\\n  height: 50vh;\\n']),\n    _templateObject6 = _taggedTemplateLiteral(['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  text-align: center;\\n  color: #757575;\\n\\n  position: absolute;\\n  top: 20%;\\n  left: 20%;\\n  width: 60%;\\n  height: 60%;\\n\\n  background: #FAFAFA;\\n  border-radius: 150px;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  flex-direction: column;\\n'], ['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  text-align: center;\\n  color: #757575;\\n\\n  position: absolute;\\n  top: 20%;\\n  left: 20%;\\n  width: 60%;\\n  height: 60%;\\n\\n  background: #FAFAFA;\\n  border-radius: 150px;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  flex-direction: column;\\n']),\n    _templateObject7 = _taggedTemplateLiteral(['\\n  display: inline-block;\\n  width: 50%;\\n  height: 50%;\\n\\n  opacity: ', ';\\n  cursor: ', ';\\n\\n\\n  background: ', ';\\n\\n  border-radius: ', ';\\n\\n', '\\n\\n', '\\n\\n  transition: all .3s;\\n'], ['\\n  display: inline-block;\\n  width: 50%;\\n  height: 50%;\\n\\n  opacity: ', ';\\n  cursor: ', ';\\n\\n\\n  background: ', ';\\n\\n  border-radius: ', ';\\n\\n', '\\n\\n', '\\n\\n  transition: all .3s;\\n']),\n    _templateObject8 = _taggedTemplateLiteral(['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  display: inline-block;\\n\\n  padding: 0.5vh 2vh;\\n  width: 5vh;\\n\\n  font-size: 1.8vh;\\n\\n  background-color: ', ';\\n  color: ', ';\\n\\n  border-radius: 0 1vh 1vh 0;\\n  &:first-child {\\n    border-radius: 1vh 0 0 1vh;\\n  }\\n\\n  &:hover {\\n    background-color: ', ';\\n    color:  ', ';\\n  }\\n'], ['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  display: inline-block;\\n\\n  padding: 0.5vh 2vh;\\n  width: 5vh;\\n\\n  font-size: 1.8vh;\\n\\n  background-color: ', ';\\n  color: ', ';\\n\\n  border-radius: 0 1vh 1vh 0;\\n  &:first-child {\\n    border-radius: 1vh 0 0 1vh;\\n  }\\n\\n  &:hover {\\n    background-color: ', ';\\n    color:  ', ';\\n  }\\n']),\n    _templateObject9 = _taggedTemplateLiteral(['\\n  color: #757575;\\n  cursor: pointer;\\n'], ['\\n  color: #757575;\\n  cursor: pointer;\\n']),\n    _templateObject10 = _taggedTemplateLiteral(['\\n  font-size: 7vh;\\n'], ['\\n  font-size: 7vh;\\n']),\n    _templateObject11 = _taggedTemplateLiteral(['\\n   background-color: #EEEEEE;\\n   color: #757575;\\n   cursor: pointer;\\n   padding: 0.5vh 2vh;\\n   border-radius: 1vh;\\n   font-size: 1.8vh;\\n\\n   &:hover {\\n     background-color: #757575;\\n     color: #EEEEEE;\\n   }\\n'], ['\\n   background-color: #EEEEEE;\\n   color: #757575;\\n   cursor: pointer;\\n   padding: 0.5vh 2vh;\\n   border-radius: 1vh;\\n   font-size: 1.8vh;\\n\\n   &:hover {\\n     background-color: #757575;\\n     color: #EEEEEE;\\n   }\\n']),\n    _templateObject12 = _taggedTemplateLiteral(['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  position: absolute;\\n  bottom: 2vmin;\\n  left: 0;\\n  right: 0;\\n  font-size: 10vmin;\\n  text-align: center;\\n  color: #BDBDBD;\\n'], ['\\n  font-family: \\'Gloria Hallelujah\\', cursive;\\n  position: absolute;\\n  bottom: 2vmin;\\n  left: 0;\\n  right: 0;\\n  font-size: 10vmin;\\n  text-align: center;\\n  color: #BDBDBD;\\n']),\n    _templateObject13 = _taggedTemplateLiteral(['\\n  color: ', ';\\n'], ['\\n  color: ', ';\\n']);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ 3);\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n/* Title    */\nvar Title = exports.Title = _styledComponents2.default.div(_templateObject);\nvar TitleSimon = exports.TitleSimon = _styledComponents2.default.span(_templateObject2);\nvar TitleGame = exports.TitleGame = _styledComponents2.default.span(_templateObject3);\n\n/* Game Board     */\nvar BoardBackground = exports.BoardBackground = _styledComponents2.default.div(_templateObject4, function (props) {\n  return props.fail ? '#FFCDD2' : props.win ? '#E3F2FD' : 'white';\n});\n\nvar BoardBody = exports.BoardBody = _styledComponents2.default.div(_templateObject5);\n\nvar BoardMiddle = exports.BoardMiddle = _styledComponents2.default.div(_templateObject6);\n\nvar Cell = exports.Cell = _styledComponents2.default.a(_templateObject7, function (props) {\n  return props.lit ? 0.3 : 0.6;\n}, function (props) {\n  return props.frozen ? 'default' : 'pointer';\n}, function (props) {\n  switch (props.position) {\n    case 'top-left':\n      return '#D32F2F';\n    case 'top-right':\n      return '#303F9F';\n    case 'bottom-right':\n      return '#689F38';\n    case 'bottom-left':\n      return '#FFA000';\n  }\n}, function (props) {\n  switch (props.position) {\n    case 'top-left':\n      return '100% 0 0 0';\n    case 'top-right':\n      return '0 100% 0 0';\n    case 'bottom-right':\n      return '0 0 100% 0';\n    case 'bottom-left':\n      return '0 0 0 100%';\n  }\n}, function (props) {\n  if (!props.frozen) return '&:hover { opacity: 0.7; }';\n}, function (props) {\n  if (!props.frozen) return '&:active { opacity: 0.3; }';\n});\n\n/* Option Panel   */\n\nvar OptionMode = exports.OptionMode = _styledComponents2.default.div(_templateObject8, function (props) {\n  return props.selected == props.value ? '#757575' : '#EEEEEE';\n}, function (props) {\n  return props.selected == props.value ? '#EEEEEE' : '#757575';\n}, function (props) {\n  return props.selected == props.value ? '#757575' : '#BDBDBD';\n}, function (props) {\n  return props.selected == props.value ? '#EEEEEE' : '#FAFAFA';\n});\n\nvar Option = exports.Option = _styledComponents2.default.div(_templateObject9);\n\nvar NumberOfSteps = exports.NumberOfSteps = _styledComponents2.default.div(_templateObject10);\n\nvar Reset = exports.Reset = _styledComponents2.default.div(_templateObject11);\n\n/*  Score     */\n\nvar Score = exports.Score = _styledComponents2.default.div(_templateObject12);\nvar Wins = exports.Wins = _styledComponents2.default.span(_templateObject13, function (props) {\n  return props.player == 'x' ? '#FF8F00' : '#4527A0';\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZjYy9zaW1vbi9zdHlsZXMuanN4PzBkMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbi8qIFRpdGxlICAgICovXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1mYW1pbHk6ICdHbG9yaWEgSGFsbGVsdWphaCcsIGN1cnNpdmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnZoO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZm9udC1zaXplOiAxNXZtaW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjRjVGNUY1O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBUaXRsZVNpbW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICNGRkVCRUU7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFRpdGxlR2FtZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjRjFGOEU5O1xyXG5gXHJcblxyXG5cclxuLyogR2FtZSBCb2FyZCAgICAgKi9cclxuZXhwb3J0IGNvbnN0IEJvYXJkQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmZhaWwgPyAnI0ZGQ0REMicgOiAocHJvcHMud2luID8gJyNFM0YyRkQnIDogJ3doaXRlJyl9O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXNcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTV2aDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDI1dmgpO1xyXG4gIHdpZHRoOiA1MHZoO1xyXG4gIGhlaWdodDogNTB2aDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkTWlkZGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogJ0dsb3JpYSBIYWxsZWx1amFoJywgY3Vyc2l2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiAyMCU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDZWxsID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcblxyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMubGl0ID8gMC4zIDogMC42fTtcclxuICBjdXJzb3I6ICR7cHJvcHMgPT4gcHJvcHMuZnJvemVuID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInfTtcclxuXHJcblxyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4ge1xyXG4gICAgc3dpdGNoKHByb3BzLnBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcclxuICAgICAgICByZXR1cm4gJyNEMzJGMkYnXHJcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XHJcbiAgICAgICAgcmV0dXJuICcjMzAzRjlGJ1xyXG4gICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxyXG4gICAgICAgIHJldHVybiAnIzY4OUYzOCdcclxuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxyXG4gICAgICAgIHJldHVybiAnI0ZGQTAwMCdcclxuICAgIH1cclxuICB9fTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiB7XHJcbiAgICBzd2l0Y2gocHJvcHMucG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAndG9wLWxlZnQnOlxyXG4gICAgICAgIHJldHVybiAnMTAwJSAwIDAgMCdcclxuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcclxuICAgICAgICByZXR1cm4gJzAgMTAwJSAwIDAnXHJcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XHJcbiAgICAgICAgcmV0dXJuICcwIDAgMTAwJSAwJ1xyXG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuICcwIDAgMCAxMDAlJ1xyXG4gICAgfVxyXG4gIH19O1xyXG5cclxuJHtwcm9wcyA9PiB7XHJcbiAgaWYoIXByb3BzLmZyb3plbilcclxuICAgIHJldHVybiAnJjpob3ZlciB7IG9wYWNpdHk6IDAuNzsgfSdcclxufX1cclxuXHJcbiR7cHJvcHMgPT4ge1xyXG4gIGlmKCFwcm9wcy5mcm96ZW4pXHJcbiAgICByZXR1cm4gJyY6YWN0aXZlIHsgb3BhY2l0eTogMC4zOyB9J1xyXG59fVxyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5gXHJcblxyXG5cclxuLyogT3B0aW9uIFBhbmVsICAgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBPcHRpb25Nb2RlID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogJ0dsb3JpYSBIYWxsZWx1amFoJywgY3Vyc2l2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIHBhZGRpbmc6IDAuNXZoIDJ2aDtcclxuICB3aWR0aDogNXZoO1xyXG5cclxuICBmb250LXNpemU6IDEuOHZoO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID09IHByb3BzLnZhbHVlID8gJyM3NTc1NzUnIDogJyNFRUVFRUUnfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5zZWxlY3RlZCA9PSBwcm9wcy52YWx1ZSA/ICcjRUVFRUVFJyA6ICcjNzU3NTc1J307XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAgMXZoIDF2aCAwO1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXZoIDAgMCAxdmg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWQgPT0gcHJvcHMudmFsdWUgPyAnIzc1NzU3NScgOiAnI0JEQkRCRCd9O1xyXG4gICAgY29sb3I6ICAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID09IHByb3BzLnZhbHVlID8gJyNFRUVFRUUnIDogJyNGQUZBRkEnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBPcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBOdW1iZXJPZlN0ZXBzID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDd2aDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2V0ID0gc3R5bGVkLmRpdmBcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgcGFkZGluZzogMC41dmggMnZoO1xyXG4gICBib3JkZXItcmFkaXVzOiAxdmg7XHJcbiAgIGZvbnQtc2l6ZTogMS44dmg7XHJcblxyXG4gICAmOmhvdmVyIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xyXG4gICAgIGNvbG9yOiAjRUVFRUVFO1xyXG4gICB9XHJcbmBcclxuXHJcbi8qICBTY29yZSAgICAgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBTY29yZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1mYW1pbHk6ICdHbG9yaWEgSGFsbGVsdWphaCcsIGN1cnNpdmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMnZtaW47XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBmb250LXNpemU6IDEwdm1pbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNCREJEQkQ7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFdpbnMgPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5wbGF5ZXIgPT0gJ3gnID8gJyNGRjhGMDAnIDogJyM0NTI3QTAnfTtcclxuYFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZjYy9zaW1vbi9zdHlsZXMuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQVVBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQW1CQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFHQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),

/***/ 3:
/* exports provided: css, keyframes, injectGlobal, ThemeProvider, withTheme, default */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/styled-components/dist/styled-components.es.js from dll-reference vendor ***!
  \*********************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(81);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5lcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yP2FlNGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoODEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),

/***/ 35:
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./src/fcc/simon/index.jsx ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 2);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _styles = __webpack_require__(/*! ./styles */ 27);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction randomCell() {\n  return Math.floor(Math.random() * 4);\n}\n\nvar MOVE_TO_WIN = 20;\n\nvar sounds = [new Audio('./simonSound1.mp3'), new Audio('./simonSound2.mp3'), new Audio('./simonSound3.mp3'), new Audio('./simonSound4.mp3')];\n\nsounds[0].volume = 0.3;\nsounds[1].volume = 0.3;\nsounds[2].volume = 0.7;\n\nvar SimonGame = function (_Component) {\n  _inherits(SimonGame, _Component);\n\n  function SimonGame() {\n    _classCallCheck(this, SimonGame);\n\n    var _this = _possibleConstructorReturn(this, (SimonGame.__proto__ || Object.getPrototypeOf(SimonGame)).call(this));\n\n    _this.reset = function () {\n      var onTime = 900;\n      if (_this.state.win) onTime = 300;else if (_this.series.length > 5) {\n        onTime = 750;\n      } else if (_this.series.length > 10) {\n        onTime = 600;\n      }\n\n      _this.setState({ fail: false, current: 0, step: 'show', onTime: onTime });\n\n      clearTimeout(_this.timeout);\n      setTimeout(_this.show, onTime);\n    };\n\n    _this.hardReset = function () {\n      _this.series = [randomCell()];\n      _this.setState({ win: false });\n      _this.reset();\n    };\n\n    _this.softReset = function () {\n      if (_this.state.mode == 'strict') _this.series = [randomCell()];\n      _this.reset();\n    };\n\n    _this.off = function () {\n      _this.setState({ lit: [false, false, false, false] });\n    };\n\n    _this.play = function (cell) {\n      var current = _this.state.current;\n      if (cell == _this.series[current]) {\n        current++;\n        if (current >= _this.series.length) {\n          if (_this.series.length == MOVE_TO_WIN) {\n            _this.setState({ win: true });\n            _this.series = [0, 1, 3, 2];\n            setTimeout(_this.reset, 0);\n            setTimeout(_this.hardReset, 5000);\n          } else {\n            _this.series.push(randomCell());\n            _this.reset();\n          }\n        } else {\n          _this.setState({ current: current });\n          _this.configureTimeout();\n        }\n      } else {\n        _this.fail();\n      }\n\n      sounds[cell].play();\n    };\n\n    _this.stall = function () {\n      var lit = [false, false, false, false];\n      var current = _this.state.current;\n\n      _this.setState({ lit: lit });\n\n      if (current < _this.series.length) {\n        setTimeout(_this.show, 200);\n      } else if (!_this.state.win) {\n        _this.setState({ step: 'play', current: 0 });\n        _this.configureTimeout();\n      } else {\n        _this.reset();\n      }\n    };\n\n    _this.fail = function () {\n      _this.setState({ fail: true });\n      setTimeout(_this.softReset, 1000);\n    };\n\n    _this.configureTimeout = function () {\n      clearTimeout(_this.timeout);\n      _this.timeout = setTimeout(_this.fail, 5000);\n    };\n\n    _this.show = function () {\n      var lit = [false, false, false, false];\n      var current = _this.state.current;\n\n      sounds[_this.series[current]].play();\n      lit[_this.series[current++]] = true;\n      _this.setState({ lit: lit, current: current });\n\n      setTimeout(_this.stall, _this.state.onTime);\n    };\n\n    _this.selectMode = function (mode) {\n      _this.setState({ mode: mode });\n    };\n\n    _this.series = [0];\n    _this.timeout = null;\n\n    _this.state = {\n      lit: [false, false, false, false],\n      current: 0,\n      step: 'show',\n      mode: 'easy',\n      onTime: 1000,\n      win: false,\n      fail: false\n    };\n\n    _this.hardReset();\n    return _this;\n  }\n\n  _createClass(SimonGame, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var message = this.series.length;\n\n      if (this.state.fail && this.state.mode == 'strict') message = '--';\n\n      if (this.state.win) message = 'Yeah!';\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _styles.BoardBackground,\n          { fail: this.state.fail, win: this.state.win },\n          _react2.default.createElement(\n            _styles.Title,\n            null,\n            _react2.default.createElement(\n              _styles.TitleSimon,\n              null,\n              'Simon'\n            ),\n            ' ',\n            _react2.default.createElement(\n              _styles.TitleGame,\n              null,\n              'Game'\n            )\n          ),\n          _react2.default.createElement(\n            _styles.BoardBody,\n            null,\n            _react2.default.createElement(_styles.Cell, { onClick: function onClick() {\n                return _this2.play(0);\n              }, position: 'top-left', lit: this.state.lit[0], frozen: this.state.step == 'show' }),\n            _react2.default.createElement(_styles.Cell, { onClick: function onClick() {\n                return _this2.play(1);\n              }, position: 'top-right', lit: this.state.lit[1], frozen: this.state.step == 'show' }),\n            _react2.default.createElement(_styles.Cell, { onClick: function onClick() {\n                return _this2.play(2);\n              }, position: 'bottom-left', lit: this.state.lit[2], frozen: this.state.step == 'show' }),\n            _react2.default.createElement(_styles.Cell, { onClick: function onClick() {\n                return _this2.play(3);\n              }, position: 'bottom-right', lit: this.state.lit[3], frozen: this.state.step == 'show' }),\n            _react2.default.createElement(\n              _styles.BoardMiddle,\n              null,\n              _react2.default.createElement(\n                _styles.NumberOfSteps,\n                null,\n                message\n              ),\n              _react2.default.createElement(\n                _styles.Option,\n                null,\n                _react2.default.createElement(\n                  _styles.OptionMode,\n                  { selected: this.state.mode, value: 'easy', onClick: function onClick() {\n                      return _this2.selectMode('easy');\n                    } },\n                  'Easy'\n                ),\n                _react2.default.createElement(\n                  _styles.OptionMode,\n                  { selected: this.state.mode, value: 'strict', onClick: function onClick() {\n                      return _this2.selectMode('strict');\n                    } },\n                  'Strict'\n                )\n              ),\n              _react2.default.createElement(\n                _styles.Reset,\n                { onClick: this.hardReset },\n                ' Reset '\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SimonGame;\n}(_react.Component);\n\nvar target = document.getElementById('root');\n_reactDom2.default.render(_react2.default.createElement(SimonGame, null), target);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZjYy9zaW1vbi9pbmRleC5qc3g/YTAyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuaW1wb3J0IHtcclxuICBCb2FyZEJhY2tncm91bmQsIEJvYXJkQm9keSwgQm9hcmRNaWRkbGUsIENlbGwsXHJcbiAgVGl0bGUsIFRpdGxlU2ltb24sIFRpdGxlR2FtZSxcclxuICBTY29yZSwgV2lucyxcclxuICBOdW1iZXJPZlN0ZXBzLCBPcHRpb25Nb2RlLCBPcHRpb24sIFJlc2V0LFxyXG59IGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNlbGwoKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXHJcbn1cclxuXHJcbmNvbnN0IE1PVkVfVE9fV0lOID0gMjBcclxuXHJcbmNvbnN0IHNvdW5kcyA9IFtcclxuICBuZXcgQXVkaW8oJy4vc2ltb25Tb3VuZDEubXAzJyksXHJcbiAgbmV3IEF1ZGlvKCcuL3NpbW9uU291bmQyLm1wMycpLFxyXG4gIG5ldyBBdWRpbygnLi9zaW1vblNvdW5kMy5tcDMnKSxcclxuICBuZXcgQXVkaW8oJy4vc2ltb25Tb3VuZDQubXAzJylcclxuXVxyXG5cclxuc291bmRzWzBdLnZvbHVtZSA9IDAuM1xyXG5zb3VuZHNbMV0udm9sdW1lID0gMC4zXHJcbnNvdW5kc1syXS52b2x1bWUgPSAwLjdcclxuXHJcblxyXG5jbGFzcyBTaW1vbkdhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIHRoaXMuc2VyaWVzID0gWzBdXHJcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGl0OiBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBjdXJyZW50OiAwLFxyXG4gICAgICBzdGVwOiAnc2hvdycsXHJcbiAgICAgIG1vZGU6ICdlYXN5JyxcclxuICAgICAgb25UaW1lOiAxMDAwLFxyXG4gICAgICB3aW46IGZhbHNlLFxyXG4gICAgICBmYWlsOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhcmRSZXNldCgpXHJcbiAgfVxyXG5cclxuICByZXNldCA9ICgpID0+IHtcclxuICAgIGxldCBvblRpbWUgPSA5MDBcclxuICAgIGlmKHRoaXMuc3RhdGUud2luKVxyXG4gICAgICBvblRpbWUgPSAzMDBcclxuICAgIGVsc2UgaWYodGhpcy5zZXJpZXMubGVuZ3RoID4gNSkge1xyXG4gICAgICBvblRpbWUgPSA3NTBcclxuICAgIH0gZWxzZSBpZih0aGlzLnNlcmllcy5sZW5ndGggPiAxMCkge1xyXG4gICAgICBvblRpbWUgPSA2MDBcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtmYWlsOiBmYWxzZSwgY3VycmVudDogMCwgc3RlcDogJ3Nob3cnLCBvblRpbWV9KVxyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXHJcbiAgICBzZXRUaW1lb3V0KHRoaXMuc2hvdywgb25UaW1lKVxyXG4gIH1cclxuXHJcbiAgaGFyZFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXJpZXMgPSBbcmFuZG9tQ2VsbCgpXVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7d2luOiBmYWxzZX0pXHJcbiAgICB0aGlzLnJlc2V0KClcclxuICB9XHJcblxyXG4gIHNvZnRSZXNldCA9ICgpID0+IHtcclxuICAgIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3RyaWN0JylcclxuICAgICAgdGhpcy5zZXJpZXMgPSBbcmFuZG9tQ2VsbCgpXVxyXG4gICAgdGhpcy5yZXNldCgpXHJcbiAgfVxyXG5cclxuICBvZmYgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtsaXQ6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV19KVxyXG4gIH1cclxuXHJcbiAgcGxheSA9IChjZWxsKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGUuY3VycmVudFxyXG4gICAgaWYoY2VsbCA9PSB0aGlzLnNlcmllc1tjdXJyZW50XSkge1xyXG4gICAgICBjdXJyZW50KytcclxuICAgICAgaWYoY3VycmVudCA+PSB0aGlzLnNlcmllcy5sZW5ndGgpIHtcclxuICAgICAgICBpZih0aGlzLnNlcmllcy5sZW5ndGggPT0gTU9WRV9UT19XSU4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpbjogdHJ1ZX0pXHJcbiAgICAgICAgICB0aGlzLnNlcmllcyA9IFswLCAxLCAzLCAyXVxyXG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlc2V0LCAwKVxyXG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLmhhcmRSZXNldCwgNTAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXJpZXMucHVzaChyYW5kb21DZWxsKCkpXHJcbiAgICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudH0pXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmVUaW1lb3V0KClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mYWlsKClcclxuICAgIH1cclxuXHJcbiAgICBzb3VuZHNbY2VsbF0ucGxheSgpXHJcbiAgfVxyXG5cclxuICBzdGFsbCA9ICgpID0+IHtcclxuICAgIGxldCBsaXQgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGUuY3VycmVudFxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe2xpdH0pXHJcblxyXG4gICAgaWYoY3VycmVudCA8IHRoaXMuc2VyaWVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuc2hvdywgMjAwKVxyXG4gICAgfSBlbHNlIGlmKCF0aGlzLnN0YXRlLndpbikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAncGxheScsIGN1cnJlbnQ6IDB9KVxyXG4gICAgICB0aGlzLmNvbmZpZ3VyZVRpbWVvdXQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZXNldCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmYWlsID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmFpbDogdHJ1ZX0pXHJcbiAgICBzZXRUaW1lb3V0KHRoaXMuc29mdFJlc2V0LCAxMDAwKVxyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlVGltZW91dCA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuZmFpbCwgNTAwMClcclxuICB9XHJcblxyXG4gIHNob3cgPSAoKSA9PiB7XHJcbiAgICBsZXQgbGl0ID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLmN1cnJlbnRcclxuXHJcbiAgICBzb3VuZHNbdGhpcy5zZXJpZXNbY3VycmVudF1dLnBsYXkoKVxyXG4gICAgbGl0W3RoaXMuc2VyaWVzW2N1cnJlbnQrK11dID0gdHJ1ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGl0LCBjdXJyZW50fSlcclxuXHJcbiAgICBzZXRUaW1lb3V0KHRoaXMuc3RhbGwsIHRoaXMuc3RhdGUub25UaW1lKVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TW9kZSA9IChtb2RlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHttb2RlfSlcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuc2VyaWVzLmxlbmd0aFxyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUuZmFpbCAmJiB0aGlzLnN0YXRlLm1vZGUgPT0gJ3N0cmljdCcpXHJcbiAgICAgIG1lc3NhZ2UgPSAnLS0nXHJcblxyXG4gICAgaWYodGhpcy5zdGF0ZS53aW4pXHJcbiAgICAgIG1lc3NhZ2UgPSAnWWVhaCEnXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Qm9hcmRCYWNrZ3JvdW5kIGZhaWw9e3RoaXMuc3RhdGUuZmFpbH0gd2luPXt0aGlzLnN0YXRlLndpbn0+XHJcbiAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgIDxUaXRsZVNpbW9uPlNpbW9uPC9UaXRsZVNpbW9uPiA8VGl0bGVHYW1lPkdhbWU8L1RpdGxlR2FtZT5cclxuICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICA8Qm9hcmRCb2R5PlxyXG4gICAgICAgICAgICA8Q2VsbCBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsYXkoMCl9IHBvc2l0aW9uPSd0b3AtbGVmdCcgICAgIGxpdD17dGhpcy5zdGF0ZS5saXRbMF19IGZyb3plbj17dGhpcy5zdGF0ZS5zdGVwID09ICdzaG93J30gLz5cclxuICAgICAgICAgICAgPENlbGwgb25DbGljaz17KCkgPT4gdGhpcy5wbGF5KDEpfSBwb3NpdGlvbj0ndG9wLXJpZ2h0JyAgICBsaXQ9e3RoaXMuc3RhdGUubGl0WzFdfSBmcm96ZW49e3RoaXMuc3RhdGUuc3RlcCA9PSAnc2hvdyd9IC8+XHJcbiAgICAgICAgICAgIDxDZWxsIG9uQ2xpY2s9eygpID0+IHRoaXMucGxheSgyKX0gcG9zaXRpb249J2JvdHRvbS1sZWZ0JyAgbGl0PXt0aGlzLnN0YXRlLmxpdFsyXX0gZnJvemVuPXt0aGlzLnN0YXRlLnN0ZXAgPT0gJ3Nob3cnfSAvPlxyXG4gICAgICAgICAgICA8Q2VsbCBvbkNsaWNrPXsoKSA9PiB0aGlzLnBsYXkoMyl9IHBvc2l0aW9uPSdib3R0b20tcmlnaHQnIGxpdD17dGhpcy5zdGF0ZS5saXRbM119IGZyb3plbj17dGhpcy5zdGF0ZS5zdGVwID09ICdzaG93J30gLz5cclxuICAgICAgICAgICAgPEJvYXJkTWlkZGxlPlxyXG4gICAgICAgICAgICAgIDxOdW1iZXJPZlN0ZXBzPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgPC9OdW1iZXJPZlN0ZXBzPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uTW9kZSBzZWxlY3RlZD17dGhpcy5zdGF0ZS5tb2RlfSB2YWx1ZT17J2Vhc3knfSAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VsZWN0TW9kZSgnZWFzeScpfT5FYXN5PC9PcHRpb25Nb2RlPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbk1vZGUgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUubW9kZX0gdmFsdWU9eydzdHJpY3QnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbGVjdE1vZGUoJ3N0cmljdCcpfT5TdHJpY3Q8L09wdGlvbk1vZGU+XHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPFJlc2V0IG9uQ2xpY2s9e3RoaXMuaGFyZFJlc2V0fT4gUmVzZXQgPC9SZXNldD5cclxuICAgICAgICAgICAgPC9Cb2FyZE1pZGRsZT5cclxuICAgICAgICAgIDwvQm9hcmRCb2R5PlxyXG4gICAgICAgIDwvQm9hcmRCYWNrZ3JvdW5kPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5sZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG5SZWFjdERPTS5yZW5kZXIoPFNpbW9uR2FtZSAvPiwgdGFyZ2V0KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZjYy9zaW1vbi9pbmRleC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBb0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7QUEwQ0E7QUFFQTtBQUNBO0FBQ0E7QUE5Q0E7QUFnREE7QUFDQTtBQUNBO0FBbERBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNFQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRkE7QUE2RkE7QUFDQTtBQUNBO0FBQ0E7QUFoR0E7QUFrR0E7QUFDQTtBQUNBO0FBQ0E7QUFyR0E7QUF1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoSEE7QUFrSEE7QUFDQTtBQUNBO0FBakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFoQkE7QUFpQkE7QUFDQTs7O0FBb0dBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFMQTtBQUpBO0FBREE7QUF3QkE7Ozs7OztBQUlBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ })

/******/ });