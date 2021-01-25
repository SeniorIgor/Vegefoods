import { shallow } from 'enzyme';

import BtnAuth from '../../components/btn-auth';
import { BtnAuthContainer } from './index';
import { setUp } from '../../utils';

const initialProps = {
	isAuth: false,
	onViewPopup: () => { },
	viewAccountPopup: () => { },
	closeAccountPopup: () => { },
}

const render = setUp(BtnAuthContainer, shallow, initialProps);

describe('BtnAuthContainer:', () => {

	describe('render', () => {

		it('with BtnAuth', () => {
			const component = render();
			expect(component.find(BtnAuth)).toHaveLength(1);
		})

	})

})