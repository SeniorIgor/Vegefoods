import { useRoutes } from './routes';
import { ValidationError, AuthorizationError } from './errors';
import {
	validEmailRegex,
	validateForm,
	fieldLengthError,
	emailError,
	confirmError,
} from './validation';
import {
	formatPrice,
	discountPrice,
	formatNumber,
	getWeekDay,
	getEarlyDate,
	getDeliveryDates,
	getDeliveryTime,
	formatDate,
	formatDateTime,
	formatPhoneNumber,
} from './format-data';
import { getProductsForPage } from './product-list';
import { setUp } from './test-utils';


export {
	// format-data
	formatNumber,
	discountPrice,
	formatPrice,
	formatPhoneNumber,
	formatDate,
	formatDateTime,
	// routes
	useRoutes,
	// validation
	validEmailRegex,
	validateForm,
	fieldLengthError,
	emailError,
	confirmError,
	// date
	getWeekDay,
	getEarlyDate,
	getDeliveryDates,
	getDeliveryTime,
	// errors
	ValidationError,
	AuthorizationError,
	// product-list
	getProductsForPage,
	// test-utils
	setUp,
}