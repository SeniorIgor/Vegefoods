import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProductItem from '../../components/product-item';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import { withProductService } from '../../components/hoc';
import { fetchProduct } from '../../actions';

class ProductItemContainer extends Component {

	componentDidMount() {
		this.props.fetchProduct();
	}

	render() {
		const { product, loading, error } = this.props;

		if (error) return <ErrorIndicator />;
		if (loading) return <Spinner />;

		return <ProductItem product={product} />;
	}
}

const mapMethodsToprops = ({ getProductById }) => ({ getProductById });

const mapStateToProps = ({ productItem: { product, loading, error } }) => ({
	product, loading, error,
});

const mapDispatchToProps = (dispatch, { getProductById, match }) => ({
	fetchProduct: fetchProduct(getProductById, match.params.productId, dispatch),
})

export default compose(
	withProductService(mapMethodsToprops),
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
)(ProductItemContainer);