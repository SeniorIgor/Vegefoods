import React from 'react';
import { connect } from 'react-redux';

import BtnCart from '../../components/btn-cart';

export const BtnCartContainer = ({ countItems }) => {

	return (
		<BtnCart countItems={countItems} />
	);
}

export const mapStateToProps = ({ shoppingCart: { cartItems } }) => ({
	countItems: cartItems.length,
})

export default connect(mapStateToProps)(BtnCartContainer);