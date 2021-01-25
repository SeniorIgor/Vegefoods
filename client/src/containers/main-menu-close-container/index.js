import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { updateMainMenu } from '../../actions';

const MainMenuCloseContainer = ({ isOpenMainMenu, handler, children }) => {

	const closeHandler = ({ target }) => {
		const elem = target.closest('[data-menu]');
		// const isMenuItem = elem && elem.dataset.menu;
		// const isMenuItem = target.dataset.menu || target.parentElement.dataset.menu;

		if (isOpenMainMenu && elem) {
			handler();
		}
	}

	return (
		<span onClick={closeHandler} style={{}}>
			{children}
		</span>
	);
}

const mapStateToProps = ({ mainMenu: { isOpenMainMenu } }) => ({ isOpenMainMenu });

const mapDispatchToProps = (dispatch) => ({
	handler: () => dispatch(updateMainMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuCloseContainer);