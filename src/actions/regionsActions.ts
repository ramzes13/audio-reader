import { Action } from 'redux'

import { RegionMetaInterface } from '../index.t';
import { removeReadingSelection } from './readingActions';

import {
  setInactiveNewRegion,
  setActiveNewRegion
} from './globalActions';

export const actions = {
  REG_TOGGLE: 'REG_TOGGLE',
  REG_SAVE_NEW_REGION: 'REG_SAVE_NEW_REGION',
  REG_CREATE_NEW_REGION: 'REG_CREATE_NEW_REGION',
  REG_SAVE_REGION: 'REG_SAVE_REGION',
  REG_SELECT: 'REG_SELECT',
  REG_EDIT: 'REG_EDIT',
}

export interface RegionAction extends Action {
  region: RegionMetaInterface
};

export function toggleActive(): Action {
  return { type: actions.REG_TOGGLE };
}

export function handleSaveRegion(region: RegionMetaInterface) {
  return (dispatch: any) => {
    //when new region is created
    if (!region.id) {
      region.id = '_' + Math.random().toString(36).substr(2, 9);
      dispatch({ type: actions.REG_SAVE_NEW_REGION, region });
    } else {
      dispatch({ type: actions.REG_SAVE_REGION, region });
    }

    dispatch(removeReadingSelection());
  }
}

export function regionSelected(region: RegionMetaInterface): RegionAction {
  return { type: actions.REG_SELECT, region };
}

export function regionEdit(region: RegionMetaInterface) {
  return (dispatch: any) => {
    dispatch(setActiveNewRegion());
    dispatch({ type: actions.REG_EDIT, region });
  }
}

export function cancelRegionEdit() {
  console.log('cancelRegionEdit')
  return (dispatch: any, getState: any) => {
    dispatch(setInactiveNewRegion());
    dispatch(removeReadingSelection());
  }
}

export function beginCreateNewRegion() {
  console.log('cancelRegionEdit')
  return (dispatch: any, getState: any) => {
    dispatch(setActiveNewRegion());
    dispatch(removeReadingSelection());
    dispatch({ type: actions.REG_CREATE_NEW_REGION });
  }
}