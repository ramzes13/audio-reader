import { Action } from 'redux'

export const actions = {
  READ_TOGGLE: 'READ_TOGGLE',
}

export function toggleActive(): Action {
  return { type: actions.READ_TOGGLE };
}
