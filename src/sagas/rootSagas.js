import {all, takeEvery} from 'redux-saga/effects/'
import * as Types from '../redux/actions/types'
import {fetchViewAccount} from './viewAccount'
import {} from './login'
import { fetchLogin } from './login';

export default function* watchSagas() {
  yield all([
    yield takeEvery(Types.REQUEST_ACCOUNT_DETAIL, fetchViewAccount),
    yield takeEvery(Types.POST_LOGIN,fetchLogin)
  ])
}
