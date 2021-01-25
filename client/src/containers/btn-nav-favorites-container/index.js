import React from 'react';
import { connect } from 'react-redux';

import BtnNavFavorites from '../../components/btn-nav-favorites';

const BtnNavFavoritesContainer = ({ countItems }) => {
	return (
		<BtnNavFavorites countItems={countItems} />
	);
}

const mapStateToProps = ({ favorites: { favoritesItems } }) => ({
	countItems: favoritesItems.length,
})

export default connect(mapStateToProps)(BtnNavFavoritesContainer);