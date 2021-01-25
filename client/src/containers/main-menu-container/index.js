import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MainMenu from '../../components/main-menu';
import { updateMainMenu } from '../../actions';
import { withAuth } from '../../components/hoc';

const MainMenuContainer = ({ isOpenMainMenu, handler, isAuth }) => {

	return (
		<MainMenu isActive={isOpenMainMenu} handler={handler} isAuth={isAuth} />
	);
}

const mapStateToProps = ({ mainMenu: { isOpenMainMenu } }) => ({ isOpenMainMenu });

const mapDispatchToProps = (dispatch) => ({
	handler: () => dispatch(updateMainMenu()),
})

export default compose(
	withAuth,
	connect(mapStateToProps, mapDispatchToProps),
)(MainMenuContainer);