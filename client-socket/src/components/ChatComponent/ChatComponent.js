import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import Intro from './Intro/Intro';
import Chat from './Chat/Chat';

import io from 'socket.io-client'
import List from "../ListComponent/List";


class ChatComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      userList : [],
      user: null
    }
    this.socket = io('http://192.168.96.69:5000')
    this.socket.on('list', list => {
      this.setState({...this.state, userList: list})
    })
  }

  updateUserList=(name)=>{
    if(name.trim() !== ''){
      this.setState({...this.state, user: name},()=>{
        this.socket.emit('newUser', name)
        this.props.history.push('/chat')
      })
    }
  }
  render() {
    return (
      <React.Fragment>
         <Switch>
          <Route exact path="/" render={(props)=>(<Intro info={this.updateUserList} {...props}/>)}></Route>
          <Route exact path="/chat" render={()=>(<Chat socket={this.socket} list={this.state.userList} user={this.state.user}/>)}></Route>
          <Route exact path="/list" render={()=>(<List socket={this.socket}/>)}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(ChatComponent)
