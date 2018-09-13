import React, { Component } from 'react';
import Peaks from 'peaks.js';
import Zoom from './Zoom';
import Actions from './Actions';
import Region from './Region';

Peaks.prototype.getLastSegment = function () {
  let lastSegment = null;
  this.segments._segments.forEach(segment => {
    if (!lastSegment || lastSegment.endTime < segment.endTime) {
      lastSegment = segment;
    }
  });

  return lastSegment;
};

class PeaksComponent extends Component {
  constructor(props) {
    super(props);
    this.peaksInstance = null;

    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    const that = this;

    that.peaksInstance = Peaks.init({
      container: document.querySelector('#peaks-container'),
      mediaElement: document.querySelector('audio'),
      dataUri: '/first_ogg.json'
    });

    that.peaksInstance.on('peaks.ready', function () {
      that.setState((prevState) => {
        return { ready: true };
      });
      console.log('peaks.ready');
    });
  }

  render() {
    let playerConfigs;

    if (this.state.ready) {
      playerConfigs = (
        <div className='row'>
          <div className='col-sm'>
            <Actions peaksInstance={this.peaksInstance}></Actions>
          </div>
          <div className='col-sm'>
            <Region peaksInstance={this.peaksInstance}></Region>
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

export default PeaksComponent;