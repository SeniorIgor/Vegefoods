import React, { Component } from 'react';

import './dropdown-menu.scss';

const onClickDropdown = ({ currentTarget }) => {
	currentTarget.tabIndex = '1';
	currentTarget.focus();
	currentTarget.classList.toggle('active');
}

const onFocusOutDropdown = ({ currentTarget }) => {
	currentTarget.classList.remove('active');
}

const getItem = (data, selectedItem, defaultValue) => {
	const item = data.find(i => i.value === selectedItem);
	return (item) ? item.name : defaultValue;
}

const DropdownMenu = (props) => {

	const { data, selectedItem, onSelected, defaultValue, isFormField = false } = props;

	const dataView = data.map((item) => (
		<li key={item.id} className="dropdown__item"
			onClick={() => onSelected(item.value)}>
			{item.name}
		</li>
	));

	const itemView = getItem(data, selectedItem, defaultValue);

	const classNames = `dropdown-menu__body dropdown ${(isFormField) ? 'dropdown_form' : ''}`

	return (
		<div className="dropdown-menu">
			<div className={classNames}
				onClick={(e) => onClickDropdown(e)}
				onBlur={(e) => onFocusOutDropdown(e)}>
				<div className="dropdown__select">
					<span>{itemView}</span>
					<i className="dropdown__icon"></i>
				</div>
				<ul className="dropdown__list">
					{dataView}
				</ul>
			</div>
		</div>
	);
}

export default DropdownMenu;