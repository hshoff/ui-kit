import React from 'react';
import {
  Row,
  Col,
  PageHeader,
  ButtonToolbar,
  Button,
  ButtonGroup,
  Glyphicon,
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Large: `<ButtonGroup bsSize="large">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`,
  Regular: `<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`,
  Small: `<ButtonGroup bsSize="small">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`,
  Xsmall: `<ButtonGroup bsSize="xsmall">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`,
  ButtonToolbar: `<ButtonToolbar>
  <ButtonGroup>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>
      <Glyphicon glyph="copy" /> Copy
    </Button>
    <Button>
      <Glyphicon glyph="paste" /> Paste
    </Button>
    <Button>
      <Glyphicon glyph="scissors" /> Cut
    </Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>
      <Glyphicon glyph="cog" />
    </Button>
  </ButtonGroup>
</ButtonToolbar>`,
};

export default function ButtonGroups() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Button Groups</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="large" code={Samples.Large}>
          <ButtonGroup bsSize="large">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Example>
        <Example title="regular" code={Samples.Regular}>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Example>
        <Example title="small" code={Samples.Small}>
          <ButtonGroup bsSize="small">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Example>
        <Example title="xsmall" code={Samples.Xsmall}>
          <ButtonGroup bsSize="xsmall">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Example>
        <Example title="button toolbar" code={Samples.ButtonToolbar}>
          <ButtonToolbar>
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>
                <Glyphicon glyph="copy" /> Copy
              </Button>
              <Button>
                <Glyphicon glyph="paste" /> Paste
              </Button>
              <Button>
                <Glyphicon glyph="scissors" /> Cut
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>
                <Glyphicon glyph="cog" />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Example>
      </Col>
    </Row>
  );
}
