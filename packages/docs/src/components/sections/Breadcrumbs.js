import React from 'react';
import { Row, Col, PageHeader, Breadcrumb } from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Breadcrumbs: `<Breadcrumb>
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
</Breadcrumb>`,
};

export default function Breadcrumbs() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Breadcrumbs</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="breadcrumb" code={Samples.Breadcrumbs}>
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
        </Example>
      </Col>
    </Row>
  );
}
