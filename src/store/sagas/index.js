import { all } from 'redux-saga/effects';
import { characterSagas } from './character';

export default function* rootSaga() {
  yield all([...characterSagas]);
}
