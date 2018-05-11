import { combineReducers } from 'redux';
import messages from './messages';
import members from './members';

export default combineReducers({
  messages,
  members,
});
