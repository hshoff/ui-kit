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
    <PageHeader>Nav bars</PageHeader>
    <DemoRow>
      <h5>DEFAULT</h5>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={1}>
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
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Glyphicon glyph="cog" /> Settings
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Glyphicon glyph="star" /> Star
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </DemoRow>

    <DemoRow>
      <h5>INVERSE</h5>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>Brand</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={1}>
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
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Glyphicon glyph="cog" /> Settings
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Glyphicon glyph="star" /> Star
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </DemoRow>

    <Row>
      <Col md={6}>
        <PageHeader>Buttons</PageHeader>
        <h5>LARGE</h5>
        <ButtonToolbar>
          <Button bsStyle="default" bsSize="large">
            Default
          </Button>
          <Button bsStyle="primary" bsSize="large">
            Primary
          </Button>
          <Button bsStyle="link" bsSize="large">
            Link
          </Button>
        </ButtonToolbar>
        <h5>REGULAR</h5>
        <ButtonToolbar>
          <Button bsStyle="default">Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>
        <h5>DISABLED</h5>
        <ButtonToolbar>
          <Button bsStyle="default" disabled>
            Default
          </Button>
          <Button bsStyle="primary" disabled>
            Primary
          </Button>
          <Button bsStyle="link" disabled>
            Link
          </Button>
        </ButtonToolbar>
        <h5>SMALL</h5>
        <ButtonToolbar>
          <Button bsStyle="default" bsSize="small">
            Default
          </Button>
          <Button bsStyle="primary" bsSize="small">
            Primary
          </Button>
          <Button bsStyle="link" bsSize="small">
            Link
          </Button>
        </ButtonToolbar>
        <h5>XSMALL</h5>
        <ButtonToolbar>
          <Button bsStyle="default" bsSize="xsmall">
            Default
          </Button>
          <Button bsStyle="primary" bsSize="xsmall">
            Primary
          </Button>
          <Button bsStyle="link" bsSize="xsmall">
            Link
          </Button>
        </ButtonToolbar>
      </Col>
      <Col md={6}>
        <PageHeader>Button groups</PageHeader>
        <h5>LARGE</h5>
        <ButtonGroup bsSize="large">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <h5>REGULAR</h5>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <h5>SMALL</h5>
        <ButtonGroup bsSize="small">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <h5>XSMALL</h5>
        <ButtonGroup bsSize="xsmall">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <h5>BUTTON TOOLBAR</h5>
        <ButtonToolbar>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>Copy</Button>
            <Button>Paste</Button>
            <Button>Cut</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>
              <Glyphicon glyph="cog" />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <PageHeader>Breadcrumbs</PageHeader>
        <Breadcrumb>
          <Breadcrumb.Item href="#" active>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>
            Library
          </Breadcrumb.Item>
        </Breadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col md={6}>
        <PageHeader>Pagination</PageHeader>
        <Pagination bsSize="medium" items={10} activePage={2} />
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={20}
          maxButtons={5}
          activePage={2}
          bsSize="small"
        />
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <PageHeader>Pager</PageHeader>
        <h5>DEFAULT</h5>
        <Pager>
          <Pager.Item href="#">Previous</Pager.Item>{' '}
          <Pager.Item href="#">Next</Pager.Item>
        </Pager>
        <h5>ALIGNED</h5>
        <Pager>
          <Pager.Item previous href="#">
            &larr; Previous Page
          </Pager.Item>
          <Pager.Item next href="#">
            Next Page &rarr;
          </Pager.Item>
        </Pager>
        <h5>DISABLED</h5>
        <Pager>
          <Pager.Item previous href="#">
            &larr; Previous
          </Pager.Item>
          <Pager.Item disabled next href="#">
            Next &rarr;
          </Pager.Item>
        </Pager>
      </Col>
      <Col md={6}>
        <PageHeader>Pills</PageHeader>
        <h5>DEFAULT</h5>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem eventKey={1}>Home</NavItem>
          <NavItem eventKey={2}>Profile</NavItem>
          <NavItem eventKey={3} href="#">
            Messages
          </NavItem>
        </Nav>
        <h5>JUSTIFIED</h5>
        <Nav bsStyle="pills" justified activeKey={1}>
          <NavItem eventKey={1}>Home</NavItem>
          <NavItem eventKey={2}>Profile</NavItem>
          <NavItem eventKey={3} href="#">
            Messages
          </NavItem>
        </Nav>
        <PageHeader>Badges</PageHeader>
        <Nav bsStyle="pills" justified activeKey={1}>
          <NavItem eventKey={1}>Home</NavItem>
          <NavItem eventKey={2}>Profile</NavItem>
          <NavItem eventKey={3} href="#">
            Messages <Badge>24</Badge>
          </NavItem>
        </Nav>
      </Col>
    </Row>

    <PageHeader>Jumbotron</PageHeader>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component
        for calling extra attention to featured content or
        information.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </Grid>
);

export default IndexPage;
