import { take, call, put } from 'redux-saga/effects';
import Actions from './actions';
import { notifySuccessChanges, notifyErrorMessage } from '../../Notifications/notify';

export default () => {
  function* worker(credentials) {
    if (credentials && credentials.userName === 'yassine') {
      yield put(Actions.loginSuccess(true));
    } else {
      notifyErrorMessage('credentials are wrong, please try again');
      yield put(Actions.loginFailure('credentials are wrong, please try again'));
    }
  }

  function* watcher() {
    while (true) {
      const { credentials } = yield take(Actions.LOGIN_REQUEST);
      yield call(worker, credentials);
    }
  }

  return { watcher, worker };
};
