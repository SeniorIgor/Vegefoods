import React, { Fragment } from 'react';

import TitleView from '../title-view';
import ProductItemContainer from './../../containers/product-item-container';

const titleViewData = {
	title: "Продукт",
	text: "Полезные продукты"
};

const ProductPage = () => {
	return (
		<Fragment>
			<TitleView {...titleViewData} />
			<ProductItemContainer />
		</Fragment>
	);
}

export default ProductPage;