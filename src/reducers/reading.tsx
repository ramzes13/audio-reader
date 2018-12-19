const defaultState = {
  selectedRegion: null,
  annotationType: 'highlight', //Type of annotation to add: "highlight", "underline", "mark"
}

const configs = (state: any = defaultState, action: any) => {
  console.log({ action });
  switch (action.type) {
    case 'READING_RANGE_SELECT':
      return { selectedRegion: action.range };
    default:
      return state
  }
}

export default configs;
