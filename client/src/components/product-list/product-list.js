import React from 'react';

import ProductListItem from '../product-list-item';

import './product-list.scss';

const ProductList = ({ products }) => {

	const productsView = products.map((product) => (
		<div key={product.id} className="product-list__item">
			<ProductListItem product={product} />
		</div>
	));

	return (
		<div className="product-list">
			<div className="container">
				<div className="product-list__list-goods">
					{productsView}
				</div>
			</div>
		</div>
	);
}

export default ProductList;
