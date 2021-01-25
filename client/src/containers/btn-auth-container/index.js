import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import BtnAuth from '../../components/btn-auth';
import { withAuth } from '../../components/hoc';
import * as actions from '../../actions/account-popup';

export const BtnAuthContainer = ({ isAuth, onViewPopup, viewAccountPopup, closeAccountPopup }) => {
	return (
		<BtnAuth isAuth={isAuth} onViewAuth={onViewPopup} onViewAccount={viewAccountPopup}
			onCloseAccount={closeAccountPopup} />
	);
}

export default compose(
	withAuth,
	connect(null, actions),
)(BtnAuthContainer);