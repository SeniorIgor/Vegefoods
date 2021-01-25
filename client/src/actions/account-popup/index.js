import {
	VIEW_ACCOUNT_POPUP,
	CLOSE_ACCOUNT_POPUP,
} from '../../constants';

const viewAccountPopup = () => {
	return {
		type: VIEW_ACCOUNT_POPUP,
	}
}

const closeAccountPopup = () => {
	return {
		type: CLOSE_ACCOUNT_POPUP,
	}
}

export {
	viewAccountPopup,
	closeAccountPopup,
};