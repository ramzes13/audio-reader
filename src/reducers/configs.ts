import { AnyAction } from 'redux'

import { actions } from '../actions/configActions';
import { actions as readActions } from '../actions/readingActions';
import { actions as regionsActions, RegionAction } from '../actions/regionsActions';
import { AppState } from './index';
import { RegionMetaInterface } from '../index.t';
import { ReducersConfigInterface } from './index.t';

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
      return state
    case regionsActions.REG_EDIT:
      const regSelectAction = <RegionAction>action;
      const { region } = regSelectAction;
      return { ...state, region }
    default:
      return state
  }
}

export default configs;
