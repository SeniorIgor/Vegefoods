import React from 'react';
import { Link } from 'react-router-dom';

import LoadImage from '../load-image';
import {
	errorIndicatorImageUrl as imageUrl,
	errorIndicatorPreviewUrl as previewUrl,
} from '../../data';

import './error-indicator.scss';

const ErrorIndicator = () => {

	return (
		<div className="error-indicator">
			<div className="container">
				<div className="error-indicator__wrap">
					<div className="error-indicator__image">
						<LoadImage imageUrl={imageUrl} previewUrl={previewUrl} blur={10} />
					</div>
					{/* <img src={'/images/not-found.svg'} className="error-indicator__image" /> */}
					<h2 className="error-indicator__title">404</h2>
					<h2 className="error-indicator__title error-indicator__title_min">Страница не найдена!</h2>
					<span className="error-indicator__text">Вы что тут бродите?</span>
					<span className="error-indicator__text">Корзина еще не собрана.</span>
					<Link to="/catalog/all/page/1" className="btn_order empty-favorites__btn">Начать покупки</Link>
				</div>
			</div>
		</div>
	);
}

export default ErrorIndicator;


{/* <div className="error-indicator">
			<div className="container">
				<div className="error-indicator__text-wrapper">
					<h1 className="error-indicator__title">Страница не найдена</h1>
					<p className="error-indicator__text">
						Вы что тут бродите?
					</p>
					<p className="error-indicator__text">
						Корзина еще не собрана. Перейти к
						<Link to="/catalog/all/page/1" className="error-indicator__link">Cписку товаров</Link>
					</p>
				</div>
			</div>
			<div className="error-indicator__bg-wrapper">
				<div
					className="error-indicator__bg-image"
					style={{
						backgroundImage: `url(${bgImage})`
					}}>
				</div>
			</div>
		</div> */}