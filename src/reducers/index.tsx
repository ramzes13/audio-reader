import { combineReducers } from 'redux'
import configs, { ReducersConfigStore } from './configs'
import reading, { ReducersReadingStore } from './reading'

export type AppState = {
  configs: ReducersConfigStore
  reading: ReducersReadingStore
}
export default combineReducers<AppState>({
  configs,
  reading,
})
