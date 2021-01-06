import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'react-thunk'
import reducer from '../reducers/index'

let store
export function configureStore() {
  store = createStore(combineReducers(, applyMiddleware(thunk))
}
