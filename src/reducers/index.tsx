import { combineReducers } from 'redux'
import configs, { ReducersConfigStore } from './configs'
import reading from './reading'

export interface ReducersInterface {
  configs: ReducersConfigStore
  reading: any
}
export default combineReducers({
  configs,
  reading,
})
