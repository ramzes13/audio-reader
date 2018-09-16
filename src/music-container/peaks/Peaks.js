import React, { Component } from 'react';
import Peaks from './PeaksEntity';
import Zoom from './Zoom';
import { Button } from 'reactstrap';

class PeaksComponent extends Component {
  constructor(props) {
    super(props);
    this.peaksInstance = null;

    this.state = {
      ready: false,
      playing: false
    };

    this.onToggleStartStop = this.onToggleStartStop.bind(this);
  }

  componentDidMount() {
    const that = this;

    that.peaksInstance = Peaks.init({
      height: 100,
      keyboard: true,
      container: document.querySelector('#peaks-container'),
      mediaElement: document.querySelector('audio'),
      dataUri: '/first_ogg.json',
    });

    that.peaksInstance.on('peaks.ready', function () {
      that.setState((prevState) => {
        return { ready: true };
      });
      console.log('peaks.ready');
    });

    that.peaksInstance.on('player_time_update', function (currentTime) {
      that.props.onChangeMusicCurrentTime(formatTime(currentTime));
    });
  }

  onToggleStartStop() {
    this.setState((prevState, props) => {
      if (prevState.playing) {
        props.onChangeMeta(prepareChangedMeta(this.peaksInstance))
        this.peaksInstance.player.pause()
      } else {
        this.peaksInstance.player.play()
      }

      return { playing: !prevState.playing };
    });
  }


  render() {

    let playerConfigs;
    if (this.state.ready) {

      const segments = this.props.regions.map((region) => {
        const { bookMeta, audioMeta } = region;
        return {
          editable: true,
          id: audioMeta.id,
          startTime: audioMeta.startTime,
          endTime: audioMeta.endTime,
          labelText: bookMeta.label
        }
      });

      this.peaksInstance.mergeSegments(segments);

      playerConfigs = (
        <div className='row'>
          <div className='col-sm'>
            <Button size="sm" onClick={this.onToggleStartStop}>Start/Stop</Button>
          </div>
          <div className='col-sm'>
            <Zoom peaksInstance={this.peaksInstance}></Zoom>
          </div>
        </div>
      )
    }

    return (
      <div id='music-container'>
        <audio ref="audio_tag" src="/first_ogg.ogg" />
        <div id='peaks-container'></div>
        {playerConfigs}
      </div>
    )
  }
}

function prepareChangedMeta(peaksInstance) {
  console.log('prepareChangedMeta aaaaaaaaaaaa')
  const lastSegment = peaksInstance.getLastSegment();
  const changedMeta = {
    startTime: 0,
    endTime: formatTime(peaksInstance.player.getCurrentTime()),
  }

  if (lastSegment) {
    changedMeta.startTime = formatTime(lastSegment.endTime);
  }

  return changedMeta;
}

function formatTime(time) {
  return parseFloat(time.toFixed(2));
}
export default PeaksComponent;