import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from '../../constants';

const productRequested = () => {
	return {
		type: FETCH_PRODUCT_REQUEST,
	}
}

const productLoaded = (product) => {
	return {
		type: FETCH_PRODUCT_SUCCESS,
		payload: product
	};
}

const productError = (error) => {
	return {
		type: FETCH_PRODUCT_FAILURE,
		payload: error,
	}
}

const fetchProduct = (getProduct, productId, dispatch) => () => {
	dispatch(productRequested());
	getProduct(productId)
		.then((data) => dispatch(productLoaded(data)))
		.catch((err) => dispatch(productError(err)))
};

export {
	fetchProduct,
};