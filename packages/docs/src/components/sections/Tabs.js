import React from 'react';
import {
  Row,
  Col,
  PageHeader,
  Tabs,
  Tab,
  Badge,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Uncontrolled: `<Tabs defaultActiveKey={1} animation={false}>
  <Tab eventKey={1} title={<div>Home</div>}>
    Home content
  </Tab>
  <Tab eventKey={2} title={<div>Profile</div>}>
    Profile content
  </Tab>
  <Tab eventKey={3} title={<div>Messages</div>}>
    Messages content
  </Tab>
</Tabs>`,
  Controlled: `class TabsControlled extends React.Component {
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
      <Tabs
        activeKey={this.state.activeKey}
        onSelect={this.handleClick}
        animation={false}
      >
        <Tab eventKey={1} title={<div>Home</div>}>
          Home content
        </Tab>
        <Tab eventKey={2} title={<div>Profile</div>}>
          Profile content
        </Tab>
        <Tab eventKey={3} title={<div>Messages</div>}>
          Messages content
        </Tab>
      </Tabs>
    );
  }
}`,
  Dropdown: `<Tab.Container defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={12}>
      <Nav bsStyle="tabs">
        <NavItem eventKey="first">Home</NavItem>
        <NavItem eventKey="second">Profile</NavItem>
        <NavDropdown eventKey="3" title="Messages">
          <MenuItem eventKey="3.1">Inbox</MenuItem>
          <MenuItem eventKey="3.2">Alerts</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="3.3">Send Message</MenuItem>
        </NavDropdown>
      </Nav>
    </Col>
    <Col sm={12}>
      <Tab.Content animation={false}>
        <Tab.Pane eventKey="first">Home content</Tab.Pane>
        <Tab.Pane eventKey="second">
          Profile content
        </Tab.Pane>
        <Tab.Pane eventKey="3.1">Inbox content</Tab.Pane>
        <Tab.Pane eventKey="3.2">Alerts content</Tab.Pane>
        <Tab.Pane eventKey="3.3">
          Send message content
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>`,
  Custom: `<Tab.Container defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={4}>
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey="first">
          Home<Badge className="pull-right">42</Badge>
        </NavItem>
        <NavItem eventKey="second">Profile</NavItem>
        <NavItem eventKey="third">
          Messages <Badge className="pull-right">24</Badge>
        </NavItem>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content animation={false}>
        <Tab.Pane eventKey="first">Home content</Tab.Pane>
        <Tab.Pane eventKey="second">
          Profile content
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          Messages content
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>`,
};

class TabsControlled extends React.Component {
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
      <Tabs
        activeKey={this.state.activeKey}
        onSelect={this.handleClick}
        animation={false}
      >
        <Tab eventKey={1} title={<div>Home</div>}>
          Home content
        </Tab>
        <Tab eventKey={2} title={<div>Profile</div>}>
          Profile content
        </Tab>
        <Tab eventKey={3} title={<div>Messages</div>}>
          Messages content
        </Tab>
      </Tabs>
    );
  }
}

export default function ExTabs() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Tabs</PageHeader>
      </Col>
      <Col md={6}>
        <Example title="uncontrolled" code={Samples.Uncontrolled}>
          <Tabs defaultActiveKey={1} animation={false}>
            <Tab eventKey={1} title={<div>Home</div>}>
              Home content
            </Tab>
            <Tab eventKey={2} title={<div>Profile</div>}>
              Profile content
            </Tab>
            <Tab eventKey={3} title={<div>Messages</div>}>
              Messages content
            </Tab>
          </Tabs>
        </Example>
        <Example title="controlled" code={Samples.Controlled}>
          <TabsControlled />
        </Example>
      </Col>
      <Col md={6}>
        <Example title="with dropdown" code={Samples.Dropdown}>
          <Tab.Container defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={12}>
                <Nav bsStyle="tabs">
                  <NavItem eventKey="first">Home</NavItem>
                  <NavItem eventKey="second">Profile</NavItem>
                  <NavDropdown eventKey="3" title="Messages">
                    <MenuItem eventKey="3.1">Inbox</MenuItem>
                    <MenuItem eventKey="3.2">Alerts</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="3.3">Send Message</MenuItem>
                  </NavDropdown>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content animation={false}>
                  <Tab.Pane eventKey="first">Home content</Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Profile content
                  </Tab.Pane>
                  <Tab.Pane eventKey="3.1">Inbox content</Tab.Pane>
                  <Tab.Pane eventKey="3.2">Alerts content</Tab.Pane>
                  <Tab.Pane eventKey="3.3">
                    Send message content
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Example>
        <Example title="custom layout" code={Samples.Custom}>
          <Tab.Container defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={4}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first">
                    Home<Badge className="pull-right">42</Badge>
                  </NavItem>
                  <NavItem eventKey="second">Profile</NavItem>
                  <NavItem eventKey="third">
                    Messages <Badge className="pull-right">24</Badge>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content animation={false}>
                  <Tab.Pane eventKey="first">Home content</Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Profile content
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    Messages content
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Example>
      </Col>
    </Row>
  );
}
