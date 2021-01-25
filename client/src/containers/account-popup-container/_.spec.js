import { shallow } from 'enzyme';

import AccountPopup from '../../components/account-popup';
import { AccountPopupContainer, mapStateToProps } from './index';
import { setUp } from '../../utils';

const initialProps = {
	logout: () => { },
	isOpenAuthPopup: false,
	closeMenu: () => { },
}

const render = setUp(AccountPopupContainer, shallow, initialProps);

describe('AccountPopupContainer', () => {

	describe('render', () => {

		it('with AccountPopup', () => {
			const wrapper = render();
			expect(wrapper.find(AccountPopup)).toHaveLength(1);
		})

	})

})

describe('CONNECTION METHODS: ------------------------------------------', () => {

	it('mapStateToProps', () => {
		const state = { accountPopup: { isOpenAuthPopup: false } };
		const props = { logout: () => { } };

		expect(mapStateToProps(state, props))
			.toEqual({
				logout: props.logout,
				isOpenAuthPopup: state.accountPopup.isOpenAuthPopup
			});
	})

})