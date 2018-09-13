import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }

    this.onToggleStartStop = this.onToggleStartStop.bind(this);
  }

  onToggleStartStop() {
    this.props.wavesurfer.playPause();

    this.setState((prevState, props) => {
      return { playing: !prevState.playing };
    });
  }

  render() {

    console.log('actions init', this.props.wavesurfer);

    if (this.props.wavesurfer) {
      return (
        <div id='music-action-container'>
          <Button size="sm" onClick={this.onToggleStartStop}>Start/Stop</Button>
        </div>
      )
    }

    return renderWaitingBtn();
  }
}

function renderWaitingBtn() {
  return (
    <div>Loading</div>
  )
}

export default Actions;