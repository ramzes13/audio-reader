import { Action, AnyAction } from 'redux'

import { RegionReadMeta } from '../index.t';
import { ActionReadSelect } from './index.t';

export const actions = {
  READ_TOGGLE: 'READ_TOGGLE',
  READ_SELECT: 'READ_SELECT',
  READ_CF_SELECT: 'READ_CF_SELECT',
}

export function toggleActive(): Action {
  return { type: actions.READ_TOGGLE };
}

export function onSelect(selectionMeta: RegionReadMeta): ActionReadSelect {
  return { type: actions.READ_SELECT, selectionMeta };
}
