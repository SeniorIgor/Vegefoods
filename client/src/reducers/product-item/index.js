import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from '../../constants';

const updateProductItem = (state, action) => {

	if (state === undefined) {
		return {
			product: {},
			loading: true,
			error: null,
		};
	}

	switch (action.type) {
		case FETCH_PRODUCT_REQUEST:
			return {
				product: {},
				loading: true,
				error: null,
			}
		case FETCH_PRODUCT_SUCCESS:
			return {
				product: action.payload,
				loading: false,
				error: null,
			}
		case FETCH_PRODUCT_FAILURE:
			return {
				product: {},
				loading: false,
				error: action.payload,
			}

		default:
			return state.productItem;
	}
}

export default updateProductItem;