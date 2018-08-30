import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    viewAccount
} from '../services/viewAccount';
import { REQUEST_ACCOUNT_DETAIL_SUCCESS, REQUEST_ACCOUNT_DETAIL_FAILED, BUTTON_PLUS_CLICKED, BUTTON_PLUS_SUCCESS, BUTTON_PLUS_FAILURE } from '../redux/actions/types';

export function* fetchViewAccount(action) {
    try {
        const data = yield viewAccount()
        yield put({ type: BUTTON_PLUS_SUCCESS, data })
    } catch (e) {
        yield put({ type: BUTTON_PLUS_FAILURE, errData: { message: e.message, code: e.code } })
    }
}