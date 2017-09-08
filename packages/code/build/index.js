'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Code;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refractor = require('refractor/core.js');
refractor.register(require('refractor/lang/jsx.js'));

function Code(_ref) {
  var children = _ref.children,
      language = _ref.language,
      showLineNumbers = _ref.showLineNumbers;

  return _react2.default.createElement(
    'pre',
    null,
    refractor.highlight(children, 'jsx')
  );
}