import {
	ORDERING_REQUEST,
	ORDERING_SUCCESS,
	ORDERING_FAILURE,
	UPDATE_ORDERING,
	UPDATE_ORDERING_ALL,
	ALLOW_CREATE_ORDER,
	CLEAR_ORDERING,
} from '../../constants';

import {
	fieldLengthError, emailError,
	validateForm
} from '../../utils';

const updateErrors = (state, name, value) => {
	let errors = { ...state.ordering.errors };

	switch (name) {
		case 'name':
			errors.name = fieldLengthError(value, 'имя', 3);
			break;
		case 'email':
			errors.email = emailError(value);
			break;
		case 'phone':
			errors.phone = fieldLengthError(value, 'email', 11);
			break;
		case 'address':
			errors.address = fieldLengthError(value, 'адрес', 6);
			break;

		default:
			break;
	}

	return errors;
}

const updateOrderingErrors = (state) => {
	const errors = updateAllErrors(state);
	const allowCreate = validateForm(errors);

	return {
		...state.ordering,
		errors,
		allowCreate,
	}
}

const updateAllErrors = (state) => {
	const { name, email, phone, address } = state.ordering;

	return {
		name: fieldLengthError(name, 'имя', 3),
		email: emailError(email),
		phone: fieldLengthError(phone, 'телефон', 11),
		address: fieldLengthError(address, 'адрес', 6),
	}
}

const updateField = (state, action) => {
	const localState = { ...state.ordering };
	const { name, value } = action.payload;

	localState[name] = value;
	localState.errors = updateErrors(state, name, value);

	return localState;
}

const updateAllFields = (state, action) => {
	const { ordering: order } = state;
	const { name = order.name, email = order.email,
		phone = order.phone } = action.payload;

	return { ...state.ordering, name, email, phone };
}

const initialState = {
	name: '',
	email: '',
	phone: '',
	address: '',
	date: '',
	time: '',
	errors: {
		name: '',
		email: '',
		phone: '',
		address: '',
	},
	allowCreate: false,
	loading: false,
	error: null,
	isCreated: false,
}

const updateOrdering = (state, action) => {

	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case ORDERING_REQUEST:
			return {
				...state.ordering,
				loading: true,
				error: null,
			}
		case UPDATE_ORDERING:
			return updateField(state, action);

		case UPDATE_ORDERING_ALL:
			return updateAllFields(state, action);

		case ORDERING_SUCCESS:
			return { ...initialState, isCreated: true };

		case ALLOW_CREATE_ORDER:
			return updateOrderingErrors(state);

		// case ORDERING_FIRST_LOAD:
		// 	return {
		// 		...state.ordering,
		// 		loading: false,
		// 	}

		case CLEAR_ORDERING:
			return initialState;

		case ORDERING_FAILURE:
			return {
				...state.ordering,
				loading: false,
				allowCreate: false,
				error: action.payload,
			}

		default:
			return state.ordering;
	}
}

export default updateOrdering;