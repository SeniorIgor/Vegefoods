import {
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_FAILURE,
	UPDATE_PROFILE,
	CLEAR_PROFILE,
} from '../../constants';

const updateField = (state, action) => (fieldName) => {
	const { name, value } = action.payload;

	if (name === fieldName) return value;

	return state.profile[fieldName];
}

const initialState = {
	name: '',
	email: '',
	phone: '',
	loading: true,
	error: null,
}

const updateProfile = (state, action) => {

	if (state === undefined) return initialState;

	switch (action.type) {
		case FETCH_PROFILE_REQUEST:
			return {
				...state.profile,
				loading: true,
				error: null,
			}
		case FETCH_PROFILE_SUCCESS:
			return {
				name: action.payload.name,
				email: action.payload.email,
				phone: action.payload.phone,
				loading: false,
				error: null,
			}
		case UPDATE_PROFILE:
			const updateFields = updateField(state, action);

			return {
				name: updateFields('name'),
				email: updateFields('email'),
				phone: updateFields('phone'),
				loading: false,
				error: null,
			}

		case CLEAR_PROFILE:
			return initialState;

		case FETCH_PROFILE_FAILURE:
			return {
				name: '',
				email: '',
				phone: '',
				loading: false,
				error: action.payload,
			}

		default:
			return state.profile;
	}
}

export default updateProfile;