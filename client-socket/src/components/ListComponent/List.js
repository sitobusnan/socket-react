import React, { Component } from "react";
import { Button, Form, Row, Col, Image, Container } from "react-bootstrap";
import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      movies: []
    };

    // Recibimos el socket por props, se creó en ChatComponent.js
    this.socket = this.props.socket;

    // Creamos un ".on" que escuchará las listas actualizadas
    this.socket.on("moviesList", moviesList => {
      this.setState({ ...this.state, movies: moviesList });
    });
  }

  handlerState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // A partir de la información del formulario, genera una nueva "pelicula"
  handlerSubmit = e => {
    e.preventDefault();
    let movie = {
      title: this.state.title,
      image: this.state.image
    };

    // Este ".emit" le envia al server las "peliculas" creadas en el formulario
    // El server se encargará de propagarlas
    this.socket.emit("newMovie", movie);
    this.setState({ ...this.state, title: "", image: "" });
  };


  // Este componente renderiza el formulario de nueva "pelicula"
  // y renderiza y actualiza la lista
  render() {
    return (
      <div>
        <h1>MOVIES LIST</h1>

        {/* Formulario para nueva pelicula */}
        <Form id="taskForm">
          <Form.Group controlId="formBasicText">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={e => {
                this.handlerState(e);
              }}
              type="text"
              placeholder="Enter title"
              name="title"
              value={this.state.title}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              onChange={e => {
                this.handlerState(e);
              }}
              type="text"
              placeholder="Image Link"
              name="image"
              value={this.state.image}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={e => {
              this.handlerSubmit(e);
            }}
          >
            Submit
          </Button>
        </Form>

        {/* Lista actualizable de peliculas */}
        <div id="listGroup">
          {this.state.movies.map((elem, idx) => {
            return (
              <Row id="line" key={idx}>
                <Col xs={6} md={4}>
                  <Image id="img-row" src={elem.image} rounded />
                </Col>
                <Col md={8}>
                    <Container>
                      <h1>{elem.title}</h1>
                    </Container>
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}
