import { Action } from 'redux'
import configs, { ReducersConfigInterface } from './configs'
import reading, { ReducersReadingStore } from './reading'
import global, { ReducersGlobal } from './global'

export interface AppState {
  configs: ReducersConfigInterface
  reading: ReducersReadingStore,
  global: ReducersGlobal,
}

export default function reducer(state: any, action: Action) {
  return {
    configs: configs(state.configs, action, state),
    reading: reading(state.reading, action),
    global: global(state.global, action),
  };
}