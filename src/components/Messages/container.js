import React, { Component } from 'react';
import sortBy from 'lodash/sortBy';
import Messages from './component';
import { connect } from 'react-redux'

class MessagesContainer extends Component {
  get messages() {
    return sortBy(this.props.messages, ['timestamp']);
  }

  render() {
    return <Messages messages={this.messages} />;
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.data,
});

export default connect(mapStateToProps)(MessagesContainer);
