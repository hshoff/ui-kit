import React from 'react';
import cx from 'classnames';
import Code from '@ui-kit/code';
import { Glyphicon, Panel, Collapse } from 'react-bootstrap';

import './Example.css';

function Title({ title, onClick, open }) {
  return (
    <div>
      <div>
        <span className="h5">{title}</span>
        <span onClick={onClick} className="pull-right">
          <small>
            <Glyphicon
              glyph={open ? 'chevron-down' : 'chevron-right'}
            />{' '}
            code
          </small>
        </span>
      </div>
    </div>
  );
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { open: false };
  }
  handleClick() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { title, code, children } = this.props;
    return (
      <Panel
        className={cx({ Example: !this.state.open })}
        header={
          <Title
            title={title.toUpperCase()}
            onClick={this.handleClick}
            open={this.state.open}
          />
        }
      >
        {children}
        <Collapse in={this.state.open}>
          <div className="code-container">
            <Code>{code}</Code>
          </div>
        </Collapse>
      </Panel>
    );
  }
}
