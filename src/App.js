import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getChatLog } from './store/actions/messages';
import { requestMembers } from './store/actions/members';
import Messages from './components/Messages';

class App extends Component {
  componentWillMount() {
    this.props.getChatLog();
    this.props.requestMembers();
  }

  render() {
    return (
      <div>
        <h1>Messages list</h1>
        <Messages />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, requestMembers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
