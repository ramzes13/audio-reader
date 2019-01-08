import { Action, AnyAction } from 'redux'

import { RegionReadMeta } from '../reducers/configs';

export const actions = {
  READ_TOGGLE: 'READ_TOGGLE',
  READ_SELECT: 'READ_SELECT',
}

export function toggleActive(): Action {
  return { type: actions.READ_TOGGLE };
}

export function onSelect(selectionMeta: RegionReadMeta): AnyAction {
  return { type: actions.READ_SELECT, selectionMeta };
}
