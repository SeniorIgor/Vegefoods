import React from 'react';
import { withRouter } from 'react-router-dom';

import DropdownMenu from '../dropdown-menu';

import './category-list.scss';

const CategoryList = ({ categories, match, history }) => {
	const { category } = match.params;

	return (
		<div className="category-list">
			<div className="container">
				<div className="category-list__wrapper">
					<DropdownMenu
						data={categories}
						onSelected={(id) => history.push(`/catalog/${id}/page/1`)}
						defaultValue="Выберите категорию"
						selectedItem={category} />
				</div>
			</div>
		</div>
	);
}

export default withRouter(CategoryList);