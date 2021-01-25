import React, { Component } from 'react';

import FormField from '../../components/form-field';
import { formatPhoneNumber } from '../../utils';

const FieldPhoneContainer = (props) => {

	const handleChange = ({ target }) => {
		const value = target.value.replace(/[^\d]/g, '');

		if (value.length < 1) {
			return;
		} else if (value.length > 11) {
			return;
		} else {
			props.updateValue(value);
		}
	}

	const { value = '7', error, fieldData } = props;
	const formatNumber = formatPhoneNumber((value.length === 0) ? '7' : value);

	return (
		<FormField {...fieldData} value={formatNumber} onChange={handleChange} error={error} />
	);
}

export default FieldPhoneContainer;

// const mapStateToProps = ({ profile: { phone } }) => ({ phone });

// const mapDispatchToProps = (dispatch) => ({
// 	updateProfile: (value) => dispatch(updateProfile('phone', value)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(FieldPhoneContainer);