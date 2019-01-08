import { AnyAction } from 'redux'

import { actions } from '../actions/configActions';
import { actions as readActions } from '../actions/readingActions';
import { AppState } from './index';

export interface RegionReadMeta {
  cfiRange: any,
  label: string
}

export interface ReducersConfigInterface {
  active?: boolean;
  region?: {
    read?: RegionReadMeta,
    audio?: any
  }
}

const defaultState: ReducersConfigInterface = {
  active: false,
  region: {}
}

const configs = (state: ReducersConfigInterface = defaultState, action: AnyAction, globalState: AppState): ReducersConfigInterface => {
  switch (action.type) {
    case actions.CONF_TOGGLE:
      return { ...state, active: !state.active };
    case readActions.READ_SELECT:
      if (globalState.global.activeNewRegion) {
        const region = Object.assign({}, state.region, { read: action.selectionMeta })
        return { ...state, region }
      }
      return { ...state, active: !state.active };
    default:
      return state
  }
}

export default configs;
