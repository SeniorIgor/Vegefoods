import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk';
import { ProductService } from '../../services/';

import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	ALLOW_REGISTER,
	UPDATE_REGISTER,
	REMOVE_MESSAGE_REGISTER,
	REMOVE_ERROR_REGISTER,
	CLEAR_REGISTER,
} from '../../constants';

import {
	registerRequested,
	registerLoaded,
	registerError,
	updateRegister,
	allowRegister,
	fetchRegister,
	removeMessageRegister,
	removeErrorRegister,
	clearRegister,
} from './index';

const mockStore = configureMockStore([thunk]);
const { registerUser } = new ProductService();


describe('PRODUCT_LIST ACTIONS: ', () => {

	it(REGISTER_REQUEST, () => {
		expect(registerRequested()).toEqual({ type: REGISTER_REQUEST });
	})

	it(REGISTER_SUCCESS, () => {
		const payload = [1, 2, 3];
		expect(registerLoaded(payload)).toEqual({ type: REGISTER_SUCCESS, payload });
	})

	it(REGISTER_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(registerError(payload)).toEqual({ type: REGISTER_FAILURE, payload });
	})

	it(UPDATE_REGISTER, () => {
		const name = "name field";
		const value = 'value field';
		expect(updateRegister(name, value))
			.toEqual({ type: UPDATE_REGISTER, payload: { name, value } });
	})

	it(ALLOW_REGISTER, () => {
		expect(allowRegister()).toEqual({ type: ALLOW_REGISTER });
	})

	it(REMOVE_MESSAGE_REGISTER, () => {
		expect(removeMessageRegister()).toEqual({ type: REMOVE_MESSAGE_REGISTER });
	})

	it(REMOVE_ERROR_REGISTER, () => {
		expect(removeErrorRegister()).toEqual({ type: REMOVE_ERROR_REGISTER });
	})

	it(CLEAR_REGISTER, () => {
		expect(clearRegister()).toEqual({ type: CLEAR_REGISTER });
	})

	describe('ASYNC ACTIONS: ', () => {

		const store = mockStore({});
		beforeEach(() => {
			store.clearActions();
		})

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		it(`REGISTER_USER --> ${REGISTER_SUCCESS}`, () => {

			const data = { message: 'success' };
			const expectedActions = [registerRequested(), registerLoaded(data.message)];

			fetchMock.post(/\/api\/auth\/register/, data);

			store.dispatch(fetchRegister(registerUser)({ id: 1 }))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

		it(`REGISTER_USER --> ${REGISTER_FAILURE}`, () => {

			const error = new Error('server not found');
			const expectedActions = [registerRequested(), registerError(error)];

			fetchMock.post(/\/api\/auth\/register/, () => { throw error });

			store.dispatch(fetchRegister(registerUser)({ id: 1 }))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

	})
})