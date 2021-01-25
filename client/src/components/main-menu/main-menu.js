import React from 'react';
import { NavLink } from 'react-router-dom';

import './main-menu.scss';

const menuContacts = (
	<div className="main-menu__contacts menu-contacts">
		<div className="container">
			<div className="menu-contacts__wrap">
				<a className="menu-contacts__link" href="tel:+77777777777">
					<div className="menu-contacts__link-image menu-contacts__link-image_phone">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.512 51.512" fill="#043e44" width="20" height="20"><path d="M49.202 5.582a7.832 7.832 0 00-.561-.443C45.412 2.704 40.448-.206 35.657.012c-8.022.37-18.684 11.196-21.761 14.506C10.82 17.829.801 29.253 1.019 37.273c.033 1.337.314 2.754.836 4.21 1.205 3.361 3.497 6.395 5.184 8.322 0 0 .353.415.523.575.435.403 1.07.722 1.941.975.445.129.914.157 1.228.157.35 0 1.028-.035 1.645-.265.844-.315 1.448-.676 1.854-1.108.297-.32 5.962-7.551 5.994-7.597l.036-.055a5.01 5.01 0 00.699-1.217 4.848 4.848 0 00.05-3.4 4.604 4.604 0 00-1.192-1.819l-2.66-2.485c-.25-.233-.509-.666-.546-.819a2.203 2.203 0 01-.04-.345L32.07 15.724a.297.297 0 01.101-.071l.061.023c.124.061.518.349.908.709l2.662 2.459c1.399 1.301 3.575 1.624 5.272.796.605-.295 1.057-.699 1.27-.886l.12-.097c.055-.048 6.736-6.136 6.987-6.409.629-.677.969-1.743 1.041-3.258.04-.842-.208-1.898-.589-2.511-.247-.394-.477-.689-.701-.897zm-1.923 4.593c-.346.341-6.415 5.882-6.733 6.172l-.247.204a2.625 2.625 0 01-.544.392c-.608.296-1.4.18-1.917-.3l-2.665-2.462c-.311-.288-1.107-.988-1.77-1.266a3.175 3.175 0 00-1.274-.272c-.854.03-1.65.392-2.251 1.03L14.223 30.519c-.595.641-.785 1.573-.564 2.771.171.926.871 1.929 1.449 2.469l2.665 2.489c.179.166.321.386.411.634a1.87 1.87 0 01-.019 1.294 2.065 2.065 0 01-.299.501 1.874 1.874 0 00-.111.157c-.537.693-5.424 6.911-5.708 7.248-.002.001-.167.148-.72.355a2.053 2.053 0 01-.595.075c-.207 0-.342-.023-.391-.038-.536-.156-.724-.285-.728-.285-.097-.097-.264-.299-.293-.333-1.539-1.759-3.594-4.467-4.64-7.386-.414-1.154-.636-2.254-.661-3.274-.149-5.479 6.413-14.541 12.076-20.635 5.662-6.095 14.221-13.3 19.7-13.552 3.95-.184 8.201 2.385 11.007 4.5l.108.081c.064.047.184.132.236.176.071.075.14.187.196.276.068.133.164.546.151.804-.043.886-.202 1.296-.214 1.329z" /></svg>
					</div>
					{/* <img src={phone} className="menu-contacts__link-image" /> */}
					<span className="menu-contacts__link-text">+ 7 (777) 777-77-77</span>
				</a>
				<a className="menu-contacts__link" href="mailto:email@email.com">
					<div className="menu-contacts__link-image">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="#043e44"><path d="M469.333 64H42.667C19.135 64 0 83.135 0 106.667v298.667C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333V106.667C512 83.135 492.865 64 469.333 64zM42.667 85.333h426.667c1.572 0 2.957.573 4.432.897-36.939 33.807-159.423 145.859-202.286 184.478-3.354 3.021-8.76 6.625-15.479 6.625s-12.125-3.604-15.49-6.635C197.652 232.085 75.161 120.027 38.228 86.232c1.478-.324 2.866-.899 4.439-.899zm-21.334 320V106.667c0-2.09.63-3.986 1.194-5.896 28.272 25.876 113.736 104.06 169.152 154.453C136.443 302.671 50.957 383.719 22.46 410.893c-.503-1.814-1.127-3.588-1.127-5.56zm448 21.334H42.667c-1.704 0-3.219-.594-4.81-.974 29.447-28.072 115.477-109.586 169.742-156.009a7980.773 7980.773 0 0018.63 16.858c8.792 7.938 19.083 12.125 29.771 12.125s20.979-4.188 29.76-12.115a8178.815 8178.815 0 0018.641-16.868c54.268 46.418 140.286 127.926 169.742 156.009-1.591.38-3.104.974-4.81.974zm21.334-21.334c0 1.971-.624 3.746-1.126 5.56-28.508-27.188-113.984-108.227-169.219-155.668 55.418-50.393 140.869-128.57 169.151-154.456.564 1.91 1.194 3.807 1.194 5.897v298.667z" /></svg>
					</div>
					{/* <img src={email} className="menu-contacts__link-image" /> */}
					<span className="menu-contacts__link-text">email@email.com</span>
				</a>
				<div className="menu-contacts__link">
					<div className="menu-contacts__link-image menu-contacts__link-image_delivery">
						<svg height="25" viewBox="0 0 24 24" width="25" fill="#043e44" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 19h-2a.5.5 0 010-1h2a.5.5 0 010 1zM22.75 19H21.5a.5.5 0 010-1h.835l.674-3.592C23 12.57 21.43 11 19.5 11h-3.283l-1.591 7H17.5a.5.5 0 010 1H14a.5.5 0 01-.488-.61l1.818-8a.5.5 0 01.488-.39H19.5c2.481 0 4.5 2.019 4.5 4.5l-.759 4.092a.499.499 0 01-.491.408z" /><path d="M19.5 21c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM8.5 21C7.122 21 6 19.879 6 18.5S7.122 16 8.5 16s2.5 1.121 2.5 2.5S9.878 21 8.5 21zm0-4c-.827 0-1.5.673-1.5 1.5S7.673 20 8.5 20s1.5-.673 1.5-1.5S9.327 17 8.5 17zM6.5 10h-4a.5.5 0 010-1h4a.5.5 0 010 1zM6.5 13h-5a.5.5 0 010-1h5a.5.5 0 010 1zM6.5 16h-6a.5.5 0 010-1h6a.5.5 0 010 1z" /><path d="M14 19h-3.5a.5.5 0 010-1h3.101l2.272-10H4.5a.5.5 0 010-1h12a.5.5 0 01.488.61l-2.5 11A.5.5 0 0114 19z" /></svg>
					</div>
					{/* <img src={delivery} className="menu-contacts__link-image" /> */}
					<span className="menu-contacts__link-text">доставка 3-5 рабочих дней и бесплатный возврат</span>
				</div>
			</div>
		</div>
	</div>
);

