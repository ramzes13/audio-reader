import React, { Component } from 'react';
import './App.css';
import Storage from './services/Storage';
import { generateUniqueId } from './services/Util';
import { isActiveRegion } from './services/RegionUtils';
import 'bootstrap/dist/css/bootstrap.css';

import AppRegionManagement from './AppRegionManagement';
import PeaksComponent from './music-container/peaks/Peaks';
import ReadingContainer from './reading-container/ReadingContainer';

const regionActions = {
  edit: 'edit',
  create: 'create',
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRegion: null,
      regionAction: null,
      currentRegionMeta: {
        bookMeta: {},
        audioMeta: {
          startTime: 0,
          endTime: 0,
        },
      }
    };

    this.storage = new Storage();
    this.storage.normalize();

    // this.getRegionMetaByAction = this.getRegionMetaByAction.bind(this);
    this.beginRegionAction = this.beginRegionAction.bind(this);

    this.cancelRegionAction = this.cancelRegionAction.bind(this);
    this.onChangeMusicMeta = this.onChangeMusicMeta.bind(this);
    this.onChangeBookMeta = this.onChangeBookMeta.bind(this);
    this.onChangeMusicCurrentTime = this.onChangeMusicCurrentTime.bind(this);
    this.onRegionClick = this.onRegionClick.bind(this);
  }

  onRegionClick(regionId) {
    const selectedRegion = this.storage.getRegionById(regionId);
    this.setState(() => {
      return { selectedRegion }
    })
  }

  validateRegionAction() {
    if (!isValidNewRegionData()) {
      return alert('fmmm');
    }
    const { bookMeta, audioMeta } = this.state;

    this.storage.addNewRegion({ bookMeta, audioMeta, id: generateUniqueId() });

    this.setState((prevState) => {
      return {
        regionAction: null,
        bookMeta: {},
        audioMeta: {},
      }
    });
  }

  beginRegionAction(actionType) {
    return () => {
      this.setState((prevState) => {
        return { regionAction: actionType };
      })
    }
  }

  cancelRegionAction() {
    this.setState((prevState) => {
      return { regionAction: null };
    })
  }

  onChangeMusicMeta(audioMeta) {
    this.setState((prevState) => {
      return { audioMeta };
    });
  }

  onChangeBookMeta(bookMeta) {
    this.setState((prevState) => {
      if (prevState.regionAction === regionActions.edit) {
        prevState.selectedRegion.bookMeta = bookMeta;
      } else {
        prevState.currentRegionMeta.bookMeta = bookMeta;
      }

      return prevState;
    });
  }

  onChangeMusicCurrentTime(currentTime) {
    this.setState((prevState) => {
      if (prevState.selectedRegion && !isActiveRegion(prevState.selectedRegion, currentTime)) {
        prevState.selectedRegion = null;
      }
      return prevState.currentRegionMeta.audioMeta.endTime = currentTime;
    });
  }

  getRegionMetaByAction = () => {
    if (this.state.regionAction === regionActions.edit) {
      return this.state.selectedRegion;
    }
    return this.state.currentRegionMeta;
  }

  render() {
    let regionManagement;
    if (this.state.regionAction) {
      const regionMeta = this.getRegionMetaByAction(this.state.regionAction);
      regionManagement = (
        <AppRegionManagement
          region={regionMeta}
          cancelRegionAction={this.cancelRegionAction}
          regionAction={this.state.regionAction}
        ></AppRegionManagement>
      )
    } else {
      let selectedRegionActions;

      if (this.state.selectedRegion) {
        selectedRegionActions = (
          <button className="btn sm" onClick={this.beginRegionAction(regionActions.edit)}>Edit selectedRegion</button>
        );
      }
      regionManagement = (
        <div className="row">
          <button className="btn sm" onClick={this.beginRegionAction(regionActions.create)}>Config new region </button>
          {selectedRegionActions}
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

export default App;
