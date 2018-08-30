import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  viewAccount: require('./viewAccount').reducer,
  routing: routerReducer,
  postLoginReducer:require('./login').reducer,
  form: formReducer
})
