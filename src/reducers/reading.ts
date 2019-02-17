import { actions } from '../actions/readingActions';
import { actions as regionsActions, RegionAction } from '../actions/regionsActions';

import { ReducersReadingStore } from './index.t';

const defaultState: ReducersReadingStore = {
  active: false,
  selectedRegion: null,
  annotationType: 'highlight', //Type of annotation to add: "highlight", "underline", "mark"
}

const configs = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case actions.READ_TOGGLE:
      return { ...state, active: !state.active };
    case actions.READ_REMOVE_SELECTION:
      return { ...state, selectedRegion: null };
    case regionsActions.REG_EDIT:
      const regSelectAction = <RegionAction>action;
      return { ...state, selectedRegion: regSelectAction.region.readMeta }
    default:
      return state
  }
}

export default configs;
