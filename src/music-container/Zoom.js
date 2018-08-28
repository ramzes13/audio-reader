import React, { Component } from 'react';

class Zoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoom: 1,
    };

    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);
  }

  onZoomIn() {
    this.setState((prevState, props) => {
      return Object.assign(prevState, { zoom: prevState.zoom -= 10 })
    });
  }

  onZoomOut() {
    this.setState((prevState, props) => {
      return Object.assign(prevState, { zoom: prevState.zoom += 10 })
    });
  }

  render() {

    return (
      <div>
        <button onClick={this.onZoomIn}>-</button>
        <button onClick={this.onZoomOut}>+</button>
      </div>
    )
  }
}

export default Zoom;