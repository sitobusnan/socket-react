import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from 'react-bootstrap'


export default class InputMess extends Component {
    constructor(){
        super()
        this.state={
            text:""
        }
    }

    handlerText=(e)=>{
        this.setState({...this.state, text: e.target.value})
    }

    handlerSubmit=(e)=>{
        e.preventDefault()
        this.props.info(this.state.text)
    }

    render() {
        return (
            <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={e => {
                  this.handlerText(e);
                }}
                type="text"
                placeholder="Your message"
              />
            </Form.Group>
    
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                this.handlerSubmit(e);
              }}
            >
              Send
            </Button>
          </Form>
        )
    }
}
