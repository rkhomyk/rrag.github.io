(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory();
	else
		root["ReStock"] = factory();
})(this, function() {
return webpackJsonpReStock([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
	_inherits(Row, _React$Component);

	function Row() {
		_classCallCheck(this, Row);

		return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
	}

	_createClass(Row, [{
		key: 'render',
		value: function render() {
			var anchor = this.props.anchor || this.props.title;
			var title = this.props.title ? _react2.default.createElement(
				'h4',
				null,
				_react2.default.createElement(
					'a',
					{ id: anchor, href: '#' + anchor },
					this.props.title
				)
			) : null;

			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				title,
				this.props.children
			);
		}
	}]);

	return Row;
}(_react2.default.Component);

Row.propTypes = {
	title: _react2.default.PropTypes.string,
	anchor: _react2.default.PropTypes.string
};

exports.default = Row;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentSection = function (_React$Component) {
	_inherits(ContentSection, _React$Component);

	function ContentSection() {
		_classCallCheck(this, ContentSection);

		return _possibleConstructorReturn(this, (ContentSection.__proto__ || Object.getPrototypeOf(ContentSection)).apply(this, arguments));
	}

	_createClass(ContentSection, [{
		key: "render",
		value: function render() {
			var className = this.props.className;

			return _react2.default.createElement(
				"div",
				{ id: "ContentSection", className: "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main " + className },
				_react2.default.createElement(
					"h1",
					{ className: "page-header" },
					this.props.title
				),
				this.props.children
			);
		}
	}]);

	return ContentSection;
}(_react2.default.Component);

;

ContentSection.propTypes = {
	title: _react2.default.PropTypes.string.isRequired
};

exports.default = ContentSection;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_React$Component) {
	_inherits(Section, _React$Component);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			var className = this.props.className + ' col-md-' + 6 * this.props.colSpan;
			var title = this.props.title ? _react2.default.createElement(
				'h4',
				null,
				this.props.title
			) : null;
			return _react2.default.createElement(
				'div',
				{ className: className },
				title,
				this.props.children
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

Section.propTypes = {
	colSpan: _react2.default.PropTypes.number.isRequired,
	title: _react2.default.PropTypes.string
};

Section.defaultProps = {
	colSpan: 1
};

exports.default = Section;

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

/* harmony default export */ exports["a"] = function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n]"),
      delimiterCode = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns;
    return rows;
  }

  function parseRows(text, f) {
    var EOL = {}, // sentinel value for end-of-line
        EOF = {}, // sentinel value for end-of-file
        rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // the current line number
        t, // the current token
        eol; // is the current token followed by EOL?

    function token() {
      if (I >= N) return EOF; // special case: end of file
      if (eol) return eol = false, EOL; // special case: end of line

      // special case: quotes
      var j = I, c;
      if (text.charCodeAt(j) === 34) {
        var i = j;
        while (i++ < N) {
          if (text.charCodeAt(i) === 34) {
            if (text.charCodeAt(i + 1) !== 34) break;
            ++i;
          }
        }
        I = i + 2;
        c = text.charCodeAt(i + 1);
        if (c === 13) {
          eol = true;
          if (text.charCodeAt(i + 2) === 10) ++I;
        } else if (c === 10) {
          eol = true;
        }
        return text.slice(j + 1, i).replace(/""/g, "\"");
      }

      // common case: find next delimiter or newline
      while (I < N) {
        var k = 1;
        c = text.charCodeAt(I++);
        if (c === 10) eol = true; // \n
        else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \r|\r\n
        else if (c !== delimiterCode) continue;
        return text.slice(j, I - k);
      }

      // special case: last token before EOF
      return text.slice(j);
    }

    while ((t = token()) !== EOF) {
      var a = [];
      while (t !== EOL && t !== EOF) {
        a.push(t);
        t = token();
      }
      if (f && (a = f(a, n++)) == null) continue;
      rows.push(a);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
};


/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "dsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dsv__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "csvParse", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "csvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "csvFormat", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "csvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "tsvParse", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "tsvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "tsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "tsvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["d"]; });





/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(89)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./re-stock.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./re-stock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = updatingDataWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(ChartComponent) {
	var name = ChartComponent.displayName || ChartComponent.name || "ChartComponent";
	return name;
}

function updatingDataWrapper(ChartComponent) {
	var LENGTH = 130;

	var UpdatingComponentHOC = function (_React$Component) {
		_inherits(UpdatingComponentHOC, _React$Component);

		function UpdatingComponentHOC(props) {
			_classCallCheck(this, UpdatingComponentHOC);

			var _this = _possibleConstructorReturn(this, (UpdatingComponentHOC.__proto__ || Object.getPrototypeOf(UpdatingComponentHOC)).call(this, props));

			_this.state = {
				length: LENGTH,
				data: _this.props.data.slice(0, LENGTH)
			};
			_this.speed = 1000;
			_this.onKeyPress = _this.onKeyPress.bind(_this);
			return _this;
		}

		_createClass(UpdatingComponentHOC, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				document.addEventListener("keyup", this.onKeyPress);
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				if (this.interval) clearInterval(this.interval);
				document.removeEventListener("keyup", this.onKeyPress);
			}
		}, {
			key: "onKeyPress",
			value: function onKeyPress(e) {
				var _this2 = this;

				var keyCode = e.which;
				console.log(keyCode);
				switch (keyCode) {
					case 50:
						{
							// 2 (50) - Start alter data
							this.func = function () {
								if (_this2.state.length < _this2.props.data.length) {
									_this2.setState({
										length: _this2.state.length + 1,
										data: _this2.props.data.slice(0, _this2.state.length + 1)
									});
								}
							};
							break;
						}
					case 80:
					// P (80)
					case 49:
						{
							// 1 (49) - Start Push data
							this.func = function () {
								if (_this2.state.length < _this2.props.data.length) {
									_this2.setState({
										length: _this2.state.length + 1,
										data: _this2.props.data.slice(0, _this2.state.length + 1)
									});
								}
							};
							break;
						}
					case 27:
						{
							// ESC (27) - Clear interval
							this.func = null;
							if (this.interval) clearInterval(this.interval);
							break;
						}
					case 107:
						{
							// + (107) - increase the this.speed
							this.speed = Math.max(this.speed / 2, 50);
							break;
						}
					case 109:
					case 189:
						{
							// - (189, 109) - reduce the this.speed
							var delta = Math.min(this.speed, 1000);
							this.speed = this.speed + delta;
							break;
						}
				}
				if (this.func) {
					if (this.interval) clearInterval(this.interval);
					console.log("this.speed  = ", this.speed);
					this.interval = setInterval(this.func, this.speed);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var type = this.props.type;
				var data = this.state.data;


				return _react2.default.createElement(ChartComponent, { ref: "component", data: data, type: type });
			}
		}]);

		return UpdatingComponentHOC;
	}(_react2.default.Component);

	UpdatingComponentHOC.defaultProps = {
		type: "svg"
	};
	UpdatingComponentHOC.displayName = "updatingDataWrapper(" + getDisplayName(ChartComponent) + ")";

	return UpdatingComponentHOC;
}

/***/ },
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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LfXxKX2Dv4jLPLZV+DG7Zxi25P0652HGcOJi57Q1e534M/coj5WDf2vxIW0nbcqe2cj/ozKf8y7IflvWKX1H3866Yo/RWEXcTK/n1/3Z+8GacMKW6pVh1IO5pPs35/LRNxjP9+dGefUw2kDfi0wbEz/znpW597VLaGm9QD2+9L9SSimllFJKKaWUUkpdTTsRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERkTvkH4eXjmo3pl0mAAABU21rQlT6zsr+AH9ViQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeJzt1uFpg2AUhlEHcREHcRAXcRAHcREHsbyBC7emIf+KCeeBQ5tP++tNbM5TkiRJkiRJkiRJkiRJkiRJkiRJH9FxHOe+70/nOcu1d/e/uk/3b13XcxzHc5qmx8/sGP0s99S9dRbLsjxexzAMf76HdO+yY5V9s2F2rc37PbV/1Te//o3uX7bre1Y565/lep19+8bZv7pe0/3Lc77vX//X53l+2j/X7P99Zdt67tfv27b9+sz357/9v6/6Htf3q/dArtV3+5xF1Z8d12uSJEmSJEmSJEn69wYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhAPwr5rLg9VKmIAAAMc21rQlT6zsr+AH9XiwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeJztnf2SHUUZxt9L4BK4BC6BS/AS/IsqLSkoLar8QInyrYiBoCgfEiULgoArkDVEgRCIhN2NhCBsCCysiXxpIhvgf+x3T785z7zbM6dnpnu655wu6qmZs2QTcn79PO/TPSeE6Cqioqx1BV1DV9K3d3QtfZ/20PVWP6QjdDPolh19RXdY/WymUv/eFlmX0TcucRWey3STYXgrbe3w+YXRXqu7jO4G7TO6p4P2VZT6PZh3XU7fAt/+iCYevc2yvQu4Cs9fGv3K6F6rXxv9xug+o/uNHgA9aPVbuGo92KjU78+8SDiz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tFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFP+Nu2Uv0075W/TTvnbtFN3d3d3d3f3wxeH37/5GhOvBwAAMiVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBGaXJld29ya3MgQ1M1LjEgMTEuMS4wLjIwNSBNYWNpbnRvc2g8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTEtMTItMTNUMjA6NTg6NDZaPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTEtMTItMTNUMjE6MDQ6NDNaPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+V6SowAAAIABJREFUeJzsvX2UXEd1L/qb0Yw+bI1nZOOPIGwN/sCIBGtIcAQkIIWADLkLrCTPuuZl5VpZ7/IcceVYBDuK8AoSTzfWs7lKRBJkR4KL7LvA9nVy7ThcPda6Sws50VrXQQRsyzJfwYyVhISYDw14jKWZ7vP+6D49darrY1fVrnNOd9dvVq/pPrVrV/Xp7vPbe9eufYaQkJBQb9yKKSzCBABgKaYw3H4+BGAp1nfkhtr/F2MdACAj6KbI5HJzeLwgnwE4g6OdY02cxhk8iaz9/E/wJFF7QkJCBRiyiyQkJETBFkxgGaYAAOdgPYYALGmT/QgmMYJVnV/oEIq/Vvk1FTrCdzEWZNlMapMfDTyPBqbRwGmcbRsIP8FRAMAZ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"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _src = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _src.series.CandlestickSeries;
var BarSeries = _src.series.BarSeries;
var LineSeries = _src.series.LineSeries;
var AreaSeries = _src.series.AreaSeries;
var StochasticSeries = _src.series.StochasticSeries;
var BollingerSeries = _src.series.BollingerSeries;
var discontinuousTimeScaleProvider = _src.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _src.coordinates.CrossHairCursor;
var MouseCoordinateX = _src.coordinates.MouseCoordinateX;
var MouseCoordinateY = _src.coordinates.MouseCoordinateY;
var CurrentCoordinate = _src.coordinates.CurrentCoordinate;
var EdgeIndicator = _src.coordinates.EdgeIndicator;
var OHLCTooltip = _src.tooltip.OHLCTooltip;
var MovingAverageTooltip = _src.tooltip.MovingAverageTooltip;
var BollingerBandTooltip = _src.tooltip.BollingerBandTooltip;
var StochasticTooltip = _src.tooltip.StochasticTooltip;
var XAxis = _src.axes.XAxis;
var YAxis = _src.axes.YAxis;
var stochasticOscillator = _src.indicator.stochasticOscillator;
var ema = _src.indicator.ema;
var bollingerBand = _src.indicator.bollingerBand;
var fitWidth = _src.helper.fitWidth;

var CandleStickChartWithDarkTheme = function (_React$Component) {
	_inherits(CandleStickChartWithDarkTheme, _React$Component);

	function CandleStickChartWithDarkTheme() {
		_classCallCheck(this, CandleStickChartWithDarkTheme);

		return _possibleConstructorReturn(this, (CandleStickChartWithDarkTheme.__proto__ || Object.getPrototypeOf(CandleStickChartWithDarkTheme)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithDarkTheme, [{
		key: "render",
		value: function render() {
			var height = 750;
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var margin = { left: 70, right: 70, top: 20, bottom: 30 };

			var gridHeight = height - margin.top - margin.bottom;
			var gridWidth = width - margin.left - margin.right;

			var showGrid = true;
			var yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } : {};
			var xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 } : {};

			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var slowSTO = stochasticOscillator().windowSize(14).kWindowSize(1).stroke({ D: "#ea2bff", K: "#74d400", top: "#37a600", middle: "#b8ab00", bottom: "#37a600" }).merge(function (d, c) {
				d.slowSTO = c;
			}).accessor(function (d) {
				return d.slowSTO;
			});
			var fastSTO = stochasticOscillator().windowSize(14).kWindowSize(3).stroke({ D: "#ea2bff", K: "#74d400", top: "#37a600", middle: "#b8ab00", bottom: "#37a600" }).merge(function (d, c) {
				d.fastSTO = c;
			}).accessor(function (d) {
				return d.fastSTO;
			});
			var fullSTO = stochasticOscillator().windowSize(14).kWindowSize(3).dWindowSize(4).stroke({ D: "#ea2bff", K: "#74d400" }).merge(function (d, c) {
				d.fullSTO = c;
			}).accessor(function (d) {
				return d.fullSTO;
			});

			var bb = bollingerBand().stroke({ top: "#964B00", middle: "#8c9900", bottom: "#964B00" }).fill("#adffaf");

			return _react2.default.createElement(
				_src.ChartCanvas,
				{ ratio: ratio, width: width, height: 750,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, slowSTO, fastSTO, fullSTO, bb],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_src.Chart,
					{ id: 1, height: 325,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, bb.accessor(), ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(YAxis, _extends({ axisAt: "right", orient: "right", ticks: 5 }, yGrid, {
						tickStroke: "#FFFFFF" })),
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, {
						wickStroke: function wickStroke(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} }),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(BollingerSeries, { calculator: bb }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, -10] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 10],
						calculators: [ema20, ema50] }),
					_react2.default.createElement(BollingerBandTooltip, { origin: [-38, 60], calculator: bb })
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 100, origin: function origin(w, h) {
							return [0, h - 475];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s"),
						tickStroke: "#FFFFFF" }),
					_react2.default.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#DB0000";
						} })
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 3,
						yExtents: slowSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 375];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: slowSTO.tickValues(),
						tickStroke: "#FFFFFF" }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(StochasticSeries, { calculator: slowSTO,
						stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } }),
					_react2.default.createElement(
						StochasticTooltip,
						{ calculator: slowSTO, origin: [-38, 15] },
						"Fast STO"
					)
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 4,
						yExtents: fastSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 250];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0,
						stroke: "#FFFFFF", opacity: 0.5 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fastSTO.tickValues(),
						tickStroke: "#FFFFFF" }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(StochasticSeries, { calculator: fastSTO,
						stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } }),
					_react2.default.createElement(
						StochasticTooltip,
						{ calculator: fastSTO, origin: [-38, 15] },
						"Slow STO"
					)
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 5,
						yExtents: fullSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 125];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, _extends({ axisAt: "bottom", orient: "bottom" }, xGrid, {
						tickStroke: "#FFFFFF", stroke: "#FFFFFF" })),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fullSTO.tickValues(),
						tickStroke: "#FFFFFF" }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(StochasticSeries, { calculator: fullSTO,
						stroke: { top: "#37a600", middle: "#b8ab00", bottom: "#37a600" } }),
					_react2.default.createElement(
						StochasticTooltip,
						{ calculator: fullSTO, origin: [-38, 15] },
						"Full STO"
					)
				),
				_react2.default.createElement(CrossHairCursor, { stroke: "#FFFFFF" })
			);
		}
	}]);

	return CandleStickChartWithDarkTheme;
}(_react2.default.Component);

CandleStickChartWithDarkTheme.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithDarkTheme.defaultProps = {
	type: "svg"
};
CandleStickChartWithDarkTheme = fitWidth(CandleStickChartWithDarkTheme);

exports.default = CandleStickChartWithDarkTheme;

/***/ },
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\naside table tbody > tr > td,\naside table tbody > tr > th,\naside table tfoot > tr > td,\naside table tfoot > tr > th,\naside table thead > tr > td,\naside table thead > tr > th {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #DDD;\n}\n\na.button {\n  background: transparent url(" + __webpack_require__(90) + ") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important;\n}\n\na.button small {\n  display: inline;\n  font-size: 13px;\n  margin-top: 15px;\n}\n\n.dark {\n  background: #303030;\n}\n\n.dark .react-stockcharts-tooltip {\n  fill: white;\n}\n\n.dark .react-stockcharts-tooltip-label {\n  fill: yellow;\n}\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white;\n}\n\n.jumbotron a {\n  color: yellow;\n}\n\n.top-spacing {\n  padding-top: 10px;\n}\n\n.navbar {\n  background-color: steelblue;\n}\n\n.navbar a {\n  color: white;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 5px 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 13px;\n}\n\n.nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\nimg[alt=\"Done\"] {\n  max-width: 20px;\n  max-height: 20px;\n  padding-bottom: 4px;\n}\n", ""]);

// exports


/***/ },
/* 64 */
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
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return csvParse; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return csvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return csvFormat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return csvFormatRows; });


var csv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return tsvParse; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return tsvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return tsvFormat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return tsvFormatRows; });


var tsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ },
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartForDiscontinuousIntraDay = function (_React$Component) {
	_inherits(CandleStickChartForDiscontinuousIntraDay, _React$Component);

	function CandleStickChartForDiscontinuousIntraDay() {
		_classCallCheck(this, CandleStickChartForDiscontinuousIntraDay);

		return _possibleConstructorReturn(this, (CandleStickChartForDiscontinuousIntraDay.__proto__ || Object.getPrototypeOf(CandleStickChartForDiscontinuousIntraDay)).apply(this, arguments));
	}

	_createClass(CandleStickChartForDiscontinuousIntraDay, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume50.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume50.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateX, {
						rectWidth: 60,
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%H:%M:%S") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0], xDisplayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d %H:%M:%S") }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartForDiscontinuousIntraDay;
}(_react2.default.Component);

CandleStickChartForDiscontinuousIntraDay.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartForDiscontinuousIntraDay.defaultProps = {
	type: "svg"
};
CandleStickChartForDiscontinuousIntraDay = fitWidth(CandleStickChartForDiscontinuousIntraDay);

exports.default = CandleStickChartForDiscontinuousIntraDay;

/***/ },
/* 92 */,
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithEdge = function (_React$Component) {
	_inherits(CandleStickChartWithEdge, _React$Component);

	function CandleStickChartWithEdge() {
		_classCallCheck(this, CandleStickChartWithEdge);

		return _possibleConstructorReturn(this, (CandleStickChartWithEdge.__proto__ || Object.getPrototypeOf(CandleStickChartWithEdge)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithEdge, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume70 = sma().id(3).windowSize(70).sourcePath("volume").merge(function (d, c) {
				d.smaVolume70 = c;
			}).accessor(function (d) {
				return d.smaVolume70;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 450,
					margin: { left: 90, right: 90, top: 70, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, smaVolume70],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 2, 1)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume70.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume70.accessor(), stroke: smaVolume70.stroke(), fill: smaVolume70.fill() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: smaVolume70.accessor(), fill: smaVolume70.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume70.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume70.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume70.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume70.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yPan: true, yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(XAxis, { axisAt: "top", orient: "top" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke(), highlightOnHover: true }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke(), highlightOnHover: true }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "top",
						orient: "top",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, -65] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, -55],
						calculators: [ema20, ema50] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithEdge;
}(_react2.default.Component);

/*


*/

CandleStickChartWithEdge.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithEdge.defaultProps = {
	type: "svg"
};
CandleStickChartWithEdge = fitWidth(CandleStickChartWithEdge);

exports.default = CandleStickChartWithEdge;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var MACDSeries = _reactStockcharts.series.MACDSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var macd = _reactStockcharts.indicator.macd;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithMACDIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithMACDIndicator, _React$Component);

	function CandleStickChartWithMACDIndicator() {
		_classCallCheck(this, CandleStickChartWithMACDIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithMACDIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithMACDIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithMACDIndicator, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MACDSeries, { calculator: macdCalculator }),
					_react2.default.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithMACDIndicator;
}(_react2.default.Component);

;

CandleStickChartWithMACDIndicator.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithMACDIndicator.defaultProps = {
	type: "svg"
};

CandleStickChartWithMACDIndicator = fitWidth(CandleStickChartWithMACDIndicator);

exports.default = CandleStickChartWithMACDIndicator;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithZoomPan = function (_React$Component) {
	_inherits(CandleStickChartWithZoomPan, _React$Component);

	function CandleStickChartWithZoomPan() {
		_classCallCheck(this, CandleStickChartWithZoomPan);

		return _possibleConstructorReturn(this, (CandleStickChartWithZoomPan.__proto__ || Object.getPrototypeOf(CandleStickChartWithZoomPan)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithZoomPan, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}] },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithZoomPan;
}(_react2.default.Component);

CandleStickChartWithZoomPan.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithZoomPan.defaultProps = {
	type: "svg"
};
CandleStickChartWithZoomPan = fitWidth(CandleStickChartWithZoomPan);

exports.default = CandleStickChartWithZoomPan;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var KagiSeries = _reactStockcharts.series.KagiSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var kagi = _reactStockcharts.indicator.kagi;
var fitWidth = _reactStockcharts.helper.fitWidth;

var Kagi = function (_React$Component) {
	_inherits(Kagi, _React$Component);

	function Kagi() {
		_classCallCheck(this, Kagi);

		return _possibleConstructorReturn(this, (Kagi.__proto__ || Object.getPrototypeOf(Kagi)).apply(this, arguments));
	}

	_createClass(Kagi, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var kagiCalculator = kagi();
			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [kagiCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(KagiSeries, null),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return d.volume;
						},
						stroke: true,
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.5 })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return Kagi;
}(_react2.default.Component);

Kagi.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

Kagi.defaultProps = {
	type: "svg"
};
Kagi = fitWidth(Kagi);

exports.default = Kagi;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pointAndFigureTransformOptions = { boxSize: 0.25 };

var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var PointAndFigureSeries = _reactStockcharts.series.PointAndFigureSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var pointAndFigure = _reactStockcharts.indicator.pointAndFigure;
var fitWidth = _reactStockcharts.helper.fitWidth;

var PointAndFigure = function (_React$Component) {
	_inherits(PointAndFigure, _React$Component);

	function PointAndFigure() {
		_classCallCheck(this, PointAndFigure);

		return _possibleConstructorReturn(this, (PointAndFigure.__proto__ || Object.getPrototypeOf(PointAndFigure)).apply(this, arguments));
	}

	_createClass(PointAndFigure, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var pAndF = pointAndFigure();

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [pAndF],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(PointAndFigureSeries, null),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return PointAndFigure;
}(_react2.default.Component);

PointAndFigure.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

PointAndFigure.defaultProps = {
	type: "svg"
};
PointAndFigure = fitWidth(PointAndFigure);

exports.default = PointAndFigure;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var RenkoSeries = _reactStockcharts.series.RenkoSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var renko = _reactStockcharts.indicator.renko;
var fitWidth = _reactStockcharts.helper.fitWidth;

var Renko = function (_React$Component) {
	_inherits(Renko, _React$Component);

	function Renko() {
		_classCallCheck(this, Renko);

		return _possibleConstructorReturn(this, (Renko.__proto__ || Object.getPrototypeOf(Renko)).apply(this, arguments));
	}

	_createClass(Renko, [{
		key: "getChartCanvas",
		value: function getChartCanvas() {
			return this.refs.chartCanvas;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var renkoCalculator = renko();

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ref: "chartCanvas", ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [renkoCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(RenkoSeries, null),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return Renko;
}(_react2.default.Component);

Renko.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

Renko.defaultProps = {
	type: "svg"
};
Renko = fitWidth(Renko);

exports.default = Renko;

/***/ },
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_React$Component) {
	_inherits(MenuItem, _React$Component);

	function MenuItem() {
		_classCallCheck(this, MenuItem);

		return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
	}

	_createClass(MenuItem, [{
		key: 'render',
		value: function render() {
			var className = this.props.current ? 'active' : '';
			return _react2.default.createElement(
				'li',
				{ className: className },
				_react2.default.createElement(
					'a',
					{ href: '#/' + this.props.anchor },
					this.props.title
				)
			);
		}
	}]);

	return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = {
	current: _react2.default.PropTypes.bool.isRequired,
	title: _react2.default.PropTypes.string.isRequired,
	anchor: _react2.default.PropTypes.string.isRequired
};

MenuItem.defaultProps = {
	active: false
};

// onClick={this.handleClick}
exports.default = MenuItem;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContainer = function (_React$Component) {
	_inherits(MainContainer, _React$Component);

	function MainContainer() {
		_classCallCheck(this, MainContainer);

		return _possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).apply(this, arguments));
	}

	_createClass(MainContainer, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "container-fluid", id: "MainContainer" },
				_react2.default.createElement(
					_row2.default,
					null,
					this.props.children
				)
			);
		}
	}]);

	return MainContainer;
}(_react2.default.Component);

exports.default = MainContainer;
;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuGroup = function (_React$Component) {
	_inherits(MenuGroup, _React$Component);

	function MenuGroup() {
		_classCallCheck(this, MenuGroup);

		return _possibleConstructorReturn(this, (MenuGroup.__proto__ || Object.getPrototypeOf(MenuGroup)).apply(this, arguments));
	}

	_createClass(MenuGroup, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"ul",
				{ className: "nav nav-sidebar" },
				this.props.children
			);
		}
	}]);

	return MenuGroup;
}(_react2.default.Component);

