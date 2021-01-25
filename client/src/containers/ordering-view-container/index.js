import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { OrderingContainer } from '../../containers';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import EmptyList from '../../components/empty-list';
import TitleView from '../../components/title-view';
import {
	orderingTitleViewData as titleViewData,
	emptyCartData as emptyData
} from '../../data';

const OrderingViewContainer = () => {

	const { countItems, loading, error } = this.props;

	if (error) return <ErrorIndicator />;
	if (loading) return <Spinner />;
	if (!countItems) return <EmptyList {...emptyData} />

	return (
		<Fragment>
			<TitleView {...titleViewData} />
			<OrderingContainer />
		</Fragment>
	)
}

const mapStateToProps = ({ shoppingCart: { countItems, loading, error } }) => ({
	countItems, loading, error
});

export default connect(mapStateToProps)(OrderingViewContainer);