import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorIndicator from '../components/error-indicator';
import {
	HomePage, ProductsPage, ProductPage, ContactsPage, CartPage, OrdersPage,
	FavoritesPage, OrderingPage, OrderingSuccessPage, NotRegisterPage
} from '../components/pages';

export const useRoutes = (isAuthentificated) => {
	if (isAuthentificated) {
		return (
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/catalog/:category/page/:pageId" component={ProductsPage} exact />
				<Route path="/product/:productId" component={ProductPage} exact />
				<Route path="/cart" component={CartPage} exact />
				<Route path="/ordering" component={OrderingPage} exact />
				<Route path="/ordering-success" component={OrderingSuccessPage} exact />
				<Route path="/orders" component={OrdersPage} exact />
				<Route path="/favorites" component={FavoritesPage} exact />
				<Route path="/contacts" component={ContactsPage} exact />

				{/* <Route path="/about" component={TestPage} exact /> */}
				<Route component={ErrorIndicator} />
			</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="/catalog/:category/page/:pageId" component={ProductsPage} exact />
			<Route path="/product/:productId" component={ProductPage} exact />
			<Route path="/cart" component={NotRegisterPage} exact />
			<Route path="/favorites" component={NotRegisterPage} exact />
			<Route path="/contacts" component={ContactsPage} exact />
			<Route path="/orders" component={NotRegisterPage} exact />
			<Route component={ErrorIndicator} />
		</Switch>
	);
}