import React from 'react';

import LoadImage from '../load-image';
import { withAuth } from '../hoc';
import {
	notRegisterImageUrl as imageUrl,
	notRegisterPreviewUrl as previewUrl,
} from '../../data';

import './not-register.scss';

const NotRegister = ({ onViewPopup }) => {

	return (
		<div className="not-register">
			<div className="container">
				<div className="not-register__wrap">
					<div className="not-register__image">
						<LoadImage imageUrl={imageUrl} previewUrl={previewUrl} blur={10} />
					</div>
					{/* <img src={'/images/login.svg'} className="not-register__image" /> */}
					<h2 className="not-register__title">Войдите в учётную запись!</h2>
					<span className="not-register__text">Так вы сможете видеть выбранные товары на любых устройствах. Это удобно!</span>
					<button className="btn_order not-register__btn"
						onClick={onViewPopup}>Войти</button>
				</div>
			</div>
		</div>
	)
}

export default withAuth(NotRegister);