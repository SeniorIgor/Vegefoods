import { shallow } from 'enzyme';

import ErrorIndicator from '../../components/error-indicator';
import { AuthRegister } from '../../components/auth-forms';
import {
	AuthRegisterContainer, mapMethodsToProps,
	mapStateToProps, mapDispatchToProps
} from './index';
import { setUp, ValidationError } from '../../utils';

const initialProps = {
	register: {
		name: '',
		email: '',
		password: '',
		confirm: '',
		allowCreate: false,
		errors: {
			name: '',
			email: '',
			password: '',
			confirm: '',
		},
		loading: false,
		error: false,
	},
	registerUser: () => { },
	clearRegister: () => { },
	updateValue: () => { },
	allowRegister: () => { },
}

const render = setUp(AuthRegisterContainer, shallow, initialProps);

describe('AuthRegisterContainer:', () => {

	describe('render', () => {

		it('with AuthRegister', () => {
			const component = render();
			expect(component.find(AuthRegister)).toHaveLength(1);
		})

		it('with Error', () => {
			const error = { name: 'Error' };
			const component = render({
				register: {
					...initialProps.register,
					error
				}
			});
			expect(component.find(ErrorIndicator)).toHaveLength(1);
			expect(component.find(AuthRegister)).toHaveLength(0);
		})

		it('with ValidationError', () => {
			const error = { name: 'ValidationError' };
			const component = render({
				register: {
					...initialProps.register,
					error
				}
			});
			expect(component.find(ErrorIndicator)).toHaveLength(0);
			expect(component.find(AuthRegister)).toHaveLength(1);
		})

	})

	describe('LIFE_CYCLE METHODS:', () => {

		describe('componentDidUpdate:', () => {

			let registerUser;
			let component;
			beforeEach(() => {
				registerUser = jest.fn();
				component = render({ registerUser });
			})

			it('with (allowCreate) props', () => {
				const newProps = {
					register: {
						...initialProps.register,
						allowCreate: true,
					}
				}
				component.setProps(newProps);
				expect(registerUser).toHaveBeenCalledTimes(1);
			})

			it('with (email) props', () => {
				const newProps = {
					register: {
						...initialProps.register,
						email: 'email',
					}
				}
				component.setProps(newProps);
				expect(registerUser).toHaveBeenCalledTimes(0);
			})

		})

		it('componentWillUnmount', () => {
			const clearRegister = jest.fn();
			const component = render({ clearRegister });
			component.unmount();
			expect(clearRegister).toHaveBeenCalledTimes(1);
		})

	})

})

describe('CONNECTION METHODS: ', () => {

	const registerUser = () => { };

	it('mapMethodsToProps', () => {

		expect(mapMethodsToProps({ registerUser })).toEqual({ registerUser });
	})

	it('mapStateToProps', () => {
		const register = [1, 2, 3];
		expect(mapStateToProps({ register })).toEqual({ register });
	})

	it('mapDispatchToProps', () => {

		expect(JSON.stringify(mapDispatchToProps({}, { registerUser })))
			.toEqual(JSON.stringify({
				registerUser,
				updateValue: () => { }, allowRegister: () => { },
				clearRegister: () => { },
			}))

	})

})