import React from 'react';

export const setUp = (Component, creator, initialProps = {}) =>
	(props = {}) => creator(<Component {...initialProps} {...props} />);