import React from 'react';
import rehype from 'rehype';
import cx from 'classnames';

import 'prismjs/themes/prism.css';

var refractor = require('refractor/core.js');
refractor.register(require('refractor/lang/jsx.js'));

Code.defaultProps = {
  language: 'jsx',
};

export default function Code({
  className,
  children,
  language,
  style,
}) {
  const nodes = refractor.highlight(children, language);
  const html = rehype()
    .stringify({ type: 'root', children: nodes })
    .toString();
  return (
    <pre
      style={style}
      className={cx('ui-kit-code', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
