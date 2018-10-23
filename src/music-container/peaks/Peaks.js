import React, { Component } from 'react';
import Peaks from './PeaksEntity';
import Zoom from './Zoom';
import { Button } from 'reactstrap';

class PeaksComponent extends Component {
  constructor(props) {
    super(props);
    this.peaksInstance = null;
    // this.dataUri = 'http://darii-petru.cf/static/first_ogg.json';
    this.dataUri = '/first_ogg.json';
    // this.dataAudioTag = 'http://darii-petru.cf/static/first_ogg.ogg';
    this.dataAudioTag = '/first_ogg.ogg';

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
      dataUri: that.dataUri,
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

    that.peaksInstance.on('segments.click', function (segment) {

      that.props.onRegionClick(segment.id);
      that.setState((prevState, props) => {
        that.peaksInstance.player.pause()
        return { playing: false };
      });
    });
  }

  onToggleStartStop() {
    this.setState((prevState, props) => {
      if (prevState.playing) {
        this.peaksInstance.player.pause()
      } else {
        this.peaksInstance.player.play()
      }

      return { playing: !prevState.playing };
    });
  }

  preRenderPeak() {
    const segments = this.props.regions.map((region) => {
      const { bookMeta, audioMeta, id } = region;
      return {
        editable: true,
        id,
        startTime: audioMeta.startTime,
        endTime: audioMeta.endTime,
        labelText: bookMeta.label
      }
    });

    this.peaksInstance.mergeSegments(segments);
  }

  render() {

    let playerConfigs;
    if (this.state.ready) {
      this.preRenderPeak();

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
        <audio ref="audio_tag" src={this.dataAudioTag} />
        <div id='peaks-container'></div>
        {playerConfigs}
      </div>
    )
  }
}

function prepareChangedMeta(peaksInstance) {
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