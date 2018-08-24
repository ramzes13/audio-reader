import React, { Component } from 'react';

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
    console.log('click on start');
    // if (this.state.playing) {
    //   this.props.wavesurfer.stop();
    // } else {
    //   this.props.wavesurfer.play();
    // }

    this.setState((prevState, props) => {
      return { playing: !prevState.playing };
    });
  }

  render() {

    console.log('actions init', this.props.wavesurfer);

    if (this.props.wavesurfer) {
      return (
        <div id='music-action-container'>
          <button onClick={this.onToggleStartStop}>Start</button>
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