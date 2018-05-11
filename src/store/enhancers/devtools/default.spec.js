import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';

describe('store/enhancers/devtools', () => {
  beforeEach(jest.resetModules);

  it('should call __REDUX_DEVTOOLS_EXTENSION__ if exists', () => {
    window.__REDUX_DEVTOOLS_EXTENSION__ = spy();
    require('./default');
    expect(window.__REDUX_DEVTOOLS_EXTENSION__).to.have.been.calledWith();
  });

  it('should return function if __REDUX_DEVTOOLS_EXTENSION__ is not defined', () => {
    window.__REDUX_DEVTOOLS_EXTENSION__ = undefined;
    const result = require('./default').default;
    expect(typeof(result)).to.equals('function');
    expect(result('PARAM.')).to.equals('PARAM.');
  });
});

chai.use(sinonChai);
