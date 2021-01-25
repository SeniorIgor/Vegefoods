import {
	FETCH_CART_REQUEST,
	FETCH_CART_SUCCESS,
	FETCH_CART_FAILURE,
	CLEAR_SHOPPING_CART,
} from '../../constants';

const createCartItemsMap = (cartItems) => {
	const cartItemsMap = {};
	cartItems.forEach((item, idx) => cartItemsMap[item.productId] = idx);
	return { ...cartItemsMap };
}

const updateShoppingCart = (state, action) => {

	if (state === undefined) {
		return {
			cartItems: [],
			cartItemsMap: {},
			orderTotal: 0,
			countItems: 0,
			loading: false,
			error: null,
		};
	}

	switch (action.type) {
		case FETCH_CART_REQUEST:
			return {
				...state.shoppingCart,
				loading: true,
				error: null,
			}
		case FETCH_CART_SUCCESS:
			return {
				cartItems: action.payload.cartItems,
				cartItemsMap: createCartItemsMap(action.payload.cartItems),
				orderTotal: action.payload.orderTotal,
				countItems: action.payload.countItems,
				loading: false,
				error: null,
			}
		case FETCH_CART_FAILURE:
			return {
				...state.shoppingCart,
				loading: false,
				error: action.payload,
			}
		case CLEAR_SHOPPING_CART:
			return {
				...state.shoppingCart,
				cartItems: [],
				cartItemsMap: {},
				orderTotal: 0,
				countItems: 0,
			}

		default:
			return state.shoppingCart;
	}
}

export default updateShoppingCart;