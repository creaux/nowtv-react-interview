import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';
import Message from './component';
import { spy } from 'sinon';

const props = {
  children: 'CHILDREN',
  email: 'franz@kafka.com',
  onMessageOver: spy(),
  onMessageLeave: spy(),
  isMessageOver: false,
  avatar: 'SOME_URL',
};

describe('components/Messages/component', () => {
  it('should contain encapsulating li element', () => {
    const component = shallow(<Message {...props} />);
    expect(component).to.have.descendants('li');
  });

  it('should contain exactly four descendants', () => {
    const component = shallow(<Message {...props} />);
    expect(component.find('li'))
      .to.have.exactly(3)
      .descendants('div');
    expect(component.find('li'))
      .to.have.exactly(1)
      .descendants('img');
  });

  it('should render date'); // TODO

  it('should contain message element with children prop', () => {
    const component = shallow(<Message {...props} />);
    expect(component.find('div').at(1))
      .to.have.prop('children')
      .equal(props.children);
  });

  it('should be possible to onMessageOver', () => {
    const component = shallow(<Message {...props} />);
    component.find('div').at(1).simulate('mouseover');
    expect(props.onMessageOver).to.have.been.called;
  });

  it('should be possible to onMessageLeave', () => {
    const component = shallow(<Message {...props} />);
    component.find('div').at(1).simulate('mouseleave');
    expect(props.onMessageLeave).to.have.been.called;
  });

  it('should contain message element as second with email and default style display none', () => {
    const component = shallow(<Message {...props} />);
    expect(component.find('div').at(2))
      .to.have.props(['style', 'children'])
      .deep.equal([
        { display: 'none' },
        props.email,
      ]);
  });

  it('should render avatar as third element', () => {
    const component = shallow(<Message {...props} />);
    expect(component.find('img'))
      .to.have.props(['src', 'alt'])
      .deep.equal([
        props.avatar,
        '',
      ]);
  });

  it('should not render avatar as third element when avatar is undefined', () => {
    const noAvatarProps = {
      ...props,
      avatar: undefined,
    };
    const component = shallow(<Message {...noAvatarProps} />);
    expect(component.find('img')).to.not.be.present();
  });
});

chai.use(chaiEnzyme());
chai.use(sinonChai);
