import { ONE_HOUR } from '../constants';

const getDeliveryDates = (earlyDate) => {
	const day = 24 * 3600 * 1000;

	return [
		{
			id: 1,
			value: earlyDate,
			name: `${getWeekDay(earlyDate)}, ${formatDate(earlyDate)}`
		},
		{
			id: 2,
			value: earlyDate + day,
			name: `${getWeekDay(earlyDate + day)}, ${formatDate(earlyDate + day)}`
		},
		{
			id: 3,
			value: earlyDate + day * 2,
			name: `${getWeekDay(earlyDate + day * 2)}, ${formatDate(earlyDate + day * 2)}`
		}
	]
};

const getDeliveryTime = () => {
  return [
    {
      id: 1,
      value: 8 * ONE_HOUR,
      name: 'from 8:00 to 13:00',
    },
    {
      id: 2,
      value: 13 * ONE_HOUR,
      name: 'from 13:00 to 18:00',
    },
    {
      id: 3,
      value: 18 * ONE_HOUR,
      name: 'from 18:00 to 23:00',
    }
  ];
};

const formatPrice = (number) => {
	return new Intl.NumberFormat('ru-RU', {
		style: "currency",
		currency: "RUB",
		useGrouping: true,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(number);
}

const discountPrice = (price, discount) => {
	return formatPrice(price * (1 - discount / 100));
}

const formatNumber = (number) => {
	return new Intl.NumberFormat('ru-RU', {
		useGrouping: true,
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	}).format(number);
}

const getWeekDay = (miliseconds) => {
	const date = new Date(miliseconds);

	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return days[date.getDay()];
}

const getEarlyDate = () => {
	const now = new Date();
	return (new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)).getTime();
}

const formatDate = (miliseconds) => {
	const d = new Date(miliseconds);

	const date = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear()
	].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

	// соединить компоненты в дату
	return date.slice(0, 3).join('.');
}

const formatDateTime = (miliseconds) => {
	const d = new Date(miliseconds);

	const date = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear(),
		'0' + d.getHours(),
		'0' + d.getMinutes()
	].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

	// соединить компоненты в дату
	return date.slice(0, 3).join('.') + ' ' + date.slice(3).join(':');
}

const formatPhoneNumber = (value) => {
	const result = '+';

	switch (true) {
		case (value.length === 1):
			return `${result}${value} `;
		case (value.length > 0 && value.length < 5):
			return `${result}${value.slice(0, 1)} (${value.slice(1)}`;
		case (value.length > 4 && value.length < 8):
			return `${result}${value.slice(0, 1)} (${value.slice(1, 4)}) ${value.slice(4)}`;
		case (value.length > 7 && value.length < 10):
			return `${result}${value.slice(0, 1)} (${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7)}`;
		case (value.length > 9):
			return `${result}${value.slice(0, 1)} (${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7, 9)}-${value.slice(9)}`;
		default:
			break;
	}

	return result;
}

export {
	formatPrice,
	discountPrice,
	formatNumber,
	getWeekDay,
	getDeliveryDates,
	getDeliveryTime,
	formatDate,
	formatDateTime,
	formatPhoneNumber,
	getEarlyDate,
}