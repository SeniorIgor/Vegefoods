import React, { Fragment } from 'react';

import TitleView from '../title-view';
import { ContactsContainer } from '../../containers';

const titleViewData = {
	title: "Контакты",
	text: "Полезные продукты"
};

const ContactsPage = () => {
	return (
		<Fragment>
			<TitleView {...titleViewData} />
			<ContactsContainer />
		</Fragment>
	);
}

export default ContactsPage;