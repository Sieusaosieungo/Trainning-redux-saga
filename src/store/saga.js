import { fork, all } from 'redux-saga/effects';
import { taskSaga } from './modules/task/saga';

function* rootSaga() {
  yield all([fork(taskSaga)]);
}

export default rootSaga;
