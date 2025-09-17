import React, { Fragment } from 'react';

import TitleView from '../title-view';
import { ProductListContainer, CategoryListContainer, PaginationContainer } from './../../containers';
import RatingStars from './../rating-stars';

const titleViewData = {
	title: "Product Catalog",
	text: "Home Goods"
};

const ProductsPage = () => {
	return (
		<Fragment>
			<TitleView {...titleViewData} />
			<CategoryListContainer />
			<ProductListContainer />
			<PaginationContainer />
		</Fragment>
	);
}

export default ProductsPage;