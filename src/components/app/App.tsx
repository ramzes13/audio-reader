import React, { Component } from 'react'

import './App.css'
import ManageConfigs from '../../containers/ManageConfigs';
import ManageReadingContainer from '../../containers/ManageReadingContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ManageConfigs /> 
        <ManageReadingContainer />
      </div>
    )
  }
}

export default App
