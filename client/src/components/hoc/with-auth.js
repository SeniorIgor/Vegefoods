import React from 'react';

import { AuthConsumer } from './../auth-context';

const withAuth = (Wrapped) => {
	return (props) => {
		return (
			<AuthConsumer>
				{
					(authData) => {
						return (
							<Wrapped {...props} {...authData} />
						);
					}
				}
			</AuthConsumer>
		);
	}
}

export default withAuth;