import React from 'react';
import { Row, Col, PageHeader, Panel } from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Default: `<Panel header="Panel header">
  Panel body text
</Panel>`,
  Primary: `<Panel bsStyle="primary" header="Panel header">
  Panel body text
</Panel>`,
};

export default function ExPanels() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Panels</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="default" code={Samples.Default}>
          <Panel header="Panel header">Panel body text</Panel>
        </Example>
        <Example title="primary" code={Samples.Primary}>
          <Panel bsStyle="primary" header="Panel header">
            Panel body text
          </Panel>
        </Example>
        <Example title="info" code={Samples.Primary}>
          <Panel bsStyle="info" header="Panel header">
            Panel body text
          </Panel>
        </Example>
      </Col>
    </Row>
  );
}
