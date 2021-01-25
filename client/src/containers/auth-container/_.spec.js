import { shallow } from 'enzyme';

import AuthPopup from '../../components/auth-popup/auth-popup';
import {
	AuthContainer, mapStateToProps,
	mapDispatchToProps, mapMethodsToProps
} from './index';
import { AuthService } from '../../services';
import { setUp } from '../../utils';

const initialProps = {
	isView: false,
	isAuth: false,
	token: '',
	children: '',
	viewAuthPopup: () => { },
	closeAuthPopup: () => { },
	// 
	updateUser: () => { },
	fetchCart: () => { },
	fetchFavorites: () => { },
	fetchProfile: () => { },
	// 
	authLogout: () => { },
	clearCart: () => { },
	clearFavorites: () => { },
	clearProfile: () => { },
}

jest.mock('../../services/auth-service.js');
const render = setUp(AuthContainer, shallow, initialProps);
AuthService.getUser.mockImplementation(() => ({ token: 1 }));
AuthService.logIn.mockImplementation();
AuthService.logOut.mockImplementation();

describe('AuthContainer', () => {

	describe('render', () => {

		it('with AuthPopup', () => {
			const component = render();
			expect(component.find(AuthPopup)).toHaveLength(1);
		})

	})

	describe('LIFE_CYCLE METHODS: ', () => {

		let updateUser;
		let fetchCart;
		let fetchFavorites;
		let fetchProfile;
		beforeEach(() => {
			updateUser = jest.fn();
			fetchCart = jest.fn();
			fetchFavorites = jest.fn();
			fetchProfile = jest.fn();
		})

		it('componentDidMount with auth user', () => {
			AuthService.getUser.mockImplementationOnce(() => ({ token: 1 }));
			const component = render({ updateUser, fetchCart, fetchFavorites, fetchProfile });
			expect(updateUser).toHaveBeenCalledTimes(1);
			expect(fetchCart).toHaveBeenCalledTimes(1);
			expect(fetchFavorites).toHaveBeenCalledTimes(1);
			expect(fetchProfile).toHaveBeenCalledTimes(1);
		})

		it('componentDidMount with not auth user', () => {
			AuthService.getUser.mockImplementationOnce(() => undefined);
			const component = setUp({ updateUser, fetchCart, fetchFavorites, fetchProfile });
			expect(updateUser).toHaveBeenCalledTimes(0);
			expect(fetchCart).toHaveBeenCalledTimes(0);
			expect(fetchFavorites).toHaveBeenCalledTimes(0);
			expect(fetchProfile).toHaveBeenCalledTimes(0);
		})

	})

	describe('COMPONENT METHODS: ', () => {

		let fetchCart;
		let viewAuthPopup;
		let closeAuthPopup;
		let component;
		let instance;
		beforeEach(() => {
			fetchCart = jest.fn();
			viewAuthPopup = jest.fn();
			closeAuthPopup = jest.fn();
			component = render({ fetchCart, viewAuthPopup, closeAuthPopup });
			instance = component.instance();
		})

		it('call viewAuthPopup', () => {
			instance.onViewPopup();
			expect(viewAuthPopup).toHaveBeenCalledTimes(1);
		})

		it('call onClosePopup', () => {
			instance.onClosePopup();
			expect(closeAuthPopup).toHaveBeenCalledTimes(1);
		})

		it('call login', () => {
			instance.login({ token: 1 });
			expect(fetchCart).toHaveBeenCalledTimes(2);
			expect(closeAuthPopup).toHaveBeenCalledTimes(1);
		})

		it('call logout', () => {
			const authLogout = jest.fn();
			const clearCart = jest.fn();
			const clearFavorites = jest.fn();
			const clearProfile = jest.fn();
			const newComponent = render({ authLogout, clearCart, clearFavorites, clearProfile });
			const newInstance = newComponent.instance();
			newInstance.logout();
			expect(authLogout).toHaveBeenCalledTimes(1);
			expect(clearCart).toHaveBeenCalledTimes(1);
			expect(clearFavorites).toHaveBeenCalledTimes(1);
			expect(clearProfile).toHaveBeenCalledTimes(1);
		})

	})

})

describe('CONNECTION METHODS: ', () => {

	it('mapDispatchToProps', () => {
		const getCart = () => { };
		const getFavorites = () => { };
		const getProfile = () => { };

		expect(JSON.stringify(mapDispatchToProps({}, { getCart, getFavorites, getProfile })))
			.toEqual(JSON.stringify({
				getCart, getFavorites, getProfile, clearProfile: () => { },
				clearCart: () => { }, clearFavorites: () => { },
				viewAuthPopup: () => { }, closeAuthPopup: () => { },
				updateUser: () => { }, authLogout: () => { }
			}))
	})

	it('mapStateToProps', () => {
		const isAuth = false;
		const isView = false;
		const token = '1';
		expect(mapStateToProps({ login: { isAuth, token }, authPopup: { isView } }))
			.toEqual({ isAuth, isView, token });
	})

	it('mapMethodsToProps', () => {
		const getCart = () => { };
		const getFavorites = () => { };
		const getProfile = () => { };

		expect(mapMethodsToProps({ getCart, getFavorites, getProfile }))
			.toEqual({ getCart, getFavorites, getProfile });
	})

})