import {
	UPDATE_MAIN_MENU,
} from '../../constants';

import {
	updateMainMenu
} from './index';


describe('MAIN_MENU ACTIONS: ', () => {

	it(UPDATE_MAIN_MENU, () => {
		expect(updateMainMenu()).toEqual({ type: UPDATE_MAIN_MENU });
	})

})