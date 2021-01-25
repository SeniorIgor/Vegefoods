import React, { useState } from 'react';

import OrderItem from '../../components/order-item';

const OrderItemContainer = ({ item }) => {

	const [isView, setView] = useState(false);

	const onView = () => setView(!isView);

	return <OrderItem item={item} isView={isView} onView={onView} />
}

export default OrderItemContainer;