exports.default = MenuGroup;
;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"nav",
				{ className: "navbar navbar-fixed-top" },
				_react2.default.createElement(
					"div",
					{ className: "container-fluid" },
					_react2.default.createElement(
						"div",
						{ className: "navbar-header" },
						_react2.default.createElement(
							"a",
							{ className: "navbar-brand", href: "index.html" },
							"React Stockcharts"
						),
						_react2.default.createElement("div", { id: "debug_here" })
					)
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = Nav;
;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithAnnotation = __webpack_require__(230);

var _CandleStickChartWithAnnotation2 = _interopRequireDefault(_CandleStickChartWithAnnotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var AnnotationsPage = _react2.default.createClass({
	displayName: "AnnotationsPage",

	statics: {
		title: "Annotations"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: AnnotationsPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithAnnotation2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(473) } })
				)
			)
		);
	}
});

exports.default = AnnotationsPage;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _AreaChart = __webpack_require__(222);

var _AreaChart2 = _interopRequireDefault(_AreaChart);

var _AreaChartWithYPercent = __webpack_require__(223);

var _AreaChartWithYPercent2 = _interopRequireDefault(_AreaChartWithYPercent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverviewPage = _react2.default.createClass({
	displayName: "OverviewPage",

	statics: {
		title: 'Area Chart'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: OverviewPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_AreaChart2.default, { data: this.props.someData, type: "svg" })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(474) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_AreaChartWithYPercent2.default, { data: this.props.someData, type: "svg" })
				)
			)
		);
	}
});

exports.default = OverviewPage;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _BarChart = __webpack_require__(225);

var _BarChart2 = _interopRequireDefault(_BarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var BarChartPage = _react2.default.createClass({
	displayName: "BarChartPage",

	statics: {
		title: "Bar Chart"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: BarChartPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_BarChart2.default, { data: _this.props.barData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(475) } })
				)
			)
		);
	}
});

exports.default = BarChartPage;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithBollingerBandOverlay = __webpack_require__(231);

var _CandleStickChartWithBollingerBandOverlay2 = _interopRequireDefault(_CandleStickChartWithBollingerBandOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var BollingerBandOverlayPage = _react2.default.createClass({
	displayName: "BollingerBandOverlayPage",

	statics: {
		title: 'Bollinger Band'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: BollingerBandOverlayPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ type: "hybrid" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithBollingerBandOverlay2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(476) } })
				)
			)
		);
	}
});

exports.default = BollingerBandOverlayPage;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithBrush = __webpack_require__(232);

var _CandleStickChartWithBrush2 = _interopRequireDefault(_CandleStickChartWithBrush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var BrushSupportPage = _react2.default.createClass({
	displayName: "BrushSupportPage",

	statics: {
		title: "Brush"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: BrushSupportPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(477) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithBrush2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = BrushSupportPage;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _BubbleChart = __webpack_require__(226);

var _BubbleChart2 = _interopRequireDefault(_BubbleChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var BubbleChartPage = _react2.default.createClass({
	displayName: "BubbleChartPage",

	statics: {
		title: "Bubble Chart"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: BubbleChartPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_BubbleChart2.default, { data: _this.props.bubbleData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(478) } })
				)
			)
		);
	}
});

exports.default = BubbleChartPage;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChart = __webpack_require__(227);

var _CandleStickChart2 = _interopRequireDefault(_CandleStickChart);

var _CandleStickStockScaleChart = __webpack_require__(244);

var _CandleStickStockScaleChart2 = _interopRequireDefault(_CandleStickStockScaleChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CandleStickChartPage = _react2.default.createClass({
	displayName: "CandleStickChartPage",

	statics: {
		title: 'Candlestick Chart'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: CandleStickChartPage.title },
			_react2.default.createElement(
				_row2.default,
				{ title: "" },
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_CandleStickChart2.default, { data: this.props.someData, type: "svg" })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(480) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_CandleStickStockScaleChart2.default, { data: this.props.someData, type: "svg" })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(479) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				{ title: "stocktime scale" },
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(492) } })
				)
			)
		);
	}
});

exports.default = CandleStickChartPage;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreakingChangesPage = _react2.default.createClass({
	displayName: "BreakingChangesPage",

	statics: {
		title: 'Change log'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: BreakingChangesPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(481) } })
				)
			)
		);
	}
});

exports.default = BreakingChangesPage;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithClickHandlerCallback = __webpack_require__(234);

var _CandleStickChartWithClickHandlerCallback2 = _interopRequireDefault(_CandleStickChartWithClickHandlerCallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var ClickHandlerCallbackPage = _react2.default.createClass({
	displayName: "ClickHandlerCallbackPage",

	statics: {
		title: "Click callback"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: ClickHandlerCallbackPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(482) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithClickHandlerCallback2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = ClickHandlerCallbackPage;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComingSoonPage = _react2.default.createClass({
	displayName: "ComingSoonPage",

	statics: {
		title: 'Coming soon'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: ComingSoonPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(483) } })
				)
			)
		);
	}
});

exports.default = ComingSoonPage;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithCompare = __webpack_require__(235);

var _CandleStickChartWithCompare2 = _interopRequireDefault(_CandleStickChartWithCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var CompareWithPage = _react2.default.createClass({
	displayName: "CompareWithPage",

	statics: {
		title: 'Compare'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: CompareWithPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithCompare2.default, { data: _this.props.compareData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(484) } })
				)
			)
		);
	}
});

exports.default = CompareWithPage;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreatingCustomChartSeriesPage = _react2.default.createClass({
	displayName: "CreatingCustomChartSeriesPage",

	statics: {
		title: 'Custom - Create XXXSeries'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: CreatingCustomChartSeriesPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(486) } })
				)
			)
		);
	}
});

exports.default = CreatingCustomChartSeriesPage;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreatingCustomIndicatorPage = _react2.default.createClass({
	displayName: "CreatingCustomIndicatorPage",

	statics: {
		title: 'Custom - Create indicator'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: CreatingCustomIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(485) } })
				)
			)
		);
	}
});

exports.default = CreatingCustomIndicatorPage;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithDarkTheme = __webpack_require__(58);

var _CandleStickChartWithDarkTheme2 = _interopRequireDefault(_CandleStickChartWithDarkTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var DarkThemePage = _react2.default.createClass({
	displayName: "DarkThemePage",

	statics: {
		title: "Theme - Dark"
	},
	saveChartAsImage: function saveChartAsImage(e) {
		var container = _react2.default.findDOMNode(this.refs.container);
		SaveChartAsImage.saveChartAsImage(container);
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: DarkThemePage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(487) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2, className: "dark" },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithDarkTheme2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = DarkThemePage;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithEdge = __webpack_require__(93);

var _CandleStickChartWithEdge2 = _interopRequireDefault(_CandleStickChartWithEdge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var EdgeCoordinatesPage = _react2.default.createClass({
	displayName: "EdgeCoordinatesPage",

	statics: {
		title: 'Edge coordinate'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: EdgeCoordinatesPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithEdge2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(488) } })
				)
			)
		);
	}
});

exports.default = EdgeCoordinatesPage;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _OHLCChartWithElderImpulseIndicator = __webpack_require__(256);

var _OHLCChartWithElderImpulseIndicator2 = _interopRequireDefault(_OHLCChartWithElderImpulseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var ElderImpulseIndicatorPage = _react2.default.createClass({
	displayName: "ElderImpulseIndicatorPage",

	statics: {
		title: "Elder Impulse"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: ElderImpulseIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(489) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_OHLCChartWithElderImpulseIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = ElderImpulseIndicatorPage;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _OHLCChartWithElderRayIndicator = __webpack_require__(257);

var _OHLCChartWithElderRayIndicator2 = _interopRequireDefault(_OHLCChartWithElderRayIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var ElderRayIndicatorPage = _react2.default.createClass({
	displayName: "ElderRayIndicatorPage",

	statics: {
		title: "ElderRay"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: ElderRayIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(490) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_OHLCChartWithElderRayIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = ElderRayIndicatorPage;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartForDiscontinuousIntraDay = __webpack_require__(91);

var _CandleStickChartForDiscontinuousIntraDay2 = _interopRequireDefault(_CandleStickChartForDiscontinuousIntraDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var IntraDayContinuousDataPage = _react2.default.createClass({
	displayName: "IntraDayContinuousDataPage",

	statics: {
		title: "Intra day with discontinuous scale"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: IntraDayContinuousDataPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartForDiscontinuousIntraDay2.default, { data: _this.props.intraDayDiscontinuousData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(500) } })
				)
			)
		);
	}
});

exports.default = IntraDayContinuousDataPage;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithFibonacciInteractiveIndicator = __webpack_require__(236);

var _CandleStickChartWithFibonacciInteractiveIndicator2 = _interopRequireDefault(_CandleStickChartWithFibonacciInteractiveIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var FibonacciInteractiveIndicatorPage = _react2.default.createClass({
	displayName: "FibonacciInteractiveIndicatorPage",

	statics: {
		title: "Fibonacci Retracement"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: FibonacciInteractiveIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(491) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithFibonacciInteractiveIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = FibonacciInteractiveIndicatorPage;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithForceIndexIndicator = __webpack_require__(237);

var _CandleStickChartWithForceIndexIndicator2 = _interopRequireDefault(_CandleStickChartWithForceIndexIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var ForceIndexIndicatorPage = _react2.default.createClass({
	displayName: "ForceIndexIndicatorPage",

	statics: {
		title: "ForceIndex"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: ForceIndexIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(493) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithForceIndexIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = ForceIndexIndicatorPage;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _GroupedBarChart = __webpack_require__(248);

var _GroupedBarChart2 = _interopRequireDefault(_GroupedBarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var GroupedBarChartPage = _react2.default.createClass({
	displayName: "GroupedBarChartPage",

	statics: {
		title: "Grouped Bar Chart"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: GroupedBarChartPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_GroupedBarChart2.default, { data: _this.props.groupedBarData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(494) } })
				)
			)
		);
	}
});

exports.default = GroupedBarChartPage;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _HeikinAshi = __webpack_require__(249);

var _HeikinAshi2 = _interopRequireDefault(_HeikinAshi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var HeikinAshiPage = _react2.default.createClass({
	displayName: "HeikinAshiPage",

	statics: {
		title: 'Heikin Ashi'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: HeikinAshiPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(495) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_HeikinAshi2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = HeikinAshiPage;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _HorizontalBarChart = __webpack_require__(250);

var _HorizontalBarChart2 = _interopRequireDefault(_HorizontalBarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var HorizontalBarChartPage = _react2.default.createClass({
	displayName: "HorizontalBarChartPage",

	statics: {
		title: "Horizontal Bar Chart"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: HorizontalBarChartPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_HorizontalBarChart2.default, { data: _this.props.horizontalBarData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(496) } })
				)
			)
		);
	}
});

exports.default = HorizontalBarChartPage;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _HorizontalStackedBarChart = __webpack_require__(251);

var _HorizontalStackedBarChart2 = _interopRequireDefault(_HorizontalStackedBarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var HorizontalBarChartPage = _react2.default.createClass({
	displayName: "HorizontalBarChartPage",

	statics: {
		title: "Horizontal Stacked Bar"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: HorizontalBarChartPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_HorizontalStackedBarChart2.default, { data: _this.props.horizontalGroupedBarData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(497) } })
				)
			)
		);
	}
});

exports.default = HorizontalBarChartPage;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartForContinuousIntraDay = __webpack_require__(228);

var _CandleStickChartForContinuousIntraDay2 = _interopRequireDefault(_CandleStickChartForContinuousIntraDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var IntraDayContinuousDataPage = _react2.default.createClass({
	displayName: "IntraDayContinuousDataPage",

	statics: {
		title: "Intra day with Continuous scale"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: IntraDayContinuousDataPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartForContinuousIntraDay2.default, { data: _this.props.intraDayContinuousData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(499) } })
				)
			)
		);
	}
});

exports.default = IntraDayContinuousDataPage;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _Kagi = __webpack_require__(96);

var _Kagi2 = _interopRequireDefault(_Kagi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var KagiPage = _react2.default.createClass({
	displayName: "KagiPage",

	statics: {
		title: 'Kagi'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: KagiPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(501) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_Kagi2.default, { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = KagiPage;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _LineAndScatterChart = __webpack_require__(253);

var _LineAndScatterChart2 = _interopRequireDefault(_LineAndScatterChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var LineAndScatterChartPage = _react2.default.createClass({
	displayName: "LineAndScatterChartPage",

	statics: {
		title: 'Line & Scatter'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: LineAndScatterChartPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_LineAndScatterChart2.default, { data: _this.props.compareData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(512) } })
				)
			)
		);
	}
});

exports.default = LineAndScatterChartPage;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartPanToLoadMore = __webpack_require__(229);

var _CandleStickChartPanToLoadMore2 = _interopRequireDefault(_CandleStickChartPanToLoadMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var LoadMoreDataPage = _react2.default.createClass({
	displayName: "LoadMoreDataPage",

	statics: {
		title: 'Load more data on pan'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: LoadMoreDataPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_CandleStickChartPanToLoadMore2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = LoadMoreDataPage;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithEdge = __webpack_require__(93);

var _CandleStickChartWithEdge2 = _interopRequireDefault(_CandleStickChartWithEdge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var LotsOfDataPage = _react2.default.createClass({
	displayName: "LotsOfDataPage",

	statics: {
		title: 'Lots of data'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: LotsOfDataPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(502) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithEdge2.default, { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = LotsOfDataPage;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithMACDIndicator = __webpack_require__(94);

var _CandleStickChartWithMACDIndicator2 = _interopRequireDefault(_CandleStickChartWithMACDIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var MACDIndicatorPage = _react2.default.createClass({
	displayName: "MACDIndicatorPage",

	statics: {
		title: "MACD"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: MACDIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(505) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithMACDIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = MACDIndicatorPage;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithMA = __webpack_require__(241);

var _CandleStickChartWithMA2 = _interopRequireDefault(_CandleStickChartWithMA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var MAOverlayPage = _react2.default.createClass({
	displayName: "MAOverlayPage",

	statics: {
		title: 'Moving Average'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: MAOverlayPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ type: "hybrid" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithMA2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(507) } })
				)
			)
		);
	}
});

exports.default = MAOverlayPage;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _AreaChartWithZoomPan = __webpack_require__(224);

var _AreaChartWithZoomPan2 = _interopRequireDefault(_AreaChartWithZoomPan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var MiscChartsPage = _react2.default.createClass({
	displayName: "MiscChartsPage",

	statics: {
		title: 'Misc Charts'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: MiscChartsPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(513) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_AreaChartWithZoomPan2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = MiscChartsPage;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithHoverTooltip = __webpack_require__(239);

var _CandleStickChartWithHoverTooltip2 = _interopRequireDefault(_CandleStickChartWithHoverTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var AnnotationsPage = _react2.default.createClass({
	displayName: "AnnotationsPage",

	statics: {
		title: "Hover Tooltip"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: AnnotationsPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithHoverTooltip2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(498) } })
				)
			)
		);
	}
});

exports.default = AnnotationsPage;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithCHMousePointer = __webpack_require__(233);

var _CandleStickChartWithCHMousePointer2 = _interopRequireDefault(_CandleStickChartWithCHMousePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MousePointerPage = _react2.default.createClass({
	displayName: "MousePointerPage",

	statics: {
		title: 'Mouse pointer'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: MousePointerPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_CandleStickChartWithCHMousePointer2.default, { data: this.props.someData, type: "svg" })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(506) } })
				)
			)
		);
	}
});

exports.default = MousePointerPage;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _MovingAverageCrossOverAlgorithmV = __webpack_require__(254);

var _MovingAverageCrossOverAlgorithmV2 = _interopRequireDefault(_MovingAverageCrossOverAlgorithmV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var AnnotationsPage = _react2.default.createClass({
	displayName: "AnnotationsPage",

	statics: {
		title: "MA Crossover - Using text annotation"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: AnnotationsPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_MovingAverageCrossOverAlgorithmV2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(503) } })
				)
			)
		);
	}
});

exports.default = AnnotationsPage;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _MovingAverageCrossOverAlgorithmV = __webpack_require__(255);

var _MovingAverageCrossOverAlgorithmV2 = _interopRequireDefault(_MovingAverageCrossOverAlgorithmV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var MovingAverageCrossoverAlgorithmPage2 = _react2.default.createClass({
	displayName: "MovingAverageCrossoverAlgorithmPage2",

	statics: {
		title: "MA Crossover - Using svg shape"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: MovingAverageCrossoverAlgorithmPage2.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_MovingAverageCrossOverAlgorithmV2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(504) } })
				)
			)
		);
	}
});

exports.default = MovingAverageCrossoverAlgorithmPage2;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverviewPage = _react2.default.createClass({
	displayName: "OverviewPage",

	statics: {
		title: 'Overview'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: OverviewPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(508) } })
				)
			)
		);
	}
});

exports.default = OverviewPage;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _PointAndFigure = __webpack_require__(97);

var _PointAndFigure2 = _interopRequireDefault(_PointAndFigure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var PointAndFigurePage = _react2.default.createClass({
	displayName: "PointAndFigurePage",

	statics: {
		title: 'Point & Figure'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: PointAndFigurePage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(509) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_PointAndFigure2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = PointAndFigurePage;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithRSIIndicator = __webpack_require__(242);

var _CandleStickChartWithRSIIndicator2 = _interopRequireDefault(_CandleStickChartWithRSIIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var RSIIndicatorPage = _react2.default.createClass({
	displayName: "RSIIndicatorPage",

	statics: {
		title: "RSI and ATR"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: RSIIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithRSIIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(511) } })
				)
			)
		);
	}
});

exports.default = RSIIndicatorPage;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _Renko = __webpack_require__(98);

var _Renko2 = _interopRequireDefault(_Renko);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var RenkoPage = _react2.default.createClass({
	displayName: "RenkoPage",

	statics: {
		title: 'Renko'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: RenkoPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(510) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_Renko2.default, { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = RenkoPage;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _StackedBarChart = __webpack_require__(260);

var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var StackedBarChartPage = _react2.default.createClass({
	displayName: "StackedBarChartPage",

	statics: {
		title: "Stacked Bar Chart"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: StackedBarChartPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_StackedBarChart2.default, { data: _this.props.groupedBarData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(514) } })
				)
			)
		);
	}
});

exports.default = StackedBarChartPage;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithFullStochasticsIndicator = __webpack_require__(238);

var _CandleStickChartWithFullStochasticsIndicator2 = _interopRequireDefault(_CandleStickChartWithFullStochasticsIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;
var SaveChartAsImage = _reactStockcharts.helper.SaveChartAsImage;


var StochasticIndicatorPage = _react2.default.createClass({
	displayName: "StochasticIndicatorPage",

	statics: {
		title: "Stochastic Oscillator"
	},
	saveChartAsImage: function saveChartAsImage(e) {
		var container = _react2.default.findDOMNode(this.refs.container);
		SaveChartAsImage.saveChartAsImage(container);
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: StochasticIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						"button",
						{ type: "button", className: "btn btn-success btn-lg pull-right", onClick: this.saveChartAsImage },
						_react2.default.createElement("span", { className: "glyphicon glyphicon-floppy-save", "aria-hidden": "true" })
					),
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithFullStochasticsIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(515) } })
				)
			)
		);
	}
});

exports.default = StochasticIndicatorPage;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithZoomPan = __webpack_require__(95);

var _CandleStickChartWithZoomPan2 = _interopRequireDefault(_CandleStickChartWithZoomPan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var SvgVsCanvasPage = _react2.default.createClass({
	displayName: "SvgVsCanvasPage",

	statics: {
		title: 'Svg vs Canvas'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: SvgVsCanvasPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(516) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ type: "svg" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithZoomPan2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = SvgVsCanvasPage;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithInteractiveIndicator = __webpack_require__(240);

var _CandleStickChartWithInteractiveIndicator2 = _interopRequireDefault(_CandleStickChartWithInteractiveIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;
var SaveChartAsImage = _reactStockcharts.helper.SaveChartAsImage;


var TrendLineInteractiveIndicatorPage = _react2.default.createClass({
	displayName: "TrendLineInteractiveIndicatorPage",

	statics: {
		title: "Trendline"
	},
	saveChartAsImage: function saveChartAsImage(e) {
		var container = _react2.default.findDOMNode(this.refs.container);
		SaveChartAsImage.saveChartAsImage(container);
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: TrendLineInteractiveIndicatorPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(517) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						"button",
						{ type: "button", className: "btn btn-success btn-lg pull-right", onClick: this.saveChartAsImage },
						_react2.default.createElement("span", { className: "glyphicon glyphicon-floppy-save", "aria-hidden": "true" })
					),
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithInteractiveIndicator2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = TrendLineInteractiveIndicatorPage;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithUpdatingData = __webpack_require__(243);

var _CandleStickChartWithUpdatingData2 = _interopRequireDefault(_CandleStickChartWithUpdatingData);

var _KagiWithUpdatingData = __webpack_require__(252);

var _KagiWithUpdatingData2 = _interopRequireDefault(_KagiWithUpdatingData);

var _PointAndFigureWithUpdatingData = __webpack_require__(258);

var _PointAndFigureWithUpdatingData2 = _interopRequireDefault(_PointAndFigureWithUpdatingData);

var _RenkoWithUpdatingData = __webpack_require__(259);

var _RenkoWithUpdatingData2 = _interopRequireDefault(_RenkoWithUpdatingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var UpdatingDataPage = _react2.default.createClass({
	displayName: "UpdatingDataPage",

	statics: {
		title: 'Updating Data'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: UpdatingDataPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(518) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithUpdatingData2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_KagiWithUpdatingData2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_PointAndFigureWithUpdatingData2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						null,
						function (type) {
							return _react2.default.createElement(_RenkoWithUpdatingData2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			)
		);
	}
});

exports.default = UpdatingDataPage;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickStockScaleChartWithVolumeBarV = __webpack_require__(245);

var _CandleStickStockScaleChartWithVolumeBarV2 = _interopRequireDefault(_CandleStickStockScaleChartWithVolumeBarV);

var _CandleStickStockScaleChartWithVolumeBarV3 = __webpack_require__(246);

var _CandleStickStockScaleChartWithVolumeBarV4 = _interopRequireDefault(_CandleStickStockScaleChartWithVolumeBarV3);

var _CandleStickStockScaleChartWithVolumeBarV5 = __webpack_require__(247);

var _CandleStickStockScaleChartWithVolumeBarV6 = _interopRequireDefault(_CandleStickStockScaleChartWithVolumeBarV5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBarPage = _react2.default.createClass({
	displayName: "VolumeBarPage",

	statics: {
		title: 'Volume bar'
	},
	render: function render() {
		return _react2.default.createElement(
			_contentSection2.default,
			{ title: VolumeBarPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(521) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_CandleStickStockScaleChartWithVolumeBarV2.default, { data: this.props.someData, type: "svg" })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(522) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_CandleStickStockScaleChartWithVolumeBarV4.default, { data: this.props.someData, type: "svg" })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(519) } })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(_CandleStickStockScaleChartWithVolumeBarV6.default, { data: this.props.someData, type: "svg" })
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(520) } })
				)
			)
		);
	}
});

exports.default = VolumeBarPage;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _VolumeProfileBySessionChart = __webpack_require__(261);

var _VolumeProfileBySessionChart2 = _interopRequireDefault(_VolumeProfileBySessionChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var VolumeProfileBySessionPage = _react2.default.createClass({
	displayName: "VolumeProfileBySessionPage",

	statics: {
		title: "Volume profile by Session"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: VolumeProfileBySessionPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_VolumeProfileBySessionChart2.default, { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(523) } })
				)
			)
		);
	}
});

exports.default = VolumeProfileBySessionPage;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _VolumeProfileChart = __webpack_require__(262);

var _VolumeProfileChart2 = _interopRequireDefault(_VolumeProfileChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var VolumeProfilePage = _react2.default.createClass({
	displayName: "VolumeProfilePage",

	statics: {
		title: "Volume profile"
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: VolumeProfilePage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_VolumeProfileChart2.default, { data: _this.props.lotsOfData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(524) } })
				)
			)
		);
	}
});

exports.default = VolumeProfilePage;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

var _contentSection = __webpack_require__(4);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _row = __webpack_require__(3);

var _row2 = _interopRequireDefault(_row);

var _section = __webpack_require__(5);

var _section2 = _interopRequireDefault(_section);

var _CandleStickChartWithZoomPan = __webpack_require__(95);

var _CandleStickChartWithZoomPan2 = _interopRequireDefault(_CandleStickChartWithZoomPan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChooser = _reactStockcharts.helper.TypeChooser;


var ZoomAndPanPage = _react2.default.createClass({
	displayName: "ZoomAndPanPage",

	statics: {
		title: 'Zoom and Pan'
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_contentSection2.default,
			{ title: ZoomAndPanPage.title },
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement(
						TypeChooser,
						{ ref: "container" },
						function (type) {
							return _react2.default.createElement(_CandleStickChartWithZoomPan2.default, { data: _this.props.someData, type: type });
						}
					)
				)
			),
			_react2.default.createElement(
				_row2.default,
				null,
				_react2.default.createElement(
					_section2.default,
					{ colSpan: 2 },
					_react2.default.createElement("aside", { dangerouslySetInnerHTML: { __html: __webpack_require__(525) } })
				)
			)
		);
	}
});

exports.default = ZoomAndPanPage;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_React$Component) {
	_inherits(SideBar, _React$Component);

	function SideBar() {
		_classCallCheck(this, SideBar);

		return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
	}

	_createClass(SideBar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "col-sm-3 col-md-2 sidebar" },
				this.props.children
			);
		}
	}]);

	return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

/***/ },
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Scale = __webpack_require__(14);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaSeries = _reactStockcharts.series.AreaSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var AreaChart = function (_React$Component) {
	_inherits(AreaChart, _React$Component);

	function AreaChart() {
		_classCallCheck(this, AreaChart);

		return _possibleConstructorReturn(this, (AreaChart.__proto__ || Object.getPrototypeOf(AreaChart)).apply(this, arguments));
	}

	_createClass(AreaChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 },
					seriesName: "MSFT",
					data: data, type: type,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: (0, _d3Scale.scaleTime)(),
					xExtents: [new Date(2011, 0, 1), new Date(2013, 0, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 0, yExtents: function yExtents(d) {
							return d.close;
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(AreaSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} })
				)
			);
		}
	}]);

	return AreaChart;
}(_react2.default.Component);

