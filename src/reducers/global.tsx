import { actions } from '../actions/globalActions';

export interface ReducersGlobal {
  activeNewRegion: boolean;
}

const defaultState: ReducersGlobal = {
  activeNewRegion: false
}

const configs = (state: ReducersGlobal = defaultState, action: any): ReducersGlobal => {
  switch (action.type) {
    case actions.GLOBAL_ACTIVATE_NEW_REGION:
      return Object.assign({}, state, { activeNewRegion: true });
    default:
      return state
  }
}

export default configs;
