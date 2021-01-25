import {
	FETCH_FAVORITES_REQUEST,
	FETCH_FAVORITES_SUCCESS,
	FETCH_FAVORITES_FAILURE,
	CLEAR_FAVORITES
} from '../../constants';

import {
	favoritesRequested,
	favoritesLoaded,
	favoritesError,
	clearFavorites,
} from '../../actions/favorites';

import updateFavorites, { initialState, createFavoritesItemsMap } from './index';

const state = { favorites: initialState };

describe('Favorites reducer:', () => {

	it('state is undefined', () => {
		expect(updateFavorites(undefined, favoritesRequested()))
			.toEqual(initialState)
	})

	it('default action', () => {
		expect(updateFavorites(state, 'SET_USER'))
			.toEqual({ ...state.favorites });
	})

	it(FETCH_FAVORITES_REQUEST, () => {
		expect(updateFavorites(state, favoritesRequested()))
			.toEqual({
				...state.favorites,
				loading: true,
				error: null,
			})
	})

	it(FETCH_FAVORITES_SUCCESS, () => {
		const payload = { favoritesItems: [1, 2, 3] };
		expect(updateFavorites(state, favoritesLoaded(payload)))
			.toEqual({
				favoritesItems: payload.favoritesItems,
				favoritesItemsMap: createFavoritesItemsMap(payload.favoritesItems),
				loading: false,
				error: null,
			})
	})

	it(FETCH_FAVORITES_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(updateFavorites(state, favoritesError(payload)))
			.toEqual({
				...state.favorites,
				loading: false,
				error: payload,
			})
	})

	it(CLEAR_FAVORITES, () => {
		expect(updateFavorites(state, clearFavorites()))
			.toEqual(initialState)
	})
})