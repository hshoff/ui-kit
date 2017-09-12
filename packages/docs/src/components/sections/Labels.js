import React from 'react';
import {
  Row,
  Col,
  PageHeader,
  Label
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Labels: `<Label>Default</Label>
<Label bsStyle="info">Info</Label>
<Label bsStyle="warning">Warning</Label>`,
};


export default function ExLabels() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Labels</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="Default" code={Samples.Labels}>
          <Label>Default</Label>
          <Label bsStyle="info">Info</Label>
          <Label bsStyle="warning">Warning</Label>
        </Example>
      </Col>
    </Row>
  );
}
