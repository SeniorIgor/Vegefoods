import React from 'react';

import { advantagesData as data } from '../../data';

import './advantages.scss';

const Advantages = () => {

	const elements = data.map(({
		id, title, text, image, color }) => {
		return (
			<li key={id} className="promo__item promo-item">
				<div className="promo-item__image-block">
					<a
						className="promo-item__link" href="#"
						style={{ backgroundColor: color }} >
						<div className="promo-item__image">
							{image}
						</div>
					</a>
				</div>
				<div className="promo-item__text-block">
					<h2 className="promo-item__title">{title}</h2>
					<p className="promo-item__text">{text}</p>
				</div>
			</li>
		);
	})

	return (
		<div className="promo">
			<div className="container">
				<ul className="promo__list">
					{elements}
				</ul>
			</div>
		</div>
	);
}

export default Advantages;