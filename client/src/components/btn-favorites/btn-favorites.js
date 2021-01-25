import React from 'react';

import './btn-favorites.scss';

const BtnFavorites = ({ updateFavorites, isFavorites, isText }) => {
	const classNames = `btn-favorites ${(isText) ? 'btn-favorites_text' : ""} ${(isFavorites) ?
		"btn-favorites_active" : ""}`;

	return (
		<button className={classNames}
			onClick={() => updateFavorites()}>
			<svg className="btn-favorites__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.812 167.165c-1.702-36.088-16.232-70.306-40.914-96.353-25.567-26.981-59.251-41.993-94.847-42.272-34.009-.257-63.948 12.15-88.992 36.905-14.257 14.091-24.699 30.11-32.057 44.104-7.358-13.994-17.8-30.013-32.057-44.104-25.047-24.754-55.004-37.158-88.993-36.905-35.545.278-68.917 15.336-93.967 42.4C16.029 96.82 1.896 130.993.19 167.165c-4.464 94.635 70.036 158.12 182.806 254.216 19.824 16.893 40.324 34.362 62.129 53.441l9.877 8.643 9.877-8.643c23.121-20.23 44.813-38.641 65.789-56.445 111.743-94.839 185.564-157.493 181.144-251.212zm-71.994 108.31c-29.97 36.353-73.478 73.279-128.562 120.03-18.057 15.325-36.642 31.099-56.253 48.129-18.29-15.892-35.664-30.698-52.55-45.087-55.77-47.524-99.819-85.061-130.02-121.835-30.986-37.731-44.024-71.079-42.276-108.133 2.89-61.271 48.585-109.605 104.029-110.039.271-.002.533-.003.803-.003 57.965 0 87.525 49.314 100.005 78.802 3.424 8.09 11.278 13.318 20.007 13.318 8.729 0 16.583-5.228 20.007-13.318 12.48-29.49 42.033-78.801 100.004-78.801l.803.003c55.624.435 103.188 49.799 106.029 110.039 1.726 36.578-11.235 69.545-42.026 106.895z" /></svg>
			<svg className="btn-favorites__image btn-favorites__image_active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.812 167.164C508.179 89.995 448.439 29.1 377.056 28.529h-1.04c-65.963 0-102.73 48.413-120.016 81.095-17.285-32.681-54.052-81.095-120.015-81.095h-1.04C63.562 29.101 3.821 89.995.188 167.164c-4.468 94.63 71.035 158.132 183.814 254.225 19.526 16.641 40.298 34.336 62.125 53.439l9.873 8.643 9.873-8.642c21.826-19.102 42.598-36.797 62.125-53.439 112.779-96.095 188.282-159.596 183.814-254.226z" /></svg>
			{ (isText) ? ((isFavorites) ? 'В избранном' : 'В избранное') : ''}
		</button>
	);
}

BtnFavorites.defaultProps = {
	isText: false,
}

export default BtnFavorites;