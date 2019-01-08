import { actions } from '../actions/globalActions';

export interface ReducersGlobal {
  activeNewRegion: boolean;
}

const defaultState: ReducersGlobal = {
  activeNewRegion: true
}

const configs = (state: ReducersGlobal = defaultState, action: any): ReducersGlobal => {
  switch (action.type) {
    case actions.GLOBAL_ACTIVATE_NEW_REGION:
      return Object.assign({}, state, { activeNewRegion: true });
    case actions.GLOBAL_INACTIVATE_NEW_REGION:
      return Object.assign({}, state, { activeNewRegion: false });
    default:
      return state
  }
}

export default configs;
