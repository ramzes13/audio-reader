import { actions } from '../actions/globalActions';
import { RegionsInterface } from '../index.t';

export interface ReducersGlobal {
  activeNewRegion: boolean;
  regions: RegionsInterface
}

const defaultState: ReducersGlobal = {
  activeNewRegion: true,
  regions: []
}

const configs = (state: ReducersGlobal = defaultState, action: any): ReducersGlobal => {
  switch (action.type) {
    case actions.GLOBAL_ACTIVATE_NEW_REGION:
      return { ...state, activeNewRegion: true }
    case actions.GLOBAL_INACTIVATE_NEW_REGION:
      return { ...state, activeNewRegion: false }
    case actions.GLOBAL_ADD_REGION:
      return {
        ...state,
        regions: state.regions.concat(action.region)
      }
    default:
      return state
  }
}

export default configs;
