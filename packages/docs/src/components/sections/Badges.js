import React from 'react';
import {
  Row,
  Col,
  PageHeader,
  Nav,
  NavItem,
  Badge,
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Badge: `class PillsWithBadge extends React.Component {
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
      <NavItem eventKey={1}>
        Home <Badge className="pull-right">42</Badge>
      </NavItem>
      <NavItem eventKey={2}>Profile</NavItem>
      <NavItem eventKey={3} href="#">
        Messages <Badge className="pull-right">24</Badge>
      </NavItem>
      </Nav>
    );
  }
}`,
};

class PillsJustified extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 3 };
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
        <NavItem eventKey={1}>
          Home <Badge className="pull-right">42</Badge>
        </NavItem>
        <NavItem eventKey={2}>Profile</NavItem>
        <NavItem eventKey={3} href="#">
          Messages <Badge className="pull-right">24</Badge>
        </NavItem>
      </Nav>
    );
  }
}

export default function ExBadges() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Badges</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="Badge" code={Samples.Badge}>
          <PillsJustified />
        </Example>
      </Col>
    </Row>
  );
}
