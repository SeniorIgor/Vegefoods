import { shallow } from 'enzyme';
import { setUp } from '../../utils';

// import { render as renderComponent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import BtnMainMenu from './index';

const initialState = {
	isActive: false,
	handler: () => { }
}

const render = setUp(BtnMainMenu, shallow, initialState);

describe('BTN_MAIN_MENU: ', () => {

	describe('RENDER: ', () => {

		it('with (isActive = false) props', () => {
			const component = render();
			expect(component.find(".btn-main-menu_active")).toHaveLength(0);
		})

		it('with (isActive = true) props', () => {
			const component = render({ isActive: true });
			expect(component.find(".btn-main-menu_active")).toHaveLength(1);
		})

	})

	describe('HANDLERS: ', () => {

		it('call handler method', () => {
			const handler = jest.fn();
			const component = render({ handler });
			component.find(".btn-main-menu").simulate('click');
			expect(handler).toHaveBeenCalledTimes(1);
		})

	})

})