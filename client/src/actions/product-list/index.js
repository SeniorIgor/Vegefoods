import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
} from '../../constants';

const productsRequested = () => {
	return {
		type: FETCH_PRODUCTS_REQUEST,
	}
}

const productsLoaded = (newProducts) => {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: newProducts
	};
}

const productsError = (error) => {
	return {
		type: FETCH_PRODUCTS_FAILURE,
		payload: error,
	}
}

const fetchProducts = (getProducts, category) => () => (dispatch) => {
	dispatch(productsRequested());
	return getProducts(category)
		.then((data) => dispatch(productsLoaded(data)))
		.catch((err) => dispatch(productsError(err)));
}

export {
	// export for tests
	productsRequested,
	productsLoaded,
	productsError,

	// export
	fetchProducts,
};