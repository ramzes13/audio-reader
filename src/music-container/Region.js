import React, { Component } from 'react';
import { Button } from 'reactstrap';

const { getLastRegionTime } = require('../utils/wavesurfer-util');
const { generateRegionData } = require('../utils/wavesurfer-region');

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
      e.stopPropagation();
    });

    this.wavesurfer.on('region-mouseleave', function (region, e) {
      console.log('region-mouseleave')
      e.stopPropagation();
    });

    this.wavesurfer.on('region-click', function (region, e) {
      // e.stopPropagation();
      that.setState((prevState, props) => {
        return Object.assign(prevState, { selectedRegion: region })
      });

    });

    this.playSelected = this.playSelected.bind(this);
    this.goToCurrentRegion = this.goToCurrentRegion.bind(this);
    this.createNewRegion = this.createNewRegion.bind(this);
  }

  onZoomIn() {
    this.setState((prevState, props) => {
      return Object.assign(prevState, { zoom: prevState.zoom -= 10 })
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
    const regionTimeEnd = this.wavesurfer.getCurrentTime();
    const regionTimeStart = getLastRegionTime(this.wavesurfer.regions);

    this.setState((prevState, props) => {
      return { selectedRegion: null };
    });
  }

  render() {
    if (this.state.selectedRegion) {
      return (
        <div>
          <p>Selected region</p>
          {displayRegionRange(this.state.selectedRegion)}
          <Button onClick={this.playSelected} size="sm">Play</Button>
          <Button onClick={this.goToCurrentRegion} size="sm">Go to current region</Button>
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

function displayRegionRange(region) {
  return <p>From: {formatTime(region.start)}, To: {formatTime(region.end)}</p>
}

function formatTime(time) {
  return parseFloat(time).toFixed(2);
}


export default Region;