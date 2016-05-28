module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(26);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(6);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(9);
    }, '/500': function _() {
      return __webpack_require__(10);
    }, '/about': function about() {
      return __webpack_require__(11);
    }, '/': function _() {
      return __webpack_require__(12);
    }, '/privacy': function privacy() {
      return __webpack_require__(13);
    }, '/security': function security() {
      return __webpack_require__(14);
    }, '/terms': function terms() {
      return __webpack_require__(15);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          ), component));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview', location.pathname);
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(23);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(24);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(25);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(16);

  var _Link = __webpack_require__(7);

  var _Link2 = _interopRequireDefault(_Link);

  var Footer = (function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
      _classCallCheck(this, Footer);

      _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Footer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'handleOutboundLinkClick',
      value: function handleOutboundLinkClick(event) {
        var target = event.currentTarget;
        window.ga('send', 'event', {
          eventCategory: 'Outbound Link',
          eventAction: 'click',
          eventLabel: target.href
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'footer',
          { className: 'app--footer' },
          _react2['default'].createElement(
            'div',
            { className: 'app--footer-content ui container' },
            _react2['default'].createElement(
              'div',
              { className: 'ui stackable grid' },
              _react2['default'].createElement(
                'div',
                { className: 'three wide column text-left' },
                _react2['default'].createElement(
                  'a',
                  { href: 'http://odoruinu.net/',
                    target: '_blank',
                    onClick: this.handleOutboundLinkClick },
                  '© Takuya Matsuyama'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'thirteen wide column right aligned' },
                _react2['default'].createElement(
                  'ul',
                  { className: 'links' },
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: '/terms', onClick: _Link2['default'].handleClick },
                      'Terms of Use'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: '/privacy', onClick: _Link2['default'].handleClick },
                      'Privacy Policy'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      {
                        href: 'https://github.com/inkdropapp/forum',
                        target: '_blank',
                        onClick: this.handleOutboundLinkClick
                      },
                      'Forum'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      {
                        href: 'mailto:inkdrop@pkpk.info',
                        onClick: this.handleOutboundLinkClick
                      },
                      'Contact'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      {
                        href: 'https://twitter.com/inkdrop_app',
                        target: '_blank',
                        onClick: this.handleOutboundLinkClick
                      },
                      'Twitter'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      {
                        href: 'https://medium.com/@inkdrop',
                        target: '_blank',
                        onClick: this.handleOutboundLinkClick
                      },
                      'Blog'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return Footer;
  })(_react2['default'].Component);

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(17);

  var _Navigation = __webpack_require__(8);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(5);

  var _Footer2 = _interopRequireDefault(_Footer);

  // import Link from '../Link';

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'header',
        { className: 'app--header' },
        _react2['default'].createElement(
          'div',
          { className: 'ui container' },
          _react2['default'].createElement(_Navigation2['default'], null)
        )
      ),
      children,
      _react2['default'].createElement(_Footer2['default'], null)
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(18);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(19);

  // import Link from '../Link';

  function Navigation() {
    return _react2['default'].createElement(
      'div',
      { className: 'ui grid' },
      _react2['default'].createElement(
        'div',
        { className: 'row' },
        _react2['default'].createElement(
          'a',
          { href: 'https://inkdrop.info/', className: 'app--logo' },
          _react2['default'].createElement('img', {
            src: '//inkdrop-prod.s3.amazonaws.com/site/header-logo@2x.png',
            width: '196',
            height: '45',
            alt: 'logo'
          })
        ),
        _react2['default'].createElement(
          'ul',
          { className: 'app--navbar reset-list un-select' },
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'a',
              { href: 'https://inkdrop.info/login' },
              'Login'
            )
          )
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          { className: "ui container main-content" },
          _react2["default"].createElement(
            "h1",
            null,
            "Not Found"
          ),
          _react2["default"].createElement(
            "p",
            null,
            "The page you're looking for was not found."
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(20);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'about' },
          _react2['default'].createElement(
            'h2',
            null,
            'Takuya Matsuyama'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Digital Craftsman ( Artist / Developer / Designer )'
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement('img', { className: 'top-image', src: 'https://farm6.staticflickr.com/5688/22863546315_12dd51f402_h.jpg', width: '100%', alt: 'L1011534' })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'Bio: '
            ),
            _react2['default'].createElement(
              'div',
              null,
              '1984 大阪生まれ / Born in Osaka, Japan.'
            ),
            _react2['default'].createElement(
              'div',
              null,
              '2010 奈良先端科学技術大学院大学情報科学研究科修士課程修了 / Completed the Master\'s Program in the Graduate School of Information Science at Nara Institute of Science and Technology'
            ),
            _react2['default'].createElement(
              'div',
              null,
              '2010 ヤフー株式会社入社 / Works at Yahoo! Japan'
            ),
            _react2['default'].createElement(
              'div',
              null,
              '2012 独立 / Currently working as a freelancer'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'Work: '
            ),
            _react2['default'].createElement(
              'div',
              null,
              'デジタル領域を中心に、自身の欲しいと思ったサービスを制作。 企画からデザイン・開発・運用まで全て一人で行う。 iOSなどのスマホアプリからウェブアプリまで、技術やプラットフォームを限定せず幅広く活動。 その傍ら、フリーランスとして様々なプロジェクトに参加。 枠に囚われずオーダーメイドで柔軟にモノを作る「クラフトマンシップ」を得意とする。'
            ),
            _react2['default'].createElement(
              'div',
              null,
              'He creates digital services/stuffs which he wants itself. He is a \'Digital Craftsman\', that is, he does plan, design, code and operate through all his products. His interests and skills are not limited to a certain platform and a technology but including iOS app, web app, machine learning, etc. He participates many projects as a freelancer who creates new stuff fully customized from scratch.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'I ♥: '
            ),
            _react2['default'].createElement(
              'div',
              null,
              'Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'Contact me: '
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://twitter.com/noradaiko' },
                  'Twitter @noradaiko'
                )
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/noradaiko' },
                  'GitHub'
                )
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:nora@odoruinu.net' },
                  'E-mail'
                )
              )
            )
          )
        );
      }
    }], [{
      key: 'title',
      value: 'About',
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  __webpack_require__(21);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // import { Grid, Col, Row } from 'react-bootstrap';

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'h1',
            null,
            'Inkdrop Documentation'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Welcome to Inkdrop! Get familiar with the Inkdrop product using the tutorials and references below.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Available soon'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(22);
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'h1',
            null,
            'Privacy Policy'
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Privacy Policy',
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'h1',
            null,
            'Security'
          ),
          _react2['default'].createElement(
            'h2',
            null,
            'Transport Encryption'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Inkdrop uses industry standard encryption to protect your data in transit. This is commonly referred to as transport layer security (“TLS”) or secure socket layer (“SSL”) technology.'
          ),
          _react2['default'].createElement(
            'h2',
            null,
            'Encrypted Note with Password'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'You can encrypt a note to add an extra level of protection to private information. Evernote uses AES (Advanced Encryption Standard) with a 256-bit key to encrypt your note content.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'When you encrypt note, we prompt you for a passphrase. We take your passphrase along with a unique salt and use PBKDF2 with 90,510 rounds of SHA-512 to derive a 256-bit AES key. We use this key, along with an initialization vector, to encrypt your data in GCM (Galois/Counter Mode).'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'We never receive a copy of this key or your passphrase and don’t use any escrow mechanism to recover your encrypted data. This means that if you forget your passphrase, we cannot recover your data.'
          )
        );
      }
    }], [{
      key: 'title',
      value: 'Security',
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'h1',
            null,
            'Terms of Use'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The beta version of this service is free of charge to beta users during the beta stage. The \'beta version\' or \'private beta\' is the trial period of this service until its official release which may include a change in the service name and the features it includes. A beta user is someone who is interested in examining and evaluating the beta version of this service for personal or business reasons. This terms of use are subject to change with or without notice after the initial beta sign up stage.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'In addition, there is no guarantee that the features and functionalities of the beta version will be included in the official release - the official version may include different features and functionalities than the beta version. Inkdrop is not responsible for any damage, inconvenience, or loss experienced during the beta trial period, when available, by any beta user.'
          )
        );
      }
    }], [{
      key: 'title',
      value: 'Terms of Use',
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".app--footer {\n  padding: 3rem 0;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n  background: rgba(34, 36, 38, 0.02);\n  font-size: 1.1rem;\n}\n.app--footer iframe:first-child {\n  margin-right: 25px;\n}\n.app--footer .app--footer-content {\n  text-align: center;\n}\n.app--footer ul.links {\n  display: inline-block;\n  list-style: none;\n  margin: 0;\n}\n.app--footer ul.links li {\n  display: inline-block;\n  margin: 0 1em;\n}\n", ""]);

  // exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: white;\n  color: #525252;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.main-content {\n  padding-top: 2rem;\n  margin-bottom: 50px;\n}\n", ""]);

  // exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.app--header {\n  background-color: #071B26;\n\n}\n\n.app--header .app--logo {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  line-height: 1;\n\n}\n\n.app--header .ui.grid {\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  text-align: right;\n  height: 45px;\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar li {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1rem;\n\n}\n\n.app--header ul.app--navbar li > a {\n  display: inline-block;\n  padding: 14px 0;\n\n}\n\n.app--header ul.app--navbar li:last-child {\n  margin-right: 0;\n\n}\n\n.app--header a {\n  color: #bbb\n\n}\n\n.app--header a:hover {\n  color: white;\n\n}\n\n", ""]);

  // exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n.about .section {\n  margin: 0.8em 0;\n}\n\n.about .section strong {\n  color: #525252;\n}\n", ""]);

  // exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = "<h2 id=\"definitions\">Definitions</h2>\n<p>Inkdrop is owned by Takuya Matsuyama, Tokyo - Japan. (referred to as &quot;I&quot;, &quot;Me&quot;, &quot;Our&quot; or &quot;We&quot;).\nAs a customer of this service you&#39;re a &quot;User&quot; or &quot;You&quot; according to this agreement.\nThe App or any services offered by us will be referred to as &quot;Inkdrop&quot; or &quot;Service&quot;.</p>\n<h2 id=\"introduction\">Introduction</h2>\n<p>We realize that personal information is the important property of an individual, and have stated the following policies on treatment of personal information to appropriately collect and use personal information, to comply with laws and ordinances related to personal information and to prevent and cure leakage of personal information, and will take the best care in control and use of personal information. \nPlease note that any collection of personal information by linked sites or any other entities is not covered by this Privacy Policy.</p>\n<h2 id=\"appropriate-collection-and-purpose-of-use\">Appropriate Collection and Purpose of Use</h2>\n<p>We will collect personal information through appropriate methods for the following purposes:</p>\n<ul>\n<li>to provide our services;</li>\n<li>to provide notices and send questionnaires regarding our services that are currently provided or under consideration for future releases;</li>\n<li>to help improve the services and develop new services;</li>\n<li>to make contact with you;</li>\n<li>to verify your identity and otherwise respond to inquiries;</li>\n<li>to select in drawings and deliver prizes or products;</li>\n<li>to transmit advertisement information sponsored by us or any other third party;</li>\n<li>to create statistical data regarding the use of our services;</li>\n<li>to prevent any use in breach of the Terms of Service.</li>\n</ul>\n<h2 id=\"appropriate-control-and-protection\">Appropriate Control and Protection</h2>\n<p>Personal information will be strictly controlled, and appropriate measures will be taken to prevent and cure unauthorized access, loss, destruction, falsification, and leakage of personal information.</p>\n<h2 id=\"entrustment\">Entrustment</h2>\n<p>We may entrust the whole or part of the personal information it collected to outsourcing entities to the extent required to achieve the purpose of use. In such case, we will fully examine the eligibility of such outsourcing entities, state confidentiality provisions in the contracts with them, and provide any necessary and appropriate supervision to them.</p>\n<h2 id=\"provision-to-third-party\">Provision to Third Party</h2>\n<p>We will not disclose or provide any data to any third party except when a prior consent is given by you;\nit is based on laws and ordinances;\nany breach of the Terms of Service for Inkdrop or other our services should occur, and there are sufficient reasons for determining the disclosure of the personal information is necessary to protect our rights, property and services;\nit is necessary for the protection of the life, body or property of an individual and is difficult to obtain your consent;\nit is specially necessary for improving public health or promoting the sound growth of children and is difficult to obtain your consent;\nit is necessary for cooperating with a national or local authority or an entity entrusted by it in executing the affairs prescribed by laws and ordinances, and obtaining your consent is likely to impede the execution of such affairs; or\nany succession of our business including the provision of personal information is made due to any merger, company split, transfer of operations or other reasons.</p>\n<h2 id=\"joint-use\">Joint Use</h2>\n<p>We may jointly use any personal information with our business cooperators in providing our services.\nIn such case, we will, in advance, publish the items of the personal information used jointly, the scope of the joint users, the purpose for which the personal information is used jointly and the name of person responsible for the management of the personal information is used jointly.</p>\n<h2 id=\"use-by-minors-under-18\">Use by minors under 18</h2>\n<p>If you are under 18, please use our service and input the personal information upon the consent of your custodian.</p>\n<h2 id=\"procedures-for-disclosure\">Procedures for Disclosure</h2>\n<p>We will respond without delay to your request for notice of the purpose of use, disclosure, correction, addition or deletion of contents, discontinuance of the use, erasure, and discontinuance of provision to a third party (hereinafter referred to as “Disclosure, etc.”) of (your) personal information.\nProvided, however, you are required to take the procedures prescribed by us in requesting Disclosure, etc.</p>\n<h2 id=\"disclaimer\">Disclaimer</h2>\n<p>We shall assume no liability whatsoever if you reveal the personal information to third parties using any feature of our services or any other means and you become identifiable by such information you disclosed on our services.</p>\n<h2 id=\"creation-and-use-of-statistical-data\">Creation and Use of Statistical Data</h2>\n<p>We may crate, based on the personal information collected, statistical data processed so that no individual is identifiable.\nWith regard to such creation and use of the personally unidentifiable statistical data, we may conduct without any restriction.</p>\n<h2 id=\"collection-and-use-of-attribute-information-activity-history\">Collection and Use of Attribute Information/Activity History</h2>\n<p>We may collect and/or use the following personally unidentifiable information to personalize our services or contents of advertisements and may provide such information to sponsors, information providers, or service providers: cookies, logs, activity histories for accessed URLs, contents or reference orders, individual terminal identification information and other device information, and attribute information on gender, occupation, or age.</p>\n<h2 id=\"amendment\">Amendment</h2>\n<p>We reserve the right to make amendments to this Privacy Policy.</p>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);