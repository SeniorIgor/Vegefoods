import React, { Fragment, useState, useEffect } from 'react';

import './load-bg-image.scss';

const LoadBgImage = ({ imageUrl, previewUrl }) => {

	const [url, setUrl] = useState('');

	const onLoaded = () => {
		setUrl(imageUrl);
	}

	useEffect(() => {
		setUrl(previewUrl);
	}, []);

	const elem = <img className="load-bg-image__mock-image" src={imageUrl}
		onLoad={onLoaded}></img>;

	const classNames = `load-bg-image ${(imageUrl === url) ? "load-bg-image_active" : ""}`;

	return (
		<div className={classNames} style={{ backgroundImage: `url(${url})` }}>
			<img className="load-bg-image__mock-image" src={imageUrl} onLoad={onLoaded}></img>
		</div>
	)
}

export default LoadBgImage;