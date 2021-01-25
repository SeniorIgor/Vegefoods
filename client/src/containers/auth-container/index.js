import React, { Component, Fragment } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthPopup from '../../components/auth-popup/auth-popup';
import { AuthProvider } from '../../components/auth-context';
import { AuthService } from '../../services';
import { withProductService } from '../../components/hoc';
import {
	fetchCart, clearCart, fetchFavorites, clearFavorites,
	fetchProfile, clearProfile, updateUser, authLogout,
	viewAuthPopup, closeAuthPopup
} from '../../actions';

export class AuthContainer extends Component {

	componentDidMount() {
		this.props.setAuthHandler(this.handlerAuthErr);

		const user = AuthService.getUser();

		if (user) {
			this.props.updateUser(user);
			this.updateData(user.token);
		}
	}

	updateData = (token) => {
		const { fetchCart, fetchFavorites, fetchProfile } = this.props;

		fetchCart(token);
		fetchFavorites(token);
		fetchProfile(token);
	}

	handlerAuthErr = () => {
		this.logout();
		this.onViewPopup();
	}

	onViewPopup = () => {
		document.body.classList.add('lock');
		this.props.viewAuthPopup();
	}

	onClosePopup = () => {
		document.body.classList.remove('lock');
		this.props.closeAuthPopup();
	}

	login = (user) => {
		AuthService.logIn(user);
		this.onClosePopup();
		this.updateData(user.token);
	}

	logout = () => {
		const { authLogout, clearCart, clearFavorites, clearProfile } = this.props;

		AuthService.logOut();
		authLogout();
		clearCart();
		clearFavorites();
		clearProfile();
	}

	render() {
		const { isView, isAuth, token } = this.props;

		const value = {
			isAuth,
			token,
			login: this.login,
			logout: this.logout,
			onViewPopup: this.onViewPopup,
			onClosePopup: this.onClosePopup,
			handlerAuthErr: this.handlerAuthErr,
		}

		return (
			<AuthProvider value={value}>
				<Fragment>
					{this.props.children}
					<AuthPopup isView={isView} onClose={this.onClosePopup} />
				</Fragment>
			</AuthProvider>
		);
	}
}

export const mapMethodsToProps = ({ setAuthHandler, getCart, getFavorites, getProfile }) => ({
	setAuthHandler, getCart, getFavorites, getProfile
});

export const mapStateToProps = ({ login: { isAuth, token }, authPopup: { isView } }) => ({ isAuth, isView, token });

export const mapDispatchToProps = (dispatch,
	{ getCart, getFavorites, getProfile }) => bindActionCreators({
		fetchCart: fetchCart(getCart),
		fetchFavorites: fetchFavorites(getFavorites),
		fetchProfile: fetchProfile(getProfile),
		clearProfile, clearCart, clearFavorites, viewAuthPopup,
		closeAuthPopup, updateUser, authLogout
	}, dispatch);


export default compose(
	withProductService(mapMethodsToProps),
	connect(mapStateToProps, mapDispatchToProps),
)(AuthContainer);