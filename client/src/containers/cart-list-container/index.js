import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import CartList from '../../components/cart-list';
import EmptyList from '../../components/empty-list';
import TitleView from '../../components/title-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import {
	cartTitleViewData as titleViewData,
	emptyCartData as emptyData
} from '../../data';

const CartListContainer = ({ cartItems, orderTotal, loading, error }) => {

	if (error) return <ErrorIndicator />;
	if (loading) return <Spinner />;

	if (!cartItems || cartItems.length === 0) return <EmptyList {...emptyData} />

	return (
		<Fragment>
			<TitleView {...titleViewData} />
			<CartList items={cartItems} orderTotal={orderTotal} />
		</Fragment>
	);
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, loading, error } }) => ({
	cartItems, orderTotal, loading, error
});

export default connect(mapStateToProps)(CartListContainer);