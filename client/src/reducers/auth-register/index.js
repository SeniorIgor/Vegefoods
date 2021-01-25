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

import {
	fieldLengthError, emailError, confirmError,
	validateForm
} from '../../utils';

export const updateErrors = (state, name, value) => {
	const errors = { ...state.register.errors };

	switch (name) {
		case 'name':
			errors.name = fieldLengthError(value, 'имя', 3);
			break;
		case 'email':
			errors.email = emailError(value);
			break;
		case 'password':
			errors.password = fieldLengthError(value, 'пароль', 6);
			break;
		case 'confirm':
			errors.confirm = confirmError(value, state.register.password);
			break;

		default:
			break;
	}

	return errors;
}

export const updateRegisterErrors = (state) => {
	const errors = updateAllErrors(state);

	return {
		...state.register,
		errors,
		allowCreate: validateForm(errors),
	}
}

export const updateAllErrors = (state) => {
	const { name, email, password, confirm } = state.register;

	return {
		name: fieldLengthError(name, 'имя', 3),
		email: emailError(email),
		password: fieldLengthError(password, 'пароль', 6),
		confirm: confirmError(confirm, password),
	}
}

export const updateField = (state, action) => {
	const localState = { ...state.register };
	const { name, value } = action.payload;

	localState[name] = value;
	localState.errors = updateErrors(state, name, value);
	localState.error = null;
	localState.message = null;

	return localState;
}

export const initialState = {
	name: '',
	email: '',
	password: '',
	confirm: '',
	errors: {
		name: '',
		email: '',
		password: '',
		confirm: '',
	},
	allowCreate: false,
	loading: false,
	message: null,
	error: null,
}

const updateRegister = (state, action) => {

	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case REGISTER_REQUEST:
			return {
				...state.register,
				allowCreate: false,
				loading: true,
				error: null,
			}
		case UPDATE_REGISTER:
			return updateField(state, action);

		case REGISTER_SUCCESS:
			return { ...initialState, message: action.payload };

		case ALLOW_REGISTER:
			return updateRegisterErrors(state);

		case REMOVE_ERROR_REGISTER:
			return {
				...state.register,
				error: null,
			}

		case REMOVE_MESSAGE_REGISTER:
			return {
				...state.register,
				message: null,
			}

		case CLEAR_REGISTER:
			return {
				...state.register,
				error: null,
				message: null,
			}

		case REGISTER_FAILURE:
			return {
				...state.register,
				loading: false,
				allowCreate: false,
				error: action.payload,
			}

		default:
			return state.register;
	}
}

export default updateRegister;