import React from 'react';

import {
	footerNavMenuData as navMenuData,
	footerSocialData as socialData,
	footerUserMenuData as userMenuData,
	footerContactsData as contactsData
} from '../../data';

import './footer.scss';

const Footer = () => {

	const social = socialData.map(({ id, title, image }) => (
		<li key={id} className="social__item">
			<a href="#" className="social__link">
				<div className="social__image">
					{image}
				</div>
				{/* <img src={image} alt={title} className="social__image" /> */}
			</a>
		</li>
	))

	const navMenu = navMenuData.map(({ id, title }) => (
		<li key={id} className="user-menu__item">
			<a href="#" className="user-menu__link">
				{title}
			</a>
		</li>
	));

	const userMenu = userMenuData.map(({ id, title }) => (
		<li key={id} className="user-menu__item">
			<a href="#" className="user-menu__link">
				{title}
			</a>
		</li>
	));

	const contacts = contactsData.map(({ id, title, image }) => (
		<li key={id} className="footer-contacts__item">
			<a href="#" className="footer-contacts__link" data-icon={image}>
				<div className="footer-contacts__icon">
					{image}
				</div>
				{title}
			</a>
		</li>
	))

	return (
		<div className="footer">
    <div className="container">
      <div className="footer__wrapper">

        <div className="footer__column">
          <h2 className="footer__title">Vegefoods</h2>
          <p className="footer__text">
            2020–2025 © Vegefoods — the largest online store for healthy foods. All rights reserved. Nationwide delivery across Russia.
          </p>
          <ul className="footer__social social">
            {social}
          </ul>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Menu</h2>
          <ul className="footer__menu user-menu">
            {navMenu}
          </ul>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Help</h2>
          <ul className="footer__menu user-menu">
            {userMenu}
          </ul>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Have questions?</h2>
          <ul className="footer__contacts footer-contacts">
            {contacts}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
}

export default Footer;