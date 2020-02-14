import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { signin } from '../../../apis/auth';
import { showLoading, hideLoading } from '../ui/action';
import * as authTypes from '../../../constants/auth';
import { STATUS_CODE } from '../../../constants';
import { signinSuccess, signinFailed } from './action';
import { setCookie } from '../../../utils/cookie';

function* signinSaga({ payload }) {
  const { email, password } = payload;
  yield put(showLoading());
  try {
    const res = yield call(signin, { email, password });
    const { status: statusCode, data } = res;

    if (statusCode === STATUS_CODE.SUCCESS) {
      const { token } = data.results;
      setCookie('token', token);
      yield put(signinSuccess(token));
    }
  } catch (error) {
    yield put(signinFailed(error.response.data.message));
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* authSaga() {
  yield takeEvery(authTypes.SIGNIN, signinSaga);
}
