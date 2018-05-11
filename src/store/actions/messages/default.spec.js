import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

describe('store/actions/messages', () => {
  beforeEach(jest.resetModules);

  it('should export desired actions', () => {
    jest.doMock('../../../data', () => ({ getMessages: () => null }));
    const result = require('./default');
    expect(result.MESSAGES_LOADING).to.equal('MESSAGES_LOADING');
    expect(result.MESSAGES_LOADING_REJECTED).to.equal('MESSAGES_LOADING_REJECTED');
    expect(result.MESSAGES_LOADING_FULFILLED).to.equal('MESSAGES_LOADING_FULFILLED');
    expect(result.MESSAGES_LOADING_PENDING).to.equal('MESSAGES_LOADING_PENDING');
  });

  it('should export desired action creators', () => {
    jest.doMock('../../../data', () => ({ getMessages: () => null }));
    const result = require('./default');
    expect(typeof(result.getChatLog)).to.equal('function');
  });

  describe('getChatLog action creator', () => {
    it('should trigger action MESSAGES_LOADING', () => {
      jest.doMock('../../../data', () => ({ getMessages: () => null }));
      const { getChatLog } = require('./default');
      const { type } = getChatLog();
      expect(type).to.equal('MESSAGES_LOADING');
    });

    it('should contain payload', () => {
      jest.doMock('../../../data', () => ({ getMessages: () => 'PAYLOAD' }));
      const { getChatLog } = require('./default');
      const { payload } = getChatLog();
      expect(payload).to.equal('PAYLOAD');
    })
  });
});
