import React, { Component } from 'react';
import './App.css';
import Storage from './services/Storage';
import 'bootstrap/dist/css/bootstrap.css';

import PeaksComponent from './music-container/peaks/Peaks';
import ReadingContainer from './reading-container/ReadingContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRegion: null,
      creatingNewRegion: true,
      bookMeta: {},
      audioMeta: {
        startTime: 0,
        endTime: 0,
      },
    }

    this.storage = new Storage();
    this.storage.normalize();

    this.createNewRegion = this.createNewRegion.bind(this);
    this.displayCreateNewRegion = this.displayCreateNewRegion.bind(this);
    this.cancelCreateNewRegion = this.cancelCreateNewRegion.bind(this);
    this.onChangeMusicMeta = this.onChangeMusicMeta.bind(this);
    this.onChangeBookMeta = this.onChangeBookMeta.bind(this);
    this.onChangeMusicCurrentTime = this.onChangeMusicCurrentTime.bind(this);
    this.onRegionClick = this.onRegionClick.bind(this);
  }

  onRegionClick(regionId) {
    console.log('clicked on current region', regionId);
    const selectedRegion = this.storage.getRegionById(regionId);
    this.setState(() => {
      return { selectedRegion }
    })
  }

  createNewRegion() {
    if (!isValidNewRegionData()) {
      return alert('fmmm');
    }
    const { bookMeta, audioMeta } = this.state;

    this.storage.addNewRegion({ bookMeta, audioMeta, id: ID() });

    this.setState((prevState) => {
      return {
        creatingNewRegion: false,
        bookMeta: {},
        audioMeta: {},
      }
    });
  }

  displayCreateNewRegion() {
    this.setState((prevState) => {
      return { creatingNewRegion: !prevState.creatingNewRegion };
    })
  }

  cancelCreateNewRegion() {
    this.setState((prevState) => {
      return { creatingNewRegion: false };
    })
  }

  onChangeMusicMeta(audioMeta) {
    this.setState((prevState) => {
      return { audioMeta };
    });
  }

  onChangeMusicCurrentTime(currentTime) {
    this.setState((prevState) => {
      return prevState.audioMeta.endTime = currentTime;
    });
  }

  onChangeBookMeta(bookMeta) {
    const { label } = bookMeta;
    this.setState((prevState) => {
      return { bookMeta };
    });
  }

  render() {
    let regionManagement;
    if (this.state.creatingNewRegion) {
      regionManagement = (
        <div className="row">
          <div className="col-12">
            <button onClick={this.cancelCreateNewRegion} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="col-6">
            <h4>music region</h4>
            <p>start: <b>{this.state.audioMeta.startTime} s</b></p>
            <p>end: <b>{this.state.audioMeta.endTime} s</b></p>
          </div>
          <div className="col-6">
            <h4>book region:</h4>
            <p>Selected region: <b>{this.state.bookMeta.label}</b></p>
          </div>
          <div className="col-12">
            <button className="btn btn-success sm" onClick={this.createNewRegion}>Create</button>
          </div>
        </div>
      )
    } else {
      regionManagement = (
        <div className="row">
          <button className="btn sm" onClick={this.displayCreateNewRegion}>Config new region </button>
        </div>
      )
    }
    const regions = this.storage.getRegions();
    return (
      <div className='container-fluid'>
        <PeaksComponent
          onChangeMeta={this.onChangeMusicMeta}
          onChangeMusicCurrentTime={this.onChangeMusicCurrentTime}
          onRegionClick={this.onRegionClick}
          regions={regions}
        > </PeaksComponent>
        <ReadingContainer
          onChangeMeta={this.onChangeBookMeta}
          regions={regions}
          selectedRegion={this.state.selectedRegion}
        > </ReadingContainer>
        {regionManagement}
      </div>
    );
  }
}


function isValidNewRegionData() {
  return true;
}

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
export default App;
