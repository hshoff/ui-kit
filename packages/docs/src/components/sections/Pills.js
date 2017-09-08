import React from 'react';
import { Row, Col, PageHeader, Nav, NavItem } from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Default: `class PillsDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(key) {
    this.setState({ activeKey: key });
  }
  render() {
    return (
      <Nav
        bsStyle="pills"
        activeKey={this.state.activeKey}
        onSelect={this.handleClick}
      >
        <NavItem eventKey={1}>Home</NavItem>
        <NavItem eventKey={2}>Profile</NavItem>
        <NavItem eventKey={3} href="#">
          Messages
        </NavItem>
      </Nav>
    );
  }
}`,
  Justified: `class PillsJustified extends React.Component {
    constructor(props) {
      super(props);
      this.state = { activeKey: 1 };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(key) {
      this.setState({ activeKey: key });
    }
    render() {
      return (
        <Nav
          bsStyle="pills"
          activeKey={this.state.activeKey}
          onSelect={this.handleClick}
          justified
        >
          <NavItem eventKey={1}>Home</NavItem>
          <NavItem eventKey={2}>Profile</NavItem>
          <NavItem eventKey={3} href="#">
            Messages
          </NavItem>
        </Nav>
      );
    }
  }`,
  Disabled: `class PillsDisabled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(key) {
    this.setState({ activeKey: key });
  }
  render() {
    return (
      <Nav
        bsStyle="pills"
        activeKey={this.state.activeKey}
        onSelect={this.handleClick}
        justified
        disabled
      >
        <NavItem eventKey={1}>Home</NavItem>
        <NavItem eventKey={2}>Profile</NavItem>
        <NavItem eventKey={3} href="#">
          Messages
        </NavItem>
      </Nav>
    );
  }
}`,
  Stacked: `class PillsDisabled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(key) {
    this.setState({ activeKey: key });
  }
  render() {
    return (
      <Nav
        bsStyle="pills"
        activeKey={this.state.activeKey}
        onSelect={this.handleClick}
        stacked
      >
        <NavItem eventKey={1}>Home</NavItem>
        <NavItem eventKey={2}>Profile</NavItem>
        <NavItem eventKey={3} href="#">
          Messages
        </NavItem>
      </Nav>
    );
  }
}`,
};

class PillsDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(key) {
    this.setState({ activeKey: key });
  }
  render() {
    const { justified, disabled, stacked } = this.props;
    return (
      <Nav
        bsStyle="pills"
        activeKey={this.state.activeKey}
        onSelect={this.handleClick}
        justified={justified}
        stacked={stacked}
      >
        <NavItem eventKey={1}>Home</NavItem>
        <NavItem eventKey={2} disabled={disabled}>
          Profile
        </NavItem>
        <NavItem eventKey={3} href="#">
          Messages
        </NavItem>
      </Nav>
    );
  }
}

export default function ExPills() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Pills</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="default" code={Samples.Default}>
          <PillsDefault />
        </Example>
        <Example title="justified" code={Samples.Justified}>
          <PillsDefault justified />
        </Example>
        <Example title="disabled" code={Samples.Disabled}>
          <PillsDefault justified disabled />
        </Example>
        <Example title="stacked" code={Samples.Stacked}>
          <PillsDefault stacked />
        </Example>
      </Col>
    </Row>
  );
}
