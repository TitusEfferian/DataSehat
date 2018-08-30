import {call} from 'redux-saga/effects'
import {browserHistory} from 'react-router'

import {register} from '../services/register'

export function* submitRegister(request) {
  try {
    let resSubmit = yield call(register, request.payload)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
    browserHistory.push('/login')
  }
}