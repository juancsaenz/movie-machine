import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';

// Middleware
import middleware from './middleware';
import sagaMiddleware from './middleware/sagaMiddleware';

// Reducer
import reducer from './reducer';

// Saga
import rootSagas from './saga';

const enhancers = [
  applyMiddleware(...middleware, sagaMiddleware),
  reduxLoop.install(),
];

/*
 * Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */

const composeEnhancers =
  (__DEV__ &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(reducer, null, enhancer);

sagaMiddleware.run(rootSagas);

export default store;
