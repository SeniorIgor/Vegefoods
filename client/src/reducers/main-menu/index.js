import {
	UPDATE_MAIN_MENU,
} from '../../constants';

export const initialState = {
	isOpenMainMenu: false,
}

const updateMainMenu = (state, action) => {

	if (state === undefined) return initialState;

	switch (action.type) {
		case UPDATE_MAIN_MENU:
			return {
				isOpenMainMenu: !state.mainMenu.isOpenMainMenu,
			}

		default:
			return state.mainMenu;
	}
}

export default updateMainMenu;