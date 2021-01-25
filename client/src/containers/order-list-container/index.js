import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import OrderList from '../../components/order-list';
import EmptyList from '../../components/empty-list';
import TitleView from '../../components/title-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import { fetchOrders } from '../../actions';
import { withAuth, withProductService } from '../../components/hoc';
import {
	orderListViewData as titleViewData,
	orderListData as emptyData
} from '../../data';

const OrderListContainer = ({ orders, loading, error, fetchOrders }) => {

	useEffect(() => {
		fetchOrders();
	}, []);

	if (error) return <ErrorIndicator />;
	if (loading) return <Spinner />;

	if (!orders || orders.length === 0) return <EmptyList {...emptyData} />

	return (
		<Fragment>
			<TitleView {...titleViewData} />
			<OrderList items={orders} />
		</Fragment>
	);
}

const mapMethodsToProps = ({ getOrders }) => ({ getOrders });

const mapStateToProps = ({ orderList: { orders, loading, error } }) => ({
	orders, loading, error
});

const mapDispatchToProps = (dispatch, { getOrders, token }) => {
	return {
		fetchOrders: fetchOrders(getOrders, token, dispatch),
	}
}

export default compose(
	withProductService(mapMethodsToProps),
	withAuth,
	connect(mapStateToProps, mapDispatchToProps),
)(OrderListContainer);