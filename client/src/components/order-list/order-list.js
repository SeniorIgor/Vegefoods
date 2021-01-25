import React from 'react';

import { OrderItemContainer } from '../../containers';

import './order-list.scss';

const OrderList = ({ items }) => {

	const itemsView = items.map((item) => (

		<div key={item.orderId} className="order-list__item">
			<OrderItemContainer item={item} />
		</div>
	))

	return (
		<div className="order-list">
			<div className="container">
				<div className="order-list__wrap">
					{itemsView}
				</div>
			</div>
		</div>
	);
}

export default OrderList;