import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { OrderingContainer } from '../../containers';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import EmptyList from '../empty-list';
import TitleView from '../title-view';
import { orderingTitleViewData as titleViewData, emptyCartData as emptyData } from '../../data';

const OrderingPage = (props) => {

	const { countItems, loading, error } = props;

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

export default connect(mapStateToProps)(OrderingPage);