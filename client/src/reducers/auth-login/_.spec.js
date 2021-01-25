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

import {
	loginRequested,
	authLogin,
	loginError,
	updateLogin as updateLoginAction,
	allowLogin,
	updateUser,
	loadedToStorage,
	authLogout,
	clearLogin,
} from '../../actions/auth-login';

import updateLogin, { initialState } from './index';
import { updateLoginField, updateAllLoginErrors } from './index';

const state = { login: initialState };

describe('Auth-login reducer:', () => {

	it('state is undefined', () => {
		expect(updateLogin(undefined, loginRequested()))
			.toEqual(initialState)
	})

	it('default action', () => {
		expect(updateLogin(state, 'SET_USER'))
			.toEqual({
				...state.login,
			})
	})

	it(LOGIN_REQUEST, () => {
		expect(updateLogin(state, loginRequested()))
			.toEqual({
				...state.login,
				loading: true,
				error: null,
			})
	})

	it(LOGIN_SUCCESS, () => {
		const payload = {
			userId: 1,
			token: 1,
		}
		expect(updateLogin(state, authLogin(payload)))
			.toEqual({
				...initialState,
				userId: payload.userId,
				token: payload.token,
				isNewAuth: true,
				isAuth: true,
			})
	})

	it(LOGIN_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(updateLogin(state, loginError(payload)))
			.toEqual({
				...state.login,
				loading: false,
				allowCreate: false,
				error: payload,
			})
	})

	it(UPDATE_LOGIN, () => {
		const action = updateLoginAction('email', 'value');

		expect(updateLogin(state, action))
			.toEqual(updateLoginField(state, action));
	})

	it(`${UPDATE_LOGIN} with not email field`, () => {
		const action = updateLoginAction('password', 'value');

		expect(updateLogin(state, action))
			.toEqual(updateLoginField(state, action));
	})

	it(ALLOW_LOGIN, () => {
		const action = allowLogin();

		expect(updateLogin(state, action))
			.toEqual(updateAllLoginErrors(state, action));
	})

	it(CLEAR_LOGIN, () => {
		expect(updateLogin(state, clearLogin()))
			.toEqual({
				...state.login,
				error: null,
			})
	})

	it(AUTH_UPDATE_USER, () => {
		const payload = { userId: 1, token: 1 };
		expect(updateLogin(state, updateUser(payload)))
			.toEqual({
				...state.login,
				userId: payload.userId,
				token: payload.token,
				isAuth: true,
			})
	})

	it(AUTH_LOADED_TO_STORAGE, () => {
		expect(updateLogin(state, loadedToStorage()))
			.toEqual({
				...state.login,
				isNewAuth: false,
			})
	})

	it(AUTH_LOGOUT, () => {
		expect(updateLogin(state, authLogout()))
			.toEqual({
				...state.login,
				userId: null,
				token: null,
				isAuth: false,
			})
	})

})