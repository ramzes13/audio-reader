import { actions } from '../actions/globalActions';
import { ReducersGlobal } from './index.t';

const defaultState: ReducersGlobal = {
  activeNewRegion: true,
}

const configs = (state: ReducersGlobal = defaultState, action: any): ReducersGlobal => {
  switch (action.type) {
    case actions.GLOBAL_ACTIVATE_NEW_REGION:
      return { ...state, activeNewRegion: true }
    case actions.GLOBAL_INACTIVATE_NEW_REGION:
      return { ...state, activeNewRegion: false }
    default:
      return state
  }
}

export default configs;
