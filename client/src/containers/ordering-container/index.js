import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Ordering from '../../components/ordering';
import ErrorIndicator from '../../components/error-indicator';
import SpinnerWrapper from '../../components/spinner-wrapper';
import {
	updateOrdering, updateOrderingAll,
	clearOrdering
} from '../../actions';
import { getEarlyDate } from '../../utils';
import { ONE_HOUR } from '../../constants';

class OrderingContainer extends Component {

	earlyDate = getEarlyDate();

	componentDidMount() {
		this.props.updateValue('time', 8 * ONE_HOUR);
		this.props.updateValue('date', this.earlyDate);
		this.updatePersonFields();
	}

	componentDidUpdate(prevProps) {
		const { name, email, ordering: { isCreated } } = this.props;

		if (name && email && prevProps.name !== name && prevProps.email !== email) {
			this.updatePersonFields();
		}

		if (isCreated && prevProps.isCreated !== isCreated) {
			this.props.history.push('/ordering-success');
		}
	}

	componentWillUnmount() {
		this.props.clearOrdering();
	}

	updatePersonFields = () => {
		const { name, email, phone, updateAllFields } = this.props;
		updateAllFields({ name, email, phone });
	}

	render() {
		const { ordering, updateValue } = this.props;
		const { loading, error, ...fields } = ordering;

		const validateError = (error && error.name === 'ValidationError') ? error : null;
		if (error && !validateError) return <ErrorIndicator />;
		// if (loading) return <Spinner />;

		return (
			<SpinnerWrapper loading={loading}>
				<Ordering {...fields} updateValue={updateValue} errorData={validateError}
					earlyDate={this.earlyDate} />
			</SpinnerWrapper>
		)
	}
}

const mapStateToProps = ({ profile: { name, email, phone }, ordering }) => ({
	name, email, phone, ordering
});

const mapDispatchToProps = {
	updateAllFields: updateOrderingAll,
	updateValue: updateOrdering,
	clearOrdering,
};

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
)(OrderingContainer);