import React, { Component } from 'react';

import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';

import Actions from './Actions';

class MusicContainer extends Component {
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
      forceDecode: true,
      height: 256,
      // splitChannels: true,
      plugins: [
        TimelinePlugin.create({
          container: "#waveform-timeline"
        }),
        RegionPlugin.create(),
        CursorPlugin.create(),
      ]
    });

    wavesurfer.load('/demo.wav');

    wavesurfer.on('ready', function () {
      that.setState({ wavesurfer });
      console.log('sound init')
      wavesurfer.addRegion({ end: 3 });
      // wavesurfer.play();
    });
  }

  render() {
    return (
      <div id='music-container'>
        <div id='waveform'></div>
        <div id='waveform-timeline'></div>
        <Actions wavesurfer={this.state.wavesurfer}></Actions>
      </div>
    )
  }
}

export default MusicContainer;