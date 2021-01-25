import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
} from '../../constants';

const getDataIsEmptyError = (data) => (data && data.length < 1) ? new Error('Data is empty') : null;

const initialState = {
	products: [],
	loading: true,
	error: null,
}

const updateProductList = (state, action) => {

	if (state === undefined) return initialState;

	switch (action.type) {
		case FETCH_PRODUCTS_REQUEST:
			return initialState;

		case FETCH_PRODUCTS_SUCCESS:
			return {
				products: action.payload,
				loading: false,
				error: getDataIsEmptyError(action.payload),
			}

		case FETCH_PRODUCTS_FAILURE:
			return {
				products: [],
				loading: false,
				error: action.payload,
			}

		default:
			return state.productList;
	}
}

export default updateProductList;