import React, { Component } from "react";
import './App.css';
import ChatComponent from "./components/ChatComponent/ChatComponent";


class App extends Component {
  

  render(){
    return (
      <div className="App">
        <ChatComponent/>
      </div>
    );
  }
}

export default App;
