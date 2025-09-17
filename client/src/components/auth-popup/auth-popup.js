import React, { Component } from 'react';

import { AuthLoginContainer, AuthRegisterContainer } from '../../containers';

import './auth-popup.scss';

export default class AuthPopup extends Component {

	state = {
		isLogin: true
	}

	onClosePopup = (event) => {
		if (event.currentTarget === event.target) this.props.onClose();
	}

	onSelectForm = (isLogin) => {
		this.setState({ isLogin });
	}

	render() {
		const { isView } = this.props;
		const { isLogin } = this.state;

		const classNames = `auth-overlay ${isView && 'auth-overlay_active'}`;
		const classLogin = `auth-overlay__toggle-btn ${isLogin && 'auth-overlay__toggle-btn_active'}`;
		const classRegister = `auth-overlay__toggle-btn ${isLogin || 'auth-overlay__toggle-btn_active'}`;

		return (
			<div className={classNames} onClick={this.onClosePopup}>
				<div className="auth-overlay__wrapper">
					<div className="auth-overlay__popup">
						<button
							className="auth-overlay__close-btn"
							onClick={this.props.onClose}
						></button>
						<div className="auth-overlay__toggle-wrap">
							<div
								className={classLogin}
								onClick={() => this.onSelectForm(true)}
							>
								Login
							</div>
							<div
								className={classRegister}
								onClick={() => this.onSelectForm(false)}
							>
								Register
							</div>
						</div>
						{isLogin ? <AuthLoginContainer /> : <AuthRegisterContainer />}
					</div>
				</div>
			</div>
		);
	}
}