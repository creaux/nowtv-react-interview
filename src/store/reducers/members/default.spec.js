import { expect } from 'chai';
import messagesReducer from './default';

jest.mock('../../actions/messages', () => ({
  MEMBERS_LOADING_FULFILLED: 'MEMBERS_LOADING_FULFILLED',
  MEMBERS_LOADING_PENDING: 'MEMBERS_LOADING_PENDING',
  MEMBERS_LOADING_REJECTED: 'MEMBERS_LOADING_REJECTED',
}));

describe('store/reducers/members', () => {
  it('should have state parameter with empty object as default', () => {
    expect(messagesReducer(undefined, undefined)).to.deep.equal({});
  });

  it('should return state for MEMBERS_LOADING_FULFILLED', () => {
    const state = {
      dummy: 'data',
    };
    const action = {
      type: 'MEMBERS_LOADING_FULFILLED',
      payload: 'PAYLOAD',
    };
    expect(messagesReducer(state, action)).to.deep.equal({
      dummy: 'data',
      data: 'PAYLOAD',
    });
  });

  it('should return initial state for MEMBERS_LOADING_PENDING', () => {
    const state = {
      dummy: 'data',
    };
    const action = {
      type: 'MEMBERS_LOADING_PENDING',
    };
    expect(messagesReducer(state, action)).to.deep.equal({
      dummy: 'data',
    });
  });


  it('should return initial state for MEMBERS_LOADING_REJECTED', () => {
    const state = {
      dummy: 'data',
    };
    const action = {
      type: 'MEMBERS_LOADING_REJECTED',
      payload: 'ERROR',
    };
    expect(messagesReducer(state, action)).to.deep.equal({
      dummy: 'data',
      error: 'ERROR',
    });
  });
});
