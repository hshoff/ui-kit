import React from 'react';
import {
  Row,
  Col,
  PageHeader,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Large: `<ButtonToolbar>
  <Button bsStyle="default" bsSize="large">
    Default
  </Button>
  <Button bsStyle="primary" bsSize="large">
    Primary
  </Button>
  <Button bsStyle="link" bsSize="large">
    Link
  </Button>
</ButtonToolbar>`,
  Regular: `<ButtonToolbar>
  <Button bsStyle="default">Default</Button>
  <Button bsStyle="primary">Primary</Button>
  <Button bsStyle="link">Link</Button>
</ButtonToolbar>`,
  Disabled: `<ButtonToolbar>
  <Button bsStyle="default" disabled>
    Default
  </Button>
  <Button bsStyle="primary" disabled>
    Primary
  </Button>
  <Button bsStyle="link" disabled>
    Link
  </Button>
</ButtonToolbar>`,
  Small: `<ButtonToolbar>
  <Button bsStyle="default" bsSize="small">
    Default
  </Button>
  <Button bsStyle="primary" bsSize="small">
    Primary
  </Button>
  <Button bsStyle="link" bsSize="small">
    Link
  </Button>
</ButtonToolbar>`,
  Xsmall: `<ButtonToolbar>
  <Button bsStyle="default" bsSize="xsmall">
    Default
  </Button>
  <Button bsStyle="primary" bsSize="xsmall">
    Primary
  </Button>
  <Button bsStyle="link" bsSize="xsmall">
    Link
  </Button>
</ButtonToolbar>`,
};

export default function Buttons() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Buttons</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="large" code={Samples.Large}>
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
        </Example>

        <Example title="regular" code={Samples.Regular}>
          <ButtonToolbar>
            <Button bsStyle="default">Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="link">Link</Button>
          </ButtonToolbar>
        </Example>

        <Example title="disabled" code={Samples.Disabled}>
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
        </Example>

        <Example title="small" code={Samples.Small}>
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
        </Example>

        <Example title="xsmall" code={Samples.Xsmall}>
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
        </Example>
      </Col>
    </Row>
  );
}
