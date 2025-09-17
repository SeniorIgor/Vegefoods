import React from 'react';

import FormField from '../form-field';
import Message from '../message';
import { registerFields as fields } from '../../data';

import './auth-forms.scss';

const AuthRegister = (props) => {

	const onMessageView = (err, message) => {
		if (err) return <Message message={err.message} isError={true} />;
		if (message) return <Message message={message} />;

		return null;
	}

	const onChange = (e) => {
		const { name, value } = e.target;
		props.updateValue(name, value);
	}

	const { message, errors, errorData, registerUser } = props;

	const messageView = onMessageView(errorData, message);

	const fieldsView = fields.map((item) => {
		const { id, fieldName } = item;

		return (
			<div key={id} className="form__field-wrap">
				<FormField {...item} value={props[fieldName]} onChange={onChange}
					error={errors[fieldName]} />
			</div>
		);
	})

	return (
		<div className="auth">
			<h1 className="auth__title">Register</h1>
			{messageView}
			<div className="auth__form form">
				{fieldsView}

				<button
					className="btn_order form__btn-submit"
					onClick={registerUser}
				>
					Sign Up
				</button>
			</div>
		</div>
	);
}

export default AuthRegister;