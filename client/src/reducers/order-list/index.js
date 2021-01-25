import {
	FETCH_ORDERS_REQUEST,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAILURE,
} from '../../constants';

const updateOrderList = (state, action) => {

	if (state === undefined) {
		return {
			orders: [],
			loading: true,
			error: null,
		};
	}

	switch (action.type) {
		case FETCH_ORDERS_REQUEST:
			return {
				...state.orderList,
				loading: true,
				error: null,
			}
		case FETCH_ORDERS_SUCCESS:
			return {
				orders: action.payload,
				loading: false,
				error: null,
			}
		case FETCH_ORDERS_FAILURE:
			return {
				orders: [],
				loading: false,
				error: action.payload,
			}

		default:
			return state.orderList;
	}
}

export default updateOrderList;