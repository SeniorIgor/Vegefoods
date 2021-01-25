import React from 'react';

import { ProductServiceConsumer } from './../product-service-context';

const withProductService = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		return (
			<ProductServiceConsumer>
				{
					(productService) => {
						const serviceProps = mapMethodsToProps(productService);

						return (
							<Wrapped {...props} {...serviceProps} />
						);
					}
				}
			</ProductServiceConsumer>
		);
	}
}

export default withProductService;