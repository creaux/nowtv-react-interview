export const MESSAGES_LOADING = 'MESSAGES_LOADING';
export const MESSAGES_LOADING_PENDING = `${MESSAGES_LOADING}_PENDING`;
export const MESSAGES_LOADING_FULFILLED = `${MESSAGES_LOADING}_FULFILLED`;
export const MESSAGES_LOADING_REJECTED = `${MESSAGES_LOADING}_REJECTED`;

export function getChatLog() {
  return {
    type: MESSAGES_LOADING,
    payload: require('../../../data').getMessages(),
  };
}
