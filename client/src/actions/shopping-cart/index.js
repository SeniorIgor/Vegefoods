import {
	FETCH_CART_REQUEST,
	FETCH_CART_SUCCESS,
	FETCH_CART_FAILURE,
	CLEAR_SHOPPING_CART
} from '../../constants';

const cartRequested = () => {
	return {
		type: FETCH_CART_REQUEST,
	}
}

const cartLoaded = (cart) => {
	return {
		type: FETCH_CART_SUCCESS,
		payload: cart
	};
}

const cartError = (error) => {
	return {
		type: FETCH_CART_FAILURE,
		payload: error,
	}
}

const clearCart = () => {
	return {
		type: CLEAR_SHOPPING_CART,
	}
}

const updateShoppingCart = (updateData) => (productId, quantity, token) => (dispatch) => {
	updateData(productId, quantity, token)
		.then((data) => dispatch(cartLoaded(data)))
		.catch((err) => { });
}

const fetchCart = (getCart) => (token) => (dispatch) => {
	dispatch(cartRequested());
	getCart(token)
		.then((data) => dispatch(cartLoaded(data)))
		.catch((err) => dispatch(cartError(err)));
}

export {
	fetchCart,
	updateShoppingCart,
	clearCart,
};

// const updateShoppingCart = (updateData, logout, onViewPopup, dispatch) => (productId, quantity, token) => {
// 	updateData(productId, quantity, token)
// 		.then((data) => dispatch(cartLoaded(data)))
// 		.catch((err) => {
// 			if (err.name === 'AuthorizationError' && err.isOldToken) {
// 				logout();
// 				onViewPopup();
// 			}
// 		})
// }