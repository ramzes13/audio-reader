import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Zoom extends Component {

  constructor(props) {
    super(props);

    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);
  }

  onZoomIn() {
    this.props.peaksInstance.zoom.zoomIn();
  }

  onZoomOut() {
    this.props.peaksInstance.zoom.zoomOut();
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

Zoom.propTypes = {
  onZoomIn: PropTypes.func,
};

export default Zoom;