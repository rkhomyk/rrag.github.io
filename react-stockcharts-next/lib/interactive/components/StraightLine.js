"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.isHovering = isHovering;
exports.getSlope = getSlope;
exports.getYIntercept = getYIntercept;
exports.generateLine = generateLine;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GenericChartComponent = require("../../GenericChartComponent");

var _GenericChartComponent2 = _interopRequireDefault(_GenericChartComponent);

var _GenericComponent = require("../../GenericComponent");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getXY(xValue, yValue, xScale, yScale) {
	return [xScale(xValue), yScale(yValue)];
}

var StraightLine = function (_Component) {
	_inherits(StraightLine, _Component);

	function StraightLine(props) {
		_classCallCheck(this, StraightLine);

		var _this = _possibleConstructorReturn(this, (StraightLine.__proto__ || Object.getPrototypeOf(StraightLine)).call(this, props));

		_this.renderSVG = _this.renderSVG.bind(_this);
		_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
		_this.isHover = _this.isHover.bind(_this);
		return _this;
	}

	_createClass(StraightLine, [{
		key: "isHover",
		value: function isHover(moreProps) {
			var _props = this.props,
			    tolerance = _props.tolerance,
			    onHover = _props.onHover;


			if ((0, _utils.isDefined)(onHover)) {
				var _props2 = this.props,
				    x1Value = _props2.x1Value,
				    x2Value = _props2.x2Value,
				    y1Value = _props2.y1Value,
				    y2Value = _props2.y2Value,
				    type = _props2.type;
				var mouseXY = moreProps.mouseXY,
				    xScale = moreProps.xScale;
				var yScale = moreProps.chartConfig.yScale;

				var _mouseXY = _slicedToArray(mouseXY, 1),
				    mouseX = _mouseXY[0];

				var start = x1Value < x2Value ? getXY(x1Value, y1Value, xScale, yScale) : getXY(x2Value, y2Value, xScale, yScale);

				var end = x1Value > x2Value ? getXY(x1Value, y1Value, xScale, yScale) : getXY(x2Value, y2Value, xScale, yScale);

				var isWithinLineBounds = type === "LINE" && mouseX >= start[0] && mouseX <= end[0];

				if (isWithinLineBounds || type === "RAY" && mouseX >= start[0] || type === "XLINE") {
					var hovering = isHovering(start, end, mouseXY, tolerance);

					// console.log("hovering ->", hovering);

					return hovering;
				}
			}
			return false;
		}
	}, {
		key: "drawOnCanvas",
		value: function drawOnCanvas(ctx, moreProps) {
			var _props3 = this.props,
			    stroke = _props3.stroke,
			    strokeWidth = _props3.strokeWidth,
			    opacity = _props3.opacity;

			var _helper = helper(this.props, moreProps),
			    x1 = _helper.x1,
			    y1 = _helper.y1,
			    x2 = _helper.x2,
			    y2 = _helper.y2;

			ctx.lineWidth = strokeWidth;
			ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	}, {
		key: "renderSVG",
		value: function renderSVG(moreProps) {
			var _props4 = this.props,
			    stroke = _props4.stroke,
			    strokeWidth = _props4.strokeWidth,
			    opacity = _props4.opacity;


			var lineWidth = strokeWidth;

			var _helper2 = helper(this.props, moreProps),
			    x1 = _helper2.x1,
			    y1 = _helper2.y1,
			    x2 = _helper2.x2,
			    y2 = _helper2.y2;

			return _react2.default.createElement("line", {
				x1: x1, y1: y1, x2: x2, y2: y2,
				stroke: stroke, strokeWidth: lineWidth,
				opacity: opacity });
		}
	}, {
		key: "render",
		value: function render() {
			var _props5 = this.props,
			    selected = _props5.selected,
			    onClick = _props5.onClick,
			    onClickOutside = _props5.onClickOutside,
			    interactiveCursorClass = _props5.interactiveCursorClass;
			var _props6 = this.props,
			    onDragStart = _props6.onDragStart,
			    onDrag = _props6.onDrag,
			    onDragComplete = _props6.onDragComplete,
			    onHover = _props6.onHover,
			    onBlur = _props6.onBlur;


			return _react2.default.createElement(_GenericChartComponent2.default, {
				isHover: this.isHover,

				svgDraw: this.renderSVG,
				canvasToDraw: _GenericComponent.getMouseCanvas,
				canvasDraw: this.drawOnCanvas,

				interactiveCursorClass: interactiveCursorClass,
				selected: selected,

				onClick: onClick,
				onClickOutside: onClickOutside,
				onDragStart: onDragStart,
				onDrag: onDrag,
				onDragComplete: onDragComplete,
				onHover: onHover,
				onBlur: onBlur,

				drawOn: ["mousemove", "pan", "drag"]
			});
		}
	}]);

	return StraightLine;
}(_react.Component);

function isHovering(start, end, _ref, tolerance) {
	var _ref2 = _slicedToArray(_ref, 2),
	    mouseX = _ref2[0],
	    mouseY = _ref2[1];

	var m = getSlope(start, end);

	if ((0, _utils.isDefined)(m)) {
		var b = getYIntercept(m, end);
		var y = m * mouseX + b;
		return mouseY < y + tolerance && mouseY > y - tolerance;
	} else {
		return mouseY >= Math.min(start[1], end[1]) && mouseY <= Math.max(start[1], end[1]);
	}
}

function helper(props, moreProps) {
	var x1Value = props.x1Value,
	    x2Value = props.x2Value,
	    y1Value = props.y1Value,
	    y2Value = props.y2Value,
	    type = props.type;
	var xScale = moreProps.xScale,
	    yScale = moreProps.chartConfig.yScale;


	var modLine = generateLine({
		type: type,
		start: [x1Value, y1Value],
		end: [x2Value, y2Value],
		xScale: xScale
	});

	var x1 = xScale(modLine.x1);
	var y1 = yScale(modLine.y1);
	var x2 = xScale(modLine.x2);
	var y2 = yScale(modLine.y2);

	return {
		x1: x1, y1: y1, x2: x2, y2: y2
	};
}

function getSlope(start, end) {
	var m /* slope */ = end[0] === start[0] ? undefined : (end[1] - start[1]) / (end[0] - start[0]);
	return m;
}
function getYIntercept(m, end) {
	var b /* y intercept */ = -1 * m * end[0] + end[1];
	return b;
}

function generateLine(_ref3) {
	var type = _ref3.type,
	    start = _ref3.start,
	    end = _ref3.end,
	    xScale = _ref3.xScale;

	var m /* slope */ = getSlope(start, end);
	// console.log(end[0] - start[0], m)
	var b /* y intercept */ = getYIntercept(m, start);
	// y = m * x + b

	var _xScale$domain = xScale.domain(),
	    _xScale$domain2 = _slicedToArray(_xScale$domain, 2),
	    begin = _xScale$domain2[0],
	    finish = _xScale$domain2[1];

	var x1 = type === "XLINE" ? end[0] > start[0] ? begin : finish : start[0]; // RAY or LINE start is the same

	var y1 = (0, _utils.isNotDefined)(m) ? getYIntercept(0, start) : m * x1 + b;

	var x2 = type === "XLINE" || type === "RAY" ? end[0] > start[0] ? finish : begin : end[0];

	var y2 = (0, _utils.isNotDefined)(m) ? getYIntercept(0, end) : m * x2 + b;

	return { x1: x1, y1: y1, x2: x2, y2: y2 };
}

StraightLine.propTypes = {
	x1Value: _propTypes2.default.any.isRequired,
	x2Value: _propTypes2.default.any.isRequired,
	y1Value: _propTypes2.default.any.isRequired,
	y2Value: _propTypes2.default.any.isRequired,

	interactiveCursorClass: _propTypes2.default.string,
	stroke: _propTypes2.default.string.isRequired,
	strokeWidth: _propTypes2.default.number.isRequired,
	type: _propTypes2.default.oneOf(["XLINE", // extends from -Infinity to +Infinity
	"RAY", // extends to +/-Infinity in one direction
	"LINE"]).isRequired,

	onEdge1Drag: _propTypes2.default.func.isRequired,
	onEdge2Drag: _propTypes2.default.func.isRequired,
	onDragStart: _propTypes2.default.func.isRequired,
	onDrag: _propTypes2.default.func.isRequired,
	onDragComplete: _propTypes2.default.func.isRequired,
	onClick: _propTypes2.default.func.isRequired,
	onClickOutside: _propTypes2.default.func.isRequired,
	onHover: _propTypes2.default.func,
	onBlur: _propTypes2.default.func,

	opacity: _propTypes2.default.number.isRequired,
	defaultClassName: _propTypes2.default.string,

	r: _propTypes2.default.number.isRequired,
	edgeFill: _propTypes2.default.string.isRequired,
	edgeStroke: _propTypes2.default.string.isRequired,
	edgeStrokeWidth: _propTypes2.default.number.isRequired,
	withEdge: _propTypes2.default.bool.isRequired,
	children: _propTypes2.default.func.isRequired,
	tolerance: _propTypes2.default.number.isRequired,
	selected: _propTypes2.default.bool.isRequired
};

StraightLine.defaultProps = {
	onEdge1Drag: _utils.noop,
	onEdge2Drag: _utils.noop,
	onDragStart: _utils.noop,
	onDrag: _utils.noop,
	onDragComplete: _utils.noop,

	onClick: _utils.noop,
	onClickOutside: _utils.noop,

	edgeStrokeWidth: 3,
	edgeStroke: "#000000",
	edgeFill: "#FFFFFF",
	r: 10,
	withEdge: false,
	strokeWidth: 1,
	children: _utils.noop,
	tolerance: 4,
	selected: false
};

exports.default = StraightLine;