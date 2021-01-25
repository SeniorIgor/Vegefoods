import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './pagination.scss';

const getItemsView = (pages) => {
	if (pages.length < 1) return null;

	return pages.map(item => (
		<NavLink to={`${item}`} key={item}
			className="pagination__item"
			activeClassName="pagination__item_active">
			{item}
		</NavLink>
	));
}

const getDotsView = (isView) => {
	return (isView) ? <div className="pagination__dots">...</div> : null;
}

const getClasses = (currentPage, lastPage) => {
	return (currentPage === lastPage) ? 'pagination__item pagination__item_disabled' : 'pagination__item';
}

const Pagination = ({ data }) => {
	const {
		currentPage, firstPage, lastPage, leftPages,
		centerPages, rightPages, isLeft, isRight
	} = data;

	const classesLeft = `${getClasses(currentPage, firstPage)} pagination__item_left`;
	const classesRight = `${getClasses(currentPage, lastPage)} pagination__item_right`;

	return (
		<div className="pagination">
			<div className="container">
				<div className="pagination__wrapper">
					<Link to={(currentPage === firstPage) ? `${firstPage}` : `${currentPage - 1}`} className={classesLeft}>
						<div className="pagination__image pagination__image_left"></div>
					</Link>
					<div className="pagination__list">
						{getItemsView(leftPages)}
						{getDotsView(isLeft)}
						{getItemsView(centerPages)}
						{getDotsView(isRight)}
						{getItemsView(rightPages)}
					</div>
					<Link to={(currentPage === lastPage) ? `${lastPage}` : `${currentPage + 1}`} className={classesRight}>
						<div className="pagination__image pagination__image_right"></div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Pagination;