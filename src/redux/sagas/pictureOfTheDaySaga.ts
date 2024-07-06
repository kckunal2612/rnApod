import {all, call, put, takeLatest} from 'redux-saga/effects';
import {ActionTypes} from '../types/ActionTypes';
import {fetchApi} from '../../hooks/fetchApi';
import {
  getApodUrl,
  getRetryCount,
  HttpCodes,
  MAXIMUM_RETRY_COUNT,
  resetTryCount,
  setRetryCount,
} from '../../utils/networking';
import {getOneDayPreviousDate} from '../../utils/dates';
import {fetchApod} from '../actions/apodActions';

const handleApodFetch = function* (action: any) {
  const {date} = action.payload;
  try {
    const apiUrl = yield call(getApodUrl);
    const urlWithDate = apiUrl + '&date=' + date;
    const {response, error} = yield call(fetchApi, urlWithDate, {});
    if (response) {
      yield put({type: ActionTypes.APOD_FETCH_SUCCESS, payload: response});
      yield call(resetTryCount);
    }
    if (error) {
      if (error.code === HttpCodes.NOT_FOUND) {
        const retryCount = yield call(getRetryCount);
        if (retryCount <= MAXIMUM_RETRY_COUNT) {
          // try with the previous date
          yield call(setRetryCount, retryCount + 1);
          const previousDate = yield call(getOneDayPreviousDate, date);
          // dispatch action to fetch APOD data for previous date
          yield put(fetchApod(previousDate));
        } else {
          throw new Error('Maximum Retries Exceeded');
        }
      }
      yield put({type: ActionTypes.APOD_FETCH_ERROR, payload: error});
    }
  } catch (err) {
    yield put({type: ActionTypes.APOD_FETCH_ERROR, payload: err});
  }
};

const apodSaga = function* () {
  yield all([takeLatest(ActionTypes.APOD_FETCH_REQUEST, handleApodFetch)]);
};

export default apodSaga;
