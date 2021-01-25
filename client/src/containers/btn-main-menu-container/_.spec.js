import { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BtnMainMenu from '../../components/btn-main-menu';
import { BtnMainMenuContainer, mapStateToProps, mapDispatchToProps } from './index';
import { setUp } from '../../utils';

const initialProps = {
	isOpenMainMenu: false,
	handler: () => { }
}

const renderShallow = setUp(BtnMainMenuContainer, shallow, initialProps);

describe('BtnMainMenuContainer:', () => {

	describe('render', () => {

		it('with BtnMainMenu', () => {
			const component = renderShallow();
			expect(component.find(BtnMainMenu)).toHaveLength(1);
		})

	})

	describe('METHODS', () => {

		const setUpRender = setUp(BtnMainMenuContainer, render, initialProps);

		it('call handler', () => {
			const handler = jest.fn();
			const { getByTestId } = setUpRender({ handler });
			userEvent.click(getByTestId('testBtnMainMenu'));
			expect(handler).toHaveBeenCalledTimes(1);
		})

	})

})

describe('CONNECTION METHODS: ', () => {

	const setUpdateFavorites = () => { };

	it('mapStateToProps', () => {
		const isOpenMainMenu = () => { };
		expect(mapStateToProps({ mainMenu: { isOpenMainMenu } }))
			.toEqual({ isOpenMainMenu });
	})

	it('mapDispatchToProps', () => {
		expect(JSON.stringify(mapDispatchToProps({})))
			.toEqual(JSON.stringify({ handler: () => { } }));
	})

})