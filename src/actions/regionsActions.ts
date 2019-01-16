import { Action, AnyAction } from 'redux'

import { RegionMetaInterface } from '../index.t';

export const actions = {
  REG_TOGGLE: 'REG_TOGGLE',
  REG_ADD_REGION: 'REG_ADD_REGION',
}

export function toggleActive(): Action {
  return { type: actions.REG_TOGGLE };
}

export function addRegion(region: RegionMetaInterface): AnyAction {
  return { type: actions.REG_ADD_REGION, region };
}