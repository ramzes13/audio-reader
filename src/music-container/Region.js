import React, { Component } from 'react';
import { Button } from 'reactstrap';
import tinyColor from 'tinycolor2';

const { addRegionToEnd } = require('../utils/wavesurfer-util');

class Region extends Component {

  constructor(props) {
    super(props);
    const that = this;
    this.wavesurfer = props.wavesurfer;

    that.state = {
      activeRegion: null,
      selectedRegion: null,
    }

    this.wavesurfer.on('region-in', function (activeRegion, e) {
      that.setState((prevState, props) => {
        const newState = { activeRegion };
        // if (prevState.selectedRegion && prevState.selectedRegion.id === activeRegion.id) {
        //   newState.selectedRegion = null;
        // }

        return newState;
      });
      // console.log(' region-in');
    });

    this.wavesurfer.on('region-out', function (region, e) {
      // console.log('region-out');
      that.setState((prevState, props) => {
        return { activeRegion: null };
      });
    });

    this.wavesurfer.on('region-mouseenter', function (region, e) {
      console.log('region-mouseenter');
      if (!region.app_tinyColorObj) {
        region.app_tinyColorObj = tinyColor(region.color)
      }

      region.app_tinyColorObj.setAlpha(.5);
      region.color = region.app_tinyColorObj.toRgbString();

      region.updateRender();
    });

    this.wavesurfer.on('region-mouseleave', function (region, e) {
      if (!region.app_isActive) {
        deselectRegion(region);
      }
    });

    this.wavesurfer.on('region-click', function (region, e) {
      that.setState((prevState, props) => {

        if (prevState.selectedRegion && prevState.selectedRegion.id !== region.id) {
          prevState.selectedRegion.app_isActive = false;
          deselectRegion(prevState.selectedRegion);
        }

        region.app_isActive = true;

        return Object.assign(prevState, { selectedRegion: region })
      });

      e.stopPropagation();
    });

    this.playSelected = this.playSelected.bind(this);
    this.goToCurrentRegion = this.goToCurrentRegion.bind(this);
    this.createNewRegion = this.createNewRegion.bind(this);
    this.unselectActiveRegion = this.unselectActiveRegion.bind(this);
  }

  unselectActiveRegion() {
    this.setState((prevState, props) => {
      prevState.selectedRegion.app_isActive = false;

      return Object.assign(prevState, { selectedRegion: null })
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
    const end = this.wavesurfer.getCurrentTime();
    addRegionToEnd(this.wavesurfer, end);

    // this.setState((prevState, props) => {
    //   return { selectedRegion: null };
    // });
  }

  render() {
    if (this.state.selectedRegion) {
      return (
        <div>
          <button onClick={this.unselectActiveRegion} type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div className='text-center'>
            <p>Selected region</p>
            {displayRegionRange(this.state.selectedRegion)}
            <div className=''>
              <Button onClick={this.playSelected} size="sm">Play</Button>
            </div>
          </div>
          <div className='float-left'>
            <Button onClick={this.playSelected} size="sm">&lArr;</Button>
            <Button onClick={this.playSelected} size="sm">&rArr;</Button>
          </div>
          <div className='float-right'>
            <Button onClick={this.playSelected} size="sm">&lArr;</Button>
            <Button onClick={this.playSelected} size="sm">&rArr;</Button>
          </div>
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


export default Region;