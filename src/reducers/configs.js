const defaultState = {
  active: false
}

const configs = (state = defaultState, action) => {
  console.log({ action });
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return { active: !state.active };
    default:
      return state
  }
}

export default configs;
