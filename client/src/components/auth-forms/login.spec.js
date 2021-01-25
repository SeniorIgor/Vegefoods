import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthLogin } from './index';

import Message from '../message';
import { loginFields as fields } from '../../data';
import FormField from '../form-field';

const initialProps = {
	email: '',
	password: '',
	err: null,
	errors: { email: '' },
	updateValue: () => { },
	loginUser: () => { },
};
const setUp = (props = {}) => shallow(<AuthLogin {...initialProps} {...props} />);
const setUpRender = (props = {}) => render(<AuthLogin {...initialProps} {...props} />);

describe("AUTH_LOGIN: ", () => {

	it("loginUser handler", () => {
		const loginUser = jest.fn();
		const wrapper = setUp({ loginUser });
		expect(loginUser).toHaveBeenCalledTimes(0);
		wrapper.find('.form__btn-submit').simulate('click');
		expect(loginUser).toHaveBeenCalledTimes(1);
	});

	describe('RENDER: ', () => {

		it("Message is view", () => {
			const wrapper = setUp({ err: { message: 'input not correct' } });
			expect(wrapper.find(Message)).toHaveLength(1);
		});

		it("FormFields count", () => {
			const wrapper = setUp();
			expect(wrapper.find(FormField)).toHaveLength(fields.length);
			expect(wrapper).toMatchSnapshot();
		});

		it('Name and password has props value', () => {
			const value = 'text value';
			const { getAllByDisplayValue, getByRole } = setUpRender({ email: value, password: value });
			expect(getByRole('textbox')).toHaveValue(value);

			expect(getAllByDisplayValue(value).length).toEqual(2);
		})

	})

	describe('METHODS: ', () => {

		it("change handler called updateValue", () => {
			const value = 'field';
			const fieldName = 'email';
			const updateValue = jest.fn((name, value) => `${name} ${value}`);
			setUpRender({ updateValue });
			userEvent.type(screen.getByText(/Email/i), value);
			expect(updateValue).toHaveBeenCalledTimes(value.length);
			expect(updateValue.mock.results[4].value).toEqual(`${fieldName} ${value[4]}`);
		});

	})

})