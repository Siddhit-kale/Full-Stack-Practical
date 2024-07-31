import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome From {this.props.deptName}</h1>
      </div>
    )
  }
}

export default Welcome