import {call} from 'redux-saga/effects'
import {browserHistory} from 'react-router'

import {submit} from '../services/inputData'

export function* submitDataMedCheck(request) {
  try {
    let resSubmit = yield call(submit, request.payload)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
    browserHistory.push('/')
  }
}