import {
	FETCH_FAVORITES_REQUEST,
	FETCH_FAVORITES_SUCCESS,
	FETCH_FAVORITES_FAILURE,
	CLEAR_FAVORITES
} from '../../constants';

const favoritesRequested = () => {
	return {
		type: FETCH_FAVORITES_REQUEST,
	}
}

const favoritesLoaded = (favorites) => {
	return {
		type: FETCH_FAVORITES_SUCCESS,
		payload: favorites
	};
}

const favoritesError = (error) => {
	return {
		type: FETCH_FAVORITES_FAILURE,
		payload: error,
	}
}

const clearFavorites = () => {
	return {
		type: CLEAR_FAVORITES,
	}
}

const updateFavorites = (updateData, onViewPopup, logout) => (productId, token) => (dispatch) => {
	return updateData(productId, token)
		.then((data) => dispatch(favoritesLoaded(data)))
		.catch((err) => {
			if (err.name === 'AuthorizationError' && err.isOldToken) {
				logout();
				onViewPopup();
			}
		})
}

const fetchFavorites = (getFavorites) => (token) => (dispatch) => {
	dispatch(favoritesRequested());
	return getFavorites(token)
		.then((data) => dispatch(favoritesLoaded(data)))
		.catch((err) => {
			dispatch(favoritesError(err));
		});
}

export {
	fetchFavorites,
	updateFavorites,
	clearFavorites,

	// for tests
	favoritesRequested,
	favoritesLoaded,
	favoritesError,
};