import React, { Component } from "react";
import InputMess from "../InputMess/InputMess";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, ListGroup, Col, Container} from 'react-bootstrap'
import './Chat.css'



export default class Chat extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      messages: [],
    };

    // Recibimos el socket por props, se creó en ChatComponent.js
    this.socket = this.props.socket;

    // Creamos un ".on" que escuchará los mensajes nuevos
    this.socket.on("newMessage", message => {
      let mess = this.state.messages;
      mess.push(message);
      this.setState({ ...this.state, messages: mess });
    });
  }

  // Este método recibe los textos que vienen del Input de los mensajes en el chat
  sendMessage = text => {
    if(text.trim()==="")return
    let mess = {
      text: text,
      user: this.props.user
    };
    // Este ".emit" le envia al server los mensajes que escribamos
    // El server se encargará de propagarlos
    this.socket.emit("messageSent", mess);
  };

  // Con este método nos aseguramos de que el cuadro de chat tenga siempre el scroll
  // abajo, de esta manera el scroll no volverá arriba si el contenedor de mensajes
  // se llena por completo
  componentDidUpdate=()=>{
    document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight
  }

  // Renderiza la lista de usuarios, el box con el chat y el input para poder escribir mensajes.
  render() {
    console.log(this.state);
    return (
      <Container id="cont">
        <Row>

          {/* Lista de usuarios */}
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

          {/* Box que contiene el chat */}
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

            {/* Input para nuevos mensajes */}
            <div className="textForm">
              <InputMess info={this.sendMessage}></InputMess>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
