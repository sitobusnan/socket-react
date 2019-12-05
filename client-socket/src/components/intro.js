import React, { Component } from "react";
import Input from "./input";


export default class intro extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={"https://res.cloudinary.com/deosqppvg/image/upload/v1562317352/ejercicio/logojirafa.png.png"} className="App-logo" alt="logo" />
        </header>
        <dir id="inputName">
          <Input info={this.props.info}></Input>
        </dir>
      </div>
    );
  }
}
