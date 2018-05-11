import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

describe('store/enhancers', () => {
  beforeEach(jest.resetModules);

  it('should pass promise as first parameter to compose', () => {
    jest.doMock('redux', () => ({ compose: require('sinon').spy() }));
    jest.doMock('redux-devtools-extension', () => ({ devToolsEnhancer: () => null }));
    jest.doMock('./promise', () => 'PROMISE');
    const { compose } = require('redux');
    require('./default');
    expect(compose).to.have.been.calledWith('PROMISE');
  });

  it('should pass result of devToolsEnhancer() as second parameter', () => {
    jest.doMock('redux', () => ({ compose: require('sinon').spy() }));
    jest.doMock('redux-devtools-extension', () => ({ devToolsEnhancer: () => 'DEV_TOOLS_ENHANCER' }));
    jest.doMock('./promise', () => null);
    const { compose } = require('redux');
    require('./default');
    expect(compose).to.have.been.calledWith(null, 'DEV_TOOLS_ENHANCER');
  });

  it('should export result of compose function as default', () => {
    jest.doMock('redux', () => ({ compose: require('sinon').stub().returns('COMPOSE') }));
    jest.doMock('redux-devtools-extension', () => ({ devToolsEnhancer: () => null }));
    jest.doMock('./promise', () => null);
    const result = require('./default');
    expect(result).to.deep.equal({ default: 'COMPOSE' });
  });
});

chai.use(sinonChai);
