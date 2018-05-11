import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export function reducer(state, action = {}) {
  return Object.assign({}, state, {
    messages: action.payload
  });
}

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));