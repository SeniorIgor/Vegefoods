import {
	ORDERING_REQUEST,
	ORDERING_SUCCESS,
	ORDERING_FAILURE,
	UPDATE_ORDERING,
	UPDATE_ORDERING_ALL,
	ALLOW_CREATE_ORDER,
	CLEAR_ORDERING,
} from '../../constants';

import { profileLoaded } from '../profile';
import { clearCart } from '../shopping-cart';

const orderingRequested = () => {
	return {
		type: ORDERING_REQUEST,
	}
}

const orderingLoaded = () => {
	return {
		type: ORDERING_SUCCESS,
	};
}

const orderingError = (error) => {
	return {
		type: ORDERING_FAILURE,
		payload: error,
	}
}

const updateOrdering = (name, value) => {
	return {
		type: UPDATE_ORDERING,
		payload: { name, value },
	}
}

const updateOrderingAll = (data) => {
	return {
		type: UPDATE_ORDERING_ALL,
		payload: { ...data },
	}
}

const clearOrdering = () => {
	return {
		type: CLEAR_ORDERING,
	}
}

const allowCreateOrder = () => {
	return {
		type: ALLOW_CREATE_ORDER,
	}
}

const fetchOrdering = (createOrder, dispatch, token) => (data) => {
	dispatch(orderingRequested());
	createOrder(data, token)
		.then((data) => {
			dispatch(orderingLoaded());
			dispatch(profileLoaded(data));
			dispatch(clearCart());
		})
		.catch((err) => dispatch(orderingError(err)));
}

export {
	fetchOrdering,
	updateOrdering,
	allowCreateOrder,
	clearOrdering,
	updateOrderingAll,
};