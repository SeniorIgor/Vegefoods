import React from 'react';
import { shallow } from 'enzyme';

import { App } from './app';
import Header from '../header';
import { setUp } from '../../utils';

const render = setUp(App, shallow, { isAuth: false });

describe('APP: ', () => {

	let wrapper;
	beforeEach(() => {
		wrapper = render();
	})

	it('component contain Header component', () => {
		expect(wrapper.find(Header)).toHaveLength(1);
	})

	it('snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

})