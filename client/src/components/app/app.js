import React from 'react';

import Newsletter from './../newsletter';
import Footer from './../footer';

import Header from '../header';
import { MainMenuContainer } from '../../containers';
import { withAuth } from '../../components/hoc';
import { useRoutes } from '../../utils';

import './app.scss';

export const App = ({ isAuth }) => {

	const routes = useRoutes(isAuth);

	return (
		<div className="app">
			<Header />
			<MainMenuContainer />
			{routes}
			<Newsletter />
			<Footer />
		</div>
	);
}

export default withAuth(App);