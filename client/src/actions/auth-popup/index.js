import {
	VIEW_AUTH_POPUP,
	CLOSE_AUTH_POPUP,
} from '../../constants';

const viewAuthPopup = () => {
	return {
		type: VIEW_AUTH_POPUP,
	}
}

const closeAuthPopup = () => {
	return {
		type: CLOSE_AUTH_POPUP,
	}
}

export {
	viewAuthPopup,
	closeAuthPopup,
}