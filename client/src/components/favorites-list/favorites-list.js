import React from 'react';

import ProductList from '../product-list';

import './favorites.scss';

const FavoritesList = ({ items }) => {

	return (
		<div className="favorites-list">
			<ProductList products={items} />
		</div>
	);
}

export default FavoritesList;