import { actions } from '../actions/regionsActions';
import { ReducersRegionsRegions } from './index.t';

const defaultState: ReducersRegionsRegions = {
  active: true,
  selectedRegionId: null,
  regions: []
}

const configs = (state: ReducersRegionsRegions = defaultState, action: any): ReducersRegionsRegions => {
  switch (action.type) {
    case actions.REG_TOGGLE:
      return { ...state, active: !state.active };
    case actions.REG_SELECT:
      return { ...state, selectedRegionId: action.region.id };
    case actions.REG_SAVE_NEW_REGION:
      return { ...state, regions: state.regions.concat(action.region) };

    case actions.REG_SAVE_REGION:
      let regions = state.regions.map(reg => {
        if (reg.id === action.region.id) {
          return action.region;
        }
        return reg;
      })

      return { ...state, regions }
    default:
      return state
  }
}

export default configs;
