import {all, call, put, takeLatest} from 'redux-saga/effects';
import {ActionTypes} from '../types/ActionTypes';
import {fetchApi} from '../../hooks/fetchApi';
import {getApodUrlForDateRange} from '../../utils/networking';

const handleGalleryFetch = function* (action: any) {
  try {
    const {startDate, endDate} = action.payload;
    const apiUrl = yield call(getApodUrlForDateRange, startDate, endDate);
    const {response, error} = yield call(fetchApi, apiUrl, {});
    if (response) {
      yield put({
        type: ActionTypes.GALLERY_FETCH_SUCCESS,
        payload: response,
        date: {startDate, endDate},
      });
    }
    if (error) {
      yield put({type: ActionTypes.GALLERY_FETCH_ERROR, payload: error});
    }
  } catch (err) {
    yield put({type: ActionTypes.GALLERY_FETCH_ERROR, payload: err});
  }
};

const gallerySaga = function* () {
  yield all([
    takeLatest(ActionTypes.GALLERY_FETCH_REQUEST, handleGalleryFetch),
  ]);
};

export default gallerySaga;
