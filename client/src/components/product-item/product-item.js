import React, { Component } from 'react';

import RatingStars from './../rating-stars';
import LoadImage from '../load-image';
import { BtnQuantityContainer, BtnFavoritesContainer } from '../../containers';
import { formatPrice } from './../../utils';

import './product-item.scss';

export default class ProductItem extends Component {

	render() {
		const { product, updateCart, token, productCount } = this.props;
		const { id, name, oldPrice, newPrice, stocks, unit, description, imageUrl,
			previewUrl, reviewQuantity, rating, sold, discount } = product;

		return (
			<div className="product-item">
				<div className="container">
					<div className="product-item__wrapper">
						<div className="product-item__column">
							<LoadImage imageUrl={imageUrl} previewUrl={previewUrl} />
							{
								(discount === 0) ? null :
									<span className="product-item__discount">{discount}%</span>
							}
						</div>
						<div className="product-item__column">
							<h2 className="product-item__title">{name}</h2>
							<div className="product-item__rating rating">
								<div className="rating__stars">
									<RatingStars rating={Math.ceil(rating)} />
								</div>
								<div className="rating__review">
									<span className="rating__review-quantity">{reviewQuantity}</span>
										отзывов
								</div>
								<div className="rating__favorits-wrap">
									<BtnFavoritesContainer id={id} isText={true} />
								</div>
								<div className="rating__sold">
									Купили более
										<span className="rating__sold-quantity">{sold}</span>
										раз
									</div>
							</div>

							<div className="product-item__unit-price">
								Цена за {unit}
							</div>

							<div className="product-item__price-wrapper">
								{
									(discount === 0) ? null :
										<span className="product-item__price product-item__price_discount">
											{formatPrice(oldPrice)}
										</span>
								}
								<span className="product-item__price">{formatPrice(newPrice)}</span>
							</div>

							<div className="product-item__description">
								{description}
							</div>

							<div className="product-item__avaliable avaliable">
								<span className="avaliable__quantity">{stocks}</span>
								<span className="avaliable__unit">{unit}</span>
									доступно
							</div>

							<div className="product-item__quantity">
								<BtnQuantityContainer id={id} />
								{/* <div className="product-item__favorits-wrap">
									<BtnFavoritesContainer id={id} isText={true} />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}