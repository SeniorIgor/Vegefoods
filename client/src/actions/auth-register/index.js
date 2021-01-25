import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	ALLOW_REGISTER,
	UPDATE_REGISTER,
	REMOVE_MESSAGE_REGISTER,
	REMOVE_ERROR_REGISTER,
	CLEAR_REGISTER,
} from '../../constants';

const registerRequested = () => {
	return {
		type: REGISTER_REQUEST,
	}
}

const registerLoaded = (message) => {
	return {
		type: REGISTER_SUCCESS,
		payload: message,
	};
}

const registerError = (error) => {
	return {
		type: REGISTER_FAILURE,
		payload: error,
	}
}

const updateRegister = (name, value) => {
	return {
		type: UPDATE_REGISTER,
		payload: { name, value },
	}
}

const removeErrorRegister = () => {
	return {
		type: REMOVE_ERROR_REGISTER,
	}
}

const removeMessageRegister = () => {
	return {
		type: REMOVE_MESSAGE_REGISTER,
	}
}

const clearRegister = () => {
	return {
		type: CLEAR_REGISTER,
	}
}

const allowRegister = () => {
	return {
		type: ALLOW_REGISTER,
	}
}

const fetchRegister = (registerUser) => (formData) => (dispatch) => {
	dispatch(registerRequested());
	return registerUser(formData)
		.then((message) => dispatch(registerLoaded(message)))
		.catch((err) => dispatch(registerError(err)))
};

export {
	fetchRegister,
	updateRegister,
	allowRegister,
	removeMessageRegister,
	removeErrorRegister,
	clearRegister,

	// for tests
	registerRequested,
	registerLoaded,
	registerError,
};