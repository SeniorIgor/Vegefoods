import {
	VIEW_AUTH_POPUP,
	CLOSE_AUTH_POPUP,
} from '../../constants';

export const initialState = {
	isView: false,
}

const updateAuthPopup = (state, action) => {

	if (state === undefined) return initialState;

	switch (action.type) {
		case VIEW_AUTH_POPUP:
			return {
				isView: true,
			}
		case CLOSE_AUTH_POPUP:
			return {
				isView: false,
			}

		default:
			return state.authPopup;
	}
}

export default updateAuthPopup;