/*

*/

AreaChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

AreaChart.defaultProps = {
	type: "svg"
};
AreaChart = fitWidth(AreaChart);

exports.default = AreaChart;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Scale = __webpack_require__(14);

var _d3Format = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaSeries = _reactStockcharts.series.AreaSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var AreaChartWithYPercent = function (_React$Component) {
	_inherits(AreaChartWithYPercent, _React$Component);

	function AreaChartWithYPercent() {
		_classCallCheck(this, AreaChartWithYPercent);

		return _possibleConstructorReturn(this, (AreaChartWithYPercent.__proto__ || Object.getPrototypeOf(AreaChartWithYPercent)).apply(this, arguments));
	}

	_createClass(AreaChartWithYPercent, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 },
					seriesName: "MSFT",
					data: data, type: type,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: (0, _d3Scale.scaleTime)(),
					xExtents: [new Date(2011, 0, 1), new Date(2013, 0, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 0, yExtents: function yExtents(d) {
							return d.close;
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", percentScale: true, tickFormat: (0, _d3Format.format)(".0%") }),
					_react2.default.createElement(AreaSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} })
				)
			);
		}
	}]);

	return AreaChartWithYPercent;
}(_react2.default.Component);

AreaChartWithYPercent.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

AreaChartWithYPercent.defaultProps = {
	type: "svg"
};
AreaChartWithYPercent = fitWidth(AreaChartWithYPercent);

exports.default = AreaChartWithYPercent;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaSeries = _reactStockcharts.series.AreaSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var SingleValueTooltip = _reactStockcharts.tooltip.SingleValueTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var AreaChartWithEdge = function (_React$Component) {
	_inherits(AreaChartWithEdge, _React$Component);

	function AreaChartWithEdge() {
		_classCallCheck(this, AreaChartWithEdge);

		return _possibleConstructorReturn(this, (AreaChartWithEdge.__proto__ || Object.getPrototypeOf(AreaChartWithEdge)).apply(this, arguments));
	}

	_createClass(AreaChartWithEdge, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(AreaSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} }),
					_react2.default.createElement(SingleValueTooltip, {
						xLabel: "Date" /* xLabel is optional, absense will not show the x value */, yLabel: "C",
						yAccessor: function yAccessor(d) {
							return d.close;
						},
						xDisplayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d"), yDisplayFormat: (0, _d3Format.format)(".2f")
						/* valueStroke="green" - optional prop */
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 0] }),
					_react2.default.createElement(SingleValueTooltip, {
						yLabel: "Volume", yAccessor: function yAccessor(d) {
							return d.volume;
						},
						origin: [-40, 20] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						stroke: true, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.4,
						widthRatio: 1 })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return AreaChartWithEdge;
}(_react2.default.Component);

AreaChartWithEdge.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

AreaChartWithEdge.defaultProps = {
	type: "svg"
};
AreaChartWithEdge = fitWidth(AreaChartWithEdge);

exports.default = AreaChartWithEdge;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Scale = __webpack_require__(14);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarSeries = _reactStockcharts.series.BarSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var BarChart = function (_React$Component) {
	_inherits(BarChart, _React$Component);

	function BarChart() {
		_classCallCheck(this, BarChart);

		return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).apply(this, arguments));
	}

	_createClass(BarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var unsortedData = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var data = unsortedData.slice().sort(function (a, b) {
				return a.income - b.income;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(list) {
						return list.map(function (d) {
							return d.x;
						});
					},
					data: data,
					xAccessor: function xAccessor(d) {
						return d.x;
					}, xScale: (0, _d3Scale.scalePoint)(),
					padding: 1 },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return [0, d.y];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.y;
						} })
				)
			);
		}
	}]);

	return BarChart;
}(_react2.default.Component);

BarChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

BarChart.defaultProps = {
	type: "svg"
};

BarChart = fitWidth(BarChart);

exports.default = BarChart;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Collection = __webpack_require__(16);

var _d3Scale = __webpack_require__(14);

var _d3Format = __webpack_require__(6);

var _d3Array = __webpack_require__(9);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScatterSeries = _reactStockcharts.series.ScatterSeries;
var CircleMarker = _reactStockcharts.series.CircleMarker;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var BubbleChart = function (_React$Component) {
	_inherits(BubbleChart, _React$Component);

	function BubbleChart() {
		_classCallCheck(this, BubbleChart);

		return _possibleConstructorReturn(this, (BubbleChart.__proto__ || Object.getPrototypeOf(BubbleChart)).apply(this, arguments));
	}

	_createClass(BubbleChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var unsortedData = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var data = unsortedData.slice().sort(function (a, b) {
				return a.income - b.income;
			});
			var r = (0, _d3Scale.scaleLinear)().range([2, 20]).domain((0, _d3Array.extent)(data, function (d) {
				return d.population;
			}));

			var f = (0, _d3Scale.scaleOrdinal)(_d3Scale.schemeCategory10).domain((0, _d3Collection.set)(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d) {
				return f(d.region);
			};
			var radius = function radius(d) {
				return r(d.population);
			};
			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "Wealth & Health of Nations",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.income;
					}, xScale: (0, _d3Scale.scaleLog)(),
					padding: { left: 20, right: 20 }
				},
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return d.lifeExpectancy;
						},
						yMousePointerRectWidth: 45,
						padding: { top: 20, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 2, tickFormat: (0, _d3Format.format)(",d") }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(ScatterSeries, { yAccessor: function yAccessor(d) {
							return d.lifeExpectancy;
						}, marker: CircleMarker,
						fill: fill,
						markerProps: { r: radius, fill: fill } }),
					_react2.default.createElement(MouseCoordinateX, { snapX: false,
						at: "bottom",
						orient: "bottom",
						rectWidth: 50,
						displayFormat: (0, _d3Format.format)(".0f") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".2f") })
				),
				_react2.default.createElement(CrossHairCursor, { snapX: false })
			);
		}
	}]);

	return BubbleChart;
}(_react2.default.Component);

BubbleChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

BubbleChart.defaultProps = {
	type: "svg"
};
BubbleChart = fitWidth(BubbleChart);

exports.default = BubbleChart;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Scale = __webpack_require__(14);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChart = function (_React$Component) {
	_inherits(CandleStickChart, _React$Component);

	function CandleStickChart() {
		_classCallCheck(this, CandleStickChart);

		return _possibleConstructorReturn(this, (CandleStickChart.__proto__ || Object.getPrototypeOf(CandleStickChart)).apply(this, arguments));
	}

	_createClass(CandleStickChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var type = _props.type;
			var width = _props.width;
			var data = _props.data;
			var ratio = _props.ratio;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: (0, _d3Scale.scaleTime)(),
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 1)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5 }),
					_react2.default.createElement(CandlestickSeries, null)
				)
			);
		}
	}]);

	return CandleStickChart;
}(_react2.default.Component);

CandleStickChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChart.defaultProps = {
	type: "svg"
};
CandleStickChart = fitWidth(CandleStickChart);

exports.default = CandleStickChart;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Scale = __webpack_require__(14);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartForContinuousIntraDay = function (_React$Component) {
	_inherits(CandleStickChartForContinuousIntraDay, _React$Component);

	function CandleStickChartForContinuousIntraDay() {
		_classCallCheck(this, CandleStickChartForContinuousIntraDay);

		return _possibleConstructorReturn(this, (CandleStickChartForContinuousIntraDay.__proto__ || Object.getPrototypeOf(CandleStickChartForContinuousIntraDay)).apply(this, arguments));
	}

	_createClass(CandleStickChartForContinuousIntraDay, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScale: (0, _d3Scale.scaleTime)() },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume50.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume50.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateX, {
						rectWidth: 60,
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%H:%M:%S") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0], xDisplayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d %H:%M:%S") }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartForContinuousIntraDay;
}(_react2.default.Component);

CandleStickChartForContinuousIntraDay.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartForContinuousIntraDay.defaultProps = {
	type: "svg"
};
CandleStickChartForContinuousIntraDay = fitWidth(CandleStickChartForContinuousIntraDay);

exports.default = CandleStickChartForContinuousIntraDay;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var MACDSeries = _reactStockcharts.series.MACDSeries;
var discontinuousTimeScaleProviderBuilder = _reactStockcharts.scale.discontinuousTimeScaleProviderBuilder;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var macd = _reactStockcharts.indicator.macd;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;
var head = _reactStockcharts.utils.head;
var last = _reactStockcharts.utils.last;


function getMaxUndefined(calculators) {
	return calculators.map(function (each) {
		return each.undefinedLength();
	}).reduce(function (a, b) {
		return Math.max(a, b);
	});
}
var LENGTH_TO_SHOW = 180;

var CandleStickChartPanToLoadMore = function (_React$Component) {
	_inherits(CandleStickChartPanToLoadMore, _React$Component);

	function CandleStickChartPanToLoadMore(props) {
		_classCallCheck(this, CandleStickChartPanToLoadMore);

		var _this = _possibleConstructorReturn(this, (CandleStickChartPanToLoadMore.__proto__ || Object.getPrototypeOf(CandleStickChartPanToLoadMore)).call(this, props));

		var inputData = props.data;


		var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
			d.ema26 = c;
		}).accessor(function (d) {
			return d.ema26;
		});

		var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
			d.ema12 = c;
		}).accessor(function (d) {
			return d.ema12;
		});

		var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
			d.macd = c;
		}).accessor(function (d) {
			return d.macd;
		});

		var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
			d.smaVolume50 = c;
		}).accessor(function (d) {
			return d.smaVolume50;
		});

		var maxWindowSize = getMaxUndefined([ema26, ema12, macdCalculator, smaVolume50]);
		/* SERVER - START */
		var dataToCalculate = inputData.slice(-LENGTH_TO_SHOW - maxWindowSize);

		var calculatedData = ema26(ema12(macdCalculator(smaVolume50(dataToCalculate))));
		var indexCalculator = discontinuousTimeScaleProviderBuilder().indexCalculator();

		// console.log(inputData.length, dataToCalculate.length, maxWindowSize)

		var _indexCalculator = indexCalculator(calculatedData);

		var index = _indexCalculator.index;
		var interval = _indexCalculator.interval;
		/* SERVER - END */

		var xScaleProvider = discontinuousTimeScaleProviderBuilder().withIndex(index).withInterval(interval);

		var _xScaleProvider = xScaleProvider(calculatedData.slice(-LENGTH_TO_SHOW));

		var linearData = _xScaleProvider.data;
		var xScale = _xScaleProvider.xScale;
		var xAccessor = _xScaleProvider.xAccessor;
		var displayXAccessor = _xScaleProvider.displayXAccessor;

		// console.log(head(linearData), last(linearData))
		// console.log(linearData.length)

		_this.state = {
			ema26: ema26,
			ema12: ema12,
			macdCalculator: macdCalculator,
			smaVolume50: smaVolume50,
			linearData: linearData,
			data: linearData,
			xScale: xScale,
			xAccessor: xAccessor, displayXAccessor: displayXAccessor
		};
		_this.handleDownloadMore = _this.handleDownloadMore.bind(_this);
		return _this;
	}

	_createClass(CandleStickChartPanToLoadMore, [{
		key: "handleDownloadMore",
		value: function handleDownloadMore(start, end) {
			var _this2 = this;

			// console.log("rows to download", rowsToDownload, start, end)
			var _state = this.state;
			var prevData = _state.data;
			var ema26 = _state.ema26;
			var ema12 = _state.ema12;
			var macdCalculator = _state.macdCalculator;
			var smaVolume50 = _state.smaVolume50;
			var inputData = this.props.data;


			if (inputData.length === prevData.length) return;

			var rowsToDownload = end - Math.ceil(start);

			var maxWindowSize = getMaxUndefined([ema26, ema12, macdCalculator, smaVolume50]);

			/* SERVER - START */
			var dataToCalculate = inputData.slice(-rowsToDownload - maxWindowSize - prevData.length, -prevData.length);

			var calculatedData = ema26(ema12(macdCalculator(smaVolume50(dataToCalculate))));
			var indexCalculator = discontinuousTimeScaleProviderBuilder().initialIndex(Math.ceil(start)).indexCalculator();

			var _indexCalculator2 = indexCalculator(calculatedData.slice(-rowsToDownload).concat(prevData));

			var index = _indexCalculator2.index;
			var interval = _indexCalculator2.interval;
			/* SERVER - END */

			var xScaleProvider = discontinuousTimeScaleProviderBuilder().initialIndex(Math.ceil(start)).withIndex(index).withInterval(interval);

			var _xScaleProvider2 = xScaleProvider(calculatedData.slice(-rowsToDownload).concat(prevData));

			var linearData = _xScaleProvider2.data;
			var xScale = _xScaleProvider2.xScale;
			var xAccessor = _xScaleProvider2.xAccessor;
			var displayXAccessor = _xScaleProvider2.displayXAccessor;

			// console.log(linearData.length)

			setTimeout(function () {
				// simulate a lag for ajax
				_this2.setState({
					data: linearData,
					xScale: xScale,
					xAccessor: xAccessor,
					displayXAccessor: displayXAccessor
				});
			}, 300);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;
			var _state2 = this.state;
			var data = _state2.data;
			var ema26 = _state2.ema26;
			var ema12 = _state2.ema12;
			var macdCalculator = _state2.macdCalculator;
			var smaVolume50 = _state2.smaVolume50;
			var xScale = _state2.xScale;
			var xAccessor = _state2.xAccessor;
			var displayXAccessor = _state2.displayXAccessor;


			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xScale: xScale, xAccessor: xAccessor, displayXAccessor: displayXAccessor,
					onLoadMore: this.handleDownloadMore },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MACDSeries, { calculator: macdCalculator }),
					_react2.default.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartPanToLoadMore;
}(_react2.default.Component);

;

/*

*/

CandleStickChartPanToLoadMore.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartPanToLoadMore.defaultProps = {
	type: "svg"
};

CandleStickChartPanToLoadMore = fitWidth(CandleStickChartPanToLoadMore);

exports.default = CandleStickChartPanToLoadMore;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var Annotate = _reactStockcharts.annotation.Annotate;
var LabelAnnotation = _reactStockcharts.annotation.LabelAnnotation;
var Label = _reactStockcharts.annotation.Label;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithAnnotation = function (_React$Component) {
	_inherits(CandleStickChartWithAnnotation, _React$Component);

	function CandleStickChartWithAnnotation() {
		_classCallCheck(this, CandleStickChartWithAnnotation);

		return _possibleConstructorReturn(this, (CandleStickChartWithAnnotation.__proto__ || Object.getPrototypeOf(CandleStickChartWithAnnotation)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithAnnotation, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(13).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var annotationProps = {
				fontFamily: "Glyphicons Halflings",
				fontSize: 20,
				fill: "#060F8F",
				opacity: 0.8,
				text: "",
				y: function y(_ref) {
					var yScale = _ref.yScale;
					return yScale.range()[0];
				},
				onClick: console.log.bind(console),
				tooltip: function tooltip(d) {
					return (0, _d3TimeFormat.timeFormat)("%B")(d.date);
				}
			};

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				_react2.default.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: 30,
					fontSize: "30", text: "Chart title here" }),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: height - 45,
						fontSize: "12", text: "XAxis Label here" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(Label, { x: yAxisLabelX, y: yAxisLabelY,
						rotate: -90,
						fontSize: "12", text: "YAxis Label here" }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] }),
					_react2.default.createElement(Annotate, { "with": LabelAnnotation,
						when: function when(d) {
							return d.date.getDate() === 1;
						} /* some condition */,
						usingProps: annotationProps })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithAnnotation;
}(_react2.default.Component);

/*


*/

CandleStickChartWithAnnotation.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithAnnotation.defaultProps = {
	type: "svg"
};

CandleStickChartWithAnnotation = fitWidth(CandleStickChartWithAnnotation);

exports.default = CandleStickChartWithAnnotation;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var BollingerSeries = _reactStockcharts.series.BollingerSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var BollingerBandTooltip = _reactStockcharts.tooltip.BollingerBandTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var bollingerBand = _reactStockcharts.indicator.bollingerBand;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithBollingerBandOverlay = function (_React$Component) {
	_inherits(CandleStickChartWithBollingerBandOverlay, _React$Component);

	function CandleStickChartWithBollingerBandOverlay() {
		_classCallCheck(this, CandleStickChartWithBollingerBandOverlay);

		return _possibleConstructorReturn(this, (CandleStickChartWithBollingerBandOverlay.__proto__ || Object.getPrototypeOf(CandleStickChartWithBollingerBandOverlay)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithBollingerBandOverlay, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().windowSize(20) // optional will default to 10
			.sourcePath("close") // optional will default to close as the source
			.skipUndefined(true) // defaults to true
			.merge(function (d, c) {
				d.ema20 = c;
			}) // Required, if not provided, log a error
			.accessor(function (d) {
				return d.ema20;
			}) // Required, if not provided, log an error during calculation
			.stroke("blue"); // Optional

			var sma20 = sma().windowSize(20).sourcePath("close").merge(function (d, c) {
				d.sma20 = c;
			}).accessor(function (d) {
				return d.sma20;
			});

			var ema50 = ema().windowSize(50).sourcePath("close").merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume50 = sma().windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			}).stroke("#4682B4").fill("#4682B4");

			var bb = bollingerBand().merge(function (d, c) {
				d.bb = c;
			}).accessor(function (d) {
				return d.bb;
			});
			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [sma20, ema20, ema50, smaVolume50, bb],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, sma20.accessor(), ema20.accessor(), ema50.accessor(), bb.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: sma20.accessor(), stroke: sma20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(BollingerSeries, { calculator: bb }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: sma20.accessor(), fill: sma20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [sma20, ema20, ema50] }),
					_react2.default.createElement(BollingerBandTooltip, { origin: [-38, 60], calculator: bb })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithBollingerBandOverlay;
}(_react2.default.Component);

;

/*
*/

CandleStickChartWithBollingerBandOverlay.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithBollingerBandOverlay.defaultProps = {
	type: "svg"
};
CandleStickChartWithBollingerBandOverlay = fitWidth(CandleStickChartWithBollingerBandOverlay);

exports.default = CandleStickChartWithBollingerBandOverlay;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var MACDSeries = _reactStockcharts.series.MACDSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var macd = _reactStockcharts.indicator.macd;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;
var Brush = _reactStockcharts.interactive.Brush;


var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
	d.ema26 = c;
}).accessor(function (d) {
	return d.ema26;
});

var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
	d.ema12 = c;
}).accessor(function (d) {
	return d.ema12;
});

var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
	d.macd = c;
}).accessor(function (d) {
	return d.macd;
});

var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
	d.smaVolume50 = c;
}).accessor(function (d) {
	return d.smaVolume50;
});

var BRUSH_TYPE = "2D"; // Valid values = "2D", "1D"

var CandlestickChart = function (_React$Component) {
	_inherits(CandlestickChart, _React$Component);

	function CandlestickChart(props) {
		_classCallCheck(this, CandlestickChart);

		var _this = _possibleConstructorReturn(this, (CandlestickChart.__proto__ || Object.getPrototypeOf(CandlestickChart)).call(this, props));

		_this.handleBrush = _this.handleBrush.bind(_this);
		_this.onKeyPress = _this.onKeyPress.bind(_this);

		_this.state = {
			xExtents: [new Date(2012, 0, 3), new Date(2012, 5, 29)],
			yExtents: [function (d) {
				return [d.high, d.low];
			}, ema26.accessor(), ema12.accessor()],
			brushEnabled: true
		};
		return _this;
	}

	_createClass(CandlestickChart, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "onKeyPress",
		value: function onKeyPress(e) {
			var keyCode = e.which;
			console.log(keyCode);
			switch (keyCode) {
				case 27:
					{
						// ESC
						this.refs.brush.terminate();
					}
			}
		}
	}, {
		key: "handleBrush",
		value: function handleBrush(brushCoords, startAndEndItem, startAndEndMouseLocation, event) {
			console.log(arguments);
			var left = Math.min(brushCoords.x1, brushCoords.x2);
			var right = Math.max(brushCoords.x1, brushCoords.x2);

			var low = Math.min(brushCoords.y1, brushCoords.y2);
			var high = Math.max(brushCoords.y1, brushCoords.y2);

			// uncomment the line below to make the brush to zoom
			this.setState({
				xExtents: [left, right],
				yExtents: BRUSH_TYPE === "2D" ? [low, high] : this.state.yExtents,
				brushEnabled: false
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: this.state.xExtents,
					drawMode: this.state.brushEnabled },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 400,
						yExtents: this.state.yExtents,
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					_react2.default.createElement(Brush, { ref: "brush",
						enabled: true,
						type: BRUSH_TYPE,
						onBrush: this.handleBrush })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MACDSeries, { calculator: macdCalculator }),
					_react2.default.createElement(MACDTooltip, { forChart: 3, origin: [-38, 15], calculator: macdCalculator })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandlestickChart;
}(_react2.default.Component);

CandlestickChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandlestickChart.defaultProps = {
	type: "svg"
};

var CandleStickChartWithBrush = fitWidth(CandlestickChart);

exports.default = CandleStickChartWithBrush;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithCHMousePointer = function (_React$Component) {
	_inherits(CandleStickChartWithCHMousePointer, _React$Component);

	function CandleStickChartWithCHMousePointer() {
		_classCallCheck(this, CandleStickChartWithCHMousePointer);

		return _possibleConstructorReturn(this, (CandleStickChartWithCHMousePointer.__proto__ || Object.getPrototypeOf(CandleStickChartWithCHMousePointer)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithCHMousePointer, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}] },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithCHMousePointer;
}(_react2.default.Component);

;

/*


*/
CandleStickChartWithCHMousePointer.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithCHMousePointer.defaultProps = {
	type: "svg"
};
CandleStickChartWithCHMousePointer = fitWidth(CandleStickChartWithCHMousePointer);

exports.default = CandleStickChartWithCHMousePointer;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var MACDSeries = _reactStockcharts.series.MACDSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var macd = _reactStockcharts.indicator.macd;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;
var ClickCallback = _reactStockcharts.interactive.ClickCallback;

var CandlestickChart = function (_React$Component) {
	_inherits(CandlestickChart, _React$Component);

	function CandlestickChart() {
		_classCallCheck(this, CandlestickChart);

		return _possibleConstructorReturn(this, (CandlestickChart.__proto__ || Object.getPrototypeOf(CandlestickChart)).apply(this, arguments));
	}

	_createClass(CandlestickChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					_react2.default.createElement(ClickCallback, { enabled: true,
						onClick: function onClick(e) {
							console.log("mouse position = " + e.mouseXY, e);
						} })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MACDSeries, { calculator: macdCalculator }),
					_react2.default.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandlestickChart;
}(_react2.default.Component);

CandlestickChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandlestickChart.defaultProps = {
	type: "svg"
};

var CandleStickChartWithClickHandlerCallback = fitWidth(CandlestickChart);

exports.default = CandleStickChartWithClickHandlerCallback;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var CompareSeries = _reactStockcharts.series.CompareSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var SingleValueTooltip = _reactStockcharts.tooltip.SingleValueTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var compare = _reactStockcharts.indicator.compare;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithCompare = function (_React$Component) {
	_inherits(CandleStickChartWithCompare, _React$Component);

	function CandleStickChartWithCompare() {
		_classCallCheck(this, CandleStickChartWithCompare);

		return _possibleConstructorReturn(this, (CandleStickChartWithCompare.__proto__ || Object.getPrototypeOf(CandleStickChartWithCompare)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithCompare, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var compareCalculator = compare().base(function (d) {
				return d.close;
			}).mainKeys(["open", "high", "low", "close"]).compareKeys(["AAPLClose", "SP500Close"]).accessor(function (d) {
				return d.compare;
			}).merge(function (d, c) {
				d.compare = c;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [smaVolume50], postCalculator: compareCalculator,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return d.compare;
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5, tickFormat: (0, _d3Format.format)(".0%") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, { yAccessor: function yAccessor(d) {
							return d.compare;
						} }),
					_react2.default.createElement(LineSeries, { yAccessor: function yAccessor(d) {
							return d.compare.AAPLClose;
						}, stroke: "#ff7f0e" }),
					_react2.default.createElement(LineSeries, { yAccessor: function yAccessor(d) {
							return d.compare.SP500Close;
						}, stroke: "#2ca02c" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.compare.AAPLClose;
						}, fill: "#ff7f0e",
						displayFormat: (0, _d3Format.format)(".0%") }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.compare.SP500Close;
						}, fill: "#2ca02c",
						displayFormat: (0, _d3Format.format)(".0%") }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.compare.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						displayFormat: (0, _d3Format.format)(".0%") }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return d.AAPLClose;
						},
						yLabel: "AAPL",
						yDisplayFormat: (0, _d3Format.format)(".2f"),
						valueStroke: "#ff7f0e"
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 20] }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return d.SP500Close;
						},
						yLabel: "S&P 500",
						yDisplayFormat: (0, _d3Format.format)(".2f"),
						valueStroke: "#2ca02c"
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 35] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithCompare;
}(_react2.default.Component);

;

CandleStickChartWithCompare.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithCompare.defaultProps = {
	type: "svg"
};
CandleStickChartWithCompare = fitWidth(CandleStickChartWithCompare);

exports.default = CandleStickChartWithCompare;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var MACDSeries = _reactStockcharts.series.MACDSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var macd = _reactStockcharts.indicator.macd;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;
var FibonacciRetracement = _reactStockcharts.interactive.FibonacciRetracement;
var TrendLine = _reactStockcharts.interactive.TrendLine;

var CandleStickChartWithFibonacciInteractiveIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithFibonacciInteractiveIndicator, _React$Component);

	function CandleStickChartWithFibonacciInteractiveIndicator(props) {
		_classCallCheck(this, CandleStickChartWithFibonacciInteractiveIndicator);

		var _this = _possibleConstructorReturn(this, (CandleStickChartWithFibonacciInteractiveIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithFibonacciInteractiveIndicator)).call(this, props));

		_this.onKeyPress = _this.onKeyPress.bind(_this);
		_this.onFibComplete = _this.onFibComplete.bind(_this);
		_this.state = {
			enableFib: true
		};
		return _this;
	}

	_createClass(CandleStickChartWithFibonacciInteractiveIndicator, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "onFibComplete",
		value: function onFibComplete() {
			this.setState({
				enableFib: false
			});
		}
	}, {
		key: "onKeyPress",
		value: function onKeyPress(e) {
			var keyCode = e.which;
			switch (keyCode) {
				case 46:
					{
						// DEL
						this.refs.fib.removeLast();
						break;
					}
				case 27:
					{
						// ESC
						this.refs.fib.terminate();
						this.setState({
							enableFib: false
						});
						break;
					}
				case 68: // D - Draw Fib
				case 69:
					{
						// E - Enable Fib
						this.setState({
							enableFib: true
						});
						break;
					}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)],
					drawMode: this.state.enableFib },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					_react2.default.createElement(FibonacciRetracement, { ref: "fib",
						enabled: this.state.enableFib,
						type: "BOUND",
						onComplete: this.onFibComplete })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MACDSeries, { calculator: macdCalculator }),
					_react2.default.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithFibonacciInteractiveIndicator;
}(_react2.default.Component);

CandleStickChartWithFibonacciInteractiveIndicator.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithFibonacciInteractiveIndicator.defaultProps = {
	type: "svg"
};

CandleStickChartWithFibonacciInteractiveIndicator = fitWidth(CandleStickChartWithFibonacciInteractiveIndicator);

exports.default = CandleStickChartWithFibonacciInteractiveIndicator;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var RSISeries = _reactStockcharts.series.RSISeries;
var StraightLine = _reactStockcharts.series.StraightLine;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var SingleValueTooltip = _reactStockcharts.tooltip.SingleValueTooltip;
var RSITooltip = _reactStockcharts.tooltip.RSITooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
//console.log(indicator);

var forceIndex = _reactStockcharts.indicator.forceIndex;
var ema = _reactStockcharts.indicator.ema;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithForceIndexIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithForceIndexIndicator, _React$Component);

	function CandleStickChartWithForceIndexIndicator() {
		_classCallCheck(this, CandleStickChartWithForceIndexIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithForceIndexIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithForceIndexIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithForceIndexIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var fi = forceIndex().merge(function (d, c) {
				d.fi = c;
			}).accessor(function (d) {
				return d.fi;
			});

			var fiEMA13 = ema().id(1).windowSize(13).sourcePath("fi").merge(function (d, c) {
				d.fiEMA13 = c;
			}).accessor(function (d) {
				return d.fiEMA13;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 550,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [fi, fiEMA13],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 300,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, right: 0, bottom: 20, left: 0 } },
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, -10] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 350];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.5 })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 100,
						yExtents: fi.accessor(),
						origin: function origin(w, h) {
							return [0, h - 200];
						},
						padding: { top: 10, right: 0, bottom: 10, left: 0 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(AreaSeries, { baseAt: function baseAt(scale) {
							return scale(0);
						}, yAccessor: fi.accessor() }),
					_react2.default.createElement(StraightLine, { yValue: 0 }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: fi.accessor(),
						yLabel: "ForceIndex (1)",
						yDisplayFormat: (0, _d3Format.format)(".4s"),
						origin: [-40, 15] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 4, height: 100,
						yExtents: fiEMA13.accessor(),
						origin: function origin(w, h) {
							return [0, h - 100];
						},
						padding: { top: 10, right: 0, bottom: 10, left: 0 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(AreaSeries, { baseAt: function baseAt(scale) {
							return scale(0);
						}, yAccessor: fiEMA13.accessor() }),
					_react2.default.createElement(StraightLine, { yValue: 0 }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: fiEMA13.accessor(),
						yLabel: "ForceIndex (" + fiEMA13.windowSize() + ")",
						yDisplayFormat: (0, _d3Format.format)(".4s"),
						origin: [-40, 15] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithForceIndexIndicator;
}(_react2.default.Component);

;

CandleStickChartWithForceIndexIndicator.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithForceIndexIndicator.defaultProps = {
	type: "svg"
};
CandleStickChartWithForceIndexIndicator = fitWidth(CandleStickChartWithForceIndexIndicator);

exports.default = CandleStickChartWithForceIndexIndicator;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _src = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _src.series.CandlestickSeries;
var BarSeries = _src.series.BarSeries;
var LineSeries = _src.series.LineSeries;
var AreaSeries = _src.series.AreaSeries;
var StochasticSeries = _src.series.StochasticSeries;
var discontinuousTimeScaleProvider = _src.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _src.coordinates.CrossHairCursor;
var MouseCoordinateX = _src.coordinates.MouseCoordinateX;
var MouseCoordinateY = _src.coordinates.MouseCoordinateY;
var CurrentCoordinate = _src.coordinates.CurrentCoordinate;
var EdgeIndicator = _src.coordinates.EdgeIndicator;
var OHLCTooltip = _src.tooltip.OHLCTooltip;
var MovingAverageTooltip = _src.tooltip.MovingAverageTooltip;
var StochasticTooltip = _src.tooltip.StochasticTooltip;
var XAxis = _src.axes.XAxis;
var YAxis = _src.axes.YAxis;
var stochasticOscillator = _src.indicator.stochasticOscillator;
var ema = _src.indicator.ema;
var fitWidth = _src.helper.fitWidth;

var CandleStickChartWithFullStochasticsIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithFullStochasticsIndicator, _React$Component);

	function CandleStickChartWithFullStochasticsIndicator() {
		_classCallCheck(this, CandleStickChartWithFullStochasticsIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithFullStochasticsIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithFullStochasticsIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithFullStochasticsIndicator, [{
		key: "render",
		value: function render() {
			var height = 750;
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var margin = { left: 70, right: 70, top: 20, bottom: 30 };

			var gridHeight = height - margin.top - margin.bottom;
			var gridWidth = width - margin.left - margin.right;

			var showGrid = true;
			var yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.1 } : {};
			var xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.1 } : {};

			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var slowSTO = stochasticOscillator().windowSize(14).kWindowSize(1).merge(function (d, c) {
				d.slowSTO = c;
			}).accessor(function (d) {
				return d.slowSTO;
			});
			var fastSTO = stochasticOscillator().windowSize(14).kWindowSize(3).merge(function (d, c) {
				d.fastSTO = c;
			}).accessor(function (d) {
				return d.fastSTO;
			});
			var fullSTO = stochasticOscillator().windowSize(14).kWindowSize(3).dWindowSize(4).merge(function (d, c) {
				d.fullSTO = c;
			}).accessor(function (d) {
				return d.fullSTO;
			});

			return _react2.default.createElement(
				_src.ChartCanvas,
				{ ratio: ratio, width: width, height: 750,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, slowSTO, fastSTO, fullSTO],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_src.Chart,
					{ id: 1, height: 325,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(YAxis, _extends({ axisAt: "right", orient: "right", ticks: 5 }, yGrid)),
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, -10] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 2,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						height: 100, origin: function origin(w, h) {
							return [0, h - 475];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 3,
						yExtents: slowSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 375];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: slowSTO.tickValues() }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(StochasticSeries, { calculator: slowSTO }),
					_react2.default.createElement(
						StochasticTooltip,
						{ calculator: slowSTO, origin: [-38, 15] },
						"Fast STO"
					)
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 4,
						yExtents: fastSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 250];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fastSTO.tickValues() }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(StochasticSeries, { calculator: fastSTO }),
					_react2.default.createElement(
						StochasticTooltip,
						{ calculator: fastSTO, origin: [-38, 15] },
						"Slow STO"
					)
				),
				_react2.default.createElement(
					_src.Chart,
					{ id: 5,
						yExtents: fullSTO.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 125];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, _extends({ axisAt: "bottom", orient: "bottom" }, xGrid)),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: fullSTO.tickValues() }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(StochasticSeries, { calculator: fullSTO }),
					_react2.default.createElement(
						StochasticTooltip,
						{ calculator: fullSTO, origin: [-38, 15] },
						"Full STO"
					)
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithFullStochasticsIndicator;
}(_react2.default.Component);

CandleStickChartWithFullStochasticsIndicator.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithFullStochasticsIndicator.defaultProps = {
	type: "svg"
};
CandleStickChartWithFullStochasticsIndicator = fitWidth(CandleStickChartWithFullStochasticsIndicator);

exports.default = CandleStickChartWithFullStochasticsIndicator;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var HoverTooltip = _reactStockcharts.tooltip.HoverTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;


var dateFormat = (0, _d3TimeFormat.timeFormat)("%Y-%m-%d");
var numberFormat = (0, _d3Format.format)(".2f");

function tooltipContent(calculators) {
	return function (_ref) {
		var currentItem = _ref.currentItem;
		var xAccessor = _ref.xAccessor;

		return {
			x: dateFormat(xAccessor(currentItem)),
			y: [{ label: "open", value: numberFormat(currentItem.open) }, { label: "high", value: numberFormat(currentItem.high) }, { label: "low", value: numberFormat(currentItem.low) }, { label: "close", value: numberFormat(currentItem.close) }].concat(calculators.map(function (each) {
				return {
					label: each.tooltipLabel(),
					value: numberFormat(each.accessor()(currentItem)),
					stroke: each.stroke()
				};
			}))
		};
	};
}

var CandleStickChartWithHoverTooltip = function (_React$Component) {
	_inherits(CandleStickChartWithHoverTooltip, _React$Component);

	function CandleStickChartWithHoverTooltip() {
		_classCallCheck(this, CandleStickChartWithHoverTooltip);

		return _possibleConstructorReturn(this, (CandleStickChartWithHoverTooltip.__proto__ || Object.getPrototypeOf(CandleStickChartWithHoverTooltip)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithHoverTooltip, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var annotationProps = {
				fontFamily: "Glyphicons Halflings",
				fontSize: 20,
				fill: "#060F8F",
				opacity: 0.8,
				text: "",
				y: function y(_ref2) {
					var yScale = _ref2.yScale;
					return yScale.range()[0] - 10;
				}
			};

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(HoverTooltip, { tooltipContent: tooltipContent([ema20, ema50]), bgwidth: 120, bgheight: 95 })
			);
		}
	}]);

	return CandleStickChartWithHoverTooltip;
}(_react2.default.Component);

CandleStickChartWithHoverTooltip.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithHoverTooltip.defaultProps = {
	type: "svg"
};
CandleStickChartWithHoverTooltip = fitWidth(CandleStickChartWithHoverTooltip);

exports.default = CandleStickChartWithHoverTooltip;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var MACDSeries = _reactStockcharts.series.MACDSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var macd = _reactStockcharts.indicator.macd;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;
var Interactive = _reactStockcharts.interactive.Interactive;
var TrendLine = _reactStockcharts.interactive.TrendLine;

var CandlestickChart = function (_React$Component) {
	_inherits(CandlestickChart, _React$Component);

	function CandlestickChart(props) {
		_classCallCheck(this, CandlestickChart);

		var _this = _possibleConstructorReturn(this, (CandlestickChart.__proto__ || Object.getPrototypeOf(CandlestickChart)).call(this, props));

		_this.onKeyPress = _this.onKeyPress.bind(_this);
		_this.onTrendLineComplete = _this.onTrendLineComplete.bind(_this);
		_this.state = {
			enableTrendLine: true
		};
		return _this;
	}

	_createClass(CandlestickChart, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.addEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			document.removeEventListener("keyup", this.onKeyPress);
		}
	}, {
		key: "onTrendLineComplete",
		value: function onTrendLineComplete() {
			this.setState({
				enableTrendLine: false
			});
		}
	}, {
		key: "onKeyPress",
		value: function onKeyPress(e) {
			var keyCode = e.which;
			console.log(keyCode);
			switch (keyCode) {
				case 46:
					{
						// DEL
						this.refs.trend.removeLast();
						break;
					}
				case 27:
					{
						// ESC
						this.refs.trend.terminate();
						this.setState({
							enableTrendLine: false
						});
						break;
					}
				case 68: // D - Draw trendline
				case 69:
					{
						// E - Enable trendline
						this.setState({
							enableTrendLine: true
						});
						break;
					}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, macdCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)],
					drawMode: this.state.enableTrendLine },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 400,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] }),
					_react2.default.createElement(TrendLine, { ref: "trend",
						enabled: this.state.enableTrendLine,
						type: "LINE",
						snap: true, snapTo: function snapTo(d) {
							return [d.high, d.low];
						},
						onStart: function onStart() {
							return console.log("START");
						},
						onComplete: this.onTrendLineComplete
					})
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MACDSeries, { calculator: macdCalculator }),
					_react2.default.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandlestickChart;
}(_react2.default.Component);

CandlestickChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandlestickChart.defaultProps = {
	type: "svg"
};

var CandleStickChartWithInteractiveIndicator = fitWidth(CandlestickChart);

exports.default = CandleStickChartWithInteractiveIndicator;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithMA = function (_React$Component) {
	_inherits(CandleStickChartWithMA, _React$Component);

	function CandleStickChartWithMA() {
		_classCallCheck(this, CandleStickChartWithMA);

		return _possibleConstructorReturn(this, (CandleStickChartWithMA.__proto__ || Object.getPrototypeOf(CandleStickChartWithMA)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithMA, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().windowSize(20) // optional will default to 10
			.sourcePath("close") // optional will default to close as the source
			.skipUndefined(true) // defaults to true
			.merge(function (d, c) {
				d.ema20 = c;
			}) // Required, if not provided, log a error
			.accessor(function (d) {
				return d.ema20;
			}) // Required, if not provided, log an error during calculation
			.stroke("blue"); // Optional

			var sma20 = sma().windowSize(20).sourcePath("close").merge(function (d, c) {
				d.sma20 = c;
			}).accessor(function (d) {
				return d.sma20;
			});

			var ema50 = ema().windowSize(50).sourcePath("close").merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume50 = sma().windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			}).stroke("#4682B4").fill("#4682B4");

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [sma20, ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, sma20.accessor(), ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: sma20.accessor(), stroke: sma20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: sma20.accessor(), fill: sma20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [sma20, ema20, ema50] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "red";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithMA;
}(_react2.default.Component);

CandleStickChartWithMA.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithMA.defaultProps = {
	type: "svg"
};
CandleStickChartWithMA = fitWidth(CandleStickChartWithMA);

exports.default = CandleStickChartWithMA;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var RSISeries = _reactStockcharts.series.RSISeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var SingleValueTooltip = _reactStockcharts.tooltip.SingleValueTooltip;
var RSITooltip = _reactStockcharts.tooltip.RSITooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var rsi = _reactStockcharts.indicator.rsi;
var atr = _reactStockcharts.indicator.atr;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickChartWithRSIIndicator = function (_React$Component) {
	_inherits(CandleStickChartWithRSIIndicator, _React$Component);

	function CandleStickChartWithRSIIndicator() {
		_classCallCheck(this, CandleStickChartWithRSIIndicator);

		return _possibleConstructorReturn(this, (CandleStickChartWithRSIIndicator.__proto__ || Object.getPrototypeOf(CandleStickChartWithRSIIndicator)).apply(this, arguments));
	}

	_createClass(CandleStickChartWithRSIIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			var ema26 = ema().id(0).windowSize(26).merge(function (d, c) {
				d.ema26 = c;
			}).accessor(function (d) {
				return d.ema26;
			});

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var smaVolume50 = sma().id(3).windowSize(10).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			var rsiCalculator = rsi().windowSize(14).merge(function (d, c) {
				d.rsi = c;
			}).accessor(function (d) {
				return d.rsi;
			});

			var atr14 = atr().windowSize(14).merge(function (d, c) {
				d.atr14 = c;
			}).accessor(function (d) {
				return d.atr14;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema26, ema12, smaVolume50, rsiCalculator, atr14],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 300,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema26.accessor(), ema12.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema26.accessor(), stroke: ema26.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema26.accessor(), fill: ema26.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema12.accessor(), fill: ema12.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema26, ema12] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						origin: function origin(w, h) {
							return [0, h - 400];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3,
						yExtents: rsiCalculator.domain(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 250];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2, tickValues: rsiCalculator.tickValues() }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(RSISeries, { calculator: rsiCalculator }),
					_react2.default.createElement(RSITooltip, { origin: [-38, 15], calculator: rsiCalculator })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 8,
						yExtents: atr14.accessor(),
						height: 125, origin: function origin(w, h) {
							return [0, h - 125];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(LineSeries, { yAccessor: atr14.accessor(), stroke: atr14.stroke() }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: atr14.accessor(),
						yLabel: "ATR (" + atr14.windowSize() + ")",
						yDisplayFormat: (0, _d3Format.format)(".2f")
						/* valueStroke={atr14.stroke()} - optional prop */
						/* labelStroke="#4682B4" - optional prop */
						, origin: [-40, 15] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return CandleStickChartWithRSIIndicator;
}(_react2.default.Component);

;

CandleStickChartWithRSIIndicator.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithRSIIndicator.defaultProps = {
	type: "svg"
};
CandleStickChartWithRSIIndicator = fitWidth(CandleStickChartWithRSIIndicator);

exports.default = CandleStickChartWithRSIIndicator;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CandleStickChartWithMACDIndicator = __webpack_require__(94);

var _CandleStickChartWithMACDIndicator2 = _interopRequireDefault(_CandleStickChartWithMACDIndicator);

var _updatingDataWrapper = __webpack_require__(45);

var _updatingDataWrapper2 = _interopRequireDefault(_updatingDataWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CandleStickChartWithUpdatingData = (0, _updatingDataWrapper2.default)(_CandleStickChartWithMACDIndicator2.default);

exports.default = CandleStickChartWithUpdatingData;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickStockScaleChart = function (_React$Component) {
	_inherits(CandleStickStockScaleChart, _React$Component);

	function CandleStickStockScaleChart() {
		_classCallCheck(this, CandleStickStockScaleChart);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChart.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChart)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var type = _props.type;
			var data = _props.data;
			var width = _props.width;
			var ratio = _props.ratio;


			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", ticks: 6 }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5 }),
					_react2.default.createElement(CandlestickSeries, null)
				)
			);
		}
	}]);

	return CandleStickStockScaleChart;
}(_react2.default.Component);

CandleStickStockScaleChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChart.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChart = fitWidth(CandleStickStockScaleChart);

exports.default = CandleStickStockScaleChart;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickStockScaleChartWithVolumeBarV1 = function (_React$Component) {
	_inherits(CandleStickStockScaleChartWithVolumeBarV1, _React$Component);

	function CandleStickStockScaleChartWithVolumeBarV1() {
		_classCallCheck(this, CandleStickStockScaleChartWithVolumeBarV1);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChartWithVolumeBarV1.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChartWithVolumeBarV1)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChartWithVolumeBarV1, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(CandlestickSeries, null)
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, yExtents: function yExtents(d) {
							return d.volume;
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						} })
				)
			);
		}
	}]);

	return CandleStickStockScaleChartWithVolumeBarV1;
}(_react2.default.Component);

CandleStickStockScaleChartWithVolumeBarV1.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChartWithVolumeBarV1.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChartWithVolumeBarV1 = fitWidth(CandleStickStockScaleChartWithVolumeBarV1);

exports.default = CandleStickStockScaleChartWithVolumeBarV1;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickStockScaleChartWithVolumeBarV2 = function (_React$Component) {
	_inherits(CandleStickStockScaleChartWithVolumeBarV2, _React$Component);

	function CandleStickStockScaleChartWithVolumeBarV2() {
		_classCallCheck(this, CandleStickStockScaleChartWithVolumeBarV2);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChartWithVolumeBarV2.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChartWithVolumeBarV2)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChartWithVolumeBarV2, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(CandlestickSeries, null)
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, origin: function origin(w, h) {
							return [0, h - 150];
						}, height: 150, yExtents: function yExtents(d) {
							return d.volume;
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "red";
						} })
				)
			);
		}
	}]);

	return CandleStickStockScaleChartWithVolumeBarV2;
}(_react2.default.Component);

CandleStickStockScaleChartWithVolumeBarV2.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChartWithVolumeBarV2.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChartWithVolumeBarV2 = fitWidth(CandleStickStockScaleChartWithVolumeBarV2);

exports.default = CandleStickStockScaleChartWithVolumeBarV2;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var CandleStickStockScaleChartWithVolumeBarV3 = function (_React$Component) {
	_inherits(CandleStickStockScaleChartWithVolumeBarV3, _React$Component);

	function CandleStickStockScaleChartWithVolumeBarV3() {
		_classCallCheck(this, CandleStickStockScaleChartWithVolumeBarV3);

		return _possibleConstructorReturn(this, (CandleStickStockScaleChartWithVolumeBarV3.__proto__ || Object.getPrototypeOf(CandleStickStockScaleChartWithVolumeBarV3)).apply(this, arguments));
	}

	_createClass(CandleStickStockScaleChartWithVolumeBarV3, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 600,
					margin: { left: 50, right: 50, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 400, yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false }),
					_react2.default.createElement(CandlestickSeries, null)
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, origin: function origin(w, h) {
							return [0, h - 150];
						}, height: 150, yExtents: function yExtents(d) {
							return d.volume;
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "red";
						} })
				)
			);
		}
	}]);

	return CandleStickStockScaleChartWithVolumeBarV3;
}(_react2.default.Component);

CandleStickStockScaleChartWithVolumeBarV3.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChartWithVolumeBarV3.defaultProps = {
	type: "svg"
};
CandleStickStockScaleChartWithVolumeBarV3 = fitWidth(CandleStickStockScaleChartWithVolumeBarV3);

exports.default = CandleStickStockScaleChartWithVolumeBarV3;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Scale = __webpack_require__(14);

var _d3Collection = __webpack_require__(16);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupedBarSeries = _reactStockcharts.series.GroupedBarSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var GroupedBarChart = function (_React$Component) {
	_inherits(GroupedBarChart, _React$Component);

	function GroupedBarChart() {
		_classCallCheck(this, GroupedBarChart);

		return _possibleConstructorReturn(this, (GroupedBarChart.__proto__ || Object.getPrototypeOf(GroupedBarChart)).apply(this, arguments));
	}

	_createClass(GroupedBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var f = (0, _d3Scale.scaleOrdinal)(_d3Scale.schemeCategory10).domain((0, _d3Collection.set)(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d, i) {
				return f(i);
			};
			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 40, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(list) {
						return list.map(function (d) {
							return d.x;
						});
					},
					data: data,
					xAccessor: function xAccessor(d) {
						return d.x;
					}, xScale: (0, _d3Scale.scalePoint)(),
					padding: 1 },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [0, function (d) {
							return [d.y1, d.y2, d.y3, d.y4];
						}] },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(GroupedBarSeries, { yAccessor: [function (d) {
							return d.y1;
						}, function (d) {
							return d.y2;
						}, function (d) {
							return d.y3;
						}, function (d) {
							return d.y4;
						}],
						fill: fill,
						spaceBetweenBar: 3 })
				)
			);
		}
	}]);

	return GroupedBarChart;
}(_react2.default.Component);

GroupedBarChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

GroupedBarChart.defaultProps = {
	type: "svg"
};
GroupedBarChart = fitWidth(GroupedBarChart);

exports.default = GroupedBarChart;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var heikinAshi = _reactStockcharts.indicator.heikinAshi;
var fitWidth = _reactStockcharts.helper.fitWidth;

var HaikinAshi = function (_React$Component) {
	_inherits(HaikinAshi, _React$Component);

	function HaikinAshi() {
		_classCallCheck(this, HaikinAshi);

		return _possibleConstructorReturn(this, (HaikinAshi.__proto__ || Object.getPrototypeOf(HaikinAshi)).apply(this, arguments));
	}

	_createClass(HaikinAshi, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ha = heikinAshi();
			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var smaVolume50 = sma().id(3).windowSize(50).sourcePath("volume").merge(function (d, c) {
				d.smaVolume50 = c;
			}).accessor(function (d) {
				return d.smaVolume50;
			});

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ha, ema20, ema50, smaVolume50],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".1f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema20.accessor(), fill: ema20.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: ema50.accessor(), fill: ema50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}, smaVolume50.accessor()],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(AreaSeries, { yAccessor: smaVolume50.accessor(), stroke: smaVolume50.stroke(), fill: smaVolume50.fill() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: smaVolume50.accessor(), fill: smaVolume50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: function yAccessor(d) {
							return d.volume;
						}, fill: "#9B0A47" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.volume;
						}, displayFormat: (0, _d3Format.format)(".4s"), fill: "#0F0F0F" }),
					_react2.default.createElement(EdgeIndicator, { itemType: "first", orient: "left", edgeAt: "left",
						yAccessor: smaVolume50.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume50.fill() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: smaVolume50.accessor(), displayFormat: (0, _d3Format.format)(".4s"), fill: smaVolume50.fill() })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return HaikinAshi;
}(_react2.default.Component);

HaikinAshi.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

HaikinAshi.defaultProps = {
	type: "svg"
};

exports.default = fitWidth(HaikinAshi);

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Array = __webpack_require__(9);

var _d3Scale = __webpack_require__(14);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarSeries = _reactStockcharts.series.BarSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var HorizontalBarChart = function (_React$Component) {
	_inherits(HorizontalBarChart, _React$Component);

	function HorizontalBarChart() {
		_classCallCheck(this, HorizontalBarChart);

		return _possibleConstructorReturn(this, (HorizontalBarChart.__proto__ || Object.getPrototypeOf(HorizontalBarChart)).apply(this, arguments));
	}

	_createClass(HorizontalBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 90, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(data) {
						return [0, (0, _d3Array.max)(data, function (d) {
							return d.x;
						})];
					},
					data: data,
					xScale: (0, _d3Scale.scaleLinear)(), flipXScale: false,
					useCrossHairStyleCursor: false },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: data.map(function (d) {
							return d.y;
						}),
						yScale: (0, _d3Scale.scalePoint)(),
						padding: 1 },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.y;
						}, xAccessor: function xAccessor(d) {
							return d.x;
						}, swapScales: true })
				)
			);
		}
	}]);

	return HorizontalBarChart;
}(_react2.default.Component);

HorizontalBarChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

HorizontalBarChart.defaultProps = {
	type: "svg"
};
HorizontalBarChart = fitWidth(HorizontalBarChart);

exports.default = HorizontalBarChart;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Scale = __webpack_require__(14);

var _d3Collection = __webpack_require__(16);

var _d3Array = __webpack_require__(9);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedBarSeries = _reactStockcharts.series.StackedBarSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var HorizontalStackedBarChart = function (_React$Component) {
	_inherits(HorizontalStackedBarChart, _React$Component);

	function HorizontalStackedBarChart() {
		_classCallCheck(this, HorizontalStackedBarChart);

		return _possibleConstructorReturn(this, (HorizontalStackedBarChart.__proto__ || Object.getPrototypeOf(HorizontalStackedBarChart)).apply(this, arguments));
	}

	_createClass(HorizontalStackedBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var f = (0, _d3Scale.scaleOrdinal)(_d3Scale.schemeCategory10).domain((0, _d3Collection.set)(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d, i) {
				return f(i);
			};
			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 90, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(data) {
						return [0, (0, _d3Array.max)(data, function (d) {
							return d.x1 + d.x2 + d.x3 + d.x4;
						})];
					},
					data: data,
					xScale: (0, _d3Scale.scaleLinear)(), flipXScale: false },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: data.map(function (d) {
							return d.y;
						}),
						yScale: (0, _d3Scale.scalePoint)(),
						padding: 1 },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(StackedBarSeries, {
						yAccessor: function yAccessor(d) {
							return d.y;
						},
						xAccessor: [function (d) {
							return d.x1;
						}, function (d) {
							return d.x2;
						}, function (d) {
							return d.x3;
						}, function (d) {
							return d.x4;
						}],
						fill: fill,
						swapScales: true })
				)
			);
		}
	}]);

	return HorizontalStackedBarChart;
}(_react2.default.Component);

HorizontalStackedBarChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

HorizontalStackedBarChart.defaultProps = {
	type: "svg"
};
HorizontalStackedBarChart = fitWidth(HorizontalStackedBarChart);

exports.default = HorizontalStackedBarChart;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Kagi = __webpack_require__(96);

var _Kagi2 = _interopRequireDefault(_Kagi);

var _updatingDataWrapper = __webpack_require__(45);

var _updatingDataWrapper2 = _interopRequireDefault(_updatingDataWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KagiWithUpdatingData = (0, _updatingDataWrapper2.default)(_Kagi2.default);

exports.default = KagiWithUpdatingData;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var ScatterSeries = _reactStockcharts.series.ScatterSeries;
var CircleMarker = _reactStockcharts.series.CircleMarker;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var LineAndScatterChart = function (_React$Component) {
	_inherits(LineAndScatterChart, _React$Component);

	function LineAndScatterChart() {
		_classCallCheck(this, LineAndScatterChart);

		return _possibleConstructorReturn(this, (LineAndScatterChart.__proto__ || Object.getPrototypeOf(LineAndScatterChart)).apply(this, arguments));
	}

	_createClass(LineAndScatterChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data,
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 2, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						} },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(LineSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						} }),
					_react2.default.createElement(ScatterSeries, { yAccessor: function yAccessor(d) {
							return d.close;
						}, marker: CircleMarker, markerProps: { r: 3 } }),
					_react2.default.createElement(OHLCTooltip, { forChart: 1, origin: [-40, 0] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return LineAndScatterChart;
}(_react2.default.Component);

LineAndScatterChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

LineAndScatterChart.defaultProps = {
	type: "svg"
};
LineAndScatterChart = fitWidth(LineAndScatterChart);

exports.default = LineAndScatterChart;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var Annotate = _reactStockcharts.annotation.Annotate;
var LabelAnnotation = _reactStockcharts.annotation.LabelAnnotation;
var Label = _reactStockcharts.annotation.Label;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;


var algo = _reactStockcharts.algorithm.default;

var MovingAverageCrossOverAlgorithmV1 = function (_React$Component) {
	_inherits(MovingAverageCrossOverAlgorithmV1, _React$Component);

	function MovingAverageCrossOverAlgorithmV1() {
		_classCallCheck(this, MovingAverageCrossOverAlgorithmV1);

		return _possibleConstructorReturn(this, (MovingAverageCrossOverAlgorithmV1.__proto__ || Object.getPrototypeOf(MovingAverageCrossOverAlgorithmV1)).apply(this, arguments));
	}

	_createClass(MovingAverageCrossOverAlgorithmV1, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(13).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var buySell = algo().windowSize(2).accumulator(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2);

				var prev = _ref2[0];
				var now = _ref2[1];
				var prevShortTerm = prev.ema20;
				var prevLongTerm = prev.ema50;
				var nowShortTerm = now.ema20;
				var nowLongTerm = now.ema50;

				if (prevShortTerm < prevLongTerm && nowShortTerm > nowLongTerm) return "LONG";
				if (prevShortTerm > prevLongTerm && nowShortTerm < nowLongTerm) return "SHORT";
			}).merge(function (d, c) {
				d.longShort = c;
			});

			var defaultAnnotationProps = {
				fontFamily: "Glyphicons Halflings",
				fontSize: 20,
				opacity: 0.8,
				onClick: console.log.bind(console)
			};

			var longAnnotationProps = _extends({}, defaultAnnotationProps, {
				fill: "#006517",
				text: "",
				y: function y(_ref3) {
					var yScale = _ref3.yScale;
					var datum = _ref3.datum;
					return yScale(datum.low) + 20;
				},
				tooltip: "Go long"
			});

			var shortAnnotationProps = _extends({}, defaultAnnotationProps, {
				fill: "#E20000",
				text: "",
				y: function y(_ref4) {
					var yScale = _ref4.yScale;
					var datum = _ref4.datum;
					return yScale(datum.high);
				},
				tooltip: "Go short"
			});

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, buySell],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: height - 45,
						fontSize: "12", text: "XAxis Label here" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(Label, { x: yAxisLabelX, y: yAxisLabelY,
						rotate: -90,
						fontSize: "12", text: "YAxis Label here" }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] }),
					_react2.default.createElement(Annotate, { "with": LabelAnnotation, when: function when(d) {
							return d.longShort === "LONG";
						},
						usingProps: longAnnotationProps }),
					_react2.default.createElement(Annotate, { "with": LabelAnnotation, when: function when(d) {
							return d.longShort === "SHORT";
						},
						usingProps: shortAnnotationProps })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return MovingAverageCrossOverAlgorithmV1;
}(_react2.default.Component);

MovingAverageCrossOverAlgorithmV1.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

MovingAverageCrossOverAlgorithmV1.defaultProps = {
	type: "svg"
};

MovingAverageCrossOverAlgorithmV1 = fitWidth(MovingAverageCrossOverAlgorithmV1);

exports.default = MovingAverageCrossOverAlgorithmV1;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var Annotate = _reactStockcharts.annotation.Annotate;
var SvgPathAnnotation = _reactStockcharts.annotation.SvgPathAnnotation;
var Label = _reactStockcharts.annotation.Label;
var buyPath = _reactStockcharts.annotation.buyPath;
var sellPath = _reactStockcharts.annotation.sellPath;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var fitWidth = _reactStockcharts.helper.fitWidth;


var algo = _reactStockcharts.algorithm.default;

var MovingAverageCrossOverAlgorithmV2 = function (_React$Component) {
	_inherits(MovingAverageCrossOverAlgorithmV2, _React$Component);

	function MovingAverageCrossOverAlgorithmV2() {
		_classCallCheck(this, MovingAverageCrossOverAlgorithmV2);

		return _possibleConstructorReturn(this, (MovingAverageCrossOverAlgorithmV2.__proto__ || Object.getPrototypeOf(MovingAverageCrossOverAlgorithmV2)).apply(this, arguments));
	}

	_createClass(MovingAverageCrossOverAlgorithmV2, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(13).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var buySell = algo().windowSize(2).accumulator(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2);

				var prev = _ref2[0];
				var now = _ref2[1];
				var prevShortTerm = prev.ema20;
				var prevLongTerm = prev.ema50;
				var nowShortTerm = now.ema20;
				var nowLongTerm = now.ema50;

				if (prevShortTerm < prevLongTerm && nowShortTerm > nowLongTerm) return "LONG";
				if (prevShortTerm > prevLongTerm && nowShortTerm < nowLongTerm) return "SHORT";
			}).merge(function (d, c) {
				d.longShort = c;
			});

			var defaultAnnotationProps = {
				onClick: console.log.bind(console)
			};

			var longAnnotationProps = _extends({}, defaultAnnotationProps, {
				y: function y(_ref3) {
					var yScale = _ref3.yScale;
					var datum = _ref3.datum;
					return yScale(datum.low);
				},
				fill: "#006517",
				path: buyPath,
				tooltip: "Go long"
			});

			var shortAnnotationProps = _extends({}, defaultAnnotationProps, {
				y: function y(_ref4) {
					var yScale = _ref4.yScale;
					var datum = _ref4.datum;
					return yScale(datum.high);
				},
				fill: "#FF0000",
				path: sellPath,
				tooltip: "Go short"
			});

			var margin = { left: 80, right: 80, top: 30, bottom: 50 };
			var height = 400;

			var yAxisLabelX = width - margin.left - 40;
			var yAxisLabelY = margin.top + (height - margin.top - margin.bottom) / 2;

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: height,
					margin: margin, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, buySell],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2015, 0, 1), new Date(2015, 5, 8)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 10, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(Label, { x: (width - margin.left - margin.right) / 2, y: height - 45,
						fontSize: "12", text: "XAxis Label here" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(Label, { x: yAxisLabelX, y: yAxisLabelY,
						rotate: -90,
						fontSize: "12", text: "YAxis Label here" }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema20.accessor(), fill: ema20.stroke() }),
					_react2.default.createElement(CurrentCoordinate, { yAccessor: ema50.accessor(), fill: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] }),
					_react2.default.createElement(Annotate, { "with": SvgPathAnnotation, when: function when(d) {
							return d.longShort === "LONG";
						},
						usingProps: longAnnotationProps }),
					_react2.default.createElement(Annotate, { "with": SvgPathAnnotation, when: function when(d) {
							return d.longShort === "SHORT";
						},
						usingProps: shortAnnotationProps })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return MovingAverageCrossOverAlgorithmV2;
}(_react2.default.Component);

/*
					<LineSeries yAccessor={d => d.close} stroke="#000000" />

*/

MovingAverageCrossOverAlgorithmV2.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

MovingAverageCrossOverAlgorithmV2.defaultProps = {
	type: "svg"
};

MovingAverageCrossOverAlgorithmV2 = fitWidth(MovingAverageCrossOverAlgorithmV2);

exports.default = MovingAverageCrossOverAlgorithmV2;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OHLCSeries = _reactStockcharts.series.OHLCSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var MACDSeries = _reactStockcharts.series.MACDSeries;
var ElderImpulseBackground = _reactStockcharts.series.ElderImpulseBackground;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var MACDTooltip = _reactStockcharts.tooltip.MACDTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var elderImpulse = _reactStockcharts.indicator.elderImpulse;
var change = _reactStockcharts.indicator.change;
var macd = _reactStockcharts.indicator.macd;
var ema = _reactStockcharts.indicator.ema;
var fitWidth = _reactStockcharts.helper.fitWidth;

var OHLCChartWithElderImpulseIndicator = function (_React$Component) {
	_inherits(OHLCChartWithElderImpulseIndicator, _React$Component);

	function OHLCChartWithElderImpulseIndicator() {
		_classCallCheck(this, OHLCChartWithElderImpulseIndicator);

		return _possibleConstructorReturn(this, (OHLCChartWithElderImpulseIndicator.__proto__ || Object.getPrototypeOf(OHLCChartWithElderImpulseIndicator)).apply(this, arguments));
	}

	_createClass(OHLCChartWithElderImpulseIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var changeCalculator = change();

			var ema12 = ema().id(1).windowSize(12).merge(function (d, c) {
				d.ema12 = c;
			}).accessor(function (d) {
				return d.ema12;
			});

			var macdCalculator = macd().fast(12).slow(26).signal(9).merge(function (d, c) {
				d.macd = c;
			}).accessor(function (d) {
				return d.macd;
			});

			var elderImpulseCalculator = elderImpulse().macdSource(macdCalculator.accessor()).emaSource(ema12.accessor());

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 500,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [changeCalculator, ema12, macdCalculator, elderImpulseCalculator],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 300,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(LineSeries, { yAccessor: ema12.accessor(), stroke: ema12.stroke() }),
					_react2.default.createElement(OHLCSeries, { stroke: function stroke(d) {
							return elderImpulseCalculator.stroke()[d.elderImpulse];
						} }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, -10] }),
					_react2.default.createElement(MovingAverageTooltip, { origin: [-38, 5],
						calculators: [ema12] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 300];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.4 })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 150,
						yExtents: macdCalculator.accessor(),
						origin: function origin(w, h) {
							return [0, h - 150];
						}, padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 2 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MACDSeries, { calculator: macdCalculator }),
					_react2.default.createElement(MACDTooltip, { origin: [-38, 15], calculator: macdCalculator })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return OHLCChartWithElderImpulseIndicator;
}(_react2.default.Component);

;
OHLCChartWithElderImpulseIndicator.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

OHLCChartWithElderImpulseIndicator.defaultProps = {
	type: "svg"
};
OHLCChartWithElderImpulseIndicator = fitWidth(OHLCChartWithElderImpulseIndicator);

exports.default = OHLCChartWithElderImpulseIndicator;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OHLCSeries = _reactStockcharts.series.OHLCSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var ElderRaySeries = _reactStockcharts.series.ElderRaySeries;
var StraightLine = _reactStockcharts.series.StraightLine;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var SingleValueTooltip = _reactStockcharts.tooltip.SingleValueTooltip;
var RSITooltip = _reactStockcharts.tooltip.RSITooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var elderRay = _reactStockcharts.indicator.elderRay;
var change = _reactStockcharts.indicator.change;
var fitWidth = _reactStockcharts.helper.fitWidth;

var OHLCChartWithElderRayIndicator = function (_React$Component) {
	_inherits(OHLCChartWithElderRayIndicator, _React$Component);

	function OHLCChartWithElderRayIndicator() {
		_classCallCheck(this, OHLCChartWithElderRayIndicator);

		return _possibleConstructorReturn(this, (OHLCChartWithElderRayIndicator.__proto__ || Object.getPrototypeOf(OHLCChartWithElderRayIndicator)).apply(this, arguments));
	}

	_createClass(OHLCChartWithElderRayIndicator, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var elder = elderRay();
			var changeCalculator = change();

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 650,
					margin: { left: 70, right: 70, top: 20, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [changeCalculator, elder],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider,
					xExtents: [new Date(2012, 0, 1), new Date(2012, 6, 2)] },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1, height: 300,
						yExtents: function yExtents(d) {
							return [d.high, d.low];
						},
						padding: { top: 10, right: 0, bottom: 20, left: 0 } },
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(OHLCSeries, null),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, -10] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2, height: 150,
						yExtents: function yExtents(d) {
							return d.volume;
						},
						origin: function origin(w, h) {
							return [0, h - 450];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						},
						opacity: 0.4 })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 3, height: 100,
						yExtents: [0, elder.accessor()],
						origin: function origin(w, h) {
							return [0, h - 300];
						},
						padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(ElderRaySeries, { calculator: elder }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: elder.accessor(),
						yLabel: "Elder Ray",
						yDisplayFormat: function yDisplayFormat(d) {
							return (0, _d3Format.format)(".2f")(d.bullPower) + ", " + (0, _d3Format.format)(".2f")(d.bearPower);
						},
						origin: [-40, 15] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 4, height: 100,
						yExtents: [0, function (d) {
							return elder.accessor()(d) && elder.accessor()(d).bullPower;
						}],
						origin: function origin(w, h) {
							return [0, h - 200];
						},
						padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom", showTicks: false, outerTickSize: 0 }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bullPower;
						},
						baseAt: function baseAt(xScale, yScale, d) {
							return yScale(0);
						},
						fill: "#6BA583" }),
					_react2.default.createElement(StraightLine, { yValue: 0 }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bullPower;
						},
						yLabel: "Elder Ray - Bull power",
						yDisplayFormat: (0, _d3Format.format)(".2f"),
						origin: [-40, 15] })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 5, height: 100,
						yExtents: [0, function (d) {
							return elder.accessor()(d) && elder.accessor()(d).bearPower;
						}],
						origin: function origin(w, h) {
							return [0, h - 100];
						},
						padding: { top: 10, bottom: 10 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 4, tickFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(BarSeries, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bearPower;
						},
						baseAt: function baseAt(xScale, yScale, d) {
							return yScale(0);
						},
						fill: "#FF0000" }),
					_react2.default.createElement(StraightLine, { yValue: 0 }),
					_react2.default.createElement(SingleValueTooltip, {
						yAccessor: function yAccessor(d) {
							return elder.accessor()(d) && elder.accessor()(d).bearPower;
						},
						yLabel: "Elder Ray - Bear power",
						yDisplayFormat: (0, _d3Format.format)(".2f"),
						origin: [-40, 15] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return OHLCChartWithElderRayIndicator;
}(_react2.default.Component);

;

OHLCChartWithElderRayIndicator.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

OHLCChartWithElderRayIndicator.defaultProps = {
	type: "svg"
};
OHLCChartWithElderRayIndicator = fitWidth(OHLCChartWithElderRayIndicator);

exports.default = OHLCChartWithElderRayIndicator;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PointAndFigure = __webpack_require__(97);

var _PointAndFigure2 = _interopRequireDefault(_PointAndFigure);

var _updatingDataWrapper = __webpack_require__(45);

var _updatingDataWrapper2 = _interopRequireDefault(_updatingDataWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PointAndFigureWithUpdatingData = (0, _updatingDataWrapper2.default)(_PointAndFigure2.default);

exports.default = PointAndFigureWithUpdatingData;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Renko = __webpack_require__(98);

var _Renko2 = _interopRequireDefault(_Renko);

var _updatingDataWrapper = __webpack_require__(45);

var _updatingDataWrapper2 = _interopRequireDefault(_updatingDataWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenkoWithUpdatingData = (0, _updatingDataWrapper2.default)(_Renko2.default);

exports.default = RenkoWithUpdatingData;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Collection = __webpack_require__(16);

var _d3Scale = __webpack_require__(14);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedBarSeries = _reactStockcharts.series.StackedBarSeries;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var fitWidth = _reactStockcharts.helper.fitWidth;

var StackedBarChart = function (_React$Component) {
	_inherits(StackedBarChart, _React$Component);

	function StackedBarChart() {
		_classCallCheck(this, StackedBarChart);

		return _possibleConstructorReturn(this, (StackedBarChart.__proto__ || Object.getPrototypeOf(StackedBarChart)).apply(this, arguments));
	}

	_createClass(StackedBarChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var f = (0, _d3Scale.scaleOrdinal)(_d3Scale.schemeCategory10).domain((0, _d3Collection.set)(data.map(function (d) {
				return d.region;
			})));

			var fill = function fill(d, i) {
				return f(i);
			};
			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 40, right: 10, top: 20, bottom: 30 }, type: type,
					seriesName: "Fruits",
					xExtents: function xExtents(list) {
						return list.map(function (d) {
							return d.x;
						});
					},
					data: data,
					xAccessor: function xAccessor(d) {
						return d.x;
					}, xScale: (0, _d3Scale.scalePoint)(),
					padding: 1 },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [0, function (d) {
							return d.y1 + d.y2 + d.y3 + d.y4;
						}] },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left" }),
					_react2.default.createElement(StackedBarSeries, { yAccessor: [function (d) {
							return d.y1;
						}, function (d) {
							return d.y2;
						}, function (d) {
							return d.y3;
						}, function (d) {
							return d.y4;
						}],
						fill: fill })
				)
			);
		}
	}]);

	return StackedBarChart;
}(_react2.default.Component);

StackedBarChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

StackedBarChart.defaultProps = {
	type: "svg"
};
StackedBarChart = fitWidth(StackedBarChart);

exports.default = StackedBarChart;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var VolumeProfileSeries = _reactStockcharts.series.VolumeProfileSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var change = _reactStockcharts.indicator.change;
var fitWidth = _reactStockcharts.helper.fitWidth;

var VolumeProfileChart = function (_React$Component) {
	_inherits(VolumeProfileChart, _React$Component);

	function VolumeProfileChart() {
		_classCallCheck(this, VolumeProfileChart);

		return _possibleConstructorReturn(this, (VolumeProfileChart.__proto__ || Object.getPrototypeOf(VolumeProfileChart)).apply(this, arguments));
	}

	_createClass(VolumeProfileChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var changeCalculator = change();

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, changeCalculator],
					xExtents: [new Date(2014, 9, 1), new Date(2015, 2, 2)],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						widthRatio: 0.95,
						opacity: 0.3,
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(VolumeProfileSeries, { bySession: true, orient: "right", showSessionBackground: true }),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return VolumeProfileChart;
}(_react2.default.Component);

VolumeProfileChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

VolumeProfileChart.defaultProps = {
	type: "svg"
};
VolumeProfileChart = fitWidth(VolumeProfileChart);

exports.default = VolumeProfileChart;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Format = __webpack_require__(6);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CandlestickSeries = _reactStockcharts.series.CandlestickSeries;
var BarSeries = _reactStockcharts.series.BarSeries;
var LineSeries = _reactStockcharts.series.LineSeries;
var AreaSeries = _reactStockcharts.series.AreaSeries;
var VolumeProfileSeries = _reactStockcharts.series.VolumeProfileSeries;
var discontinuousTimeScaleProvider = _reactStockcharts.scale.discontinuousTimeScaleProvider;
var EdgeIndicator = _reactStockcharts.coordinates.EdgeIndicator;
var CrossHairCursor = _reactStockcharts.coordinates.CrossHairCursor;
var MouseCoordinateX = _reactStockcharts.coordinates.MouseCoordinateX;
var MouseCoordinateY = _reactStockcharts.coordinates.MouseCoordinateY;
var CurrentCoordinate = _reactStockcharts.coordinates.CurrentCoordinate;
var OHLCTooltip = _reactStockcharts.tooltip.OHLCTooltip;
var MovingAverageTooltip = _reactStockcharts.tooltip.MovingAverageTooltip;
var XAxis = _reactStockcharts.axes.XAxis;
var YAxis = _reactStockcharts.axes.YAxis;
var ema = _reactStockcharts.indicator.ema;
var sma = _reactStockcharts.indicator.sma;
var change = _reactStockcharts.indicator.change;
var fitWidth = _reactStockcharts.helper.fitWidth;

var VolumeProfileChart = function (_React$Component) {
	_inherits(VolumeProfileChart, _React$Component);

	function VolumeProfileChart() {
		_classCallCheck(this, VolumeProfileChart);

		return _possibleConstructorReturn(this, (VolumeProfileChart.__proto__ || Object.getPrototypeOf(VolumeProfileChart)).apply(this, arguments));
	}

	_createClass(VolumeProfileChart, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var data = _props.data;
			var type = _props.type;
			var width = _props.width;
			var ratio = _props.ratio;


			var ema20 = ema().id(0).windowSize(20).merge(function (d, c) {
				d.ema20 = c;
			}).accessor(function (d) {
				return d.ema20;
			});

			var ema50 = ema().id(2).windowSize(50).merge(function (d, c) {
				d.ema50 = c;
			}).accessor(function (d) {
				return d.ema50;
			});

			var changeCalculator = change();

			return _react2.default.createElement(
				_reactStockcharts.ChartCanvas,
				{ ratio: ratio, width: width, height: 400,
					margin: { left: 80, right: 80, top: 10, bottom: 30 }, type: type,
					seriesName: "MSFT",
					data: data, calculator: [ema20, ema50, changeCalculator],
					xExtents: [new Date(2014, 9, 1), new Date(2015, 2, 2)],
					xAccessor: function xAccessor(d) {
						return d.date;
					}, xScaleProvider: discontinuousTimeScaleProvider },
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 2,
						yExtents: [function (d) {
							return d.volume;
						}],
						height: 150, origin: function origin(w, h) {
							return [0, h - 150];
						} },
					_react2.default.createElement(YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)("s") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "left",
						orient: "left",
						displayFormat: (0, _d3Format.format)(".4s") }),
					_react2.default.createElement(BarSeries, { yAccessor: function yAccessor(d) {
							return d.volume;
						},
						widthRatio: 0.95,
						opacity: 0.3,
						fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} })
				),
				_react2.default.createElement(
					_reactStockcharts.Chart,
					{ id: 1,
						yExtents: [function (d) {
							return [d.high, d.low];
						}, ema20.accessor(), ema50.accessor()],
						padding: { top: 40, bottom: 20 } },
					_react2.default.createElement(XAxis, { axisAt: "bottom", orient: "bottom" }),
					_react2.default.createElement(YAxis, { axisAt: "right", orient: "right", ticks: 5 }),
					_react2.default.createElement(MouseCoordinateX, {
						at: "bottom",
						orient: "bottom",
						displayFormat: (0, _d3TimeFormat.timeFormat)("%Y-%m-%d") }),
					_react2.default.createElement(MouseCoordinateY, {
						at: "right",
						orient: "right",
						displayFormat: (0, _d3Format.format)(".2f") }),
					_react2.default.createElement(VolumeProfileSeries, null),
					_react2.default.createElement(CandlestickSeries, null),
					_react2.default.createElement(LineSeries, { yAccessor: ema20.accessor(), stroke: ema20.stroke() }),
					_react2.default.createElement(LineSeries, { yAccessor: ema50.accessor(), stroke: ema50.stroke() }),
					_react2.default.createElement(EdgeIndicator, { itemType: "last", orient: "right", edgeAt: "right",
						yAccessor: function yAccessor(d) {
							return d.close;
						}, fill: function fill(d) {
							return d.close > d.open ? "#6BA583" : "#FF0000";
						} }),
					_react2.default.createElement(OHLCTooltip, { origin: [-40, 0] }),
					_react2.default.createElement(MovingAverageTooltip, { onClick: function onClick(e) {
							return console.log(e);
						}, origin: [-38, 15],
						calculators: [ema20, ema50] })
				),
				_react2.default.createElement(CrossHairCursor, null)
			);
		}
	}]);

	return VolumeProfileChart;
}(_react2.default.Component);

