import { actions } from '../actions/regionsActions';
import { ReducersRegionsRegions } from './index.t';

const defaultState: ReducersRegionsRegions = {
  active: true,
  regions: []
}

const configs = (state: ReducersRegionsRegions = defaultState, action: any): ReducersRegionsRegions => {
  switch (action.type) {
    case actions.REG_TOGGLE:
      return { ...state, active: !state.active };

    case actions.REG_ADD_REGION:
      return {
        ...state,
        regions: state.regions.concat(action.region)
      }
    default:
      return state
  }
}

export default configs;
