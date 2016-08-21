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

  var _reactDom = __webpack_require__(71);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(11);

  var _coreLocation = __webpack_require__(10);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(13);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(15);
    }, '/500': function _() {
      return __webpack_require__(16);
    }, '/about': function about() {
      return __webpack_require__(17);
    }, '/faq': function faq() {
      return __webpack_require__(18);
    }, '/': function _() {
      return __webpack_require__(19);
    }, '/manual/accessing-data-in-the-cloud': function manualAccessingDataInTheCloud() {
      return __webpack_require__(20);
    }, '/manual/accessing-the-local-database': function manualAccessingTheLocalDatabase() {
      return __webpack_require__(21);
    }, '/manual/basic-usage': function manualBasicUsage() {
      return __webpack_require__(22);
    }, '/manual/creating-a-theme': function manualCreatingATheme() {
      return __webpack_require__(23);
    }, '/manual/customizing-the-editor': function manualCustomizingTheEditor() {
      return __webpack_require__(24);
    }, '/manual/extend-inkdrop-with-plugins': function manualExtendInkdropWithPlugins() {
      return __webpack_require__(25);
    }, '/manual/flux-architecture': function manualFluxArchitecture() {
      return __webpack_require__(26);
    }, '/manual/': function manual() {
      return __webpack_require__(27);
    }, '/manual/plugin-word-count': function manualPluginWordCount() {
      return __webpack_require__(28);
    }, '/manual/quick-start-guide': function manualQuickStartGuide() {
      return __webpack_require__(29);
    }, '/manual/searching-notes': function manualSearchingNotes() {
      return __webpack_require__(30);
    }, '/manual/synchronizing-in-the-cloud': function manualSynchronizingInTheCloud() {
      return __webpack_require__(31);
    }, '/manual/writing-note': function manualWritingNote() {
      return __webpack_require__(32);
    }, '/privacy': function privacy() {
      return __webpack_require__(33);
    }, '/reference/book': function referenceBook() {
      return __webpack_require__(34);
    }, '/reference/editor-actions': function referenceEditorActions() {
      return __webpack_require__(35);
    }, '/reference/editor-store': function referenceEditorStore() {
      return __webpack_require__(36);
    }, '/reference/': function reference() {
      return __webpack_require__(37);
    }, '/reference/note': function referenceNote() {
      return __webpack_require__(38);
    }, '/reference/tag': function referenceTag() {
      return __webpack_require__(39);
    }, '/security': function security() {
      return __webpack_require__(40);
    }, '/terms': function terms() {
      return __webpack_require__(41);
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

  var _helpus = __webpack_require__(8);

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

  __webpack_require__(44);

  var _coreLocation = __webpack_require__(10);

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

  var _referenceMenu = __webpack_require__(7);

  var _referenceMenu2 = _interopRequireDefault(_referenceMenu);

  var _helpus = __webpack_require__(8);

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

  var _menuLink = __webpack_require__(9);

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

  var _menuLink = __webpack_require__(9);

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
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 8 */
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
/* 9 */
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

  __webpack_require__(46);

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

  var _fbjsLibExecutionEnvironment = __webpack_require__(11);

  var _historyLibCreateBrowserHistory = __webpack_require__(68);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(69);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(70);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

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

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(42);

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
                      _Link2['default'],
                      {
                        to: '/faq'
                      },
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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(43);

  var _Navigation = __webpack_require__(14);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(12);

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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(45);

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
/* 15 */
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

  __webpack_require__(47);

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
/* 18 */
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
        var md = __webpack_require__(50);
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

  __webpack_require__(48);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsManualMenu = __webpack_require__(6);

  var _componentsManualMenu2 = _interopRequireDefault(_componentsManualMenu);

  var _componentsReferenceMenu = __webpack_require__(7);

  var _componentsReferenceMenu2 = _interopRequireDefault(_componentsReferenceMenu);

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
                  ),
                  _react2['default'].createElement(_componentsReferenceMenu2['default'], null)
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
        var md = __webpack_require__(51);
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
        var md = __webpack_require__(52);
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
        var md = __webpack_require__(53);
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
        var md = __webpack_require__(54);
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
        var md = __webpack_require__(55);
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
        var md = __webpack_require__(56);
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
        var md = __webpack_require__(57);
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
        var md = __webpack_require__(58);
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
        var md = __webpack_require__(59);
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
        var md = __webpack_require__(60);
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
        var md = __webpack_require__(61);
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
        var md = __webpack_require__(62);
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
/* 33 */
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
        var md = __webpack_require__(49);
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
/* 34 */
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
        var md = __webpack_require__(63);
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
/* 35 */
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
        var md = __webpack_require__(64);
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
/* 36 */
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
        var md = __webpack_require__(65);
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
/* 37 */
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

  var _componentsReferenceMenu = __webpack_require__(7);

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
/* 38 */
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
        var md = __webpack_require__(66);
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
        var md = __webpack_require__(67);
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, ".app--footer {\n  padding: 3rem 0;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n  background: rgba(34, 36, 38, 0.02);\n  font-size: 1.1rem;\n}\n.app--footer iframe:first-child {\n  margin-right: 25px;\n}\n.app--footer .app--footer-content {\n  text-align: center;\n}\n.app--footer ul.links {\n  display: inline-block;\n  list-style: none;\n  margin: 0;\n}\n.app--footer ul.links li {\n  display: inline-block;\n  margin: 0 1em;\n}\n", ""]);

  // exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment, .diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword, .css .rule .hljs-keyword, .hljs-winutils, .nginx .hljs-title, .hljs-subst, .hljs-request, .hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number, .hljs-hexcolor, .ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string, .hljs-tag .hljs-value, .hljs-doctag, .tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title, .hljs-id, .scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword, .hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title, .hljs-type, .vhdl .hljs-literal, .tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag, .hljs-tag .hljs-title, .hljs-rule .hljs-property, .django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute, .hljs-variable, .lisp .hljs-body, .hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol, .ruby .hljs-symbol .hljs-string, .lisp .hljs-keyword, .clojure .hljs-keyword, .scheme .hljs-keyword, .tex .hljs-special, .hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor, .hljs-pragma, .hljs-pi, .hljs-doctype, .hljs-shebang, .hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: white;\n  color: #525252;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.main-content {\n  padding-top: 2rem;\n  margin-bottom: 50px;\n}\n\n.main-content h1 a, .main-content h2 a, .main-content h3 a, .main-content h4 a, .main-content h5 a, .main-content h6 a {\n  opacity: 0;\n  margin-left: -32px;\n  color: inherit;\n}\n\n.main-content h1:hover a, .main-content h2:hover a, .main-content h3:hover a, .main-content h4:hover a, .main-content h5:hover a, .main-content h6:hover a {\n  opacity: 1;\n  display: inline-block;\n}\n\n.main-content h3 a {\n  margin-left: -25px;\n}\n\n.main-content .article-list a {\n  display: block;\n  padding: 4px;\n}\n\n.main-content .doc-content {\n\n  -webkit-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, freesans, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n\n}\n\n.main-content .doc-content blockquote {\n  margin: 0;\n}\n\n.main-content .doc-content p, .main-content .doc-content blockquote, .main-content .doc-content ul, .main-content .doc-content ol, .main-content .doc-content dl, .main-content .doc-content table, .main-content .doc-content pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.main-content .doc-content hr {\n  height: 4px;\n  padding: 0;\n  margin: 16px 0;\n  background-color: #e7e7e7;\n  border: 0 none;\n}\n\n.main-content .doc-content blockquote {\n  padding: 5px 15px;\n  color: #777;\n  border-left: 4px solid #ddd;\n}\n\n.main-content .doc-content blockquote>:first-child {\n  margin-top: 0;\n}\n\n.main-content .doc-content blockquote>:last-child {\n  margin-bottom: 0;\n}\n\n.main-content .doc-content code {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(0,0,0,0.04);\n  border-radius: 3px;\n}\n\n.main-content .doc-content code:before, .main-content .doc-content code:after {\n  letter-spacing: -0.2em;\n  content: \"\\A0\";\n}\n\n.main-content .doc-content pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.main-content .doc-content .highlight {\n  margin-bottom: 16px;\n}\n\n.main-content .doc-content .highlight pre, .main-content .doc-content pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f7f7f7;\n  border-radius: 3px;\n}\n\n.main-content .doc-content .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.main-content .doc-content pre {\n  word-wrap: normal;\n}\n\n.main-content .doc-content pre code {\n  display: inline;\n  max-width: initial;\n  padding: 0;\n  margin: 0;\n  overflow: initial;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\n.main-content .doc-content pre code:before, .main-content .doc-content pre code:after {\n  content: normal;\n}\n", ""]);

  // exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.app--header {\n  background-color: #071B26;\n\n}\n\n.app--header .app--logo {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  line-height: 1;\n\n}\n\n.app--header .ui.grid {\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 auto;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  text-align: right;\n  height: 45px;\n  margin: 0;\n\n}\n\n.app--header ul.app--navbar li {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 1rem;\n\n}\n\n.app--header ul.app--navbar li > a {\n  display: inline-block;\n  padding: 14px 0;\n\n}\n\n.app--header ul.app--navbar li:last-child {\n  margin-right: 0;\n\n}\n\n.app--header a {\n  color: #bbb\n\n}\n\n.app--header a:hover {\n  color: white;\n\n}\n\n", ""]);

  // exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "a.current-active {\n  font-weight: bold;\n  background-color: lightblue;\n}\n", ""]);

  // exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n.about .section {\n  margin: 0.8em 0;\n}\n\n.about .section strong {\n  color: #525252;\n}\n", ""]);

  // exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 49 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"definitions\" class=\"anchor\" href=\"#definitions\"><i class=\"linkify icon\"></i></a>Definitions</h2><p>Inkdrop is owned by Takuya Matsuyama, Tokyo - Japan. (referred to as &quot;I&quot;, &quot;Me&quot;, &quot;Our&quot; or &quot;We&quot;).\nAs a customer of this service you&#39;re a &quot;User&quot; or &quot;You&quot; according to this agreement.\nThe App or any services offered by us will be referred to as &quot;Inkdrop&quot; or &quot;Service&quot;.</p>\n<h2><a name=\"introduction\" class=\"anchor\" href=\"#introduction\"><i class=\"linkify icon\"></i></a>Introduction</h2><p>We realize that personal information is the important property of an individual, and have stated the following policies on treatment of personal information to appropriately collect and use personal information, to comply with laws and ordinances related to personal information and to prevent and cure leakage of personal information, and will take the best care in control and use of personal information. \nPlease note that any collection of personal information by linked sites or any other entities is not covered by this Privacy Policy.</p>\n<h2><a name=\"appropriate-collection-and-purpose-of-use\" class=\"anchor\" href=\"#appropriate-collection-and-purpose-of-use\"><i class=\"linkify icon\"></i></a>Appropriate Collection and Purpose of Use</h2><p>We will collect personal information through appropriate methods for the following purposes:</p>\n<ul>\n<li>to provide our services;</li>\n<li>to provide notices and send questionnaires regarding our services that are currently provided or under consideration for future releases;</li>\n<li>to help improve the services and develop new services;</li>\n<li>to make contact with you;</li>\n<li>to verify your identity and otherwise respond to inquiries;</li>\n<li>to select in drawings and deliver prizes or products;</li>\n<li>to transmit advertisement information sponsored by us or any other third party;</li>\n<li>to create statistical data regarding the use of our services;</li>\n<li>to prevent any use in breach of the Terms of Service.</li>\n</ul>\n<h2><a name=\"appropriate-control-and-protection\" class=\"anchor\" href=\"#appropriate-control-and-protection\"><i class=\"linkify icon\"></i></a>Appropriate Control and Protection</h2><p>Personal information will be strictly controlled, and appropriate measures will be taken to prevent and cure unauthorized access, loss, destruction, falsification, and leakage of personal information.</p>\n<h2><a name=\"entrustment\" class=\"anchor\" href=\"#entrustment\"><i class=\"linkify icon\"></i></a>Entrustment</h2><p>We may entrust the whole or part of the personal information it collected to outsourcing entities to the extent required to achieve the purpose of use. In such case, we will fully examine the eligibility of such outsourcing entities, state confidentiality provisions in the contracts with them, and provide any necessary and appropriate supervision to them.</p>\n<h2><a name=\"provision-to-third-party\" class=\"anchor\" href=\"#provision-to-third-party\"><i class=\"linkify icon\"></i></a>Provision to Third Party</h2><p>We will not disclose or provide any data to any third party except when a prior consent is given by you;\nit is based on laws and ordinances;\nany breach of the Terms of Service for Inkdrop or other our services should occur, and there are sufficient reasons for determining the disclosure of the personal information is necessary to protect our rights, property and services;\nit is necessary for the protection of the life, body or property of an individual and is difficult to obtain your consent;\nit is specially necessary for improving public health or promoting the sound growth of children and is difficult to obtain your consent;\nit is necessary for cooperating with a national or local authority or an entity entrusted by it in executing the affairs prescribed by laws and ordinances, and obtaining your consent is likely to impede the execution of such affairs; or\nany succession of our business including the provision of personal information is made due to any merger, company split, transfer of operations or other reasons.</p>\n<h2><a name=\"joint-use\" class=\"anchor\" href=\"#joint-use\"><i class=\"linkify icon\"></i></a>Joint Use</h2><p>We may jointly use any personal information with our business cooperators in providing our services.\nIn such case, we will, in advance, publish the items of the personal information used jointly, the scope of the joint users, the purpose for which the personal information is used jointly and the name of person responsible for the management of the personal information is used jointly.</p>\n<h2><a name=\"use-by-minors-under-18\" class=\"anchor\" href=\"#use-by-minors-under-18\"><i class=\"linkify icon\"></i></a>Use by minors under 18</h2><p>If you are under 18, please use our service and input the personal information upon the consent of your custodian.</p>\n<h2><a name=\"procedures-for-disclosure\" class=\"anchor\" href=\"#procedures-for-disclosure\"><i class=\"linkify icon\"></i></a>Procedures for Disclosure</h2><p>We will respond without delay to your request for notice of the purpose of use, disclosure, correction, addition or deletion of contents, discontinuance of the use, erasure, and discontinuance of provision to a third party (hereinafter referred to as “Disclosure, etc.”) of (your) personal information.\nProvided, however, you are required to take the procedures prescribed by us in requesting Disclosure, etc.</p>\n<h2><a name=\"disclaimer\" class=\"anchor\" href=\"#disclaimer\"><i class=\"linkify icon\"></i></a>Disclaimer</h2><p>We shall assume no liability whatsoever if you reveal the personal information to third parties using any feature of our services or any other means and you become identifiable by such information you disclosed on our services.</p>\n<h2><a name=\"creation-and-use-of-statistical-data\" class=\"anchor\" href=\"#creation-and-use-of-statistical-data\"><i class=\"linkify icon\"></i></a>Creation and Use of Statistical Data</h2><p>We may create, based on the personal information collected, statistical data processed so that no individual is identifiable.\nWith regard to such creation and use of the personally unidentifiable statistical data, we may conduct without any restriction.</p>\n<h2><a name=\"collection-and-use-of-attribute-information-activity-history\" class=\"anchor\" href=\"#collection-and-use-of-attribute-information-activity-history\"><i class=\"linkify icon\"></i></a>Collection and Use of Attribute Information/Activity History</h2><p>We may collect and/or use the following personally unidentifiable information to personalize our services or contents of advertisements and may provide such information to sponsors, information providers, or service providers: cookies, logs, activity histories for accessed URLs, contents or reference orders, individual terminal identification information and other device information, and attribute information on gender, occupation, or age.</p>\n<h2><a name=\"amendment\" class=\"anchor\" href=\"#amendment\"><i class=\"linkify icon\"></i></a>Amendment</h2><p>We reserve the right to make amendments to this Privacy Policy.</p>\n";

