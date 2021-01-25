import React from 'react';

import './btn-main-menu.scss';

const BtnMainMenu = ({ isActive, handler }) => {

	const classNames = `btn-main-menu ${(isActive) ? 'btn-main-menu_active' : ''}`;

	return (
		<div className={classNames} onClick={handler} data-testid="testBtnMainMenu">
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default BtnMainMenu;