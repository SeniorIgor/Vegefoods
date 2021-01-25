import {
	CALCULATE_NUMBER_PAGES,
} from '../../constants';

const calculateNumberPages = (numberProducts) => {
	return {
		type: CALCULATE_NUMBER_PAGES,
		payload: numberProducts,
	}
};

export {
	calculateNumberPages,
};