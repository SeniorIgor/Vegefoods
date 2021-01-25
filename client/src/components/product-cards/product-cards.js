import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { BtnQuantityContainer, BtnFavoritesContainer, BtnCartRemoveContainer } from '../../containers';
import { formatPrice } from '../../utils';

import './product-cards.scss';

const ProductCards = ({ items }) => {
	const productCards = items.map(({ productId, name, miniUrl, newPrice, oldPrice,
		total, discount, count, unit }) => (
		<li key={productId} className="product-cards__card product-card">
			<Link to={`/product/${productId}`} className="product-card__image-wrap">
				<img src={miniUrl} className="product-card__image" />
			</Link>

			<div className="product-card__text-wrap">
				<Link to={`/product/${productId}`} className="product-card__title">{name}</Link>

				<div className="product-card__info-wrap">
					{count} {unit} <span className="product-card__info-multiply">x</span> {formatPrice(newPrice)}
				</div>

				<div className="product-card__price-wrap">
					<p className="product-card__full-price">{formatPrice(total)}</p>
					{
						(discount > 0) ? (
							<Fragment>
								<p className="product-card__old-price">{formatPrice(oldPrice * count)}</p>
								<p className="product-card__discount">- {discount}%</p>
							</Fragment>
						) : null
					}
				</div>
			</div>

			<div className="product-card__quantity-wrap">
				<BtnQuantityContainer id={productId} />
			</div>
			<div className="product-card__favorits-btn">
				<BtnFavoritesContainer id={productId} />
			</div>
			<div className="product-card__remove-btn">
				<BtnCartRemoveContainer id={productId} />
			</div>
			{/* <button className="product-card__remove-btn remove-btn"
				onClick={(productId) => updateCart(productId)}
			></button> */}
		</li>
	));

	return (
		<ul className="product-cards">
			{productCards}
		</ul>
	)
}

export default ProductCards;