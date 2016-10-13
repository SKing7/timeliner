import { combineReducers } from 'redux-immutablejs'
//import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    router: routerReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
