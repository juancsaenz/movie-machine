import {GET_MOVIES, GET_SERIES, GET_CONTENT_DETAILS} from './constants';

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

export const getContentDetails = (contentId, cb) => ({
  type: GET_CONTENT_DETAILS,
  payload: {contentId},
  cb,
});
