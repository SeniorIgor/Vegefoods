import React from 'react';
import { Link } from 'react-router-dom';

import LoadImage from '../load-image';

import './empty-list.scss';


const EmptyList = ({ title, text, imageUrl, previewUrl }) => {

	return (
		<div className="empty-favorites">
			<div className="container">
				<div className="empty-favorites__wrap">
					<div className="empty-favorites__image">
						<LoadImage imageUrl={imageUrl} previewUrl={previewUrl} blur={10} />
					</div>
					{/* <img src={image} className="empty-favorites__image" /> */}
					<h2 className="empty-favorites__title">{title}</h2>
					<span className="empty-favorites__text">{text}</span>
					<Link to="/catalog/all/page/1" className="btn_order empty-favorites__btn">Start Shopping</Link>
				</div>
			</div>
		</div>
	)
}

export default EmptyList;