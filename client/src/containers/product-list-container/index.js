import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProductList from '../../components/product-list';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import { withProductService } from '../../components/hoc';
import { fetchProducts, calculateNumberPages } from '../../actions';
import { getProductsForPage } from '../../utils';

export class ProductListContainer extends Component {

	componentDidMount() {
		this.props.fetchProducts();
	}

	componentDidUpdate(prevProps) {
		const { calculateNumberPages, numberProducts, category } = this.props;

		if (prevProps.numberProducts !== numberProducts) {
			calculateNumberPages(numberProducts);
		}

		if (prevProps.category !== category) {
			this.props.fetchProducts();
		}
	}

	render() {
		const { products, loading, error } = this.props;

		if (error) return <ErrorIndicator />;
		if (loading) return <Spinner />;

		return <ProductList products={products} />
	}
}

export const mapMethodsToProps = ({ getProducts }) => ({ getProducts });

export const mapStateToProps = ({ productList, pages: { productsPerPage } }, { match }) => {
	const { products, loading, error } = productList;
	const { pageId, category } = match.params;

	return {
		products: getProductsForPage(pageId, productsPerPage, products),
		numberProducts: products.length,
		loading, error, category
	};
}

export const mapDispatchToProps = (dispatch, { getProducts, match }) => {
	return bindActionCreators({
		fetchProducts: fetchProducts(getProducts, match.params.category),
		calculateNumberPages,
	}, dispatch);
}

export default compose(
	withProductService(mapMethodsToProps),
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
)(ProductListContainer);