import React from 'react';
import Link from 'gatsby-link';

import {
  Grid,
  Row,
  Col,
  Jumbotron,
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
  Pagination,
  Pager,
  Badge,
} from 'react-bootstrap';

function DemoRow({ children }) {
  return (
    <Row>
      <Col md={12}>{children}</Col>
    </Row>
  );
}

const IndexPage = () => (
  <Grid>
    <DemoRow>
      <PageHeader>UI Kit</PageHeader>
    </DemoRow>
  </Grid>
);

export default IndexPage;
