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

  var _reactDom = __webpack_require__(43);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _coreLocation = __webpack_require__(6);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(9);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(12);
    }, '/500': function _() {
      return __webpack_require__(13);
    }, '/about': function about() {
      return __webpack_require__(14);
    }, '/': function _() {
      return __webpack_require__(15);
    }, '/manual/basic-usage': function manualBasicUsage() {
      return __webpack_require__(16);
    }, '/manual/extend-inkdrop-with-plugins': function manualExtendInkdropWithPlugins() {
      return __webpack_require__(17);
    }, '/manual/': function manual() {
      return __webpack_require__(18);
    }, '/manual/quick-start-guide': function manualQuickStartGuide() {
      return __webpack_require__(19);
    }, '/manual/searching-notes': function manualSearchingNotes() {
      return __webpack_require__(20);
    }, '/manual/synchronizing-in-the-cloud': function manualSynchronizingInTheCloud() {
      return __webpack_require__(21);
    }, '/manual/writing-note': function manualWritingNote() {
      return __webpack_require__(22);
    }, '/privacy': function privacy() {
      return __webpack_require__(23);
    }, '/security': function security() {
      return __webpack_require__(24);
    }, '/terms': function terms() {
      return __webpack_require__(25);
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

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _manualMenu = __webpack_require__(5);

  var _manualMenu2 = _interopRequireDefault(_manualMenu);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

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
            'div',
            { className: 'ui stackable grid' },
            _react2['default'].createElement(
              'div',
              { className: 'four wide column' },
              _react2['default'].createElement(_manualMenu2['default'], null)
            ),
            _react2['default'].createElement(
              'div',
              { className: 'twelve wide column doc-content' },
              _react2['default'].createElement(
                'div',
                { className: 'ui breadcrumb' },
                _react2['default'].createElement(
                  _Link2['default'],
                  { to: '/', className: 'section' },
                  'Top'
                ),
                _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
                _react2['default'].createElement(
                  _Link2['default'],
                  { to: '/manual/', className: 'section' },
                  'Inkdrop Manual'
                ),
                _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'active section' },
                  this.props.currentPageTitle
                )
              ),
              this.props.children
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.node.isRequired,
        currentPageTitle: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 4 */
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

  __webpack_require__(28);

  var _coreLocation = __webpack_require__(6);

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
          _extends({ href: to }, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.node.isRequired,
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

  var _menuLink = __webpack_require__(11);

  var _menuLink2 = _interopRequireDefault(_menuLink);

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
          'ul',
          { className: 'article-list' },
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              _menuLink2['default'],
              { to: '/manual/quick-start-guide' },
              'Quick start guide'
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              _menuLink2['default'],
              { to: '/manual/basic-usage' },
              'Basic usage'
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              _menuLink2['default'],
              { to: '/manual/writing-note' },
              'Writing note'
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              _menuLink2['default'],
              { to: '/manual/searching-notes' },
              'Searching notes'
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              _menuLink2['default'],
              { to: '/manual/synchronizing-in-the-cloud' },
              'Synchronizing in the cloud'
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              _menuLink2['default'],
              { to: '/manual/extend-inkdrop-with-plugins' },
              'Extend Inkdrop with plugins'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
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

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _historyLibCreateBrowserHistory = __webpack_require__(40);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(41);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(42);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

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

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(26);

  var _Link = __webpack_require__(4);

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
                      _Link2['default'],
                      { to: '/terms' },
                      'Terms of Use'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      _Link2['default'],
                      { to: '/privacy' },
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
/* 9 */
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

  __webpack_require__(27);

  var _Navigation = __webpack_require__(10);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(8);

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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(29);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

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
              _Link2['default'],
              { to: '/' },
              'Docs'
            )
          ),
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Link2 = __webpack_require__(4);

  var _Link3 = _interopRequireDefault(_Link2);

  __webpack_require__(30);

  var _default = (function (_Link) {
    _inherits(_default, _Link);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        var _ref = global.window && global.window.location || {};

        var pathname = _ref.pathname;

        var isActive = pathname === to ? 'current-active' : '';
        var className = (props.className || '') + ' ' + isActive;
        return _react2['default'].createElement(
          'a',
          _extends({ href: to, className: className }, props, { onClick: _Link3['default'].handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.node.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }]);

    return _default;
  })(_Link3['default']);

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
/* 14 */
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

  __webpack_require__(31);

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

  __webpack_require__(32);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsManualMenu = __webpack_require__(5);

  var _componentsManualMenu2 = _interopRequireDefault(_componentsManualMenu);

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
            'Welcome to Inkdrop! These docs give an overview of how Inkdrop works, and are meant to be a reference for plugin developers.'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'ui segment' },
            _react2['default'].createElement(
              'div',
              { className: 'ui grid' },
              _react2['default'].createElement(
                'div',
                { className: 'three column row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'h3',
                    { className: 'ui header' },
                    _react2['default'].createElement('i', { className: 'book icon' }),
                    _react2['default'].createElement(
                      'div',
                      { className: 'content' },
                      'Inkdrop Manual'
                    )
                  ),
                  _react2['default'].createElement(_componentsManualMenu2['default'], null)
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'h3',
                    { className: 'ui header' },
                    _react2['default'].createElement('i', { className: 'setting icon' }),
                    _react2['default'].createElement(
                      'div',
                      { className: 'content' },
                      'API Reference'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'h3',
                    { className: 'ui header' },
                    _react2['default'].createElement('i', { className: 'comments icon' }),
                    _react2['default'].createElement(
                      'div',
                      { className: 'content' },
                      'Inkdrop Forum'
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    null,
                    'The ',
                    _react2['default'].createElement(
                      'a',
                      { href: 'https://github.com/inkdropapp/forum/' },
                      'Inkdrop Forum'
                    ),
                    ' is the place to discuss anything and everything Inkdrop related with the entire Inkdrop community. If you have problems or are looking for help, this is your place.'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://mixpanel.com/f/partner', rel: 'nofollow' },
            _react2['default'].createElement('img', { src: '//cdn.mxpnl.com/site_media/images/partner/badge_light.png', alt: 'Mobile Analytics' })
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
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

  var _componentsManualLayout = __webpack_require__(3);

  var _componentsManualLayout2 = _interopRequireDefault(_componentsManualLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(34);
        return _react2['default'].createElement(
          _componentsManualLayout2['default'],
          { currentPageTitle: ManualPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            ManualPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Basic Usage',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 17 */
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

  var _componentsManualLayout = __webpack_require__(3);

  var _componentsManualLayout2 = _interopRequireDefault(_componentsManualLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(35);
        return _react2['default'].createElement(
          _componentsManualLayout2['default'],
          { currentPageTitle: ManualPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            ManualPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Extend Inkdrop with Plugins',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 18 */
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

  var _componentsManualMenu = __webpack_require__(5);

  var _componentsManualMenu2 = _interopRequireDefault(_componentsManualMenu);

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
            'h2',
            { className: 'ui header' },
            _react2['default'].createElement('i', { className: 'book icon' }),
            _react2['default'].createElement(
              'div',
              { className: 'content' },
              'Inkdrop Manual'
            )
          ),
          _react2['default'].createElement(_componentsManualMenu2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
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

  var _componentsManualLayout = __webpack_require__(3);

  var _componentsManualLayout2 = _interopRequireDefault(_componentsManualLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(36);
        return _react2['default'].createElement(
          _componentsManualLayout2['default'],
          { currentPageTitle: ManualPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            ManualPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Quick Start Guide',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 20 */
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

  var _componentsManualLayout = __webpack_require__(3);

  var _componentsManualLayout2 = _interopRequireDefault(_componentsManualLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(37);
        return _react2['default'].createElement(
          _componentsManualLayout2['default'],
          { currentPageTitle: ManualPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            ManualPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Searching Notes',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 21 */
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

  var _componentsManualLayout = __webpack_require__(3);

  var _componentsManualLayout2 = _interopRequireDefault(_componentsManualLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(38);
        return _react2['default'].createElement(
          _componentsManualLayout2['default'],
          { currentPageTitle: ManualPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            ManualPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Synchronizing in the Cloud',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 22 */
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

  var _componentsManualLayout = __webpack_require__(3);

  var _componentsManualLayout2 = _interopRequireDefault(_componentsManualLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(39);
        return _react2['default'].createElement(
          _componentsManualLayout2['default'],
          { currentPageTitle: ManualPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            ManualPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Writing Note',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 23 */
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
        var md = __webpack_require__(33);
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
/* 24 */
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
            'You can encrypt a note to add an extra level of protection to private information. Inkdrop uses AES (Advanced Encryption Standard) with a 256-bit key to encrypt your note content.'
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".app--footer {\n  padding: 3rem 0;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n  background: rgba(34, 36, 38, 0.02);\n  font-size: 1.1rem;\n}\n.app--footer iframe:first-child {\n  margin-right: 25px;\n}\n.app--footer .app--footer-content {\n  text-align: center;\n}\n.app--footer ul.links {\n  display: inline-block;\n  list-style: none;\n  margin: 0;\n}\n.app--footer ul.links li {\n  display: inline-block;\n  margin: 0 1em;\n}\n", ""]);

  // exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment, .diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword, .css .rule .hljs-keyword, .hljs-winutils, .nginx .hljs-title, .hljs-subst, .hljs-request, .hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number, .hljs-hexcolor, .ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string, .hljs-tag .hljs-value, .hljs-doctag, .tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title, .hljs-id, .scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword, .hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title, .hljs-type, .vhdl .hljs-literal, .tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag, .hljs-tag .hljs-title, .hljs-rule .hljs-property, .django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute, .hljs-variable, .lisp .hljs-body, .hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol, .ruby .hljs-symbol .hljs-string, .lisp .hljs-keyword, .clojure .hljs-keyword, .scheme .hljs-keyword, .tex .hljs-special, .hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor, .hljs-pragma, .hljs-pi, .hljs-doctype, .hljs-shebang, .hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: white;\n  color: #525252;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.main-content {\n  padding-top: 2rem;\n  margin-bottom: 50px;\n}\n\n.main-content .article-list a {\n  display: block;\n  padding: 4px;\n}\n\n.main-content .doc-content {\n\n  -webkit-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, freesans, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n}\n\n.main-content .doc-content blockquote {\n  margin: 0;\n}\n\n.main-content .doc-content p, .main-content .doc-content blockquote, .main-content .doc-content ul, .main-content .doc-content ol, .main-content .doc-content dl, .main-content .doc-content table, .main-content .doc-content pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.main-content .doc-content hr {\n  height: 4px;\n  padding: 0;\n  margin: 16px 0;\n  background-color: #e7e7e7;\n  border: 0 none;\n}\n\n.main-content .doc-content blockquote {\n  padding: 5px 15px;\n  color: #777;\n  border-left: 4px solid #ddd;\n}\n\n.main-content .doc-content blockquote>:first-child {\n  margin-top: 0;\n}\n\n.main-content .doc-content blockquote>:last-child {\n  margin-bottom: 0;\n}\n\n.main-content .doc-content code {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(0,0,0,0.04);\n  border-radius: 3px;\n}\n\n.main-content .doc-content code:before, .main-content .doc-content code:after {\n  letter-spacing: -0.2em;\n  content: \"\\A0\";\n}\n\n.main-content .doc-content pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.main-content .doc-content .highlight {\n  margin-bottom: 16px;\n}\n\n.main-content .doc-content .highlight pre, .main-content .doc-content pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f7f7f7;\n  border-radius: 3px;\n}\n\n.main-content .doc-content .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.main-content .doc-content pre {\n  word-wrap: normal;\n}\n\n.main-content .doc-content pre code {\n  display: inline;\n  max-width: initial;\n  padding: 0;\n  margin: 0;\n  overflow: initial;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\n.main-content .doc-content pre code:before, .main-content .doc-content pre code:after {\n  content: normal;\n}\n", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.app--header {\n  background-color: #071B26;\n\n}\n\n.app--header .app--logo {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  line-height: 1;\n\n}\n\n.app--header .ui.grid {\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  text-align: right;\n  height: 45px;\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar li {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1rem;\n\n}\n\n.app--header ul.app--navbar li > a {\n  display: inline-block;\n  padding: 14px 0;\n\n}\n\n.app--header ul.app--navbar li:last-child {\n  margin-right: 0;\n\n}\n\n.app--header a {\n  color: #bbb\n\n}\n\n.app--header a:hover {\n  color: white;\n\n}\n\n", ""]);

  // exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "a.current-active {\n  font-weight: bold;\n  background-color: lightblue;\n}\n", ""]);

  // exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n.about .section {\n  margin: 0.8em 0;\n}\n\n.about .section strong {\n  color: #525252;\n}\n", ""]);

  // exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = "<h2 id=\"definitions\">Definitions</h2>\n<p>Inkdrop is owned by Takuya Matsuyama, Tokyo - Japan. (referred to as &quot;I&quot;, &quot;Me&quot;, &quot;Our&quot; or &quot;We&quot;).\nAs a customer of this service you&#39;re a &quot;User&quot; or &quot;You&quot; according to this agreement.\nThe App or any services offered by us will be referred to as &quot;Inkdrop&quot; or &quot;Service&quot;.</p>\n<h2 id=\"introduction\">Introduction</h2>\n<p>We realize that personal information is the important property of an individual, and have stated the following policies on treatment of personal information to appropriately collect and use personal information, to comply with laws and ordinances related to personal information and to prevent and cure leakage of personal information, and will take the best care in control and use of personal information. \nPlease note that any collection of personal information by linked sites or any other entities is not covered by this Privacy Policy.</p>\n<h2 id=\"appropriate-collection-and-purpose-of-use\">Appropriate Collection and Purpose of Use</h2>\n<p>We will collect personal information through appropriate methods for the following purposes:</p>\n<ul>\n<li>to provide our services;</li>\n<li>to provide notices and send questionnaires regarding our services that are currently provided or under consideration for future releases;</li>\n<li>to help improve the services and develop new services;</li>\n<li>to make contact with you;</li>\n<li>to verify your identity and otherwise respond to inquiries;</li>\n<li>to select in drawings and deliver prizes or products;</li>\n<li>to transmit advertisement information sponsored by us or any other third party;</li>\n<li>to create statistical data regarding the use of our services;</li>\n<li>to prevent any use in breach of the Terms of Service.</li>\n</ul>\n<h2 id=\"appropriate-control-and-protection\">Appropriate Control and Protection</h2>\n<p>Personal information will be strictly controlled, and appropriate measures will be taken to prevent and cure unauthorized access, loss, destruction, falsification, and leakage of personal information.</p>\n<h2 id=\"entrustment\">Entrustment</h2>\n<p>We may entrust the whole or part of the personal information it collected to outsourcing entities to the extent required to achieve the purpose of use. In such case, we will fully examine the eligibility of such outsourcing entities, state confidentiality provisions in the contracts with them, and provide any necessary and appropriate supervision to them.</p>\n<h2 id=\"provision-to-third-party\">Provision to Third Party</h2>\n<p>We will not disclose or provide any data to any third party except when a prior consent is given by you;\nit is based on laws and ordinances;\nany breach of the Terms of Service for Inkdrop or other our services should occur, and there are sufficient reasons for determining the disclosure of the personal information is necessary to protect our rights, property and services;\nit is necessary for the protection of the life, body or property of an individual and is difficult to obtain your consent;\nit is specially necessary for improving public health or promoting the sound growth of children and is difficult to obtain your consent;\nit is necessary for cooperating with a national or local authority or an entity entrusted by it in executing the affairs prescribed by laws and ordinances, and obtaining your consent is likely to impede the execution of such affairs; or\nany succession of our business including the provision of personal information is made due to any merger, company split, transfer of operations or other reasons.</p>\n<h2 id=\"joint-use\">Joint Use</h2>\n<p>We may jointly use any personal information with our business cooperators in providing our services.\nIn such case, we will, in advance, publish the items of the personal information used jointly, the scope of the joint users, the purpose for which the personal information is used jointly and the name of person responsible for the management of the personal information is used jointly.</p>\n<h2 id=\"use-by-minors-under-18\">Use by minors under 18</h2>\n<p>If you are under 18, please use our service and input the personal information upon the consent of your custodian.</p>\n<h2 id=\"procedures-for-disclosure\">Procedures for Disclosure</h2>\n<p>We will respond without delay to your request for notice of the purpose of use, disclosure, correction, addition or deletion of contents, discontinuance of the use, erasure, and discontinuance of provision to a third party (hereinafter referred to as “Disclosure, etc.”) of (your) personal information.\nProvided, however, you are required to take the procedures prescribed by us in requesting Disclosure, etc.</p>\n<h2 id=\"disclaimer\">Disclaimer</h2>\n<p>We shall assume no liability whatsoever if you reveal the personal information to third parties using any feature of our services or any other means and you become identifiable by such information you disclosed on our services.</p>\n<h2 id=\"creation-and-use-of-statistical-data\">Creation and Use of Statistical Data</h2>\n<p>We may create, based on the personal information collected, statistical data processed so that no individual is identifiable.\nWith regard to such creation and use of the personally unidentifiable statistical data, we may conduct without any restriction.</p>\n<h2 id=\"collection-and-use-of-attribute-information-activity-history\">Collection and Use of Attribute Information/Activity History</h2>\n<p>We may collect and/or use the following personally unidentifiable information to personalize our services or contents of advertisements and may provide such information to sponsors, information providers, or service providers: cookies, logs, activity histories for accessed URLs, contents or reference orders, individual terminal identification information and other device information, and attribute information on gender, occupation, or age.</p>\n<h2 id=\"amendment\">Amendment</h2>\n<p>We reserve the right to make amendments to this Privacy Policy.</p>\n";

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = "<h2 id=\"inkdrop-has-three-parts\">Inkdrop has three parts</h2>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_screen.png\" title=\"null\" alt=\"Layout\" /></p>\n<ul>\n<li><strong>Sidebar</strong> (on the left): it lists notebooks and tags here. Notebooks are like folders you can create recursively. Tags are like labels which can link notes with related topic.</li>\n<li><strong>Note list</strong> (in the middle): all your notes live here, ordered by modification date by default. You can search notes with keywords from a search bar on the top of it.</li>\n<li><strong>Editor</strong> (on the right): this is where your magic happens; you&#39;re looking at it. 😄</li>\n</ul>\n<h2 id=\"creating-new-note-and-notebook\">Creating new note and notebook</h2>\n<p>To create new note, you can either push a button on the right top of the note list or input keybind <code>Cmd+N</code> / <code>Ctrl+N</code>.</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_addnote.png\" title=\"null\" alt=\"AddNote\" /></p>\n<p>To create new notebook, click a menu item labeled &#39;New notebook..&#39; in the middle of sidebar:</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_addbook.png\" title=\"null\" alt=\"AddBook\" /></p>\n<p>To create a sub notebook, right click on the notebook item which would be parent and choose &quot;New Sub Notebook..&quot; menu.</p>\n<h2 id=\"settings-and-preferences\">Settings and Preferences</h2>\n<p>Inkdrop has a number of settings and preferences you can modify in the Preferences View.</p>\n<p>To open the Settings View, you can:</p>\n<ul>\n<li>on macOS:<ul>\n<li>Use the <em>Inkdrop &gt; Preferences</em> menu item in the menu bar</li>\n<li>Use the <code>Cmd+,</code> keybinding</li>\n</ul>\n</li>\n<li>on Windows &amp; Linux:<ul>\n<li>Use the <em>File &gt; Settings</em> menu item in the menu bar</li>\n<li>Use the <code>Ctrl+,</code> keybinding</li>\n</ul>\n</li>\n</ul>\n<p>And you should see the window like this:</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_preferences.png\" title=\"null\" alt=\"Preferences\" /></p>\n";

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = "<p>Plugins add new functionality or provide new look to Inkdrop. You can activate or deactivate them at any time.\nGo to <code>Preferences &gt; Plugins</code> to see a list of what’s available.\nTo find new plugins to install, please access to <a href=\"https://www.inkdrop.info/plugins\">Inkdrop plugin registry</a>.</p>\n<p>Developers can clone or download additional Inkdrop plugins via <a href=\"https://github.com/inkdropapp/\">GitHub</a>. Installation instructions are here. Many of these are community-contributed, and the selection will continue to grow over time.</p>\n<p>There are three types of the plugin:</p>\n<ul>\n<li><strong>General plugin</strong> - Plugin that adds new functionality</li>\n<li><strong>UI Theme</strong> - Theme for Inkdrop UI</li>\n<li><strong>Preview Theme</strong> - Theme for Markdown preview</li>\n</ul>\n<h2 id=\"using-ipm-inkdrop-plugin-manager-\">Using ipm (Inkdrop Plugin Manager)</h2>\n<blockquote>\n<p>Currently Inkdrop doesn&#39;t provide GUI for installing/uninstalling plugins. It&#39;s planned to support in the future.</p>\n<p>ipm is a fork of <a href=\"https://github.com/atom/apm\">apm (atom package manager)</a>, some output messages may include Atom-related though, please ignore them.</p>\n</blockquote>\n<p><strong>ipm</strong> is a command-line tool to manage plugins for Inkdrop.</p>\n<h3 id=\"macos\">macOS</h3>\n<p>When you first open Inkdrop, it will try to install the <code>ipm</code> command for use in the terminal.\nIf the <code>ipm</code> command has been installed, you&#39;ll see something like this:</p>\n<pre><code class=\"lang-bash\">$ <span class=\"hljs-built_in\">which</span> ipm\n/usr/<span class=\"hljs-built_in\">local</span>/bin/ipm\n</code></pre>\n<p>You can also manually install <code>ipm</code> from <code>Inkdrop -&gt; Install Shell Commands</code> from the menubar.</p>\n<h3 id=\"windows\">Windows</h3>\n<p>The setup program will install <code>ipm</code>, and add it to your <code>PATH</code>.</p>\n<h3 id=\"linux\">Linux</h3>\n<p><code>ipm</code> is not installed automatically. The command is available in the path of <code>&lt;path-to-inkdrop&gt;/resources/app/ipm/bin/ipm</code>.</p>\n<h2 id=\"finding-new-plugins\">Finding new plugins</h2>\n<p>You can also use <code>ipm</code> to find new plugins to install. If you run <code>ipm search</code>, you can search the plugin registry for a search term.</p>\n<pre><code class=\"lang-bash\">$ ipm search emoji\nSearch Results For <span class=\"hljs-string\">'emoji'</span> (1)\n└── markdown-emoji Add emoji syntax support to Inkdrop markdown editor (0 downloads, 0 stars)\n\nUse `ipm install` to install them or visit https://www.inkdrop.info/plugins to <span class=\"hljs-built_in\">read</span> more about them.\n</code></pre>\n<h2 id=\"installing-plugins\">Installing plugins</h2>\n<p>Once you found new plugins to install, you can install them by using the <code>ipm install</code> command:</p>\n<ul>\n<li><code>ipm install &lt;package_name&gt;</code> to install the latest version.</li>\n<li><code>ipm install &lt;package_name&gt;@&lt;package_version&gt;</code> to install a specific version.</li>\n</ul>\n<p>For example <code>ipm install markdown-emoji@0.1.0</code> installs the 0.1.0 release of the <a href=\"https://www.inkdrop.info/plugins/markdown-emoji\">markdown-emoji</a> package.</p>\n<h2 id=\"activating-plugins\">Activating plugins</h2>\n<p>Go to <code>Preferences &gt; Plugins</code>, you can activate/deactivate plugins by toggling a switch on the left of the plugin name here.</p>\n<p><img class=\"ui image\" src=\"/manual/06-plugins-preferences_activating.png\" title=\"null\" alt=\"Activating Plugins\" /></p>\n<h2 id=\"uninstalling-plugins\">Uninstalling plugins</h2>\n<p>You can also uninstall the plugin by running below command:</p>\n<pre><code>$ ipm uninstall &lt;package_name&gt;\n</code></pre>";

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = "<p>Welcome to Inkdrop! Here&#39;s how to get started.\nTo get started with Inkdrop, we&#39;ll need to get it on your system.</p>\n<h2 id=\"creating-your-inkdrop-account\">Creating your Inkdrop account</h2>\n<p>First, go to <a href=\"https://www.inkdrop.info/\">Inkdrop website</a> and sign up.\nInkdrop will prepare new database for storing your note data.\nAlso your account can be used for publishing your plugins and so on.</p>\n<h2 id=\"downloading-the-app\">Downloading the app</h2>\n<p>After you set up an account and log in, you should see a download button as shown here:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_download.png\" title=\"null\" alt=\"Download\" /></p>\n<p>Desktop application is ready for macOS, Windows and Linux, so choose one for your environment:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_download2.png\" title=\"null\" alt=\"Download\" /></p>\n<h2 id=\"installing-inkdrop-on-macos\">Installing Inkdrop on macOS</h2>\n<p>Inkdrop follows the standard Mac zip installation process. You can download the <code>Inkdrop-x.y.z-Mac.zip</code> file from the Inkdrop website. Once you have that file, you can click on it to extract the application and then drag the new Inkdrop application into your &quot;Applications&quot; folder.</p>\n<h2 id=\"installing-inkdrop-on-windows\">Installing Inkdrop on Windows</h2>\n<p>Inkdrop is both available with a Windows installer and zip archive. The installer is recommended because it can provide auto-update features which automatically update to the latest version of the Inkdrop app.</p>\n<h2 id=\"installing-inkdrop-on-linux\">Installing Inkdrop on Linux</h2>\n<p>To install Inkdrop on Linux, you can download a Debian package or a zip archive.\nThe package do not currently have auto-update features, so when you would like to upgrade to a new release of Inkdrop, you will have to repeat this installation process.</p>\n<p>To install Atom on Debian, Ubuntu, or related systems:</p>\n<pre><code class=\"lang-bash\"><span class=\"hljs-comment\"># Install Inkdrop</span>\nsudo dpkg -i inkdrop_x.y.z_amd64.deb\n\n<span class=\"hljs-comment\"># Install Inkdrop's dependencies if they are missing</span>\nsudo apt-get <span class=\"hljs-_\">-f</span> install\n</code></pre>\n<h2 id=\"log-in\">Log in</h2>\n<p>When you first open Inkdrop, you should see Log-in screen like this:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_login.png\" title=\"null\" alt=\"Login\" /></p>\n<p>Enter your email address and password to get started.</p>\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = "<p>Notes are only useful if you can find them quickly. Inkdrop&#39;s full-text search also supports filtering notebooks and tags with search qualifiers.</p>\n<p>To search all the notes, either click the search bar on the top of the note list or press <code>Cmd+F</code> / <code>Ctrl+F</code> keybind to set focus to it.</p>\n<p><img class=\"ui image\" src=\"/manual/04-searching_searchbar.png\" title=\"null\" alt=\"SideBySide\" /></p>\n<p>Now you can search by keyword.</p>\n<h2 id=\"search-notes-within-a-notebook-and-with-tags\">Search notes within a notebook and with tags</h2>\n<p>With <code>book:&lt;book_name&gt;</code> qualifier, you can search notes within specified notebook.\nFor example:</p>\n<pre><code>book:Blog\nbook:&quot;First Notebook&quot;\n</code></pre><p>If the notebook name has one or more space characters, enclose its name in double quotes (<code>&quot;</code>).</p>\n<p>With <code>tag:&lt;tag_name&gt;</code> qualifier, you can search notes with specified tag.\nFor example:</p>\n<pre><code>tag:JavaScript\ntag:WIP\n</code></pre><h2 id=\"search-with-a-phrase\">Search with a phrase</h2>\n<p>By enclosing keywords in double quotes (<code>&quot;</code>), you can search notes by a phrase including spaces.\nExample:</p>\n<pre><code>&quot;foo bar&quot;\n</code></pre><h2 id=\"excluding-modifier\">Excluding modifier</h2>\n<p>To search notes NOT matched with specified keyword and condition, add <code>-</code> modifier before the keyword and the qualifier like following:</p>\n<pre><code>-book:Blog\n-tag:JavaScript\n-foo\n-&quot;foo bar&quot;\n</code></pre>";

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop lets you sync notes across multiple computers via Cloud.\nBy default, Inkdrop stores your data in Inkdrop sync server.\nYou can configure synchronizations in the Preferences like this:</p>\n<p><img class=\"ui image\" src=\"/manual/05-sync_preferences.png\" title=\"null\" alt=\"Sync Preferences\" /></p>\n<p>There are three sync options:</p>\n<ul>\n<li><strong>Don&#39;t Sync</strong> - Store Inkdrop data only in this computer</li>\n<li><strong>Inkdrop Sync Server</strong> - Sync with Inkdrop&#39;s own service</li>\n<li><strong>Advanced (CouchDB)</strong> - Sync with your own compatible server</li>\n</ul>\n<h2 id=\"how-to-set-up-your-own-sync-server\">How to set up your own sync server</h2>\n<p>Inkdrop lets you store your notes in your own database compatible with <a href=\"http://couchdb.apache.org/\">CouchDB</a> API instead of Inkdrop&#39;s own service.\nCouchDB is just another open-source NoSQL database so you can deploy it on your environment for free. See CouchDB&#39;s <a href=\"http://docs.couchdb.org/en/1.6.1/install/index.html\">installation guide</a> for more informations.\nUsing DBaaS instead of operating database by yourself is good choice. For instance, <a href=\"https://cloudant.com/\">Cloudant</a> is one of fully-managed DBaaS providers.</p>\n<blockquote>\n<p><strong>WARNING</strong>: Use this feature at your own risk. Inkdrop itself doesn&#39;t protect data from other people on your server. To protect your data, read &quot;Security&quot; section at the bottom of this page.</p>\n</blockquote>\n<h3 id=\"create-a-database\">Create a database</h3>\n<p>Once you got your CouchDB server, let&#39;s create a database for storing your notes.\nYou need only one database for Inkdrop. For example, run below command to create a database:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://localhost:5984/my-inkdrop-notes\n</code></pre>\n<blockquote>\n<p>NOTE: If you are running CouchDB not on localhost and port 5984 (default), replace <code>localhost:5984</code> to your server address and port.</p>\n</blockquote>\n<p>Retrieving the list of databases shows some useful results this time:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X GET http://127.0.0.1:5984/_all_dbs\n[<span class=\"hljs-string\">\"my-inkdrop-notes\"</span>]\n</code></pre>\n<p>Return to the Inkdrop sync preferences, you can input the URL to your database to the <strong>Address</strong> section:</p>\n<pre><code>http://localhost:5984/my-inkdrop-notes\n</code></pre><p><img class=\"ui image\" src=\"/manual/05-sync-custom-server.png\" title=\"null\" alt=\"Sync with custom server\" /></p>\n<p>Then, push the <strong>Apply</strong> button.</p>\n<p>Please read <a href=\"http://guide.couchdb.org/draft/tour.html\">CouchDB&#39;s tutorial</a> for more information.</p>\n<h3 id=\"optional-security\">Optional: Security</h3>\n<p>As you may know, CouchDB is running with the Admin Party by default. It means Everybody has privileges to do anything.\nPlease read the <a href=\"http://guide.couchdb.org/draft/security.html\">documentation</a>.\nTo keep your notes secure, we recommend that you create an admin user with a username and password as your credentials.</p>\n<p>Now let’s create an admin user. We’ll call her <code>anna</code>, and her password is <code>secret</code>:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/_config/admins/anna <span class=\"hljs-_\">-d</span> <span class=\"hljs-string\">'\"secret\"'</span>\n</code></pre>\n<p>Now we have an admin user named <code>anna</code>, let&#39;s give her an admin access to <code>my-inkdrop-notes</code>:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes/_security <span class=\"hljs-_\">-d</span> <span class=\"hljs-string\">'{ \"admins\": { \"names\": [ \"anna\" ] } }'</span>\n</code></pre>\n<p>It restricts access from people without the valid credentials:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes\n{<span class=\"hljs-string\">\"error\"</span>:<span class=\"hljs-string\">\"unauthorized\"</span>,<span class=\"hljs-string\">\"reason\"</span>:<span class=\"hljs-string\">\"You are not a server admin.\"</span>}\n</code></pre>\n<p>That looks about right. Now we try again with the correct credentials:</p>\n<pre><code class=\"lang-bash\">&gt; HOST=<span class=\"hljs-string\">\"http://anna:secret@127.0.0.1:5984\"</span>\n&gt; curl -X PUT <span class=\"hljs-variable\">$HOST</span>/my-inkdrop-notes\n{<span class=\"hljs-string\">\"ok\"</span>:<span class=\"hljs-literal\">true</span>}\n</code></pre>\n<p>Looks good!</p>\n<p>Return to the Inkdrop sync preferences, you can input the URL to your database to the <strong>Address</strong> section:</p>\n<pre><code>http://anna:secret@127.0.0.1:5984/my-inkdrop-notes\n</code></pre>";

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = "<p>The editor supports standard Markdown syntax as well as \n<a href=\"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet\">GitHub Flavored Markdown (GFM)</a> with inline formatting.</p>\n<h2 id=\"live-preview\">Live Preview</h2>\n<p>Inkdrop supports live preview of note. You can switch to Side-by-Side Preview with <code>Cmd+P</code> (on macOS) / <code>Ctrl+P</code> (on Windows/Linux) keybind to see the editor and preview side-by-side like this:</p>\n<p><img class=\"ui image\" src=\"/manual/03-editing_sidebyside.png\" title=\"null\" alt=\"SideBySide\" /></p>\n<h2 id=\"distraction-free-mode\">Distraction Free Mode</h2>\n<p>To hide the sidebar and the note list, press <code>Cmd+Shift+D</code> / <code>Ctrl+Shift+D</code> to toggle <em>Distraction Free Mode</em>.\nYou can even hide the toolbar on the top of the editor from the preferences if you don&#39;t need it.</p>\n<h2 id=\"tagging\">Tagging</h2>\n<p>Inkdrop lets you assign tags to a note.\nThis is another way to organize your notes.</p>\n<p><img class=\"ui image\" src=\"/manual/03-editing_tags.png\" title=\"null\" alt=\"Tagging\" /></p>\n<p>Tags are listed on the sidebar.</p>\n";

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);