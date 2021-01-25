import {
	UPDATE_MAIN_MENU,
} from '../../constants';

const updateMainMenu = () => {
	document.body.classList.toggle('lock');

	return {
		type: UPDATE_MAIN_MENU,
	}
}

export {
	updateMainMenu,
};