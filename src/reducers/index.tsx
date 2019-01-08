import { combineReducers } from 'redux'
import configs, { ReducersConfigInterface } from './configs'
import reading, { ReducersReadingStore } from './reading'
import global, { ReducersGlobal } from './global'

export type AppState = {
  configs: ReducersConfigInterface
  reading: ReducersReadingStore,
  global: ReducersGlobal,

}
export default combineReducers<AppState>({
  configs,
  reading,
  global,
})
