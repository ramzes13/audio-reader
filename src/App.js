import React, { Component } from 'react';
import './App.css';
import Storage from './services/Storage';
import 'bootstrap/dist/css/bootstrap.css';

import MusicContainer from './music-container/MusicContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.storage = new Storage();
  }
  render() {
    return (
      <div className='container-fluid'>
        <MusicContainer storage={this.storage}> </MusicContainer>
      </div>
    );
  }
}

export default App;
