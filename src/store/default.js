import { createStore } from 'redux';
import reducers from './reducers';
import * as initialState from './initialState';
import enhancers from './enhancers';

export default createStore(reducers, initialState, enhancers);
