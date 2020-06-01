import { fork } from 'redux-saga/effects';
import loginSaga from './login/sagas';

// start the daemons
export default function* root() {
  yield fork(loginSaga().watcher);
}
