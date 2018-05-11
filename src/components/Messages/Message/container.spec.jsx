import React from 'react';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';

const props = {
  userId: 1,
  children: 'CHILDREN',
};

describe('components/Messages/Message/container', () => {
  describe('class', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.doMock('./component', () => () => null);
      jest.doMock('react-redux', () => ({ connect: () => (component) => component }));
    });

    it('should have Message component descendant', () => {
      const Message = require('./component');
      const MessageContainer = require('./container').default;
      const component = shallow(<MessageContainer {...props} />);
      expect(component).to.have.descendants(Message);
    });

    it('should populate all relevant props on Message', () => {
      const Message = require('./component');
      const MessageContainer = require('./container').default;
      const component = shallow(<MessageContainer {...props} />);
      expect(component.find(Message))
        .to.have.props(['isMessageOver', 'email', 'children', 'avatar'])
        .deep.equal([false, 'Loading...', props.children, 'Loading...']);
    });

    it('should provide email', () => {
      const withMembers = {
        ...props,
        members: [
          {
            id: 1,
            email: 'EMAIL_1',
          },
        ],
      };
      const Message = require('./component');
      const MessageContainer = require('./container').default;
      const component = shallow(<MessageContainer {...withMembers} />);
      expect(component.find(Message))
        .to.have.props(['email'])
        .deep.equal(['EMAIL_1']);
    });

    it('should provide email placeholder when email is not defined', () => {
      const withMembers = {
        ...props,
        members: [
          {
            id: 1,
          },
        ],
      };
      const Message = require('./component');
      const MessageContainer = require('./container').default;
      const component = shallow(<MessageContainer {...withMembers} />);
      expect(component.find(Message))
        .to.have.props(['email'])
        .deep.equal(['Email not available.']);
    });

    it('should provide avatar address', () => {
      const withMembers = {
        userId: 2,
        children: 'CHILDREN',
        members: [
          {
            id: 2,
            avatar: 'AVATAR_2',
          }
        ],
      };
      const Message = require('./component');
      const MessageContainer = require('./container').default;
      const component = shallow(<MessageContainer {...withMembers} />);
      expect(component.find(Message))
        .to.have.props(['avatar'])
        .deep.equal(['AVATAR_2']);
    });

    it('should pass undefined avatar when is not defined', () => {
      const withMembers = {
        userId: 2,
        children: 'CHILDREN',
        members: [
          {
            id: 2,
            avatar: undefined,
          }
        ],
      };
      const Message = require('./component');
      const MessageContainer = require('./container').default;
      const component = shallow(<MessageContainer {...withMembers} />);
      expect(component.find(Message))
        .to.have.props(['avatar'])
        .deep.equal([undefined]);
    });

    it('should provide date prop', () => {
      const withMembers = {
        userId: 2,
        children: 'CHILDREN',
        timestamp: '2017-02-09T04:27:38Z',
        members: [
          {
            id: 2,
          }
        ],
      };
      const Message = require('./component');
      const MessageContainer = require('./container').default;
      const component = shallow(<MessageContainer {...withMembers} />);
      expect(component.find(Message))
        .to.have.prop('date')
        .to.equal('9/2/2017');
    });

    it('should change state by onMessageOver and onMessageLeave', () => {
      const MessageContainer = require('./container').default;
      const component = mount(<MessageContainer {...props} />);
      const instance = component.instance();
      expect(instance.state.isMessageOver).to.be.equal(false);
      instance.onMessageOver();
      expect(instance.state.isMessageOver).to.be.equal(true);
      instance.onMessageLeave();
      expect(instance.state.isMessageOver).to.be.equal(false);
    });
  });

  describe('redux', () => {
    beforeEach(jest.resetModules);

    it('should map members', () => {
      jest.doMock('react-redux', () => ({
        connect: (mapStateToProps) => {
          const state = { members: { data: ['DUMMY', 'DATA'] } };
          const result = mapStateToProps(state);
          return () => result;
        },
      }));
      jest.doMock('./component', () => () => null);
      const result = require('./container').default;
      expect(result).to.deep.equal({ members: ['DUMMY', 'DATA'] });
    });
  });
});

chai.use(sinonChai);
chai.use(chaiEnzyme());
