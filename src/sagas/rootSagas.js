import {all, takeEvery} from 'redux-saga/effects/'
import * as Types from '../redux/actions/types'
import {fetchViewAccount} from './viewAccount'
import {fetchLogin} from './login'
import {submitRegister} from './register'
import {submitDataMedCheck} from './inputData'

export default function* watchSagas() {
  yield all([
    yield takeEvery(Types.REQUEST_ACCOUNT_DETAIL, fetchViewAccount),
    yield takeEvery(Types.POST_LOGIN, fetchLogin),
    yield takeEvery('ON_SUBMIT_REGISTER', submitRegister),
    yield takeEvery('ON_SUBMIT_INPUT_DATA', submitDataMedCheck)
  ])
}
