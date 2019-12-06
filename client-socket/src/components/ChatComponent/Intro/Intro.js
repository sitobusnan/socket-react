import React, { Component } from "react";
import Input from "../Input/Input";
import Button from 'react-bootstrap/Button'

export default class Intro extends Component {
  goList=()=>{
    this.props.history.push('/list')
  }

  // Este componente renderiza la portada, el input para el nickName
  // y el boton a "/list"
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={"https://res.cloudinary.com/deosqppvg/image/upload/v1562317352/ejercicio/logojirafa.png.png"} className="App-logo" alt="logo" />
        </header>
        <dir id="inputName">
          <Input info={this.props.info}></Input>
          <Button id="toMovies" variant="outline-success" onClick={()=>this.goList()}>Movies List</Button>
        </dir>
      </div>
    );
  }
}
