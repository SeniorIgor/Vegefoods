import React from 'react';
import { shallow } from 'enzyme';
import { setUp } from '../../utils';

import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AuthPopup from './index';
import { AuthLoginContainer, AuthRegisterContainer } from '../../containers';

const initialState = {
	isView: false,
	onClose: () => { },
}

const render = setUp(AuthPopup, shallow, initialState);

describe('AUTH_POPUP: ', () => {

	let component;
	// let instance;
	beforeEach(() => {
		component = render();
		// instance = component.instance();
	})

	it('render component (isView=false)', () => {
		expect(component.find(".auth-overlay")).toHaveLength(1);
		expect(component.find(".auth-overlay_active")).toHaveLength(0);
	})

	it('render component (isView=false)', () => {
		const newComponent = render({ isView: true });
		expect(newComponent.find(".auth-overlay_active")).toHaveLength(1);
	})

	describe('HANDLERS: ', () => {

		it('should select Login form', () => {
			const btns = component.find(".auth-overlay__toggle-btn");
			btns.at(0).simulate("click");
			expect(component.find(AuthLoginContainer)).toHaveLength(1);
			expect(component.find(AuthRegisterContainer)).toHaveLength(0);

			btns.at(1).simulate("click");
			expect(component.find(AuthLoginContainer)).toHaveLength(0);
			expect(component.find(AuthRegisterContainer)).toHaveLength(1);
		})

		it('should close popup (click on btn)', () => {
			const onClose = jest.fn();
			const newComponent = render({ onClose });
			newComponent.find(".auth-overlay__close-btn").simulate("click");
			expect(onClose).toHaveBeenCalledTimes(1);
		})

		it('should close popup (click on area)', () => {
			const onClose = jest.fn();
			const newComponent = render({ onClose });
			newComponent.find(".auth-overlay").simulate("click", {
				target: 1,
				currentTarget: 1,
			});
			expect(onClose).toHaveBeenCalledTimes(1);
		})

		it('should not close popup (click inside area)', () => {
			const onClose = jest.fn();
			const newComponent = render({ onClose });
			newComponent.find(".auth-overlay").simulate("click", {
				target: 1,
				currentTarget: 2,
			});
			expect(onClose).toHaveBeenCalledTimes(0);
		})

	})


})