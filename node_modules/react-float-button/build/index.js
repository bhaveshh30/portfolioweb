module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


// import PropTypes from 'prop-types';

// Index component
var FloatButton = function (_Component) {
  _inherits(FloatButton, _Component);

  function FloatButton() {
    _classCallCheck(this, FloatButton);

    var _this = _possibleConstructorReturn(this, (FloatButton.__proto__ || Object.getPrototypeOf(FloatButton)).call(this));

    _this.state = {
      show: false
    };
    _this.showUpdate = _this.showUpdate.bind(_this);
    return _this;
  }

  _createClass(FloatButton, [{
    key: 'showUpdate',
    value: function showUpdate() {
      this.setState({
        show: !this.state.show
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var divStyle = Object.assign({}, this.props.style, { position: 'relative' });
      return _react2.default.createElement(
        'div',
        { style: divStyle },
        Object.prototype.toString.call(this.props.children) === '[object Array]' && this.props.children.map(function (item, i) {
          if (i === 0) {
            return _react2.default.createElement(
              'div',
              {
                key: 'float-btn-' + i,
                tabIndex: 0,
                role: 'button',
                style: { zIndex: 2, position: 'relative' },
                onClick: _this2.showUpdate
              },
              item
            );
          }

          return _react2.default.createElement(
            'div',
            {
              tabIndex: -1,
              role: 'button',
              style: {
                zIndex: 1,
                position: 'absolute',
                bottom: _this2.state.show ? _this2.props.margin * i : 0,
                opacity: _this2.state.show ? 1 : 0,
                visibility: _this2.state.show ? 'visible' : 'hidden',

                MsTransition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                WebkitTransition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

                MsTransitionDelay: i * _this2.props.delay + 's',
                WebkitTransitionDelay: i * _this2.props.delay + 's',
                transitionDelay: i * _this2.props.delay + 's',

                MsTransform: 'scale(' + (_this2.state.show ? 1 : 0) + ', ' + (_this2.state.show ? 1 : 0) + ')',
                WebkitTransform: 'scale(' + (_this2.state.show ? 1 : 0) + ', ' + (_this2.state.show ? 1 : 0) + ')',
                transform: 'scale(' + (_this2.state.show ? 1 : 0) + ', ' + (_this2.state.show ? 1 : 0) + ')'
              },
              onClick: _this2.showUpdate
            },
            item
          );
        })
      );
    }
  }]);

  return FloatButton;
}(_react.Component);

// FloatButton.propTypes = {
//   margin: PropTypes.number,
//   children: PropTypes.array.isRequired, // eslint-disable-line
//   style: PropTypes.obj,
// };

FloatButton.defaultProps = {
  margin: 50,
  children: [],
  style: {},
  delay: 0.03
};

exports.default = FloatButton;

/***/ })
/******/ ]);