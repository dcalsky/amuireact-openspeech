(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["React-openspeech"] = factory(require("react"));
	else
		root["React-openspeech"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 类说明
	 * @class Openspeech
	 * @constructor
	 * @props
	 */
	
	var Openspeech = _react2.default.createClass({
	  displayName: 'Openspeech',
	
	  propTypes: {
	    enable: _react2.default.PropTypes.bool.required, // component state of running
	    appid: _react2.default.PropTypes.string.required, // your private app id
	    timestamp: _react2.default.PropTypes.any, // time stamp
	    expires: _react2.default.PropTypes.number, // expires
	    secretKey: _react2.default.PropTypes.string.required, // your secret key
	    url: _react2.default.PropTypes.string, // server address
	    compress: _react2.default.PropTypes.string, // voice compress algorithm
	    reconnection: _react2.default.PropTypes.bool, // whether client support reconnection after disconnecting
	    resultType: _react2.default.PropTypes.string, // format for result: json or plain
	    resultCharset: _react2.default.PropTypes.string, // format of result charset
	    engineType: _react2.default.PropTypes.string, // decide which engine to distinguish
	    punctuationType: _react2.default.PropTypes.number, // whether result includes punctuation marks
	    getVolume: _react2.default.PropTypes.func, // a callback function to get the current volume
	    getResult: _react2.default.PropTypes.func, // a callback function to get the result from server
	    getCurrentMessage: _react2.default.PropTypes.func },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      enable: false,
	      timestamp: new Date().toLocaleTimeString(),
	      expires: 86400, // A day
	      url: 'http://webapi.openspeech.cn/',
	      compress: 'speex',
	      reconnection: 'true',
	      resultType: 'json',
	      resultCharset: 'utf8',
	      engineType: 'sms16k',
	      punctuationType: 1, // the default result has punctuation marks
	      getVolume: function getVolume(volume) {},
	      getResult: function getResult(err, result) {},
	      getCurrentMessage: function getCurrentMessage(message) {}
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, prevProps) {
	    var enable = nextProps.enable !== prevProps.enable && nextProps.enable;
	    if (enable) {
	      this._handleStartListen();
	    } else {
	      this._handleStopListen();
	    }
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {},
	  getInitialState: function getInitialState() {
	    return {
	      loadCompleted: false,
	      session: null,
	      ssbParam: {},
	      result: null
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    if (!IFlyIatSession) {
	      this.setState({ loadCompleted: false });
	      throw "Not loading correct the Openspeech modules!";
	    }
	    var session = new IFlyIatSession({
	      'url': this.props.url,
	      'reconnection': this.props.reconnection,
	      'reconnectionDelay': 30000,
	      'compress': this.props.compress
	    });
	    this.setState({
	      session: session,
	      loadCompleted: true,
	      ssbParam: {
	        "grammar_list": null,
	        "params": "aue=speex-wb;-1, usr = mkchen, ssm = 1, sub = iat, net_type = wifi, rse = " + this.props.resultCharset + ", ent =" + this.props.engineType + ", rst = " + this.props.resultType + ", auf  = audio/L16;rate=16000, vad_enable = 1, vad_timeout = 5000, vad_speech_tail = 500, compress = igzip, caller.appid = " + this.props.appid + ", timestamp = " + this.props.timestamp + ", expires = " + this.props.expires,
	        "signature": "TEST SIGNATURE"
	      }
	    });
	  },
	  _handleStartListen: function _handleStartListen() {
	    this.state.session.start(this.state.ssbParam, this.props.getVolume, this.props.getResult, this.props.getCurrentMessage);
	  },
	  _handleStopListen: function _handleStopListen() {
	    this.state.session.stop(null);
	  },
	  render: function render() {
	    return _react2.default.createElement('div', null);
	  }
	});
	
	exports.default = Openspeech;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;
//# sourceMappingURL=amuireact-openspeech.js.map