import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Messages from './component';
import Message from './Message';

jest.mock('./Message', () => () => null);

const messages = [
  {
    id: "cd445e6d-e514-424f-ba8f-16ec842002c6",
    userId: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    message: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    timestamp: "2017-02-09T04:27:38Z",
  },
  {
    id: "cd445e6d-e514-424f-ba8f-16ec842002c6",
    userId: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    message: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    timestamp: "2017-02-09T04:27:38Z",
  }
];

describe('components/Messages/component', () => {
  it('should contain encapsulating ul element', () => {
    const component = shallow(<Messages messages={messages} />);
    expect(component).to.have.descendants('ul');
  });

  it('should contain exactly two times Message component', () => {
    const component = shallow(<Messages messages={messages} />);
    expect(component.find('ul')).to.have.exactly(2).descendants(Message);
  });

  it('should have Message component with relevant props', () => {
    const component = shallow(<Messages messages={messages}/>);
    expect(component.find(Message).first(0))
      .to.have.props(['userId', 'timestamp', 'children'])
      .deep.equal([messages[0].userId, messages[0].timestamp, messages[0].message]);
  })
});

chai.use(chaiEnzyme());
