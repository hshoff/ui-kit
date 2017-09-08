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
  '/getting-started/': 2,
  '/components/': 3,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: routes[props.pathname.replace('/ui-kit', '')],
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
        <Navbar.Collapse>
          <Nav activeKey={this.state.activeKey}>
            <NavItem
              eventKey={1}
              onSelect={key => this.handleNav('/', key)}
            >
              Introduction
            </NavItem>
            <NavItem
              eventKey={2}
              onSelect={key =>
                this.handleNav('/getting-started/', key)}
            >
              Getting started
            </NavItem>
            <NavItem
              eventKey={3}
              onSelect={key => this.handleNav('/components/', key)}
            >
              Components
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const TemplateWrapper = ({ children, location }) => {
  return (
    <div>
      <Helmet
        title="UI Kit - theme"
        meta={[
          { name: 'description', content: 'UI Kit bootstrap theme' },
        ]}
      />
      <Header pathname={location.pathname} />
      <div className="docs-container">{children()}</div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
