import React from 'react';

import Spinner from '../spinner';

import './spinner-wrapper.scss';

const SpinnerWrapper = (props) => {

	const spinnerView = (!props.loading) ? null : (
		<div className="spinner-wrapper__spinner">
			<Spinner />
		</div>
	);

	return (
		<div className="spinner-wrapper">
			{props.children}
			{spinnerView}
		</div>
	)
}

export default SpinnerWrapper;