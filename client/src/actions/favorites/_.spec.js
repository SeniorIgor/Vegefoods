import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk';
import { ProductService } from '../../services/';
import { AuthorizationError } from '../../utils';

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
	fetchFavorites,
	updateFavorites,
	clearFavorites,
} from './index';

const mockStore = configureMockStore([thunk]);
const { getFavorites, setUpdateFavorites } = new ProductService();


describe('PRODUCT_LIST ACTIONS: ', () => {

	it(FETCH_FAVORITES_REQUEST, () => {
		expect(favoritesRequested()).toEqual({ type: FETCH_FAVORITES_REQUEST });
	})

	it(FETCH_FAVORITES_SUCCESS, () => {
		const payload = [1, 2, 3];
		expect(favoritesLoaded(payload)).toEqual({ type: FETCH_FAVORITES_SUCCESS, payload });
	})

	it(FETCH_FAVORITES_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(favoritesError(payload)).toEqual({ type: FETCH_FAVORITES_FAILURE, payload });
	})

	it(CLEAR_FAVORITES, () => {
		expect(clearFavorites()).toEqual({ type: CLEAR_FAVORITES });
	})


	describe('ASYNC ACTIONS: ', () => {

		const store = mockStore({});
		beforeEach(() => {
			store.clearActions();
		})

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		// FETCH FAVORITES

		it(`FETCH_FAVORITES --> ${FETCH_FAVORITES_SUCCESS}`, () => {

			const data = [1, 2, 3];
			const expectedActions = [favoritesRequested(), favoritesLoaded(data)];

			fetchMock.get(/\/api\/favorites/, data);

			store.dispatch(fetchFavorites(getFavorites)(1))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

		it(`FETCH_FAVORITES --> ${FETCH_FAVORITES_FAILURE}`, () => {

			const error = new Error('server not found');
			const expectedActions = [favoritesRequested(), favoritesError(error)];

			fetchMock.get(/\/api\/favorites/, () => { throw error });

			store.dispatch(fetchFavorites(getFavorites)(1))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

		// UPDATE FAVORITES

		it(`UPDATE_FAVORITES --> ${FETCH_FAVORITES_SUCCESS}`, () => {

			const data = [1, 2, 3];
			const expectedActions = [favoritesLoaded(data)];

			fetchMock.post(/\/api\/favorites\/update/, data);

			store.dispatch(updateFavorites(setUpdateFavorites, () => { }, () => { })(1, 5))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})
		});

		it(`UPDATE_FAVORITES --> Error`, () => {

			const error = new Error('server not found');
			const onViewPopup = jest.fn();
			const logout = jest.fn();

			fetchMock.post(/\/api\/favorites\/update/, () => { throw error });

			store.dispatch(updateFavorites(setUpdateFavorites, onViewPopup, logout)(1, 5))
				.then(() => {
					expect(onViewPopup).toHaveBeenCalledTimes(0);
					expect(logout).toHaveBeenCalledTimes(0);
				})
		});

		it(`UPDATE_FAVORITES --> AuthorizationError (isOldToken = false)`, () => {

			const error = new Error('server not found');
			const onViewPopup = jest.fn();
			const logout = jest.fn();

			fetchMock.post(/\/api\/favorites\/update/, () => { throw error });

			store.dispatch(updateFavorites(setUpdateFavorites, onViewPopup, logout)(1, 5))
				.then(() => {
					expect(onViewPopup).toHaveBeenCalledTimes(0);
					expect(logout).toHaveBeenCalledTimes(0);
				})
		});

		it(`UPDATE_FAVORITES --> AuthorizationError (isOldToken = true)`, () => {

			const error = new AuthorizationError('server not found', true);
			const onViewPopup = jest.fn();
			const logout = jest.fn();

			fetchMock.post(/\/api\/favorites\/update/, () => { throw error });

			store.dispatch(updateFavorites(setUpdateFavorites, onViewPopup, logout)(1, 5))
				.then(() => {
					expect(onViewPopup).toHaveBeenCalledTimes(1);
					expect(logout).toHaveBeenCalledTimes(1);
				})
		});

	})
})