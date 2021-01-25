import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import SpinnerWrapper from '../../components/spinner-wrapper';
import ErrorIndicator from '../../components/error-indicator';
import { withProductService, withAuth } from '../../components/hoc';
import {
	fetchLogin, loadedToStorage, updateLogin,
	allowLogin, clearLogin
} from '../../actions';
import { AuthLogin } from '../../components/auth-forms';

export class AuthLoginContainer extends Component {

	componentDidUpdate(prevProps) {
		const { isNewAuth, userId, token, allowCreate, email, password } = this.props.loginData;

		if (isNewAuth && isNewAuth !== prevProps.loginData.isNewAuth) {
			this.props.login({ userId, token });
			this.props.loadedToStorage();
		}

		if (allowCreate && prevProps.loginData.allowCreate !== allowCreate) {
			this.props.loginUser({ email, password });
		}
	}

	componentWillUnmount() {
		this.props.clearLogin();
	}

	render() {
		const { loginData, updateValue, allowLogin } = this.props;
		const { loading, error, email, password, errors } = loginData;

		const validateError = (error && error.name === 'ValidationError') ? error : null;
		if (error && !validateError) return <ErrorIndicator />;

		return (
			<SpinnerWrapper loading={loading}>
				<AuthLogin loginUser={allowLogin} err={validateError} {...{ email, password, errors }}
					updateValue={updateValue} />
			</SpinnerWrapper>
		)
	}
}

export const mapMethodsToProps = ({ loginUser }) => ({ loginUser });

export const mapStateToProps = ({ login: loginData }) => ({ loginData });

export const mapDispatchToProps = (dispatch, { loginUser }) => {
	return bindActionCreators({
		loginUser: fetchLogin(loginUser),
		loadedToStorage, updateValue: updateLogin, allowLogin, clearLogin
	}, dispatch);
}

export default compose(
	withProductService(mapMethodsToProps),
	withAuth,
	connect(mapStateToProps, mapDispatchToProps),
)(AuthLoginContainer);