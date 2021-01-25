import {
	CALCULATE_NUMBER_PAGES,
} from '../../constants';

const getNumberPages = (numberProducts, { productsPerPage }) => {
	const count = numberProducts / productsPerPage;
	return (numberProducts % productsPerPage === 0) ? count : Math.floor(count) + 1;
}

const updatePages = (state, action) => {

	if (state === undefined) {
		return {
			numberProducts: 1,
			numberPages: 1,
			productsPerPage: 8,
		};
	}

	switch (action.type) {
		case CALCULATE_NUMBER_PAGES:
			return {
				...state.pages,
				numberProducts: action.payload,
				numberPages: getNumberPages(action.payload, state.pages),
			}

		default:
			return state.pages;
	}
}

export default updatePages;