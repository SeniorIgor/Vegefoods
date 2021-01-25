import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE
} from '../../constants';

import {
	categoriesRequested,
	categoriesLoaded,
	categoriesError
} from '../../actions/category-list';

import updateCategoryList, { initialState } from './index';

const state = { categoryList: initialState };

describe('Category-list reducer:', () => {

	it('state is undefined', () => {
		expect(updateCategoryList(undefined, categoriesRequested()))
			.toEqual(initialState)
	})

	it('default action', () => {
		expect(updateCategoryList(state, 'SET_USER'))
			.toEqual({ ...state.categoryList });
	})

	it(FETCH_CATEGORIES_REQUEST, () => {
		expect(updateCategoryList(state, categoriesRequested()))
			.toEqual(initialState)
	})

	it(FETCH_CATEGORIES_SUCCESS, () => {
		const payload = [1, 2, 3];
		expect(updateCategoryList(state, categoriesLoaded(payload)))
			.toEqual({
				categories: payload,
				loading: false,
				error: null,
			})
	})

	it(FETCH_CATEGORIES_FAILURE, () => {
		const payload = [1, 2, 3];
		expect(updateCategoryList(state, categoriesError(payload)))
			.toEqual({
				categories: [],
				loading: false,
				error: payload,
			})
	})
})