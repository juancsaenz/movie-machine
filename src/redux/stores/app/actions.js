import {SET_LOADING, SET_RESPONSE} from './constants';

export const setLoading = loading => ({type: SET_LOADING, payload: {loading}});

export const setResponse = (type, title, message, response, cb) => {
  if (cb) {
    cb(type, response);
  }
  return {type: SET_RESPONSE, payload: {type, title, message}};
};
