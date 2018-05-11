import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

describe('store/actions/members', () => {
  beforeEach(jest.resetModules);

  it('should export desired actions', () => {
    jest.doMock('../../../data', () => ({ getMembers: () => null }));
    const result = require('./default');
    expect(result.MEMBERS_LOADING).to.equal('MEMBERS_LOADING');
    expect(result.MEMBERS_LOADING_REJECTED).to.equal('MEMBERS_LOADING_REJECTED');
    expect(result.MEMBERS_LOADING_FULFILLED).to.equal('MEMBERS_LOADING_FULFILLED');
    expect(result.MEMBERS_LOADING_PENDING).to.equal('MEMBERS_LOADING_PENDING');
  });

  it('should export desired action creators', () => {
    jest.doMock('../../../data', () => ({ getMembers: () => null }));
    const result = require('./default');
    expect(typeof(result.requestMembers)).to.equal('function');
  });

  describe('requestMembers action creator', () => {
    it('should trigger action MEMBERS_LOADING', () => {
      jest.doMock('../../../data', () => ({ getMembers: () => null }));
      const { requestMembers } = require('./default');
      const { type } = requestMembers();
      expect(type).to.equal('MEMBERS_LOADING');
    });

    it('should contain payload', () => {
      jest.doMock('../../../data', () => ({ getMembers: () => 'PAYLOAD' }));
      const { requestMembers } = require('./default');
      const { payload } = requestMembers();
      expect(payload).to.equal('PAYLOAD');
    })
  });
});
