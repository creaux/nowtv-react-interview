import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

describe('store/initialState', () => {
  it('should contain messages in initialState', () => {
    const { messages } = require('./default');
    const expected = {
      data: [],
      error: null,
    };
    expect(messages).to.deep.equal(expected);
  });

  it('should contain members in initialState', () => {
    const { members } = require('./default');
    const expected = {
      data: [],
      error: null,
    };
    expect(members).to.deep.equal(expected);
  });
});

chai.use(sinonChai);
