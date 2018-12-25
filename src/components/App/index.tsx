import React, { Component } from 'react'

import './App.css'
import Configs from '../Configs';
import ManageReadingContainer from '../ReadingContainer';
import GenericContainer from '../../ui/GenericComponent';

class App extends Component {
  render() {
    return (
      <div>
        <GenericContainer />
        <Configs />
        <ManageReadingContainer />
      </div>
    )
  }
}

export default App
