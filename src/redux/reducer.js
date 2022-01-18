import {Map, fromJS} from 'immutable';
import {loop, combineReducers} from 'redux-loop-symbol-ponyfill';

import AppState from './stores/app/reducer';

// Define Reducers
const reducers = {
  AppState,
};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => (child ? child.get(key) : undefined);
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable,
);

export default function reducer(state, action) {
  const [nextState, effects] = namespacedReducer(state || undefined, action);

  // enforce the state is immutable
  return loop(fromJS(nextState), effects);
}
