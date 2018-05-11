import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

describe('store', () => {
  beforeEach(jest.resetModules);

  it('should call createStore with reducers as first parameter', () => {
    jest.doMock('redux', () => ({ createStore: require('sinon').spy() }));
    jest.doMock('./reducers', () => 'REDUCERS');
    jest.doMock('./enhancers', () => null);
    jest.doMock('./initialState', () => null);
    const { createStore } = require('redux');
    require('./default');
    expect(createStore).to.have.been.calledWith('REDUCERS');
  });

  it('should call createStore with enhancers as third parameter', () => {
    jest.doMock('redux', () => ({ createStore: require('sinon').spy() }));
    jest.doMock('./reducers', () => null);
    jest.doMock('./initialState', () => ({ test: 'INITIAL_STATE' }));
    jest.doMock('./enhancers', () => null);
    const { createStore } = require('redux');
    require('./default');
    expect(createStore).to.have.been.calledWith(null, { test: 'INITIAL_STATE', default: { test: 'INITIAL_STATE' } });
  });

  it('should call createStore with enhancers as third parameter', () => {
    jest.doMock('redux', () => ({ createStore: require('sinon').spy() }));
    jest.doMock('./reducers', () => null);
    jest.doMock('./initialState', () => null);
    jest.doMock('./enhancers', () => 'ENHANCERS');
    const { createStore } = require('redux');
    require('./default');
    expect(createStore).to.have.been.calledWith(null, { default: null }, 'ENHANCERS');
  });
});

chai.use(sinonChai);
