import { shallow } from 'enzyme';
import { setUp } from '../../utils';

// import { render as renderComponent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import BtnCartRemove from './index';

const initialState = {
	updateCart: () => { },
}

const render = setUp(BtnCartRemove, shallow, initialState);

describe('BTN_CART_REMOVE: ', () => {

	describe('HANDLERS: ', () => {

		it('call updateCart method', () => {
			const updateCart = jest.fn();
			const component = render({ updateCart });
			component.find(".remove-btn").simulate('click');
			expect(updateCart).toHaveBeenCalledTimes(1);
		})

	})

})