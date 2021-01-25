import React from 'react';

import { formatPrice } from '../../utils';

import './order-details.scss';

const OrderDetails = ({ countItems, orderTotal, createOrder }) => {

	return (
		<div className="ordering-details">
			<h2 className="ordering-details__title">Ваш заказ</h2>
			<div className="ordering-details__wrap">
				<span className="ordering-details__text">{`Товары (${countItems} шт)`}</span>
				<span className="ordering-details__price">{formatPrice(orderTotal)}</span>
			</div>
			<div className="ordering-details__wrap">
				<span className="ordering-details__text">Доставка</span>
				<span className="ordering-details__price">{formatPrice(299)}</span>
			</div>
			<div className="ordering-details__wrap ordering-details__wrap_result">
				<span className="ordering-details__text">Итого</span>
				<span className="ordering-details__price">{formatPrice(orderTotal + 299)}</span>
			</div>
			<div className="ordering-details__btn-wrap">
				<button className="btn_order ordering-details__btn"
					onClick={createOrder}>
					Оформить заказ
				</button>
			</div>
		</div>
	);
}

export default OrderDetails;