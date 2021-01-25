import React from 'react';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk';
import { ProductService } from '../../services/';

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	UPDATE_LOGIN,
	ALLOW_LOGIN,
	REMOVE_ERROR_LOGIN,
	CLEAR_LOGIN,

	AUTH_UPDATE_USER,
	AUTH_LOADED_TO_STORAGE,
	AUTH_LOGOUT,
} from '../../constants';

import {
	loginRequested,
	authLogin,
	loginError,
	updateLogin,
	allowLogin,
	loadedToStorage,
	// removeErrorLogin,
	updateUser,
	clearLogin,
	authLogout,
	fetchLogin,
} from './index';

const mockStore = configureMockStore([thunk]);
const { loginUser } = new ProductService();


describe('PRODUCT_LIST ACTIONS: ----------------------------------', () => {

	it(LOGIN_REQUEST, () => {
		expect(loginRequested()).toEqual({ type: LOGIN_REQUEST });
	})

	it(LOGIN_SUCCESS, () => {
		const payload = [1, 2, 3];
		expect(authLogin(payload)).toEqual({ type: LOGIN_SUCCESS, payload });
	})

	it(LOGIN_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(loginError(payload)).toEqual({ type: LOGIN_FAILURE, payload });
	})

	it(AUTH_UPDATE_USER, () => {
		const payload = [1, 2, 3];
		expect(updateUser(payload)).toEqual({ type: AUTH_UPDATE_USER, payload });
	})

	it(UPDATE_LOGIN, () => {
		const name = "name field";
		const value = 'value field';
		expect(updateLogin(name, value))
			.toEqual({ type: UPDATE_LOGIN, payload: { name, value } });
	})

	it(ALLOW_LOGIN, () => {
		expect(allowLogin()).toEqual({ type: ALLOW_LOGIN });
	})

	it(AUTH_LOADED_TO_STORAGE, () => {
		expect(loadedToStorage()).toEqual({ type: AUTH_LOADED_TO_STORAGE });
	})

	it(AUTH_LOGOUT, () => {
		expect(authLogout()).toEqual({ type: AUTH_LOGOUT });
	})

	// it(REMOVE_ERROR_LOGIN, () => {
	// 	expect(removeErrorLogin()).toEqual({ type: REMOVE_ERROR_LOGIN });
	// })

	it(CLEAR_LOGIN, () => {
		expect(clearLogin()).toEqual({ type: CLEAR_LOGIN });
	})

	describe('ASYNC ACTIONS: ---------------------------------------', () => {

		const store = mockStore({});
		beforeEach(() => {
			store.clearActions();
		})

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		it(`LOGIN_USER --> ${LOGIN_SUCCESS}`, () => {

			const data = [1, 2, 3];
			const expectedActions = [loginRequested(), authLogin(data)];

			fetchMock.post(/\/api\/auth\/login/, data);

			store.dispatch(fetchLogin(loginUser)({ id: 1 }))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

		it(`LOGIN_USER --> ${LOGIN_FAILURE}`, () => {

			const error = new Error('server not found');
			const expectedActions = [loginRequested(), loginError(error)];

			fetchMock.post(/\/api\/auth\/login/, () => { throw error });

			store.dispatch(fetchLogin(loginUser)({ id: 1 }))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

	})
})