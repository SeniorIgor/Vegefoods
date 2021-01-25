import { shallow } from 'enzyme';
import { setUp } from '../../utils';

// import { render as renderComponent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import BtnFavorites from './index';

const initialState = {
	isText: false,
	isFavorites: false,
	updateFavorites: () => { }
}

const render = setUp(BtnFavorites, shallow, initialState);

describe('BTN_FAVORITES: ', () => {

	describe('RENDER: ', () => {

		it('with (isText = false) props', () => {
			const component = render();
			expect(component.find(".btn-favorites_text")).toHaveLength(0);
		})

		it('with (isText = true) props', () => {
			const component = render({ isText: true });
			expect(component.find(".btn-favorites_text")).toHaveLength(1);
		})

		it('with (isFavorites = false) props', () => {
			const component = render();
			expect(component.find(".btn-favorites_active")).toHaveLength(0);
		})

		it('with (isFavorites = true) props', () => {
			const component = render({ isFavorites: true });
			expect(component.find(".btn-favorites_active")).toHaveLength(1);
		})

		it('with (text = В избранном) props', () => {
			const component = render({ isText: true, isFavorites: true });
			expect(component.find(".btn-favorites").text()).toEqual('В избранном')
		})

		it('with (text = В избранное) props', () => {
			const component = render({ isText: true, isFavorites: false });
			expect(component.find(".btn-favorites").text()).toEqual('В избранное')
		})

	})

	describe('HANDLERS: ', () => {

		it('call updateFavorites method', () => {
			const updateFavorites = jest.fn();
			const component = render({ updateFavorites });
			component.find(".btn-favorites").simulate('click');
			expect(updateFavorites).toHaveBeenCalledTimes(1);
		})

	})

})