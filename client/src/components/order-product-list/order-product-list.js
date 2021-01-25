import React from 'react';
import { Link } from 'react-router-dom';

import LoadImage from '../load-image';
import { formatPrice } from '../../utils';

import './order-product-list.scss';

const OrderProductList = ({ items }) => {

	const itemsView = items.map(({ productId, name, count, price, imageUrl }) => (
		<div key={productId} className="order-product-list__item order-prod-item">
			<Link to={`/product/${productId}`} className="order-prod-item__image-wrap">
				<div className="order-prod-item__image">
					<LoadImage imageUrl={imageUrl} previewUrl={''} blur={10} />
				</div>
				{/* <img src={imageUrl} className="order-prod-item__image" /> */}
			</Link>

			<div className="order-prod-item__text-wrap">
				<Link to={`/product/${productId}`} className="order-prod-item__title">{name}</Link>

				<div className="order-prod-item__info-wrap">
					{count} <span className="order-prod-item__info-multiply">x</span> {formatPrice(price)}
				</div>
			</div>
		</div>
	))

	return (
		<div className="order-product-list">
			{itemsView}
		</div>
	);
}

export default OrderProductList;