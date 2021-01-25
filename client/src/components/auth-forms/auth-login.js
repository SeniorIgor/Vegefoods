import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../form-field';
import Message from '../message';
import { loginFields as fields } from '../../data';

import './auth-forms.scss';

// const AuthLoginMethods = (props) => {
// 	const onChange = ({ target }) => {
// 		const { name, value } = target;
// 		props.updateValue(name, value);
// 	}

// 	return {
// 		onChange,
// 	}
// }

const AuthLogin = (props) => {
	const { loginUser, err } = props;
	const messageView = (err) ? <Message message={err.message} isError={true} /> : '';

	const onChange = ({ target }) => {
		const { name, value } = target;
		props.updateValue(name, value);
	}

	const fieldsView = fields.map((item) => {
		const { id, fieldName } = item;

		return (
			<div key={id} className="form__field-wrap">
				<FormField {...item} value={props[fieldName]} onChange={onChange}
					error={props.errors[fieldName]} />
			</div>
		);
	})

	return (
		<div className="auth">
			<h1 className="auth__title">Войти на сайт</h1>
			{messageView}
			<div className="auth__form form">
				{fieldsView}

				<div className="form__reset-wrap">
					<a className="form__reset-btn" href="#">Забыли пароль?</a>
				</div>

				<button
					className="btn_order form__btn-submit"
					onClick={loginUser}>Войти</button>
			</div>
		</div>
	);
}

AuthLogin.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	err: PropTypes.object,
	errors: PropTypes.shape({
		email: PropTypes.string,
	}),
	updateValue: PropTypes.func.isRequired,
	loginUser: PropTypes.func.isRequired,
}

export default AuthLogin;