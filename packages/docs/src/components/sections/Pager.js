import React from 'react';
import {
  Row,
  Col,
  PageHeader,
  Pager,
  Glyphicon,
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Default: `<Pager>
  <Pager.Item href="#">Previous</Pager.Item>{' '}
  <Pager.Item href="#">Next</Pager.Item>
</Pager>`,
  Aligned: `<Pager>
  <Pager.Item previous href="#">
    <Glyphicon glyph="arrow-left" /> Previous Page
  </Pager.Item>
  <Pager.Item next href="#">
    Next Page <Glyphicon glyph="arrow-right" />
  </Pager.Item>
</Pager>`,
  Disabled: `<Pager>
  <Pager.Item previous href="#">
    <Glyphicon glyph="arrow-left" /> Previous
  </Pager.Item>
  <Pager.Item disabled next href="#">
    Next <Glyphicon glyph="arrow-right" />
  </Pager.Item>
</Pager>`,
};

export default function ExPager() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Pager</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="default" code={Samples.Default}>
          <Pager>
            <Pager.Item href="#">Previous</Pager.Item>{' '}
            <Pager.Item href="#">Next</Pager.Item>
          </Pager>
        </Example>
        <Example title="aligned" code={Samples.Aligned}>
          <Pager>
            <Pager.Item previous href="#">
              <Glyphicon glyph="arrow-left" /> Previous Page
            </Pager.Item>
            <Pager.Item next href="#">
              Next Page <Glyphicon glyph="arrow-right" />
            </Pager.Item>
          </Pager>
        </Example>
        <Example title="disabled" code={Samples.Disabled}>
          <Pager>
            <Pager.Item previous href="#">
              <Glyphicon glyph="arrow-left" /> Previous
            </Pager.Item>
            <Pager.Item disabled next href="#">
              Next <Glyphicon glyph="arrow-right" />
            </Pager.Item>
          </Pager>
        </Example>
      </Col>
    </Row>
  );
}
