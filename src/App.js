import React, { Component } from 'react';
import './App.css';
import Storage from './services/Storage';
import 'bootstrap/dist/css/bootstrap.css';

import MusicContainer from './music-container/MusicContainer';
import ReadingContainer from './reading-container/ReadingContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.storage = new Storage();
    this.storage.normalize();
  }
  render() {
    return (
      <div className='container-fluid'>
        <MusicContainer storage={this.storage}> </MusicContainer>
        <ReadingContainer storage={this.storage}> </ReadingContainer>
      </div>
    );
  }
}

export default App;
