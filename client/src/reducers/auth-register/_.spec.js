import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	UPDATE_REGISTER,
	ALLOW_REGISTER,
	REMOVE_MESSAGE_REGISTER,
	REMOVE_ERROR_REGISTER,
	CLEAR_REGISTER,
} from '../../constants';

import {
	registerRequested,
	registerLoaded,
	registerError,
	updateRegister as updateRegisterAction,
	allowRegister,
	removeMessageRegister,
	removeErrorRegister,
	clearRegister,
} from '../../actions/auth-register';

import updateRegister, { initialState } from './index';
import { updateField, updateRegisterErrors } from './index';

const state = { register: initialState };

describe('Auth-register reducer:', () => {

	it('state is undefined', () => {
		expect(updateRegister(undefined, registerRequested()))
			.toEqual(initialState)
	})

	it('default action', () => {
		expect(updateRegister(state, 'SET_USER'))
			.toEqual({
				...state.register,
			})
	})

	it(REGISTER_REQUEST, () => {
		expect(updateRegister(state, registerRequested()))
			.toEqual({
				...state.register,
				allowCreate: false,
				loading: true,
				error: null,
			})
	})

	it(REGISTER_SUCCESS, () => {
		const payload = 'success';
		expect(updateRegister(state, registerLoaded(payload)))
			.toEqual({
				...initialState, message: payload
			})
	})

	it(REGISTER_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(updateRegister(state, registerError(payload)))
			.toEqual({
				...state.register,
				loading: false,
				allowCreate: false,
				error: payload,
			})
	})

	it(`${UPDATE_REGISTER} with name field`, () => {
		const action = updateRegisterAction('name', 'value');

		expect(updateRegister(state, action))
			.toEqual(updateField(state, action));
	})

	it(`${UPDATE_REGISTER} with email field`, () => {
		const action = updateRegisterAction('email', 'value');

		expect(updateRegister(state, action))
			.toEqual(updateField(state, action));
	})

	it(`${UPDATE_REGISTER} with password field`, () => {
		const action = updateRegisterAction('password', 'value');

		expect(updateRegister(state, action))
			.toEqual(updateField(state, action));
	})

	it(`${UPDATE_REGISTER} with confirm field`, () => {
		const action = updateRegisterAction('confirm', 'value');

		expect(updateRegister(state, action))
			.toEqual(updateField(state, action));
	})

	it(`${UPDATE_REGISTER} with default field`, () => {
		const action = updateRegisterAction('field', 'value');

		expect(updateRegister(state, action))
			.toEqual(updateField(state, action));
	})

	it(`${ALLOW_REGISTER} with errors fields`, () => {
		const action = allowRegister();
		const newState = {
			register: {
				...initialState,
				name: '1',
				email: '1',
				password: '1',
				confirm: '6',
			}
		}

		expect(updateRegister(newState, action))
			.toEqual(updateRegisterErrors(newState));
	})

	it(REMOVE_MESSAGE_REGISTER, () => {
		expect(updateRegister(state, removeMessageRegister()))
			.toEqual({
				...state.register,
				message: null,
			})
	})

	it(REMOVE_ERROR_REGISTER, () => {
		expect(updateRegister(state, removeErrorRegister()))
			.toEqual({
				...state.register,
				error: null,
			})
	})

	it(CLEAR_REGISTER, () => {
		expect(updateRegister(state, clearRegister()))
			.toEqual({
				...state.register,
				error: null,
				message: null,
			})
	})

})