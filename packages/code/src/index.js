import React from 'react';
var refractor = require('refractor/core.js');
refractor.register(require('refractor/lang/jsx.js'));

export default function Code({
  children,
  language,
  showLineNumbers,
}) {
  return <pre>{refractor.highlight(children, 'jsx')}</pre>;
}
