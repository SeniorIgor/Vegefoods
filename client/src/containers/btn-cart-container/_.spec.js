import { shallow } from 'enzyme';

import BtnCart from '../../components/btn-cart';
import { BtnCartContainer, mapStateToProps } from './index';
import { setUp } from '../../utils';

const initialProps = {
	countItems: 1,
}

const render = setUp(BtnCartContainer, shallow, initialProps);

describe('BtnCartContainer:', () => {

	describe('render', () => {

		it('with BtnCart', () => {
			const component = render();
			expect(component.find(BtnCart)).toHaveLength(1);
		})

	})

})

describe('CONNECTION METHODS: ', () => {

	const registerUser = () => { };

	it('mapStateToProps', () => {
		const cartItems = [1, 2, 3];
		expect(mapStateToProps({ shoppingCart: { cartItems } }))
			.toEqual({ countItems: cartItems.length });
	})

})