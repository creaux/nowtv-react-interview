import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

describe('store/enhancers/promise', () => {
  beforeEach(jest.resetModules);

  it('should call promiseMiddleware with empty parameter', () => {
    jest.doMock('redux', () => ({ applyMiddleware: () => null }));
    jest.doMock('redux-promise-middleware', () => require('sinon').spy());
    const promiseMiddleware = require('redux-promise-middleware');
    require('./default');
    expect(promiseMiddleware).to.have.been.calledWith();
  });

  it('should call applyMiddleware on import with promiseMiddleware()', () => {
    jest.doMock('redux', () => ({ applyMiddleware: require('sinon').spy() }));
    jest.doMock('redux-promise-middleware', () => require('sinon').stub().returns('RESULT.'));
    const { applyMiddleware } = require('redux');
    require('./default');
    expect(applyMiddleware).to.have.been.calledWith('RESULT.');
  });

  it('should export result from applyMiddleware', () => {
    jest.doMock('redux', () => ({ applyMiddleware: require('sinon').stub().returns('RESULT.') }));
    jest.doMock('redux-promise-middleware', () => () => null);
    const result = require('./default');
    expect(result).to.deep.equal({ default: 'RESULT.' });
  });
});

chai.use(sinonChai);
