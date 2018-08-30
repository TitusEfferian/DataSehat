import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {
  viewAccount
} from '../services/viewAccount'
import {
  REQUEST_ACCOUNT_DETAIL_SUCCESS,
  REQUEST_ACCOUNT_DETAIL_FAILED
} from '../redux/actions/types'

export function* fetchViewAccount(action) {
  try {
    console.log('action sagas viewacc',action.payload)
    const data = yield call(viewAccount,action.payload)
    yield put({type: REQUEST_ACCOUNT_DETAIL_SUCCESS, data})
  } catch (e) {
    yield put({type: REQUEST_ACCOUNT_DETAIL_FAILED, errData: {message: e.message, code: e.code}})
  }
}