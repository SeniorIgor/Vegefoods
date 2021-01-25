import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import AccountPopup from '../../components/account-popup';
import { withAuth } from '../../components/hoc';

export const AccountPopupContainer = ({ logout, isOpenAuthPopup, closeMenu }) => {

	return (
		<AccountPopup isOpen={isOpenAuthPopup} logout={logout} closeMenu={closeMenu} />
	);
}

export const mapStateToProps = ({ accountPopup: { isOpenAuthPopup } }, { logout }) =>
	({ logout, isOpenAuthPopup: isOpenAuthPopup });

export default compose(
	withAuth,
	connect(mapStateToProps),
)(AccountPopupContainer);