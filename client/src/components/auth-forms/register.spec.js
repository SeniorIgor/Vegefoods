import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthRegister } from './index';

import { registerFields as fields } from '../../data';
import FormField from '../form-field';

const initialProps = {
	name: '',
	email: '',
	password: '',
	confirm: '',
	errors: {
		name: '',
		email: '',
		password: '',
		confirm: '',
	},
	message: null,
	errorData: null,
	updateValue: () => { },
	registerUser: () => { },
};
const setUp = (props = {}) => shallow(<AuthRegister {...initialProps} {...props} />);
const setUpRender = (props = {}) => render(<AuthRegister {...initialProps} {...props} />);

describe("AUTH_REGISTER: ", () => {

	it("registerUser handler", () => {
		const registerUser = jest.fn();
		const { getByRole } = setUpRender({ registerUser });
		const button = getByRole('button');
		expect(registerUser).toHaveBeenCalledTimes(0);
		button.click();
		expect(registerUser).toHaveBeenCalledTimes(1);
	});

	describe('RENDER: ', () => {

		it("Message is view", () => {
			const message = 'User has been created';
			const { getByText } = setUpRender({ message });
			expect(getByText(message)).toHaveClass('message');
			expect(getByText(message)).not.toHaveClass('message_error');
		});

		it("Error message is view", () => {
			const errorData = { message: 'User not created' };
			const { getByText } = setUpRender({ errorData });
			expect(getByText(errorData.message)).toHaveClass('message_error');
		});

		it("FormFields count", () => {
			const wrapper = setUp();
			expect(wrapper.find(FormField)).toHaveLength(fields.length);
			expect(wrapper).toMatchSnapshot();
		});

		it('Name, email, password and confirm has props value', () => {
			const value = 'text value';
			const { getAllByDisplayValue } = setUpRender({
				name: value, email: value, password: value, confirm: value
			});
			expect(getAllByDisplayValue(value).length).toEqual(4);
		})

	})

	describe('METHODS: ', () => {

		it("change handler called updateValue", () => {
			const value = 'field';
			const fieldName = 'email';
			const updateValue = jest.fn((name, value) => `${name} ${value}`);
			const { getByText } = setUpRender({ updateValue });
			userEvent.type(getByText(/Email/i), value);
			expect(updateValue).toHaveBeenCalledTimes(value.length);
			expect(updateValue.mock.results[4].value).toEqual(`${fieldName} ${value[4]}`);
		});

	})

})