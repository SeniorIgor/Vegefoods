import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE
} from '../../constants';

export const initialState = {
	categories: [],
	loading: true,
	error: null,
}

const updateCategoryList = (state, action) => {

	if (state === undefined) return initialState;

	switch (action.type) {
		case FETCH_CATEGORIES_REQUEST:
			return initialState;

		case FETCH_CATEGORIES_SUCCESS:
			return {
				categories: action.payload,
				loading: false,
				error: null,
			}
		case FETCH_CATEGORIES_FAILURE:
			return {
				categories: [],
				loading: false,
				error: action.payload,
			}

		default:
			return state.categoryList;
	}
}

export default updateCategoryList;