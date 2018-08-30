import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  viewAccount: require('./viewAccount').reducer,
  routing: routerReducer
})
