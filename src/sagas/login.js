import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {browserHistory} from 'react-router'
import {
  login
} from '../services/login'
import {
  POST_LOGIN_FAILED,POST_LOGIN_SUCCESS
} from '../redux/actions/types'

export function* fetchLogin(action) {
    let globalData
  try {
    console.log(action.payload)
    let payload={
        "ktp":parseInt(action.payload.ktp),
        "password":action.payload.password
    }
    globalData= yield call(login,payload)

    yield put({type: POST_LOGIN_SUCCESS, globalData})
  } catch (e) {
    yield put({type: POST_LOGIN_FAILED, errData: {message: e.message, code: e.code}})
  }
  finally{
    if(globalData.data.success)
    {
        browserHistory.push('/dashboard')

    }
    else{
        alert('error')
    }
  }
}