const MainMenu = ({ isActive, handler, isAuth }) => {

	const classNames = `main-menu ${(isActive) ? 'main-menu_active' : ''}`;

	const onCloseMenu = ({ target }) => {
		// const isMenuItem = target.closest('a') && target.closest('a').dataset.menu;
		// const isMenuActive = document.querySelector('.menu__body').classList.contains('active');

		if (target.dataset.menu) {
			handler();
		}
	}

	return (
		<div className={classNames}>
			<div className="main-menu__list-wrap">
				<div className="container">
					<ul className="main-menu__list" onClick={(e) => onCloseMenu(e)}>
						<li className="main-menu__item">
							<NavLink to="/" className="main-menu__link" data-menu>Главная</NavLink>
						</li>
						<li className="main-menu__item">
							<NavLink to="/catalog/all/page/1" className="main-menu__link" data-menu>Каталог товаров</NavLink>
						</li>
						<li className="main-menu__item">
							<NavLink to="/cart" className="main-menu__link" data-menu>Корзина</NavLink>
						</li>
						<li className="main-menu__item">
							<NavLink to="/favorites" className="main-menu__link" data-menu>Избранное</NavLink>
						</li>
						{
							(isAuth) ? (
								<li className="main-menu__item">
									<NavLink to="/orders" className="main-menu__link" data-menu>История заказов</NavLink>
								</li>
							) : null
						}
						{/* <li className="main-menu__item">
							<NavLink to="/about" className="main-menu__link" data-menu>О нас (не реализовано)</NavLink>
						</li>
						<li className="main-menu__item">
							<NavLink to="/blog" className="main-menu__link" data-menu>Блог (не реализовано)</NavLink>
						</li> */}
						<li className="main-menu__item">
							<NavLink to="/contacts" className="main-menu__link" data-menu>Контакты</NavLink>
						</li>
						{/* <li className="main-menu__item">
							<NavLink to="/ordering" className="main-menu__link" data-menu>Оформление заказа</NavLink>
						</li> */}
					</ul>
				</div>
			</div>
			{menuContacts}
		</div>
	);
}

export default MainMenu;