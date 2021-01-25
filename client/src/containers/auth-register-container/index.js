import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SpinnerWrapper from '../../components/spinner-wrapper';
import ErrorIndicator from '../../components/error-indicator';
import { withProductService } from '../../components/hoc';
import {
	fetchRegister, updateRegister, allowRegister,
	clearRegister
} from '../../actions';
import { AuthRegister } from '../../components/auth-forms';

export class AuthRegisterContainer extends Component {

	componentDidUpdate(prevProps) {
		const { name, email, password, confirm, allowCreate } = this.props.register;

		if (allowCreate && prevProps.register.allowCreate !== allowCreate) {
			this.props.registerUser({ name, email, password, confirm });
		}
	}

	componentWillUnmount() {
		this.props.clearRegister();
	}

	render() {
		const { register, updateValue, allowRegister } = this.props;
		const { loading, error, ...fields } = register;

		const validateError = (error && error.name === 'ValidationError') ? error : null;
		if (error && !validateError) return <ErrorIndicator />;

		return (
			<SpinnerWrapper loading={loading}>
				<AuthRegister {...fields} updateValue={updateValue}
					errorData={validateError} registerUser={allowRegister} />
			</SpinnerWrapper>
		)
	}
}

export const mapMethodsToProps = ({ registerUser }) => ({ registerUser });

export const mapStateToProps = ({ register }) => ({ register });

export const mapDispatchToProps = (dispatch, { registerUser }) => {
	return bindActionCreators({
		registerUser: fetchRegister(registerUser),
		updateValue: updateRegister,
		allowRegister, clearRegister,
	}, dispatch);
}

export default compose(
	withProductService(mapMethodsToProps),
	connect(mapStateToProps, mapDispatchToProps),
)(AuthRegisterContainer);