/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"what-platforms-does-inkdrop-run-on-\" class=\"anchor\" href=\"#what-platforms-does-inkdrop-run-on-\"><i class=\"linkify icon\"></i></a>What platforms does Inkdrop run on?</h2><p>Prebuilt versions of Inkdrop are available for OS X 10.8 or later, Windows 7 or later, and Ubuntu Linux.</p>\n<h2><a name=\"can-i-sync-my-data-with-dropbox-googledrive-etc-\" class=\"anchor\" href=\"#can-i-sync-my-data-with-dropbox-googledrive-etc-\"><i class=\"linkify icon\"></i></a>Can I sync my data with DropBox, GoogleDrive, etc?</h2><p>No. You can only sync your data with a server compatible with CouchDB.</p>\n<h2><a name=\"i-don-t-trust-anyone-with-my-note-can-i-run-inkdrop-server-myself-\" class=\"anchor\" href=\"#i-don-t-trust-anyone-with-my-note-can-i-run-inkdrop-server-myself-\"><i class=\"linkify icon\"></i></a>I don’t trust anyone with my note. Can I run Inkdrop server myself?</h2><p>Yes!\nSee the <a href=\"/manual/synchronizing-in-the-cloud\">documentation</a> for full instructions on setting up the sync server on your local machine.</p>\n<h2><a name=\"how-can-i-delete-my-account-\" class=\"anchor\" href=\"#how-can-i-delete-my-account-\"><i class=\"linkify icon\"></i></a>How can I delete my account?</h2><p>You can delete your account from <a href=\"https://www.inkdrop.info/account/delete\">here</a>.\nYou data will be deleted immediately.</p>\n";

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"compatible-with-couchdb\" class=\"anchor\" href=\"#compatible-with-couchdb\"><i class=\"linkify icon\"></i></a>Compatible with CouchDB</h2><p>Inkdrop provides API to &quot;hack&quot; your note data from remote computer.\nIt&#39;s called <strong>Data Access API</strong> which is compatible with <a href=\"http://couchdb.apache.org/\">CouchDB</a>.\nThat means, there&#39;re already tons of libraries for CouchDB and you can choose from them in your favorite language.\nWe&#39;re using <a href=\"https://github.com/pouchdb/pouchdb\">PouchDB</a> for building the desktop app.</p>\n<p>By using this API, you can make your own notebook client app with sync feature or useful utility.</p>\n<h2><a name=\"creating-api-keys\" class=\"anchor\" href=\"#creating-api-keys\"><i class=\"linkify icon\"></i></a>Creating API Keys</h2><p>The API key is necessary for both publishing your plugins and accessing your data stored in the cloud.\nTo create new API key, go to <a href=\"https://www.inkdrop.info/account/api-keys\">API Keys</a> page and push &quot;Create new API key&quot; button.\nGenerated API key is not stored in the database, so be carefully and don&#39;t lose it.</p>\n<h2><a name=\"getting-your-database-url\" class=\"anchor\" href=\"#getting-your-database-url\"><i class=\"linkify icon\"></i></a>Getting your database URL</h2><p>By default, Inkdrop creates a separate database for storing your data in the cloud. It has a URL for each databases.\nSo you already have a URL to your database after signing up to Inkdrop.</p>\n<p>Your database URL can be checked at <code>Preferences -&gt; Sync</code>.\nYou should see your specific URL on the bottom of pane like this:</p>\n<p><img class=\"ui image\" src=\"/manual/2-1-data-access-api_url.png\" title=\"\" alt=\"Sync Preferences\" /></p>\n<p>The URL is something like this: <code>https://black.inkdrop.info/user-&lt;user_id&gt;</code></p>\n<h2><a name=\"accessing-your-database\" class=\"anchor\" href=\"#accessing-your-database\"><i class=\"linkify icon\"></i></a>Accessing your database</h2><p>Now you can send a request to the URL via HTTPS, but you will get an error as following:</p>\n<pre><code class=\"lang-bash\">$ curl https://black.inkdrop.info/user-&lt;user_id&gt;/\n{<span class=\"hljs-string\">\"error\"</span>:<span class=\"hljs-string\">\"unauthorized\"</span>,<span class=\"hljs-string\">\"reason\"</span>:<span class=\"hljs-string\">\"_reader access is required for this request\"</span>}\n</code></pre>\n<p>Because it&#39;s protected and you can&#39;t access without any credentials.\nYou need to append your API keys as the credentials with HTTP Basic authentication in the request:</p>\n<pre><code>$ curl https://&lt;access_key_id&gt;:&lt;secret_access_key&gt;@black.inkdrop.info/&lt;database_name&gt;/\n</code></pre><p>and you will get a response represented with JSON like following:</p>\n<pre><code class=\"lang-JSON\">{<span class=\"hljs-attr\">\"update_seq\"</span>:<span class=\"hljs-string\">\"2856-g1AAAAD5eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTUy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____f1YSkC0H0qgI12iJT1-SA5BMqodp_YSq1RSf1jwWIMnQAKSAuveDtDNHoDnZiLD-AxD9EOsPZAEAbTlR6A\"</span>,<span class=\"hljs-attr\">\"db_name\"</span>:<span class=\"hljs-string\">\"user-***\"</span>,<span class=\"hljs-attr\">\"sizes\"</span>:{<span class=\"hljs-attr\">\"file\"</span>:<span class=\"hljs-number\">2171762</span>,<span class=\"hljs-attr\">\"external\"</span>:<span class=\"hljs-number\">361988</span>,<span class=\"hljs-attr\">\"active\"</span>:<span class=\"hljs-number\">705412</span>},<span class=\"hljs-attr\">\"purge_seq\"</span>:<span class=\"hljs-number\">0</span>,<span class=\"hljs-attr\">\"other\"</span>:{<span class=\"hljs-attr\">\"data_size\"</span>:<span class=\"hljs-number\">361988</span>},<span class=\"hljs-attr\">\"doc_del_count\"</span>:<span class=\"hljs-number\">94</span>,<span class=\"hljs-attr\">\"doc_count\"</span>:<span class=\"hljs-number\">218</span>,<span class=\"hljs-attr\">\"disk_size\"</span>:<span class=\"hljs-number\">2171762</span>,<span class=\"hljs-attr\">\"disk_format_version\"</span>:<span class=\"hljs-number\">6</span>,<span class=\"hljs-attr\">\"data_size\"</span>:<span class=\"hljs-number\">705412</span>,<span class=\"hljs-attr\">\"compact_running\"</span>:<span class=\"hljs-literal\">false</span>,<span class=\"hljs-attr\">\"instance_start_time\"</span>:<span class=\"hljs-string\">\"0\"</span>}\n</code></pre>\n<p>Now you got access to your database.\nSee <a href=\"http://docs.couchdb.org/en/1.6.1/api/\">CouchDB documentation</a> for detailed API specifications.</p>\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = "<p>There are two databases in local and on remote and they sync via HTTP(S).\nThe remote database provides API compatible with CouchDB. You can access your data in the remote database directly with the API as described in the section of <a href=\"/manual/accessing-data-in-the-cloud\">Accessing Data in the Cloud</a>.\nThe Inkdrop client app is built on top of a <a href=\"https://pouchdb.com/\">PouchDB</a> for storing data in local and syncing with the remote database. For many parts of the application, the database is the source of truth. Data is written to the local database first, then synced via the API, and changes to the database trigger Actions, Stores and components to refresh their contents. The illustration below shows this flow of data:</p>\n<p><img class=\"ui image\" src=\"/manual/2-5-accessing-the-database_data-flow.png\" title=\"\" alt=\"Data flow\" /></p>\n<h2><a name=\"accessing-the-pouchdb-instance\" class=\"anchor\" href=\"#accessing-the-pouchdb-instance\"><i class=\"linkify icon\"></i></a>Accessing the PouchDB instance</h2><p>Inkdrop is built with <a href=\"http://electron.atom.io/\">Electron</a>, an instance of the PouchDB is living inside <a href=\"https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md#main-process\">Main Process</a>. Electron&#39;s <a href=\"https://github.com/electron/electron/blob/master/docs/api/remote.md\">remote module</a> provides \n a simple way to do inter-process communication (IPC) between the renderer process (web page) and the main process. Using this IPC, you can access the PocuDB like this:</p>\n<pre><code class=\"lang-js\"><span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getDatabaseInfo</span> (<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">const</span> { app } = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'electron'</span>).remote;\n  <span class=\"hljs-keyword\">const</span> info = <span class=\"hljs-keyword\">await</span> app.db.local.info();\n  <span class=\"hljs-built_in\">console</span>.log(info.db_name);\n}\n</code></pre>\n<p>In this code, <code>app.db.local</code> is the instance of PouchDB.</p>\n<div class=\"ui info message\">\n<strong>NOTE</strong>: Returned objects from the database represent <a href=\"https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects\">Remote Objects</a>.\n</div>\n\n";

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = "<h2><a name=\"inkdrop-has-three-parts\" class=\"anchor\" href=\"#inkdrop-has-three-parts\"><i class=\"linkify icon\"></i></a>Inkdrop has three parts</h2><p><img class=\"ui image\" src=\"/manual/02-basic-usage_screen.png\" title=\"\" alt=\"Layout\" /></p>\n<ul>\n<li><strong>Sidebar</strong> (on the left): it lists notebooks and tags here. Notebooks are like folders you can create recursively. Tags are like labels which can link notes with related topic.</li>\n<li><strong>Note list</strong> (in the middle): all your notes live here, ordered by modification date by default. You can search notes with keywords from a search bar on the top of it.</li>\n<li><strong>Editor</strong> (on the right): this is where your magic happens; you&#39;re looking at it. 😄</li>\n</ul>\n<h2><a name=\"creating-new-note-and-notebook\" class=\"anchor\" href=\"#creating-new-note-and-notebook\"><i class=\"linkify icon\"></i></a>Creating new note and notebook</h2><p>To create new note, you can either push a button on the right top of the note list or input keybind <code>Cmd+N</code> / <code>Ctrl+N</code>.</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_addnote.png\" title=\"\" alt=\"AddNote\" /></p>\n<p>To create new notebook, click a menu item labeled &#39;New notebook..&#39; in the middle of sidebar:</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_addbook.png\" title=\"\" alt=\"AddBook\" /></p>\n<p>To create a sub notebook, right click on the notebook item which would be parent and choose &quot;New Sub Notebook..&quot; menu.</p>\n<h2><a name=\"settings-and-preferences\" class=\"anchor\" href=\"#settings-and-preferences\"><i class=\"linkify icon\"></i></a>Settings and Preferences</h2><p>Inkdrop has a number of settings and preferences you can modify in the Preferences View.</p>\n<p>To open the Settings View, you can:</p>\n<ul>\n<li>on macOS:<ul>\n<li>Use the <em>Inkdrop &gt; Preferences</em> menu item in the menu bar</li>\n<li>Use the <code>Cmd+,</code> keybinding</li>\n</ul>\n</li>\n<li>on Windows &amp; Linux:<ul>\n<li>Use the <em>File &gt; Settings</em> menu item in the menu bar</li>\n<li>Use the <code>Ctrl+,</code> keybinding</li>\n</ul>\n</li>\n</ul>\n<p>And you should see the window like this:</p>\n<p><img class=\"ui image\" src=\"/manual/02-basic-usage_preferences.png\" title=\"\" alt=\"Preferences\" /></p>\n";

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop&#39;s interface is rendered using HTML, and it&#39;s styled via Less which is a superset of CSS. Don&#39;t worry if you haven&#39;t heard of Less before; it&#39;s just like CSS, but with a few handy extensions.</p>\n<p>Inkdrop supports three types of themes: UI, Syntax and Preview. UI themes style elements such as the side view, the note list, drop-down lists, and the tool bar. Syntax themes style the note, gutter and other elements inside the editor view. Preview themes style the header, texts, code blocks and other elements inside the preview view.</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme.png\" title=\"\" alt=\"Theme Types\" /></p>\n<p>Themes can be changed from Preferences which you can open by selecting the <em>Inkdrop &gt; Preferences</em> menu, and clicking the <em>Themes</em> tab on the left hand navigation.\nThemes can be also installed with <a href=\"/manual/extend-inkdrop-with-plugins\">Inkdrop Plugin Manager</a>.</p>\n<h2><a name=\"getting-started\" class=\"anchor\" href=\"#getting-started\"><i class=\"linkify icon\"></i></a>Getting Started</h2><p>Themes are pretty straightforward but it&#39;s still helpful to be familiar with a few things before starting:</p>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables\">CSS Variables</a> are entities defined by CSS authors which contain specific values to be reused throughout a document.</li>\n<li>Less is a superset of CSS, but it has some really handy features like variables. If you aren&#39;t familiar with its syntax, take a few minutes to <a href=\"https://speakerdeck.com/danmatthews/less-css\">familiarize yourself</a>.</li>\n<li>You may also want to review the concept of a <code>package.json</code> (as covered in Inkdrop <code>package.json</code>). This file is used to help distribute your theme to Inkdrop users.</li>\n<li>Your theme&#39;s <code>package.json</code> must contain a <code>theme</code> key with a value of <code>ui</code>, <code>syntax</code> or <code>preview</code> for Inkdrop to recognize and load it as a theme.</li>\n<li>You can find existing themes to install or fork in the <a href=\"https://www.inkdrop.info/themes\">Inkdrop themes registry</a>.</li>\n</ul>\n<h2><a name=\"creating-a-syntax-theme\" class=\"anchor\" href=\"#creating-a-syntax-theme\"><i class=\"linkify icon\"></i></a>Creating a Syntax Theme</h2><div class=\"ui message info\">\n  <strong>Tip:</strong> Syntax themes should end with <code>-syntax</code>, UI themes should end with <code>-ui</code> and Preview themes should end with <code>-preview</code>.\n</div>\n\n<p>Let&#39;s create your first theme which is called <code>motif-syntax</code>.\nTo create a syntax theme, do the following:</p>\n<ol>\n<li>fork the <a href=\"https://github.com/inkdropapp/inkdrop-default-light-syntax-theme\">Inkdrop&#39;s sample repository on GitHub</a></li>\n<li>Clone the forked repository to the directory named <code>motif-syntax</code> in the local filesystem</li>\n<li>Open a terminal in the forked theme&#39;s directory</li>\n<li>Let Inkdrop run in <strong>Development Mode</strong> by selecting the <em>Inkdrop &gt; Preferences</em> menu, clicking the <em>General</em> tab on the left hand navigation, and check the &quot;<em>Development Mode</em>&quot;, then reload the app by pressing <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Change the name of the theme in the theme&#39;s <code>package.json</code> file</li>\n<li>Run <code>ipm link --dev</code> to symlink your repository to <code>~/Library/Application Support/inkdrop/dev/packages</code></li>\n<li>Reload Inkdrop using <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Enable the theme via the &quot;<em>Syntax Theme</em>&quot; drop-down in the &quot;Themes&quot; tab of the Preferences</li>\n</ol>\n<p>Now you are ready to make changes!</p>\n<p>Open up <code>styles/colors.less</code> to change the various color variables which have already been defined. For example, turn <code>@base00</code> into <code>#f4c2c1</code>.</p>\n<p>Then open <code>styles/default.less</code> and modify the various selectors that have already been defined. These selectors style different parts of code in the editor such as comments, strings and the line numbers in the gutter.\nYou may notice that the editor is built based on <a href=\"https://codemirror.net/\">CodeMirror</a>, you can also import various existing theme built for CodeMirror.</p>\n<p>After making changes, reload the app to reflected changes.</p>\n<div class=\"ui notice message\">\n<strong>Note</strong>: It&#39;s advised to not specify a <code>font-family</code> in your syntax theme because it will override the Font Family field in Inkdrop&#39;s settings. If you still like to recommend a font that goes well with your theme, we suggest you do so in your README.\n</div>\n\n<h2><a name=\"creating-a-ui-theme\" class=\"anchor\" href=\"#creating-a-ui-theme\"><i class=\"linkify icon\"></i></a>Creating a UI Theme</h2><p>To create a UI theme, do the following:</p>\n<ol>\n<li>fork the <a href=\"https://github.com/inkdropapp/inkdrop-ui-theme-template\">Inkdrop&#39;s sample repository on GitHub</a></li>\n<li>Clone the forked repository to the local filesystem</li>\n<li>Open a terminal in the forked theme&#39;s directory</li>\n<li>Let Inkdrop run in <strong>Development Mode</strong> by selecting the <em>Inkdrop &gt; Preferences</em> menu, clicking the <em>General</em> tab on the left hand navigation, and check the &quot;<em>Development Mode</em>&quot;, then reload the app by pressing <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Change the name of the theme in the theme&#39;s <code>package.json</code> file</li>\n<li>Run <code>npm install</code> to install dependencies</li>\n<li>Run <code>gulp build</code> to build theme files</li>\n<li>Run <code>ipm link --dev</code> to symlink your repository to <code>~/Library/Application Support/inkdrop/dev/packages</code></li>\n<li>Reload Inkdrop using <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Enable the theme via the &quot;<em>UI Theme</em>&quot; drop-down in the &quot;Themes&quot; tab of the Preferences</li>\n</ol>\n<p>Now you are ready to make changes!</p>\n<p>You may notice that the styling UI is based on <a href=\"http://semantic-ui.com/\">Semantic UI</a>. It&#39;s mostly common in customizing the UI elements with it, so <a href=\"http://learnsemantic.com/\">their documentation</a> is very helpful to learn.</p>\n<h2><a name=\"theme-variables\" class=\"anchor\" href=\"#theme-variables\"><i class=\"linkify icon\"></i></a>Theme Variables</h2><p>Inkdrop&#39;s UI elements are styled with <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables\">CSS variables</a>. You may not be familiar with it because it&#39;s new technology. Don&#39;t worry, it&#39;s mostly same as variables in LESS. The CSS Variables let Inkdrop give meaningful names for styles of the UI components, for example, <code>--note-list-bar-background</code> variable styles the background of the note list bar.\nInkdrop&#39;s CSS Variables are defined in <code>src/definitions/globals/variables.less</code>, and you can change them by editing <code>src/themes/default/globals/site.variables</code>.</p>\n<h2><a name=\"creating-a-preview-theme\" class=\"anchor\" href=\"#creating-a-preview-theme\"><i class=\"linkify icon\"></i></a>Creating a Preview Theme</h2><p>Let&#39;s create your first theme which is called <code>motif-preview</code>.\nTo create a preview theme, do the following:</p>\n<ol>\n<li>fork the <a href=\"https://github.com/inkdropapp/inkdrop-github-preview-theme\">Inkdrop&#39;s sample repository on GitHub</a></li>\n<li>Clone the forked repository to the directory named <code>motif-preview</code> in the local filesystem</li>\n<li>Open a terminal in the forked theme&#39;s directory</li>\n<li>Let Inkdrop run in <strong>Development Mode</strong> by selecting the <em>Inkdrop &gt; Preferences</em> menu, clicking the <em>General</em> tab on the left hand navigation, and check the &quot;<em>Development Mode</em>&quot;, then reload the app by pressing <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Change the name of the theme in the theme&#39;s <code>package.json</code> file</li>\n<li>Run <code>ipm link --dev</code> to symlink your repository to <code>~/Library/Application Support/inkdrop/dev/packages</code></li>\n<li>Reload Inkdrop using <code>Alt+Cmd+Ctrl+L</code> / <code>Alt+Ctrl+L</code></li>\n<li>Enable the theme via the &quot;<em>Preview Theme</em>&quot; drop-down in the &quot;Themes&quot; tab of the Preferences</li>\n</ol>\n<p>Now you are ready to make changes!</p>\n<p>Highlighting code blocks is built with <a href=\"https://highlightjs.org/\">highlight.js</a>, and CSS selectors for styling code blocks are compatible with it.</p>\n<p>After making changes, reload the app to reflected changes.</p>\n<h2><a name=\"development-workflow\" class=\"anchor\" href=\"#development-workflow\"><i class=\"linkify icon\"></i></a>Development workflow</h2><p>There are a few tools to help make theme development faster and easier.</p>\n<h3><a name=\"developer-tools\" class=\"anchor\" href=\"#developer-tools\"><i class=\"linkify icon\"></i></a>Developer Tools</h3><p>Inkdrop is based on the Chrome browser, and supports Chrome&#39;s Developer Tools.\nIn Development Mode, <em>Inspect Element</em> menu is available in the context menu. You can right-click anywhere to inspect the HTML element.</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme-inspect-element.png\" title=\"\" alt=\"Inspect Element\" /></p>\n<p>You can check how it&#39;s styled with themes in the Developer Tools like this:</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme-devtools.png\" title=\"\" alt=\"DevTools\" /></p>\n<p>Check out Google&#39;s <a href=\"https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/?utm_source=dcc&amp;utm_medium=redirect&amp;utm_campaign=2016q3\">extensive tutorial</a> for a short introduction.</p>\n<h2><a name=\"publish-your-theme\" class=\"anchor\" href=\"#publish-your-theme\"><i class=\"linkify icon\"></i></a>Publish your theme</h2><p>Once you&#39;re happy with your theme and would like to share it with other Inkdrop users, it&#39;s time to publish it. 🎉</p>\n<p>Follow the steps in the <a href=\"/manual/plugin-word-count#publishing\">Publishing</a> section of the Word Count example. Publishing a theme works exactly the same.</p>\n";

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop&#39;s text editor is built on top of <a href=\"https://codemirror.net/\">CodeMirror</a> which is specialized for editing code, and comes with a number of <a href=\"https://codemirror.net/mode/index.html\">language modes</a> and <a href=\"https://codemirror.net/doc/manual.html#addons\">addons</a> that implement more advanced editing functionality.</p>\n<p>You can access the instance of CodeMirror like this:</p>\n<pre><code class=\"lang-js\">inkdrop.getActiveEditor().codeMirror\n</code></pre>\n";

