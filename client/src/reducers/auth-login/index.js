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

import { emailError, validateForm } from '../../utils';

export const updateFieldErrors = (state, name, value) => {
	return {
		...state.login.errors,
		email: (name === 'email') ? emailError(value) : state.login.errors.email,
	};
}

export const updateAllLoginErrors = (state) => {
	const errors = updateFieldErrors(state, 'email', state.login.email);

	return {
		...state.login,
		errors,
		allowCreate: validateForm(errors),
	}
}

export const updateLoginField = (state, action) => {
	const { name, value } = action.payload;

	return {
		...state.login,
		[name]: value,
		errors: updateFieldErrors(state, name, value),
		error: null,
	};
}

export const initialState = {
	userId: null,
	token: null,
	isNewAuth: false,
	isAuth: false,

	email: '',
	password: '',
	errors: {
		email: '',
	},
	allowCreate: false,
	loading: false,
	error: null,
}

// ! Проверить CLEAR_LOGIN, REMOVE_LOGIN_ERROR одинаковые

const updateLogin = (state, action) => {

	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state.login,
				loading: true,
				error: null,
			}
		case UPDATE_LOGIN:
			return updateLoginField(state, action);

		case LOGIN_SUCCESS:
			return {
				...initialState,
				userId: action.payload.userId,
				token: action.payload.token,
				isNewAuth: true,
				isAuth: true,
			};

		case ALLOW_LOGIN:
			return updateAllLoginErrors(state);

		case CLEAR_LOGIN:
			return {
				...state.login,
				error: null,
			}

		case LOGIN_FAILURE:
			return {
				...state.login,
				loading: false,
				allowCreate: false,
				error: action.payload,
			}

		case AUTH_LOADED_TO_STORAGE:
			return {
				...state.login,
				isNewAuth: false,
			}
		case AUTH_UPDATE_USER:
			return {
				...state.login,
				userId: action.payload.userId,
				token: action.payload.token,
				isAuth: true,
			}
		case AUTH_LOGOUT:
			return {
				...state.login,
				userId: null,
				token: null,
				isAuth: false,
			}

		default:
			return state.login;
	}
}

export default updateLogin;