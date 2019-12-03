import React, { Component } from 'react'

export default class InputMess extends Component {
    constructor(){
        super()
        this.state={
            text:""
        }
    }

    handlerText=(e)=>{
        this.setState({...this.state, text: e.target.value})
    }

    handlerSubmit=()=>{
        this.props.info(this.state.text)
    }

    render() {
        return (
            <div>
                <label htmlFor="">Text</label>
                <input onChange={(e)=>{this.handlerText(e)}} type="text" name="text" id=""/>
                <button onClick={()=>{this.handlerSubmit()}}>Send</button>
            </div>
        )
    }
}
