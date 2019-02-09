import { Action, combineReducers } from 'redux'

import configs from './configs'
import reading from './reading'
import global from './global'
import regions from './regions'

import {
  ReducersGlobal,
  ReducersRegionsRegions,
  ReducersReadingStore,
  ReducersConfigInterface,
} from './index.t';

export interface AppState {
  configs: ReducersConfigInterface,
  reading: ReducersReadingStore,
  global: ReducersGlobal,
  regions: ReducersRegionsRegions,
}

export default combineReducers<AppState>({
  reading,
  configs,
  global,
  regions
})
