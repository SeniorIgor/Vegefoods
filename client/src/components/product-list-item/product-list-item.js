import React from 'react';
import { Link } from 'react-router-dom';

import LoadImage from '../load-image';
import { BtnQuantityContainer, BtnFavoritesContainer } from '../../containers';
import { formatPrice } from './../../utils';

import './product-list-item.scss';

const ProductListItem = ({ product }) => {
	const { id, name, oldPrice, newPrice, imageUrl, previewUrl, discount } = product;

	return (
		<div className="product-list-item">
			<div className="product-list-item__favorits-btn">
				<BtnFavoritesContainer id={id} />
			</div>
			<Link to={`/product/${id}`} className="product-list-item__link">
				<div className="product-list-item__image-wrapper">
					<LoadImage imageUrl={imageUrl} previewUrl={previewUrl} />
				</div>
			</Link>
			{
				(discount === 0) ? null :
					<span className="product-list-item__discount">{discount}%</span>
			}
			<div className="product-list-item__text">
				<Link to={`/product/${id}`} className="product-list-item__title">{name}</Link>
				<div className="product-list-item__price-wrapper">
					{
						(discount === 0) ? null :
							<span className="product-list-item__price_discount">{formatPrice(oldPrice)}</span>
					}
					<span className="product-list-item__price">{formatPrice(newPrice)}
					</span>
				</div>
				<div className="product-list-item__btn-area">
					<BtnQuantityContainer id={id} />
				</div>
			</div>
		</div>
	);
}

export default ProductListItem;