import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import BtnCartRemove from '../../components/btn-cart-remove';
import { updateShoppingCart } from '../../actions';
import { withProductService, withAuth } from '../../components/hoc';

export const BtnCartRemoveContainer = ({ id, updateCart, token, isAuth, onViewPopup }) => {

	const updateHandler = () => {
		if (!isAuth) return onViewPopup();

		updateCart(id, 0, token);
	}

	return (
		<BtnCartRemove updateCart={updateHandler} />
	);
}

export const mapMethodsToProps = ({ updateCart }) => ({ updateCart });

export const mapDispatchToProps = (dispatch, { updateCart, logout, onViewPopup }) => {
	return {
		updateCart: updateShoppingCart(updateCart, logout, onViewPopup, dispatch),
	}
}

export default compose(
	withProductService(mapMethodsToProps),
	withAuth,
	connect(null, mapDispatchToProps),
)(BtnCartRemoveContainer);