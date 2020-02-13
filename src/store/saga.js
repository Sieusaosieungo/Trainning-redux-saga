import { fork, all } from 'redux-saga/effects';
import { taskSaga } from './modules/task/saga';
import { authSaga } from './modules/auth/saga';

function* rootSaga() {
  yield all([fork(taskSaga), fork(authSaga)]);
}

export default rootSaga;
