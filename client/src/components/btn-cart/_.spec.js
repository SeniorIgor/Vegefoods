import { shallow } from 'enzyme';
import { setUp } from '../../utils';

// import { render as renderComponent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import BtnCart from './index';

const initialState = {
	countItems: 0,
}

const render = setUp(BtnCart, shallow, initialState);

describe('BTN_CART: ', () => {

	describe('RENDER', () => {

		it('with (countItems = 0) props', () => {
			const component = render();
			expect(component.find(".btn-cart__quantity")).toHaveLength(0);
			expect(component.find(".btn-cart__quantity_active")).toHaveLength(0);
			expect(component.find(".btn-cart__quantity-wrap")).toHaveLength(0);
		})

		it('with (0 < countItems < 10) props', () => {
			const component = render({ countItems: 8 });
			expect(component.find(".btn-cart__quantity")).toHaveLength(1);
			expect(component.find(".btn-cart__quantity_active")).toHaveLength(1);
			expect(component.find(".btn-cart__quantity-wrap")).toHaveLength(1);
		})

		it('with (countItems > 10) props', () => {
			const component = render({ countItems: 15 });
			expect(component.find(".btn-cart__quantity")).toHaveLength(1);
			expect(component.find(".btn-cart__quantity_active")).toHaveLength(0);
			expect(component.find(".btn-cart__quantity-wrap")).toHaveLength(1);
		})

	})

})