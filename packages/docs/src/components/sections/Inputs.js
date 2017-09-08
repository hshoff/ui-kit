import React from 'react';
import {
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel,
  Button,
  DropdownButton,
  MenuItem,
  Glyphicon,
  Row,
  Col,
  PageHeader,
} from 'react-bootstrap';
import Example from '../example/Example';

const Samples = {
  Inputs: `<form>
  <FormGroup>
    <ControlLabel>Username</ControlLabel>
    <InputGroup>
      <InputGroup.Addon>
        <Glyphicon glyph="user" />
      </InputGroup.Addon>
      <FormControl type="text" placeholder="Username" />
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <ControlLabel>Full price</ControlLabel>
    <InputGroup>
      <InputGroup.Addon>$</InputGroup.Addon>
      <FormControl type="text" />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <FormControl type="text" />
      <InputGroup.Addon>
        <Glyphicon glyph="music" />
      </InputGroup.Addon>
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <InputGroup.Button>
        <Button>Before</Button>
      </InputGroup.Button>
      <FormControl type="text" />
    </InputGroup>
  </FormGroup>

  <FormGroup>
    <InputGroup>
      <FormControl type="text" />
      <DropdownButton
        componentClass={InputGroup.Button}
        id="input-dropdown-addon"
        title="Action"
      >
        <MenuItem key="1">Item</MenuItem>
      </DropdownButton>
    </InputGroup>
  </FormGroup>
</form>`
}

export default function ExInputs() {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>Inputs</PageHeader>
      </Col>
      <Col md={12}>
        <Example title="inputs" code={Samples.Inputs}>
          <form>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="user" />
                </InputGroup.Addon>
                <FormControl type="text" placeholder="Username" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Full price</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" />
                <InputGroup.Addon>.00</InputGroup.Addon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>
                  <Glyphicon glyph="music" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Button>
                  <Button>Before</Button>
                </InputGroup.Button>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <FormControl type="text" />
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title="Action"
                >
                  <MenuItem key="1">Item</MenuItem>
                </DropdownButton>
              </InputGroup>
            </FormGroup>
          </form>
        </Example>
      </Col>
    </Row>
  );
}
