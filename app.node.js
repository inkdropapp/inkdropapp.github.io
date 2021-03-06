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

  var _reactDom = __webpack_require__(97);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(13);

  var _coreLocation = __webpack_require__(12);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(15);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(17);
    }, '/500': function _() {
      return __webpack_require__(18);
    }, '/about': function about() {
      return __webpack_require__(19);
    }, '/announce/data-at-rest-encryption-is-now-supported': function announceDataAtRestEncryptionIsNowSupported() {
      return __webpack_require__(20);
    }, '/announce/': function announce() {
      return __webpack_require__(21);
    }, '/announce/usd-currency-is-now-supported': function announceUsdCurrencyIsNowSupported() {
      return __webpack_require__(22);
    }, '/faq': function faq() {
      return __webpack_require__(23);
    }, '/': function _() {
      return __webpack_require__(24);
    }, '/manual/accessing-data-in-the-cloud': function manualAccessingDataInTheCloud() {
      return __webpack_require__(25);
    }, '/manual/accessing-the-local-database': function manualAccessingTheLocalDatabase() {
      return __webpack_require__(26);
    }, '/manual/backing-up-your-data': function manualBackingUpYourData() {
      return __webpack_require__(27);
    }, '/manual/basic-usage': function manualBasicUsage() {
      return __webpack_require__(28);
    }, '/manual/creating-a-theme': function manualCreatingATheme() {
      return __webpack_require__(29);
    }, '/manual/customizing-the-editor': function manualCustomizingTheEditor() {
      return __webpack_require__(30);
    }, '/manual/extend-inkdrop-with-plugins': function manualExtendInkdropWithPlugins() {
      return __webpack_require__(31);
    }, '/manual/flux-architecture': function manualFluxArchitecture() {
      return __webpack_require__(32);
    }, '/manual/': function manual() {
      return __webpack_require__(33);
    }, '/manual/managing-tasks-with-status': function manualManagingTasksWithStatus() {
      return __webpack_require__(34);
    }, '/manual/markdown-cheatsheet': function manualMarkdownCheatsheet() {
      return __webpack_require__(35);
    }, '/manual/plugin-word-count': function manualPluginWordCount() {
      return __webpack_require__(36);
    }, '/manual/quick-start-guide': function manualQuickStartGuide() {
      return __webpack_require__(37);
    }, '/manual/recovering-your-password': function manualRecoveringYourPassword() {
      return __webpack_require__(38);
    }, '/manual/searching-notes': function manualSearchingNotes() {
      return __webpack_require__(39);
    }, '/manual/synchronizing-in-the-cloud': function manualSynchronizingInTheCloud() {
      return __webpack_require__(40);
    }, '/manual/working-behind-a-corporate-web-proxy': function manualWorkingBehindACorporateWebProxy() {
      return __webpack_require__(41);
    }, '/manual/writing-note': function manualWritingNote() {
      return __webpack_require__(42);
    }, '/notation': function notation() {
      return __webpack_require__(43);
    }, '/privacy': function privacy() {
      return __webpack_require__(44);
    }, '/reference/book': function referenceBook() {
      return __webpack_require__(45);
    }, '/reference/command-registry': function referenceCommandRegistry() {
      return __webpack_require__(46);
    }, '/reference/editor-actions': function referenceEditorActions() {
      return __webpack_require__(47);
    }, '/reference/editor-store': function referenceEditorStore() {
      return __webpack_require__(48);
    }, '/reference/environment': function referenceEnvironment() {
      return __webpack_require__(49);
    }, '/reference/': function reference() {
      return __webpack_require__(50);
    }, '/reference/note': function referenceNote() {
      return __webpack_require__(51);
    }, '/reference/tag': function referenceTag() {
      return __webpack_require__(52);
    }, '/security': function security() {
      return __webpack_require__(53);
    }, '/terms': function terms() {
      return __webpack_require__(54);
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

  var _manualMenu = __webpack_require__(6);

  var _manualMenu2 = _interopRequireDefault(_manualMenu);

  var _helpus = __webpack_require__(10);

  var _helpus2 = _interopRequireDefault(_helpus);

  var _Link = __webpack_require__(3);

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
                  'Docs'
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
              _react2['default'].createElement('div', { className: 'ui divider' }),
              this.props.children,
              _react2['default'].createElement(_helpus2['default'], null)
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

  __webpack_require__(57);

  var _coreLocation = __webpack_require__(12);

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
/* 4 */
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

  var _referenceMenu = __webpack_require__(8);

  var _referenceMenu2 = _interopRequireDefault(_referenceMenu);

  var _helpus = __webpack_require__(10);

  var _helpus2 = _interopRequireDefault(_helpus);

  var _Link = __webpack_require__(3);

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
              _react2['default'].createElement(_referenceMenu2['default'], null)
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
                  'Docs'
                ),
                _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
                _react2['default'].createElement(
                  _Link2['default'],
                  { to: '/reference/', className: 'section' },
                  'API Reference'
                ),
                _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
                _react2['default'].createElement(
                  'div',
                  { className: 'active section' },
                  this.props.currentPageTitle
                )
              ),
              _react2['default'].createElement('div', { className: 'ui divider' }),
              this.props.children,
              _react2['default'].createElement(_helpus2['default'], null)
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

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _menuLink = __webpack_require__(7);

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
          'div',
          null,
          _react2['default'].createElement(
            'h3',
            { className: 'ui header' },
            'Using Inkdrop'
          ),
          _react2['default'].createElement(
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
                { to: '/manual/managing-tasks-with-status' },
                'Managing tasks with status'
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
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/recovering-your-password' },
                'Recovering your password'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/working-behind-a-corporate-web-proxy' },
                'Working behind web proxy'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/backing-up-your-data' },
                'Backing up your data'
              )
            )
          ),
          _react2['default'].createElement(
            'h3',
            { className: 'ui header' },
            'Hacking Inkdrop'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'article-list' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/accessing-data-in-the-cloud' },
                'Accessing Data in the Cloud'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/creating-a-theme' },
                'Creating a Theme'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/plugin-word-count' },
                'Plugin: Word Count'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/flux-architecture' },
                'Flux Architecture'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/accessing-the-local-database' },
                'Accessing the Local Database'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/customizing-the-editor' },
                'Customizing the Editor'
              )
            )
          ),
          _react2['default'].createElement(
            'h3',
            { className: 'ui header' },
            'Appendix'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'article-list' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/manual/markdown-cheatsheet' },
                'Markdown Cheatsheet'
              )
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
/* 7 */
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

  var _Link2 = __webpack_require__(3);

  var _Link3 = _interopRequireDefault(_Link2);

  __webpack_require__(59);

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

  var _menuLink = __webpack_require__(7);

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
          'div',
          null,
          _react2['default'].createElement(
            'h3',
            { className: 'ui header' },
            'Data Models'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'article-list' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/reference/note' },
                'Note'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/reference/book' },
                'Book'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/reference/tag' },
                'Tag'
              )
            )
          ),
          _react2['default'].createElement(
            'h3',
            { className: 'ui header' },
            'Flux Stores'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'article-list' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/reference/editor-store' },
                'Editor Store'
              )
            )
          ),
          _react2['default'].createElement(
            'h3',
            { className: 'ui header' },
            'Flux Actions'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'article-list' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/reference/editor-actions' },
                'Editor Actions'
              )
            )
          ),
          _react2['default'].createElement(
            'h3',
            { className: 'ui header' },
            'Essential Classes'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'article-list' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/reference/environment' },
                'Environment'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _menuLink2['default'],
                { to: '/reference/command-registry' },
                'CommandRegistry'
              )
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
/* 9 */
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

  var _Link = __webpack_require__(3);

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
            { className: 'twelve wide column doc-content' },
            _react2['default'].createElement(
              'div',
              { className: 'ui breadcrumb' },
              _react2['default'].createElement(
                _Link2['default'],
                { to: '/', className: 'section' },
                'Docs'
              ),
              _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
              _react2['default'].createElement(
                _Link2['default'],
                { to: '/announce/', className: 'section' },
                'Announcements'
              ),
              _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
              _react2['default'].createElement(
                'div',
                { className: 'active section' },
                this.props.currentPageTitle
              )
            ),
            _react2['default'].createElement('div', { className: 'ui divider' }),
            this.props.children
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
/* 10 */
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
          null,
          _react2['default'].createElement(
            'h2',
            null,
            'Can you help us improve these docs?'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The source of these docs is ',
            _react2['default'].createElement(
              'a',
              { href: 'https://github.com/inkdropapp/docs' },
              'here'
            ),
            ' on GitHub. If you see a way these docs can be improved, please fork us!'
          )
        );
      }
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

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  var _manualMenu = __webpack_require__(6);

  var _manualMenu2 = _interopRequireDefault(_manualMenu);

  var _referenceMenu = __webpack_require__(8);

  var _referenceMenu2 = _interopRequireDefault(_referenceMenu);

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
          { className: 'ui piled segment' },
          _react2['default'].createElement(
            'div',
            { className: 'ui stackable grid' },
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
                _react2['default'].createElement(_manualMenu2['default'], null)
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
                ),
                _react2['default'].createElement(_referenceMenu2['default'], null)
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
                ),
                _react2['default'].createElement(
                  'h3',
                  { className: 'ui header' },
                  _react2['default'].createElement('i', { className: 'info icon' }),
                  _react2['default'].createElement(
                    'div',
                    { className: 'content' },
                    'Further Informations'
                  )
                ),
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      _Link2['default'],
                      { to: '/announce/' },
                      'Announcements'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      _Link2['default'],
                      { to: '/notation' },
                      'Notation based on the Specified Commercial Transaction Act'
                    )
                  )
                )
              )
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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(13);

  var _historyLibCreateBrowserHistory = __webpack_require__(93);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(94);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(95);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

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

  __webpack_require__(55);

  var _Link = __webpack_require__(3);

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
                { className: 'thirteen wide column links' },
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
                      _Link2['default'],
                      { to: '/faq' },
                      'FAQ'
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
              ),
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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(56);

  var _Navigation = __webpack_require__(16);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(14);

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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(58);

  var _Link = __webpack_require__(3);

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
          { href: 'https://www.inkdrop.info/', className: 'app--logo' },
          _react2['default'].createElement('img', {
            src: '//inkdrop-prod.s3.amazonaws.com/site/header-logo@2x.png',
            width: '186',
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
              { href: 'https://www.inkdrop.info/login' },
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
/* 17 */
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

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _componentsTopMenu = __webpack_require__(11);

  var _componentsTopMenu2 = _interopRequireDefault(_componentsTopMenu);

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
            { className: 'ui breadcrumb' },
            _react2['default'].createElement(
              _componentsLink2['default'],
              { to: '/', className: 'section' },
              'Docs'
            ),
            _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
            _react2['default'].createElement(
              'div',
              { className: 'active section' },
              '?'
            )
          ),
          _react2['default'].createElement('div', { className: 'ui divider' }),
          _react2['default'].createElement(
            'div',
            { className: 'ui error message' },
            _react2['default'].createElement(
              'h1',
              null,
              'Not Found'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'The page you\'re looking for was not found. Please check the URL or click a link from below menu.'
            )
          ),
          _react2['default'].createElement(_componentsTopMenu2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
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

  __webpack_require__(60);

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

  var _componentsAnnounceLayout = __webpack_require__(9);

  var _componentsAnnounceLayout2 = _interopRequireDefault(_componentsAnnounceLayout);

  var AnnouncementPage = (function (_Component) {
    _inherits(AnnouncementPage, _Component);

    function AnnouncementPage() {
      _classCallCheck(this, AnnouncementPage);

      _get(Object.getPrototypeOf(AnnouncementPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(AnnouncementPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(63);
        return _react2['default'].createElement(
          _componentsAnnounceLayout2['default'],
          { currentPageTitle: AnnouncementPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            AnnouncementPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Data at rest encryption is now supported',
      enumerable: true
    }]);

    return AnnouncementPage;
  })(_react.Component);

  exports['default'] = AnnouncementPage;
  module.exports = exports['default'];

/***/ },
/* 21 */
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

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _componentsMenuLink = __webpack_require__(7);

  var _componentsMenuLink2 = _interopRequireDefault(_componentsMenuLink);

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
            { className: 'ui breadcrumb' },
            _react2['default'].createElement(
              _componentsLink2['default'],
              { to: '/', className: 'section' },
              'Docs'
            ),
            _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
            _react2['default'].createElement(
              'div',
              { className: 'active section' },
              'Announcements'
            )
          ),
          _react2['default'].createElement('div', { className: 'ui divider' }),
          _react2['default'].createElement(
            'h2',
            { className: 'ui header' },
            _react2['default'].createElement('i', { className: 'announcement icon' }),
            _react2['default'].createElement(
              'div',
              { className: 'content' },
              'Announcements'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'ui piled segment' },
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'ul',
                { className: 'article-list' },
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _componentsMenuLink2['default'],
                    { to: '/announce/usd-currency-is-now-supported' },
                    'USD currency is now supported'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _componentsMenuLink2['default'],
                    { to: '/announce/data-at-rest-encryption-is-now-supported' },
                    'Data at rest encryption is now supported'
                  )
                )
              )
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

  var _componentsAnnounceLayout = __webpack_require__(9);

  var _componentsAnnounceLayout2 = _interopRequireDefault(_componentsAnnounceLayout);

  var AnnouncementPage = (function (_Component) {
    _inherits(AnnouncementPage, _Component);

    function AnnouncementPage() {
      _classCallCheck(this, AnnouncementPage);

      _get(Object.getPrototypeOf(AnnouncementPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(AnnouncementPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(64);
        return _react2['default'].createElement(
          _componentsAnnounceLayout2['default'],
          { currentPageTitle: AnnouncementPage.title },
          _react2['default'].createElement(
            'h1',
            null,
            AnnouncementPage.title
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'USD currency is now supported',
      enumerable: true
    }]);

    return AnnouncementPage;
  })(_react.Component);

  exports['default'] = AnnouncementPage;
  module.exports = exports['default'];

/***/ },
/* 23 */
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

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(65);
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'div',
            { className: 'ui breadcrumb' },
            _react2['default'].createElement(
              _componentsLink2['default'],
              { to: '/', className: 'section' },
              'Docs'
            ),
            _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
            _react2['default'].createElement(
              'div',
              { className: 'active section' },
              'FAQ'
            )
          ),
          _react2['default'].createElement('div', { className: 'ui divider' }),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'FAQ',
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 24 */
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

  __webpack_require__(61);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsTopMenu = __webpack_require__(11);

  var _componentsTopMenu2 = _interopRequireDefault(_componentsTopMenu);

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
          _react2['default'].createElement(_componentsTopMenu2['default'], null),
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(66);
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
      value: 'Accessing Data in the Cloud',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 26 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(67);
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
      value: 'Accessing the Local Database',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 27 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(68);
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
      value: 'Backing Up Your Data',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 28 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(69);
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
/* 29 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(70);
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
      value: 'Creating a Theme',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 30 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(71);
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
      value: 'Customizing the Editor',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 31 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(72);
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
/* 32 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(73);
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
      value: 'Flux Architecture',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 33 */
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

  var _componentsManualMenu = __webpack_require__(6);

  var _componentsManualMenu2 = _interopRequireDefault(_componentsManualMenu);

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

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
            { className: 'ui breadcrumb' },
            _react2['default'].createElement(
              _componentsLink2['default'],
              { to: '/', className: 'section' },
              'Docs'
            ),
            _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
            _react2['default'].createElement(
              'div',
              { className: 'active section' },
              'Inkdrop Manual'
            )
          ),
          _react2['default'].createElement('div', { className: 'ui divider' }),
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
          _react2['default'].createElement(
            'div',
            { className: 'ui piled segment' },
            _react2['default'].createElement(_componentsManualMenu2['default'], null)
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 34 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(74);
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
      value: 'Managing Tasks with Status',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 35 */
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

  __webpack_require__(62);

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _highlightJs = __webpack_require__(92);

  var _highlightJs2 = _interopRequireDefault(_highlightJs);

  var _reactDisqusThread = __webpack_require__(96);

  var _reactDisqusThread2 = _interopRequireDefault(_reactDisqusThread);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        // const md = require('./accessing-data-in-the-cloud.md');
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'div',
            { className: 'doc-content' },
            _react2['default'].createElement(
              'div',
              { className: 'ui breadcrumb' },
              _react2['default'].createElement(
                _componentsLink2['default'],
                { to: '/', className: 'section' },
                'Docs'
              ),
              _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
              _react2['default'].createElement(
                _componentsLink2['default'],
                { to: '/manual/', className: 'section' },
                'Inkdrop Manual'
              ),
              _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
              _react2['default'].createElement(
                'div',
                { className: 'active section' },
                ManualPage.title
              )
            ),
            _react2['default'].createElement('div', { className: 'ui divider' }),
            _react2['default'].createElement(
              'h1',
              null,
              ManualPage.title
            ),
            _react2['default'].createElement(
              'div',
              { className: 'ui two column stackable grid' },
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  'This is intended as a quick reference and showcase. For more complete info, see ',
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://daringfireball.net/projects/markdown/', target: '_blank' },
                    'John Gruber\'s original spec'
                  ),
                  ' and the ',
                  _react2['default'].createElement(
                    'a',
                    { href: 'https://help.github.com/categories/writing-on-github/', target: '_blank' },
                    'Github-flavored Markdown info page'
                  ),
                  '.',
                  _react2['default'].createElement(
                    'h3',
                    null,
                    'Table of Contents'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#headers' },
                        'Headers'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#emphasis' },
                        'Emphasis'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#lists' },
                        'Lists'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#links' },
                        'Links'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#images' },
                        'Images'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#code' },
                        'Code and Syntax Highlighting'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#tables' },
                        'Tables'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#blockquotes' },
                        'Blockquotes'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#inline' },
                        'Inline HTML'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#hr' },
                        'Horizontal Rule'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '#linebreaks' },
                        'Link Breaks'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'headers', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Headers'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      '# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'h1',
                    null,
                    'H1'
                  ),
                  _react2['default'].createElement(
                    'h2',
                    null,
                    'H2'
                  ),
                  _react2['default'].createElement(
                    'h3',
                    null,
                    'H3'
                  ),
                  _react2['default'].createElement(
                    'h4',
                    null,
                    'H4'
                  ),
                  _react2['default'].createElement(
                    'h5',
                    null,
                    'H5'
                  ),
                  _react2['default'].createElement(
                    'h6',
                    null,
                    'H6'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Alternatively, for H1 and H2, an underline-ish style:'
                  ),
                  _react2['default'].createElement(
                    'h1',
                    null,
                    'Alt-H1'
                  ),
                  _react2['default'].createElement(
                    'h2',
                    null,
                    'Alt-H2'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'emphasis', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Emphasis'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      'Emphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Emphasis, aka italics, with ',
                    _react2['default'].createElement(
                      'i',
                      null,
                      'asterisks'
                    ),
                    ' or ',
                    _react2['default'].createElement(
                      'i',
                      null,
                      'underscores'
                    ),
                    '.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Strong emphasis, aka bold, with ',
                    _react2['default'].createElement(
                      'strong',
                      null,
                      'asterisks'
                    ),
                    ' or ',
                    _react2['default'].createElement(
                      'strong',
                      null,
                      'underscores'
                    ),
                    '.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Combined emphasis with ',
                    _react2['default'].createElement(
                      'strong',
                      null,
                      'asterisks or ',
                      _react2['default'].createElement(
                        'i',
                        null,
                        'underscores'
                      )
                    ),
                    '.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Strikethrough uses two tildes. ',
                    _react2['default'].createElement(
                      'del',
                      null,
                      'Scratch this'
                    ),
                    '.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'lists', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Lists'
                  ),
                  '(In this example, leading and trailing spaces are shown with with dots: ⋅)'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      '1. First ordered list item\n2. Another item\n⋅⋅* Unordered sub-list.\n1. Actual numbers don\'t matter, just that it\'s a number\n⋅⋅1. Ordered sub-list\n4. And another item.\n\n⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we\'ll use three here to also align the raw Markdown).\n\n⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n- [ ] Checkbox\n- [x] Task\n'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'ol',
                    null,
                    _react2['default'].createElement(
                      'li',
                      null,
                      'First ordered list item'
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      'Another item',
                      _react2['default'].createElement(
                        'ul',
                        null,
                        _react2['default'].createElement(
                          'li',
                          null,
                          'Unordered sub-list. '
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      'Actual numbers don\'t matter, just that it\'s a number',
                      _react2['default'].createElement(
                        'ol',
                        null,
                        _react2['default'].createElement(
                          'li',
                          null,
                          'Ordered sub-list'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'p',
                        null,
                        'And another item.'
                      ),
                      _react2['default'].createElement(
                        'p',
                        null,
                        'You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we\'ll use three here to also align the raw Markdown).'
                      ),
                      _react2['default'].createElement(
                        'p',
                        null,
                        'To have a line break without a paragraph, you will need to use two trailing spaces.',
                        _react2['default'].createElement('br', null),
                        'Note that this line is separate, but within the same paragraph.',
                        _react2['default'].createElement('br', null),
                        '(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                      'li',
                      null,
                      'Unordered list can use asterisks'
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      'Or minuses'
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      'Or pluses'
                    )
                  ),
                  _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'div',
                        { className: 'ui checkbox' },
                        _react2['default'].createElement('input', { type: 'checkbox', className: 'hidden' }),
                        _react2['default'].createElement(
                          'label',
                          null,
                          'Checkbox'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'div',
                        { className: 'ui checkbox' },
                        _react2['default'].createElement('input', { type: 'checkbox', className: 'hidden', defaultChecked: true }),
                        _react2['default'].createElement(
                          'label',
                          null,
                          'Task'
                        )
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'links', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Links'
                  ),
                  'There are two ways to create links.'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      '[I\'m an inline-style link](https://www.google.com)\n\n[I\'m an inline-style link with title](https://www.google.com "Google\'s Homepage")\n\n[I\'m a reference-style link][Arbitrary case-insensitive reference text]\n\n[I\'m a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes\nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'https://www.google.com' },
                      'I\'m an inline-style link'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'https://www.google.com', title: 'Google\'s Homepage' },
                      'I\'m an inline-style link with title'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'https://www.mozilla.org' },
                      'I\'m a reference-style link'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: '../blob/master/LICENSE' },
                      'I\'m a relative reference to a repository file'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://slashdot.org' },
                      'You can use numbers for reference-style link definitions'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Or leave it empty and use the ',
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.reddit.com' },
                      'link text itself'
                    ),
                    '.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'URLs and URLs in angle brackets will automatically get turned into links.',
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.example.com' },
                      'http://www.example.com'
                    ),
                    ' or ',
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.example.com' },
                      'http://www.example.com'
                    ),
                    ' and sometimes example.com (but not on Github, for example).'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Some text to show that the reference links can follow later.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'images', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Images'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      'Here\'s our logo (hover to see the title text):\n\nInline-style: ![alt text](http://doc.inkdrop.info/icon_w64.png "Logo Title Text 1")\n\nReference-style: ![alt text][logo]\n\n[logo]: http://doc.inkdrop.info/icon_w64.png "Logo Title Text 2"'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Here\'s our logo (hover to see the title text):'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Inline-style: ',
                    _react2['default'].createElement('img', { src: '/icon_w64.png', alt: 'alt text', title: 'Logo Title Text 1' })
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Reference-style: ',
                    _react2['default'].createElement('img', { src: '/icon_w64.png', alt: 'alt text', title: 'Logo Title Text 2' })
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement('a', { name: 'user-content-code' })
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'code', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Code and Syntax Highlighting'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Code blocks are part of the Markdown spec, but syntax highlighting isn\'t. However, many renderers -- like Github\'s and ',
                    _react2['default'].createElement(
                      'strong',
                      null,
                      'Inkdrop'
                    ),
                    ' -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Inkdrop supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the ',
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://softwaremaniacs.org/media/soft/highlight/test.html', target: '_blank' },
                      'highlight.js demo page'
                    ),
                    '.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      'Inline `code` has `back-ticks around` it.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Inline ',
                    _react2['default'].createElement(
                      'code',
                      null,
                      'code'
                    ),
                    ' has ',
                    _react2['default'].createElement(
                      'code',
                      null,
                      'back-ticks around'
                    ),
                    ' it.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they\'re easier and only they support syntax highlighting.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      '```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```\n\n```python\ns = "Python syntax highlighting"\nprint s\n```\n\n```\nNo language indicated, so no syntax highlighting.\nBut let\'s throw in a <b>tag</b>.\n```'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement('code', { className: 'lang-javascript', dangerouslySetInnerHTML: { __html: _highlightJs2['default'].highlight('javascript', 'var s = "JavaScript syntax highlighting";\nalert(s);').value } })
                  ),
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement('code', { className: 'lang-python', dangerouslySetInnerHTML: { __html: _highlightJs2['default'].highlight('python', 's = "Python syntax highlighting"\nprint s').value } })
                  ),
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      null,
                      'No language indicated, so no syntax highlighting.\nBut let\'s throw in a <b>tag</b>.'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'tables', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Tables'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Tables aren\'t part of the core Markdown spec, but they are part of GFM and ',
                    _react2['default'].createElement(
                      'strong',
                      null,
                      'Inkdrop'
                    ),
                    ' supports them.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      'Colons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don\'t need to make the\nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Colons can be used to align columns.'
                  ),
                  _react2['default'].createElement(
                    'table',
                    { className: 'ui celled table' },
                    _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                          'th',
                          null,
                          'Tables'
                        ),
                        _react2['default'].createElement(
                          'th',
                          { className: 'center aligned' },
                          'Are'
                        ),
                        _react2['default'].createElement(
                          'th',
                          { className: 'right aligned' },
                          'Cool'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      'tbody',
                      null,
                      _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                          'td',
                          null,
                          'col 3 is'
                        ),
                        _react2['default'].createElement(
                          'td',
                          { className: 'center aligned' },
                          'right-aligned'
                        ),
                        _react2['default'].createElement(
                          'td',
                          { className: 'right aligned' },
                          '$1600'
                        )
                      ),
                      _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                          'td',
                          null,
                          'col 2 is'
                        ),
                        _react2['default'].createElement(
                          'td',
                          { className: 'center aligned' },
                          'centered'
                        ),
                        _react2['default'].createElement(
                          'td',
                          { className: 'right aligned' },
                          '$12'
                        )
                      ),
                      _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                          'td',
                          null,
                          'zebra stripes'
                        ),
                        _react2['default'].createElement(
                          'td',
                          { className: 'center aligned' },
                          'are neat'
                        ),
                        _react2['default'].createElement(
                          'td',
                          { className: 'right aligned' },
                          '$1'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don\'t need to make the raw Markdown line up prettily. You can also use inline Markdown.'
                  ),
                  _react2['default'].createElement(
                    'table',
                    { className: 'ui celled table' },
                    _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                          'th',
                          null,
                          'Markdown'
                        ),
                        _react2['default'].createElement(
                          'th',
                          null,
                          'Less'
                        ),
                        _react2['default'].createElement(
                          'th',
                          null,
                          'Pretty'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      'tbody',
                      null,
                      _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                          'td',
                          null,
                          _react2['default'].createElement(
                            'em',
                            null,
                            'Still'
                          )
                        ),
                        _react2['default'].createElement(
                          'td',
                          null,
                          _react2['default'].createElement(
                            'code',
                            null,
                            'renders'
                          )
                        ),
                        _react2['default'].createElement(
                          'td',
                          null,
                          _react2['default'].createElement(
                            'strong',
                            null,
                            'nicely'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                          'td',
                          null,
                          '1'
                        ),
                        _react2['default'].createElement(
                          'td',
                          null,
                          '2'
                        ),
                        _react2['default'].createElement(
                          'td',
                          null,
                          '3'
                        )
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'blockquotes', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Blockquotes'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      '> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let\'s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n> > Nexted quote'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'blockquote',
                    null,
                    _react2['default'].createElement(
                      'p',
                      null,
                      'Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.'
                    )
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Quote break.'
                  ),
                  _react2['default'].createElement(
                    'blockquote',
                    null,
                    _react2['default'].createElement(
                      'p',
                      null,
                      'This is a very long line that will still be quoted properly when it wraps. Oh boy let\'s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ',
                      _react2['default'].createElement(
                        'em',
                        null,
                        'put'
                      ),
                      ' ',
                      _react2['default'].createElement(
                        'strong',
                        null,
                        'Markdown'
                      ),
                      ' into a blockquote.'
                    ),
                    _react2['default'].createElement(
                      'blockquote',
                      null,
                      _react2['default'].createElement(
                        'p',
                        null,
                        'Nested quote'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'blockquotes', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Inline HTML'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'You can also use raw HTML in your Markdown, and it\'ll mostly work pretty well.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      '<dl>\n  <dt>Definition list</dt>\n  <dd>Is something people use sometimes.</dd>\n\n  <dt>Markdown in HTML</dt>\n  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n</dl>'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'dl',
                    null,
                    _react2['default'].createElement(
                      'dt',
                      null,
                      'Definition list'
                    ),
                    _react2['default'].createElement(
                      'dd',
                      null,
                      'Is something people use sometimes.'
                    ),
                    _react2['default'].createElement(
                      'dt',
                      null,
                      'Markdown in HTML'
                    ),
                    _react2['default'].createElement(
                      'dd',
                      null,
                      'Does *not* work **very** well. Use HTML ',
                      _react2['default'].createElement(
                        'em',
                        null,
                        'tags'
                      ),
                      '.'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'hr', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Horizontal Rule'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      'Three or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Three or more...'
                  ),
                  _react2['default'].createElement('hr', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Hyphens'
                  ),
                  _react2['default'].createElement('hr', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Asterisks'
                  ),
                  _react2['default'].createElement('hr', null),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Underscores'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { name: 'linebreaks', className: 'anchor' },
                      _react2['default'].createElement('i', { className: 'linkify icon' })
                    ),
                    'Line Breaks'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'My basic recommendation for learning how line breaks work is to experiment and discover -- hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You can view the editor and preview panel side-by-side on Inkdrop.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Here are some things to try out:'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'pre',
                    null,
                    _react2['default'].createElement(
                      'code',
                      { className: 'lang-markdown' },
                      'Here\'s a line for us to start with.\n\nThis line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it\'s a separate line in the *same paragraph*.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'column' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Here\'s a line for us to start with.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'This line is separated from the one above by two newlines, so it will be a ',
                    _react2['default'].createElement(
                      'em',
                      null,
                      'separate paragraph'
                    ),
                    '.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'This line is also begins a separate paragraph, but...',
                    _react2['default'].createElement('br', null),
                    'This line is only separated by a single newline, so it\'s a separate line in the ',
                    _react2['default'].createElement(
                      'em',
                      null,
                      'same paragraph'
                    ),
                    '.'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'sixteen wide column' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'ui message' },
                    _react2['default'].createElement(
                      'div',
                      { className: 'header' },
                      'Technical note'
                    ),
                    _react2['default'].createElement(
                      'p',
                      null,
                      _react2['default'].createElement(
                        'em',
                        null,
                        'Inkdrop'
                      ),
                      ' uses GFM line breaks, so there\'s no need to use MD\'s two-space line breaks.'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement('div', { className: 'ui divider' }),
            _react2['default'].createElement(
              'section',
              null,
              _react2['default'].createElement(
                'p',
                null,
                'This cheatsheet is written based on ',
                _react2['default'].createElement(
                  'a',
                  { href: '_blank', href: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet' },
                  'markdown-here\'s documentation'
                ),
                '.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'License: ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://creativecommons.org/licenses/by/3.0/', target: '_blank' },
                  'CC-BY'
                )
              )
            ),
            _react2['default'].createElement(_reactDisqusThread2['default'], {
              shortname: 'inkdrop-documentation',
              identifier: 'inkdrop-markdown-cheatsheet',
              title: ManualPage.title
            })
          )
        );
      }
    }], [{
      key: 'title',
      value: 'Markdown Cheatsheet',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 36 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(75);
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
      value: 'Plugin: Word Count',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 37 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(76);
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
/* 38 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(77);
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
      value: 'Recovering Your Password',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 39 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(78);
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
/* 40 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(79);
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
/* 41 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(80);
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
      value: 'Working Behind Web Proxy',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 42 */
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

  var _componentsManualLayout = __webpack_require__(2);

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
        var md = __webpack_require__(81);
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
/* 43 */
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
        var md = __webpack_require__(82);
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'h1',
            null,
            'Notation based on the Specified Commercial Transaction Act'
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
        );
      }
    }], [{
      key: 'title',
      value: 'Notation based on the Specified Commercial Transaction Act',
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 44 */
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
        var md = __webpack_require__(83);
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
/* 45 */
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

  var _componentsReferenceLayout = __webpack_require__(5);

  var _componentsReferenceLayout2 = _interopRequireDefault(_componentsReferenceLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(84);
        return _react2['default'].createElement(
          _componentsReferenceLayout2['default'],
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
      value: 'Book',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 46 */
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

  var _componentsReferenceLayout = __webpack_require__(5);

  var _componentsReferenceLayout2 = _interopRequireDefault(_componentsReferenceLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(85);
        return _react2['default'].createElement(
          _componentsReferenceLayout2['default'],
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
      value: 'CommandRegistry',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 47 */
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

  var _componentsReferenceLayout = __webpack_require__(5);

  var _componentsReferenceLayout2 = _interopRequireDefault(_componentsReferenceLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(86);
        return _react2['default'].createElement(
          _componentsReferenceLayout2['default'],
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
      value: 'Editor Actions',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 48 */
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

  var _componentsReferenceLayout = __webpack_require__(5);

  var _componentsReferenceLayout2 = _interopRequireDefault(_componentsReferenceLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(87);
        return _react2['default'].createElement(
          _componentsReferenceLayout2['default'],
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
      value: 'Editor Store',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 49 */
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

  var _componentsReferenceLayout = __webpack_require__(5);

  var _componentsReferenceLayout2 = _interopRequireDefault(_componentsReferenceLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(88);
        return _react2['default'].createElement(
          _componentsReferenceLayout2['default'],
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
      value: 'Environment',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 50 */
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

  var _componentsReferenceMenu = __webpack_require__(8);

  var _componentsReferenceMenu2 = _interopRequireDefault(_componentsReferenceMenu);

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

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
            { className: 'ui breadcrumb' },
            _react2['default'].createElement(
              _componentsLink2['default'],
              { to: '/', className: 'section' },
              'Docs'
            ),
            _react2['default'].createElement('i', { className: 'right chevron icon divider' }),
            _react2['default'].createElement(
              'div',
              { className: 'active section' },
              'Inkdrop API Reference'
            )
          ),
          _react2['default'].createElement('div', { className: 'ui divider' }),
          _react2['default'].createElement(
            'h2',
            { className: 'ui header' },
            _react2['default'].createElement('i', { className: 'setting icon' }),
            _react2['default'].createElement(
              'div',
              { className: 'content' },
              'Inkdrop API Reference'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'ui piled segment' },
            _react2['default'].createElement(_componentsReferenceMenu2['default'], null)
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 51 */
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

  var _componentsReferenceLayout = __webpack_require__(5);

  var _componentsReferenceLayout2 = _interopRequireDefault(_componentsReferenceLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(89);
        return _react2['default'].createElement(
          _componentsReferenceLayout2['default'],
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
      value: 'Note',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 52 */
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

  var _componentsReferenceLayout = __webpack_require__(5);

  var _componentsReferenceLayout2 = _interopRequireDefault(_componentsReferenceLayout);

  var ManualPage = (function (_Component) {
    _inherits(ManualPage, _Component);

    function ManualPage() {
      _classCallCheck(this, ManualPage);

      _get(Object.getPrototypeOf(ManualPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ManualPage, [{
      key: 'render',
      value: function render() {
        var md = __webpack_require__(90);
        return _react2['default'].createElement(
          _componentsReferenceLayout2['default'],
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
      value: 'Tag',
      enumerable: true
    }]);

    return ManualPage;
  })(_react.Component);

  exports['default'] = ManualPage;
  module.exports = exports['default'];

/***/ },
/* 53 */
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

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

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
            { className: 'ui header' },
            _react2['default'].createElement('i', { className: 'lock icon' }),
            _react2['default'].createElement(
              'div',
              { className: 'content' },
              'How secure is Inkdrop?',
              _react2['default'].createElement(
                'div',
                { className: 'sub header' },
                'At Inkdrop, the security of your data is our highest priority.'
              )
            )
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
            'Data at Rest Encryption'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Having data encrypted will make it almost impossible for someone to access or steal a hard disk and get access to the original data. Your whole notes stored on disk in Inkdrop database will be encrypted with a common key which is a 256-bit AES key generated when you signed up to Inkdrop. We use this key, along with an initialization vector, to encrypt your data in GCM (Galois/Counter Mode). The key is also encrypted while stored on disk, with a 256-bit AES key derived with PBKDF2 from your login password.'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'ui warning message' },
            _react2['default'].createElement(
              'p',
              null,
              'We never store a copy of this common key without encryption and don’t use any escrow mechanism to recover your encrypted data. This means that if you forget your login password, we cannot recover your data and we can\'t even reset your password.'
            )
          )
        );
      }
    }], [{
      key: 'title',
      value: 'How secure is Inkdrop?',
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 54 */
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
        var md = __webpack_require__(91);
        return _react2['default'].createElement(
          'div',
          { className: 'ui container main-content' },
          _react2['default'].createElement(
            'h1',
            null,
            'Terms of Service'
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: md } })
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, ".app--footer {\n  padding: 3rem 0;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n  background: rgba(34, 36, 38, 0.02);\n  font-size: 1.1rem;\n}\n.app--footer iframe:first-child {\n  margin-right: 25px;\n}\n.app--footer .app--footer-content {\n  text-align: center;\n}\n.app--footer div.column.links {\n  text-align: left;\n}\n.app--footer div.column.links ul.links {\n  display: inline-block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.app--footer div.column.links ul.links li {\n  display: inline-block;\n  margin: 0 1em;\n}\n", ""]);

  // exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment, .diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword, .css .rule .hljs-keyword, .hljs-winutils, .nginx .hljs-title, .hljs-subst, .hljs-request, .hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number, .hljs-hexcolor, .ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string, .hljs-tag .hljs-value, .hljs-doctag, .tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title, .hljs-id, .scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword, .hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title, .hljs-type, .vhdl .hljs-literal, .tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag, .hljs-tag .hljs-title, .hljs-rule .hljs-property, .django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute, .hljs-variable, .lisp .hljs-body, .hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol, .ruby .hljs-symbol .hljs-string, .lisp .hljs-keyword, .clojure .hljs-keyword, .scheme .hljs-keyword, .tex .hljs-special, .hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor, .hljs-pragma, .hljs-pi, .hljs-doctype, .hljs-shebang, .hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: white;\n  color: #525252;\n  font-family: 'SF UI Text','Helvetica Neue','Helvetica','Roboto',sans-serif;\n}\n\n.main-content {\n  padding-top: 2rem;\n  margin-bottom: 50px;\n}\n\n.main-content h1 a, .main-content h2 a, .main-content h3 a, .main-content h4 a, .main-content h5 a, .main-content h6 a {\n  opacity: 0;\n  margin-left: -32px;\n  color: inherit;\n}\n\n.main-content h1:hover a, .main-content h2:hover a, .main-content h3:hover a, .main-content h4:hover a, .main-content h5:hover a, .main-content h6:hover a {\n  opacity: 1;\n  display: inline-block;\n}\n\n.main-content h2 {\n  padding-bottom: 4px;\n  border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n\n.main-content h3 a {\n  margin-left: -25px;\n}\n\n.main-content .article-list a {\n  display: block;\n  padding: 4px;\n}\n\n.main-content .doc-content {\n\n  -webkit-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, freesans, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n\n}\n\n.main-content .doc-content blockquote {\n  margin: 0;\n}\n\n.main-content .doc-content p, .main-content .doc-content blockquote, .main-content .doc-content ul, .main-content .doc-content ol, .main-content .doc-content dl, .main-content .doc-content table, .main-content .doc-content pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.main-content .doc-content hr {\n  height: 4px;\n  padding: 0;\n  margin: 16px 0;\n  background-color: #e7e7e7;\n  border: 0 none;\n}\n\n.main-content .doc-content blockquote {\n  padding: 5px 15px;\n  color: #777;\n  border-left: 4px solid #ddd;\n}\n\n.main-content .doc-content blockquote>:first-child {\n  margin-top: 0;\n}\n\n.main-content .doc-content blockquote>:last-child {\n  margin-bottom: 0;\n}\n\n.main-content .doc-content code {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(0,0,0,0.04);\n  border-radius: 3px;\n}\n\n.main-content .doc-content code:before, .main-content .doc-content code:after {\n  letter-spacing: -0.2em;\n  content: \"\\A0\";\n}\n\n.main-content .doc-content pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.main-content .doc-content .highlight {\n  margin-bottom: 16px;\n}\n\n.main-content .doc-content .highlight pre, .main-content .doc-content pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f7f7f7;\n  border-radius: 3px;\n}\n\n.main-content .doc-content .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.main-content .doc-content pre {\n  word-wrap: normal;\n}\n\n.main-content .doc-content pre code {\n  display: inline;\n  max-width: initial;\n  padding: 0;\n  margin: 0;\n  overflow: initial;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\n.main-content .doc-content pre code:before, .main-content .doc-content pre code:after {\n  content: normal;\n}\n", ""]);

  // exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.app--header {\n  background-color: #071B26;\n\n}\n\n.app--header .app--logo {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  line-height: 1;\n\n}\n\n.app--header .ui.grid {\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  text-align: right;\n  height: 45px;\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar li {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1rem;\n\n}\n\n.app--header ul.app--navbar li > a {\n  display: inline-block;\n  padding: 14px 0;\n\n}\n\n.app--header ul.app--navbar li:last-child {\n  margin-right: 0;\n\n}\n\n.app--header a {\n  color: #bbb\n\n}\n\n.app--header a:hover {\n  color: white;\n\n}\n\n", ""]);

  // exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "a.current-active {\n  font-weight: bold;\n  background-color: lightblue;\n}\n", ""]);

  // exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n.about .section {\n  margin: 0.8em 0;\n}\n\n.about .section strong {\n  color: #525252;\n}\n", ""]);

  // exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "", ""]);

  // exports


/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = "<p>As a result of a user survey, it appears that Inkdrop users are often using the app for taking notes not just about programming but also projects and meetings for their business.\nThese notes may include confidential information necessary to be carefully protected.</p>\n<p>Since I&#39;m just a single developer I can&#39;t ensure the highest network security to protect user data like a big company (though many companies are yet compromised by crackers).\nBut there&#39;s a way to protect data with the highest security I can do, that&#39;s data-at-rest encryption.</p>\n<h2><a name=\"what-39-s-data-at-rest-encryption\" class=\"anchor\" href=\"#what-39-s-data-at-rest-encryption\"><i class=\"linkify icon\"></i></a>What&#39;s Data at Rest Encryption</h2><p>Having data encrypted will make it almost impossible for someone to access or steal a hard disk and get access to the original data.\nYour whole notes stored on disk in Inkdrop database will be encrypted with a common key which is a 256-bit AES key generated automatically when first you access to the database.\nWe use this key, along with an initialization vector, to encrypt your data in GCM (Galois/Counter Mode).\nThe key is also encrypted while stored on disk, with a 256-bit AES key derived with PBKDF2 from your login password.</p>\n<div class='ui warning message'>\n  <p>\n    We never store a copy of this common key without encryption and don’t use any escrow mechanism to recover your encrypted data.\n    This means that if you forget your login password, we cannot recover your data and we can&#39;t even reset your password.\n  </p>\n</div>\n\n<h2><a name=\"-39-encrypt-note-with-password-39-is-deprecated-soon\" class=\"anchor\" href=\"#-39-encrypt-note-with-password-39-is-deprecated-soon\"><i class=\"linkify icon\"></i></a>&#39;Encrypt Note with Password&#39; is deprecated soon</h2><p>You could encrypt a note with your password on the client app before.\nThis feature will be deprecated soon because it&#39;s no longer needed.\nIt may still be necessary for a few people but that&#39;s not a scope of Inkdrop.\nPlease don&#39;t forget to decrypt all notes before the deprecation or you will not be able to reveal your note.</p>\n<h2><a name=\"related-documents\" class=\"anchor\" href=\"#related-documents\"><i class=\"linkify icon\"></i></a>Related documents</h2><ul>\n<li><a href=\"/security\">How is Inkdrop secure?</a></li>\n<li><a href=\"/manual/recovering-your-password\">Recovering your password</a></li>\n</ul>\n";

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = "<p><em>Date: 2016-10-05</em></p>\n<p>You may not familiar with JPY, right? It&#39;d be great if users could purchase Inkdrop with USD.\nYesterday, <a href=\"https://stripe.com\">Stripe</a> has <a href=\"https://stripe.com/blog/stripe-in-japan\">publicly launched in Japan</a>. It finally supports for multiple currencies.\nI&#39;m happy to announce that Inkdrop pricing is now in USD.\nPlease check out new pricing <a href=\"https://www.inkdrop.info/pricing\">here</a>.</p>\n<h2><a name=\"what-happens-to-users-who-registered-before-the-change\" class=\"anchor\" href=\"#what-happens-to-users-who-registered-before-the-change\"><i class=\"linkify icon\"></i></a>What happens to users who registered before the change</h2><p>Nothing happens to you.\nYou will be charged in JPY with same price as before.\nIf you wish to pay with USD, please contact us.\nIt needs some manual steps on Stripe to change your billing currency.</p>\n";

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"what-platforms-does-inkdrop-run-on-\" class=\"anchor\" href=\"#what-platforms-does-inkdrop-run-on-\"><i class=\"linkify icon\"></i></a>What platforms does Inkdrop run on?</h2><p>Inkdrop is available for OS X 10.8 or later, Windows 7 or later, and Ubuntu Linux.</p>\n<h2><a name=\"can-i-sync-my-data-with-dropbox-googledrive-etc-\" class=\"anchor\" href=\"#can-i-sync-my-data-with-dropbox-googledrive-etc-\"><i class=\"linkify icon\"></i></a>Can I sync my data with DropBox, GoogleDrive, etc?</h2><p>No. You can only sync your data with a server compatible with CouchDB.\nRead the <a href=\"/manual/synchronizing-in-the-cloud#how-to-set-up-your-own-sync-server\">documentation</a> to learn how to set up your own sync server.</p>\n<p>We’re delivering stable smooth experience to our users.\nThat’s why we don’t want to defocus on support of different platforms.</p>\n<h2><a name=\"i-don-t-trust-anyone-with-my-note-can-i-run-inkdrop-server-myself-\" class=\"anchor\" href=\"#i-don-t-trust-anyone-with-my-note-can-i-run-inkdrop-server-myself-\"><i class=\"linkify icon\"></i></a>I don’t trust anyone with my note. Can I run Inkdrop server myself?</h2><p>Yes!\nSee the <a href=\"/manual/synchronizing-in-the-cloud\">documentation</a> for full instructions on setting up the sync server on your local machine.\nOr you can simply use it in offline by setting from preferences.</p>\n<h2><a name=\"how-can-i-delete-my-account-\" class=\"anchor\" href=\"#how-can-i-delete-my-account-\"><i class=\"linkify icon\"></i></a>How can I delete my account?</h2><p>You can delete your account from <a href=\"https://www.inkdrop.info/account/delete\">here</a>.\nYou data will be deleted immediately.</p>\n<h2><a name=\"i-forgot-my-password-how-to-reset-my-password-\" class=\"anchor\" href=\"#i-forgot-my-password-how-to-reset-my-password-\"><i class=\"linkify icon\"></i></a>I forgot my password. How to reset my password?</h2><p>Inkdrop cannot reset your password for security reason.\nPlease read <a href=\"/manual/recovering-your-password\">how to recover your password</a>.</p>\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"compatible-with-couchdb\" class=\"anchor\" href=\"#compatible-with-couchdb\"><i class=\"linkify icon\"></i></a>Compatible with CouchDB</h2><p>Inkdrop provides API to &quot;hack&quot; your note data from remote computer.\nIt&#39;s called <strong>Data Access API</strong> which is compatible with <a href=\"http://couchdb.apache.org/\">CouchDB</a>.\nThat means, there&#39;re already tons of libraries for CouchDB and you can choose from them in your favorite language.\nWe&#39;re using <a href=\"https://github.com/pouchdb/pouchdb\">PouchDB</a> for building the desktop app.</p>\n<p>By using this API, you can make your own notebook client app with sync feature or useful utility.</p>\n<h2><a name=\"creating-api-keys\" class=\"anchor\" href=\"#creating-api-keys\"><i class=\"linkify icon\"></i></a>Creating API Keys</h2><p>The API key is necessary for both publishing your plugins and accessing your data stored in the cloud.\nTo create new API key, go to <a href=\"https://www.inkdrop.info/account/api-keys\">API Keys</a> page and push &quot;Create new API key&quot; button.\nGenerated API key is not stored in the database, so be carefully and don&#39;t lose it.</p>\n<h2><a name=\"getting-your-database-url\" class=\"anchor\" href=\"#getting-your-database-url\"><i class=\"linkify icon\"></i></a>Getting your database URL</h2><p>By default, Inkdrop creates a separate database for storing your data in the cloud. It has a URL for each databases.\nSo you already have a URL to your database after signing up to Inkdrop.</p>\n<p>Your database URL can be checked at <code>Preferences -&gt; Sync</code>.\nYou should see your specific URL on the bottom of pane like this:</p>\n<p><img class=\"ui image\" src=\"/manual/2-1-data-access-api_url.png\" title=\"\" alt=\"Sync Preferences\" /></p>\n<p>The URL is something like this: <code>https://black.inkdrop.info/user-&lt;user_id&gt;</code></p>\n<h2><a name=\"accessing-your-database\" class=\"anchor\" href=\"#accessing-your-database\"><i class=\"linkify icon\"></i></a>Accessing your database</h2><p>Now you can send a request to the URL via HTTPS, but you will get an error as following:</p>\n<pre><code class=\"lang-bash\">$ curl https://black.inkdrop.info/user-&lt;user_id&gt;/\n{<span class=\"hljs-string\">\"error\"</span>:<span class=\"hljs-string\">\"unauthorized\"</span>,<span class=\"hljs-string\">\"reason\"</span>:<span class=\"hljs-string\">\"_reader access is required for this request\"</span>}\n</code></pre>\n<p>Because it&#39;s protected and you can&#39;t access without any credentials.\nYou need to append your API keys as the credentials with HTTP Basic authentication in the request:</p>\n<pre><code>$ curl https://&lt;access_key_id&gt;:&lt;secret_access_key&gt;@black.inkdrop.info/&lt;database_name&gt;/\n</code></pre><p>and you will get a response represented with JSON like following:</p>\n<pre><code class=\"lang-JSON\">{<span class=\"hljs-attr\">\"update_seq\"</span>:<span class=\"hljs-string\">\"2856-g1AAAAD5eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTUy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____f1YSkC0H0qgI12iJT1-SA5BMqodp_YSq1RSf1jwWIMnQAKSAuveDtDNHoDnZiLD-AxD9EOsPZAEAbTlR6A\"</span>,<span class=\"hljs-attr\">\"db_name\"</span>:<span class=\"hljs-string\">\"user-***\"</span>,<span class=\"hljs-attr\">\"sizes\"</span>:{<span class=\"hljs-attr\">\"file\"</span>:<span class=\"hljs-number\">2171762</span>,<span class=\"hljs-attr\">\"external\"</span>:<span class=\"hljs-number\">361988</span>,<span class=\"hljs-attr\">\"active\"</span>:<span class=\"hljs-number\">705412</span>},<span class=\"hljs-attr\">\"purge_seq\"</span>:<span class=\"hljs-number\">0</span>,<span class=\"hljs-attr\">\"other\"</span>:{<span class=\"hljs-attr\">\"data_size\"</span>:<span class=\"hljs-number\">361988</span>},<span class=\"hljs-attr\">\"doc_del_count\"</span>:<span class=\"hljs-number\">94</span>,<span class=\"hljs-attr\">\"doc_count\"</span>:<span class=\"hljs-number\">218</span>,<span class=\"hljs-attr\">\"disk_size\"</span>:<span class=\"hljs-number\">2171762</span>,<span class=\"hljs-attr\">\"disk_format_version\"</span>:<span class=\"hljs-number\">6</span>,<span class=\"hljs-attr\">\"data_size\"</span>:<span class=\"hljs-number\">705412</span>,<span class=\"hljs-attr\">\"compact_running\"</span>:<span class=\"hljs-literal\">false</span>,<span class=\"hljs-attr\">\"instance_start_time\"</span>:<span class=\"hljs-string\">\"0\"</span>}\n</code></pre>\n<p>Now you got access to your database.\nSee <a href=\"http://docs.couchdb.org/en/1.6.1/api/\">CouchDB documentation</a> for detailed API specifications.</p>\n";

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = "<p>There are two databases in local and on remote and they sync via HTTP(S).\nThe remote database provides API compatible with CouchDB. You can access your data in the remote database directly with the API as described in the section of <a href=\"/manual/accessing-data-in-the-cloud\">Accessing Data in the Cloud</a>.\nThe Inkdrop client app is built on top of a <a href=\"https://pouchdb.com/\">PouchDB</a> for storing data in local and syncing with the remote database. For many parts of the application, the database is the source of truth. Data is written to the local database first, then synced via the API, and changes to the database trigger Actions, Stores and components to refresh their contents. The illustration below shows this flow of data:</p>\n<p><img class=\"ui image\" src=\"/manual/2-5-accessing-the-database_data-flow.png\" title=\"\" alt=\"Data flow\" /></p>\n<h2><a name=\"accessing-the-pouchdb-instance\" class=\"anchor\" href=\"#accessing-the-pouchdb-instance\"><i class=\"linkify icon\"></i></a>Accessing the PouchDB instance</h2><p>Inkdrop is built with <a href=\"http://electron.atom.io/\">Electron</a>, an instance of the PouchDB is living inside <a href=\"https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md#main-process\">Main Process</a>. Electron&#39;s <a href=\"https://github.com/electron/electron/blob/master/docs/api/remote.md\">remote module</a> provides \n a simple way to do inter-process communication (IPC) between the renderer process (web page) and the main process. Using this IPC, you can access the PocuDB like this:</p>\n<pre><code class=\"lang-js\"><span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getDatabaseInfo</span> (<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">const</span> { app } = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'electron'</span>).remote;\n  <span class=\"hljs-keyword\">const</span> info = <span class=\"hljs-keyword\">await</span> app.db.local.info();\n  <span class=\"hljs-built_in\">console</span>.log(info.db_name);\n}\n</code></pre>\n<p>In this code, <code>app.db.local</code> is the instance of PouchDB.</p>\n<div class=\"ui info message\">\n<strong>NOTE</strong>: Returned objects from the database represent <a href=\"https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects\">Remote Objects</a>.\n</div>\n\n";

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = "<p>You can back up your all data to your local filesystem and restore it at anytime.\nInkdrop stores them as JSON files continuously while you use it.\nYou can configure where to store from the preferences:</p>\n<p><img class=\"ui image\" src=\"/manual/09-backing-up.png\" title=\"\" alt=\"Backup\" /></p>\n<p>Specify the file path for the backup and then click the <em>&#39;Apply&#39;</em> button.\nYou can also input the file path easily by clicking <em>&#39;...&#39;</em> button which opens an dialog to select the directory.</p>\n<p>To restore your backup, click the <em>&#39;Restore...&#39;</em> button which opens a dialog to select your backup location and then the data restore will start.</p>\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"inkdrop-has-three-parts\" class=\"anchor\" href=\"#inkdrop-has-three-parts\"><i class=\"linkify icon\"></i></a>Inkdrop has three parts</h2><p><img class=\"ui image\" src=\"/manual/02-basic-usage_screen.png\" title=\"\" alt=\"Layout\" /></p>\n<ul>\n<li><strong>Sidebar</strong> (on the left): it lists notebooks and tags here. Notebooks are like folders you can create recursively. Tags are like labels which can link notes with related topic.</li>\n<li><strong>Note list</strong> (in the middle): all your notes live here, ordered by modification date by default. You can search notes with keywords from a search bar on the top of it.</li>\n<li><strong>Editor</strong> (on the right): this is where your magic happens; you&#39;re looking at it. 😄</li>\n</ul>\n<h2><a name=\"creating-new-note-and-notebook\" class=\"anchor\" href=\"#creating-new-note-and-notebook\"><i class=\"linkify icon\"></i></a>Creating new note and notebook</h2><p>To create new note, you can either push a button on the right top of the note list or input keybind <code>Cmd+N</code> / <code>Ctrl+N</code>.</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_addnote.png\" title=\"\" alt=\"AddNote\" /></p>\n<p>To create new notebook, click &#39;Add&#39; button on the right of &#39;Notebooks&#39; section:</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_addbook.png\" title=\"\" alt=\"AddBook\" /></p>\n<p>To create a sub notebook, right click on the notebook item which would be parent and choose &quot;New Sub Notebook..&quot; menu.</p>\n<h2><a name=\"settings-and-preferences\" class=\"anchor\" href=\"#settings-and-preferences\"><i class=\"linkify icon\"></i></a>Settings and Preferences</h2><p>Inkdrop has a number of settings and preferences you can modify in the Preferences View.</p>\n<p>To open the Settings View, you can:</p>\n<ul>\n<li>on macOS:<ul>\n<li>Use the <em>Inkdrop &gt; Preferences</em> menu item in the menu bar</li>\n<li>Use the <code>Cmd+,</code> keybinding</li>\n</ul>\n</li>\n<li>on Windows &amp; Linux:<ul>\n<li>Use the <em>File &gt; Settings</em> menu item in the menu bar</li>\n<li>Use the <code>Ctrl+,</code> keybinding</li>\n</ul>\n</li>\n</ul>\n<p>And you should see the window like this:</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_preferences.png\" title=\"\" alt=\"Preferences\" /></p>\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop&#39;s interface is rendered using HTML, and it&#39;s styled via Less which is a superset of CSS. Don&#39;t worry if you haven&#39;t heard of Less before; it&#39;s just like CSS, but with a few handy extensions.</p>\n<p>Inkdrop supports three types of themes: UI, Syntax and Preview. UI themes style elements such as the side view, the note list, drop-down lists, and the tool bar. Syntax themes style the note, gutter and other elements inside the editor view. Preview themes style the header, texts, code blocks and other elements inside the preview view.</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme.png\" title=\"\" alt=\"Theme Types\" /></p>\n<p>Themes can be changed from Preferences which you can open by selecting the <em>Inkdrop &gt; Preferences</em> menu, and clicking the <em>Themes</em> tab on the left hand navigation.\nThemes can be also installed with <a href=\"/manual/extend-inkdrop-with-plugins\">Inkdrop Plugin Manager</a>.</p>\n<h2><a name=\"getting-started\" class=\"anchor\" href=\"#getting-started\"><i class=\"linkify icon\"></i></a>Getting Started</h2><p>Themes are pretty straightforward but it&#39;s still helpful to be familiar with a few things before starting:</p>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables\">CSS Variables</a> are entities defined by CSS authors which contain specific values to be reused throughout a document.</li>\n<li>Less is a superset of CSS, but it has some really handy features like variables. If you aren&#39;t familiar with its syntax, take a few minutes to <a href=\"https://speakerdeck.com/danmatthews/less-css\">familiarize yourself</a>.</li>\n<li>You may also want to review the concept of a <code>package.json</code> (as covered in Inkdrop <code>package.json</code>). This file is used to help distribute your theme to Inkdrop users.</li>\n<li>Your theme&#39;s <code>package.json</code> must contain a <code>theme</code> key with a value of <code>ui</code>, <code>syntax</code> or <code>preview</code> for Inkdrop to recognize and load it as a theme.</li>\n<li>You can find existing themes to install or fork in the <a href=\"https://www.inkdrop.info/themes\">Inkdrop themes registry</a>.</li>\n</ul>\n<h2><a name=\"creating-a-syntax-theme\" class=\"anchor\" href=\"#creating-a-syntax-theme\"><i class=\"linkify icon\"></i></a>Creating a Syntax Theme</h2><div class=\"ui message info\">\n  <strong>Tip:</strong> Syntax themes should end with <code>-syntax</code>, UI themes should end with <code>-ui</code> and Preview themes should end with <code>-preview</code>.\n</div>\n\n<p>Let&#39;s create your first theme which is called <code>motif-syntax</code>.\nTo create a syntax theme, do the following:</p>\n<ol>\n<li>fork the <a href=\"https://github.com/inkdropapp/inkdrop-default-light-syntax-theme\">Inkdrop&#39;s sample repository on GitHub</a></li>\n<li>Clone the forked repository to the directory named <code>motif-syntax</code> in the local filesystem</li>\n<li>Open a terminal in the forked theme&#39;s directory</li>\n<li>Let Inkdrop run in <strong>Development Mode</strong> by selecting the <em>Inkdrop &gt; Preferences</em> menu, clicking the <em>General</em> tab on the left hand navigation, and check the &quot;<em>Development Mode</em>&quot;, then reload the app by pressing <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Change the name of the theme in the theme&#39;s <code>package.json</code> file</li>\n<li>Run <code>ipm link --dev</code> to symlink your repository to <code>~/Library/Application Support/inkdrop/dev/packages</code></li>\n<li>Reload Inkdrop using <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Enable the theme via the &quot;<em>Syntax Theme</em>&quot; drop-down in the &quot;Themes&quot; tab of the Preferences</li>\n</ol>\n<p>Now you are ready to make changes!</p>\n<p>Open up <code>styles/colors.less</code> to change the various color variables which have already been defined. For example, turn <code>@base00</code> into <code>#f4c2c1</code>.</p>\n<p>Then open <code>styles/default.less</code> and modify the various selectors that have already been defined. These selectors style different parts of code in the editor such as comments, strings and the line numbers in the gutter.\nYou may notice that the editor is built based on <a href=\"https://codemirror.net/\">CodeMirror</a>, you can also import various existing theme built for CodeMirror.</p>\n<p>After making changes, reload the app to reflected changes.</p>\n<div class=\"ui notice message\">\n<strong>Note</strong>: It&#39;s advised to not specify a <code>font-family</code> in your syntax theme because it will override the Font Family field in Inkdrop&#39;s settings. If you still like to recommend a font that goes well with your theme, we suggest you do so in your README.\n</div>\n\n<h2><a name=\"creating-a-ui-theme\" class=\"anchor\" href=\"#creating-a-ui-theme\"><i class=\"linkify icon\"></i></a>Creating a UI Theme</h2><p>To create a UI theme, do the following:</p>\n<ol>\n<li>fork the <a href=\"https://github.com/inkdropapp/inkdrop-ui-theme-template\">Inkdrop&#39;s sample repository on GitHub</a></li>\n<li>Clone the forked repository to the local filesystem</li>\n<li>Open a terminal in the forked theme&#39;s directory</li>\n<li>Let Inkdrop run in <strong>Development Mode</strong> by selecting the <em>Inkdrop &gt; Preferences</em> menu, clicking the <em>General</em> tab on the left hand navigation, and check the &quot;<em>Development Mode</em>&quot;, then reload the app by pressing <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Change the name of the theme in the theme&#39;s <code>package.json</code> file</li>\n<li>Run <code>npm install</code> to install dependencies</li>\n<li>Run <code>gulp build</code> to build theme files</li>\n<li>Run <code>ipm link --dev</code> to symlink your repository to <code>~/Library/Application Support/inkdrop/dev/packages</code></li>\n<li>Reload Inkdrop using <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Enable the theme via the &quot;<em>UI Theme</em>&quot; drop-down in the &quot;Themes&quot; tab of the Preferences</li>\n</ol>\n<p>Now you are ready to make changes!</p>\n<p>You may notice that the styling UI is based on <a href=\"http://semantic-ui.com/\">Semantic UI</a>. It&#39;s mostly common in customizing the UI elements with it, so <a href=\"http://learnsemantic.com/\">their documentation</a> is very helpful to learn.</p>\n<h2><a name=\"theme-variables\" class=\"anchor\" href=\"#theme-variables\"><i class=\"linkify icon\"></i></a>Theme Variables</h2><p>Inkdrop&#39;s UI elements are styled with <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables\">CSS variables</a>. You may not be familiar with it because it&#39;s new technology. Don&#39;t worry, it&#39;s mostly same as variables in LESS. The CSS Variables let Inkdrop give meaningful names for styles of the UI components, for example, <code>--note-list-bar-background</code> variable styles the background of the note list bar.\nInkdrop&#39;s CSS Variables are defined in <code>src/definitions/globals/variables.less</code>, and you can change them by editing <code>src/themes/default/globals/site.variables</code>.</p>\n<h2><a name=\"creating-a-preview-theme\" class=\"anchor\" href=\"#creating-a-preview-theme\"><i class=\"linkify icon\"></i></a>Creating a Preview Theme</h2><p>Let&#39;s create your first theme which is called <code>motif-preview</code>.\nTo create a preview theme, do the following:</p>\n<ol>\n<li>fork the <a href=\"https://github.com/inkdropapp/inkdrop-github-preview-theme\">Inkdrop&#39;s sample repository on GitHub</a></li>\n<li>Clone the forked repository to the directory named <code>motif-preview</code> in the local filesystem</li>\n<li>Open a terminal in the forked theme&#39;s directory</li>\n<li>Let Inkdrop run in <strong>Development Mode</strong> by selecting the <em>Inkdrop &gt; Preferences</em> menu, clicking the <em>General</em> tab on the left hand navigation, and check the &quot;<em>Development Mode</em>&quot;, then reload the app by pressing <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Change the name of the theme in the theme&#39;s <code>package.json</code> file</li>\n<li>Run <code>ipm link --dev</code> to symlink your repository to <code>~/Library/Application Support/inkdrop/dev/packages</code></li>\n<li>Reload Inkdrop using <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Enable the theme via the &quot;<em>Preview Theme</em>&quot; drop-down in the &quot;Themes&quot; tab of the Preferences</li>\n</ol>\n<p>Now you are ready to make changes!</p>\n<p>Highlighting code blocks is built with <a href=\"https://highlightjs.org/\">highlight.js</a>, and CSS selectors for styling code blocks are compatible with it.</p>\n<p>After making changes, reload the app to reflected changes.</p>\n<h2><a name=\"development-workflow\" class=\"anchor\" href=\"#development-workflow\"><i class=\"linkify icon\"></i></a>Development workflow</h2><p>There are a few tools to help make theme development faster and easier.</p>\n<h3><a name=\"developer-tools\" class=\"anchor\" href=\"#developer-tools\"><i class=\"linkify icon\"></i></a>Developer Tools</h3><p>Inkdrop is based on the Chrome browser, and supports Chrome&#39;s Developer Tools.\nIn Development Mode, <em>Inspect Element</em> menu is available in the context menu. You can right-click anywhere to inspect the HTML element.</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme-inspect-element.png\" title=\"\" alt=\"Inspect Element\" /></p>\n<p>You can check how it&#39;s styled with themes in the Developer Tools like this:</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme-devtools.png\" title=\"\" alt=\"DevTools\" /></p>\n<p>Check out Google&#39;s <a href=\"https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/?utm_source=dcc&amp;utm_medium=redirect&amp;utm_campaign=2016q3\">extensive tutorial</a> for a short introduction.</p>\n<h2><a name=\"publish-your-theme\" class=\"anchor\" href=\"#publish-your-theme\"><i class=\"linkify icon\"></i></a>Publish your theme</h2><p>Once you&#39;re happy with your theme and would like to share it with other Inkdrop users, it&#39;s time to publish it. 🎉</p>\n<p>Follow the steps in the <a href=\"/manual/plugin-word-count#publishing\">Publishing</a> section of the Word Count example. Publishing a theme works exactly the same.</p>\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop&#39;s text editor is built on top of <a href=\"https://codemirror.net/\">CodeMirror</a> which is specialized for editing code, and comes with a number of <a href=\"https://codemirror.net/mode/index.html\">language modes</a> and <a href=\"https://codemirror.net/doc/manual.html#addons\">addons</a> that implement more advanced editing functionality.</p>\n<p>You can access the instance of CodeMirror like this:</p>\n<pre><code class=\"lang-js\">inkdrop.getActiveEditor().codeMirror\n</code></pre>\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = "<p>Plugins add new functionality or provide new look to Inkdrop. You can activate or deactivate them at any time.\nGo to <code>Preferences &gt; Plugins</code> to see a list of what’s available.\nTo find new plugins to install, please access to <a href=\"https://www.inkdrop.info/plugins\">Inkdrop plugin registry</a>.</p>\n<p>Developers can clone or download additional Inkdrop plugins via <a href=\"https://github.com/inkdropapp/\">GitHub</a>. Installation instructions are here. Many of these are community-contributed, and the selection will continue to grow over time.</p>\n<p>There are three types of the plugin:</p>\n<ul>\n<li><strong>General plugin</strong> - Plugin that adds new functionality</li>\n<li><strong>UI Theme</strong> - Theme for Inkdrop UI</li>\n<li><strong>Preview Theme</strong> - Theme for Markdown preview</li>\n</ul>\n<h2><a name=\"using-ipm-inkdrop-plugin-manager-\" class=\"anchor\" href=\"#using-ipm-inkdrop-plugin-manager-\"><i class=\"linkify icon\"></i></a>Using ipm (Inkdrop Plugin Manager)</h2><div class=\"ui info message\">\n  Currently Inkdrop doesn&#39;t provide GUI for installing/uninstalling plugins. It&#39;s planned to support in the future.\n</div>\n\n<div class=\"ui message\">\n  ipm is a fork of <a href=\"https://github.com/atom/apm\">apm (atom package manager)</a>, some output messages may include Atom-related though, please ignore them. 😉\n</div>\n\n<p><strong>ipm</strong> is a command-line tool to manage plugins for Inkdrop.</p>\n<h3><a name=\"macos\" class=\"anchor\" href=\"#macos\"><i class=\"linkify icon\"></i></a>macOS</h3><p>When you first open Inkdrop, it will try to install the <code>ipm</code> command for use in the terminal.\nIf the <code>ipm</code> command has been installed, you&#39;ll see something like this:</p>\n<pre><code class=\"lang-bash\">$ <span class=\"hljs-built_in\">which</span> ipm\n/usr/<span class=\"hljs-built_in\">local</span>/bin/ipm\n</code></pre>\n<p>You can also manually install <code>ipm</code> from <code>Inkdrop -&gt; Install Shell Commands</code> from the menubar.</p>\n<h3><a name=\"windows\" class=\"anchor\" href=\"#windows\"><i class=\"linkify icon\"></i></a>Windows</h3><p>The setup program will install <code>ipm</code>, and add it to your <code>PATH</code>.</p>\n<h3><a name=\"linux\" class=\"anchor\" href=\"#linux\"><i class=\"linkify icon\"></i></a>Linux</h3><p><code>ipm</code> is not installed automatically. The command is available in the path of <code>&lt;path-to-inkdrop&gt;/resources/app/ipm/bin/ipm</code>.</p>\n<h2><a name=\"finding-new-plugins\" class=\"anchor\" href=\"#finding-new-plugins\"><i class=\"linkify icon\"></i></a>Finding new plugins</h2><p>You can also use <code>ipm</code> to find new plugins to install. If you run <code>ipm search</code>, you can search the plugin registry for a search term.</p>\n<pre><code class=\"lang-bash\">$ ipm search emoji\nSearch Results For <span class=\"hljs-string\">'emoji'</span> (1)\n└── markdown-emoji Add emoji syntax support to Inkdrop markdown editor (0 downloads, 0 stars)\n\nUse `ipm install` to install them or visit https://www.inkdrop.info/plugins to <span class=\"hljs-built_in\">read</span> more about them.\n</code></pre>\n<h2><a name=\"installing-plugins\" class=\"anchor\" href=\"#installing-plugins\"><i class=\"linkify icon\"></i></a>Installing plugins</h2><p>Once you found new plugins to install, you can install them by using the <code>ipm install</code> command:</p>\n<ul>\n<li><code>ipm install &lt;package_name&gt;</code> to install the latest version.</li>\n<li><code>ipm install &lt;package_name&gt;@&lt;package_version&gt;</code> to install a specific version.</li>\n</ul>\n<p>For example <code>ipm install markdown-emoji@0.1.0</code> installs the 0.1.0 release of the <a href=\"https://www.inkdrop.info/plugins/markdown-emoji\">markdown-emoji</a> package.</p>\n<h2><a name=\"activating-plugins\" class=\"anchor\" href=\"#activating-plugins\"><i class=\"linkify icon\"></i></a>Activating plugins</h2><p>Go to <code>Preferences &gt; Plugins</code>, you can activate/deactivate plugins by toggling a switch on the left of the plugin name here.</p>\n<p><img class=\"ui image\" src=\"/manual/06-plugins-preferences_activating.png\" title=\"\" alt=\"Activating Plugins\" /></p>\n<h2><a name=\"uninstalling-plugins\" class=\"anchor\" href=\"#uninstalling-plugins\"><i class=\"linkify icon\"></i></a>Uninstalling plugins</h2><p>You can also uninstall the plugin by running below command:</p>\n<pre><code>$ ipm uninstall &lt;package_name&gt;\n</code></pre>";

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop uses <a href=\"http://alt.js.org/\">Alt</a>, a slim implementation of Facebook&#39;s <a href=\"https://facebook.github.io/flux/\">Flux Application Architecture</a> to coordinate the movement of data through the application. Flux is extremely well suited for applications that support third-party extension because it emphasizes loose coupling and well defined interfaces between components. It enforces:</p>\n<ul>\n<li>Uni-directional data flow</li>\n<li>Loose coupling between components</li>\n</ul>\n<p>For more information about the Flux pattern, check out <a href=\"https://facebook.github.io/flux/docs/overview.html#structure-and-data-flow\">this diagram</a>.</p>\n<p>You can access a global instance of Alt via <code>inkdrop.flux</code>.\nThere are several core stores in the application:</p>\n<ul>\n<li><strong><a href=\"/reference/editor-store\">EditorStore</a></strong> - Manages current editing note document.</li>\n<li><strong>NoteListBarStore</strong> - Manages states of the note list bar.</li>\n<li><strong>BookListBarStore</strong> - Manages states of the book list bar.</li>\n<li><strong>BookListStore</strong> - Manages books currently available.</li>\n<li><strong>TagListBarStore</strong> - Manages states of hte tag list bar.</li>\n<li><strong>TagListStore</strong> - Manages tags currently available.</li>\n<li><strong>SessionStore</strong> - Manages current session status of the user.</li>\n</ul>\n<h2><a name=\"actions\" class=\"anchor\" href=\"#actions\"><i class=\"linkify icon\"></i></a>Actions</h2><p>In Flux applications, views fire Actions, which anyone in the application can subscribe to. Typically, Stores listen to actions to perform business logic and trigger updates to their corresponding views. For example, when you click &quot;Create New Note&quot; button on the top right corner of the note list bar, the React component for the button fires <code>EditorActions::create</code>. The <code>EditorStore</code> listens to this action and opens a newly created note.</p>\n<p>This approach means that your plugins can fire existing Actions, like <code>EditorActions::update</code>, or observe actions to add functionality. You can also define your own actions for use within your plugin with <code>inkdrop.flux</code>.</p>\n";

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = "<p><em>Supported from v2.3.0</em></p>\n<p>You may want to use Inkdrop as a task management tool if you write notes regarding your tasks.\nInkdrop supports to set a status to notes.</p>\n<p>To set the status to a note, click the status dropdown list on the left of the tag bar on the editor.</p>\n<p><img class=\"ui image\" src=\"/manual/08-task-management.png\" title=\"\" alt=\"Task management\" /></p>\n<p>You can choose one of the status from <strong>None</strong>(default), <strong>Active</strong>, <strong>On Hold</strong>, <strong>Completed</strong> and <strong>Dropped</strong>.\nThe notes with a status of <strong>Completed</strong> or <strong>Dropped</strong> will be hidden in the note list by default.\nIf you want to see notes with hidden status, add following condition to the search bar:</p>\n<pre><code>status:*\n</code></pre><p>or, simply select a status from the side bar.</p>\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = "<p>Let&#39;s get started by writing a very simple plugin and looking at some of the tools needed to develop one effectively. We&#39;ll start by writing a plugin that tells you how many words are in the current editor and display it in a small modal window.</p>\n<h2><a name=\"scaffolding-your-plugin\" class=\"anchor\" href=\"#scaffolding-your-plugin\"><i class=\"linkify icon\"></i></a>Scaffolding your plugin</h2><p>You can generate code scaffolding by running following command:</p>\n<pre><code class=\"lang-bash\">$ ipm init -p wordcount\n</code></pre>\n<p>You can see that <code>ipm</code> has created about a dozen files that make up the plugin. Let&#39;s take a look at each of them to get an idea of how a plugin is structured, then we can modify them to get our word count functionality.</p>\n<p>The basic plugin layout is as follows:</p>\n<pre><code>word-counter/\n├── keymaps\n│   └── wordcount.json\n├── lib\n│   ├── wordcount-message-dialog.js\n│   └── wordcount.js\n├── menus\n│   └── wordcount.json\n├── package.json\n└── styles\n    └── wordcount.less\n</code></pre><p>Not every plugin will have (or need) all of these directories. Let&#39;s see what some of these are so we can start messing with them.</p>\n<h3><a name=\"package-json\" class=\"anchor\" href=\"#package-json\"><i class=\"linkify icon\"></i></a>package.json</h3><p>Similar to <a href=\"https://docs.npmjs.com/getting-started/what-is-npm\">Node modules</a>, Inkdrop plugins contain a <code>package.json</code> file in their top-level directory. This file contains metadata about the plugin, such as the path to its &quot;main&quot; module, library dependencies, and manifests specifying the order in which its resources should be loaded.</p>\n<p>In addition to some of the regular <a href=\"https://docs.npmjs.com/files/package.json\">Node <code>package.json</code> keys</a> available, Inkdrop <code>package.json</code> files have their own additions.</p>\n<ul>\n<li><code>main</code>: the path to the JavaScript file that&#39;s the entry point to your package. If this is missing, Inkdrop will default to looking for an <code>index.js</code> or <code>index.coffee</code>.</li>\n<li><code>styles</code>: an Array of Strings identifying the order of the style sheets your plugin needs to load. If not specified, style sheets in the <code>styles</code> directory are added alphabetically.</li>\n<li><code>keymaps</code>: an Array of Strings identifying the order of the key mappings your plugin needs to load. If not specified, mappings in the <code>keymaps</code> directory are added alphabetically.</li>\n<li><code>menus</code>: an Array of Strings identifying the order of the menu mappings your plugin needs to load. If not specified, mappings in the <code>menus</code> directory are added alphabetically.</li>\n</ul>\n<p>The <code>package.json</code> in the plugin we&#39;ve just generated looks like this currently:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"wordcount\"</span>,\n  <span class=\"hljs-attr\">\"main\"</span>: <span class=\"hljs-string\">\"./lib/wordcount\"</span>,\n  <span class=\"hljs-attr\">\"version\"</span>: <span class=\"hljs-string\">\"0.0.0\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"A short description of your package\"</span>,\n  <span class=\"hljs-attr\">\"keywords\"</span>: [\n  ],\n  <span class=\"hljs-attr\">\"repository\"</span>: <span class=\"hljs-string\">\"https://github.com/inkdropapp/wordcount\"</span>,\n  <span class=\"hljs-attr\">\"license\"</span>: <span class=\"hljs-string\">\"MIT\"</span>,\n  <span class=\"hljs-attr\">\"engines\"</span>: {\n    <span class=\"hljs-attr\">\"inkdrop\"</span>: <span class=\"hljs-string\">\"&gt;=0.9.0 &lt;2.0.0\"</span>\n  },\n  <span class=\"hljs-attr\">\"dependencies\"</span>: {\n  }\n}\n</code></pre>\n<p>One of the first things you should do is ensure that this information is filled out. The name, description, repository URL the project will be at, and the license can all be filled out immediately. The other information we&#39;ll get into more detail on as we go.</p>\n<div class=\"ui warning message\">\n<strong>Warning</strong>: Do not forget to update the repository URL. The one generated for you is invalid by design and will prevent you from publishing your package until updated.\n</div>\n\n<h3><a name=\"source-code\" class=\"anchor\" href=\"#source-code\"><i class=\"linkify icon\"></i></a>Source Code</h3><p>If you want to extend Inkdrop&#39;s behavior, your plugin should contain a single top-level module, which you export from whichever file is indicated by the <code>main</code> key in your <code>package.json</code> file. In the plugin we just generated, the main package file is <code>lib/wordcount.js</code>. The remainder of your code should be placed in the lib directory, and required from your top-level file. If the <code>main</code> key is not in your <code>package.json</code> file, it will look for <code>index.coffee</code> or <code>index.js</code> as the main entry point.</p>\n<p>Your plugin&#39;s top-level module is a singleton object that manages the lifecycle of your extensions to Inkdrop. Even if your plugin creates ten different components and appends them to different parts of the DOM, it&#39;s all managed from your top-level object.</p>\n<p>Your plugin&#39;s top-level module can implement the following basic methods:</p>\n<ul>\n<li><code>activate()</code>: This <strong>optional</strong> method is called when your plugin is activated. Use this to do initialization work when your plugin is started (like setting up React Components or binding events).</li>\n<li><code>deactivate()</code>: This <strong>optional</strong> method is called when the window is shutting down. If your plugin is watching any files or holding external resources in any other way, release them here. If you&#39;re just subscribing to things on window, you don&#39;t need to worry because that&#39;s getting torn down anyway.</li>\n</ul>\n<h3><a name=\"style-sheets\" class=\"anchor\" href=\"#style-sheets\"><i class=\"linkify icon\"></i></a>Style Sheets</h3><p>Style sheets for your plugin should be placed in the <code>styles</code> directory. Any style sheets in this directory will be loaded and attached to the DOM when your plugin is activated. Style sheets can be written as CSS or <a href=\"http://lesscss.org/\">Less</a>, but Less is recommended.</p>\n<p>Ideally, you won&#39;t need much in the way of styling. Inkdrop&#39;s styles are based on <a href=\"http://semantic-ui.com/\">Semantic UI</a> which provides a standard set of components which define both the colors and UI elements for any plugin that fits into Inkdrop seamlessly. </p>\n<p>If you <em>do</em> need special styling, try to keep only structural styles in the plugin style sheets. If you must specify colors and sizing, these should be taken from the pre-defined CSS Variables where you can find at <a href=\"https://github.com/inkdropapp/inkdrop-ui-theme-template/blob/master/src/definitions/globals/variables.less\">variables.less</a> like this:</p>\n<pre><code class=\"lang-less\"><span class=\"hljs-selector-class\">.special-button</span><span class=\"hljs-selector-class\">.highlighted</span> {\n  <span class=\"hljs-attribute\">background-color</span>: var(--highlight-background);\n}\n</code></pre>\n<p>An optional <code>styles</code> array in your <code>package.json</code> can list the style sheets by name to specify a loading order; otherwise, style sheets are loaded alphabetically.</p>\n<h3><a name=\"keymaps\" class=\"anchor\" href=\"#keymaps\"><i class=\"linkify icon\"></i></a>Keymaps</h3><p>You can provide key bindings for commonly used actions for your extension, especially if you&#39;re also adding a new command. In our new plugin, we have a keymap filled in for us already in the <code>keymaps/wordcount.json</code> file:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"body\"</span>: {\n    <span class=\"hljs-attr\">\"ctrl-alt-o\"</span>: <span class=\"hljs-string\">\"wordcount:toggle\"</span>\n  }\n}\n</code></pre>\n<p>This means that if you press <code>Alt+Ctrl+O</code>, our package will run the <code>wordcount:toggle</code> command. We&#39;ll look at that code next, but if you want to change the default key mapping, you can do that in this file.</p>\n<p>Keymaps are placed in the <code>keymaps</code> subdirectory. By default, all keymaps are loaded in alphabetical order. An optional <code>keymaps</code> array in your <code>package.json</code> can specify which keymaps to load and in what order.</p>\n<p>Keybindings are executed by determining which element the keypress occurred on. In the example above, the <code>wordcount:toggle</code> command is executed when pressing <code>Alt+Ctrl+O</code> on the <code>body</code> element. This means the key combination will work anywhere in the application.</p>\n<h3><a name=\"menus\" class=\"anchor\" href=\"#menus\"><i class=\"linkify icon\"></i></a>Menus</h3><p>Menus are placed in the <code>menus</code> subdirectory. This defines menu elements like what pops up when you right click a context-menu or would go in the application menu to trigger functionality in your plugin.</p>\n<p>By default, all menus are loaded in alphabetical order. An optional <code>menus</code> array in your <code>package.json</code> can specify which menus to load and in what order.</p>\n<h3><a name=\"application-menu\" class=\"anchor\" href=\"#application-menu\"><i class=\"linkify icon\"></i></a>Application Menu</h3><p>It&#39;s recommended that you create an application menu item under the <em>Plugins</em> menu for common actions with your plugin that aren&#39;t tied to a specific element. If we look in the <code>menus/wordcount.json</code> file that was generated for us, we&#39;ll see a section that looks like this:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"menu\"</span>: [\n    {\n      <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Plugins\"</span>,\n      <span class=\"hljs-attr\">\"submenu\"</span>: [\n        {\n          <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Word Count\"</span>,\n          <span class=\"hljs-attr\">\"submenu\"</span>: [\n            {\n              <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Toggle\"</span>,\n              <span class=\"hljs-attr\">\"command\"</span>: <span class=\"hljs-string\">\"wordcount:toggle\"</span>\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</code></pre>\n<p>This section puts a &quot;Toggle&quot; menu item under a menu group named &quot;Your Name Word Count&quot; in the &quot;Plugins&quot; menu.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-application-menu.png\" title=\"\" alt=\"Application Menu\" /></p>\n<p>When you select that menu item, it will run the <code>wordcount:toggle</code> command, which we&#39;ll look at in a bit.</p>\n<p>The menu templates you specify are merged with all other templates provided by other plugins in the order which they were loaded.</p>\n<h3><a name=\"context-menu\" class=\"anchor\" href=\"#context-menu\"><i class=\"linkify icon\"></i></a>Context Menu</h3><p>It&#39;s recommended to specify a context menu item for commands that are linked to specific parts of the interface. In our <code>menus/wordcount.json</code> file, we can see an auto-generated section that looks like this:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"context-menu\"</span>: {\n    <span class=\"hljs-attr\">\".CodeMirror\"</span>: [\n      {\n        <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Toggle Word Count\"</span>,\n        <span class=\"hljs-attr\">\"command\"</span>: <span class=\"hljs-string\">\"empty:toggle\"</span>\n      }\n    ]\n  }\n}\n</code></pre>\n<p>This adds a &quot;Toggle Word Count&quot; menu option to the menu that pops up when you right-click in an Inkdrop text editor pane.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-context-menu.png\" title=\"\" alt=\"Context Menu\" /></p>\n<p>When you click that it will again run the <code>wordcount:toggle</code> method in your code.</p>\n<p>Context menus are created by determining which element was selected and then adding all of the menu items whose selectors match that element (in the order which they were loaded). The process is then repeated for the elements until reaching the top of the DOM tree.</p>\n<p>You can also add separators and submenus to your context menus. To add a submenu, provide a <code>submenu</code> key instead of a command. To add a separator, add an item with a single <code>type: &#39;separator&#39;</code> key/value pair. For instance, you could do something like this:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"context-menu\"</span>: {\n    <span class=\"hljs-attr\">\"body\"</span>: [\n      {\n        <span class=\"hljs-attr\">\"label\"</span>: 'Text'\n        <span class=\"hljs-string\">\"submenu\"</span>: [\n          {<span class=\"hljs-attr\">\"label\"</span>: 'Copy Selected Text', <span class=\"hljs-attr\">\"command\"</span>: 'core:copy'}\n          {<span class=\"hljs-attr\">\"type\"</span>: 'separator'}\n          {<span class=\"hljs-attr\">\"label\"</span>: 'Selector All', <span class=\"hljs-attr\">\"command\"</span>: 'core:select-all'}\n          {<span class=\"hljs-attr\">\"type\"</span>: 'separator'}\n          {<span class=\"hljs-attr\">\"label\"</span>: 'Undo', <span class=\"hljs-attr\">\"command\"</span>: 'core:undo'}\n        ]\n      }\n    ]\n  }\n}\n</code></pre>\n<h2><a name=\"developing-our-plugin\" class=\"anchor\" href=\"#developing-our-plugin\"><i class=\"linkify icon\"></i></a>Developing Our Plugin</h2><p>Currently with the generated package we have, if we run that <code>wordcount:toggle</code> command through the menu or the command palette, we&#39;ll get a dialog that says &quot;Word Count was toggled!&quot;.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-dialog.png\" title=\"\" alt=\"Dialog\" /></p>\n<h3><a name=\"understanding-the-generated-code\" class=\"anchor\" href=\"#understanding-the-generated-code\"><i class=\"linkify icon\"></i></a>Understanding the Generated Code</h3><p>Let&#39;s take a look at the code in our <code>lib</code> directory and see what is happening.</p>\n<p>There are two files in our lib directory. One is the main file (<code>lib/wordcount.js</code>), which is pointed to in the <code>package.json</code> file as the main file to execute for this plugin. This file handles the logic of the whole plugin.</p>\n<p>The second file is a React Component class, <code>lib/wordcount-message-dialog.js</code>, which handles the UI elements of the plugin. Let&#39;s look at this file first:</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-string\">'use babel'</span>;\n\n<span class=\"hljs-keyword\">import</span> { React } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'inkdrop'</span>;\n<span class=\"hljs-keyword\">import</span> { CompositeDisposable } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'inkdrop'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">WordcountMessageDialog</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n\n  componentWillMount () {\n    <span class=\"hljs-comment\">// Events subscribed to in Inkdrop's system can be easily cleaned up with a CompositeDisposable</span>\n    <span class=\"hljs-keyword\">this</span>.subscriptions = <span class=\"hljs-keyword\">new</span> CompositeDisposable();\n\n    <span class=\"hljs-comment\">// Register command that toggles this view</span>\n    <span class=\"hljs-keyword\">this</span>.subscriptions.add(inkdrop.commands.add(<span class=\"hljs-built_in\">document</span>.body, {\n      <span class=\"hljs-string\">'wordcount:toggle'</span>: () =&gt; <span class=\"hljs-keyword\">this</span>.toggle()\n    }));\n  }\n\n  componentWillUnmount () {\n    <span class=\"hljs-keyword\">this</span>.subscriptions.dispose();\n  }\n\n  render() {\n    <span class=\"hljs-keyword\">const</span> { MessageDialog } = inkdrop.components.classes;\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">MessageDialog</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">'dialog'</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">'Word Count'</span>&gt;</span>\n        Word Count was toggled!\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">MessageDialog</span>&gt;</span></span>\n    );\n  }\n\n  toggle() {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Wordcount was toggled!'</span>);\n    <span class=\"hljs-keyword\">const</span> { dialog } = <span class=\"hljs-keyword\">this</span>.refs;\n    <span class=\"hljs-keyword\">if</span> (!dialog.isShown) {\n      dialog.showDialog();\n    } <span class=\"hljs-keyword\">else</span> {\n      dialog.dismissDialog();\n    }\n  }\n}\n</code></pre>\n<p>Inkdrop is built with <a href=\"https://facebook.github.io/react/\">React</a>, and you can make UI components with it.\nThe <code>WordcountMessageDialog</code> defines a React Component which shows a modal message dialog on toggling from the command.\nThis component implements following four methods:</p>\n<ul>\n<li><code>componentWillMount</code> - invoked once, immediately before the initial rendering occurs. See <a href=\"https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount\">here</a> for more information.</li>\n<li><code>componentWillUnmount</code> - invoked once, immediately before a component is unmounted from the DOM. See <a href=\"https://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount\">here</a> for more information.</li>\n<li><code>render</code> - invoked when React renders your component. See <a href=\"https://facebook.github.io/react/docs/tutorial.html\">here</a> for more information.</li>\n<li><code>toggle</code> - invoked when <code>wordcount:toggle</code> is dispatched.</li>\n</ul>\n<p>In the <code>componentWillMount</code> method, it creates an instance of the <code>CompositeDisposable</code> class so it can register all the commands that can be called from the plugin so other plugins could subscribe to these events.</p>\n<p>The second file we have is the main entry point to the plugin. Again, because it&#39;s referenced in the <code>package.json</code> file. Let&#39;s take a look at that file, it&#39;s pretty simple:</p>\n<pre><code class=\"lang-js\"><span class=\"hljs-string\">'use babel'</span>;\n\n<span class=\"hljs-keyword\">import</span> WordcountMessageDialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./wordcount-message-dialog'</span>;\n\n<span class=\"hljs-built_in\">module</span>.exports = {\n\n  activate() {\n    inkdrop.components.registerClass(WordcountMessageDialog);\n    inkdrop.layouts.addComponentToLayout(<span class=\"hljs-string\">'modals'</span>, <span class=\"hljs-string\">'WordcountMessageDialog'</span>);\n  },\n\n  deactivate() {\n    inkdrop.layouts.removeComponentFromLayout(<span class=\"hljs-string\">'modals'</span>, <span class=\"hljs-string\">'WordcountMessageDialog'</span>);\n    inkdrop.components.deleteClass(WordcountMessageDialog);\n  }\n\n};\n</code></pre>\n<p>In the <code>activate</code> method called on activation of the plugin, it registers the <code>WordcountMessageDialog</code> class to a Inkdrop component registry and adds it to a hidden modal collection.</p>\n<h3><a name=\"the-flow\" class=\"anchor\" href=\"#the-flow\"><i class=\"linkify icon\"></i></a>The Flow</h3><p>So, let&#39;s review the actual flow in this plugin.</p>\n<ol>\n<li>Inkdrop starts up</li>\n<li>Inkdrop starts loading plugins</li>\n<li>Inkdrop reads your <code>package.json</code></li>\n<li>Inkdrop loads keymaps, menus, styles and the main module</li>\n<li>Inkdrop finishes loading plugins</li>\n<li>Inkdrop executes the <code>activate</code> method in your main module which sets up the UI by creating the hidden modal message dialog</li>\n<li>Inkdrop executes the plugin command <code>wordcount:toggle</code> which reveals the hidden modal message dialog</li>\n<li>At some point, the user executes the <code>wordcount:toggle</code> command again</li>\n<li>Inkdrop executes the command which hides the modal message dialog</li>\n</ol>\n<h2><a name=\"counting-the-words\" class=\"anchor\" href=\"#counting-the-words\"><i class=\"linkify icon\"></i></a>Counting the Words</h2><p>So now that we understand what is happening, let&#39;s modify the code so that our little modal message dialog shows us the current word count instead of static text.</p>\n<p>We&#39;ll do this in a very simple way. When the dialog is toggled, we&#39;ll count the words right before displaying the modal. So let&#39;s do this in the <code>toggle</code> command. If we add some code to count the words and ask the React component to update itself, we&#39;ll have something like this in <code>lib/wordcount-message-dialog.js</code>:</p>\n<pre><code class=\"lang-js\">  componentWillMount () {\n    <span class=\"hljs-comment\">/* ... */</span>\n\n    <span class=\"hljs-keyword\">this</span>.setState({ words: <span class=\"hljs-number\">0</span> });\n  }\n</code></pre>\n<pre><code class=\"lang-js\">  toggle() {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'WordCount was toggled!'</span>);\n    <span class=\"hljs-keyword\">const</span> { dialog } = <span class=\"hljs-keyword\">this</span>.refs;\n    <span class=\"hljs-keyword\">if</span> (!dialog.isShown) {\n      <span class=\"hljs-keyword\">const</span> editorState = inkdrop.flux.getStore(<span class=\"hljs-string\">'editor'</span>).getState();\n      <span class=\"hljs-keyword\">const</span> words = editorState.document.body.split(<span class=\"hljs-regexp\">/\\s+/</span>).length;\n      <span class=\"hljs-keyword\">this</span>.setState({ words });\n      dialog.showDialog();\n    } <span class=\"hljs-keyword\">else</span> {\n      dialog.dismissDialog();\n    }\n  }\n</code></pre>\n<p>Let&#39;s look at the 4 lines we&#39;ve added.\nFirst we set a <code>words</code> to <code>0</code> by calling <code>setState</code> method.\nSecond we get a state of the <a href=\"/reference/editor-store\">editor store</a> by calling <code>inkdrop.flux.getStore(&#39;editor&#39;).getState()</code>.</p>\n<p>Next we get the number of words by looking into <code>editorState.document.body</code>, then splitting that text on whitespace with a regular expression and then getting the length of that array.</p>\n<p>Finally, we tell our message dialog to update the word count it displays by calling the <code>setState()</code> method on our dialog and then showing the modal again. Let&#39;s add a code to display the word count through the <code>render</code> method of our <code>lib/wordcount-message-dialog.js</code> file:</p>\n<pre><code class=\"lang-js\">  render() {\n    <span class=\"hljs-keyword\">const</span> { MessageDialog } = inkdrop.components.classes;\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">MessageDialog</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">'dialog'</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">'Word Count'</span>&gt;</span>\n        There are { this.state.words } words.\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">MessageDialog</span>&gt;</span></span>\n    );\n  }\n</code></pre>\n<p>Pretty simple! We take the count number that was passed in and place it into a string that we then stick into the element that our component is controlling.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-display-count.png\" title=\"\" alt=\"Word count\" /></p>\n<h2><a name=\"basic-debugging\" class=\"anchor\" href=\"#basic-debugging\"><i class=\"linkify icon\"></i></a>Basic Debugging</h2><p>You&#39;ll notice a few <code>console.log</code> statements in the code. One of the cool things about Inkdrop being built on Chromium is that you can use some of the same debugging tools available to you that you have when doing web development.</p>\n<p>To open up the Developer Console, press <code>Alt+Cmd+I</code>, or choose the menu option <em>Developer &gt; Toggle Developer Tools</em>.</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme-devtools.png\" title=\"\" alt=\"Application Menu\" /></p>\n<p>From here you can inspect objects, run code and view console output just as though you were debugging a web site.</p>\n<h2><a name=\"publishing\" class=\"anchor\" href=\"#publishing\"><i class=\"linkify icon\"></i></a>Publishing</h2><p>Now that our simple plugin is working and tested, let&#39;s go ahead and publish it so it&#39;s available to the world.</p>\n<p>Inkdrop bundles a command line utility called <code>ipm</code> which we first used back in <a href=\"/manual/extend-inkdrop-with-plugins#using-ipm-inkdrop-plugin-manager-\">Using ipm (Inkdrop Plugin Manager)</a> to search for and install plugins via the command line. The <code>ipm</code> command can also be used to publish Inkdrop plugins to the public registry and update them.</p>\n<h3><a name=\"prepare-your-package\" class=\"anchor\" href=\"#prepare-your-package\"><i class=\"linkify icon\"></i></a>Prepare Your Package</h3><p>There are a few things you should double check before publishing:</p>\n<ul>\n<li>Your <code>package.json</code> file has <code>name</code>, <code>description</code>, and <code>repository</code> fields.</li>\n<li>Your <code>package.json</code> file has a <code>version</code> field with a value of &quot;0.0.0&quot;.</li>\n<li>Your <code>package.json</code> file has an <code>engines</code> field that contains an entry for Inkdrop such as: <code>&quot;engines&quot;: {&quot;inkdrop&quot;: &quot;&gt;=0.9.0 &lt;2.0.0&quot;}</code>.</li>\n<li>Your plugin has a <code>README.md</code> file at the root.</li>\n<li>Change the repository url in the <code>package.json</code> file to match the URL of your repository.</li>\n<li>Your plugin is in a Git repository that has been pushed to <a href=\"https://github.com/\">GitHub</a>. Follow <a href=\"http://guides.github.com/overviews/desktop\">this guide</a> if your plugin isn&#39;t already on GitHub.</li>\n</ul>\n<h3><a name=\"publish-your-package\" class=\"anchor\" href=\"#publish-your-package\"><i class=\"linkify icon\"></i></a>Publish Your Package</h3><p>Before you publish a plugin it is a good idea to check ahead of time if a plugin with the same name has already been published to the <a href=\"https://www.inkdrop.info/plugins\">Inkdrop package registry</a>.\nYou can do that by visiting <a href=\"https://www.inkdrop.info/plugin/wordcount\">https://www.inkdrop.info/plugin/wordcount</a> to see if the plugin already exists. \nIf it does, update your plugin&#39;s name to something that is available before proceeding.</p>\n<p>Now let&#39;s review what the <code>ipm publish</code> command does:</p>\n<ol>\n<li>Registers the plugin name on www.inkdrop.info if it is being published for the first time.</li>\n<li>Updates the <code>version</code> field in the <code>package.json</code> file and commits it.</li>\n<li>Creates a new <a href=\"http://git-scm.com/book/en/Git-Basics-Tagging\">Git tag</a> for the version being published.</li>\n<li>Pushes the tag and current branch up to GitHub.</li>\n<li>Updates www.inkdrop.info with the new version being published.</li>\n</ol>\n<p>Now run the following commands to publish your package:</p>\n<pre><code class=\"lang-bash\"><span class=\"hljs-built_in\">cd</span> ~/github/my-package\nipm publish minor\n</code></pre>\n<p>If this is the first package you are publishing, the <code>ipm publish</code> command may prompt you for your Inkdrop API Keys which can be created <a href=\"https://www.inkdrop.info/account/api-keys\">here</a> on the Inkdrop website. This is required to publish and you only need to enter this information the first time you publish. The credentials are stored securely in your <a href=\"https://en.wikipedia.org/wiki/Keychain_(Apple\">keychain</a>) once you login.</p>\n<p>Your package is now published and available on www.inkdrop.info. Head on over to <a href=\"https://www.inkdrop.info/plugins/wordcount\">https://www.inkdrop.info/plugins/wordcount</a> to see your plugin&#39;s page.</p>\n<p>With <code>ipm publish</code>, you can bump the version and publish by using</p>\n<pre><code>$ ipm publish &lt;version-type&gt;\n</code></pre><p>where <code>&lt;version-type&gt;</code> can be <code>major</code>, <code>minor</code> and <code>patch</code>.</p>\n<p>The <code>major</code> option to the publish command tells ipm to increment the first number of the version before publishing so the published version will be <code>1.0.0</code> and the Git tag created will be <code>v1.0.0</code>.</p>\n<p>The <code>minor</code> option to the publish command tells ipm to increment the second number of the version before publishing so the published version will be <code>0.1.0</code> and the Git tag created will be <code>v0.1.0</code>.</p>\n<p>The <code>patch</code> option to the publish command tells ipm to increment the third number of the version before publishing so the published version will be <code>0.0.1</code> and the Git tag created will be <code>v0.0.1</code>.</p>\n<p>Use <code>major</code> when you make a change that breaks backwards compatibility, like changing defaults or removing features. Use <code>minor</code> when adding new functionality or making improvements on existing code. Use <code>patch</code> when you fix a bug that was causing incorrect behaviour. Check out <a href=\"http://semver.org/\">semantic versioning</a> to learn more about best practices for versioning your plugin releases.</p>\n<p>You can also run <code>ipm help publish</code> to see all the available options and <code>ipm help</code> to see all the other available commands.</p>\n<h2><a name=\"summary\" class=\"anchor\" href=\"#summary\"><i class=\"linkify icon\"></i></a>Summary</h2><p>We&#39;ve now generated, customized and published our first plugin for Inkdrop. Congratulations! Now anyone can install our masterpiece from directly within Inkdrop as we did in <a href=\"/manual/extend-inkdrop-with-plugins\">Extend Inkdrop with Plugins</a>.</p>\n";

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = "<p>Welcome to Inkdrop! Here&#39;s how to get started.\nTo get started with Inkdrop, we&#39;ll need to get it on your system.</p>\n<h2><a name=\"creating-your-inkdrop-account\" class=\"anchor\" href=\"#creating-your-inkdrop-account\"><i class=\"linkify icon\"></i></a>Creating your Inkdrop account</h2><p>First, go to <a href=\"https://www.inkdrop.info/\">Inkdrop website</a> and sign up.\nInkdrop will prepare new database for storing your note data.\nAlso your account can be used for publishing your plugins and so on.</p>\n<h2><a name=\"downloading-the-app\" class=\"anchor\" href=\"#downloading-the-app\"><i class=\"linkify icon\"></i></a>Downloading the app</h2><p>After you set up an account and log in, you should see a download button as shown here:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_download.png\" title=\"\" alt=\"Download\" /></p>\n<p>Desktop application is ready for macOS, Windows and Linux, so choose one for your environment:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_download2.png\" title=\"\" alt=\"Download\" /></p>\n<h2><a name=\"installing-inkdrop-on-macos\" class=\"anchor\" href=\"#installing-inkdrop-on-macos\"><i class=\"linkify icon\"></i></a>Installing Inkdrop on macOS</h2><p>Inkdrop follows the standard Mac zip installation process. You can download the <code>Inkdrop-x.y.z-Mac.zip</code> file from the Inkdrop website. Once you have that file, you can click on it to extract the application and then drag the new Inkdrop application into your &quot;Applications&quot; folder.</p>\n<h2><a name=\"installing-inkdrop-on-windows\" class=\"anchor\" href=\"#installing-inkdrop-on-windows\"><i class=\"linkify icon\"></i></a>Installing Inkdrop on Windows</h2><p>Inkdrop is both available with a Windows installer and zip archive. The installer is recommended because it can provide auto-update features which automatically update to the latest version of the Inkdrop app.</p>\n<h2><a name=\"installing-inkdrop-on-linux\" class=\"anchor\" href=\"#installing-inkdrop-on-linux\"><i class=\"linkify icon\"></i></a>Installing Inkdrop on Linux</h2><p>To install Inkdrop on Linux, you can download a Debian package or a zip archive.\nThe package do not currently have auto-update features, so when you would like to upgrade to a new release of Inkdrop, you will have to repeat this installation process.</p>\n<p>To install Atom on Debian, Ubuntu, or related systems:</p>\n<pre><code class=\"lang-bash\"><span class=\"hljs-comment\"># Install Inkdrop</span>\nsudo dpkg -i inkdrop_x.y.z_amd64.deb\n\n<span class=\"hljs-comment\"># Install Inkdrop's dependencies if they are missing</span>\nsudo apt-get <span class=\"hljs-_\">-f</span> install\n</code></pre>\n<h2><a name=\"log-in\" class=\"anchor\" href=\"#log-in\"><i class=\"linkify icon\"></i></a>Log in</h2><p>When you first open Inkdrop, you should see Log-in screen like this:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_login.png\" title=\"\" alt=\"Login\" /></p>\n<p>Enter your email address and password to get started.</p>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"inkdrop-cannot-reset-your-password\" class=\"anchor\" href=\"#inkdrop-cannot-reset-your-password\"><i class=\"linkify icon\"></i></a>Inkdrop cannot reset your password</h2><p>For <a href=\"/security\">securing your data</a>, your notes are encrypted and Inkdrop must need your password to decrypt your data.\nThis means that if you forget your login password, we cannot recover your data and we can&#39;t even reset your password.</p>\n<p>But there is one way to recover your password, which is to check your computer system possibly storing your password.</p>\n<h2><a name=\"check-your-keychain-keyring-in-your-computer\" class=\"anchor\" href=\"#check-your-keychain-keyring-in-your-computer\"><i class=\"linkify icon\"></i></a>Check your Keychain/Keyring in your computer</h2><p>The client desktop app stores your password as same as web browser does in secure way.\nOn macOS the password are managed by the Keychain, on Linux it is managed by Gnome Keyring and on Windows it is managed by Credential Vault.</p>\n<p>Note that it doesn&#39;t work if you have already logged out from Inkdrop on the client app.</p>\n<div class=\"ui error message\">\n  <div class=\"header\">For Windows users</div>\n  <p>\n    Unfortunately you can&#39;t get your password from Windows Credential Vault.\n  </p>\n</div>\n\n<h3><a name=\"on-macos\" class=\"anchor\" href=\"#on-macos\"><i class=\"linkify icon\"></i></a>On macOS</h3><p><img class=\"ui image\" src=\"/manual/07-recovering-your-password_keychain-access-01.png\" title=\"\" alt=\"Keychain Access 01\" /></p>\n<ul>\n<li>Launch &quot;<strong>Keychain Access.app</strong>&quot;</li>\n<li>Search with &quot;Inkdrop&quot;</li>\n<li>Double click an item with kind of <code>application password</code></li>\n</ul>\n<p><img class=\"ui image\" src=\"/manual/07-recovering-your-password_keychain-access-02.png\" title=\"\" alt=\"Keychain Access 02\" /></p>\n<ul>\n<li>Click &quot;<strong>Show password</strong>&quot; check box</li>\n</ul>\n<h3><a name=\"on-linux-ubuntu-\" class=\"anchor\" href=\"#on-linux-ubuntu-\"><i class=\"linkify icon\"></i></a>On Linux (Ubuntu)</h3><p><img class=\"ui image\" src=\"/manual/07-recovering-your-password_linux01.png\" title=\"\" alt=\"Keyring Access 01\" /></p>\n<ul>\n<li>Launch &quot;<strong>Passwords and Keys</strong>&quot;</li>\n<li>Search with &quot;Inkdrop&quot;</li>\n<li>Click an item which the name starts with <code>inkdrop/</code></li>\n</ul>\n<p><img class=\"ui image\" src=\"/manual/07-recovering-your-password_linux02.png\" title=\"\" alt=\"Keyring Access 02\" /></p>\n<ul>\n<li>Click &quot;<strong>Show password</strong>&quot; check box</li>\n</ul>\n";

/***/ },
/* 78 */
/***/ function(module, exports) {

  module.exports = "<p>Notes are only useful if you can find them quickly. Inkdrop&#39;s full-text search also supports filtering notebooks and tags with search qualifiers.</p>\n<p>To search all the notes, either click the search bar on the top of the note list or press <code>Cmd+F</code> / <code>Ctrl+F</code> keybind to set focus to it.</p>\n<p><img class=\"ui image\" src=\"/manual/04-searching_searchbar.png\" title=\"\" alt=\"SideBySide\" /></p>\n<p>Now you can search by keyword.</p>\n<h2><a name=\"search-notes-within-a-notebook-and-with-tags\" class=\"anchor\" href=\"#search-notes-within-a-notebook-and-with-tags\"><i class=\"linkify icon\"></i></a>Search notes within a notebook and with tags</h2><p>With <code>book:&lt;book_name&gt;</code> qualifier, you can search notes within specified notebook.\nFor example:</p>\n<pre><code>book:Blog\nbook:&quot;First Notebook&quot;\n</code></pre><p>If the notebook name has one or more space characters, enclose its name in double quotes (<code>&quot;</code>).</p>\n<p>With <code>tag:&lt;tag_name&gt;</code> qualifier, you can search notes with specified tag.\nFor example:</p>\n<pre><code>tag:JavaScript\ntag:WIP\n</code></pre><h2><a name=\"search-with-a-phrase\" class=\"anchor\" href=\"#search-with-a-phrase\"><i class=\"linkify icon\"></i></a>Search with a phrase</h2><p>By enclosing keywords in double quotes (<code>&quot;</code>), you can search notes by a phrase including spaces.\nExample:</p>\n<pre><code>&quot;foo bar&quot;\n</code></pre><h2><a name=\"excluding-modifier\" class=\"anchor\" href=\"#excluding-modifier\"><i class=\"linkify icon\"></i></a>Excluding modifier</h2><p>To search notes NOT matched with specified keyword and condition, add <code>-</code> modifier before the keyword and the qualifier like following:</p>\n<pre><code>-book:Blog\n-tag:JavaScript\n-foo\n-&quot;foo bar&quot;\n</code></pre>";

/***/ },
/* 79 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop lets you sync notes across multiple computers via Cloud.\nBy default, Inkdrop stores your data in Inkdrop sync server.\nYou can configure synchronizations in the Preferences like this:</p>\n<p><img class=\"ui image\" src=\"/manual/05-sync_preferences.png\" title=\"\" alt=\"Sync Preferences\" /></p>\n<p>There are three sync options:</p>\n<ul>\n<li><strong>Don&#39;t Sync</strong> - Store Inkdrop data only in your local computer</li>\n<li><strong>Inkdrop Sync Server</strong> - Sync with Inkdrop&#39;s own service</li>\n<li><strong>Advanced (CouchDB)</strong> - Sync with your own compatible server</li>\n</ul>\n<h2><a name=\"how-to-set-up-your-own-sync-server\" class=\"anchor\" href=\"#how-to-set-up-your-own-sync-server\"><i class=\"linkify icon\"></i></a>How to set up your own sync server</h2><p>Inkdrop lets you store your notes in your own database compatible with <a href=\"http://couchdb.apache.org/\">CouchDB</a> API instead of Inkdrop&#39;s own service.\nCouchDB is just another open-source NoSQL database so you can deploy it on your environment for free. See CouchDB&#39;s <a href=\"http://docs.couchdb.org/en/1.6.1/install/index.html\">installation guide</a> for more informations.\nUsing DBaaS instead of operating database by yourself is good choice. For instance, <a href=\"https://cloudant.com/\">Cloudant</a> is one of fully-managed DBaaS providers.</p>\n<div class=\"ui warning message\">\n  <strong>WARNING</strong>: Use this feature at your own risk. Inkdrop itself doesn&#39;t protect data from other people on your server. To protect your data, read <a href='#optional-security'>Security</a> section at the bottom of this page.\n</div>\n\n<h3><a name=\"create-a-database\" class=\"anchor\" href=\"#create-a-database\"><i class=\"linkify icon\"></i></a>Create a database</h3><p>Once you got your CouchDB server, let&#39;s create a database for storing your notes.\nYou need only one database for Inkdrop. For example, run below command to create a database:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://localhost:5984/my-inkdrop-notes\n</code></pre>\n<blockquote>\n<p>NOTE: If you are running CouchDB not on localhost and port 5984 (default), replace <code>localhost:5984</code> to your server address and port.</p>\n</blockquote>\n<p>Retrieving the list of databases shows some useful results this time:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X GET http://127.0.0.1:5984/_all_dbs\n[<span class=\"hljs-string\">\"my-inkdrop-notes\"</span>]\n</code></pre>\n<p>Return to the Inkdrop sync preferences, you can input the URL to your database to the <strong>Address</strong> section:</p>\n<pre><code>http://localhost:5984/my-inkdrop-notes\n</code></pre><p><img class=\"ui image\" src=\"/manual/05-sync-custom-server.png\" title=\"\" alt=\"Sync with custom server\" /></p>\n<p>Then, push the <strong>Apply</strong> button.</p>\n<p>Please read <a href=\"http://guide.couchdb.org/draft/tour.html\">CouchDB&#39;s tutorial</a> for more information.</p>\n<h3><a name=\"optional-security\" class=\"anchor\" href=\"#optional-security\"><i class=\"linkify icon\"></i></a>Optional: Security</h3><p>As you may know, CouchDB is running with the Admin Party by default. It means Everybody has privileges to do anything.\nPlease read the <a href=\"http://guide.couchdb.org/draft/security.html\">documentation</a>.\nTo keep your notes secure, we recommend that you create an admin user with a username and password as your credentials.</p>\n<p>Now let’s create an admin user. We’ll call her <code>anna</code>, and her password is <code>secret</code>:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/_config/admins/anna <span class=\"hljs-_\">-d</span> <span class=\"hljs-string\">'\"secret\"'</span>\n</code></pre>\n<p>Now we have an admin user named <code>anna</code>, let&#39;s give her an admin access to <code>my-inkdrop-notes</code>:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes/_security <span class=\"hljs-_\">-d</span> <span class=\"hljs-string\">'{ \"admins\": { \"names\": [ \"anna\" ] } }'</span>\n</code></pre>\n<p>It restricts access from people without the valid credentials:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes\n{<span class=\"hljs-string\">\"error\"</span>:<span class=\"hljs-string\">\"unauthorized\"</span>,<span class=\"hljs-string\">\"reason\"</span>:<span class=\"hljs-string\">\"You are not a server admin.\"</span>}\n</code></pre>\n<p>That looks about right. Now we try again with the correct credentials:</p>\n<pre><code class=\"lang-bash\">&gt; HOST=<span class=\"hljs-string\">\"http://anna:secret@127.0.0.1:5984\"</span>\n&gt; curl -X PUT <span class=\"hljs-variable\">$HOST</span>/my-inkdrop-notes\n{<span class=\"hljs-string\">\"ok\"</span>:<span class=\"hljs-literal\">true</span>}\n</code></pre>\n<p>Looks good!</p>\n<p>Return to the Inkdrop sync preferences, you can input the URL to your database to the <strong>Address</strong> section:</p>\n<pre><code>http://anna:secret@127.0.0.1:5984/my-inkdrop-notes\n</code></pre><div class=\"ui warning message\">\n  <strong>NOTE</strong>: You can neither create design documents nor add attachments on the Inkdrop-hosted database.\n</div>\n\n";

/***/ },
/* 80 */
/***/ function(module, exports) {

  module.exports = "<p>If you are working behind a company proxy or you have a local proxy running, it&#39;s necessary to tell Inkdrop to go through it.\nHere is a quick tip for those dealing with a proxy.</p>\n<p>You can configure the web proxy settings by editing <code>config.cson</code>. This config file is in following directory:</p>\n<ul>\n<li>on macOS: <code>~/Library/Application Support/inkdrop/config.cson</code></li>\n<li>on Windows: <code>%APPDATA%/inkdrop/config.cson</code></li>\n<li>on Linux: <code>~/.config/inkdrop/config.cson</code></li>\n</ul>\n<p>Quit Inkdrop before you edit it.</p>\n<pre><code class=\"lang-yaml\"><span class=\"hljs-string\">\"*\"</span>:\n<span class=\"hljs-attr\">  core:</span>\n<span class=\"hljs-attr\">    network:</span>\n<span class=\"hljs-attr\">      http_proxy:</span> <span class=\"hljs-string\">\"http://webproxy:8080/\"</span>\n<span class=\"hljs-attr\">      https_proxy:</span> <span class=\"hljs-string\">\"http://webproxy:8080/\"</span>\n</code></pre>\n<p>Now open Inkdrop and you will be able to get synced!\nIf the web proxy requires BASIC auth, you can just specify a URL with username and password like so:</p>\n<pre><code>http://username:password@webproxy:8080/\n</code></pre><h2><a name=\"configuring-ipm\" class=\"anchor\" href=\"#configuring-ipm\"><i class=\"linkify icon\"></i></a>Configuring ipm</h2><p><code>ipm</code> is also necessary to be configured for working behind a web proxy.</p>\n<pre><code class=\"lang-bash\">ipm config <span class=\"hljs-built_in\">set</span> proxy <span class=\"hljs-string\">\"http://webproxy:8080\"</span>\nipm config <span class=\"hljs-built_in\">set</span> https_proxy proxy <span class=\"hljs-string\">\"http://webproxy:8080\"</span>\n</code></pre>\n";

/***/ },
/* 81 */
/***/ function(module, exports) {

  module.exports = "<p>The editor supports standard Markdown syntax as well as \n<a href=\"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet\">GitHub Flavored Markdown (GFM)</a> with inline formatting.</p>\n<h2><a name=\"live-preview\" class=\"anchor\" href=\"#live-preview\"><i class=\"linkify icon\"></i></a>Live Preview</h2><p>Inkdrop supports live preview of note. You can switch to Side-by-Side Preview with <code>Cmd+P</code> (on macOS) / <code>Ctrl+P</code> (on Windows/Linux) keybind to see the editor and preview side-by-side like this:</p>\n<p><img class=\"ui image\" src=\"/manual/03-editing_sidebyside.png\" title=\"\" alt=\"SideBySide\" /></p>\n<h2><a name=\"distraction-free-mode\" class=\"anchor\" href=\"#distraction-free-mode\"><i class=\"linkify icon\"></i></a>Distraction Free Mode</h2><p>To hide the sidebar and the note list, press <code>Cmd+Shift+D</code> / <code>Ctrl+Shift+D</code> to toggle <em>Distraction Free Mode</em>.\nYou can even hide the toolbar on the top of the editor from the preferences if you don&#39;t need it.</p>\n<h2><a name=\"tagging\" class=\"anchor\" href=\"#tagging\"><i class=\"linkify icon\"></i></a>Tagging</h2><p>Inkdrop lets you assign tags to a note.\nThis is another way to organize your notes.</p>\n<p><img class=\"ui image\" src=\"/manual/03-editing_tags.png\" title=\"\" alt=\"Tagging\" /></p>\n<p>Tags are listed on the sidebar.</p>\n";

/***/ },
/* 82 */
/***/ function(module, exports) {

  module.exports = "<h3><a name=\"seller\" class=\"anchor\" href=\"#seller\"><i class=\"linkify icon\"></i></a>Seller</h3><p>Takuya Matsuyama</p>\n<h3><a name=\"operating-officer\" class=\"anchor\" href=\"#operating-officer\"><i class=\"linkify icon\"></i></a>Operating Officer</h3><p>Takuya Matsuyama</p>\n<h3><a name=\"address\" class=\"anchor\" href=\"#address\"><i class=\"linkify icon\"></i></a>Address</h3><p>5-18-11-303, Tagara, Nerima, Tokyo 179-0073, Japan</p>\n<h3><a name=\"contact\" class=\"anchor\" href=\"#contact\"><i class=\"linkify icon\"></i></a>Contact</h3><p>Email: inkdrop@pkpk.info</p>\n<p>Tel: +815071086381</p>\n<h3><a name=\"payment-methods\" class=\"anchor\" href=\"#payment-methods\"><i class=\"linkify icon\"></i></a>Payment Methods</h3><p>Credit Card</p>\n<h3><a name=\"delivery-time\" class=\"anchor\" href=\"#delivery-time\"><i class=\"linkify icon\"></i></a>Delivery Time</h3><p>We will offer the Service as soon as the payment transaction becomes complete.</p>\n<h3><a name=\"cancelling-returning-of-product-s-\" class=\"anchor\" href=\"#cancelling-returning-of-product-s-\"><i class=\"linkify icon\"></i></a>Cancelling / Returning of Product(s)</h3><p>In principle, order cancelations and product returns or exchange are not accepted</p>\n<h3><a name=\"supported-platforms\" class=\"anchor\" href=\"#supported-platforms\"><i class=\"linkify icon\"></i></a>Supported platforms</h3><ul>\n<li>macOS</li>\n<li>Windows 7+ (64bit)</li>\n<li>Linux (64bit) (Tested on Ubuntu)</li>\n</ul>\n";

/***/ },
/* 83 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"definitions\" class=\"anchor\" href=\"#definitions\"><i class=\"linkify icon\"></i></a>Definitions</h2><p>Inkdrop is owned by Takuya Matsuyama, Tokyo - Japan. (referred to as &quot;I&quot;, &quot;Me&quot;, &quot;Our&quot; or &quot;We&quot;).\nAs a customer of this service you&#39;re a &quot;User&quot; or &quot;You&quot; according to this agreement.\nThe App or any services offered by us will be referred to as &quot;Inkdrop&quot; or &quot;Service&quot;.</p>\n<h2><a name=\"introduction\" class=\"anchor\" href=\"#introduction\"><i class=\"linkify icon\"></i></a>Introduction</h2><p>We realize that personal information is the important property of an individual, and have stated the following policies on treatment of personal information to appropriately collect and use personal information, to comply with laws and ordinances related to personal information and to prevent and cure leakage of personal information, and will take the best care in control and use of personal information. \nPlease note that any collection of personal information by linked sites or any other entities is not covered by this Privacy Policy.</p>\n<h2><a name=\"appropriate-collection-and-purpose-of-use\" class=\"anchor\" href=\"#appropriate-collection-and-purpose-of-use\"><i class=\"linkify icon\"></i></a>Appropriate Collection and Purpose of Use</h2><p>We will collect personal information through appropriate methods for the following purposes:</p>\n<ul>\n<li>to provide our services;</li>\n<li>to provide notices and send questionnaires regarding our services that are currently provided or under consideration for future releases;</li>\n<li>to help improve the services and develop new services;</li>\n<li>to make contact with you;</li>\n<li>to verify your identity and otherwise respond to inquiries;</li>\n<li>to select in drawings and deliver prizes or products;</li>\n<li>to transmit advertisement information sponsored by us or any other third party;</li>\n<li>to create statistical data regarding the use of our services;</li>\n<li>to prevent any use in breach of the Terms of Service.</li>\n</ul>\n<h2><a name=\"appropriate-control-and-protection\" class=\"anchor\" href=\"#appropriate-control-and-protection\"><i class=\"linkify icon\"></i></a>Appropriate Control and Protection</h2><p>Personal information will be strictly controlled, and appropriate measures will be taken to prevent and cure unauthorized access, loss, destruction, falsification, and leakage of personal information.</p>\n<h2><a name=\"entrustment\" class=\"anchor\" href=\"#entrustment\"><i class=\"linkify icon\"></i></a>Entrustment</h2><p>We may entrust the whole or part of the personal information it collected to outsourcing entities to the extent required to achieve the purpose of use. In such case, we will fully examine the eligibility of such outsourcing entities, state confidentiality provisions in the contracts with them, and provide any necessary and appropriate supervision to them.</p>\n<h2><a name=\"provision-to-third-party\" class=\"anchor\" href=\"#provision-to-third-party\"><i class=\"linkify icon\"></i></a>Provision to Third Party</h2><p>We will not disclose or provide any data to any third party except when a prior consent is given by you;\nit is based on laws and ordinances;\nany breach of the Terms of Service for Inkdrop or other our services should occur, and there are sufficient reasons for determining the disclosure of the personal information is necessary to protect our rights, property and services;\nit is necessary for the protection of the life, body or property of an individual and is difficult to obtain your consent;\nit is specially necessary for improving public health or promoting the sound growth of children and is difficult to obtain your consent;\nit is necessary for cooperating with a national or local authority or an entity entrusted by it in executing the affairs prescribed by laws and ordinances, and obtaining your consent is likely to impede the execution of such affairs; or\nany succession of our business including the provision of personal information is made due to any merger, company split, transfer of operations or other reasons.</p>\n<h2><a name=\"joint-use\" class=\"anchor\" href=\"#joint-use\"><i class=\"linkify icon\"></i></a>Joint Use</h2><p>We may jointly use any personal information with our business cooperators in providing our services.\nIn such case, we will, in advance, publish the items of the personal information used jointly, the scope of the joint users, the purpose for which the personal information is used jointly and the name of person responsible for the management of the personal information is used jointly.</p>\n<h2><a name=\"use-by-minors-under-18\" class=\"anchor\" href=\"#use-by-minors-under-18\"><i class=\"linkify icon\"></i></a>Use by minors under 18</h2><p>If you are under 18, please use our service and input the personal information upon the consent of your custodian.</p>\n<h2><a name=\"procedures-for-disclosure\" class=\"anchor\" href=\"#procedures-for-disclosure\"><i class=\"linkify icon\"></i></a>Procedures for Disclosure</h2><p>We will respond without delay to your request for notice of the purpose of use, disclosure, correction, addition or deletion of contents, discontinuance of the use, erasure, and discontinuance of provision to a third party (hereinafter referred to as “Disclosure, etc.”) of (your) personal information.\nProvided, however, you are required to take the procedures prescribed by us in requesting Disclosure, etc.</p>\n<h2><a name=\"disclaimer\" class=\"anchor\" href=\"#disclaimer\"><i class=\"linkify icon\"></i></a>Disclaimer</h2><p>We shall assume no liability whatsoever if you reveal the personal information to third parties using any feature of our services or any other means and you become identifiable by such information you disclosed on our services.</p>\n<h2><a name=\"creation-and-use-of-statistical-data\" class=\"anchor\" href=\"#creation-and-use-of-statistical-data\"><i class=\"linkify icon\"></i></a>Creation and Use of Statistical Data</h2><p>We may create, based on the personal information collected, statistical data processed so that no individual is identifiable.\nWith regard to such creation and use of the personally unidentifiable statistical data, we may conduct without any restriction.</p>\n<h2><a name=\"collection-and-use-of-attribute-information-activity-history\" class=\"anchor\" href=\"#collection-and-use-of-attribute-information-activity-history\"><i class=\"linkify icon\"></i></a>Collection and Use of Attribute Information/Activity History</h2><p>We may collect and/or use the following personally unidentifiable information to personalize our services or contents of advertisements and may provide such information to sponsors, information providers, or service providers: cookies, logs, activity histories for accessed URLs, contents or reference orders, individual terminal identification information and other device information, and attribute information on gender, occupation, or age.</p>\n<h2><a name=\"amendment\" class=\"anchor\" href=\"#amendment\"><i class=\"linkify icon\"></i></a>Amendment</h2><p>We reserve the right to make amendments to this Privacy Policy.</p>\n";

/***/ },
/* 84 */
/***/ function(module, exports) {

  module.exports = "<p>Example:</p>\n<pre><code class=\"lang-JSON\">{\n   <span class=\"hljs-attr\">\"_id\"</span>: <span class=\"hljs-string\">\"book:rylKOycF\"</span>,\n   <span class=\"hljs-attr\">\"_rev\"</span>: <span class=\"hljs-string\">\"2-8995d31a85ff253ffa12062ed5e1ec0a\"</span>,\n   <span class=\"hljs-attr\">\"updatedAt\"</span>: <span class=\"hljs-number\">1470970961407</span>,\n   <span class=\"hljs-attr\">\"createdAt\"</span>: <span class=\"hljs-number\">1470916727554</span>,\n   <span class=\"hljs-attr\">\"count\"</span>: <span class=\"hljs-number\">0</span>,\n   <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"First Notebook\"</span>\n}\n</code></pre>\n<h2><a name=\"fields\" class=\"anchor\" href=\"#fields\"><i class=\"linkify icon\"></i></a>Fields</h2><h3><a name=\"_id\" class=\"anchor\" href=\"#_id\"><i class=\"linkify icon\"></i></a>_id</h3><p>Type: <strong>String</strong></p>\n<p>The unique book ID which should start with <code>book:</code> and the remains are randomly generated string.\nIf the book is a sub-notebook, the <code>_id</code> should contain its parent book ID like following:</p>\n<pre><code>book:parent-book-id:book-id\n</code></pre><p>For example, if the parent book ID is <code>book:foo</code>, then the book ID is:</p>\n<pre><code>book:foo:bar\n</code></pre><h3><a name=\"_rev\" class=\"anchor\" href=\"#_rev\"><i class=\"linkify icon\"></i></a>_rev</h3><p>Type: <strong>String</strong></p>\n<p>This is a CouchDB specific field.\nThe current MVCC-token/revision of this document (mandatory and immutable).</p>\n<h3><a name=\"updatedat\" class=\"anchor\" href=\"#updatedat\"><i class=\"linkify icon\"></i></a>updatedAt</h3><p>Type: <strong>Number</strong></p>\n<p>The date time when the notebook was last updated, represented with <a href=\"http://www.unixtimestamp.com/\">Unix timestamps</a> in milliseconds.</p>\n<h3><a name=\"createdat\" class=\"anchor\" href=\"#createdat\"><i class=\"linkify icon\"></i></a>createdAt</h3><p>Type: <strong>Number</strong></p>\n<p>The date time when the notebook was created, represented with <a href=\"http://www.unixtimestamp.com/\">Unix timestamps</a> in milliseconds.</p>\n<h3><a name=\"count\" class=\"anchor\" href=\"#count\"><i class=\"linkify icon\"></i></a>count</h3><p>Type: <strong>Number</strong></p>\n<p>It indicates the number of notes in the notebook.</p>\n<h3><a name=\"name\" class=\"anchor\" href=\"#name\"><i class=\"linkify icon\"></i></a>name</h3><p>Type: <strong>String</strong></p>\n<p>The name of the notebook.</p>\n";

/***/ },
/* 85 */
/***/ function(module, exports) {

  module.exports = "<p>Associates listener functions with commands in a context-sensitive way using DOM node.\nYou can access a global instance of this class via <code>inkdrop.commands</code>.</p>\n<p>The global command registry facilitates a style of event handling known as event delegation. Inkdrop commands are expressed as custom DOM events that can be invoked on the currently focused element via a key binding.\nRather than binding listeners for command events directly to DOM nodes, you instead register command event listeners globally on <code>inkdrop.commands</code> and constrain them to specific kinds of elements with DOM nodes.</p>\n<p>Command names must follow the <code>namespace:action</code> pattern, where <code>namespace</code> will typically be the name of your package, and <code>action</code> describes the behavior of your command.\nIf either part consists of multiple words, these must be separated by hyphens. E.g. <code>awesome-package:turn-it-up-to-eleven</code>.\nAll words should be lowercased.</p>\n<p>As the event bubbles upward through the DOM, all registered event listeners with matching selectors are invoked in order of specificity.\nIn the event of a specificity tie, the most recently registered listener is invoked first.\nThis mirrors the &quot;cascade&quot; semantics of CSS.\nEvent listeners are invoked in the context of the current DOM node, meaning <code>this</code> always points at <code>event.currentTarget</code>.\nAs is normally the case with DOM events, <code>stopPropagation</code> and <code>stopImmediatePropagation</code> can be used to terminate the bubbling process and prevent invocation of additional listeners.</p>\n<h2><a name=\"example\" class=\"anchor\" href=\"#example\"><i class=\"linkify icon\"></i></a>Example</h2><p>Here is a command that inserts the current date in an editor:</p>\n<pre><code class=\"lang-js\">inkdrop.commands.add(<span class=\"hljs-built_in\">document</span>.body, {\n  <span class=\"hljs-string\">'user:insert-date'</span>: ()=&gt; {\n    <span class=\"hljs-keyword\">const</span> { <span class=\"hljs-built_in\">document</span> } = inkdrop.flux.getStore(<span class=\"hljs-string\">'editor'</span>).getState()\n    <span class=\"hljs-built_in\">document</span>.body = <span class=\"hljs-built_in\">document</span>.body + <span class=\"hljs-string\">'\\n'</span> + <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>().toLocaleString()\n    inkdrop.flux.getActions(<span class=\"hljs-string\">'editor'</span>).update({ <span class=\"hljs-built_in\">document</span>, changed: <span class=\"hljs-literal\">true</span> })\n  }\n})\n</code></pre>\n<p>Here is how to invoke the save command:</p>\n<pre><code class=\"lang-js\">inkdrop.commands.dispatch(<span class=\"hljs-built_in\">document</span>.body, <span class=\"hljs-string\">'core:save-note'</span>);\n</code></pre>\n<h2><a name=\"methods\" class=\"anchor\" href=\"#methods\"><i class=\"linkify icon\"></i></a>Methods</h2><h3><a name=\"add-target-commandname-callback-\" class=\"anchor\" href=\"#add-target-commandname-callback-\"><i class=\"linkify icon\"></i></a>add(target, commandName, callback)</h3><p>Add a command listener associated with a DOM node.</p>\n<table class=\"ui table\"><thead><tr>\n<th style=\"text-align:left\">Argument</th>\n<th style=\"text-align:left\">Description</th>\n</tr>\n</thead><tbody><tr>\n<td style=\"text-align:left\"><code>target</code></td>\n<td style=\"text-align:left\">A DOM node.</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>commandName</code></td>\n<td style=\"text-align:left\">A String containing the name of a command you want to handle such as <code>user:insert-date</code>.</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>callback(event)</code></td>\n<td style=\"text-align:left\">A Function to call when the given command is invoked on an element matching the selector. It will be called with this referencing the matching DOM node.</td>\n</tr>\n</tbody></table><h3><a name=\"add-target-commands-\" class=\"anchor\" href=\"#add-target-commands-\"><i class=\"linkify icon\"></i></a>add(target, commands)</h3><p>Add multiple command listeners associated with a DOM node.</p>\n<table class=\"ui table\"><thead><tr>\n<th style=\"text-align:left\">Argument</th>\n<th style=\"text-align:left\">Description</th>\n</tr>\n</thead><tbody><tr>\n<td style=\"text-align:left\"><code>target</code></td>\n<td style=\"text-align:left\">A DOM node.</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>commands</code></td>\n<td style=\"text-align:left\">An Object mapping command names like <code>user:insert-date</code> to listener Functions.</td>\n</tr>\n</tbody></table><h3><a name=\"dispatch-target-commandname-\" class=\"anchor\" href=\"#dispatch-target-commandname-\"><i class=\"linkify icon\"></i></a>dispatch(target, commandName)</h3><p>Simulate the dispatch of a command on a DOM node.</p>\n<p>This can be useful for testing when you want to simulate the invocation of a command on a detached DOM node.\nOtherwise, the DOM node in question needs to be attached to the document so the event bubbles up to the root node to be processed.</p>\n<table class=\"ui table\"><thead><tr>\n<th style=\"text-align:left\">Argument</th>\n<th style=\"text-align:left\">Description</th>\n</tr>\n</thead><tbody><tr>\n<td style=\"text-align:left\"><code>target</code></td>\n<td style=\"text-align:left\">The DOM node at which to start bubbling the command event.</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>commandName</code></td>\n<td style=\"text-align:left\">String indicating the name of the command to dispatch.</td>\n</tr>\n</tbody></table>";

/***/ },
/* 86 */
/***/ function(module, exports) {

  module.exports = "<p>This actions class manages all essential editing state for a note editor.\nIf you&#39;re manipulating the state of an editor, use this class.</p>\n<h2><a name=\"accessing-editor-actions-instance\" class=\"anchor\" href=\"#accessing-editor-actions-instance\"><i class=\"linkify icon\"></i></a>Accessing Editor Actions Instance</h2><pre><code class=\"lang-js\"><span class=\"hljs-keyword\">const</span> editorActions = inkdrop.flux.getActions(<span class=\"hljs-string\">'editor'</span>)\n</code></pre>\n<h2><a name=\"methods\" class=\"anchor\" href=\"#methods\"><i class=\"linkify icon\"></i></a>Methods</h2><h3><a name=\"-code-create-code-\" class=\"anchor\" href=\"#-code-create-code-\"><i class=\"linkify icon\"></i></a><code>create ()</code></h3><p>Create new note and open it in the editor.</p>\n<h3><a name=\"-code-open-noteid-viewmode-isnew-force-code-\" class=\"anchor\" href=\"#-code-open-noteid-viewmode-isnew-force-code-\"><i class=\"linkify icon\"></i></a><code>open ({ noteId, viewMode, isNew, force })</code></h3><p>Open a note in the editor.</p>\n<ul>\n<li><code>noteId</code>: A String containing a note ID to open</li>\n<li><code>viewMode</code>: A String which can be <code>preview</code>, <code>sideBySide</code> or <code>edit</code>. Default: <code>preview</code>.</li>\n<li><code>isNew</code>: A Boolean indicating whether opening note is new. Default: <code>false</code>.</li>\n<li><code>force</code>: A Boolean, <code>true</code> to force open a note again even if it&#39;s already opened. Default: <code>false</code>.</li>\n</ul>\n<h3><a name=\"-code-close-code-\" class=\"anchor\" href=\"#-code-close-code-\"><i class=\"linkify icon\"></i></a><code>close ()</code></h3><p>Close current note.</p>\n<h3><a name=\"-code-update-document-changed-code-\" class=\"anchor\" href=\"#-code-update-document-changed-code-\"><i class=\"linkify icon\"></i></a><code>update ({ document, changed })</code></h3><p>Update current note.</p>\n<ul>\n<li><code>document</code>: A <a href=\"/reference/note\">Note</a> Object representing the current note to update.</li>\n<li><code>changed</code>: A Boolean indicating the note has been changed or not.</li>\n</ul>\n<h3><a name=\"-code-changeviewmode-viewmode-code-\" class=\"anchor\" href=\"#-code-changeviewmode-viewmode-code-\"><i class=\"linkify icon\"></i></a><code>changeViewMode ({ viewMode })</code></h3><p>Change the editor view mode.</p>\n<ul>\n<li><code>viewMode</code>: A String which can be following values:<ul>\n<li><code>preview</code></li>\n<li><code>sideBySide</code></li>\n<li><code>edit</code></li>\n</ul>\n</li>\n</ul>\n<h3><a name=\"-code-save-document-code-\" class=\"anchor\" href=\"#-code-save-document-code-\"><i class=\"linkify icon\"></i></a><code>save ({ document })</code></h3><p>Save current note to the local database.</p>\n<ul>\n<li><code>document</code>: A <a href=\"/reference/note\">Note</a> Object representing the current note to save.</li>\n</ul>\n";

/***/ },
/* 87 */
/***/ function(module, exports) {

  module.exports = "<p>This store class represents all essential editing state for a note editor.</p>\n<h2><a name=\"accessing-editor-store-instance\" class=\"anchor\" href=\"#accessing-editor-store-instance\"><i class=\"linkify icon\"></i></a>Accessing Editor Store Instance</h2><pre><code class=\"lang-js\"><span class=\"hljs-keyword\">const</span> editorStore = inkdrop.flux.getStore(<span class=\"hljs-string\">'editor'</span>)\n<span class=\"hljs-keyword\">const</span> editorState = editorStore.getState()\n</code></pre>\n<h2><a name=\"state-properties\" class=\"anchor\" href=\"#state-properties\"><i class=\"linkify icon\"></i></a>State Properties</h2><ul>\n<li><code>noteId</code>: A String containing an ID of a note currently editing.</li>\n<li><code>document</code>: A <a href=\"/reference/note\">Note</a> Object representing the current note.</li>\n<li><code>changed</code>: A Boolean indicating the note has been changed since it&#39;s opened.</li>\n<li><code>openingNoteId</code>: A String containing an ID of a note currently being loaded.</li>\n<li><code>viewMode</code>: A String containing the editor&#39;s view mode which can be following values:<ul>\n<li><code>preview</code></li>\n<li><code>sideBySide</code></li>\n<li><code>edit</code></li>\n</ul>\n</li>\n<li><code>lastError</code>: A Error object indicating a last error occurred during an editor action.</li>\n</ul>\n";

/***/ },
/* 88 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop global for dealing with packages, themes, menus, and the window.</p>\n<p>An instance of this class is always available as the <code>inkdrop</code> global.</p>\n<h2><a name=\"properties\" class=\"anchor\" href=\"#properties\"><i class=\"linkify icon\"></i></a>Properties</h2><h3><a name=\"commands\" class=\"anchor\" href=\"#commands\"><i class=\"linkify icon\"></i></a>commands</h3><p>A <a href=\"/reference/command-registry\">CommandRegistry</a> instance</p>\n<h3><a name=\"config\" class=\"anchor\" href=\"#config\"><i class=\"linkify icon\"></i></a>config</h3><p>A Config instance</p>\n<h3><a name=\"contextmenu\" class=\"anchor\" href=\"#contextmenu\"><i class=\"linkify icon\"></i></a>contextMenu</h3><p>A ContextMenuManager instance</p>\n<h3><a name=\"menu\" class=\"anchor\" href=\"#menu\"><i class=\"linkify icon\"></i></a>menu</h3><p>A MenuManager instance</p>\n<h3><a name=\"keymaps\" class=\"anchor\" href=\"#keymaps\"><i class=\"linkify icon\"></i></a>keymaps</h3><p>A KeymapManager instance</p>\n<h3><a name=\"notifications\" class=\"anchor\" href=\"#notifications\"><i class=\"linkify icon\"></i></a>notifications</h3><p>A NotificationManager instance</p>\n<h3><a name=\"packages\" class=\"anchor\" href=\"#packages\"><i class=\"linkify icon\"></i></a>packages</h3><p>A PackageManager instance</p>\n<h3><a name=\"themes\" class=\"anchor\" href=\"#themes\"><i class=\"linkify icon\"></i></a>themes</h3><p>A ThemeManager instance</p>\n<h3><a name=\"styles\" class=\"anchor\" href=\"#styles\"><i class=\"linkify icon\"></i></a>styles</h3><p>A StyleManager instance</p>\n<h3><a name=\"flux\" class=\"anchor\" href=\"#flux\"><i class=\"linkify icon\"></i></a>flux</h3><p>An AltJS instance</p>\n";

/***/ },
/* 89 */
/***/ function(module, exports) {

  module.exports = "<p>The Note model represents a Note object.</p>\n<h2><a name=\"example-not-encrypted-\" class=\"anchor\" href=\"#example-not-encrypted-\"><i class=\"linkify icon\"></i></a>Example (not encrypted)</h2><pre><code class=\"lang-JSON\">{\n   <span class=\"hljs-attr\">\"_id\"</span>: <span class=\"hljs-string\">\"note:ryajdJ9Y\"</span>,\n   <span class=\"hljs-attr\">\"_rev\"</span>: <span class=\"hljs-string\">\"30-317a1636d4cdb2c755aee6e92e699cb3\"</span>,\n   <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"Welcome to Inkdrop\"</span>,\n   <span class=\"hljs-attr\">\"doctype\"</span>: <span class=\"hljs-string\">\"markdown\"</span>,\n   <span class=\"hljs-attr\">\"updatedAt\"</span>: <span class=\"hljs-number\">1471228624903</span>,\n   <span class=\"hljs-attr\">\"createdAt\"</span>: <span class=\"hljs-number\">1470916772952</span>,\n   <span class=\"hljs-attr\">\"tags\"</span>: [\n       <span class=\"hljs-string\">\"tag:498c7139-a2c1-49a8-a6b8-8bd6496ead65\"</span>\n   ],\n   <span class=\"hljs-attr\">\"body\"</span>: <span class=\"hljs-string\">\"The [Inkdrop docs](http://doc.inkdrop.info/) for Guides and the API reference.\\n * The Inkdrop forum at [github](https://github.com/inkdropapp/forum). Please report issue or suggest feedback here.\\n * The [Inkdropapp org](https://github.com/inkdropapp/). This is where all Inkdrop-created packages can be found.\\n\\n* * *\\n\\n### Get to know Inkdrop 🚀\\n\\n * [👀 Check a note example](inkdrop://note:HyxgYO15t)\\n * [📓 Create a notebook]()\\n * [✍️ Create a note]()\\n * [🖌 Choose a Theme]()\\n * [⚙ Customize the Editor]()\\n * [⌨️ Learn some Shortcuts]()\\n\"</span>,\n   <span class=\"hljs-attr\">\"bookId\"</span>: <span class=\"hljs-string\">\"book:rylKOycF\"</span>\n}\n</code></pre>\n<h2><a name=\"fields\" class=\"anchor\" href=\"#fields\"><i class=\"linkify icon\"></i></a>Fields</h2><h3><a name=\"_id\" class=\"anchor\" href=\"#_id\"><i class=\"linkify icon\"></i></a>_id</h3><p>Type: <strong>String</strong></p>\n<p>The unique document ID which should start with <code>note:</code> and the remains are randomly generated string.</p>\n<h3><a name=\"_rev\" class=\"anchor\" href=\"#_rev\"><i class=\"linkify icon\"></i></a>_rev</h3><p>Type: <strong>String</strong></p>\n<p>This is a CouchDB specific field.\nThe current MVCC-token/revision of this document (mandatory and immutable).</p>\n<h3><a name=\"title\" class=\"anchor\" href=\"#title\"><i class=\"linkify icon\"></i></a>title</h3><p>Type: <strong>String</strong></p>\n<p>The title of the note.</p>\n<h3><a name=\"doctype\" class=\"anchor\" href=\"#doctype\"><i class=\"linkify icon\"></i></a>doctype</h3><p>Type: <strong>String</strong></p>\n<p>The format type of the body field.\nIt currently can take <code>markdown</code> only, reserved for the future.</p>\n<h3><a name=\"updatedat\" class=\"anchor\" href=\"#updatedat\"><i class=\"linkify icon\"></i></a>updatedAt</h3><p>Type: <strong>Number</strong></p>\n<p>The date time when the note was last updated, represented with <a href=\"http://www.unixtimestamp.com/\">Unix timestamps</a> in milliseconds.</p>\n<h3><a name=\"createdat\" class=\"anchor\" href=\"#createdat\"><i class=\"linkify icon\"></i></a>createdAt</h3><p>Type: <strong>Number</strong></p>\n<p>The date time when the note was created, represented with <a href=\"http://www.unixtimestamp.com/\">Unix timestamps</a> in milliseconds.</p>\n<h3><a name=\"tags\" class=\"anchor\" href=\"#tags\"><i class=\"linkify icon\"></i></a>tags</h3><p>Type: <strong>Array of String</strong></p>\n<p>The list of tag IDs.</p>\n<h3><a name=\"body\" class=\"anchor\" href=\"#body\"><i class=\"linkify icon\"></i></a>body</h3><p>Type: <strong>String</strong></p>\n<p>The content of the note represented with Markdown.</p>\n<h3><a name=\"bookid\" class=\"anchor\" href=\"#bookid\"><i class=\"linkify icon\"></i></a>bookId</h3><p>The ID of the book with which the note is associated.</p>\n";

/***/ },
/* 90 */
/***/ function(module, exports) {

  module.exports = "<p>Example:</p>\n<pre><code class=\"lang-JSON\">{\n   <span class=\"hljs-attr\">\"_id\"</span>: <span class=\"hljs-string\">\"tag:1f0a9052-c82b-4749-9568-b79581d5282b\"</span>,\n   <span class=\"hljs-attr\">\"_rev\"</span>: <span class=\"hljs-string\">\"3-0da4f435c145fbf73d9eb5962996c2ec\"</span>,\n   <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"Tutorial\"</span>,\n   <span class=\"hljs-attr\">\"count\"</span>: <span class=\"hljs-number\">2</span>\n}\n</code></pre>\n<h2><a name=\"fields\" class=\"anchor\" href=\"#fields\"><i class=\"linkify icon\"></i></a>Fields</h2><h3><a name=\"_id\" class=\"anchor\" href=\"#_id\"><i class=\"linkify icon\"></i></a>_id</h3><p>Type: <strong>String</strong></p>\n<p>The unique tag ID which should start with <code>tag:</code> and the remains are randomly generated string.</p>\n<h3><a name=\"_rev\" class=\"anchor\" href=\"#_rev\"><i class=\"linkify icon\"></i></a>_rev</h3><p>Type: <strong>String</strong></p>\n<p>This is a CouchDB specific field.\nThe current MVCC-token/revision of this document (mandatory and immutable).</p>\n<h3><a name=\"name\" class=\"anchor\" href=\"#name\"><i class=\"linkify icon\"></i></a>name</h3><p>Type: <strong>String</strong></p>\n<p>The name of the tag.</p>\n<h3><a name=\"count\" class=\"anchor\" href=\"#count\"><i class=\"linkify icon\"></i></a>count</h3><p>Type: <strong>Number</strong></p>\n<p>It indicates the number of notes with the tag.</p>\n";

/***/ },
/* 91 */
/***/ function(module, exports) {

  module.exports = "<p>These Terms of Service (&quot;<strong>Terms</strong>&quot;) govern your access to and use of the services, including our various websites, APIs, email notifications, and applications (the &quot;<strong>Services</strong>&quot; or &quot;<strong>Inkdrop</strong>&quot;), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as &quot;<strong>Content</strong>&quot;). Inkdrop is owned by Takuya Matsuyama, Tokyo - Japan. (referred to as &quot;<strong>I</strong>&quot;, &quot;<strong>Me</strong>&quot;, &quot;<strong>Our</strong>&quot; or &quot;<strong>We</strong>&quot;). As a customer of this service you&#39;re a &quot;<strong>User</strong>&quot; or &quot;<strong>You</strong>&quot; according to this agreement. Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms. By accessing or using the Services you agree to be bound by these Terms.</p>\n<p>We reserve the right to update and change these Terms of Service without notice. Any new features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes. You can review the most current version of the Terms of Service at any time at: <a href=\"http://doc.inkdrop.info/terms\">http://doc.inkdrop.info/terms</a></p>\n<p>Violation of any of the terms below will result in the termination of your Account. While Inkdrop prohibits such conduct and Content on the Service, you understand and agree that Inkdrop cannot be responsible for the Content posted on the Service and you nonetheless may be exposed to such materials. You agree to use the Service at your own risk. </p>\n<h2><a name=\"account-registration-and-passwords\" class=\"anchor\" href=\"#account-registration-and-passwords\"><i class=\"linkify icon\"></i></a>Account Registration and Passwords</h2><ol>\n<li>You may be required to create an account with Inkdrop in order to access certain Services. It is a condition of your use of the Services that all the information you provide on the Services is correct, current and complete. We reserve the right to disable any user account, at any time in our sole discretion for any or no reason, including if, in our opinion, you have failed to comply with any provision of these Terms.</li>\n<li>You are responsible for safeguarding the password that you use in association with your account and for any activities or actions performed under your account. We recommend that you use &quot;strong&quot; passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with your account and that you logout from your account at the end of every session. Inkdrop cannot and will not be liable for any loss or damage arising from your failure to comply with the above. You agree to notify Inkdrop immediately at <a href=\"mailto:inkdrop@pkpk.info\">inkdrop@pkpk.info</a> of any actual or suspected unauthorized use of your account or any other breach of security known by you.</li>\n<li>Your login may only be used by one person - a single login shared by multiple people is not permitted. You may create separate logins for as many people as you&#39;d like.</li>\n<li>You may not use the Service for any illegal purpose or to violate any laws in your jurisdiction (including but not limited to copyright laws).</li>\n</ol>\n<h2><a name=\"privacy\" class=\"anchor\" href=\"#privacy\"><i class=\"linkify icon\"></i></a>Privacy</h2><ol>\n<li>Any information that you provide to Inkdrop is subject to our <a href=\"/privacy\">Privacy Policy</a>, which governs our collection and use of your information. You understand that through your use of the Services you consent to the collection and use (as set forth in the Privacy Policy) of this information, including the transfer of this information to Japan and/or other countries for storage, processing and use by Inkdrop.</li>\n<li>As part of providing you the Services, we may need to provide you with certain communications, such as service announcements and administrative messages. These communications are considered part of the Services and your Inkdrop account, which you may not be able to opt-out from receiving.</li>\n</ol>\n<h2><a name=\"payment-and-refunds-terms\" class=\"anchor\" href=\"#payment-and-refunds-terms\"><i class=\"linkify icon\"></i></a>Payment and Refunds Terms</h2><ol>\n<li>The Service is offered with a 60-day free trial. You will only be able to continue using the Service by paying in advance for additional usage. If you fail to pay for additional usage, your account will be frozen and inaccessible until payment is made.</li>\n<li>There will be no refunds or credits for partial months of service.</li>\n<li>All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities. If your billing address is in Japan, you shall be responsible for payment of a consumption tax.</li>\n<li>The credit card that you provided will automatically be charged the new rate on your next billing cycle when your billing status changes.</li>\n<li>If you switch a plan to another one with different billing cycle (e.g., from a monthly plan to a yearly plan), the billing date becomes the date of the switch. By default, Inkdrop prorates subscription costs in this case.</li>\n</ol>\n<h2><a name=\"api-terms\" class=\"anchor\" href=\"#api-terms\"><i class=\"linkify icon\"></i></a>API Terms</h2><p>Users may access their Service data via the Application Program Interface (&quot;<strong>API</strong>&quot;). Any use of the API, including use of the API through a third-party product that accesses the Service, is bound by the terms of this agreement plus the following specific terms:</p>\n<ol>\n<li>You expressly understand and agree that we shall not be liable for any damages or losses resulting from your use of the API or third-party products that access data via the API.</li>\n<li>Abuse or excessively frequent requests to the Service via the API may result in the temporary or permanent suspension of your account&#39;s access to the API. We, in its sole discretion, will determine abuse or excessive usage of the API. We will make a reasonable attempt via email to warn the account owner prior to suspension.</li>\n</ol>\n<h2><a name=\"cancellation-and-termination\" class=\"anchor\" href=\"#cancellation-and-termination\"><i class=\"linkify icon\"></i></a>Cancellation and Termination</h2><ol>\n<li>You are solely responsible for properly canceling your account. An email or phone request to cancel your account is not considered cancellation. You can cancel your account at any time by clicking on the Delete Account link in the account menu at the left of the screen which is shown after logging in.</li>\n<li>All of your content will be immediately be inaccessible from the Service upon cancellation. This information can not be recovered once it has been permanently deleted.</li>\n<li>If you cancel the Service before the end of your current paid up month, your cancellation will take effect immediately, and you will not be charged again.</li>\n<li>We, in its sole discretion, have the right to suspend or terminate your account and refuse any and all current or future use of the Service for any reason at any time. Such termination of the Service will result in the deactivation or deletion of your Account or your access to your Account, and the forfeiture and relinquishment of all content in your account. We reserve the right to refuse service to anyone for any reason at any time.</li>\n</ol>\n<h2><a name=\"modifications-to-the-service-and-prices\" class=\"anchor\" href=\"#modifications-to-the-service-and-prices\"><i class=\"linkify icon\"></i></a>Modifications to the Service and Prices</h2><ol>\n<li>We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, any part of the Service with or without notice.</li>\n<li>Prices of all Services are subject to change upon 30 days notice from us. Such notice may be provided at any time by posting the changes to the <a href=\"https://www.inkdrop.info/\">Inkdrop site</a> or the Service itself.</li>\n<li>We shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.</li>\n</ol>\n<h2><a name=\"copyright-and-content-ownership\" class=\"anchor\" href=\"#copyright-and-content-ownership\"><i class=\"linkify icon\"></i></a>Copyright and Content Ownership</h2><ol>\n<li>All content posted on the Service is must comply with Japan copyright law.</li>\n<li>We claim no intellectual property rights over the material you provide to the Service. All materials uploaded remain yours.</li>\n<li>We do not pre-screen content, but reserves the right (but not the obligation) in their sole discretion to refuse or remove any content that is available via the Service.</li>\n<li>The look and feel of the Service is copyright© Takuya Matsuyama. All rights reserved. You may not duplicate, copy, or reuse any portion of the HTML, CSS, JavaScript, or visual design elements without express written permission from the Company.</li>\n</ol>\n<h2><a name=\"general-conditions\" class=\"anchor\" href=\"#general-conditions\"><i class=\"linkify icon\"></i></a>General Conditions</h2><ol>\n<li>Your use of the Service is at your sole risk. The service is provided on an “as is” and “as available” basis.</li>\n<li>Technical support is only provided via email.</li>\n<li>You understand that we use third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.</li>\n<li>You must not crack the Service.</li>\n<li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by us.</li>\n<li>We may, but have no obligation to, remove content and accounts that we determine in our sole discretion are unlawful or violates any party’s intellectual property or these Terms of Service.</li>\n<li>Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Service customer will result in immediate account termination.</li>\n<li>We reserve the right to temporarily disable your account if your usage significantly exceeds the average usage of other Service customers. Of course, we&#39;ll reach out to the account owner before taking any action except in rare cases where the level of use may negatively impact the performance of the Service for other customers.</li>\n<li>We do not warrant that (i) the service will meet your specific requirements, (ii) the service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations, and (v) any errors in the Service will be corrected.</li>\n<li>You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if we have been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the service; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the service; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the service; (v) or any other matter relating to the service.</li>\n<li>The failure of us to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision. The Terms of Service constitutes the entire agreement between you and us and govern your use of the Service, superceding any prior agreements between you and us (including, but not limited to, any prior versions of the Terms of Service).</li>\n<li>Questions about the Terms of Service should be sent to <a href=\"mailto:inkdrop@pkpk.info\">inkdrop@pkpk.info</a>.</li>\n</ol>\n<p>The end.</p>\n<h2><a name=\"notation-based-on-the-specified-commercial-transaction-act\" class=\"anchor\" href=\"#notation-based-on-the-specified-commercial-transaction-act\"><i class=\"linkify icon\"></i></a>Notation based on the Specified Commercial Transaction Act</h2><p>特定商取引法に基づく表記</p>\n<p><a href=\"/notation\">See here</a>.</p>\n";

/***/ },
/* 92 */
/***/ function(module, exports) {

  module.exports = require("highlight.js");

/***/ },
/* 93 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 94 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 96 */
/***/ function(module, exports) {

  module.exports = require("react-disqus-thread");

/***/ },
/* 97 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);