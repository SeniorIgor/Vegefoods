import { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BtnFavorites from '../../components/btn-favorites';
import { BtnFavoritesContainer, mapMethodsToProps, mapStateToProps, mapDispatchToProps } from './index';
import { setUp } from '../../utils';

const initialProps = {
	id: 1,
	token: '1',
	isFavorites: false,
	isText: false,
	update: () => { },
	checkAuthUser: () => { },
}

const renderShallow = setUp(BtnFavoritesContainer, shallow, initialProps);

describe('BtnFavoritesContainer:', () => {

	describe('render', () => {

		it('with BtnFavorites', () => {
			const component = renderShallow();
			expect(component.find(BtnFavorites)).toHaveLength(1);
		})

	})

	describe('METHODS', () => {

		const setUpRender = setUp(BtnFavoritesContainer, render, initialProps);
		const update = jest.fn();

		it('call updateFavorites with (isAuth = false)', () => {
			const checkAuthUser = jest.fn().mockReturnValue(false);
			const { getByRole } = setUpRender({ checkAuthUser, update });
			userEvent.click(getByRole('button'));
			expect(checkAuthUser).toHaveBeenCalledTimes(1);
			expect(update).toHaveBeenCalledTimes(0);
		})

		it('call updateHandler with (isAuth = true)', () => {
			const checkAuthUser = jest.fn().mockReturnValue(true);
			const { getByRole } = setUpRender({ checkAuthUser, update });
			userEvent.click(getByRole('button'));
			expect(checkAuthUser).toHaveBeenCalledTimes(1);
			expect(update).toHaveBeenCalledTimes(1);
		})

	})

})

describe('CONNECTION METHODS: ', () => {

	const setUpdateFavorites = () => { };

	it('mapMethodsToProps', () => {
		expect(mapMethodsToProps({ setUpdateFavorites }))
			.toEqual({ setUpdateFavorites });
	})

	it('mapStateToProps', () => {
		const favoritesItemsMap = { '1': true };
		const id = '1';
		const token = '1';
		expect(mapStateToProps({ favorites: { favoritesItemsMap } }, { id, token }))
			.toEqual({ isFavorites: favoritesItemsMap[id], token });
	})

	it('mapDispatchToProps', () => {
		const isAuth = false;
		const logout = () => { };
		const onViewPopup = () => { };
		expect(JSON.stringify(mapDispatchToProps({}, {
			setUpdateFavorites, isAuth, logout, onViewPopup
		})))
			.toEqual(JSON.stringify({
				update: () => { },
				checkAuthUser: () => { }
			}));
	})

	describe('call checkAuthUser in mapDispatchToProps', () => {

		it('with (isAuth = true) props', () => {
			const isAuth = true;
			const logout = () => { };
			const onViewPopup = () => { };
			expect(mapDispatchToProps({}, {
				setUpdateFavorites, isAuth, logout, onViewPopup
			}).checkAuthUser())
				.toEqual(isAuth);
		})

		it('with (isAuth = false) props', () => {
			const isAuth = false;
			const logout = () => { };
			const onViewPopup = jest.fn();
			mapDispatchToProps({}, {
				setUpdateFavorites, isAuth, logout, onViewPopup
			}).checkAuthUser();
			expect(onViewPopup).toHaveBeenCalledTimes(1);
		})

	})

})