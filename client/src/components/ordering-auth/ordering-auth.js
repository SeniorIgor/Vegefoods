import React from 'react';

import './ordering-auth.scss';

const fields = [
	{
		title: "Имя",
		fieldName: "name",
		id: "ordering-field-name",
		type: "text",
	},
	{
		title: "Email",
		fieldName: "email",
		id: "ordering-field-email",
		type: "text",
	},
	{
		title: "Телефон",
		fieldName: "phone",
		id: "ordering-field-phone",
		type: "text",
	},
];

const OrderingAuth = () => {

	return (
		<div className="ordering-auth">
			<h2 className="ordering-auth__header">Личные данные</h2>

			<div className="auth__form auth-form">
				<div className="auth-form__field-wrap">
					<label className="auth-form__title" htmlFor="register-field-name">Имя</label>
					<input className="auth-form__field" type="text" id="register-field-name" name="name"
						onChange={this.onFieldChange} value={name} />
				</div>
				<div className="auth-form__field-wrap">
					<label className="auth-form__title" htmlFor="register-field-email">Email</label>
					<input className="auth-form__field" type="text" id="register-field-email" name="email"
						onChange={this.onFieldChange} value={email} />
				</div>
				<div className="auth-form__field-wrap">
					<label className="auth-form__title" htmlFor="register-field-password">Пароль</label>
					<input className="auth-form__field" type="password" id="register-field-password" name="password"
						onChange={this.onFieldChange} value={password} />
				</div>
				<div className="auth-form__field-wrap">
					<label className="auth-form__title" htmlFor="register-field-confirm">Повторите пароль</label>
					<input className="auth-form__field" type="password" id="register-field-confirm" name="confirm"
						onChange={this.onFieldChange} value={confirm} />
				</div>

				<button
					className="auth-form__btn-submit"
					onClick={() => registerUser({ ...this.state })}
					disabled={loading}>Зарегистрироваться</button>
			</div>
		</div>
	);
}

export default OrderingAuth;