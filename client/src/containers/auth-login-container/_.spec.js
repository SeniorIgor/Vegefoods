import { shallow } from 'enzyme';

import ErrorIndicator from '../../components/error-indicator';
import { AuthLogin } from '../../components/auth-forms';
import {
	AuthLoginContainer, mapMethodsToProps,
	mapStateToProps, mapDispatchToProps
} from './index';
import { setUp, ValidationError } from '../../utils';

const initialProps = {
	loginData: {
		isNewAuth: false,
		userId: '1',
		token: '1',
		allowCreate: false,
		email: '1',
		password: '1',
		errors: {
			email: '',
		},
		loading: false,
		error: null,
	},
	updateValue: () => { },
	allowLogin: () => { },
	login: () => { },
	loadedToStorage: () => { },
	loginUser: () => { },
}

const render = setUp(AuthLoginContainer, shallow, initialProps);

describe('AuthLoginContainer:', () => {

	describe('render', () => {

		it('with AuthLogin', () => {
			const component = render();
			expect(component.find(AuthLogin)).toHaveLength(1);
		})

		it('with Error', () => {
			const error = { name: 'Error' };
			const component = render({
				loginData: {
					...initialProps.loginData,
					error
				}
			});
			expect(component.find(ErrorIndicator)).toHaveLength(1);
			expect(component.find(AuthLogin)).toHaveLength(0);
		})

		it('with ValidationError', () => {
			const error = { name: 'ValidationError' };
			const component = render({
				loginData: {
					...initialProps.loginData,
					error
				}
			});
			expect(component.find(ErrorIndicator)).toHaveLength(0);
			expect(component.find(AuthLogin)).toHaveLength(1);
		})


	})

	describe('LIFE_CYCLE METHODS:', () => {

		describe('componentDidUpdate:', () => {

			let component;
			let login;
			let loadedToStorage;
			let loginUser;
			beforeEach(() => {
				login = jest.fn();
				loadedToStorage = jest.fn();
				loginUser = jest.fn();
				component = render({ login, loadedToStorage, loginUser });
			})

			it('with (isNewAuth) props', () => {
				const newProps = {
					loginData: {
						...initialProps.loginData,
						isNewAuth: true,
					}
				}
				component.setProps(newProps);
				expect(login).toHaveBeenCalledTimes(1);
				expect(loadedToStorage).toHaveBeenCalledTimes(1);
			})

			it('with (allowCreate) props', () => {
				const newProps = {
					loginData: {
						...initialProps.loginData,
						allowCreate: true,
					}
				}
				component.setProps(newProps);
				expect(loginUser).toHaveBeenCalledTimes(1);
			})

		})

		it('componentWillUnmount', () => {
			const clearLogin = jest.fn();
			const component = render({ clearLogin });
			component.unmount();
			expect(clearLogin).toHaveBeenCalledTimes(1);
		})

	})

})

describe('CONNECTION METHODS: ', () => {

	const loginUser = () => { };

	it('mapMethodsToProps', () => {

		expect(mapMethodsToProps({ loginUser }))
			.toEqual({ loginUser });
	})

	it('mapStateToProps', () => {
		const loginData = [1, 2, 3];
		expect(mapStateToProps({ login: loginData }))
			.toEqual({ loginData });
	})

	it('mapDispatchToProps', () => {

		expect(JSON.stringify(mapDispatchToProps({}, { loginUser })))
			.toEqual(JSON.stringify({
				loginUser,
				loadedToStorage: () => { }, updateValue: () => { },
				allowLogin: () => { }, clearLogin: () => { }
			}))
	})

})