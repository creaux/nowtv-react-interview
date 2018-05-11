import {
  MEMBERS_LOADING_PENDING,
  MEMBERS_LOADING_FULFILLED,
  MEMBERS_LOADING_REJECTED,
} from '../../actions/members';

const { assign } = Object;

export default function members(state = {}, action = {}) {
  switch(action.type) {
    case MEMBERS_LOADING_FULFILLED:
      return assign({}, state, {
        data: action.payload,
      });
    case MEMBERS_LOADING_REJECTED:
      return assign({}, state, {
        error: action.payload,
      });
    case MEMBERS_LOADING_PENDING:
    default:
      return state;
  }
}
