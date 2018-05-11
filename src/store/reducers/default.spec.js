import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

describe('store/reducers', () => {
  beforeEach(jest.resetModules);

  it('should call combineReducers with required reducers', () => {
    jest.doMock('redux', () => ({ combineReducers: require('sinon').spy() }));
    jest.doMock('./messages', () => 'MESSAGES');
    jest.doMock('./members', () => 'MEMBERS');
    const { combineReducers } = require('redux');
    require('./default');
    expect(combineReducers).to.have.been.calledWith({
      members: 'MEMBERS',
      messages: 'MESSAGES',
    });
  });

  it('should call combineReducers on export', () => {
    jest.doMock('redux', () => ({ combineReducers: () => 'COMBINE_REDUCERS' }));
    jest.doMock('./messages', () => null);
    jest.doMock('./members', () => null);
    const result = require('./default');
    expect(result).to.deep.equal({ default: 'COMBINE_REDUCERS' });
  });
});

chai.use(sinonChai);