VolumeProfileChart.propTypes = {
	data: _react2.default.PropTypes.array.isRequired,
	width: _react2.default.PropTypes.number.isRequired,
	ratio: _react2.default.PropTypes.number.isRequired,
	type: _react2.default.PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

VolumeProfileChart.defaultProps = {
	type: "svg"
};
VolumeProfileChart = fitWidth(VolumeProfileChart);

exports.default = VolumeProfileChart;

/***/ },
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithAnnotation.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/46a2db7be6336500bedee27f5fa08713\">block</a>, <a href=\"http://plnkr.co/edit/gist:46a2db7be6336500bedee27f5fa08713?p=preview\">plunker</a></p>\n";

/***/ },
/* 474 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/AreaChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b9658ffa431f1ffb8d6b\">block</a>, <a href=\"http://plnkr.co/edit/gist:b9658ffa431f1ffb8d6b?p=preview\">plunker</a></p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2011-01-24</td><td>5743.25</td></tr>\n<tr><td>2011-01-25</td><td>5687.4</td></tr>\n<tr><td>2011-01-27</td><td>5604.3</td></tr>\n<tr><td>2011-01-28</td><td>5512.15</td></tr>\n<tr><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> timeParse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-time-format\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> tsv <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-request\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> scaleTime <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-scale\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> format <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-format\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >var</span> parseDate <span class=\"token operator\" >=</span> <span class=\"token function\" >timeParse</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"%Y-%m-%d\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token function\" >tsv</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"path/to/data.tsv\"</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span>err<span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    data<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        d<span class=\"token punctuation\" >.</span>date <span class=\"token operator\" >=</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >parseDate</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>svg<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >scaleTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2011</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2013</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>AreaSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>Let us review each line</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>svg<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >scaleTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2011</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2013</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>Creates an <code>svg</code> element with the provided <code>height</code> and <code>width</code> and creates a <code>svg:g</code> element with the provided <code>margin</code>. and <code>data</code> is used to plot.</p>\n<ul>\n<li><p><code>xAccessor</code> is self explanatory</p></li>\n<li><p><code>xScale</code> knowledge of d3 <a href=\"https://github.com/mbostock/d3/wiki/Scales\">scales</a> will certainly help. For starters, it is easier to understand scale as a function which converts a <code>domain</code> say 2011-01-01 to 2013-01-02 to a <code>range</code> say 0 to 500 pixels. This scale can now interpolate an input date to a value in pixels. <code>d3.scaleTime()</code> is a linear time scale</p></li>\n<li><p><code>xExtents</code> is the start and end points to show on initial render. This is an optional prop</p></li>\n<li><p><code>seriesName</code> this does not add value to this simple chart, you will see its use explained better later in the <a href=\"#/zoom_and_pan\">zoom and pan</a> section</p></li>\n<li><p><code>type</code> can take 2 values <code>svg</code> or <code>hybrid</code>.</p>\n<p>Choosing <code>svg</code> will create the entire chart using <code>svg</code> elements\nChoosing <code>hybrid</code> will create the contents of the <code>DataSeries</code> using <code>canvas</code> but the axis and other elements are <code>svg</code></p>\n<p>So irrespective of what type you choose, you will have a <code>svg</code> element</p></li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>There can be one or more <code>Chart</code>s in each <code>ChartCanvas</code> and hence the need for an <code>id</code> attribute.</p>\n<p><code>Chart</code> also takes an optional prop <code>yScale</code> which defaults to <code>d3.scaleLinear()</code></p>\n<p>With SVG &amp; Canvas it is important to understand the coordinate system and where the origin <code>(0, 0)</code> is located. for a SVG of size 300x100, the</p>\n<p><img src=\"http://www.w3.org/TR/SVG/images/coords/InitialCoords.png\" alt=\"alt text\" title=\"SVG/Canvas coordinate system\"></p>\n<p>For more details about the coordinate system see <a href=\"http://www.w3.org/TR/SVG/coords.jsx\">here</a></p>\n<p>Back to scales,</p>\n<p>X Axis uses a time scale\nA time scale converts a date/time domain to a range, this is used as the xScale, the xDomain is calculated from the input <code>data</code> and the <code>xExtents</code> prop, and the range is calculated as <code>width - margin.left - margin.right</code>.</p>\n<p>Y Axis uses a linear scale\nA Linear scale converts a <code>domain</code> say 10 - 45 to a <code>range</code> say 0 to 300 pixels. Like the name represents the data in between is interpolated linear.</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>The <code>ticks</code> attribute simple passes on the value to the scale, the <code>XAxis</code> also has the following optional attributes <code>innerTickSize, outerTickSize, tickFormat, tickPadding, tickSize, ticks, tickValues</code> all of which correspond to a function with the same name in <a href=\"https://github.com/d3/d3-axis\">d3-axis</a>.</p>\n<p><code>axisAt</code> takes on possible values as <code>top, middle, bottom</code> for advanced cases, you can also pass in a number indicating the pixel position where the axis has to be drawn.</p>\n<p><code>orient</code> takes on possible values as <code>top, bottom</code>, this orients the axis ticks on the top/bottom</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>Similar to <code>XAxis</code> except left/right instead of top/bottom</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>AreaSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p><code>yAccessor</code> is self explanatory</p>\n<h3>Highly customizable you say, how?</h3>\n<p>So you don’t want to display the <code>YAxis</code> at all, go ahead and just remove that.</p>\n<p>Want to display <code>YAxis</code> on both left and right? add</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>next to the existing <code>YAxis</code></p>\n<p>Want to add a <code>YAxis</code> with a percent scale on the right? add</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percentScale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >true</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d3<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".0%\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>and you get.</p>\n";

/***/ },
/* 475 */
/***/ function(module, exports) {

module.exports = "<p>and a simple bar chart too</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/BarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b87d124b8879c671f140\">block</a>, <a href=\"http://plnkr.co/edit/gist:b87d124b8879c671f140?p=preview\">plunker</a></p>\n";

/***/ },
/* 476 */
/***/ function(module, exports) {

module.exports = "<p>Learn more about constructing a Bollinger Band <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:bollinger_bands\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithBollingerBandOverlay.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b993d5fcc5c09dd66a6e\">block</a>, <a href=\"http://plnkr.co/edit/gist:b993d5fcc5c09dd66a6e?p=preview\">plunker</a></p>\n";

/***/ },
/* 477 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>click to start, move to the end and click again</li>\n<li>Types of Brush\n<ul>\n<li>1D (default)</li>\n<li>2D</li>\n</ul></li>\n</ul>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithBrush.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/11c28c8e6612055ba8a7\">block</a>, <a href=\"http://plnkr.co/edit/gist:11c28c8e6612055ba8a7?p=preview\">plunker</a> of this example, search for <code>handleBrush</code> to see how to make the chart zoom in on brush complete</p>\n";

/***/ },
/* 478 */
/***/ function(module, exports) {

module.exports = "<p>Inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a> <a href=\"https://d3fc.io/examples/bubble/index.html\">example</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/BubbleChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/cb4bb2831987d787a98c\">block</a>, <a href=\"http://plnkr.co/edit/gist:cb4bb2831987d787a98c?p=preview\">plunker</a></p>\n";

/***/ },
/* 479 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/1eac0cb78f27b31415ac\">block</a>, <a href=\"http://plnkr.co/edit/gist:1eac0cb78f27b31415ac?p=preview\">plunker</a></p>\n<p>That is better. let us see how to create it</p>\n<p><code>data.tsv</code></p>\n<table>\n<thead>\n<tr><th>date</th><th>open</th><th>high</th><th>low</th><th>close</th></tr>\n</thead>\n<tbody>\n<tr><td>2013-08-16</td><td>5705.45</td><td>5716.6</td><td>5496.05</td><td>5507.85</td></tr>\n<tr><td>2013-08-19</td><td>5497.55</td><td>5499.65</td><td>5360.65</td><td>5414.75</td></tr>\n<tr><td>2013-08-20</td><td>5353.45</td><td>5417.8</td><td>5306.35</td><td>5401.45</td></tr>\n<tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr>\n</tbody>\n</table>\n<pre><code class=\"language-js\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> timeParse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-time-format\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> tsv <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-request\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >var</span> parseDate <span class=\"token operator\" >=</span> <span class=\"token function\" >timeParse</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"%Y-%m-%d\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token function\" >tsv</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"path/to/data.tsv\"</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span>err<span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    data<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        d<span class=\"token punctuation\" >.</span>date <span class=\"token operator\" >=</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >parseDate</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getTime</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>open<span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>high <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>low <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >;</span>\n        d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >=</span> <span class=\"token operator\" >+</span>d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n</code></pre>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>Compare this with the simpler <code>AreaChart</code> example from before</p>\n<pre><code class=\"language-js\">xScaleProvider<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span>\n</code></pre>\n<p>is the only difference in <code>&lt;ChartCanvas&gt;</code></p>\n<p><code>xScale</code> is replaced with <code>xScaleProvider</code>, <code>discontinuousTimeScaleProvider</code> is a function which takes some pre calculated values and the data array to return a scale that removes the discontinuity, to and show a linear scale</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<ul>\n<li><code>yExtents</code> can accept\n<ul>\n<li>a function which returns a number / an object / an array of numbers. The min and max value of these are used to calculate the y domain</li>\n<li>an array of functions - same as above</li>\n<li>min and max values as number. Say you always want to show the y domain between 0 and 100, you may say <code>yExtents={[0, 100]}</code></li>\n</ul></li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>Same as for <code>AreaChart</code> example.</p>\n";

/***/ },
/* 480 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b13b739458e65ff93f4a\">block</a>, <a href=\"http://plnkr.co/edit/gist:b13b739458e65ff93f4a?p=preview\">plunker</a></p>\n<p>well, that looks ok, but something is not right. Look closer, you will find that the candles are not spread at regular intervals, there is a gap of say 2 candles every so often. That gap is because the data is plot on a continuous time scale, and a continuous time scale has week ends and national holidays, days when trading does not happen. Now we don’t want to show non trading days on the chart. If it is an intra day chart, you want to see only 9:30 AM to 4:00 PM (or 1:00 PM if it is holiday hours)</p>\n<p>What we need here is to show time that is not continuous on the x axis. Enter <strong>financetime scale</strong>.</p>\n";

/***/ },
/* 481 */
/***/ function(module, exports) {

module.exports = "<h2>v0.5.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><p>Removed <code>financeEODDiscontinuousScale</code> and replaced by a new discontinuous scale which supports both eod and intraday - Thank you <a href=\"https://github.com/brobits\">@brobits</a></p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...\n     discontinous xScale={financeEODDiscontinuousScale()}\n     ...&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScaleProvider={discontinuousTimeScaleProvider}\n     ...&gt;\n</code></pre>\n<p><code>discontinous</code> prop is also removed. However should you choose to use any of the scales provided by d3, you can use them without any changes from <code>0.4</code></p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScale={d3.time.scale()}\n     ...&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...\n     xScale={d3.time.scale()}\n     ...&gt;\n</code></pre>\n<p>no changes here when using an existing d3 scale, <code>xScaleProvider</code> is useful only when you have to work with a discontinuous scale</p></li>\n<li><p>Removed <code>MouseCoordinates</code>, use <code>MouseCoordinateX</code>, <code>MouseCoordinateY</code> and <code>CrossHairCursor</code> together to get similar results. Breaking out one component into multiple gave a lot more flexibility and also helps in removing the awkward props <code>yMousePointerDisplayLocation</code>, <code>yMousePointerDisplayFormat</code> from <code>Chart</code></p></li>\n<li><p>Removed <code>yMousePointerDisplayLocation</code>, <code>yMousePointerDisplayFormat</code> from <code>Chart</code>, Use <code>MouseCoordinateY</code> instead</p></li>\n<li><p>Interactive indicators are <code>svg</code> only. This is most likely a transitional change till they get rewritten again in a future version to support canvas, be on the lookout for another possibly breaking change on interactive indicators</p>\n<p>Interactive indicators are no longer placed inside a <code>Chart</code>, they live inside <code>EventCapture</code>. Placing them on top of the event capture <code>rect</code> has helped in making <a href=\"https://github.com/rrag/react-stockcharts/issues/94\">#94</a> possible</p>\n<p>in <code>0.4</code></p>\n<pre><code> &lt;ChartCanvas ...&gt;\n     &lt;Chart id={0} ...&gt;\n         ...\n         &lt;TrendLine ... /&gt;\n         ...\n     &lt;/Chart&gt;\n     ...\n     &lt;EventCapture ... /&gt;\n     ...\n &lt;/ChartCanvas&gt;\n</code></pre>\n<p>in <code>0.5</code></p>\n<pre><code> &lt;ChartCanvas ...&gt;\n     &lt;Chart id={0} ...&gt;\n         ...\n     &lt;/Chart&gt;\n     ...\n     &lt;EventCapture ... &gt;\n         &lt;TrendLine forChart={0} ... /&gt;\n     &lt;/EventCapture&gt;\n     ...\n &lt;/ChartCanvas&gt;\n</code></pre>\n<p>look for more details in the <a href=\"#/trendline\">documentation</a> page</p></li>\n</ol>\n<h4>New features</h4>\n<ol>\n<li>Support both React <code>0.14</code> and React <code>15</code></li>\n<li>Annotations for events <a href=\"https://github.com/rrag/react-stockcharts/issues/54\">#54</a> - <a href=\"#/annotations\">more details</a></li>\n<li>Buy &amp; sell signals using Annotation - <a href=\"#/ma_crossover_using_text_annotation\">more</a> <a href=\"#/ma_crossover_using_svg_shape\">details</a></li>\n<li>Labels - Look at how Chart title and axis labels <a href=\"#/annotations\">more details</a></li>\n<li>Hover tooltip - <a href=\"#/hover_tooltip\">more details</a></li>\n<li>intraday scale - <a href=\"#/intra_day_with_discontinuous_scale\">more details</a></li>\n<li>Better edge coordinate - <a href=\"https://github.com/rrag/react-stockcharts/pull/79\">#79</a> - Thank you <a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a> -</li>\n<li>Volume profile - Refer to documentation for <a href=\"#/volume_profile\">volume profile</a> and <a href=\"#/volume_profile_by_session\">volume profile by session</a> Thank you <a href=\"https://github.com/aajtodd\">@aajtodd</a> for great documentation references</li>\n</ol>\n<h4>Contributors</h4>\n<p>I thank all the contributors for taking your time to help make this better</p>\n<ol>\n<li><a href=\"https://github.com/akinoniku\">@akinoniku</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/88\">#88</a></li>\n<li><a href=\"https://github.com/brobits\">@brobits</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/69\">#69</a></li>\n<li><a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a> for <a href=\"https://github.com/rrag/react-stockcharts/pull/79\">#79</a>, <a href=\"https://github.com/rrag/react-stockcharts/pull/97\">#97</a></li>\n</ol>\n<p>Special thanks to\n<a href=\"https://github.com/rsklyar\">@rsklyar</a>\n<a href=\"https://github.com/iNikNik\">@iNikNik</a>\n<a href=\"https://github.com/Pinxie\">@Pinxie</a>\n<a href=\"https://github.com/WaiSiuKei\">@WaiSiuKei</a>\n<a href=\"https://github.com/itsjimbo\">@itsjimbo</a>\n<a href=\"https://github.com/cesardeazevedo\">@cesardeazevedo</a>\n<a href=\"https://github.com/aajtodd\">@aajtodd</a>\n<a href=\"https://github.com/XmelesX\">@XmelesX</a>\n<a href=\"https://github.com/raptoria\">@raptoria</a>\nfor your constant support, providing ideas for new features, suggestions for improvement and identifying defects</p>\n<h2>v0.4.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><p>Drop support for React <code>0.13.x</code> and make <code>0.14.3</code> the default dependency</p></li>\n<li><p>Major changes to API.</p>\n<ul>\n<li><code>DataSeries</code> is gone</li>\n<li>all <code>indicator</code>s and <code>dataTransform</code>s are now gone, and are replaced by <code>calculator</code></li>\n<li><code>setViewRange</code>, <code>pushData</code>, <code>alterData</code> were methods you could invoke from the ref of <code>ChartCanvas</code>. These are now gone, in favor of react style props for setting them</li>\n<li><code>ChartCanvas</code> now takes (among other things)\n<ul>\n<li><code>xExtents</code> - indicates the domain of the x axis</li>\n<li><code>calculators</code> - indicates the calculators to be calculated on the data</li>\n</ul></li>\n</ul>\n<p>For a summary of changes, refer to <a href=\"https://github.com/rrag/react-stockcharts/issues/48#issuecomment-174184639\">this issue</a>. Compare the examples <a href=\"https://github.com/rrag/react-stockcharts/tree/2af0c6e763ae960d40eb6c5406b4fe0ec8da2ac2/docs/lib/charts\">before (<code>0.3</code>)</a> and <a href=\"https://github.com/rrag/react-stockcharts/tree/8386c424821907512b8e135a8a7fded3e5e09c83/docs/lib/charts\">after(<code>0.4</code></a></p></li>\n<li><p>All the <code>calculator</code>s, are written d3 style. (inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a>)</p></li>\n<li><p><code>CompareSeries</code> is gone in favor of a calculator in its place. Refer to the examples for usage</p></li>\n</ol>\n<h4>New Features</h4>\n<ol>\n<li>Implement touch support, pan and pinch zoom</li>\n<li>New Chart types Scatter, OHLC</li>\n<li>New indicators - Elder impulse, Elder Ray, Force Index, ATR</li>\n<li>Updated <code>TrendLine</code>, <code>FibonacciRetracement</code>, <code>Brush</code> to take <code>type</code> prop</li>\n<li>Change <code>StraightLine</code> to take a prop of type which defaults to <code>horizontal</code></li>\n</ol>\n<h4>Internal Changes</h4>\n<ol>\n<li>Inspired by <a href=\"https://github.com/ScottLogic/d3fc\">d3fc</a> change some of the internals</li>\n<li>add dependency <code>lodash.fattendeep</code></li>\n<li>remove dependency <code>object-assign</code></li>\n</ol>\n<h2>v0.3.1</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix <a href=\"https://github.com/rrag/react-stockcharts/issues/39\">#39</a></li>\n<li>Add eslint rules to prevent these from happening again</li>\n<li>Change <code>utils.js</code> and <code>ChartDataUtil.js</code> to use es6 exports</li>\n<li>fix <code>svg</code> for <code>Brush</code></li>\n</ol>\n<h2>v0.3.0</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Changes to <code>Histogram</code> to accept <code>stroke</code> as a boolean param instead of a function. the <code>stroke</code> color cannot be different from <code>fill</code></li>\n<li><code>OHLCTooltip</code> uses <code>d3.format(&quot;.4s&quot;)</code> as the format to show volume. This shows a suffix of M (Mega) for Million and G (Giga) for Billion. These are per the <a href=\"https://en.wikipedia.org/wiki/Metric_prefix\">SI-prefix</a>. You can change it to a different format by passing a prop <code>volumeFormat</code> that accepts a function taking the volume and returning a formatted string</li>\n</ol>\n<h4>Changes</h4>\n<ol>\n<li>Add new methods to <code>ChartCanvas</code></li>\n<li>Add <code>Brush</code> and <code>ClickCallback</code> interactive components</li>\n<li>Fix bug on zoom, for charts not using stockscale</li>\n<li>Change to use ES6 module exports instead of commonjs <code>module.exports = ...</code></li>\n</ol>\n<h2>v0.2.12</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fixed a bug where <code>React</code> was not imported in <code>fitWidth</code></li>\n</ol>\n<h2>v0.2.11</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Opacity works only when using Hex colors, using color names like <code>steelblue</code> <code>red</code> <code>black</code> is not recommended. This is to address #1 in <a href=\"https://github.com/rrag/react-stockcharts/issues/22\">issue #22</a></li>\n</ol>\n<h4>Changes</h4>\n<ol>\n<li>Support for Dark theme</li>\n</ol>\n<h2>v0.2.10</h2>\n<h4>Changes</h4>\n<ol>\n<li>Create interactive indicators\n<ol>\n<li><code>FibonacciRetracement</code></li>\n<li><code>TrendLine</code></li>\n</ol></li>\n<li>Add a new prop <code>widthRatio</code> which takes values from 0 to 1 (defaults to 0.5) for <code>HistogramSeries</code> &amp; <code>CandlestickSeries</code> to control the width</li>\n<li>Add new tooltip <code>SingleValueTooltip</code></li>\n</ol>\n<h2>v0.2.9</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix the moving average stroke color bug that was introduced from <code>v0.2.8</code></li>\n<li>Initial version of Interactive indicator <code>TrendLine</code></li>\n</ol>\n<h2>v0.2.8</h2>\n<h4>Changes</h4>\n<ol>\n<li>Create a pure function instead of React Components extending PureComponent, this way the <code>componentWillReceiveProps</code> will not be called when no props are changed</li>\n<li>Stop mutating the state of <code>EventHandler</code>, instead use a separate mutable state variable to hold a list of callbacks for drawing on canvas</li>\n</ol>\n<h2>v0.2.6</h2>\n<h4>Changes</h4>\n<ol>\n<li>Use <code>save-svg-as-png</code> <code>v1.0.1</code> instead of referring from source</li>\n<li>Add onClick handler for all tooltips</li>\n<li>Change onClick handler of <code>MovingAverageTooltip</code> to provide <code>chartId, dataSeriesId, options</code></li>\n</ol>\n<h2>v0.2.5</h2>\n<h4>Changes</h4>\n<ol>\n<li>Use React 0.14.0 instead of 0.14.0-rc1</li>\n<li>Add default yAccessor to Area &amp; Line Series</li>\n<li>Add checks for defensive iteration of children</li>\n<li>Fix Kagi defect where volume is not reset</li>\n<li>Add utility method to convert hex to rgba</li>\n<li>Fix axes so svg and canvas result in near pixel perfect output</li>\n<li>Round off x of Histogram so svg and canvas look similar</li>\n<li>Change import in examples from ReStock to react-stockcharts</li>\n<li>Add zIndex as property to ChartCanvas</li>\n</ol>\n<h2>v0.2.4</h2>\n<h4>Changes</h4>\n<ol>\n<li>Fix updating data for Kagi, Renko, P&amp;F. Add examples <a href=\"https://github.com/rrag/react-stockcharts/issues/17\">#17</a></li>\n</ol>\n<h2>v0.2.3</h2>\n<h4>Changes</h4>\n<ol>\n<li>Make it work with both react 0.13.3 &amp; 0.14.0-rc1 <a href=\"https://github.com/rrag/react-stockcharts/issues/12\">#12</a></li>\n</ol>\n<h2>v0.2.2</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Use react &amp; react-dom 0.14.0-rc1 as dependency, added <code>peerDependency</code> to resolve <a href=\"https://github.com/rrag/react-stockcharts/issues/12\">#12</a></li>\n</ol>\n<h4>Internal changes</h4>\n<ol>\n<li>Change the way chart series are developed so <code>context</code> is not used.</li>\n</ol>\n<h2>v0.2.1</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li>Use react 0.14.0-beta3 as dependency</li>\n</ol>\n<h4>Other changes</h4>\n<ol>\n<li>Improve the handling of the chart on <a href=\"#/updating_data\">updating data</a>\n<ol>\n<li>provide a new <code>pushData</code> method to push new data points, and another <code>alterData</code> method to modify existing data. By creating these methods, it is easy to identify if a change to the Chart is due to data changes or change of height/width of the chart</li>\n</ol></li>\n<li>Add example for serverside rendering</li>\n<li>Add example for downloading chart as png - works for both canvas &amp; svg</li>\n</ol>\n<h4>Internal changes</h4>\n<ol>\n<li>In an attempt to improve performance of pan actions on firefox, the pan actions when done for canvas now do not update the state during pan. To achieve this the following changes were done\n<ol>\n<li>Create Canvas based X &amp; YAxis</li>\n<li>Canvas based <code>EdgeCoordinates</code> and <code>MouseCoordinates</code> and <code>CurrentCoordinate</code></li>\n<li>Create 2 canvas as against one for each chart.\n<ul>\n<li>One canvas that is redrawn on mouse move, this canvas contains the <code>MouseCoordinates</code>, <code>CurrentCoordinate</code>, and</li>\n<li>One canvas that is drawn on zoom or pan action, this contains everything else, including the <code>XAxis</code>, <code>YAxis</code>, the actual Chart series, <code>EdgeCoordinate</code></li>\n</ul></li>\n</ol></li>\n</ol>\n<h2>v0.2</h2>\n<h4>Breaking Changes</h4>\n<ol>\n<li><code>&lt;DataTransform&gt;</code> is now removed, Check out examples on how to use the new <code>dataTransform</code> property of <code>ChartCanvas</code></li>\n<li><code>&lt;OverlaySeries&gt;</code> is now removed, and <code>&lt;DataSeries&gt;</code> is used in its place and also it no longer accepts <code>type</code> instead accepts an <code>indicator</code> prop. This will keep the <code>OverlaySeries</code> extensible for custom overlays too. This is a significant change as it combines indicators and overlays to be interchangable. Multiple <code>DataSeries</code> in the same <code>Chart</code> contribute to the same <code>scales</code></li>\n<li><code>DataSeries</code> no longer accepts <code>xAccessor</code> instead, it is moved to <code>Chart</code>. Use of <code>xAccessor</code> on the <code>Chart</code> is for very simple usecases, since it does not benefit from the stock scale</li>\n<li>Simple moving average and Exponential moving average are converted as indicators</li>\n<li>Axes are now accesible via <code>ReStock.axes.XAxis</code>, <code>ReStock.axes.YAxis</code> against <code>ReStock.XAxis</code>, <code>ReStock.YAxis</code> in 0.1.x</li>\n<li>No more <code>react-stockchart.css</code>. The stylesheet is no longer used. All the styling has been moved to the individual components. If you prefer to have different style attributes you can use the style related  properties of the individual components or create a custom stylesheet with the class defined in each component</li>\n</ol>\n<h4>Other changes</h4>\n<ol>\n<li>Pure React based <code>svg</code> axes. Both <code>XAxis</code> and <code>YAxis</code> do not use <code>d3</code> to render inside <code>componentDidMount</code> / <code>componentDidUpdate</code></li>\n<li>Added new indicators/overlays Bollinger band, RSI, MACD</li>\n<li>A new property <code>type</code> is added to <code>ChartCanvas</code> and it takes one of 2 values\n<ul>\n<li><code>svg</code> which creates the chart using pure svg</li>\n<li><code>hybrid</code> which creates the chart using a combination of <code>svg</code> and <code>canvas</code>. <code>canvas</code> is used to draw the different series, like Line, Area, Candlestick, Histogram etc. and <code>svg</code> is used for the <code>XXXTooltip</code>, <code>MousePointer</code>, <code>XAxis</code> <code>YAxis</code> and the <code>EdgeIndicator</code></li>\n</ul></li>\n<li>add <code>jsnext:main</code> to <code>package.json</code> for use with <a href=\"https://github.com/rollup/rollup\">rollup</a></li>\n</ol>\n<hr>\n";

/***/ },
/* 482 */
/***/ function(module, exports) {

module.exports = "<p>Open the dev tools console and see the output of click</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithClickHandlerCallback.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/67894a887e52891aa2a3\">block</a>, <a href=\"http://plnkr.co/edit/gist:67894a887e52891aa2a3?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

module.exports = "<h2>v0.6</h2>\n<p>TODO</p>\n<ol>\n<li><a href=\"http://www.investopedia.com/terms/e/envelope.asp?optm=sa_v2\">Envelope</a></li>\n<li><a href=\"http://www.incrediblecharts.com/indicators/atr_average_true_range_trailing_stops.php\">ATR Trailing stop</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:chandelier_exit\">Chandelier Exit</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:parabolic_sar\">Parabolic SAR</a>\n<ul>\n<li>With mouse hover highlight</li>\n<li>right click context menu</li>\n<li>double click listener</li>\n</ul></li>\n<li>Highlight on mouse hover, right click and double click listener - <img src=\"" + __webpack_require__(57) + "\" alt=\"Done\" title=\"Done\">\n<ul>\n<li>line series</li>\n</ul></li>\n<li>Zoom on y - <img src=\"" + __webpack_require__(57) + "\" alt=\"Done\" title=\"Done\"></li>\n<li>Pan on y - <img src=\"" + __webpack_require__(57) + "\" alt=\"Done\" title=\"Done\"></li>\n<li>Support for pan to load more data - <img src=\"" + __webpack_require__(57) + "\" alt=\"Done\" title=\"Done\"></li>\n<li>Explore refactoring of interactive indicators to use canvas (again)</li>\n<li>opensource the demo</li>\n</ol>\n<h4>New Chart types</h4>\n<ol>\n<li>Line break</li>\n<li>Better Renko/Mean Renko (Tentative)</li>\n</ol>\n<h2>v0.7</h2>\n<p>Guess this can be <code>v1.0.0</code></p>\n<ol>\n<li>Explore removal of svg mode &amp; all svg components completely, so this becomes a canvas only library (Tentative)</li>\n<li>Detailed documentation of each component and its props</li>\n<li>Explore splitting project into multiple modules, one for each type of indicator, chart type</li>\n<li>add LineSeries interpolation</li>\n<li>add AreaSeries gradiant</li>\n<li>Use d3 v4</li>\n<li>Volume Profile (Tentative)\n<ul>\n<li>show/hide Point of control</li>\n<li>show/hide value area</li>\n</ul></li>\n</ol>\n<h2>Sometime in the future…</h2>\n<h4>Features</h4>\n<ol>\n<li>Automatic Support &amp; Resistance trendlines (Tentative)</li>\n<li>Add a playground to see live updates (Tentative)</li>\n</ol>\n<h4>New Indicators (in no particular order or priority)</h4>\n<ol>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:average_directional_index_adx\">ADX</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:aroon\">Aroon</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school%3Atechnical_indicators%3Awilliams_r\">Williams %R</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:vwap_intraday\">Volume Weighted Average Price </a></li>\n<li><a href=\"http://www.incrediblecharts.com/indicators/momentum.php\">Momentum</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:money_flow_index_mfi\">Money flow</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:ichimoku_cloud\">Ichimoku Clouds</a></li>\n<li><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:zigzag\">ZigZag</a></li>\n</ol>\n<p><a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators\">and more…</a></p>\n";

/***/ },
/* 484 */
/***/ function(module, exports) {

module.exports = "<p>Compare with another stock, zoom and pan to see how the comparison works</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithCompare.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/759f1ada33878e3239a5\">block</a>, <a href=\"http://plnkr.co/edit/gist:759f1ada33878e3239a5?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 485 */
/***/ function(module, exports) {

module.exports = "<p>This section describes how to create a new <code>XXXIndicator</code> yourself.</p>\n<h3>Prerequisites:</h3>\n<ul>\n<li>An indicator is plain old javascript, which follows some conventions, so knowledge of javascript is the only prerequisite</li>\n</ul>\n<hr>\n<p>Now before you begin jumping to write a new indicator yourself, I suggest you look at the <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/indicator\">source of a few</a></p>\n<p>The simplest one is <code>SMAIndicator.js</code></p>\n<p>an indicator has to follow the below structure</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >import</span> objectAssign <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"object-assign\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >var</span> defaultOptions <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// some</span>\n    <span class=\"token comment\" spellcheck=\"true\">// default options</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >MyOwnIndicator</span><span class=\"token punctuation\" >(</span>options<span class=\"token punctuation\" >,</span> chartProps<span class=\"token punctuation\" >,</span> dataSeriesProps<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// options - The options provided in DataSeries</span>\n    <span class=\"token comment\" spellcheck=\"true\">// chartProps - the props object of the Chart surrounding this element</span>\n    <span class=\"token comment\" spellcheck=\"true\">// dataSeriesProps - the props object of the DataSeries where this indicator is used</span>\n\n    <span class=\"token keyword\" >var</span> prefix <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`chart_</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span> chartProps<span class=\"token punctuation\" >.</span>id <span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >var</span> key <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`overlay_</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span> dataSeriesProps<span class=\"token punctuation\" >.</span>id <span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >var</span> settings <span class=\"token operator\" >=</span> <span class=\"token function\" >objectAssign</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> defaultOptions<span class=\"token punctuation\" >,</span> options<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >function</span> <span class=\"token function\" >indicator</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token punctuation\" >}</span>\n\n    indicator<span class=\"token punctuation\" >.</span>options <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> settings<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n    indicator<span class=\"token punctuation\" >.</span>calculate <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// calculate the new values for the data provided</span>\n        <span class=\"token comment\" spellcheck=\"true\">// use prefix &amp; key above to create any new fields under</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      data[i][prefix][key] = ...;</span>\n        <span class=\"token comment\" spellcheck=\"true\">// This is so indicators do not override each other and it is easy to troubleshoot the source of the problem</span>\n\n        <span class=\"token keyword\" >return</span> modifiedData<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>yAccessor <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// returns a function which is the yAccessor, below is an example</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n            <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>d <span class=\"token operator\" >&amp;&amp;</span> d<span class=\"token punctuation\" >[</span>prefix<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token keyword\" >return</span> d<span class=\"token punctuation\" >[</span>prefix<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>stroke <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optional method to return the stroke color</span>\n        <span class=\"token keyword\" >return</span> stroke<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>domain <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optional method if you want to over ride the domain which react-stockcharts calculates, used in RSI</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>yTicks <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// optinoal method if you want only certain values to be displayed as yTicks, used inRSI</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >[</span>settings<span class=\"token punctuation\" >.</span>overSold<span class=\"token punctuation\" >,</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> settings<span class=\"token punctuation\" >.</span>overBought<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>foo <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// if you need add your own functions here</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>bar <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// if you need add your own functions here</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    indicator<span class=\"token punctuation\" >.</span>isMyOwnIndicator <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// it is also advisable to create this function returning true</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      this can be used by your custom Tooltip to format the values appropriately</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> indicator<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >default</span> MyOwnIndicator<span class=\"token punctuation\" >;</span>\n</code></pre>\n";

/***/ },
/* 486 */
/***/ function(module, exports) {

module.exports = "<p>This section describes how to create a new <code>XXXSeries</code> yourself.</p>\n<h3>Prerequisites:</h3>\n<ul>\n<li>good understanding of svg and different shapes</li>\n<li>good understanding of HTML5 canvas api</li>\n<li>Knowledge of d3 scales - the <a href=\"https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear\">linear scale</a> is used heavily</li>\n</ul>\n<h3>Some terminology</h3>\n<h4>xAccessor / yAccessor</h4>\n<p>given a datapoint, <code>xAccessor(dataPoint)</code> returns the xValue</p>\n<h4>xScale / yScale</h4>\n<p>given a xValue <code>xScale(xValue)</code> converts that value to a pixel location on the x scale. A scale converts a domain of say <code>1/1/2010</code> to <code>1/1/2015</code> to a range of say 0 - 500 px. So <code>xScale(new Date(2010, 1, 1))</code> would return <code>0</code> and any date greater that that would return a value above 0 and a date before 1/1/2010 would result in a -ve number on the scale.</p>\n<h4>plotData</h4>\n<p>This is an array of data points which have to be drawn on the chart.</p>\n<h4>ctx</h4>\n<p>This is the HTML5 canvas context, you will have to have a decent understanding of how to use it, teaching that is beyond the scope of this section.</p>\n<h4>indicator</h4>\n<p>For derived Series like say the MACD or RSI, the indicator passed to the <code>DataSeries</code> is available from <code>props</code></p>\n<h4>compareSeries</h4>\n<p>TODO - Write more on how to use <code>compareSeries</code></p>\n<hr>\n<p>Now before you begin jumping to write a new series yourself, I suggest you look at the <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series\">source of a few Series</a></p>\n<ul>\n<li><code>Area.jsx</code></li>\n<li><code>Line.jsx</code></li>\n<li><code>StraightLine.jsx</code></li>\n</ul>\n<p>are not series themselves but are building blocks which are used in other Series. See <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series/StochasticSeries.jsx\">StochasticSeries.jsx</a>, <a href=\"https://github.com/rrag/react-stockcharts/tree/master/src/lib/series/RSISeries.jsx\">RSISeries.jsx</a> for some examples of how these building blocks are used to create a more complex Series.</p>\n<p>If you build a new Series with just these building blocks, you do not need to handle the drawing of the chart on svg or canvas as these building blocks handle it. But if you are creating a series without these or adding some custom features, the following rules apply</p>\n<p>It is necessary that all Series be Pure, meaning, they have no state and given the same set of <code>props</code> as input the same output is provided on both canvas and svg depending on what is configured.</p>\n<p><del>Since we depend on React 0.14 for the library, we might as well use the <a href=\"https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d\">Components as Functions</a>.</del></p>\n<p>some boilerplate code below</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >import</span> React <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"react\"</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> ReStock <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"react-stockcharts\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> wrap <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> ReStock<span class=\"token punctuation\" >.</span>series<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >MyNewSeries</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> props <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The following are available from props</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// plotData is an array containing the points to be displayed on the screen. This is not the same as the data</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      you provided as input. It is most likely smaller in size since it contains a filtered list of items </span>\n        <span class=\"token comment\" spellcheck=\"true\">//      which are to be displayed for the domain of xScale</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The x &amp; y Accessor are used to get the x &amp; y value for each element in the plotData</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// The x &amp; y Scale can be used to get the value in pixels for a x, y value</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> xAccessor<span class=\"token punctuation\" >,</span> yAccessor<span class=\"token punctuation\" >,</span> xScale<span class=\"token punctuation\" >,</span> yScale<span class=\"token punctuation\" >,</span> plotData <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n\n        <span class=\"token comment\" spellcheck=\"true\">// In the event there is a CompareSeries in that Chart this is available</span>\n        <span class=\"token comment\" spellcheck=\"true\">// TODO explain more about compare series and why it is special</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> compareSeries <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// indicator is available if you have used one on the DataSeries surrounding this Series</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Read more on how to write an indicator in the \"Custom - Create indicator\" section</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> indicator <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// this is available if there is a stroke / fill defined in the DataSeries surrounding this Series</span>\n        <span class=\"token comment\" spellcheck=\"true\">//      or the stroke / fill defined in the indicator above</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> stroke<span class=\"token punctuation\" >,</span> fill <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// type is the value you have provided at the ChartCanvas, it can be \"svg\" or \"hybrid\"</span>\n        <span class=\"token comment\" spellcheck=\"true\">// height and width of this Chart</span>\n\n        <span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> type<span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >,</span> width <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> props<span class=\"token punctuation\" >;</span>\n\n        <span class=\"token comment\" spellcheck=\"true\">// In addition to the above, any props you define when using this component are also available.</span>\n        <span class=\"token comment\" spellcheck=\"true\">// If say you create a prop called xAccessor, this will override the xAccessor provided by react-stockcharts</span>\n\n        <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n        <span class=\"token keyword\" >return</span> svg<span class=\"token punctuation\" >;</span> <span class=\"token comment\" spellcheck=\"true\">/* return an svg element */</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\nMyNewSeries<span class=\"token punctuation\" >.</span>drawOnCanvas <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >,</span> ctx<span class=\"token punctuation\" >,</span> xScale<span class=\"token punctuation\" >,</span> yScale<span class=\"token punctuation\" >,</span> plotData<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// This is an optional method</span>\n    <span class=\"token comment\" spellcheck=\"true\">// having this static method on your component will make</span>\n    <span class=\"token comment\" spellcheck=\"true\">// this method to be called on pan action</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// If you are creating a series based on only the building blocks listed above this method is not needed</span>\n\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var { xAccessor, yAccessor } = props;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.beginPath();</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.strokeStyle = \"red\";</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.lineWidth = 3;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var first = plotData[0];</span>\n    <span class=\"token comment\" spellcheck=\"true\">// var last = plotData[plotData.length - 1];</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.moveTo(xScale(xAccessor(first)), yScale(yAccessor(first)));</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.lineTo(xScale(xAccessor(last)), yScale(yAccessor(last)));</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ctx.stroke();</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// This is very important. You need to wrap your series, so ReStock knows to provide these props</span>\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >default</span> <span class=\"token function\" >wrap</span><span class=\"token punctuation\" >(</span>MyNewSeries<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n";

/***/ },
/* 487 */
/***/ function(module, exports) {

module.exports = "<p>Creating a dark background is simply modifying some of the props to use the colors you want. The important thing to note here is that <code>canvas</code> &amp; <code>svg</code> are transparent, so the background is simply controlled by css. For the example below the background is configured as</p>\n<pre><code class=\"language-css\"><span class=\"token selector\" >.dark</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token property\" >background</span><span class=\"token punctuation\" >:</span> #303030<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n</code></pre>\n<p>There are multiple other properties which have to be customized to make the chart appear as below. see them all in the <a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithDarkTheme.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/23dd469fe32d7fc1977c\">block</a>, <a href=\"http://plnkr.co/edit/gist:23dd469fe32d7fc1977c?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 488 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithEdge.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/70ea3fe28ad35bf3ed4c\">block</a>, <a href=\"http://plnkr.co/edit/gist:70ea3fe28ad35bf3ed4c?p=preview\">plunker</a></p>\n<p><code>EdgeIndicator</code>s are inside each <code>Chart</code>, can be of type <code>first</code> or <code>last</code>, can be located <code>left</code> or <code>right</code> and orient <code>left</code> or <code>right</code>. Below you see edges <code>first</code> and <code>last</code> for all the overlays and also for the <code>volume</code> histogram.</p>\n<p>The edge values are updated on zoom and pan also</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> format <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >\"d3-format\"</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >...</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#FF0000\"</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema20<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>ema50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#FF0000\"</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >...</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#0F0F0F<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#0F0F0F<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>first<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EdgeIndicator</span> <span class=\"token attr-name\" >itemType</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>last<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >edgeAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >accessor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>smaVolume50<span class=\"token punctuation\" >.</span><span class=\"token function\" >fill</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n";

/***/ },
/* 489 */
/***/ function(module, exports) {

module.exports = "<p>Elder Impulse Indicator</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:elder_impulse_system\">plot</a> it</p>\n<p>green bars indicate oportunities for long, and red bars for short. Blue bars are neither</p>\n<p>This indicator is a little tricky because the main chart has to be drawn <strong>after</strong> the MACD and the EMA are calculated. The indicator is quite flexible in that, it extends the Elder Impulse system of comparing an <code>EMA</code> and <code>MACD</code> to comparing 2 or more of <em>any</em> indicators. Below example compares <code>EMA(12)</code> with the <code>MACD(26, 12, 9)</code> histogram</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/OHLCChartWithElderImpulseIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d26ef33a49317e2841c9\">block</a>, <a href=\"http://plnkr.co/edit/gist:d26ef33a49317e2841c9?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 490 */
/***/ function(module, exports) {

module.exports = "<p>Elder Ray Indicator</p>\n<p>Learn more about how to <a href=\"http://stockmarketstudent.com/elder-ray-index/\">plot</a> it</p>\n<p>This chart is also an example of OHLC chart</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/OHLCChartWithElderRayIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/0942a5f884a49efa7a14\">block</a>, <a href=\"http://plnkr.co/edit/gist:0942a5f884a49efa7a14?p=preview\">plunker</a> of this example</p>\n";

/***/ },
/* 491 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>create a Fib retracement - click, mousemove, click</li>\n<li>Once a fib is drawn it gets out of draw mode automatically. To get back into draw mode again - Press D</li>\n<li>Enter draw mode again - Press D</li>\n<li>Get out of draw mode - Press ESC</li>\n<li>Delete the last drawn retracement - Press DEL</li>\n<li>When not in draw mode\n<ul>\n<li>click and drag the fib when you get a move cursor</li>\n<li>click and drag when you get the resize cursor - Work in progress</li>\n</ul></li>\n</ul>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithFibonacciInteractiveIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/82bc46e6566618e429d9\">block</a>, <a href=\"http://plnkr.co/edit/gist:82bc46e6566618e429d9?p=preview\">plunker</a></p>\n";

/***/ },
/* 492 */
/***/ function(module, exports) {

module.exports = "<p>The financetime scale takes the input data and converts to linear and plots time on the axis. The outcome is quite interesting. This scale is particularly of use not just for simple time series data, but more importantly for charts which are dependent on price movement, think Point &amp; Figure, Line break, Kagi, Renko.</p>\n<p>scale provides ticks of the format</p>\n<ul>\n<li>Start of year as <code>YYYY</code> e.g. 2013</li>\n<li>Start of Quarter as <code>mmm YYYY</code> e.g. Oct 2013</li>\n<li>Start of Month <code>as mmm</code> e.g. Nov</li>\n<li>Start of Week as <code>dd mmm</code> e.g. 25 Nov</li>\n<li>day as <code>a dd</code> e.g. Wed 27</li>\n</ul>\n";

/***/ },
/* 493 */
/***/ function(module, exports) {

module.exports = "<p>Force Index Indicator</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:force_index\">plot</a> it</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithForceIndexIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/1741fe3e882f0eb144af\">block</a>, <a href=\"http://plnkr.co/edit/gist:1741fe3e882f0eb144af?p=preview\">plunker</a></p>\n";

/***/ },
/* 494 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/GroupedBarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/f683b0c93d839ac8af55\">block</a>, <a href=\"http://plnkr.co/edit/gist:f683b0c93d839ac8af55?p=preview\">plunker</a></p>\n";

/***/ },
/* 495 */
/***/ function(module, exports) {

module.exports = "<p>Also known as &quot;average bar&quot;, used to identify trends and filter out noise. Learn more about how to construct one <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:heikin_ashi\">here</a> and <a href=\"http://www.investopedia.com/articles/technical/04/092204.asp\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HaikinAshi.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/51379c24e9751d46dcea\">block</a>, <a href=\"http://plnkr.co/edit/gist:51379c24e9751d46dcea?p=preview\">plunker</a></p>\n";

/***/ },
/* 496 */
/***/ function(module, exports) {

module.exports = "<p>Notice the <code>flipScales</code> on the <code>BarSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HorizontalBarChart.jsx\">source</a></p>\n";

/***/ },
/* 497 */
/***/ function(module, exports) {

module.exports = "<p>Notice the <code>flipScales</code> on the <code>StackedBarSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/HorizontalStackedBarChart.jsx\">source</a></p>\n";

/***/ },
/* 498 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithHoverTooltip.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/9a070195e699d133932b3f368fe702d3\">block</a>, <a href=\"http://plnkr.co/edit/gist:9a070195e699d133932b3f368fe702d3?p=preview\">plunker</a></p>\n";

/***/ },
/* 499 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/f11fcc9d0867a34789c2efd346ca112a\">block</a>, <a href=\"http://plnkr.co/edit/gist:f11fcc9d0867a34789c2efd346ca112a?p=preview\">plunker</a></p>\n";

/***/ },
/* 500 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/dc853a365171d1770ada7ecc107d08de\">block</a>, <a href=\"http://plnkr.co/edit/gist:dc853a365171d1770ada7ecc107d08de?p=preview\">plunker</a></p>\n";

/***/ },
/* 501 */
/***/ function(module, exports) {

module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:kagi\">here</a></p>\n<p>Kagi consists of <em>Yin</em> and <em>Yang</em>, which is represented as red and green respectively. An overly simple rule is buy on Yang and sell on Yin.</p>\n<p>ATR(14) is used as the default reversal amount.</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/Kagi.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d1e5b75ac12f754bb21d\">block</a>, <a href=\"http://plnkr.co/edit/gist:d1e5b75ac12f754bb21d?p=preview\">plunker</a></p>\n";

/***/ },
/* 502 */
/***/ function(module, exports) {

module.exports = "<p>The real test in performance is showing a chart with a lot of data points and more than a few indicators.  As an example, let us work with MSFT from 1986-03-13 till 2015-06-05</p>\n<p>That is more than 7000 one day periods, how can all that fit into one screen? Although technically it can be done there are a few problems</p>\n<ol>\n<li>Every time you zoom/pan a chart with that many data points it just does not work. Browsers do not have the power to recalculate the scales for the new domain and appear responsive.</li>\n<li>Even with cross hair and tool tip you could see the lag</li>\n</ol>\n<p>Fortunately seeing end of day data over 30 years on a single chart is not really useful. React stockcharts has sane defaults to show 1 data point per pixel width. When you zoom above that it jumps an interval, say from end of day to end of week to end of month, this gives a better representation of the overall price movement. This technique is employed by many trading systems to show the larger time range.</p>\n<p>* Period can be 1min, 5min, … 1 day, 1 week, 1 month</p>\n<p>Let us see all this in action for MSFT 1986-03-13 till 2015-03-26</p>\n";

/***/ },
/* 503 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/next/docs/lib/charts/MovingAverageCrossOverAlgorithm.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/7feb29450469cf60773c520133a31511\">block</a>, <a href=\"http://plnkr.co/edit/gist:7feb29450469cf60773c520133a31511?p=preview\">plunker</a></p>\n";

/***/ },
/* 504 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/next/docs/lib/charts/MovingAverageCrossOverAlgorithmV2.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/b944f7ef22a42956198d3384c05f1777\">block</a>, <a href=\"http://plnkr.co/edit/gist:b944f7ef22a42956198d3384c05f1777?p=preview\">plunker</a></p>\n";

/***/ },
/* 505 */
/***/ function(module, exports) {

module.exports = "<p>Moving Average Convergence Divergence (MACD) indicator with defaults</p>\n<p>Learn more about how to <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:moving_average_convergence_divergence_macd\">plot</a> it</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithMACDIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/109a2b8021689e1ffc79\">block</a>, <a href=\"http://plnkr.co/edit/gist:109a2b8021689e1ffc79?p=preview\">plunker</a></p>\n";

/***/ },
/* 506 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithCHMousePointer.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/261fa4bc7b67536eb789\">block</a>, <a href=\"http://plnkr.co/edit/gist:261fa4bc7b67536eb789?p=preview\">plunker</a></p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >70</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >70</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MouseCoordinateY</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >at</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d3<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".2f\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >150</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>w<span class=\"token punctuation\" >,</span> h<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> h <span class=\"token operator\" >-</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d3<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MouseCoordinateX</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >at</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d3<span class=\"token punctuation\" >.</span>time<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"%Y-%m-%d\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MouseCoordinateY</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >at</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >displayFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d3<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\".4s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#FF0000\"</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CrossHairCursor</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EventCapture</span> <span class=\"token attr-name\" >mouseMove</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TooltipContainer</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>OHLCTooltip</span> <span class=\"token attr-name\" >forChart</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token operator\" >-</span><span class=\"token number\" >40</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>TooltipContainer</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p><code>EventCapture</code> is used to capture mousemove, scroll/zoom and drag events</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EventCapture</span> <span class=\"token attr-name\" >mouseMove</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>By default none of the events are captured, and each has to be enabled individually <code>mouseMove</code> is enabled above.</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CrossHairCursor</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>Displays the crosshair at the mouse position. If you prefer a different type of cursor, just swap this out with a custom one</p>\n<p>Notice there is a <code>MouseCoordinateY</code> for each <code>Chart</code>, this shows the value of y mouse pointer for each chart. The different props are self explanatory</p>\n<p><code>MouseCoordinateX</code> is also self explanatory, you could have multiple of these with different <code>at</code> and <code>orient</code> values to show the x coordinate multiple times at different places</p>\n<p>And for the tooltip on the top left</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TooltipContainer</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>OHLCTooltip</span> <span class=\"token attr-name\" >forChart</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token operator\" >-</span><span class=\"token number\" >40</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>TooltipContainer</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>use the <code>origin</code> and <code>margin</code> of <code>ChartCanvas</code> to adjust the position of the tooltip. You can also create your custom tooltip, by swapping out <code>OHLCTooltip</code> with your own</p>\n";

/***/ },
/* 507 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithMA.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/a27298bb7ae613d48ba2\">block</a>, <a href=\"http://plnkr.co/edit/gist:a27298bb7ae613d48ba2?p=preview\">plunker</a></p>\n";

/***/ },
/* 508 */
/***/ function(module, exports) {

module.exports = "<h4>React Stockcharts - Built with <a href=\"http://facebook.github.io/react/\">React JS</a> and <a href=\"http://d3js.org/\">d3</a></h4>\n<p>React Stockcharts provides a flexible api to create charts that represent time series data. You can</p>\n<ul>\n<li>add custom chart components</li>\n<li>add custom indicators</li>\n<li>access the <code>svg</code> elements and styling with CSS (when using svg)</li>\n<li>get fast performance to pan and zoom actions, when using the hybrid mode</li>\n</ul>\n<p>There are many charting libraries available, but I feel there are very few that provide the features and flexibility to create stock charts that compete with the likes of the ones provided by commercial trading systems. Here is my humble attempt.</p>\n";

/***/ },
/* 509 */
/***/ function(module, exports) {

module.exports = "<p>Advanced chart type plots price action. Notice that the x axis is not linear.</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/docs/doku.php?id=other-tools:pnf-charts\">here</a></p>\n<p>default is 3 box reversal.</p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/PointAndFigure.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/d43ef867bead0f1de663\">block</a>, <a href=\"http://plnkr.co/edit/gist:d43ef867bead0f1de663?p=preview\">plunker</a></p>\n";

/***/ },
/* 510 */
/***/ function(module, exports) {

module.exports = "<p>Similar to Point and Figure charts in that Renko plots the price movement ignoring the time. Each brick is formed on a different column when the price moves beyond a threshold.</p>\n<p>Brick size defaults to ATR (14)</p>\n<p>Learn more about it <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:renko\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/Renko.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/df51fa445c26e123beb9\">block</a>, <a href=\"http://plnkr.co/edit/gist:df51fa445c26e123beb9?p=preview\">plunker</a></p>\n";

/***/ },
/* 511 */
/***/ function(module, exports) {

module.exports = "<p>The chart below has an RSI and ATR indicator</p>\n<p>Learn more about constructing a RSI <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:relative_strength_index_rsi\">here</a></p>\n<p>Learn more about constructing a ATR <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:average_true_range_atr\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithRSIIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/78817a1ccf0a450eed0c\">block</a>, <a href=\"http://plnkr.co/edit/gist:78817a1ccf0a450eed0c?p=preview\">plunker</a></p>\n";

/***/ },
/* 512 */
/***/ function(module, exports) {

module.exports = "<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>LineSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ScatterSeries</span> <span class=\"token attr-name\" >marker</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>Circle<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >markerProps</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> r<span class=\"token punctuation\" >:</span> <span class=\"token number\" >3</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>where</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\" >var</span> <span class=\"token punctuation\" >{</span> LineSeries<span class=\"token punctuation\" >,</span> ScatterSeries<span class=\"token punctuation\" >,</span> Circle <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> ReStock<span class=\"token punctuation\" >.</span>series<span class=\"token punctuation\" >;</span>\n</code></pre>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/LineAndScatterChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/95ffd539fa4e0b4544cf\">block</a>, <a href=\"http://plnkr.co/edit/gist:95ffd539fa4e0b4544cf?p=preview\">plunker</a></p>\n";

/***/ },
/* 513 */
/***/ function(module, exports) {

module.exports = "<p>An example with <code>SingleValueTooltip</code> &amp; <code>widthRatio</code> prop on <code>HistogramSeries</code></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/AreaChartWithZoomPan.jsx\">source</a></p>\n";

/***/ },
/* 514 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/StackedBarChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/df6a83dce5fdf71fc73e\">block</a>, <a href=\"http://plnkr.co/edit/gist:df6a83dce5fdf71fc73e?p=preview\">plunker</a></p>\n";

/***/ },
/* 515 */
/***/ function(module, exports) {

module.exports = "<p>Learn more about constructing a Stochastic Oscillator <a href=\"http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:stochastic_oscillator_fast_slow_and_full\">here</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithFullStochasticsIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/3957c24595cc025eb3ef\">block</a>, <a href=\"http://plnkr.co/edit/gist:3957c24595cc025eb3ef?p=preview\">plunker</a></p>\n<p>this example also introduces a grid, look for <code>var showGrid = true;</code> in the example source.</p>\n";

/***/ },
/* 516 */
/***/ function(module, exports) {

module.exports = "<h4>SVG vs Canvas</h4>\n<p>When deciding on a web technology for charts - not just any charts, the ones which are highly responsive to interactions -  representing many many data points, the decision of performance is bound to come up, and HTML5 presents options.</p>\n<p>I am not going to debate between the pros and cons between SVG and Canvas. They are discussed at great length <a href=\"http://stackoverflow.com/questions/12310024/fast-and-responsive-interactive-charts-graphs-svg-canvas-other\">here</a> and <a href=\"http://stackoverflow.com/questions/5882716/html5-canvas-vs-svg-vs-div\">here</a>. Needless to say they are both very powerful and for charting, there really is no right answer.</p>\n<p>Using <code>svg</code> is very convenient from a developer standpoint. Easy to debug, even easier to style. Using css to style a chart is just too cool to pass. However there comes a point where performance &amp; memory become a bottleneck, especially in tablets/mobile (well in desktops too). Pan actions lag behind and not so responsive. and when looking at a lot of data points like the chart below, there are approx 300 DOM elements. and on pan action all these are updated to different <code>x</code>, <code>y</code>, <code>height</code> &amp; <code>width</code>. The time taken to calculate the new values on pan is negligible (&lt;10 ms) but when rendering them, you can see for yourself.</p>\n<p>Here is where <code>canvas</code> shines. Given this dilemma react-stockcharts provides 2 options.</p>\n<ul>\n<li>svg only</li>\n<li>svg and canvas</li>\n</ul>\n<p>Except the tooltip everything else, including the crosshair, axes, the chart series are all drawn on canvas. The tooltip I am retaining it in <code>svg</code> because of the ability to attach mouse hover and click event to the <code>svg</code> DOM. If there are better suggestions to use <code>canvas</code> for tooltip and also support click events and mouse hover state please share them.</p>\n<p>The SVG approach is best for server side rendering, while for browser side I recommend using the hybrid mode for improved responsiveness to pan actions.</p>\n<h4>DOM Manipulation</h4>\n<p>All SVG components use ReactJS, to create the svg elements, there is no DOM manipulation. For dealing with Canvas, since canvas is a DOM object, it has to be done via a <code>componentDidMount</code> / <code>componentDidUpdate</code></p>\n<hr>\n<p>Below you can see the improvements in responsiveness to pan actions when using the svg + canvas option</p>\n";

/***/ },
/* 517 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li>create a line - click, mousemove, click\n<ul>\n<li>by default the line edge snaps to the nearest high or low, press Shift when you click to disable snap temporarily</li>\n</ul></li>\n<li>Once a line is drawn it gets out of draw mode automatically. To get back into draw mode again - Press D</li>\n<li>Delete the last drawn line - Press DEL</li>\n<li>Get out of draw mode - Press ESC</li>\n<li>When not in draw mode\n<ul>\n<li>click and drag the edges of the trend line, or the trend line itself</li>\n</ul></li>\n</ul>\n<p>More Work in progress to implement - modifying indicators after it is drawn - <a href=\"https://github.com/rrag/react-stockcharts/issues/94\">#94</a></p>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithInteractiveIndicator.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/63f666ef1159691d76cc\">block</a>, <a href=\"http://plnkr.co/edit/gist:63f666ef1159691d76cc?p=preview\">plunker</a></p>\n";

/***/ },
/* 518 */
/***/ function(module, exports) {

module.exports = "<p>This example illustrates how to push new data points or alter existing data points to a chart after initial render.</p>\n<p>When just update the <code>data={...}</code> on the <code>ChartCanvas</code> and see the new points</p>\n<p>A live example below, Here are a keys to press to see the push and alter data2</p>\n<table>\n<thead>\n<tr><th>key</th><th>outcome</th></tr>\n</thead>\n<tbody>\n<tr><td>1</td><td>push new data points</td></tr>\n<tr><td>0/Esc</td><td>stop all push/alter</td></tr>\n<tr><td>+</td><td>increase the speed</td></tr>\n<tr><td>-</td><td>reduce the speed</td></tr>\n</tbody>\n</table>\n<p>Look for the <a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithUpdatingData.jsx\">source</a></p>\n";

/***/ },
/* 519 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV2.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/0a54ca33b05001f17f8f\">block</a>, <a href=\"http://plnkr.co/edit/gist:0a54ca33b05001f17f8f?p=preview\">plunker</a></p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>w<span class=\"token punctuation\" >,</span> h<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> h <span class=\"token operator\" >-</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >150</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d3<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"red\"</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>The portion of interest here is</p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >origin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>w<span class=\"token punctuation\" >,</span> h<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> h <span class=\"token operator\" >-</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >150</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n</code></pre>\n<p>the chart has a defined <code>height</code> of 150.</p>\n<p><code>origin</code> can be either a coordinate [x, y] or a function which returns a <code>[x, y]</code>, the default value is <code>[0, 0]</code></p>\n<p><code>(w, h) =&gt; [0, h - 150]</code> is the same as <code>function (w, h) { return [0, h - 150]; }</code></p>\n<p>given the <code>width</code> and <code>height</code> available inside the <code>ChartCanvas</code> as input, this function returns an origin of <code>[0, height - 150]</code> to draw the volume histogram</p>\n<p>Similarly the <code>fill</code> of <code>BarSeries</code> accepts either</p>\n<ul>\n<li>a function which returns a string representing the color</li>\n<li>or a string representing the color</li>\n</ul>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >fill</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span>d<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>close <span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>open <span class=\"token operator\" >?</span> <span class=\"token string\" >\"#6BA583\"</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"red\"</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<h4>Another Version</h4>\n<p>In this you can see how the volume histogram and the candlestick chart do not overlap.</p>\n";

/***/ },
/* 520 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV3.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/2dc9dd83567cd41c830a\">block</a>, <a href=\"http://plnkr.co/edit/gist:2dc9dd83567cd41c830a?p=preview\">plunker</a></p>\n";

/***/ },
/* 521 */
/***/ function(module, exports) {

module.exports = "<p>There are a couple of ways Volume histogram is usually displayed. Let us see them.</p>\n";

/***/ },
/* 522 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickStockScaleChartWithVolumeBarV1.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/88cd65baa331d57caa83\">block</a>, <a href=\"http://plnkr.co/edit/gist:88cd65baa331d57caa83?p=preview\">plunker</a></p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ChartCanvas</span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>width<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >height</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >400</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >margin</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>left<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> right<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span> top<span class=\"token punctuation\" >:</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span> bottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>type<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >seriesName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>MSFT<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >xScaleProvider</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>discontinuousTimeScaleProvider<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >xExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Date</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >2012</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >[</span>d<span class=\"token punctuation\" >.</span>high<span class=\"token punctuation\" >,</span> d<span class=\"token punctuation\" >.</span>low<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>XAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span>/</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CandlestickSeries</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Chart</span> <span class=\"token attr-name\" >id</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >yExtents</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>YAxis</span> <span class=\"token attr-name\" >axisAt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >orient</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ticks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >tickFormat</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d3<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >\"s\"</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>BarSeries</span> <span class=\"token attr-name\" >yAccessor</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>d <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> d<span class=\"token punctuation\" >.</span>volume<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Chart</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ChartCanvas</span><span class=\"token punctuation\" >></span></span>\n\n</code></pre>\n<p>Look!!! there is more than one <code>Chart</code> there. Each <code>Chart</code> has different <code>yExtents</code> to indicate its domain.</p>\n<p>Remember all <code>Chart</code>s use the same <code>data</code> and <code>xScale</code> but each <code>Chart</code> has <code>yScale</code>.</p>\n<p>But… I don’t want the Volume chart to span the whole chart height. I got you covered.</p>\n";

/***/ },
/* 523 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/VolumeProfileBySessionChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/91f4d66273e693b2054161dc8ff170a2\">block</a>, <a href=\"http://plnkr.co/edit/gist:91f4d66273e693b2054161dc8ff170a2?p=preview\">plunker</a></p>\n";

/***/ },
/* 524 */
/***/ function(module, exports) {

module.exports = "<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/VolumeProfileChart.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/7be99030051fc80c070cfe5b7abf8c4f\">block</a>, <a href=\"http://plnkr.co/edit/gist:7be99030051fc80c070cfe5b7abf8c4f?p=preview\">plunker</a></p>\n";

/***/ },
/* 525 */
/***/ function(module, exports) {

module.exports = "<h2><span style=\"color:steelblue\">Click on the chart to focus it, and then zoom by mouse scroll, pan by dragging the chart</span></h2>\n<p><a href=\"https://github.com/rrag/react-stockcharts/blob/master/docs/lib/charts/CandleStickChartWithZoomPan.jsx\">source</a>, <a href=\"http://bl.ocks.org/rrag/a8465abe0061df1b7976\">block</a>, <a href=\"http://plnkr.co/edit/gist:a8465abe0061df1b7976?p=preview\">plunker</a></p>\n<p>The only change is enabling <code>zoom</code> and <code>pan</code></p>\n<pre><code class=\"language-jsx\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EventCapture</span> <span class=\"token attr-name\" >mouseMove</span> <span class=\"token attr-name\" >zoom</span> <span class=\"token attr-name\" >pan</span> <span class=\"token punctuation\" >/></span></span>\n</code></pre>\n<p>enabling <code>zoom</code> and <code>pan</code> to <code>true</code></p>\n<p>By default the chart is not focused. meaning. you have to click on the chart to get focus, and only then will the scroll events trigger a zoom.</p>\n";

/***/ },
/* 526 */,
/* 527 */,
/* 528 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(44);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _d3Dsv = __webpack_require__(42);

var _d3Array = __webpack_require__(9);

var _d3TimeFormat = __webpack_require__(7);

var _reactStockcharts = __webpack_require__(1);

var _reactStockcharts2 = _interopRequireDefault(_reactStockcharts);

__webpack_require__(43);

var _navbar = __webpack_require__(157);

var _navbar2 = _interopRequireDefault(_navbar);

var _sidebar = __webpack_require__(207);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _mainContainer = __webpack_require__(155);

var _mainContainer2 = _interopRequireDefault(_mainContainer);

var _menuGroup = __webpack_require__(156);

var _menuGroup2 = _interopRequireDefault(_menuGroup);

var _MenuItem = __webpack_require__(154);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parseDate = (0, _d3TimeFormat.timeParse)("%Y-%m-%d");
var parseDateTime = (0, _d3TimeFormat.timeParse)("%Y-%m-%d %H:%M:%S");

var DOCUMENTATION = {
	head: "Documentation",
	pages: [
	// require("./lib/page/GettingStartedPage").default,
	// require("./lib/page/QuickStartExamplesPage").default,
	__webpack_require__(194).default, __webpack_require__(200).default, __webpack_require__(186).default, __webpack_require__(165).default, __webpack_require__(167).default]
};

var CHART_TYPES = {
	head: "Chart types",
	pages: [__webpack_require__(159).default, __webpack_require__(184).default, __webpack_require__(163).default, __webpack_require__(160).default, __webpack_require__(178).default, __webpack_require__(198).default, __webpack_require__(180).default, __webpack_require__(181).default, __webpack_require__(164).default, __webpack_require__(203).default,
	// TODO add OHLC chart
	__webpack_require__(179).default, __webpack_require__(183).default, __webpack_require__(195).default, __webpack_require__(197).default, __webpack_require__(189).default]
};

var CHART_FEATURES = {
	head: "Chart features",
	pages: [__webpack_require__(191).default, __webpack_require__(206).default, __webpack_require__(182).default, __webpack_require__(175).default, __webpack_require__(172).default, __webpack_require__(158).default, __webpack_require__(190).default, __webpack_require__(202).default, __webpack_require__(185).default, __webpack_require__(171).default]
};

var INDICATORS = {
	head: "Indicators",
	pages: [__webpack_require__(188).default, __webpack_require__(161).default, __webpack_require__(168).default, __webpack_require__(187).default, __webpack_require__(196).default, __webpack_require__(199).default, __webpack_require__(177).default, __webpack_require__(174).default, __webpack_require__(173).default, __webpack_require__(205).default, __webpack_require__(204).default]
};
var ALGORITHMIC_INDICATORS = {
	head: "Algorithmic Indicators",
	pages: [__webpack_require__(192).default, __webpack_require__(193).default]
};

var INTERACTIVE = {
	head: "Interactive",
	pages: [__webpack_require__(201).default, __webpack_require__(176).default, __webpack_require__(166).default, __webpack_require__(162).default]
};

var CUSTOMIZATION = {
	head: "Customization",
	pages: [__webpack_require__(170).default, __webpack_require__(169).default]
};

var ALL_PAGES = [DOCUMENTATION, CHART_TYPES, CHART_FEATURES, INDICATORS, ALGORITHMIC_INDICATORS, INTERACTIVE];

var pages = (0, _d3Array.merge)(ALL_PAGES.map(function (_) {
	return _.pages;
}));

function compressString(string) {
	string = string.replace(/\s+/g, "_");
	string = string.replace(/[-&]/g, "_");
	string = string.replace(/_+/g, "_");
	string = string.replace(/[.]/g, "");
	string = string.toLowerCase();
	// console.log(string);
	return string;
}

function parseData(parse) {
	return function (d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

if (!window.Modernizr.fetch || !window.Modernizr.promises) {
	__webpack_require__.e/* nsure */(0).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
		__webpack_require__(24);
		__webpack_require__(25);
		loadPage();
	}).bind(null, __webpack_require__));
} else {
	loadPage();
}

