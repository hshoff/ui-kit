import React from 'react';
import {
  Row,
  Col,
  PageHeader,
  Button,
  Jumbotron,
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Default: `<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style
    component for calling extra attention to featured
    content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>`,
};

export default function ExJumbotron() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Jumbotron</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="default" code={Samples.Default}>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style
              component for calling extra attention to featured
              content or information.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Example>
      </Col>
    </Row>
  );
}
