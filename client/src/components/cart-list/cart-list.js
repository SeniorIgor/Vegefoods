import React from 'react';
import { Link } from 'react-router-dom';

import ProductCards from '../product-cards';
import { formatPrice } from '../../utils';

import './cart-list.scss';

const CartList = ({ items, orderTotal }) => {

	return (
		<div className="cart-list">
			<div className="container">
				<div className="cart-list__wrap">
					<div className="cart-list__header">

					</div>
					<ProductCards items={items} />
				</div>
				<div className="cart-list__total-wrap">
					<p className="cart-list__total-text">Total to Pay:</p>
					<p className="cart-list__total-price">{formatPrice(orderTotal)}</p>
				</div>
				<div className="cart-list__btn-wrap">
					<Link to="/ordering" className="btn_order">Checkout</Link>
				</div>
			</div>
		</div>
	);
}

export default CartList;