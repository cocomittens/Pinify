import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

export const receiveFollow = follow => ({
	type: RECEIVE_FOLLOW,
	follow,
});

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser,
});

export const receiveUser = user => ({
	type: RECEIVE_USER,
	user
});

export const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
	type: RECEIVE_ERRORS,
	errors,
});

export const receiveSessionErrors = errors => ({
	type: RECEIVE_SESSION_ERRORS,
	errors,
});

export const clearErrors = () => ({
	type: CLEAR_ERRORS,
});

export const fetchUser = username => dispatch => {
	return APIUtil.fetchUser(username).then(
		user => dispatch(receiveUser(user)),
		errors => dispatch(receiveSessionErrors(errors))
	);
};

export const addFollow = follow => dispatch => {
	return APIUtil.addFollow(follow).then(
		follow => dispatch(receiveFollow(follow)),
		errors => dispatch(receiveSessionErrors(errors))
	);
};

export const login = user => dispatch =>
	APIUtil.login(user).then(
		user => dispatch(receiveCurrentUser(user)),
		errors => dispatch(receiveSessionErrors(errors))
	);

export const logout = () => dispatch =>
	APIUtil.logout().then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveSessionErrors(errors)));

export const signup = user => dispatch =>
	APIUtil.signup(user).then(
		user => dispatch(receiveCurrentUser(user)),
		errors => dispatch(receiveSessionErrors(errors))
	);

export const updateUser = user => dispatch =>
	APIUtil.updateUser(user).then(
		user => dispatch(receiveCurrentUser(user)),
		errors => dispatch(receiveSessionErrors(errors))
	);
