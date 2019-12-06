import React, { Component } from "react";
import './App.css';
import ChatComponent from "./components/ChatComponent/ChatComponent";


class App extends Component {
  
  // App no tiene responsabilidades, la aplicación completa está dentro
  // del componente ChatComponent.
  // De esta manera el componente y sus subcomponentes se pueden llevar
  // de una aplicación a otra

  render(){
    return (
      <div className="App">
        <ChatComponent/>
      </div>
    );
  }
}

export default App;
