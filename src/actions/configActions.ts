import { Action } from 'redux'

export const actions = {
  CONF_TOGGLE: 'CONF_TOGGLE',
}

export function toggleActive(): Action {
  return { type: actions.CONF_TOGGLE };
}
