import {all, fork} from 'redux-saga/effects';

import {watchMoviesSaga} from './stores/movies/saga';

export default function* root() {
  yield all([fork(watchMoviesSaga)]);
}
