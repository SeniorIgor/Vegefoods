import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE,
} from '../../constants';

const categoriesRequested = () => {
	return {
		type: FETCH_CATEGORIES_REQUEST,
	}
}

const categoriesLoaded = (newCategories) => {
	return {
		type: FETCH_CATEGORIES_SUCCESS,
		payload: newCategories
	};
}

const categoriesError = (error) => {
	return {
		type: FETCH_CATEGORIES_FAILURE,
		payload: error,
	}
}

const fetchCategories = (getCategories) => () => (dispatch) => {
	dispatch(categoriesRequested());
	return getCategories()
		.then((data) => dispatch(categoriesLoaded(data)))
		.catch((err) => dispatch(categoriesError(err)));
}

export {
	fetchCategories,

	// for tests
	categoriesRequested,
	categoriesLoaded,
	categoriesError
};