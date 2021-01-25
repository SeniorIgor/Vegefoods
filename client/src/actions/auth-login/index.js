import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	UPDATE_LOGIN,
	ALLOW_LOGIN,
	CLEAR_LOGIN,

	AUTH_UPDATE_USER,
	AUTH_LOADED_TO_STORAGE,
	AUTH_LOGOUT,
} from '../../constants';

const loginRequested = () => {
	return {
		type: LOGIN_REQUEST,
	}
}

const authLogin = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user,
	};
}

const updateUser = (user) => {
	return {
		type: AUTH_UPDATE_USER,
		payload: user,
	};
}

const updateLogin = (name, value) => {
	return {
		type: UPDATE_LOGIN,
		payload: { name, value },
	}
}

const loadedToStorage = () => {
	return {
		type: AUTH_LOADED_TO_STORAGE,
	};
}

const loginError = (error) => {
	return {
		type: LOGIN_FAILURE,
		payload: error,
	}
}

const authLogout = () => {
	return {
		type: AUTH_LOGOUT,
	};
}

const allowLogin = () => {
	return {
		type: ALLOW_LOGIN,
	}
}

const clearLogin = () => {
	return {
		type: CLEAR_LOGIN,
	}
}

const fetchLogin = (loginUser) => (formData) => (dispatch) => {
	dispatch(loginRequested());
	return loginUser(formData)
		.then((user) => dispatch(authLogin(user)))
		.catch((err) => dispatch(loginError(err)));
};

export {
	authLogin,
	updateUser,
	loadedToStorage,
	updateLogin,
	authLogout,
	fetchLogin,
	allowLogin,
	clearLogin,
	// for test
	loginRequested,
	loginError
};