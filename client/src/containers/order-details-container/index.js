import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import OrderDetails from '../../components/order-details';
import { withAuth, withProductService } from '../../components/hoc';
import { fetchOrdering, allowCreateOrder } from '../../actions';


class OrderDetailsContainer extends Component {

	componentDidUpdate(prevProps) {
		const { allowCreate } = this.props.ordering;

		if (prevProps.ordering.allowCreate !== allowCreate && allowCreate) {
			const { name, email, phone, address, date, time } = this.props.ordering;

			this.props.fetchOrdering({ name, email, phone, address, deliveryDate: date + time });
		}
	}

	createOrder = () => {
		this.props.allowCreateOrder();
	}

	render() {
		const { countItems, orderTotal } = this.props;

		return <OrderDetails createOrder={this.createOrder} countItems={countItems}
			orderTotal={orderTotal} />;
	}
}

const mapMethodsToProps = ({ createOrder }) => ({ createOrder });

const mapStateToProps = ({ ordering, shoppingCart: { countItems, orderTotal } }) => ({
	ordering, countItems, orderTotal,
})

const mapDispatchToProps = (dispatch, { createOrder, token }) => ({
	fetchOrdering: fetchOrdering(createOrder, dispatch, token),
	allowCreateOrder: () => dispatch(allowCreateOrder())
});

export default compose(
	withAuth,
	withProductService(mapMethodsToProps),
	connect(mapStateToProps, mapDispatchToProps),
)(OrderDetailsContainer);