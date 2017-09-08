import React from 'react';
import cx from 'classnames';
import {
  Row,
  Col,
  PageHeader,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  Glyphicon,
  Panel,
  Collapse,
  Well,
} from 'react-bootstrap';

import Example from '../example/Example';

const Samples = {
  Default: `class NavbarDefault extends React.Component {
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
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            activeKey={this.state.activeKey}
            onSelect={this.handleClick}
          >
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown
              eventKey={3}
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem header>Nav Header</MenuItem>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}`,
  Inverse: `class NavbarInverse extends React.Component {
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
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={1}>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Glyphicon glyph="cog" /> Settings
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Glyphicon glyph="bell" /> Notifications
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}`,
};

class NavbarDefault extends React.Component {
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
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            activeKey={this.state.activeKey}
            onSelect={this.handleClick}
          >
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown
              eventKey={3}
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem header>Nav Header</MenuItem>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class NavbarInverse extends React.Component {
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
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            activeKey={this.state.activeKey}
            onSelect={this.handleClick}
          >
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
          </Nav>
          <Nav
            pullRight
            activeKey={this.state.activeKey}
            onSelect={this.handleClick}
          >
            <NavItem eventKey={2} href="#">
              <Glyphicon glyph="cog" /> Settings
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Glyphicon glyph="bell" /> Notifications
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default function Navbars() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Nav bars</PageHeader>
      </Col>
      <Col md={6}>
        <Example title="default" code={Samples.Default}>
          <NavbarDefault />
        </Example>
      </Col>
      <Col md={6}>
        <Example title="inverse" code={Samples.Inverse}>
          <NavbarInverse />
        </Example>
      </Col>
    </Row>
  );
}
