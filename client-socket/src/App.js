import React, { Component } from "react";
import './App.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Intro from './components/intro';
import Chat from './components/chat';

import io from 'socket.io-client'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userList : [],
      user: null
    }
    this.socket = io('http://localhost:5000')

    this.socket.on('list', list => {
      this.setState({...this.state, userList: list})
    })
  }

  updateList=(name)=>{
    if(name.trim() != ''){
      this.setState({...this.state, user: name},()=>{
        this.socket.emit('newUser', name)
        this.props.history.push('/chat')
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=>(<Intro info={this.updateList}/>)}></Route>
          <Route exact path="/chat" render={()=>(<Chat socket={this.socket} list={this.state.userList} user={this.state.user}/>)}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
