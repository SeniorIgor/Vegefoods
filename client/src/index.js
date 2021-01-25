import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/app';
import ScrollToTop from './components/scroll-to-top';
import ErrorBoundry from './components/error-boundry';
import { ProductService } from './services';
import { ProductServiceProvider } from './components/product-service-context';
import { AuthContainer } from './containers';

import './styles/style.scss';

import store from './store';

const productService = new ProductService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<ProductServiceProvider value={productService}>
				<Router>
					<ScrollToTop>
						<div className="page">
							<AuthContainer>
								<App />
							</AuthContainer>
						</div>
					</ScrollToTop>
				</Router>
			</ProductServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);