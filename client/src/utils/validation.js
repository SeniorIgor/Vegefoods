
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
	let valid = true;
	Object.values(errors).forEach(
		(val) => val.length > 0 && (valid = false)
	);
	return valid;
}

const fieldLengthError = (value, fieldName, length) => {
  if (value && value.length >= length) return '';

  return `${fieldName[0].toUpperCase() + fieldName.slice(1)
    } must contain at least ${length} ${length === 1 ? 'character' : 'characters'
  }`;
};

const emailError = (value) => validEmailRegex.test(value) ? '' : 'Invalid Email!';

const confirmError = (value, password) => password !== value ? 'Passwords must match!' : '';

export {
	validEmailRegex,
	validateForm,
	fieldLengthError,
	emailError,
	confirmError,
}