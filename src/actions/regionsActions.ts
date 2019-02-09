import { Action, AnyAction } from 'redux'

import { RegionMetaInterface } from '../index.t';
import { actions as globalActions } from './globalActions';

export const actions = {
  REG_TOGGLE: 'REG_TOGGLE',
  REG_ADD_REGION: 'REG_ADD_REGION',
  REG_SELECT: 'REG_SELECT',
  REG_EDIT: 'REG_EDIT',
}

export interface RegionAction extends Action {
  region: RegionMetaInterface
};

export function toggleActive(): Action {
  return { type: actions.REG_TOGGLE };
}

export function addRegion(region: RegionMetaInterface): RegionAction {
  return { type: actions.REG_ADD_REGION, region };
}

export function regionSelected(region: RegionMetaInterface): RegionAction {
  return { type: actions.REG_SELECT, region };
}

export function regionEdit(region: RegionMetaInterface) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: globalActions.GLOBAL_ACTIVATE_NEW_REGION });
    dispatch({ type: actions.REG_EDIT, region });
  }
}