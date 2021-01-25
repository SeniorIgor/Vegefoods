import {
	FETCH_FAVORITES_REQUEST,
	FETCH_FAVORITES_SUCCESS,
	FETCH_FAVORITES_FAILURE,
	CLEAR_FAVORITES
} from '../../constants';

export const createFavoritesItemsMap = (favoritesItems) => {
	const favoritesItemsMap = {};
	favoritesItems.forEach((item, idx) => favoritesItemsMap[item.id] = idx);
	return { ...favoritesItemsMap };
}

export const initialState = {
	favoritesItems: [],
	favoritesItemsMap: {},
	loading: false,
	error: null,
}

const updateFavorites = (state, action) => {

	if (state === undefined) return initialState;

	switch (action.type) {
		case FETCH_FAVORITES_REQUEST:
			return {
				...state.favorites,
				loading: true,
				error: null,
			}
		case FETCH_FAVORITES_SUCCESS:
			return {
				favoritesItems: action.payload.favoritesItems,
				favoritesItemsMap: createFavoritesItemsMap(action.payload.favoritesItems),
				loading: false,
				error: null,
			}
		case FETCH_FAVORITES_FAILURE:
			return {
				...state.favorites,
				loading: false,
				error: action.payload,
			}
		case CLEAR_FAVORITES:
			return initialState;

		default:
			return state.favorites;
	}
}

export default updateFavorites;