/***/ },
/* 56 */
/***/ function(module, exports) {

  module.exports = "<p>Plugins add new functionality or provide new look to Inkdrop. You can activate or deactivate them at any time.\nGo to <code>Preferences &gt; Plugins</code> to see a list of what’s available.\nTo find new plugins to install, please access to <a href=\"https://www.inkdrop.info/plugins\">Inkdrop plugin registry</a>.</p>\n<p>Developers can clone or download additional Inkdrop plugins via <a href=\"https://github.com/inkdropapp/\">GitHub</a>. Installation instructions are here. Many of these are community-contributed, and the selection will continue to grow over time.</p>\n<p>There are three types of the plugin:</p>\n<ul>\n<li><strong>General plugin</strong> - Plugin that adds new functionality</li>\n<li><strong>UI Theme</strong> - Theme for Inkdrop UI</li>\n<li><strong>Preview Theme</strong> - Theme for Markdown preview</li>\n</ul>\n<h2><a name=\"using-ipm-inkdrop-plugin-manager-\" class=\"anchor\" href=\"#using-ipm-inkdrop-plugin-manager-\"><i class=\"linkify icon\"></i></a>Using ipm (Inkdrop Plugin Manager)</h2><div class=\"ui info message\">\n  Currently Inkdrop doesn&#39;t provide GUI for installing/uninstalling plugins. It&#39;s planned to support in the future.\n</div>\n\n<div class=\"ui message\">\n  ipm is a fork of <a href=\"https://github.com/atom/apm\">apm (atom package manager)</a>, some output messages may include Atom-related though, please ignore them. 😉\n</div>\n\n<p><strong>ipm</strong> is a command-line tool to manage plugins for Inkdrop.</p>\n<h3><a name=\"macos\" class=\"anchor\" href=\"#macos\"><i class=\"linkify icon\"></i></a>macOS</h3><p>When you first open Inkdrop, it will try to install the <code>ipm</code> command for use in the terminal.\nIf the <code>ipm</code> command has been installed, you&#39;ll see something like this:</p>\n<pre><code class=\"lang-bash\">$ <span class=\"hljs-built_in\">which</span> ipm\n/usr/<span class=\"hljs-built_in\">local</span>/bin/ipm\n</code></pre>\n<p>You can also manually install <code>ipm</code> from <code>Inkdrop -&gt; Install Shell Commands</code> from the menubar.</p>\n<h3><a name=\"windows\" class=\"anchor\" href=\"#windows\"><i class=\"linkify icon\"></i></a>Windows</h3><p>The setup program will install <code>ipm</code>, and add it to your <code>PATH</code>.</p>\n<h3><a name=\"linux\" class=\"anchor\" href=\"#linux\"><i class=\"linkify icon\"></i></a>Linux</h3><p><code>ipm</code> is not installed automatically. The command is available in the path of <code>&lt;path-to-inkdrop&gt;/resources/app/ipm/bin/ipm</code>.</p>\n<h2><a name=\"finding-new-plugins\" class=\"anchor\" href=\"#finding-new-plugins\"><i class=\"linkify icon\"></i></a>Finding new plugins</h2><p>You can also use <code>ipm</code> to find new plugins to install. If you run <code>ipm search</code>, you can search the plugin registry for a search term.</p>\n<pre><code class=\"lang-bash\">$ ipm search emoji\nSearch Results For <span class=\"hljs-string\">'emoji'</span> (1)\n└── markdown-emoji Add emoji syntax support to Inkdrop markdown editor (0 downloads, 0 stars)\n\nUse `ipm install` to install them or visit https://www.inkdrop.info/plugins to <span class=\"hljs-built_in\">read</span> more about them.\n</code></pre>\n<h2><a name=\"installing-plugins\" class=\"anchor\" href=\"#installing-plugins\"><i class=\"linkify icon\"></i></a>Installing plugins</h2><p>Once you found new plugins to install, you can install them by using the <code>ipm install</code> command:</p>\n<ul>\n<li><code>ipm install &lt;package_name&gt;</code> to install the latest version.</li>\n<li><code>ipm install &lt;package_name&gt;@&lt;package_version&gt;</code> to install a specific version.</li>\n</ul>\n<p>For example <code>ipm install markdown-emoji@0.1.0</code> installs the 0.1.0 release of the <a href=\"https://www.inkdrop.info/plugins/markdown-emoji\">markdown-emoji</a> package.</p>\n<h2><a name=\"activating-plugins\" class=\"anchor\" href=\"#activating-plugins\"><i class=\"linkify icon\"></i></a>Activating plugins</h2><p>Go to <code>Preferences &gt; Plugins</code>, you can activate/deactivate plugins by toggling a switch on the left of the plugin name here.</p>\n<p><img class=\"ui image\" src=\"/manual/06-plugins-preferences_activating.png\" title=\"\" alt=\"Activating Plugins\" /></p>\n<h2><a name=\"uninstalling-plugins\" class=\"anchor\" href=\"#uninstalling-plugins\"><i class=\"linkify icon\"></i></a>Uninstalling plugins</h2><p>You can also uninstall the plugin by running below command:</p>\n<pre><code>$ ipm uninstall &lt;package_name&gt;\n</code></pre>";

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop uses <a href=\"http://alt.js.org/\">Alt</a>, a slim implementation of Facebook&#39;s <a href=\"https://facebook.github.io/flux/\">Flux Application Architecture</a> to coordinate the movement of data through the application. Flux is extremely well suited for applications that support third-party extension because it emphasizes loose coupling and well defined interfaces between components. It enforces:</p>\n<ul>\n<li>Uni-directional data flow</li>\n<li>Loose coupling between components</li>\n</ul>\n<p>For more information about the Flux pattern, check out <a href=\"https://facebook.github.io/flux/docs/overview.html#structure-and-data-flow\">this diagram</a>.</p>\n<p>You can access a global instance of Alt via <code>inkdrop.flux</code>.\nThere are several core stores in the application:</p>\n<ul>\n<li><strong><a href=\"/reference/editor-store\">EditorStore</a></strong> - Manages current editing note document.</li>\n<li><strong>NoteListBarStore</strong> - Manages states of the note list bar.</li>\n<li><strong>BookListBarStore</strong> - Manages states of the book list bar.</li>\n<li><strong>BookListStore</strong> - Manages books currently available.</li>\n<li><strong>TagListBarStore</strong> - Manages states of hte tag list bar.</li>\n<li><strong>TagListStore</strong> - Manages tags currently available.</li>\n<li><strong>SessionStore</strong> - Manages current session status of the user.</li>\n</ul>\n<h2><a name=\"actions\" class=\"anchor\" href=\"#actions\"><i class=\"linkify icon\"></i></a>Actions</h2><p>In Flux applications, views fire Actions, which anyone in the application can subscribe to. Typically, Stores listen to actions to perform business logic and trigger updates to their corresponding views. For example, when you click &quot;Create New Note&quot; button on the top right corner of the note list bar, the React component for the button fires <code>EditorActions::create</code>. The <code>EditorStore</code> listens to this action and opens a newly created note.</p>\n<p>This approach means that your plugins can fire existing Actions, like <code>EditorActions::update</code>, or observe actions to add functionality. You can also define your own actions for use within your plugin with <code>inkdrop.flux</code>.</p>\n";

/***/ },
/* 58 */
/***/ function(module, exports) {

  module.exports = "<p>Let&#39;s get started by writing a very simple plugin and looking at some of the tools needed to develop one effectively. We&#39;ll start by writing a plugin that tells you how many words are in the current editor and display it in a small modal window.</p>\n<h2><a name=\"scaffolding-your-plugin\" class=\"anchor\" href=\"#scaffolding-your-plugin\"><i class=\"linkify icon\"></i></a>Scaffolding your plugin</h2><p>You can generate code scaffolding by running following command:</p>\n<pre><code class=\"lang-bash\">$ ipm init -p wordcount\n</code></pre>\n<p>You can see that <code>ipm</code> has created about a dozen files that make up the plugin. Let&#39;s take a look at each of them to get an idea of how a plugin is structured, then we can modify them to get our word count functionality.</p>\n<p>The basic plugin layout is as follows:</p>\n<pre><code>word-counter/\n├── keymaps\n│   └── wordcount.json\n├── lib\n│   ├── wordcount-message-dialog.js\n│   └── wordcount.js\n├── menus\n│   └── wordcount.json\n├── package.json\n└── styles\n    └── wordcount.less\n</code></pre><p>Not every plugin will have (or need) all of these directories. Let&#39;s see what some of these are so we can start messing with them.</p>\n<h3><a name=\"package-json\" class=\"anchor\" href=\"#package-json\"><i class=\"linkify icon\"></i></a>package.json</h3><p>Similar to <a href=\"https://docs.npmjs.com/getting-started/what-is-npm\">Node modules</a>, Inkdrop plugins contain a <code>package.json</code> file in their top-level directory. This file contains metadata about the plugin, such as the path to its &quot;main&quot; module, library dependencies, and manifests specifying the order in which its resources should be loaded.</p>\n<p>In addition to some of the regular <a href=\"https://docs.npmjs.com/files/package.json\">Node <code>package.json</code> keys</a> available, Inkdrop <code>package.json</code> files have their own additions.</p>\n<ul>\n<li><code>main</code>: the path to the JavaScript file that&#39;s the entry point to your package. If this is missing, Inkdrop will default to looking for an <code>index.js</code> or <code>index.coffee</code>.</li>\n<li><code>styles</code>: an Array of Strings identifying the order of the style sheets your plugin needs to load. If not specified, style sheets in the <code>styles</code> directory are added alphabetically.</li>\n<li><code>keymaps</code>: an Array of Strings identifying the order of the key mappings your plugin needs to load. If not specified, mappings in the <code>keymaps</code> directory are added alphabetically.</li>\n<li><code>menus</code>: an Array of Strings identifying the order of the menu mappings your plugin needs to load. If not specified, mappings in the <code>menus</code> directory are added alphabetically.</li>\n</ul>\n<p>The <code>package.json</code> in the plugin we&#39;ve just generated looks like this currently:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"wordcount\"</span>,\n  <span class=\"hljs-attr\">\"main\"</span>: <span class=\"hljs-string\">\"./lib/wordcount\"</span>,\n  <span class=\"hljs-attr\">\"version\"</span>: <span class=\"hljs-string\">\"0.0.0\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"A short description of your package\"</span>,\n  <span class=\"hljs-attr\">\"keywords\"</span>: [\n  ],\n  <span class=\"hljs-attr\">\"repository\"</span>: <span class=\"hljs-string\">\"https://github.com/inkdropapp/wordcount\"</span>,\n  <span class=\"hljs-attr\">\"license\"</span>: <span class=\"hljs-string\">\"MIT\"</span>,\n  <span class=\"hljs-attr\">\"engines\"</span>: {\n    <span class=\"hljs-attr\">\"inkdrop\"</span>: <span class=\"hljs-string\">\"&gt;=0.9.0 &lt;2.0.0\"</span>\n  },\n  <span class=\"hljs-attr\">\"dependencies\"</span>: {\n  }\n}\n</code></pre>\n<p>One of the first things you should do is ensure that this information is filled out. The name, description, repository URL the project will be at, and the license can all be filled out immediately. The other information we&#39;ll get into more detail on as we go.</p>\n<div class=\"ui warning message\">\n<strong>Warning</strong>: Do not forget to update the repository URL. The one generated for you is invalid by design and will prevent you from publishing your package until updated.\n</div>\n\n<h3><a name=\"source-code\" class=\"anchor\" href=\"#source-code\"><i class=\"linkify icon\"></i></a>Source Code</h3><p>If you want to extend Inkdrop&#39;s behavior, your plugin should contain a single top-level module, which you export from whichever file is indicated by the <code>main</code> key in your <code>package.json</code> file. In the plugin we just generated, the main package file is <code>lib/wordcount.js</code>. The remainder of your code should be placed in the lib directory, and required from your top-level file. If the <code>main</code> key is not in your <code>package.json</code> file, it will look for <code>index.coffee</code> or <code>index.js</code> as the main entry point.</p>\n<p>Your plugin&#39;s top-level module is a singleton object that manages the lifecycle of your extensions to Inkdrop. Even if your plugin creates ten different components and appends them to different parts of the DOM, it&#39;s all managed from your top-level object.</p>\n<p>Your plugin&#39;s top-level module can implement the following basic methods:</p>\n<ul>\n<li><code>activate()</code>: This <strong>optional</strong> method is called when your plugin is activated. Use this to do initialization work when your plugin is started (like setting up React Components or binding events).</li>\n<li><code>deactivate()</code>: This <strong>optional</strong> method is called when the window is shutting down. If your plugin is watching any files or holding external resources in any other way, release them here. If you&#39;re just subscribing to things on window, you don&#39;t need to worry because that&#39;s getting torn down anyway.</li>\n</ul>\n<h3><a name=\"style-sheets\" class=\"anchor\" href=\"#style-sheets\"><i class=\"linkify icon\"></i></a>Style Sheets</h3><p>Style sheets for your plugin should be placed in the <code>styles</code> directory. Any style sheets in this directory will be loaded and attached to the DOM when your plugin is activated. Style sheets can be written as CSS or <a href=\"http://lesscss.org/\">Less</a>, but Less is recommended.</p>\n<p>Ideally, you won&#39;t need much in the way of styling. Inkdrop&#39;s styles are based on <a href=\"http://semantic-ui.com/\">Semantic UI</a> which provides a standard set of components which define both the colors and UI elements for any plugin that fits into Inkdrop seamlessly. </p>\n<p>If you <em>do</em> need special styling, try to keep only structural styles in the plugin style sheets. If you must specify colors and sizing, these should be taken from the pre-defined CSS Variables where you can find at <a href=\"https://github.com/inkdropapp/inkdrop-ui-theme-template/blob/master/src/definitions/globals/variables.less\">variables.less</a> like this:</p>\n<pre><code class=\"lang-less\"><span class=\"hljs-selector-class\">.special-button</span><span class=\"hljs-selector-class\">.highlighted</span> {\n  <span class=\"hljs-attribute\">background-color</span>: var(--highlight-background);\n}\n</code></pre>\n<p>An optional <code>styles</code> array in your <code>package.json</code> can list the style sheets by name to specify a loading order; otherwise, style sheets are loaded alphabetically.</p>\n<h3><a name=\"keymaps\" class=\"anchor\" href=\"#keymaps\"><i class=\"linkify icon\"></i></a>Keymaps</h3><p>You can provide key bindings for commonly used actions for your extension, especially if you&#39;re also adding a new command. In our new plugin, we have a keymap filled in for us already in the <code>keymaps/wordcount.json</code> file:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"body\"</span>: {\n    <span class=\"hljs-attr\">\"ctrl-alt-o\"</span>: <span class=\"hljs-string\">\"wordcount:toggle\"</span>\n  }\n}\n</code></pre>\n<p>This means that if you press <code>Alt+Ctrl+O</code>, our package will run the <code>wordcount:toggle</code> command. We&#39;ll look at that code next, but if you want to change the default key mapping, you can do that in this file.</p>\n<p>Keymaps are placed in the <code>keymaps</code> subdirectory. By default, all keymaps are loaded in alphabetical order. An optional <code>keymaps</code> array in your <code>package.json</code> can specify which keymaps to load and in what order.</p>\n<p>Keybindings are executed by determining which element the keypress occurred on. In the example above, the <code>wordcount:toggle</code> command is executed when pressing <code>Alt+Ctrl+O</code> on the <code>body</code> element. This means the key combination will work anywhere in the application.</p>\n<h3><a name=\"menus\" class=\"anchor\" href=\"#menus\"><i class=\"linkify icon\"></i></a>Menus</h3><p>Menus are placed in the <code>menus</code> subdirectory. This defines menu elements like what pops up when you right click a context-menu or would go in the application menu to trigger functionality in your plugin.</p>\n<p>By default, all menus are loaded in alphabetical order. An optional <code>menus</code> array in your <code>package.json</code> can specify which menus to load and in what order.</p>\n<h3><a name=\"application-menu\" class=\"anchor\" href=\"#application-menu\"><i class=\"linkify icon\"></i></a>Application Menu</h3><p>It&#39;s recommended that you create an application menu item under the <em>Plugins</em> menu for common actions with your plugin that aren&#39;t tied to a specific element. If we look in the <code>menus/wordcount.json</code> file that was generated for us, we&#39;ll see a section that looks like this:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"menu\"</span>: [\n    {\n      <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Plugins\"</span>,\n      <span class=\"hljs-attr\">\"submenu\"</span>: [\n        {\n          <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Word Count\"</span>,\n          <span class=\"hljs-attr\">\"submenu\"</span>: [\n            {\n              <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Toggle\"</span>,\n              <span class=\"hljs-attr\">\"command\"</span>: <span class=\"hljs-string\">\"wordcount:toggle\"</span>\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</code></pre>\n<p>This section puts a &quot;Toggle&quot; menu item under a menu group named &quot;Your Name Word Count&quot; in the &quot;Plugins&quot; menu.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-application-menu.png\" title=\"\" alt=\"Application Menu\" /></p>\n<p>When you select that menu item, it will run the <code>wordcount:toggle</code> command, which we&#39;ll look at in a bit.</p>\n<p>The menu templates you specify are merged with all other templates provided by other plugins in the order which they were loaded.</p>\n<h3><a name=\"context-menu\" class=\"anchor\" href=\"#context-menu\"><i class=\"linkify icon\"></i></a>Context Menu</h3><p>It&#39;s recommended to specify a context menu item for commands that are linked to specific parts of the interface. In our <code>menus/wordcount.json</code> file, we can see an auto-generated section that looks like this:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"context-menu\"</span>: {\n    <span class=\"hljs-attr\">\".CodeMirror\"</span>: [\n      {\n        <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"Toggle Word Count\"</span>,\n        <span class=\"hljs-attr\">\"command\"</span>: <span class=\"hljs-string\">\"empty:toggle\"</span>\n      }\n    ]\n  }\n}\n</code></pre>\n<p>This adds a &quot;Toggle Word Count&quot; menu option to the menu that pops up when you right-click in an Inkdrop text editor pane.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-context-menu.png\" title=\"\" alt=\"Context Menu\" /></p>\n<p>When you click that it will again run the <code>wordcount:toggle</code> method in your code.</p>\n<p>Context menus are created by determining which element was selected and then adding all of the menu items whose selectors match that element (in the order which they were loaded). The process is then repeated for the elements until reaching the top of the DOM tree.</p>\n<p>You can also add separators and submenus to your context menus. To add a submenu, provide a <code>submenu</code> key instead of a command. To add a separator, add an item with a single <code>type: &#39;separator&#39;</code> key/value pair. For instance, you could do something like this:</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"context-menu\"</span>: {\n    <span class=\"hljs-attr\">\"body\"</span>: [\n      {\n        <span class=\"hljs-attr\">\"label\"</span>: 'Text'\n        <span class=\"hljs-string\">\"submenu\"</span>: [\n          {<span class=\"hljs-attr\">\"label\"</span>: 'Copy Selected Text', <span class=\"hljs-attr\">\"command\"</span>: 'core:copy'}\n          {<span class=\"hljs-attr\">\"type\"</span>: 'separator'}\n          {<span class=\"hljs-attr\">\"label\"</span>: 'Selector All', <span class=\"hljs-attr\">\"command\"</span>: 'core:select-all'}\n          {<span class=\"hljs-attr\">\"type\"</span>: 'separator'}\n          {<span class=\"hljs-attr\">\"label\"</span>: 'Undo', <span class=\"hljs-attr\">\"command\"</span>: 'core:undo'}\n        ]\n      }\n    ]\n  }\n}\n</code></pre>\n<h2><a name=\"developing-our-plugin\" class=\"anchor\" href=\"#developing-our-plugin\"><i class=\"linkify icon\"></i></a>Developing Our Plugin</h2><p>Currently with the generated package we have, if we run that <code>wordcount:toggle</code> command through the menu or the command palette, we&#39;ll get a dialog that says &quot;Word Count was toggled!&quot;.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-dialog.png\" title=\"\" alt=\"Dialog\" /></p>\n<h3><a name=\"understanding-the-generated-code\" class=\"anchor\" href=\"#understanding-the-generated-code\"><i class=\"linkify icon\"></i></a>Understanding the Generated Code</h3><p>Let&#39;s take a look at the code in our <code>lib</code> directory and see what is happening.</p>\n<p>There are two files in our lib directory. One is the main file (<code>lib/wordcount.js</code>), which is pointed to in the <code>package.json</code> file as the main file to execute for this plugin. This file handles the logic of the whole plugin.</p>\n<p>The second file is a React Component class, <code>lib/wordcount-message-dialog.js</code>, which handles the UI elements of the plugin. Let&#39;s look at this file first:</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-string\">'use babel'</span>;\n\n<span class=\"hljs-keyword\">import</span> { React } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'inkdrop'</span>;\n<span class=\"hljs-keyword\">import</span> { CompositeDisposable } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'inkdrop'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">WordcountMessageDialog</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n\n  componentWillMount () {\n    <span class=\"hljs-comment\">// Events subscribed to in Inkdrop's system can be easily cleaned up with a CompositeDisposable</span>\n    <span class=\"hljs-keyword\">this</span>.subscriptions = <span class=\"hljs-keyword\">new</span> CompositeDisposable();\n\n    <span class=\"hljs-comment\">// Register command that toggles this view</span>\n    <span class=\"hljs-keyword\">this</span>.subscriptions.add(inkdrop.commands.add(<span class=\"hljs-built_in\">document</span>.body, {\n      <span class=\"hljs-string\">'wordcount:toggle'</span>: () =&gt; <span class=\"hljs-keyword\">this</span>.toggle()\n    }));\n  }\n\n  componentWillUnmount () {\n    <span class=\"hljs-keyword\">this</span>.subscriptions.dispose();\n  }\n\n  render() {\n    <span class=\"hljs-keyword\">const</span> { MessageDialog } = inkdrop.components.classes;\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">MessageDialog</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">'dialog'</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">'Word Count'</span>&gt;</span>\n        Word Count was toggled!\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">MessageDialog</span>&gt;</span></span>\n    );\n  }\n\n  toggle() {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Wordcount was toggled!'</span>);\n    <span class=\"hljs-keyword\">const</span> { dialog } = <span class=\"hljs-keyword\">this</span>.refs;\n    <span class=\"hljs-keyword\">if</span> (!dialog.isShown) {\n      dialog.showDialog();\n    } <span class=\"hljs-keyword\">else</span> {\n      dialog.dismissDialog();\n    }\n  }\n}\n</code></pre>\n<p>Inkdrop is built with <a href=\"https://facebook.github.io/react/\">React</a>, and you can make UI components with it.\nThe <code>WordcountMessageDialog</code> defines a React Component which shows a modal message dialog on toggling from the command.\nThis component implements following four methods:</p>\n<ul>\n<li><code>componentWillMount</code> - invoked once, immediately before the initial rendering occurs. See <a href=\"https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount\">here</a> for more information.</li>\n<li><code>componentWillUnmount</code> - invoked once, immediately before a component is unmounted from the DOM. See <a href=\"https://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount\">here</a> for more information.</li>\n<li><code>render</code> - invoked when React renders your component. See <a href=\"https://facebook.github.io/react/docs/tutorial.html\">here</a> for more information.</li>\n<li><code>toggle</code> - invoked when <code>wordcount:toggle</code> is dispatched.</li>\n</ul>\n<p>In the <code>componentWillMount</code> method, it creates an instance of the <code>CompositeDisposable</code> class so it can register all the commands that can be called from the plugin so other plugins could subscribe to these events.</p>\n<p>The second file we have is the main entry point to the plugin. Again, because it&#39;s referenced in the <code>package.json</code> file. Let&#39;s take a look at that file, it&#39;s pretty simple:</p>\n<pre><code class=\"lang-js\"><span class=\"hljs-string\">'use babel'</span>;\n\n<span class=\"hljs-keyword\">import</span> WordcountMessageDialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./wordcount-message-dialog'</span>;\n\n<span class=\"hljs-built_in\">module</span>.exports = {\n\n  activate() {\n    inkdrop.components.registerClass(WordcountMessageDialog);\n    inkdrop.layouts.addComponentToLayout(<span class=\"hljs-string\">'modals'</span>, <span class=\"hljs-string\">'WordcountMessageDialog'</span>);\n  },\n\n  deactivate() {\n    inkdrop.layouts.removeComponentFromLayout(<span class=\"hljs-string\">'modals'</span>, <span class=\"hljs-string\">'WordcountMessageDialog'</span>);\n    inkdrop.components.deleteClass(WordcountMessageDialog);\n  }\n\n};\n</code></pre>\n<p>In the <code>activate</code> method called on activation of the plugin, it registers the <code>WordcountMessageDialog</code> class to a Inkdrop component registry and adds it to a hidden modal collection.</p>\n<h3><a name=\"the-flow\" class=\"anchor\" href=\"#the-flow\"><i class=\"linkify icon\"></i></a>The Flow</h3><p>So, let&#39;s review the actual flow in this plugin.</p>\n<ol>\n<li>Inkdrop starts up</li>\n<li>Inkdrop starts loading plugins</li>\n<li>Inkdrop reads your <code>package.json</code></li>\n<li>Inkdrop loads keymaps, menus, styles and the main module</li>\n<li>Inkdrop finishes loading plugins</li>\n<li>Inkdrop executes the <code>activate</code> method in your main module which sets up the UI by creating the hidden modal message dialog</li>\n<li>Inkdrop executes the plugin command <code>wordcount:toggle</code> which reveals the hidden modal message dialog</li>\n<li>At some point, the user executes the <code>wordcount:toggle</code> command again</li>\n<li>Inkdrop executes the command which hides the modal message dialog</li>\n</ol>\n<h2><a name=\"counting-the-words\" class=\"anchor\" href=\"#counting-the-words\"><i class=\"linkify icon\"></i></a>Counting the Words</h2><p>So now that we understand what is happening, let&#39;s modify the code so that our little modal message dialog shows us the current word count instead of static text.</p>\n<p>We&#39;ll do this in a very simple way. When the dialog is toggled, we&#39;ll count the words right before displaying the modal. So let&#39;s do this in the <code>toggle</code> command. If we add some code to count the words and ask the React component to update itself, we&#39;ll have something like this in <code>lib/wordcount-message-dialog.js</code>:</p>\n<pre><code class=\"lang-js\">  componentWillMount () {\n    <span class=\"hljs-comment\">/* ... */</span>\n\n    <span class=\"hljs-keyword\">this</span>.setState({ words: <span class=\"hljs-number\">0</span> });\n  }\n</code></pre>\n<pre><code class=\"lang-js\">  toggle() {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'WordCount was toggled!'</span>);\n    <span class=\"hljs-keyword\">const</span> { dialog } = <span class=\"hljs-keyword\">this</span>.refs;\n    <span class=\"hljs-keyword\">if</span> (!dialog.isShown) {\n      <span class=\"hljs-keyword\">const</span> editorState = inkdrop.flux.getStore(<span class=\"hljs-string\">'editor'</span>).getState();\n      <span class=\"hljs-keyword\">const</span> words = editorState.document.body.split(<span class=\"hljs-regexp\">/\\s+/</span>).length;\n      <span class=\"hljs-keyword\">this</span>.setState({ words });\n      dialog.showDialog();\n    } <span class=\"hljs-keyword\">else</span> {\n      dialog.dismissDialog();\n    }\n  }\n</code></pre>\n<p>Let&#39;s look at the 4 lines we&#39;ve added.\nFirst we set a <code>words</code> to <code>0</code> by calling <code>setState</code> method.\nSecond we get a state of the <a href=\"/reference/editor-store\">editor store</a> by calling <code>inkdrop.flux.getStore(&#39;editor&#39;).getState()</code>.</p>\n<p>Next we get the number of words by looking into <code>editorState.document.body</code>, then splitting that text on whitespace with a regular expression and then getting the length of that array.</p>\n<p>Finally, we tell our message dialog to update the word count it displays by calling the <code>setState()</code> method on our dialog and then showing the modal again. Let&#39;s add a code to display the word count through the <code>render</code> method of our <code>lib/wordcount-message-dialog.js</code> file:</p>\n<pre><code class=\"lang-js\">  render() {\n    <span class=\"hljs-keyword\">const</span> { MessageDialog } = inkdrop.components.classes;\n    <span class=\"hljs-keyword\">return</span> (\n      <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">MessageDialog</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">'dialog'</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">'Word Count'</span>&gt;</span>\n        There are { this.state.words } words.\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">MessageDialog</span>&gt;</span></span>\n    );\n  }\n</code></pre>\n<p>Pretty simple! We take the count number that was passed in and place it into a string that we then stick into the element that our component is controlling.</p>\n<p><img class=\"ui image\" src=\"/manual/2-3-plugin-word-count-display-count.png\" title=\"\" alt=\"Word count\" /></p>\n<h2><a name=\"basic-debugging\" class=\"anchor\" href=\"#basic-debugging\"><i class=\"linkify icon\"></i></a>Basic Debugging</h2><p>You&#39;ll notice a few <code>console.log</code> statements in the code. One of the cool things about Inkdrop being built on Chromium is that you can use some of the same debugging tools available to you that you have when doing web development.</p>\n<p>To open up the Developer Console, press <code>Alt+Cmd+I</code>, or choose the menu option <em>Developer &gt; Toggle Developer Tools</em>.</p>\n<p><img class=\"ui image\" src=\"/manual/2-2-create-new-theme-devtools.png\" title=\"\" alt=\"Application Menu\" /></p>\n<p>From here you can inspect objects, run code and view console output just as though you were debugging a web site.</p>\n<h2><a name=\"publishing\" class=\"anchor\" href=\"#publishing\"><i class=\"linkify icon\"></i></a>Publishing</h2><p>Now that our simple plugin is working and tested, let&#39;s go ahead and publish it so it&#39;s available to the world.</p>\n<p>Inkdrop bundles a command line utility called <code>ipm</code> which we first used back in <a href=\"/manual/extend-inkdrop-with-plugins#using-ipm-inkdrop-plugin-manager-\">Using ipm (Inkdrop Plugin Manager)</a> to search for and install plugins via the command line. The <code>ipm</code> command can also be used to publish Inkdrop plugins to the public registry and update them.</p>\n<h3><a name=\"prepare-your-package\" class=\"anchor\" href=\"#prepare-your-package\"><i class=\"linkify icon\"></i></a>Prepare Your Package</h3><p>There are a few things you should double check before publishing:</p>\n<ul>\n<li>Your <code>package.json</code> file has <code>name</code>, <code>description</code>, and <code>repository</code> fields.</li>\n<li>Your <code>package.json</code> file has a <code>version</code> field with a value of &quot;0.0.0&quot;.</li>\n<li>Your <code>package.json</code> file has an <code>engines</code> field that contains an entry for Inkdrop such as: <code>&quot;engines&quot;: {&quot;inkdrop&quot;: &quot;&gt;=0.9.0 &lt;2.0.0&quot;}</code>.</li>\n<li>Your plugin has a <code>README.md</code> file at the root.</li>\n<li>Change the repository url in the <code>package.json</code> file to match the URL of your repository.</li>\n<li>Your plugin is in a Git repository that has been pushed to <a href=\"https://github.com/\">GitHub</a>. Follow <a href=\"http://guides.github.com/overviews/desktop\">this guide</a> if your plugin isn&#39;t already on GitHub.</li>\n</ul>\n<h3><a name=\"publish-your-package\" class=\"anchor\" href=\"#publish-your-package\"><i class=\"linkify icon\"></i></a>Publish Your Package</h3><p>Before you publish a plugin it is a good idea to check ahead of time if a plugin with the same name has already been published to the <a href=\"https://www.inkdrop.info/plugins\">Inkdrop package registry</a>.\nYou can do that by visiting <a href=\"https://www.inkdrop.info/plugin/wordcount\">https://www.inkdrop.info/plugin/wordcount</a> to see if the plugin already exists. \nIf it does, update your plugin&#39;s name to something that is available before proceeding.</p>\n<p>Now let&#39;s review what the <code>ipm publish</code> command does:</p>\n<ol>\n<li>Registers the plugin name on www.inkdrop.info if it is being published for the first time.</li>\n<li>Updates the <code>version</code> field in the <code>package.json</code> file and commits it.</li>\n<li>Creates a new <a href=\"http://git-scm.com/book/en/Git-Basics-Tagging\">Git tag</a> for the version being published.</li>\n<li>Pushes the tag and current branch up to GitHub.</li>\n<li>Updates www.inkdrop.info with the new version being published.</li>\n</ol>\n<p>Now run the following commands to publish your package:</p>\n<pre><code class=\"lang-bash\"><span class=\"hljs-built_in\">cd</span> ~/github/my-package\nipm publish minor\n</code></pre>\n<p>If this is the first package you are publishing, the <code>ipm publish</code> command may prompt you for your Inkdrop API Keys which can be created <a href=\"https://www.inkdrop.info/account/api-keys\">here</a> on the Inkdrop website. This is required to publish and you only need to enter this information the first time you publish. The credentials are stored securely in your <a href=\"https://en.wikipedia.org/wiki/Keychain_(Apple\">keychain</a>) once you login.</p>\n<p>Your package is now published and available on www.inkdrop.info. Head on over to <a href=\"https://www.inkdrop.info/plugins/wordcount\">https://www.inkdrop.info/plugins/wordcount</a> to see your plugin&#39;s page.</p>\n<p>With <code>ipm publish</code>, you can bump the version and publish by using</p>\n<pre><code>$ ipm publish &lt;version-type&gt;\n</code></pre><p>where <code>&lt;version-type&gt;</code> can be <code>major</code>, <code>minor</code> and <code>patch</code>.</p>\n<p>The <code>major</code> option to the publish command tells ipm to increment the first number of the version before publishing so the published version will be <code>1.0.0</code> and the Git tag created will be <code>v1.0.0</code>.</p>\n<p>The <code>minor</code> option to the publish command tells ipm to increment the second number of the version before publishing so the published version will be <code>0.1.0</code> and the Git tag created will be <code>v0.1.0</code>.</p>\n<p>The <code>patch</code> option to the publish command tells ipm to increment the third number of the version before publishing so the published version will be <code>0.0.1</code> and the Git tag created will be <code>v0.0.1</code>.</p>\n<p>Use <code>major</code> when you make a change that breaks backwards compatibility, like changing defaults or removing features. Use <code>minor</code> when adding new functionality or making improvements on existing code. Use <code>patch</code> when you fix a bug that was causing incorrect behaviour. Check out <a href=\"http://semver.org/\">semantic versioning</a> to learn more about best practices for versioning your plugin releases.</p>\n<p>You can also run <code>ipm help publish</code> to see all the available options and <code>ipm help</code> to see all the other available commands.</p>\n<h2><a name=\"summary\" class=\"anchor\" href=\"#summary\"><i class=\"linkify icon\"></i></a>Summary</h2><p>We&#39;ve now generated, customized and published our first plugin for Inkdrop. Congratulations! Now anyone can install our masterpiece from directly within Inkdrop as we did in <a href=\"/manual/extend-inkdrop-with-plugins\">Extend Inkdrop with Plugins</a>.</p>\n";

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = "<p>Welcome to Inkdrop! Here&#39;s how to get started.\nTo get started with Inkdrop, we&#39;ll need to get it on your system.</p>\n<h2><a name=\"creating-your-inkdrop-account\" class=\"anchor\" href=\"#creating-your-inkdrop-account\"><i class=\"linkify icon\"></i></a>Creating your Inkdrop account</h2><p>First, go to <a href=\"https://www.inkdrop.info/\">Inkdrop website</a> and sign up.\nInkdrop will prepare new database for storing your note data.\nAlso your account can be used for publishing your plugins and so on.</p>\n<h2><a name=\"downloading-the-app\" class=\"anchor\" href=\"#downloading-the-app\"><i class=\"linkify icon\"></i></a>Downloading the app</h2><p>After you set up an account and log in, you should see a download button as shown here:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_download.png\" title=\"\" alt=\"Download\" /></p>\n<p>Desktop application is ready for macOS, Windows and Linux, so choose one for your environment:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_download2.png\" title=\"\" alt=\"Download\" /></p>\n<h2><a name=\"installing-inkdrop-on-macos\" class=\"anchor\" href=\"#installing-inkdrop-on-macos\"><i class=\"linkify icon\"></i></a>Installing Inkdrop on macOS</h2><p>Inkdrop follows the standard Mac zip installation process. You can download the <code>Inkdrop-x.y.z-Mac.zip</code> file from the Inkdrop website. Once you have that file, you can click on it to extract the application and then drag the new Inkdrop application into your &quot;Applications&quot; folder.</p>\n<h2><a name=\"installing-inkdrop-on-windows\" class=\"anchor\" href=\"#installing-inkdrop-on-windows\"><i class=\"linkify icon\"></i></a>Installing Inkdrop on Windows</h2><p>Inkdrop is both available with a Windows installer and zip archive. The installer is recommended because it can provide auto-update features which automatically update to the latest version of the Inkdrop app.</p>\n<h2><a name=\"installing-inkdrop-on-linux\" class=\"anchor\" href=\"#installing-inkdrop-on-linux\"><i class=\"linkify icon\"></i></a>Installing Inkdrop on Linux</h2><p>To install Inkdrop on Linux, you can download a Debian package or a zip archive.\nThe package do not currently have auto-update features, so when you would like to upgrade to a new release of Inkdrop, you will have to repeat this installation process.</p>\n<p>To install Atom on Debian, Ubuntu, or related systems:</p>\n<pre><code class=\"lang-bash\"><span class=\"hljs-comment\"># Install Inkdrop</span>\nsudo dpkg -i inkdrop_x.y.z_amd64.deb\n\n<span class=\"hljs-comment\"># Install Inkdrop's dependencies if they are missing</span>\nsudo apt-get <span class=\"hljs-_\">-f</span> install\n</code></pre>\n<h2><a name=\"log-in\" class=\"anchor\" href=\"#log-in\"><i class=\"linkify icon\"></i></a>Log in</h2><p>When you first open Inkdrop, you should see Log-in screen like this:</p>\n<p><img class=\"ui image\" src=\"/manual/01-quick-start-guide_login.png\" title=\"\" alt=\"Login\" /></p>\n<p>Enter your email address and password to get started.</p>\n";

/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = "<p>Notes are only useful if you can find them quickly. Inkdrop&#39;s full-text search also supports filtering notebooks and tags with search qualifiers.</p>\n<p>To search all the notes, either click the search bar on the top of the note list or press <code>Cmd+F</code> / <code>Ctrl+F</code> keybind to set focus to it.</p>\n<p><img class=\"ui image\" src=\"/manual/04-searching_searchbar.png\" title=\"\" alt=\"SideBySide\" /></p>\n<p>Now you can search by keyword.</p>\n<h2><a name=\"search-notes-within-a-notebook-and-with-tags\" class=\"anchor\" href=\"#search-notes-within-a-notebook-and-with-tags\"><i class=\"linkify icon\"></i></a>Search notes within a notebook and with tags</h2><p>With <code>book:&lt;book_name&gt;</code> qualifier, you can search notes within specified notebook.\nFor example:</p>\n<pre><code>book:Blog\nbook:&quot;First Notebook&quot;\n</code></pre><p>If the notebook name has one or more space characters, enclose its name in double quotes (<code>&quot;</code>).</p>\n<p>With <code>tag:&lt;tag_name&gt;</code> qualifier, you can search notes with specified tag.\nFor example:</p>\n<pre><code>tag:JavaScript\ntag:WIP\n</code></pre><h2><a name=\"search-with-a-phrase\" class=\"anchor\" href=\"#search-with-a-phrase\"><i class=\"linkify icon\"></i></a>Search with a phrase</h2><p>By enclosing keywords in double quotes (<code>&quot;</code>), you can search notes by a phrase including spaces.\nExample:</p>\n<pre><code>&quot;foo bar&quot;\n</code></pre><h2><a name=\"excluding-modifier\" class=\"anchor\" href=\"#excluding-modifier\"><i class=\"linkify icon\"></i></a>Excluding modifier</h2><p>To search notes NOT matched with specified keyword and condition, add <code>-</code> modifier before the keyword and the qualifier like following:</p>\n<pre><code>-book:Blog\n-tag:JavaScript\n-foo\n-&quot;foo bar&quot;\n</code></pre>";

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = "<p>Inkdrop lets you sync notes across multiple computers via Cloud.\nBy default, Inkdrop stores your data in Inkdrop sync server.\nYou can configure synchronizations in the Preferences like this:</p>\n<p><img class=\"ui image\" src=\"/manual/05-sync_preferences.png\" title=\"\" alt=\"Sync Preferences\" /></p>\n<p>There are three sync options:</p>\n<ul>\n<li><strong>Don&#39;t Sync</strong> - Store Inkdrop data only in your local computer</li>\n<li><strong>Inkdrop Sync Server</strong> - Sync with Inkdrop&#39;s own service</li>\n<li><strong>Advanced (CouchDB)</strong> - Sync with your own compatible server</li>\n</ul>\n<h2><a name=\"how-to-set-up-your-own-sync-server\" class=\"anchor\" href=\"#how-to-set-up-your-own-sync-server\"><i class=\"linkify icon\"></i></a>How to set up your own sync server</h2><p>Inkdrop lets you store your notes in your own database compatible with <a href=\"http://couchdb.apache.org/\">CouchDB</a> API instead of Inkdrop&#39;s own service.\nCouchDB is just another open-source NoSQL database so you can deploy it on your environment for free. See CouchDB&#39;s <a href=\"http://docs.couchdb.org/en/1.6.1/install/index.html\">installation guide</a> for more informations.\nUsing DBaaS instead of operating database by yourself is good choice. For instance, <a href=\"https://cloudant.com/\">Cloudant</a> is one of fully-managed DBaaS providers.</p>\n<div class=\"ui warning message\">\n  <strong>WARNING</strong>: Use this feature at your own risk. Inkdrop itself doesn&#39;t protect data from other people on your server. To protect your data, read <a href='#optional-security'>Security</a> section at the bottom of this page.\n</div>\n\n<h3><a name=\"create-a-database\" class=\"anchor\" href=\"#create-a-database\"><i class=\"linkify icon\"></i></a>Create a database</h3><p>Once you got your CouchDB server, let&#39;s create a database for storing your notes.\nYou need only one database for Inkdrop. For example, run below command to create a database:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://localhost:5984/my-inkdrop-notes\n</code></pre>\n<blockquote>\n<p>NOTE: If you are running CouchDB not on localhost and port 5984 (default), replace <code>localhost:5984</code> to your server address and port.</p>\n</blockquote>\n<p>Retrieving the list of databases shows some useful results this time:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X GET http://127.0.0.1:5984/_all_dbs\n[<span class=\"hljs-string\">\"my-inkdrop-notes\"</span>]\n</code></pre>\n<p>Return to the Inkdrop sync preferences, you can input the URL to your database to the <strong>Address</strong> section:</p>\n<pre><code>http://localhost:5984/my-inkdrop-notes\n</code></pre><p><img class=\"ui image\" src=\"/manual/05-sync-custom-server.png\" title=\"\" alt=\"Sync with custom server\" /></p>\n<p>Then, push the <strong>Apply</strong> button.</p>\n<p>Please read <a href=\"http://guide.couchdb.org/draft/tour.html\">CouchDB&#39;s tutorial</a> for more information.</p>\n<h3><a name=\"optional-security\" class=\"anchor\" href=\"#optional-security\"><i class=\"linkify icon\"></i></a>Optional: Security</h3><p>As you may know, CouchDB is running with the Admin Party by default. It means Everybody has privileges to do anything.\nPlease read the <a href=\"http://guide.couchdb.org/draft/security.html\">documentation</a>.\nTo keep your notes secure, we recommend that you create an admin user with a username and password as your credentials.</p>\n<p>Now let’s create an admin user. We’ll call her <code>anna</code>, and her password is <code>secret</code>:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/_config/admins/anna <span class=\"hljs-_\">-d</span> <span class=\"hljs-string\">'\"secret\"'</span>\n</code></pre>\n<p>Now we have an admin user named <code>anna</code>, let&#39;s give her an admin access to <code>my-inkdrop-notes</code>:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes/_security <span class=\"hljs-_\">-d</span> <span class=\"hljs-string\">'{ \"admins\": { \"names\": [ \"anna\" ] } }'</span>\n</code></pre>\n<p>It restricts access from people without the valid credentials:</p>\n<pre><code class=\"lang-bash\">&gt; curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes\n{<span class=\"hljs-string\">\"error\"</span>:<span class=\"hljs-string\">\"unauthorized\"</span>,<span class=\"hljs-string\">\"reason\"</span>:<span class=\"hljs-string\">\"You are not a server admin.\"</span>}\n</code></pre>\n<p>That looks about right. Now we try again with the correct credentials:</p>\n<pre><code class=\"lang-bash\">&gt; HOST=<span class=\"hljs-string\">\"http://anna:secret@127.0.0.1:5984\"</span>\n&gt; curl -X PUT <span class=\"hljs-variable\">$HOST</span>/my-inkdrop-notes\n{<span class=\"hljs-string\">\"ok\"</span>:<span class=\"hljs-literal\">true</span>}\n</code></pre>\n<p>Looks good!</p>\n<p>Return to the Inkdrop sync preferences, you can input the URL to your database to the <strong>Address</strong> section:</p>\n<pre><code>http://anna:secret@127.0.0.1:5984/my-inkdrop-notes\n</code></pre><div class=\"ui warning message\">\n  <strong>WARNING</strong>: You can neither create design documents nor add attachments on the Inkdrop database.\n</div>\n\n";

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = "<p>The editor supports standard Markdown syntax as well as \n<a href=\"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet\">GitHub Flavored Markdown (GFM)</a> with inline formatting.</p>\n<h2><a name=\"live-preview\" class=\"anchor\" href=\"#live-preview\"><i class=\"linkify icon\"></i></a>Live Preview</h2><p>Inkdrop supports live preview of note. You can switch to Side-by-Side Preview with <code>Cmd+P</code> (on macOS) / <code>Ctrl+P</code> (on Windows/Linux) keybind to see the editor and preview side-by-side like this:</p>\n<p><img class=\"ui image\" src=\"/manual/03-editing_sidebyside.png\" title=\"\" alt=\"SideBySide\" /></p>\n<h2><a name=\"distraction-free-mode\" class=\"anchor\" href=\"#distraction-free-mode\"><i class=\"linkify icon\"></i></a>Distraction Free Mode</h2><p>To hide the sidebar and the note list, press <code>Cmd+Shift+D</code> / <code>Ctrl+Shift+D</code> to toggle <em>Distraction Free Mode</em>.\nYou can even hide the toolbar on the top of the editor from the preferences if you don&#39;t need it.</p>\n<h2><a name=\"tagging\" class=\"anchor\" href=\"#tagging\"><i class=\"linkify icon\"></i></a>Tagging</h2><p>Inkdrop lets you assign tags to a note.\nThis is another way to organize your notes.</p>\n<p><img class=\"ui image\" src=\"/manual/03-editing_tags.png\" title=\"\" alt=\"Tagging\" /></p>\n<p>Tags are listed on the sidebar.</p>\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = "<p>Example:</p>\n<pre><code class=\"lang-JSON\">{\n   <span class=\"hljs-attr\">\"_id\"</span>: <span class=\"hljs-string\">\"book:rylKOycF\"</span>,\n   <span class=\"hljs-attr\">\"_rev\"</span>: <span class=\"hljs-string\">\"2-8995d31a85ff253ffa12062ed5e1ec0a\"</span>,\n   <span class=\"hljs-attr\">\"updatedAt\"</span>: <span class=\"hljs-number\">1470970961407</span>,\n   <span class=\"hljs-attr\">\"createdAt\"</span>: <span class=\"hljs-number\">1470916727554</span>,\n   <span class=\"hljs-attr\">\"count\"</span>: <span class=\"hljs-number\">0</span>,\n   <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"First Notebook\"</span>\n}\n</code></pre>\n";

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = "<p>This actions class manages all essential editing state for a note editor.\nIf you&#39;re manipulating the state of an editor, use this class.</p>\n<h2><a name=\"accessing-editor-actions-instance\" class=\"anchor\" href=\"#accessing-editor-actions-instance\"><i class=\"linkify icon\"></i></a>Accessing Editor Actions Instance</h2><pre><code class=\"lang-js\"><span class=\"hljs-keyword\">const</span> editorActions = inkdrop.flux.getActions(<span class=\"hljs-string\">'editor'</span>)\n</code></pre>\n<h2><a name=\"methods\" class=\"anchor\" href=\"#methods\"><i class=\"linkify icon\"></i></a>Methods</h2><h3><a name=\"-code-create-code-\" class=\"anchor\" href=\"#-code-create-code-\"><i class=\"linkify icon\"></i></a><code>create ()</code></h3><p>Create new note and open it in the editor.</p>\n<h3><a name=\"-code-open-noteid-passphrase-rememberpassphrase-viewmode-isnew-force-code-\" class=\"anchor\" href=\"#-code-open-noteid-passphrase-rememberpassphrase-viewmode-isnew-force-code-\"><i class=\"linkify icon\"></i></a><code>open ({ noteId, passphrase, rememberPassphrase, viewMode, isNew, force })</code></h3><p>Open a note in the editor.</p>\n<ul>\n<li><code>noteId</code>: A String containing a note ID to open</li>\n<li><code>passphrase</code>: A String containing a password to decrypt the note. Required if the note is encrypted.</li>\n<li><code>rememberPassphrase</code>: A Boolean indicating whether the encryption password is remembered in the memory. Required if the note is encrypted.</li>\n<li><code>viewMode</code>: A String which can be <code>preview</code>, <code>sideBySide</code> or <code>edit</code>. Default: <code>preview</code>.</li>\n<li><code>isNew</code>: A Boolean indicating whether opening note is new. Default: <code>false</code>.</li>\n<li><code>force</code>: A Boolean, <code>true</code> to force open a note again even if it&#39;s already opened. Default: <code>false</code>.</li>\n</ul>\n<h3><a name=\"-code-close-code-\" class=\"anchor\" href=\"#-code-close-code-\"><i class=\"linkify icon\"></i></a><code>close ()</code></h3><p>Close current note.</p>\n<h3><a name=\"-code-update-document-changed-code-\" class=\"anchor\" href=\"#-code-update-document-changed-code-\"><i class=\"linkify icon\"></i></a><code>update ({ document, changed })</code></h3><p>Update current note.</p>\n<ul>\n<li><code>document</code>: A <a href=\"/reference/note\">Note</a> Object representing the current note to update.</li>\n<li><code>changed</code>: A Boolean indicating the note has been changed or not.</li>\n</ul>\n<h3><a name=\"-code-changeviewmode-viewmode-code-\" class=\"anchor\" href=\"#-code-changeviewmode-viewmode-code-\"><i class=\"linkify icon\"></i></a><code>changeViewMode ({ viewMode })</code></h3><p>Change the editor view mode.</p>\n<ul>\n<li><code>viewMode</code>: A String which can be following values:<ul>\n<li><code>preview</code></li>\n<li><code>sideBySide</code></li>\n<li><code>edit</code></li>\n</ul>\n</li>\n</ul>\n<h3><a name=\"-code-save-document-passphrase-rememberpassphrase-code-\" class=\"anchor\" href=\"#-code-save-document-passphrase-rememberpassphrase-code-\"><i class=\"linkify icon\"></i></a><code>save ({ document, passphrase, rememberPassphrase })</code></h3><p>Save current note to the local database.</p>\n<ul>\n<li><code>document</code>: A <a href=\"/reference/note\">Note</a> Object representing the current note to save.</li>\n<li><code>passphrase</code>: A String containing an encryption password. Required if the note is encrypted.</li>\n<li><code>rememberPassphrase</code>: A Boolean indicating whether the encryption password is remembered in the memory. Required if the note is encrypted.</li>\n</ul>\n";

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = "<p>This store class represents all essential editing state for a note editor.</p>\n<h2><a name=\"accessing-editor-store-instance\" class=\"anchor\" href=\"#accessing-editor-store-instance\"><i class=\"linkify icon\"></i></a>Accessing Editor Store Instance</h2><pre><code class=\"lang-js\"><span class=\"hljs-keyword\">const</span> editorStore = inkdrop.flux.getStore(<span class=\"hljs-string\">'editor'</span>)\n<span class=\"hljs-keyword\">const</span> editorState = editorStore.getState()\n</code></pre>\n<h2><a name=\"state-properties\" class=\"anchor\" href=\"#state-properties\"><i class=\"linkify icon\"></i></a>State Properties</h2><ul>\n<li><code>noteId</code>: A String containing an ID of a note currently editing.</li>\n<li><code>document</code>: A <a href=\"/reference/note\">Note</a> Object representing the current note.</li>\n<li><code>changed</code>: A Boolean indicating the note has been changed since it&#39;s opened.</li>\n<li><code>openingNoteId</code>: A String containing an ID of a note currently being loaded.</li>\n<li><code>viewMode</code>: A String containing the editor&#39;s view mode which can be following values:<ul>\n<li><code>preview</code></li>\n<li><code>sideBySide</code></li>\n<li><code>edit</code></li>\n</ul>\n</li>\n<li><code>lastError</code>: A Error object indicating a last error occurred during an editor action.</li>\n</ul>\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = "<p>The Note model represents a Note object.</p>\n<h2><a name=\"example-not-encrypted-\" class=\"anchor\" href=\"#example-not-encrypted-\"><i class=\"linkify icon\"></i></a>Example (not encrypted)</h2><pre><code class=\"lang-JSON\">{\n   <span class=\"hljs-attr\">\"_id\"</span>: <span class=\"hljs-string\">\"note:ryajdJ9Y\"</span>,\n   <span class=\"hljs-attr\">\"_rev\"</span>: <span class=\"hljs-string\">\"30-317a1636d4cdb2c755aee6e92e699cb3\"</span>,\n   <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"Welcome to Inkdrop\"</span>,\n   <span class=\"hljs-attr\">\"doctype\"</span>: <span class=\"hljs-string\">\"markdown\"</span>,\n   <span class=\"hljs-attr\">\"updatedAt\"</span>: <span class=\"hljs-number\">1471228624903</span>,\n   <span class=\"hljs-attr\">\"createdAt\"</span>: <span class=\"hljs-number\">1470916772952</span>,\n   <span class=\"hljs-attr\">\"tags\"</span>: [\n       <span class=\"hljs-string\">\"Tutorial\"</span>\n   ],\n   <span class=\"hljs-attr\">\"body\"</span>: <span class=\"hljs-string\">\"![logo](/Users/nora/Documents/pkpk/products/inkdrop/images/banner_sm.png)\\n\\nFor help, please visit:\\n\\n * The [Inkdrop docs](http://doc.inkdrop.info/) for Guides and the API reference.\\n * The Inkdrop forum at [github](https://github.com/inkdropapp/forum). Please report issue or suggest feedback here.\\n * The [Inkdropapp org](https://github.com/inkdropapp/). This is where all Inkdrop-created packages can be found.\\n\\n* * *\\n\\n### Get to know Inkdrop 🚀\\n\\n * [👀 Check a note example](inkdrop://note:HyxgYO15t)\\n * [📓 Create a notebook]()\\n * [✍️ Create a note]()\\n * [🖌 Choose a Theme]()\\n * [⚙ Customize the Editor]()\\n * [⌨️ Learn some Shortcuts]()\\n\"</span>,\n   <span class=\"hljs-attr\">\"bookId\"</span>: <span class=\"hljs-string\">\"book:rylKOycF\"</span>\n}\n</code></pre>\n<h2><a name=\"example-encrypted-\" class=\"anchor\" href=\"#example-encrypted-\"><i class=\"linkify icon\"></i></a>Example (encrypted)</h2><pre><code class=\"lang-JSON\">{\n  <span class=\"hljs-attr\">\"_id\"</span>: <span class=\"hljs-string\">\"note:BykcqFxK\"</span>,\n  <span class=\"hljs-attr\">\"_rev\"</span>: <span class=\"hljs-string\">\"8-c14fcf8e3fd745ca89231a8a39487987\"</span>,\n  <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"Welcome to Inkdrop\"</span>,\n  <span class=\"hljs-attr\">\"doctype\"</span>: <span class=\"hljs-string\">\"markdown\"</span>,\n  <span class=\"hljs-attr\">\"updatedAt\"</span>: <span class=\"hljs-number\">1470303011701</span>,\n  <span class=\"hljs-attr\">\"createdAt\"</span>: <span class=\"hljs-number\">1470302855436</span>,\n  <span class=\"hljs-attr\">\"tags\"</span>: [\n      <span class=\"hljs-string\">\"Tutorial\"</span>\n  ],\n  <span class=\"hljs-attr\">\"bookId\"</span>: <span class=\"hljs-string\">\"book:05f32a5b-eca0-4bfa-bd9b-6e39afbd6b72:SyEczB-U\"</span>,\n  <span class=\"hljs-attr\">\"encrypted\"</span>: <span class=\"hljs-string\">\"aes-256-gcm\"</span>,\n  <span class=\"hljs-attr\">\"encryptedBody\"</span>: {\n    <span class=\"hljs-attr\">\"content\"</span>: <span class=\"hljs-string\">\"oZLpfVvymz4s3IffRn9okvw8CGiaYEMjoze8AwQgyrQFhJ0y0WHEfMN9ORlz3UFaRsh5BxjVq+1Lx3g6LOGBpYDBmYVTVkhC7Ah3o4+LNpFQ76y7Z+xoBkP1gNgs7pcs5OkEz4OqzmlZ225RXfmCl4kGgon8v7umZ3GYvZHch+QodLySXUtg0a5P6DB55kZ2VRqqKzneQvVJoESoIK7L95fRLtcJ0fFlUE1WX77cRtXeVYWB3vMxKfxdrILyL0oUQY8/kr5kqYM5ZFooSBcW2qsi/i71YZUf/aS3QuR7QIanbaYMMH3KGsSZ8vonqANTcQulhBcLtQMMyndzphOJ67mUZpJicuAffCIWyvipNTK8NiFVuttjKRM7iu5TpINDDd4pqXApwoHG3Ba3yJdusNX5ZQJZSsb250ex6fErCRRfaIe7JgeRanPROOKQQFC6N+7idYCCNWyeWr6tgQ==\"</span>,\n    <span class=\"hljs-attr\">\"iv\"</span>: <span class=\"hljs-string\">\"ce6f133dbda3a3cc5bbcf8d3\"</span>,\n    <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\">\"635096d9a0a2a30e41c1afa6ea5765e5\"</span>\n  }\n}\n</code></pre>\n<h2><a name=\"fields\" class=\"anchor\" href=\"#fields\"><i class=\"linkify icon\"></i></a>Fields</h2><h3><a name=\"_id\" class=\"anchor\" href=\"#_id\"><i class=\"linkify icon\"></i></a>_id</h3><p>Type: <strong>String</strong></p>\n<p>The unique document ID which should start with <code>note:</code> and the remains are randomly generated string.</p>\n<h3><a name=\"_rev\" class=\"anchor\" href=\"#_rev\"><i class=\"linkify icon\"></i></a>_rev</h3><p>Type: <strong>String</strong></p>\n<p>This is a CouchDB specific field.\nThe current MVCC-token/revision of this document (mandatory and immutable).</p>\n<h3><a name=\"title\" class=\"anchor\" href=\"#title\"><i class=\"linkify icon\"></i></a>title</h3><p>Type: <strong>String</strong></p>\n<p>The title of the note.</p>\n<h3><a name=\"doctype\" class=\"anchor\" href=\"#doctype\"><i class=\"linkify icon\"></i></a>doctype</h3><p>Type: <strong>String</strong></p>\n<p>The format type of the body field.\nIt currently can take <code>markdown</code> only, reserved for the future.</p>\n<h3><a name=\"updatedat\" class=\"anchor\" href=\"#updatedat\"><i class=\"linkify icon\"></i></a>updatedAt</h3><p>Type: <strong>Number</strong></p>\n<p>The date time when the note was last updated, represented with <a href=\"http://www.unixtimestamp.com/\">Unix timestamps</a> in milliseconds.</p>\n<h3><a name=\"createdat\" class=\"anchor\" href=\"#createdat\"><i class=\"linkify icon\"></i></a>createdAt</h3><p>Type: <strong>Number</strong></p>\n<p>The date time when the note was created, represented with <a href=\"http://www.unixtimestamp.com/\">Unix timestamps</a> in milliseconds.</p>\n<h3><a name=\"tags\" class=\"anchor\" href=\"#tags\"><i class=\"linkify icon\"></i></a>tags</h3><p>Type: <strong>Array of String</strong></p>\n<p>The list of tag names.</p>\n<h3><a name=\"body\" class=\"anchor\" href=\"#body\"><i class=\"linkify icon\"></i></a>body</h3><p>Type: <strong>String</strong>, Optional</p>\n<p>The content of the note represented with Markdown.\nIt&#39;s required if the note is not encrypted.</p>\n<h3><a name=\"bookid\" class=\"anchor\" href=\"#bookid\"><i class=\"linkify icon\"></i></a>bookId</h3><p>The ID of the book with which the note is associated.</p>\n<h3><a name=\"encrypted\" class=\"anchor\" href=\"#encrypted\"><i class=\"linkify icon\"></i></a>encrypted</h3><p>Type: <strong>String</strong>, Optional</p>\n<p>The encryption algorithm. It&#39;s required if the note is encrypted.\nOnly &#39;aes-256-gcm&#39; is currently supported.</p>\n<h3><a name=\"encryptedbody\" class=\"anchor\" href=\"#encryptedbody\"><i class=\"linkify icon\"></i></a>encryptedBody</h3><p>Type: <strong>Object</strong>, Optional</p>\n<ul>\n<li><strong>content</strong> - The encrypted data</li>\n<li><strong>iv</strong> - The initial vector</li>\n<li><strong>tag</strong> - The tag used for the encryption</li>\n</ul>\n<p>If the note is encrypted with a password, the data should be stored in this field.</p>\n";

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = "<p>Example:</p>\n<pre><code class=\"lang-JSON\">{\n   <span class=\"hljs-attr\">\"_id\"</span>: <span class=\"hljs-string\">\"tag:1f0a9052-c82b-4749-9568-b79581d5282b\"</span>,\n   <span class=\"hljs-attr\">\"_rev\"</span>: <span class=\"hljs-string\">\"3-0da4f435c145fbf73d9eb5962996c2ec\"</span>,\n   <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"Tutorial\"</span>,\n   <span class=\"hljs-attr\">\"count\"</span>: <span class=\"hljs-number\">2</span>\n}\n</code></pre>\n";

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);