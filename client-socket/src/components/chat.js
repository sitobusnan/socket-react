import React, { Component } from "react";
import InputMess from "./InputMess";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, ListGroup, Col, Container} from 'react-bootstrap'
import './chat.css'



export default class chat extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      messages: [],
      obj : {
        a: "a",
        b: "b"
      }
    };
    this.socket = this.props.socket;
    this.socket.on("newMessage", message => {
      let mess = this.state.messages;
      mess.push(message);
      this.setState({ ...this.state, messages: mess });
    });
  }

  sendMessage = text => {
    let mess = {
      text: text,
      user: this.props.user
    };
    this.socket.emit("messageSent", mess);
  };

  componentDidUpdate=()=>{
    document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight
  }

  // componentDidUpdate=()=>{
  //     this.setState({...this.state, userList: this.props.data})
  // }

  render() {
    console.log(this.state);
    return (
      <Container id="cont">
        <Row>
          <Col sm={3} id="userList">
            <h5>ACTIVE USERS:</h5>
            <ListGroup>
              {this.props.list.map((elem, idx) => {
                return elem===this.props.user ?
                  <ListGroup.Item key={idx}><b>{elem}</b></ListGroup.Item>
                  :
                  <ListGroup.Item key={idx}>{elem}</ListGroup.Item>
              })}
            </ListGroup>
          </Col>
          <Col sm={9}>
            <div className="chatBox" id="chatBox">
              {this.state.messages.map((elem, idx) => {
                return (
                  <h6 key={idx}>
                    {elem.user} : {elem.text}
                  </h6>
                );
              })}
            </div>
            <div className="textForm">
              <InputMess info={this.sendMessage}></InputMess>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
