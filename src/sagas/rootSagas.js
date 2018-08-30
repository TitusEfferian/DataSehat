import { all, takeEvery } from "redux-saga/effects/";
import * as Types from '../redux/actions/types';
import { fetchViewAccount } from './viewAccount'
export default function* watchSagas() {
    yield all([
        yield takeEvery(Types.BUTTON_PLUS_CLICKED, fetchViewAccount)
    ]);
}
