import {
	VIEW_ACCOUNT_POPUP,
	CLOSE_ACCOUNT_POPUP,
} from '../../constants';

import {
	viewAccountPopup,
	closeAccountPopup,
} from './index';


describe('PRODUCT_LIST ACTIONS: ----------------------------------', () => {

	it(VIEW_ACCOUNT_POPUP, () => {
		expect(viewAccountPopup()).toEqual({ type: VIEW_ACCOUNT_POPUP });
	})

	it(CLOSE_ACCOUNT_POPUP, () => {
		expect(closeAccountPopup()).toEqual({ type: CLOSE_ACCOUNT_POPUP });
	})

})