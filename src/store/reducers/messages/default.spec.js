import { expect } from 'chai';
import messagesReducer from './default';

jest.mock('../../actions/messages', () => ({
  MESSAGES_LOADING_FULFILLED: 'MESSAGES_LOADING_FULFILLED',
  MESSAGES_LOADING_PENDING: 'MESSAGES_LOADING_PENDING',
  MESSAGES_LOADING_REJECTED: 'MESSAGES_LOADING_REJECTED',
}));

describe('store/reducers/messages', () => {
  it('should have state parameter with empty object as default', () => {
    expect(messagesReducer(undefined, undefined)).to.deep.equal({});
  });

  it('should return state for MESSAGES_LOADING_FULFILLED', () => {
    const state = {
      dummy: 'data',
    };
    const action = {
      type: 'MESSAGES_LOADING_FULFILLED',
      payload: 'PAYLOAD',
    };
    expect(messagesReducer(state, action)).to.deep.equal({
      dummy: 'data',
      data: 'PAYLOAD',
    });
  });

  it('should return initial state for MESSAGES_LOADING_PENDING', () => {
    const state = {
      dummy: 'data',
    };
    const action = {
      type: 'MESSAGES_LOADING_PENDING',
    };
    expect(messagesReducer(state, action)).to.deep.equal({
      dummy: 'data',
    });
  });


  it('should return initial state for MESSAGES_LOADING_REJECTED', () => {
    const state = {
      dummy: 'data',
    };
    const action = {
      type: 'MESSAGES_LOADING_REJECTED',
      payload: 'ERROR',
    };
    expect(messagesReducer(state, action)).to.deep.equal({
      dummy: 'data',
      error: 'ERROR',
    });
  });
});
