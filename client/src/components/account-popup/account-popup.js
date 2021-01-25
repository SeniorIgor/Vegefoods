import React from 'react';
import { Link } from 'react-router-dom';

import './account-popup.scss';

const AccountPopup = ({ isOpen, logout, closeMenu }) => {

	const classList = `account-popup ${(isOpen) ? 'account-popup_active' : ''}`;

	return (
		<div className={classList}>
			<ul className="account-popup__user-lk-list">
				<li className="account-popup__user-lk-item">
					<Link to="/orders" className="account-popup__user-lk-link" data-menu
						onClick={(event) => closeMenu(event)}>
						<div className="account-popup__user-lk-img">
							<svg width="24" height="24" viewBox="-64 0 511 512" fill="#6f9639" xmlns="http://www.w3.org/2000/svg"><path d="M336.473 64.035h-47.996v-16c0-8.836-7.16-16-15.997-16h-34.734c-8.82-24.996-36.238-38.11-61.234-29.285a48.008 48.008 0 00-29.29 29.285h-34.73c-8.836 0-16 7.164-16 16v16H48.496C21.988 64.035.5 85.523.5 112.031v351.973C.5 490.512 21.988 512 48.496 512h287.98c26.508 0 47.997-21.488 47.997-47.996V112.03c-.004-26.508-21.493-47.996-48-47.996zm-207.985 0h32c8.836 0 16-7.164 16-16s7.16-16 15.996-16 16 7.164 16 16 7.164 16 16 16h31.996v31.996H128.488zm223.985 399.969c0 8.836-7.164 16-16 16H48.496c-8.836 0-16-7.164-16-16V112.03c0-8.836 7.164-16 16-16h47.996v16c0 8.836 7.164 15.996 16 15.996H272.48c8.836 0 15.997-7.16 15.997-15.996v-16h48c8.835 0 15.996 7.164 15.996 16zm0 0" /><path d="M288.477 192.023H96.492c-8.836 0-16 7.165-16 16 0 8.836 7.164 16 16 16h191.985c8.836 0 16-7.164 16-16 0-8.835-7.164-16-16-16zm0 0M288.477 288.016H96.492c-8.836 0-16 7.164-16 16s7.164 16 16 16h191.985c8.836 0 16-7.164 16-16s-7.164-16-16-16zm0 0M288.477 384.012H96.492c-8.836 0-16 7.16-16 15.996s7.164 16 16 16h191.985c8.836 0 16-7.164 16-16s-7.164-15.996-16-15.996zm0 0" /></svg>
						</div>
						{/* <img src={listImg} className="account-popup__user-lk-img" /> */}
						История заказов
					</Link>
				</li>
				<li className="account-popup__user-lk-item">
					<button className="account-popup__user-lk-link account-popup__user-lk-link_logout"
						onClick={(event) => {
							logout();
							closeMenu(event);
						}} data-menu>
						<div className="account-popup__user-lk-img">
							<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#909090"><path d="M255.15 468.625H63.787c-11.737 0-21.262-9.526-21.262-21.262V64.638c0-11.737 9.526-21.262 21.262-21.262H255.15c11.758 0 21.262-9.504 21.262-21.262S266.908.85 255.15.85H63.787C28.619.85 0 29.47 0 64.638v382.724c0 35.168 28.619 63.787 63.787 63.787H255.15c11.758 0 21.262-9.504 21.262-21.262 0-11.758-9.504-21.262-21.262-21.262z" /><path d="M505.664 240.861L376.388 113.286c-8.335-8.25-21.815-8.143-30.065.213s-8.165 21.815.213 30.065l92.385 91.173H191.362c-11.758 0-21.262 9.504-21.262 21.262 0 11.758 9.504 21.263 21.262 21.263h247.559l-92.385 91.173c-8.377 8.25-8.441 21.709-.213 30.065a21.255 21.255 0 0015.139 6.336c5.401 0 10.801-2.041 14.926-6.124l129.276-127.575A21.303 21.303 0 00512 255.998c0-5.696-2.275-11.118-6.336-15.137z" /></svg>
						</div>
						{/* <img src={logoutImg} className="account-popup__user-lk-img" /> */}
					Выйти</button>
				</li>
			</ul>
		</div>
	);
}

export default AccountPopup;