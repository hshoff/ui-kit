'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Code;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rehype = require('rehype');

var _rehype2 = _interopRequireDefault(_rehype);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('prismjs/themes/prism.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refractor = require('refractor/core.js');
refractor.register(require('refractor/lang/jsx.js'));

Code.defaultProps = {
  language: 'jsx'
};

function Code(_ref) {
  var className = _ref.className,
      children = _ref.children,
      language = _ref.language,
      style = _ref.style;

  var nodes = refractor.highlight(children, language);
  var html = (0, _rehype2.default)().stringify({ type: 'root', children: nodes }).toString();
  return _react2.default.createElement('pre', {
    style: style,
    className: (0, _classnames2.default)('ui-kit-code', className),
    dangerouslySetInnerHTML: { __html: html }
  });
}