import React from 'react';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk';
import { ProductService } from '../../services/';

import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
} from '../../constants';

import {
	productsRequested,
	productsLoaded,
	productsError,
	fetchProducts
} from './index';

const mockStore = configureMockStore([thunk]);
const { getProducts } = new ProductService();

// const mockGetProducts = (body, isSuccess = true) => () =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => (isSuccess ? resolve(body) : reject(body)), 10);
// 	});

describe('PRODUCT_LIST ACTIONS: ----------------------------------', () => {

	it(FETCH_PRODUCTS_REQUEST, () => {
		expect(productsRequested()).toEqual({ type: FETCH_PRODUCTS_REQUEST });
	})

	it(FETCH_PRODUCTS_SUCCESS, () => {
		const data = [1, 2, 3];
		expect(productsLoaded(data))
			.toEqual({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
	})

	it(FETCH_PRODUCTS_FAILURE, () => {
		const error = { title: 'Error' };
		expect(productsError(error))
			.toEqual({ type: FETCH_PRODUCTS_FAILURE, payload: error });
	})

	describe('ASYNC ACTIONS: ---------------------------------------', () => {

		const store = mockStore({});
		beforeEach(() => {
			store.clearActions();
		})

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		it(`FETCH_PRODUCTS --> ${FETCH_PRODUCTS_SUCCESS}`, () => {

			const data = [1, 2, 3];
			fetchMock.getOnce(/\/api\/products\/all/, {
				headers: { "content-type": "application/json" },
				body: data,
			});

			const expectedActions = [productsRequested(), productsLoaded(data)]

			store.dispatch(fetchProducts(getProducts, 'all')()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			})

		});

		it(`FETCH_PRODUCTS --> ${FETCH_PRODUCTS_FAILURE}`, () => {

			const error = new Error('server not found');
			const expectedActions = [productsRequested(), productsError(error)];

			fetchMock.mock(/\/api\/products\/all/, () => { throw error });

			store.dispatch(fetchProducts(getProducts, 'all')()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			})

		});
	})
})