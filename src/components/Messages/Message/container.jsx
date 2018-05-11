import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './component';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';

class MessageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMessageOver: false,
    };
  }

  onMessageOver() {
    this.setState({ isMessageOver: true });
  }

  onMessageLeave() {
    this.setState({ isMessageOver: false });
  }

  get email() {
    if (isEmpty(this.props.members)) {
      return 'Loading...';
    }

    const { members, userId } = this.props;
    const { email } = members.find((member) => (member.id === userId));

    if (isNil(email)) {
      return 'Email not available.'
    }

    return email;
  }

  get avatar() {
    if (isEmpty(this.props.members)) {
      return 'Loading...';
    }

    const { members, userId } = this.props;
    const { avatar } = members.find((member) => (member.id === userId));

    return avatar;
  }

  get date() {
    const date = new Date(this.props.timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  render() {
    return (
      <Message
        isMessageOver={this.state.isMessageOver}
        onMessageOver={this.onMessageOver.bind(this)}
        onMessageLeave={this.onMessageLeave.bind(this)}
        email={this.email}
        avatar={this.avatar}
        date={this.date}
      >
        {this.props.children}
      </Message>
    )
  }
}

const mapStateToProps = (state) => ({
  members: state.members.data,
});

export default connect(mapStateToProps)(MessageContainer);
