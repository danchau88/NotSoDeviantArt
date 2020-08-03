import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/root_reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

// this is to make logger only in development, not showing in production
if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const configureStore = (preloadedState={}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;
