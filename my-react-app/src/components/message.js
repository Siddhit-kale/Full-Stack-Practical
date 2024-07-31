import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome!!"
        }
    }
    changeMsg(){
        this.setState({
            message: "Thank You!!"
        })
    }
  render() {
    return (
      <div>
        <button onClick={() => this.changeMsg()}>Click</button>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default Message