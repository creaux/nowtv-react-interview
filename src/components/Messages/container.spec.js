import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

describe('components/Messages/container', () => {
  beforeEach(jest.resetModules);

  it('should map messages', () => {
    jest.doMock('react-redux', () => ({
      connect: (mapStateToProps) => {
        const state = { messages: { data: ['DUMMY', 'DATA'] } };
        const result = mapStateToProps(state);
        return () => result;
      },
    }));
    jest.doMock('./component', () => () => null);
    const result = require('./container').default;
    expect(result).to.deep.equal({ messages: ['DUMMY', 'DATA'] });
  });

  it('should pass correct messages order', () => {
    jest.doMock('react-redux', () => ({ connect: () => (Component) => Component }));
    jest.doMock('./component', () => () => null);
    const MessagesContainer = require('./container').default;
    const Messages = require('./component');
    const messages = [
      {
        timestamp: '2017-02-09T04:27:38Z',
      },
      {
        timestamp: '2016-11-09T05:04:58Z',
      }
    ];
    const component = shallow(<MessagesContainer messages={messages}/>);
    expect(component.find(Messages)).to.have.prop('messages').to.deep.equal([
      {
        timestamp: '2016-11-09T05:04:58Z',
      },
      {
        timestamp: '2017-02-09T04:27:38Z',
      },
    ]);
  });
});

chai.use(sinonChai);
chai.use(chaiEnzyme());
