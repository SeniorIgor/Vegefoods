import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormField from './index';

const initialProps = {
	title: '',
	fieldName: '',
	id: 'field',
	value: '',
	error: '',
	type: 'text',
	onChange: () => 'test',
}

const setUpShallow = (props) => shallow(<FormField {...initialProps} {...props} />);
const setUp = (props) => render(<FormField {...initialProps} {...props} />);

describe("FORM_FIELD: ", () => {

	it('render title', () => {
		const title = 'Title';
		const { getByText } = setUp({ title });
		expect(getByText(title)).toBeInTheDocument();
	})

	it('render with (input value) props', () => {
		const value = 'text value';
		const { getByRole } = setUp({ value });
		expect(getByRole('textbox')).toHaveValue(value);
	})

	it('render with (onChange function) props', () => {
		const value = 'Text';
		const onChange = jest.fn();
		const { getByRole } = setUp({ onChange });
		userEvent.type(getByRole('textbox'), value);
		expect(onChange.mock.calls.length).toEqual(value.length);
	})

	it('render with (error=false) props', () => {
		const { queryByTestId, getByRole } = setUp();
		expect(getByRole('textbox')).toHaveClass('form-field__input');
		expect(getByRole('textbox')).not.toHaveClass('form-field__input_error');

		expect(queryByTestId('text-error')).not.toBeInTheDocument();
	})

	it('snapshot with (error=true) props', () => {
		const error = 'error';
		const { getByTestId, getByRole } = setUp({ error });
		expect(getByRole('textbox')).toHaveClass('form-field__input_error');

		expect(getByTestId('text-error')).toHaveTextContent(error);
	})

	it('render with (type) props', () => {
		const type = 'password';
		const wrapper = setUpShallow({ type });
		expect(wrapper.find('.form-field__input').prop('type')).toEqual(type);
	})

	it('render with (id) props', () => {
		const id = 'password';
		const wrapper = setUpShallow({ id });
		expect(wrapper.find('.form-field__input').prop('id')).toEqual(id);
		expect(wrapper.find('.form-field__title').prop('htmlFor')).toEqual(id);
	})

	it('render with (name) props', () => {
		const fieldName = 'password';
		const wrapper = setUpShallow({ fieldName });
		expect(wrapper.find('.form-field__input').prop('name')).toEqual(fieldName);
	})

})