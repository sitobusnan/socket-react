import React, { Component } from "react";
import { Button, Form, Row, Col, Image, Jumbotron, Container } from "react-bootstrap";
import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      movies: []
    };

    this.socket = this.props.socket;
    this.socket.on("moviesList", moviesList => {
      this.setState({ ...this.state, movies: moviesList });
    });
  }

  handlerState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    let movie = {
      title: this.state.title,
      image: this.state.image
    };
    this.socket.emit("newMovie", movie);
    this.setState({ ...this.state, title: "", image: "" });
  };

  render() {
    return (
      <div>
        <h1>MOVIES LIST</h1>
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
        <div id="listGroup">
          {this.state.movies.map((elem, idx) => {
            return (
              <Row>
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
