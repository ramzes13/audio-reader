import { actions } from '../actions';

export interface ReducersReadingStore {
  active: boolean;
  selectedRegion: any,
  annotationType: string,
}

const defaultState: ReducersReadingStore = {
  active: false,
  selectedRegion: null,
  annotationType: 'highlight', //Type of annotation to add: "highlight", "underline", "mark"
}

const configs = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case actions.READ_TOGLE:
      return { active: !state.active };
    default:
      return state
  }
}

export default configs;
