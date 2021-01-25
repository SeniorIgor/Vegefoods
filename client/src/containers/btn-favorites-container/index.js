import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BtnFavorites from '../../components/btn-favorites';
import { updateFavorites } from '../../actions';
import { withProductService, withAuth } from '../../components/hoc';

export const BtnFavoritesContainer = ({ id, isText, checkAuthUser, update, token, isFavorites }) => {

	return (
		<BtnFavorites updateFavorites={() => checkAuthUser() && update(id, token)}
			isFavorites={isFavorites} isText={isText} />
	);
}

export const mapMethodsToProps = ({ setUpdateFavorites }) => ({ setUpdateFavorites });

export const mapStateToProps = ({ favorites: { favoritesItemsMap } }, { id, token }) => {
	return ({
		isFavorites: favoritesItemsMap[id] !== undefined,
		token
	});
}

export const mapDispatchToProps = (dispatch, { setUpdateFavorites, isAuth, logout, onViewPopup }) => {
	return {
		...bindActionCreators({
			update: updateFavorites(setUpdateFavorites, onViewPopup, logout),
		}, dispatch),
		checkAuthUser: () => isAuth || onViewPopup(),
	}
}

export default compose(
	withProductService(mapMethodsToProps),
	withAuth,
	connect(mapStateToProps, mapDispatchToProps),
)(BtnFavoritesContainer);