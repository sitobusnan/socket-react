import React, { Component } from 'react'

export default class input extends Component {
    constructor(){
        super()
        this.state={
            name:""
        }
    }

    handlerText=(e)=>{
        this.setState({...this.state, name: e.target.value})
    }

    handlerSubmit=()=>{
        this.props.info(this.state.name)
    }

    render() {
        return (
            <div>
                <label htmlFor="">NickName</label>
                <input onChange={(e)=>{this.handlerText(e)}} type="text" name="name" id=""/>
                <button onClick={()=>{this.handlerSubmit()}}>Submit</button>
            </div>
        )
    }
}
