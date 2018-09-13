import React, { Component } from 'react';
import { Button } from 'reactstrap';
import tinyColor from 'tinycolor2';

import RegionResize from './RegionResize'
const { addRegionToEnd } = require('../../utils/wavesurfer-util');

class Region extends Component {

  constructor(props) {
    super(props);
    const that = this;
    this.peaksInstance = props.peaksInstance;

    that.state = {
      activeRegion: null,
      selectedRegion: null,
    }

    this.peaksInstance.on('segments.click', function (activeRegion, e) {
      console.log('segments.click', { activeRegion });
    });


    this.peaksInstance.on('segments.mouseenter', function (activeRegion, e) {
      console.log('segments.mouseenter', { activeRegion });
    });

    this.peaksInstance.on('segments.mouseleave', function (activeRegion, e) {
      console.log('segments.mouseleave', { activeRegion });
    });

    // this.wavesurfer.on('region-out', function (region, e) {
    //   that.setState((prevState, props) => {
    //     return { activeRegion: null };
    //   });
    // });

    // this.wavesurfer.on('region-mouseenter', function (region, e) {
    //   if (!region.app_isActive) {
    //     selectRegion(region);
    //   }
    // });

    // this.wavesurfer.on('region-mouseleave', function (region, e) {
    //   if (!region.app_isActive) {
    //     deselectRegion(region);
    //   }
    // });

    // this.wavesurfer.on('region-click', function (region, e) {
    //   that.setState((prevState, props) => {

    //     if (prevState.selectedRegion && prevState.selectedRegion.id !== region.id) {
    //       prevState.selectedRegion.app_isActive = false;
    //       deselectRegion(prevState.selectedRegion);
    //     }

    //     region.app_isActive = true;

    //     selectRegion(region, 0.85);

    //     return { selectedRegion: region };
    //   });

    //   e.stopPropagation();
    // });

    this.playSelected = this.playSelected.bind(this);
    this.goToCurrentRegion = this.goToCurrentRegion.bind(this);
    this.createNewRegion = this.createNewRegion.bind(this);
    this.unselectActiveRegion = this.unselectActiveRegion.bind(this);
  }

  unselectActiveRegion() {
    this.setState((prevState, props) => {
      prevState.selectedRegion.app_isActive = false;

      deselectRegion(prevState.selectedRegion);
      return { selectedRegion: null };
    });
  }

  playSelected() {
    this.setState((prevState, props) => {
      return { selectedRegion: null };
    });
  }

  goToCurrentRegion() {
    this.setState((prevState, props) => {
      return { selectedRegion: null };
    });
  }

  createNewRegion() {
    let startTime = 0;
    const lastSegment = this.peaksInstance.getLastSegment();
    if (lastSegment) {
      startTime = lastSegment.endTime + 1;
    }
    const segmentData = {
      startTime: startTime,
      endTime: this.peaksInstance.player.getCurrentTime(),
      labelText: "Test segment",
      editable: true
    };
    console.log(segmentData);
    const segmentEntity = this.peaksInstance.segments.add(segmentData);
    console.log(segmentEntity)
  }

  render() {

    if (this.state.selectedRegion) {
      return (
        <div>
          <button onClick={this.unselectActiveRegion} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div className='text-center'>
            <p>Selected region</p>
            {displayRegionRange(this.state.selectedRegion)}
            <div className=''>
              <Button onClick={this.playSelected} size="sm">Play</Button>
            </div>
          </div>
          <RegionResize region={this.state.selectedRegion}></RegionResize>
        </div>
      )
    }
    if (this.state.activeRegion) {
      return (
        <div>
          <p>Playing region</p>
          {displayRegionRange(this.state.activeRegion)}
          <Button onClick={this.onZoomIn} size="sm">Loop</Button>
        </div>
      )
    }
    return (
      <div>
        <Button size="sm" onClick={this.createNewRegion}>Create new region </Button>
      </div>
    )
  }
}

function deselectRegion(region) {
  region.app_tinyColorObj.setAlpha(.2);
  region.color = region.app_tinyColorObj.toRgbString();

  region.updateRender();
}

function displayRegionRange(region) {
  return <p>From: {formatTime(region.start)}, To: {formatTime(region.end)}</p>
}

function formatTime(time) {
  return parseFloat(time).toFixed(2);
}

function selectRegion(region, alphaValue = 0.6) {
  if (!region.app_tinyColorObj) {
    region.app_tinyColorObj = tinyColor(region.color)
  }
  region.app_tinyColorObj.setAlpha(alphaValue);
  region.color = region.app_tinyColorObj.toRgbString();

  region.updateRender();
}

export default Region;