import React from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';

import '@ui-kit/css';
import './index.css';

const routes = {
  '/': 1,
  '/getting-started': 2,
  '/components': 3,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    let currentKey = 1;
    if (window && window.location) {
      currentKey = routes[window.location.pathname];
    }
    this.state = {
      activeKey: currentKey,
    };
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(to, key) {
    this.setState({ activeKey: key }, () => {
      navigateTo(to);
    });
  }
  render() {
    return (
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <strong onClick={() => this.handleNav('/', 1)}>
              UI Kit
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav activeKey={this.state.activeKey}>
          <NavItem
            eventKey={1}
            onSelect={key => this.handleNav('/', key)}
          >
            Introduction
          </NavItem>
          <NavItem
            eventKey={2}
            onSelect={key => this.handleNav('/getting-started', key)}
          >
            Getting started
          </NavItem>
          <NavItem
            eventKey={3}
            onSelect={key => this.handleNav('/components', key)}
          >
            Components
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="FUI - theme"
      meta={[{ name: 'description', content: 'FUI bootstrap theme' }]}
    />
    <Header />
    <div className="docs-container">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
