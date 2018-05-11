export const MEMBERS_LOADING = 'MEMBERS_LOADING';
export const MEMBERS_LOADING_REJECTED = `${MEMBERS_LOADING}_REJECTED`;
export const MEMBERS_LOADING_FULFILLED = `${MEMBERS_LOADING}_FULFILLED`;
export const MEMBERS_LOADING_PENDING = `${MEMBERS_LOADING}_PENDING`;

export const requestMembers = () => ({
  type: MEMBERS_LOADING,
  payload: require('../../../data').getMembers(),
});
