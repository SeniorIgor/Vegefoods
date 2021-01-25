
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
		} должен содержать не менее ${length} ${length === 1 ? 'символа' : 'символов'
		}`;
}

const emailError = (value) => validEmailRegex.test(value) ? '' : 'Неверный Email!';

const confirmError = (value, password) => password !== value ? 'Пароли должны совпадать!' : '';

export {
	validEmailRegex,
	validateForm,
	fieldLengthError,
	emailError,
	confirmError,
}