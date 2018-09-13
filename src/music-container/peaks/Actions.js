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
    this.setState((prevState, props) => {
      if (prevState.playing) {
        this.props.peaksInstance.player.pause()
      } else {
        this.props.peaksInstance.player.play()
      }

      return { playing: !prevState.playing };
    });
  }

  render() {

    console.log('actions init', this.props.wavesurfer);

    return (
      <div id='music-action-container'>
        <Button size="sm" onClick={this.onToggleStartStop}>Start/Stop</Button>
      </div>
    )

  }
}

export default Actions;