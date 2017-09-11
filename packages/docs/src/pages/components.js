import React from 'react';
import Link from 'gatsby-link';
import {
  Grid,
  Row,
  Col,
  Button,
  ButtonGroup,
  PageHeader,
  ButtonToolbar,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  Glyphicon,
  Breadcrumb,
  Badge,
} from 'react-bootstrap';

import Navbars from '../components/sections/Navbars';
import Buttons from '../components/sections/Buttons';
import ButtonGroups from '../components/sections/ButtonGroups';
import Breadcrumbs from '../components/sections/Breadcrumbs';
import Pagination from '../components/sections/Pagination';
import Pager from '../components/sections/Pager';
import Pills from '../components/sections/Pills';
import Badges from '../components/sections/Badges';
import Jumbotron from '../components/sections/Jumbotron';
import Panels from '../components/sections/Panels';
import Tabs from '../components/sections/Tabs';
import Inputs from '../components/sections/Inputs';
import Typography from '../components/sections/Typography';

function DemoRow({ children }) {
  return (
    <Row>
      <Col md={12}>{children}</Col>
    </Row>
  );
}

const IndexPage = () => (
  <Grid fluid>
    <Col md={2}> </Col>
    <Col md={9}>
      <Typography />
      <Navbars />

      <Row>
        <Col md={6}>
          <Buttons />
        </Col>
        <Col md={6}>
          <ButtonGroups />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Inputs />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Breadcrumbs />
        </Col>
        <Col md={6}>
          <Pagination />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Pager />
        </Col>
        <Col md={6}>
          <Pills />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Badges />
        </Col>
        <Col md={6}>
          <Panels />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Tabs />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Jumbotron />
        </Col>
      </Row>
    </Col>
  </Grid>
);

export default IndexPage;
