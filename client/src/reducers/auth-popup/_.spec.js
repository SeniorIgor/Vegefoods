import { VIEW_AUTH_POPUP, CLOSE_AUTH_POPUP } from '../../constants';
import { viewAuthPopup, closeAuthPopup } from '../../actions';
import updateAuthPopup, { initialState } from './index';

const state = { authPopup: initialState };

describe('Auth-popup reducer:', () => {

	it('state is undefined', () => {
		expect(updateAuthPopup(undefined, viewAuthPopup()))
			.toEqual(initialState)
	})

	it('default action', () => {
		expect(updateAuthPopup(state, 'SET_USER'))
			.toEqual({ ...state.authPopup });
	})

	it(VIEW_AUTH_POPUP, () => {
		expect(updateAuthPopup(state, viewAuthPopup()))
			.toEqual({ isView: true })
	})

	it(CLOSE_AUTH_POPUP, () => {
		expect(updateAuthPopup(state, closeAuthPopup()))
			.toEqual({ isView: false })
	})
})