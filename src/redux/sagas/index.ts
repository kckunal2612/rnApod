import {all, fork} from 'redux-saga/effects';
import apodSaga from './pictureOfTheDaySaga';
import gallerySaga from './gallerySaga';

export function* rootSaga() {
  yield all([fork(apodSaga), fork(gallerySaga)]);
}