function loadPage() {
	var promiseMSFT = fetch("data/MSFT.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return (0, _d3Dsv.tsvParse)(data, parseData(parseDate));
	});
	var promiseMSFTfull = fetch("data/MSFT_full.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return (0, _d3Dsv.tsvParse)(data, parseData(parseDate));
	});
	var promiseIntraDayContinuous = fetch("data/bitfinex_xbtusd_1m.csv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return (0, _d3Dsv.csvParse)(data, parseData(parseDateTime));
	});
	var promiseIntraDayDiscontinuous = fetch("data/MSFT_INTRA_DAY.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return (0, _d3Dsv.tsvParse)(data, parseData(function (d) {
			return new Date(+d);
		}));
	});
	var promiseCompare = fetch("data/comparison.tsv").then(function (response) {
		return response.text();
	}).then(function (data) {
		return (0, _d3Dsv.tsvParse)(data, function (d) {
			d = parseData(parseDate)(d);
			d.SP500Close = +d.SP500Close;
			d.AAPLClose = +d.AAPLClose;
			d.GEClose = +d.GEClose;
			return d;
		});
	});
	var promiseBubbleData = fetch("data/bubble.json").then(function (response) {
		return response.json();
	});
	var promiseBarData = fetch("data/barData.json").then(function (response) {
		return response.json();
	});
	var promisegroupedBarData = fetch("data/groupedBarData.json").then(function (response) {
		return response.json();
	});

	Promise.all([promiseMSFT, promiseMSFTfull, promiseIntraDayContinuous, promiseIntraDayDiscontinuous, promiseCompare, promiseBubbleData, promiseBarData, promisegroupedBarData]).then(function (values) {
		var _values = _slicedToArray(values, 8);

		var MSFT = _values[0];
		var MSFTfull = _values[1];
		var intraDayContinuous = _values[2];
		var intraDayDiscontinuous = _values[3];
		var compareData = _values[4];
		var bubbleData = _values[5];
		var barData = _values[6];
		var groupedBarData = _values[7];

		var horizontalBarData = barData.map(function (_ref) {
			var x = _ref.x;
			var y = _ref.y;
			return { x: y, y: x };
		});
		var horizontalGroupedBarData = groupedBarData.map(function (d) {
			return {
				y: d.x,
				x1: d.y1,
				x2: d.y2,
				x3: d.y3,
				x4: d.y4
			};
		});

		renderPage(MSFT, MSFTfull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData);
		// renderPartialPage(MSFT, MSFTfull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData);
	});
}

