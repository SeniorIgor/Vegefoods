import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk';
import { ProductService } from '../../services/';

import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE,
} from '../../constants';

import {
	categoriesRequested,
	categoriesLoaded,
	categoriesError,
	fetchCategories,
} from './index';

const mockStore = configureMockStore([thunk]);
const { getCategories } = new ProductService();


describe('PRODUCT_LIST ACTIONS: ', () => {

	it(FETCH_CATEGORIES_REQUEST, () => {
		expect(categoriesRequested()).toEqual({ type: FETCH_CATEGORIES_REQUEST });
	})

	it(FETCH_CATEGORIES_SUCCESS, () => {
		const payload = [1, 2, 3];
		expect(categoriesLoaded(payload)).toEqual({ type: FETCH_CATEGORIES_SUCCESS, payload });
	})

	it(FETCH_CATEGORIES_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(categoriesError(payload)).toEqual({ type: FETCH_CATEGORIES_FAILURE, payload });
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

		// categoriesRequested,
		// categoriesLoaded,
		// categoriesError,
		// fetchCategories,

		it(`CATEGORY_LIST --> ${FETCH_CATEGORIES_SUCCESS}`, () => {

			const data = [1, 2, 3];
			const expectedActions = [categoriesRequested(), categoriesLoaded(data)];

			fetchMock.get(/\/api\/category/, data);

			store.dispatch(fetchCategories(getCategories)())
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

		it(`CATEGORY_LIST --> ${FETCH_CATEGORIES_FAILURE}`, () => {

			const error = new Error('server not found');
			const expectedActions = [categoriesRequested(), categoriesError(error)];

			fetchMock.get(/\/api\/category/, () => { throw error });

			store.dispatch(fetchCategories(getCategories)())
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})

		});

	})
})