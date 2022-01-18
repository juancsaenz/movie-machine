import {put, call, takeLatest} from 'redux-saga/effects';

import request from 'movie_machine/src/utils/commons/request';
import {setResponse} from '../app/actions';
import {GET_MOVIES} from './constants';

export function* getMovies(action) {
  yield put(setResponse(false, false, false));

  const {cb} = action;
  const url = 'movie/popular?';

  try {
    const response = yield call(request, url, {method: 'GET'});
    yield put(setResponse('success', false, false, response, cb));
  } catch (err) {
    console.log('err', err);
    yield put(setResponse('error', false, false, false, cb));
  }
}

export function* watchMoviesSaga() {
  yield takeLatest(GET_MOVIES, getMovies);
}
