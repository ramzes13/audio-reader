import { Action, AnyAction } from 'redux'

import { RegionReadMeta } from '../index.t';
import { ActionReadSelect } from './index.t';

export const actions = {
  READ_TOGGLE: 'READ_TOGGLE',
  READ_SELECT: 'READ_SELECT',
  READ_SELECT_REGION: 'READ_SELECT_REGION',
  READ_REMOVE_SELECTION: 'READ_REMOVE_SELECTION',
}

export function toggleActive(): Action {
  return { type: actions.READ_TOGGLE };
}

export function onSelect(selectionMeta: RegionReadMeta): ActionReadSelect {
  return { type: actions.READ_SELECT, selectionMeta };
}

export function selectReadingRegion(selectionMeta: RegionReadMeta): ActionReadSelect {
  return { type: actions.READ_SELECT_REGION, selectionMeta };
}

export function removeReadingSelection(): Action {
  return { type: actions.READ_REMOVE_SELECTION };
}