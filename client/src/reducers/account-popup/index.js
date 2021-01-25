import {
	VIEW_ACCOUNT_POPUP,
	CLOSE_ACCOUNT_POPUP,
} from '../../constants';

export const initialState = {
	isOpenAuthPopup: false,
}

const updateAccountPopup = (state, action) => {

	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case VIEW_ACCOUNT_POPUP:
			return {
				isOpenAuthPopup: true,
			}
		case CLOSE_ACCOUNT_POPUP:
			return {
				isOpenAuthPopup: false,
			}

		default:
			return state.accountPopup;
	}
}

export default updateAccountPopup;