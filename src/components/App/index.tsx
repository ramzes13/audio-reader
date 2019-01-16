import * as React from 'react';

import './App.css'
import Configs from '../Configs';
import ReadingContainer from '../ReadingContainer';
import Regions from '../Regions';

export default () => (
  <div>
    <Configs />
    <Regions />
    <ReadingContainer />
  </div>
);