function renderPage(data, dataFull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData) {
	var selected = location.hash.replace("#/", "");
	var selectedPage = pages.filter(function (page) {
		return compressString(page.title) === compressString(selected);
	});

	var firstPage = selectedPage.length === 0 ? pages[0] : selectedPage[0];

	// console.log(selected, selectedPage, firstPage);

	var ExamplesPage = function (_React$Component) {
		_inherits(ExamplesPage, _React$Component);

		function ExamplesPage(props) {
			_classCallCheck(this, ExamplesPage);

			var _this = _possibleConstructorReturn(this, (ExamplesPage.__proto__ || Object.getPrototypeOf(ExamplesPage)).call(this, props));

			_this.handleRouteChange = _this.handleRouteChange.bind(_this);
			_this.state = {
				selectedPage: firstPage
			};
			return _this;
		}

		_createClass(ExamplesPage, [{
			key: "handleRouteChange",
			value: function handleRouteChange() {
				var selected = location.hash.replace("#/", "");
				var selectedPage = pages.filter(function (page) {
					return compressString(page.title) === compressString(selected);
				});
				if (selectedPage.length > 0) {
					this.setState({
						selectedPage: selectedPage[0]
					}, function (_) {
						return window.scrollTo(0, 0);
					});
				}
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("hashchange", this.handleRouteChange, false);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var Page = this.state.selectedPage;
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(_navbar2.default, null),
					_react2.default.createElement(
						_mainContainer2.default,
						null,
						_react2.default.createElement(
							_sidebar2.default,
							null,
							ALL_PAGES.map(function (eachGroup, i) {
								return _react2.default.createElement(
									"div",
									{ key: i },
									_react2.default.createElement(
										"h4",
										null,
										eachGroup.head
									),
									_react2.default.createElement(
										_menuGroup2.default,
										null,
										eachGroup.pages.map(function (eachPage, idx) {
											return _react2.default.createElement(_MenuItem2.default, { key: idx, current: eachPage === _this2.state.selectedPage, title: eachPage.title, anchor: compressString(eachPage.title) });
										})
									)
								);
							})
						),
						_react2.default.createElement(Page, { someData: data,
							intraDayContinuousData: intraDayContinuous,
							intraDayDiscontinuousData: intraDayDiscontinuous,
							lotsOfData: dataFull,
							compareData: compareData,
							bubbleData: bubbleData,
							barData: barData,
							groupedBarData: groupedBarData,
							horizontalBarData: horizontalBarData,
							horizontalGroupedBarData: horizontalGroupedBarData })
					)
				);
			}
		}]);

		return ExamplesPage;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(ExamplesPage, null), document.getElementById("chart-goes-here"));
}

function renderPartialPage(data, dataFull, intraDayContinuous, intraDayDiscontinuous, compareData, bubbleData, barData, groupedBarData, horizontalBarData, horizontalGroupedBarData) {

	// var Renko = require("./lib/charts/Renko").init(dataFull);
	// AreaChart
	// AreaChartWithYPercent
	// CandleStickChart
	// CandleStickStockScaleChart
	// CandleStickStockScaleChartWithVolumeBarV1
	// CandleStickStockScaleChartWithVolumeBarV2
	// CandleStickStockScaleChartWithVolumeBarV3
	// CandleStickChartWithCHMousePointer
	// CandleStickChartWithZoomPan
	// CandleStickChartWithMA
	// CandleStickChartWithBollingerBandOverlay
	// CandleStickChartWithEdge
	// CandleStickChartWithCompare
	// CandleStickChartWithEdge  - Lots of data -> data={dataFull}/>
	// CandleStickChartForDiscontinuousIntraDay - intraDayDiscontinuous
	// CandleStickChartWithAnnotation
	// CandleStickChartWithUpdatingData
	// KagiWithUpdatingData
	// RenkoWithUpdatingData
	// PointAndFigureWithUpdatingData
	// CandleStickChartWithMACDIndicator
	// CandleStickChartWithRSIIndicator
	// CandleStickChartWithFullStochasticsIndicator
	// CandleStickChartWithForceIndexIndicator
	// OHLCChartWithElderRayIndicator
	// OHLCChartWithElderImpulseIndicator
	// CandleStickChartWithInteractiveIndicator
	// CandleStickChartWithFibonacciInteractiveIndicator
	// CandleStickChartWithBrush
	// CandleStickChartWithClickHandlerCallback
	// CandleStickChartWithDarkTheme
	// AreaChartWithZoomPan
	// AreaChartWithPointsAndEdge
	// HaikinAshi
	// Kagi
	// PointAndFigure
	// Renko
	var Chart = __webpack_require__(91).default;
	var TypeChooser = _reactStockcharts2.default.helper.TypeChooser;

	// data, dataFull, compareData

	var ExamplesPage = function (_React$Component2) {
		_inherits(ExamplesPage, _React$Component2);

		function ExamplesPage() {
			_classCallCheck(this, ExamplesPage);

			return _possibleConstructorReturn(this, (ExamplesPage.__proto__ || Object.getPrototypeOf(ExamplesPage)).apply(this, arguments));
		}

		_createClass(ExamplesPage, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						TypeChooser,
						{ type: "hybrid" },
						function (type) {
							return _react2.default.createElement(Chart, { data: intraDayDiscontinuous, type: type });
						}
					)
				);
			}
		}]);

		return ExamplesPage;
	}(_react2.default.Component);

	/*
 				<TypeChooser type="svg">
 					{(type) => <Chart data={data} type={type} />}
 				</TypeChooser>
 */


	_reactDom2.default.render(_react2.default.createElement(ExamplesPage, null), document.getElementById("chart-goes-here"));
}

/***/ }
],[528])
});
;
//# sourceMappingURL=react-stockcharts-documentation.a6b612a16fb62d6bdeab.js.map