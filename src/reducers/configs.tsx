import { AnyAction } from 'redux'

import { actions } from '../actions/configActions';
import { actions as readActions } from '../actions/readingActions';
import { AppState } from './index';
import { RegionMetaInterface } from '../index.t';

export interface ReducersConfigInterface {
  active?: boolean;
  region?: RegionMetaInterface
}

const defaultState: ReducersConfigInterface = {
  region: {} as RegionMetaInterface
}

const configs = (state: ReducersConfigInterface = defaultState, action: AnyAction, globalState: AppState): ReducersConfigInterface => {
  switch (action.type) {
    case actions.CONF_TOGGLE:
      return { ...state, active: !state.active };
    case readActions.READ_SELECT:
      if (globalState.global.activeNewRegion) {
        const region = Object.assign({}, state.region, { readMeta: action.selectionMeta })
        return { ...state, region }
      }
      return { ...state, active: !state.active };
    default:
      return state
  }
}

export default configs;
