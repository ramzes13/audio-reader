import { AnyAction } from 'redux'

import { actions } from '../actions/configActions';
import { actions as readActions } from '../actions/readingActions';
import { ActionReadSelect } from '../actions/index.t';
import { actions as regionsActions, RegionAction } from '../actions/regionsActions';
import { RegionMetaInterface } from '../index.t';
import { ReducersConfigInterface } from './index.t';

const defaultState: ReducersConfigInterface = {
  region: {} as RegionMetaInterface
}

const configs = (state: ReducersConfigInterface = defaultState, action: AnyAction): ReducersConfigInterface => {
  let specificAction;
  switch (action.type) {
    case actions.CONF_TOGGLE:
      return { ...state, active: !state.active };
    case readActions.READ_SELECT:
      specificAction = <ActionReadSelect>action;
      const region = Object.assign({}, state.region, { readMeta: specificAction.selectionMeta })
      return { ...state, region }
    case regionsActions.REG_EDIT:
      specificAction = <RegionAction>action;
      return { ...state, region: specificAction.region }
    default:
      return state
  }
}

export default configs;
