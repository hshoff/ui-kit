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
};

export default function ExTypography() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Typography</PageHeader>
      </Col>
      <Col md={6}>
        <Example title="Headings" code={``}>
          <h1>h1. Heading 1 <small>Secondary text</small></h1>
          <h2>h2. Heading 2 <small>Secondary text</small></h2>
          <h3>h3. Heading 3 <small>Secondary text</small></h3>
          <h4>h4. Heading 4 <small>Secondary text</small></h4>
          <h5>h5. Heading 5 <small>Secondary text</small></h5>
          <h6>h6. Heading 6 <small>Secondary text</small></h6>
        </Example>
      </Col>
      <Col md={6}>
        <Example title="Body" code={``}>
          <p>This is a paragraph of text. Here's an <a href="#">inline link</a>.</p>
          <p><small>This is a small paragraph of text. Here's an <a href="#">inline link</a>.</small></p>
        </Example>
      </Col>
    </Row>
  );
}
