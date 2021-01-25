import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Pagination from '../../components/pagination';

const getPages = (numberPages) => {
	return new Array(numberPages).fill(0).map((item, index) => index + 1);
}

const PaginationContainer = ({ match, numberPages }) => {
	if (numberPages === 1) return null;

	const pages = getPages(numberPages);
	const currentPage = +match.params.pageId;

	const firstPage = pages[0];
	const lastPage = pages[pages.length - 1];

	let leftPages = [];
	let centerPages = [];
	let rightPages = [];
	let isLeft = false;
	let isRight = false;

	if (pages.length > 5) {
		leftPages = [firstPage];
		rightPages = [lastPage];

		if (currentPage < firstPage + 3) {
			leftPages = pages.slice(0, currentPage + 1);
			isLeft = true;
		} else if (currentPage > lastPage - 3) {
			rightPages = pages.slice(currentPage - 2);
			isRight = true;
		} else {
			centerPages = pages.slice(currentPage - 2, currentPage + 1);
			isLeft = true;
			isRight = true;
			rightPages = [lastPage];
		}
	} else {
		leftPages = [...pages];
	}

	const data = {
		currentPage,
		firstPage,
		lastPage,
		leftPages,
		centerPages,
		rightPages,
		isLeft,
		isRight,
	};

	return (<Pagination data={data} />);
}

const mapStateToProps = ({ pages }) => {
	return {
		numberPages: pages.numberPages,
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps),
)(PaginationContainer);