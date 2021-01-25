import React from 'react';

import './form-field.scss';

const FormField = ({ title, fieldName, id, value, onChange, error, type }) => {

	const classNames = `form-field__input ${(error) ? 'form-field__input_error' : ''}`;

	return (
		<div className="form-field">
			<label className="form-field__title" htmlFor={id}>{title}</label>
			<input className={classNames} type={type} id={id} name={fieldName}
				onChange={onChange} value={value} />
			{error.length > 0 &&
				<span className='form-field__error'
					data-testid="text-error">{error}</span>}
		</div>
	);
}

FormField.defaultProps = {
	error: '',
}

export default FormField;