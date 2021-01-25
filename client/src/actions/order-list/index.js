import {
	FETCH_ORDERS_REQUEST,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAILURE,
} from '../../constants';

const ordersRequested = () => {
	return {
		type: FETCH_ORDERS_REQUEST,
	}
}

const ordersLoaded = (orders) => {
	return {
		type: FETCH_ORDERS_SUCCESS,
		payload: orders
	};
}

const ordersError = (error) => {
	return {
		type: FETCH_ORDERS_FAILURE,
		payload: error,
	}
}

const fetchOrders = (getOrders, token, dispatch) => () => {
	dispatch(ordersRequested());
	getOrders(token)
		.then((data) => dispatch(ordersLoaded(data)))
		.catch((err) => dispatch(ordersError(err)));
}

export {
	fetchOrders,
};