import React from 'react';
import { VIEW_ACCOUNT_POPUP, CLOSE_ACCOUNT_POPUP } from '../../constants';
import { viewAccountPopup, closeAccountPopup } from '../../actions';
import updateAccountPopup, { initialState } from './index';

const state = { accountPopup: initialState };

describe('Account-popup reducer:', () => {

	it('state is undefined', () => {
		expect(updateAccountPopup(undefined, viewAccountPopup))
			.toEqual(initialState)
	})

	it('default action', () => {
		expect(updateAccountPopup(state, 'SET_USER'))
			.toEqual({ ...state.accountPopup });
	})

	it(VIEW_ACCOUNT_POPUP, () => {
		expect(updateAccountPopup(state, viewAccountPopup()))
			.toEqual({ isOpenAuthPopup: true })
	})

	it(CLOSE_ACCOUNT_POPUP, () => {
		expect(updateAccountPopup(state, closeAccountPopup()))
			.toEqual({ isOpenAuthPopup: false })
	})
})