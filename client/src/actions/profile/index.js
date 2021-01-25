import {
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_FAILURE,
	UPDATE_PROFILE,
	CLEAR_PROFILE,
} from '../../constants';

const profileRequested = () => {
	return {
		type: FETCH_PROFILE_REQUEST,
	}
}

const profileLoaded = (data) => {
	return {
		type: FETCH_PROFILE_SUCCESS,
		payload: data,
	};
}

const profileError = (error) => {
	return {
		type: FETCH_PROFILE_FAILURE,
		payload: error,
	}
}

const updateProfile = (name, value) => {
	console.log(name, value);
	return {
		type: UPDATE_PROFILE,
		payload: { name, value }
	}
}

const fetchProfile = (getProfile) => (token) => (dispatch) => {
	dispatch(profileRequested());
	getProfile(token)
		.then((data) => dispatch(profileLoaded(data)))
		.catch((err) => dispatch(profileError(err)));
}

const clearProfile = () => {
	return {
		type: CLEAR_PROFILE,
	}
}

export {
	fetchProfile,
	profileLoaded,
	updateProfile,
	clearProfile,
};