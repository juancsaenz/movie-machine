import {GET_MOVIES, GET_SERIES} from './constants';

export const getMovies = (page, cb) => ({
  type: GET_MOVIES,
  payload: {page},
  cb,
});

export const getSeries = (page, cb) => ({
  type: GET_SERIES,
  payload: {page},
  cb,
});
