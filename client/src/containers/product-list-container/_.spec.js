import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import ProductList from '../../components/product-list';
import {
	ProductListContainer, mapMethodsToProps,
	mapStateToProps, mapDispatchToProps
} from './index';

const initialProps = {
	numberProducts: 12,
	category: '',
	products: [],
	loading: false,
	error: '',
	fetchProducts: () => { },
	calculateNumberPages: () => { },
}

const setUp = (props = {}) => {
	return shallow(<ProductListContainer {...initialProps} {...props} />);
}

describe('PRODUCT_LIST_CONTAINER: --------------------------------------', () => {

	describe('RENDER: ----------------------------------------------------', () => {

		it('Spinner', () => {
			const wrapper = setUp({ loading: true });
			expect(wrapper.find(Spinner)).toHaveLength(1);
		})

		it('ErrorIndicator', () => {
			const wrapper = setUp({ error: { title: 'error' } });
			expect(wrapper.find(ErrorIndicator)).toHaveLength(1);
		})

		it('ProductList', () => {
			const wrapper = setUp({ products: [1, 2, 3] });
			expect(wrapper.find(ProductList)).toHaveLength(1);
			expect(wrapper).toMatchSnapshot();
		})

	})

	describe('LIFE_CYCLE METHODS: ----------------------------------------', () => {

		it('componentDidMount', () => {
			const mockFetchProducts = jest.fn();
			const wrapper = setUp({ fetchProducts: mockFetchProducts });
			expect(mockFetchProducts).toHaveBeenCalledTimes(1);
		})

		describe('COMPONENT_DID_UPDATE: ------------------------------------', () => {

			let numberProducts;
			let category;
			let mockCalculateNumberPages;
			let wrapper;
			let mockFetchProducts;

			beforeEach(() => {
				numberProducts = 2;
				category = 'all';
				mockFetchProducts = jest.fn();
				mockCalculateNumberPages = jest.fn();
				wrapper = setUp({
					fetchProducts: mockFetchProducts,
					numberProducts,
					category,
					calculateNumberPages: mockCalculateNumberPages,
				});
			})

			it('calculateNumberPages is not called', () => {
				wrapper.setProps({ numberProducts });
				expect(mockCalculateNumberPages).toHaveBeenCalledTimes(0);
			})

			it('calculateNumberPages is called', () => {
				const newNumberProducts = 6;
				wrapper.setProps({ numberProducts: newNumberProducts });
				expect(mockCalculateNumberPages).toHaveBeenCalledTimes(1);
			})

			it('fetchProducts is not called', () => {
				wrapper.setProps({ category });
				expect(mockFetchProducts).toHaveBeenCalledTimes(1);
			})

			it('fetchProducts is called', () => {
				const newCategory = 'fruits';
				wrapper.setProps({ category: newCategory });
				expect(mockFetchProducts).toHaveBeenCalledTimes(2);
			})

		})

	})

})

describe('CONNECTION METHODS: ------------------------------------------', () => {

	it('mapMethodsToProps', () => {
		const service = { getProducts: () => { } };
		expect(JSON.stringify(mapMethodsToProps(service)))
			.toEqual(JSON.stringify(service));
	})

	it('mapStateToProps', () => {
		const productList = { products: [1], loading: '', error: '' };
		const match = { params: { pageId: 1, category: '' } };
		const pages = { productsPerPage: 10 };
		const { loading, error } = productList;
		const { category } = match.params;

		expect(mapStateToProps({ productList, pages }, { match }))
			.toEqual({
				products: productList.products,
				numberProducts: productList.products.length,
				loading, error, category
			});
	})

	it('mapDispatchToProps', () => {
		const dispatch = () => { };
		const innerProps = { match: { params: { category: '1' } } };
		const result = {
			fetchProducts: () => { },
			calculateNumberPages: () => { },
		}

		expect(JSON.stringify(mapDispatchToProps(dispatch, innerProps)))
			.toEqual(JSON.stringify(result));
	})

})