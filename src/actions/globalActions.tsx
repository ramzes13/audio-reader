import { Action, AnyAction } from 'redux'

export const actions = {
  GLOBAL_ACTIVATE_NEW_REGION: 'GLOBAL_ACTIVATE_NEW_REGION',
}

export function setActiveNewRegion(): Action {
  const response = { type: actions.GLOBAL_ACTIVATE_NEW_REGION };
  console.log(response);
  return response;
}