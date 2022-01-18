import {fromJS} from 'immutable';

// Constants
import {SET_LOADING} from './constants';

// Initial state
export const initialState = fromJS({
  loading: false,
});

export default function appReducer(state = initialState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case SET_LOADING:
      return state.set('loading', payload.loading);
    default:
      return state;
  }
}
