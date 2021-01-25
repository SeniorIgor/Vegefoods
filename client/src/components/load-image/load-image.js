import React from 'react';

import './load-image.scss';

function imgLoaded({ currentTarget }) {
	const imgWrapper = currentTarget.parentNode;
	imgWrapper.classList.add('loaded');
};

const LoadImage = ({ imageUrl, previewUrl, blur = 5, isContain = true }) => {

	return (
		<div className="load-image">
			<img className="load-image__image"
				style={{ objectFit: (isContain) ? 'contain' : 'cover' }}
				src={`${imageUrl}`}
				onLoad={imgLoaded} />
			<div className="load-image__mock-image"
				style={{
					backgroundImage: `url(${previewUrl})`,
					filter: `blur(${blur}px)`,
					backgroundSize: (isContain) ? 'contain' : 'cover'
				}}>
			</div>
		</div >
	)
}

export default LoadImage;