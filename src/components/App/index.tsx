import React, { Component } from 'react'

import './App.css'
import Configs from '../Configs';
import ManageReadingContainer from '../ReadingContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Configs /> 
        <ManageReadingContainer />
      </div>
    )
  }
}

export default App
