import {
  MESSAGES_LOADING_FULFILLED,
  MESSAGES_LOADING_PENDING,
  MESSAGES_LOADING_REJECTED,
} from '../../actions/messages';

const { assign } = Object;

export default function messages(state = {}, action = {}) {
  switch(action.type) {
    case MESSAGES_LOADING_FULFILLED:
      return assign({}, state, {
        data: action.payload,
      });
    case MESSAGES_LOADING_REJECTED:
      return assign({}, state, {
        error: action.payload,
      });
    case MESSAGES_LOADING_PENDING:
    default:
      return state;
  }
}
