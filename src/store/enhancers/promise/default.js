import { applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export default applyMiddleware(promiseMiddleware());
