import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import FavoritesList from '../../components/favorites-list';
import EmptyList from '../../components/empty-list';
import TitleView from '../../components/title-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import {
	favoritesTitleViewData as titleViewData,
	emptyFavoritesData as emptyData
} from '../../data';

const FavoritesListContainer = ({ favoritesItems, loading, error, history }) => {

	if (error) return <ErrorIndicator />;
	if (loading) return <Spinner />;

	if (!favoritesItems || favoritesItems.length === 0) return <EmptyList {...emptyData} />

	return (
		<Fragment>
			<TitleView {...titleViewData} />
			<FavoritesList items={favoritesItems} />
		</Fragment>
	);
}

const mapStateToProps = ({ favorites: { favoritesItems, loading, error } }) => ({
	favoritesItems, loading, error
});

export default connect(mapStateToProps)(FavoritesListContainer);