import { Action } from 'redux'

import { actions } from '../actions/configActions';

export interface ReducersConfigInterface {
  active: boolean;
}

const defaultState: ReducersConfigInterface = {
  active: false
}

const configs = (state: ReducersConfigInterface = defaultState, action: Action): ReducersConfigInterface => {
  switch (action.type) {
    case actions.CONF_TOGGLE:
      return { active: !state.active };
    default:
      return state
  }
}

export default configs;
