import { actions } from '../actions';

export interface ReducersConfigStore {
  active: boolean;
}

const defaultState: ReducersConfigStore = {
  active: false
}

const configs = (state: ReducersConfigStore = defaultState, action: any) => {
  switch (action.type) {
    case actions.CONF_TOGLE:
      return { active: !state.active };
    default:
      return state
  }
}

export default configs;
