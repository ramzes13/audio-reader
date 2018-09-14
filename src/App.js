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
      activeRegion: null,
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
    this.cancelCreateNewRegion = this.cancelCreateNewRegion.bind(this);
    this.onChangeMusicMeta = this.onChangeMusicMeta.bind(this);
    this.onChangeBookMeta = this.onChangeBookMeta.bind(this);
    this.onChangeMusicCurrentTime = this.onChangeMusicCurrentTime.bind(this);
  }

  createNewRegion() {
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
    console.log({ label });
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
            <p>music region</p>
            <p>start: <b>{this.state.audioMeta.startTime} s</b></p>
            <p>end: <b>{this.state.audioMeta.endTime} s</b></p>
          </div>
          <div className="col-6">
            <p>book region: <b>{this.state.bookMeta.label}</b></p>
          </div>
        </div>
      )
    } else {
      regionManagement = (
        <div className="row">
          <button className="btn sm" onClick={this.createNewRegion}>Create new region </button>
        </div>
      )
    }
    return (
      <div className='container-fluid'>
        <PeaksComponent
          onChangeMeta={this.onChangeMusicMeta}
          onChangeMusicCurrentTime={this.onChangeMusicCurrentTime}
          storage={this.storage}
        > </PeaksComponent>
        <ReadingContainer onChangeMeta={this.onChangeBookMeta} storage={this.storage}> </ReadingContainer>
        {regionManagement}
      </div>
    );
  }
}

export default App;
