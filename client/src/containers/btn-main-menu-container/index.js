import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BtnMainMenu from '../../components/btn-main-menu';
import { updateMainMenu } from '../../actions';

export const BtnMainMenuContainer = ({ isOpenMainMenu, handler }) => {

	return (
		<BtnMainMenu isActive={isOpenMainMenu} handler={handler} />
	);
}

export const mapStateToProps = ({ mainMenu: { isOpenMainMenu } }) => ({ isOpenMainMenu });

export const mapDispatchToProps = (dispatch) => bindActionCreators({
	handler: updateMainMenu,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BtnMainMenuContainer);