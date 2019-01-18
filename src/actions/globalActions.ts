import { Action } from 'redux'

export const actions = {
  GLOBAL_ACTIVATE_NEW_REGION: 'GLOBAL_ACTIVATE_NEW_REGION',
  GLOBAL_INACTIVATE_NEW_REGION: 'GLOBAL_INACTIVATE_NEW_REGION',
  GLOBAL_ADD_REGION: 'GLOBAL_ADD_REGION',
}

export function setActiveNewRegion(): Action {
  return { type: actions.GLOBAL_ACTIVATE_NEW_REGION };
}

export function setInactiveNewRegion(): Action {
  return { type: actions.GLOBAL_INACTIVATE_NEW_REGION };
}

