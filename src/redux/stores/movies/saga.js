import {put, call, takeLatest} from 'redux-saga/effects';

import request from 'movie_machine/src/utils/commons/request';
import {setResponse} from '../app/actions';
import {GET_MOVIES, GET_SERIES, GET_CONTENT_DETAILS} from './constants';

export function* getMovies(action) {
  yield put(setResponse(false, false, false));

  const {
    cb,
    payload: {page},
  } = action;
  const url = `movie/popular?page=${page}&`;

  try {
    const response = yield call(request, url, {method: 'GET'});
    yield put(setResponse('success', false, false, response, cb));
  } catch (err) {
    yield put(setResponse('error', false, false, false, cb));
  }
}

export function* getSeries(action) {
  yield put(setResponse(false, false, false));

  const {
    cb,
    payload: {page},
  } = action;
  const url = `tv/popular?page=${page}&`;

  try {
    const response = yield call(request, url, {method: 'GET'});
    yield put(setResponse('success', false, false, response, cb));
  } catch (err) {
    yield put(setResponse('error', false, false, false, cb));
  }
}

export function* getContentDetails(action) {
  yield put(setResponse(false, false, false));

  const {
    cb,
    payload: {contentId},
  } = action;
  const url = `movie/${contentId}?`;

  try {
    const response = yield call(request, url, {method: 'GET'});
    yield put(setResponse('success', false, false, response, cb));
  } catch (err) {
    yield put(setResponse('error', false, false, false, cb));
  }
}

export function* watchMoviesSaga() {
  yield takeLatest(GET_MOVIES, getMovies);
  yield takeLatest(GET_SERIES, getSeries);
  yield takeLatest(GET_CONTENT_DETAILS, getContentDetails);
}
