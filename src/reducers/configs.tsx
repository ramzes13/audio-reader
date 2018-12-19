const defaultState = {
  active: false
}

const configs = (state: any = defaultState, action: any) => {
  console.log({ action });
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return { active: !state.active };
    default:
      return state
  }
}

export default configs;
