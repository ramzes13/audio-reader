import { combineReducers } from 'redux'
import configs, { ReducersConfigStore } from './configs'
import reading, { ReducersReadingStore } from './reading'

export interface ReducersInterface {
  configs: ReducersConfigStore
  reading: ReducersReadingStore
}
export default combineReducers({
  configs,
  reading,
})
