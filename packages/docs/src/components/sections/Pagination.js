import React from 'react';
import { Row, Col, PageHeader, Pagination } from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Default: `class PaginationDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 2 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(page) {
    this.setState({ activePage: page });
  }
  render() {
    return (
      <Pagination
        items={10}
        activePage={this.state.activePage}
        onSelect={this.handleClick}
      />
    );
  }
}`,
  Small: `class PaginationSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 2 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(page) {
    this.setState({ activePage: page });
  }
  render() {
    return (
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
        activePage={this.state.activePage}
        onSelect={this.handleClick}
      />
    );
  }
}`,
};

class PaginationDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 2 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(page) {
    this.setState({ activePage: page });
  }
  render() {
    return (
      <Pagination
        items={10}
        activePage={this.state.activePage}
        onSelect={this.handleClick}
      />
    );
  }
}

class PaginationSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 2 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(page) {
    this.setState({ activePage: page });
  }
  render() {
    return (
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
        activePage={this.state.activePage}
        onSelect={this.handleClick}
      />
    );
  }
}

export default function ExPagination() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Pagination</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="default" code={Samples.Default}>
          <PaginationDefault />
        </Example>
        <Example title="small + accessories" code={Samples.Small}>
          <PaginationSmall />
        </Example>
      </Col>
    </Row>
  );
}
