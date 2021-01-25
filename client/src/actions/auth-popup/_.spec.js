import {
	VIEW_AUTH_POPUP,
	CLOSE_AUTH_POPUP,
} from '../../constants';

import {
	viewAuthPopup,
	closeAuthPopup,
} from './index';


describe('AUTH_POPUP ACTIONS: ', () => {

	it(VIEW_AUTH_POPUP, () => {
		expect(viewAuthPopup()).toEqual({ type: VIEW_AUTH_POPUP });
	})

	it(CLOSE_AUTH_POPUP, () => {
		expect(closeAuthPopup()).toEqual({ type: CLOSE_AUTH_POPUP });
	})

})