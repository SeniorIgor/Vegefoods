import { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BtnCartRemove from '../../components/btn-cart-remove';
import { BtnCartRemoveContainer, mapMethodsToProps, mapDispatchToProps } from './index';
import { setUp } from '../../utils';

const initialProps = {
	id: 1,
	token: '1',
	isAuth: false,
	onViewPopup: () => { },
	updateCart: () => { },
}

const renderShallow = setUp(BtnCartRemoveContainer, shallow, initialProps);

describe('BtnCartContainer:', () => {

	describe('render', () => {

		it('with BtnCartRemove', () => {
			const component = renderShallow();
			expect(component.find(BtnCartRemove)).toHaveLength(1);
		})

	})

	describe('METHODS', () => {

		const setUpRender = setUp(BtnCartRemoveContainer, render, initialProps);

		it('call updateHandler with (isAuth = false)', () => {
			const onViewPopup = jest.fn();
			const { getByRole } = setUpRender({ onViewPopup });
			userEvent.click(getByRole('button'));
			expect(onViewPopup).toHaveBeenCalledTimes(1);
		})

		it('call updateHandler with (isAuth = true)', () => {
			const updateCart = jest.fn();
			const { getByRole } = setUpRender({ isAuth: true, updateCart });
			userEvent.click(getByRole('button'));
			expect(updateCart).toHaveBeenCalledTimes(1);
		})

	})

})

describe('CONNECTION METHODS: ', () => {

	const updateCart = () => { };

	it('mapMethodsToProps', () => {
		expect(mapMethodsToProps({ updateCart }))
			.toEqual({ updateCart });
	})

	it('mapDispatchToProps', () => {
		const logout = () => { };
		const onViewPopup = () => { };
		expect(JSON.stringify(mapDispatchToProps({}, { updateCart, logout, onViewPopup })))
			.toEqual(JSON.stringify({ updateCart: () => { } }));
	})

})