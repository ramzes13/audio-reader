export interface ReducersConfigStore {
  active: boolean;
}

const defaultState: ReducersConfigStore = {
  active: false
}

const configs = (state: ReducersConfigStore = defaultState, action: any) => {
  console.log({ action });
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return { active: !state.active };
    default:
      return state
  }
}

export default configs;
