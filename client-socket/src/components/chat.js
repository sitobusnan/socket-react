import React, { Component } from "react";
import InputMess from "./InputMess";

export default class chat extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      messages: []
    };
    this.socket = this.props.socket;
    this.socket.on('newMessage', message =>{
        let mess = this.state.messages;
        mess.push(message)
        this.setState({...this.state, messages: mess})
    })
  }

  sendMessage=(text)=>{
    let mess = {
        text : text,
        user: this.props.user
    }
    this.socket.emit('messageSent', mess)
  }

  // componentDidUpdate=()=>{
  //     this.setState({...this.state, userList: this.props.data})
  // }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          {this.props.list.map((elem, idx) => {
            return <h4 key={idx}>{elem}</h4>;
          })}
        </div>
        <div>
        {this.state.messages.map((elem, idx) => {
        return <h4 key={idx}>{elem.user} : {elem.text}</h4>;
          })}
        </div>
        <div>
          <InputMess info={this.sendMessage}></InputMess>
        </div>
    
      </div>
    );
  }
}
