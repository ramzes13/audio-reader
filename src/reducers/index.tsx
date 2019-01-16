import { Action } from 'redux'
import configs, { ReducersConfigInterface } from './configs'
import reading, { ReducersReadingStore } from './reading'
import global from './global'
import regions from './regions'
import { ReducersGlobal, ReducersRegionsRegions } from './index.t';

export interface AppState {
  configs: ReducersConfigInterface,
  reading: ReducersReadingStore,
  global: ReducersGlobal,
  regions: ReducersRegionsRegions,
}

export default function reducer(state: AppState | undefined, action: Action) {
  const localState = state ? state : {} as AppState;
  return {
    configs: configs(localState.configs, action, localState),
    reading: reading(localState.reading, action),
    global: global(localState.global, action),
    regions: regions(localState.regions, action),
  };
}
