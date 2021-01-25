import React from 'react';
import { shallow } from 'enzyme';

import Advantages from './index';

const setUp = () => shallow(<Advantages />)

describe("Render Advantages:", () => {
	let component;

	beforeEach(() => {
		component = setUp();
	})

	it('should contain .promo wrapper', () => {
		const wrapper = component.find(".promo");
		expect(wrapper.length).toBe(1);
	})

	it('snapshot component', () => {
		expect(component).toMatchSnapshot();
	})
})