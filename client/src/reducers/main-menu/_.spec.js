import {
	UPDATE_MAIN_MENU,
} from '../../constants';

import {
	updateMainMenu as mainMenuAction,
} from '../../actions/main-menu';

import updateMainMenu, { initialState } from './index';

const state = { mainMenu: initialState };

describe('Favorites reducer:', () => {

	it('state is undefined', () => {
		expect(updateMainMenu(undefined, mainMenuAction()))
			.toEqual(initialState)
	})

	it('default action', () => {
		expect(updateMainMenu(state, 'SET_USER'))
			.toEqual({ ...state.mainMenu });
	})

	it(UPDATE_MAIN_MENU, () => {
		expect(updateMainMenu(state, mainMenuAction()))
			.toEqual({
				isOpenMainMenu: !state.mainMenu.isOpenMainMenu,
			})
	})

})