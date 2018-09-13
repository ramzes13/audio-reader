import React, { Component } from 'react';

import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';


import Actions from './Actions';
import Zoom from './Zoom';
import Region from './Region';

class Wavesurfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wavesurfer: null,
    }
  }

  componentDidMount() {
    const that = this;

    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      // forceDecode: true,
      backend: 'MediaElement',
      // mediaType: 'audio',
      height: 256,
      responsive: true,
      mediaControls: true,
      plugins: [
        TimelinePlugin.create({
          container: "#waveform-timeline"
        }),
        RegionPlugin.create(),
        CursorPlugin.create(),
      ]
    });

    wavesurfer.appStorage = this.props.storage;

    wavesurfer.load('/first.ogg');

    wavesurfer.on('ready', function () {
      that.setState({ wavesurfer });
      const regions = wavesurfer.appStorage.getRegions();

      regions.forEach(region => {
        wavesurfer.addRegion(region);
      });
      // wavesurfer.play();
    });
  }

  render() {
    let playerConfigs;

    if (this.state.wavesurfer) {
      playerConfigs = (
        <div className='row'>
          <div className='col-sm'>
            <Actions wavesurfer={this.state.wavesurfer}></Actions>
          </div>
          <div className='col-sm'>
            <Region wavesurfer={this.state.wavesurfer}></Region>
          </div>
          <div className='col-sm'>
            <Zoom wavesurfer={this.state.wavesurfer}></Zoom>
          </div>
        </div>
      )
    }

    return (
      <div id='music-container'>
        <div id='waveform'></div>
        <div id='waveform-timeline'></div>
        {playerConfigs}
      </div>
    )
  }
}

export default Wavesurfer;