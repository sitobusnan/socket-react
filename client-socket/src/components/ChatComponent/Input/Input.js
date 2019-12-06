import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from 'react-bootstrap'
import './Input.css'

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handlerText = e => {
    this.setState({ ...this.state, name: e.target.value });
  };

  handlerSubmit = () => {
    this.props.info(this.state.name);
  };

  // Este componente renderiza el input para escribir el NickName
  render() {
    return (
      <Form >
        <Form.Group controlId="formBasicEmail" >
          <Form.Label id="formName">NickName</Form.Label>
          <Form.Control
            onChange={e => {
              this.handlerText(e);
            }}
            type="text"
            placeholder="NickName"
            className="formNick"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            this.handlerSubmit();
          }}
        >
          Join
        </Button>
      </Form>
    );
  }
}
