import { shallow } from 'enzyme';
import { setUp } from '../../utils';

// import { render as renderComponent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import BtnAuth from './index';

const initialState = {
	isAuth: true,
	onViewAuth: () => { },
	onViewAccount: () => { },
	onCloseAccount: () => { },
}

const render = setUp(BtnAuth, shallow, initialState);
const getMenuCloseEvent = (isContins) => ({
	currentTarget: {
		contains: () => isContins,
		closest: () => ({
			removeEventListener: () => { }
		})
	},
	relatedTarget: { id: 1 }
})

const getMenuOpenEvent = (menuCloseEvent, stopPropagation) => ({
	currentTarget: {
		parentElement: {
			addEventListener: (str, handler) => handler(menuCloseEvent)
		}
	},
	stopPropagation,
})

describe('AUTH_POPUP: ', () => {

	// 12-13,18-24,29-31

	it('render component (isView=false)', () => {
		// const component = render();
		// expect(component.find(".auth-overlay")).toHaveLength(1);
		// expect(component.find(".auth-overlay_active")).toHaveLength(0);
	})

	describe('HANDLERS: ', () => {

		describe('should call onAuthClick', () => {

			let onViewAuth;
			let stopPropagation;
			beforeEach(() => {
				onViewAuth = jest.fn();
				stopPropagation = jest.fn();
			})

			it('for auth user', () => {
				const component = render({ onViewAuth });
				const btn = component.find(".btn-auth__btn");
				btn.simulate("click", { stopPropagation });
				expect(onViewAuth).toHaveBeenCalledTimes(0);
				expect(stopPropagation).toHaveBeenCalledTimes(1);
			})

			it('for not auth user', () => {
				const component = render({ onViewAuth, isAuth: false });
				const btn = component.find(".btn-auth__btn");
				btn.simulate("click", { stopPropagation });
				expect(onViewAuth).toHaveBeenCalledTimes(1);
				expect(stopPropagation).toHaveBeenCalledTimes(0);
			})

		})

		describe('should call onUserMenuOpen', () => {

			let onCloseAccount;
			let onViewAccount;
			let stopPropagation;
			beforeEach(() => {
				onCloseAccount = jest.fn();
				onViewAccount = jest.fn();
				stopPropagation = jest.fn();
			})

			it('for auth user with call closeMenu', () => {
				const closeEvent = getMenuCloseEvent(false);
				const openEvent = getMenuOpenEvent(closeEvent, stopPropagation);

				const component = render({ onViewAccount, onCloseAccount });
				const btn = component.find(".btn-auth__btn");
				btn.simulate("mouseOver", openEvent);

				expect(onViewAccount).toHaveBeenCalledTimes(1);
				expect(onCloseAccount).toHaveBeenCalledTimes(1);
			})

			it('for auth user without call closeMenu', () => {
				const closeEvent = getMenuCloseEvent(true);
				const openEvent = getMenuOpenEvent(closeEvent, stopPropagation);

				const component = render({ onViewAccount, onCloseAccount });
				const btn = component.find(".btn-auth__btn");
				btn.simulate("mouseOver", openEvent);

				expect(onViewAccount).toHaveBeenCalledTimes(1);
				expect(onCloseAccount).toHaveBeenCalledTimes(0);
			})

			it('for not auth user', () => {
				const openEvent = getMenuOpenEvent({}, stopPropagation);
				const component = render({ isAuth: false });
				const btn = component.find(".btn-auth__btn");
				btn.simulate("mouseOver", openEvent);
				expect(stopPropagation).toHaveBeenCalledTimes(1);
			})

		})

	})

})