import React from 'react';

import './btn-quantity.scss';

const BtnQuantity = ({ value, isVisible, onClick, onChange, onBlur }) => {

	return (isVisible) ? (
		<div className="quantity">
			<button
				onClick={() => onClick(-1)}
				className="quantity__btn quantity__btn_minus"></button>
			<input
				onChange={onChange}
				onBlur={(e) => onBlur(e)}
				type="text" className="quantity__display" value={value} />
			<button
				onClick={() => onClick(1)}
				className="quantity__btn quantity__btn_plus"></button>
		</div>
	) : (
			<div className="quantity">
				<button className="quantity__btn-large btn-large"
					onClick={() => onClick(1)}>
					<span className="btn-large__text">Купить</span>
					<div className="btn-large__image">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="transparent" d="M176.105 199.386v154.01h274.517l30.89-154.01z" /><g fill="#fff"><path d="M508.528 114.125a15.338 15.338 0 00-11.864-5.617H191.443V46.646c0-6.818-4.5-12.816-11.045-14.724L75.123 1.227c-8.137-2.37-16.647 2.299-19.017 10.431-2.371 8.132 2.299 16.647 10.431 19.017l94.231 27.474V410.16c0 8.471 6.867 15.338 15.338 15.338h58.309c15.222 0 27.608 12.385 27.608 27.608 0 15.222-12.385 27.608-27.608 27.608s-27.608-12.385-27.608-27.608c0-8.471-6.867-15.338-15.338-15.338s-15.338 6.867-15.338 15.338c0 32.137 26.146 58.283 58.283 58.283s58.283-26.146 58.283-58.283-26.146-58.283-58.283-58.283h-42.971v-26.091h259.178a15.329 15.329 0 0015.039-12.32L496.55 202.4v-.003l15.15-75.537c.904-4.505-.26-9.18-3.172-12.735zm-30.585 25.058l-8.999 44.865H191.443v-44.865h286.5zm-286.5 198.876V214.724h271.348l-24.736 123.335H191.443z" /><path d="M399.282 394.824h-42.945c-8.471 0-15.338 6.867-15.338 15.338s6.867 15.338 15.338 15.338h42.945c15.222 0 27.608 12.385 27.608 27.608 0 15.222-12.385 27.608-27.608 27.608-15.222 0-27.608-12.385-27.608-27.608 0-8.471-6.867-15.337-15.338-15.337s-15.338 6.867-15.338 15.337c0 32.137 26.146 58.283 58.283 58.283s58.283-26.146 58.283-58.283-26.146-58.284-58.282-58.284zM110.439 181.105H15.338C6.867 181.105 0 174.239 0 165.768s6.867-15.338 15.338-15.338h95.102c8.471 0 15.338 6.867 15.338 15.338-.001 8.471-6.868 15.337-15.339 15.337zM110.439 253.958H46.031c-8.471 0-15.338-6.867-15.338-15.338s6.867-15.338 15.338-15.338h64.408c8.471 0 15.338 6.867 15.338 15.338s-6.867 15.338-15.338 15.338zM110.439 326.812H76.726c-8.471 0-15.338-6.867-15.338-15.337 0-8.471 6.867-15.338 15.338-15.338h33.713c8.471 0 15.338 6.867 15.338 15.338 0 8.47-6.867 15.337-15.338 15.337z" /></g></svg>
					</div>
				</button>
			</div>
		)
}

export default BtnQuantity;