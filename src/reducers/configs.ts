import { AnyAction } from 'redux'

import { actions } from '../actions/configActions';
import { actions as readActions } from '../actions/readingActions';
import { actions as regionsActions, RegionAction } from '../actions/regionsActions';
import { RegionMetaInterface } from '../index.t';
import { ReducersConfigInterface } from './index.t';

const defaultState: ReducersConfigInterface = {
  region: {} as RegionMetaInterface
}

const configs = (state: ReducersConfigInterface = defaultState, action: AnyAction): ReducersConfigInterface => {
  switch (action.type) {
    case actions.CONF_TOGGLE:
      return { ...state, active: !state.active };
    case readActions.READ_SELECT:
      const region = Object.assign({}, state.region, { readMeta: action.selectionMeta })
      return { ...state, region }
    case regionsActions.REG_EDIT:
      const regSelectAction = <RegionAction>action;
      return { ...state, region: regSelectAction.region }
    default:
      return state
  }
}

export default configs;
