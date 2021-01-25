import React from 'react';
import { shallow } from 'enzyme';

import AccountPopup from './index';

const setUp = (props) => shallow(<AccountPopup {...props} />)

const props = {
	isOpen: true,
	logout: () => "logout",
	closeMenu: () => "closeMenu"
}

describe("Render AccountPopup:", () => {
	let component;

	beforeEach(() => {
		component = setUp();
	})

	it('should contain .account-popup wrapper', () => {
		const wrapper = component.find(".account-popup");
		expect(wrapper.length).toBe(1);
	})

	it('render with (isOpen=true) props', () => {
		const newComponent = setUp(props);
		const isOpen = newComponent.find('.account-popup_active');
		expect(isOpen).toHaveLength(1);
	})

	it('snapshot with (isOpen=false) props', () => {
		const newComponent = setUp({ ...props, isOpen: false });
		expect(newComponent).toMatchSnapshot();
	})
})

describe("Handlers:", () => {

	it('hanlers should call fn on close menu', () => {
		const mockCallBack = jest.fn();
		const newComponent = setUp({ ...props, closeMenu: mockCallBack });
		const btns = newComponent.find('.account-popup__user-lk-link');

		expect(mockCallBack.mock.calls.length).toBe(0);

		btns.forEach((btn) => {
			btn.simulate("click");
		})

		expect(mockCallBack.mock.calls.length).toBe(2);
	})

	it('hanlers should call fn on logout', () => {
		const mockCallBack = jest.fn();
		const newComponent = setUp({ ...props, logout: mockCallBack });
		expect(mockCallBack.mock.calls.length).toBe(0);
		newComponent.find('.account-popup__user-lk-link_logout').simulate('click');
		expect(mockCallBack.mock.calls.length).toBe(1);
	})
})