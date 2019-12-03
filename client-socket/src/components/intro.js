import React, { Component } from "react";
import Input from "./input";
import logo from "../logo.svg";

export default class intro extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <dir>
          <Input info={this.props.info}></Input>
        </dir>
        <dir></dir>
      </div>
    );
  }
}
