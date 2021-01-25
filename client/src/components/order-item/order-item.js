import React from 'react';

import OrderProductList from '../order-product-list';
import { formatDateTime, formatPrice } from '../../utils';

import './order-item.scss';

const OrderItem = ({ item, isView, onView }) => {
	const { statusName, orderNumber, address, orderDate,
		deliveryDate, totalPrice, deliveryPrice, products } = item;

	const classNames = `order-item ${(isView) ? 'order-item__active' : ''}`;

	return (
		<div className={classNames}>
			<div className="order-item__header">
				<h2 className="order-item__title">Заказ № {orderNumber}</h2>
				{/* <div className="order-item__status">{statusName}</div> */}
				<div className="order-item__order-date">от {formatDateTime(orderDate)}</div>
				<div className="order-item__price-wrap">
					<div className="order-item__price">{formatPrice(totalPrice + deliveryPrice)}</div>
				</div>
			</div>
			<div className="order-item__body">
				<h3 className="order-item__section-title">О заказе</h3>
				<div className="order-item__section">
					<div className="order-item__label">Статус заказа</div>
					<div className="order-item__value">{statusName}</div>
				</div>
				<div className="order-item__section">
					<div className="order-item__label">Стоимость товаров</div>
					<div className="order-item__value">{formatPrice(totalPrice)}</div>
				</div>

				<h3 className="order-item__section-title">Доставка</h3>
				<div className="order-item__section">
					<div className="order-item__label">Дата доставки</div>
					<div className="order-item__value">{formatDateTime(deliveryDate)}</div>
				</div>
				<div className="order-item__section">
					<div className="order-item__label">Адрес доставки</div>
					<div className="order-item__value">{address}</div>
				</div>
				<div className="order-item__section">
					<div className="order-item__label">Стоимость доставки</div>
					<div className="order-item__value">{formatPrice(deliveryPrice)}</div>
				</div>
			</div>

			<div className="order-item__btn-wrap">
				<button className="btn_order order-item__btn"
					onClick={onView}>Подробнее
					<i className="order-item__icon"></i>
				</button>
			</div>

			{
				(!isView) ? null : (
					<div className="order-item__products-wrap">
						{/* <h2 className="order-item__product-title">Состав заказа</h2> */}
						<OrderProductList items={products} />
					</div>
				)
			}
		</div>
	);
}

export default OrderItem;