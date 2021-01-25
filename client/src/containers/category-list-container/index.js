import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withProductService } from '../../components/hoc';
import { fetchCategories } from '../../actions';
import CategoryList from '../../components/category-list';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';

class CategoryListContainer extends Component {

	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const { categories, loading, error } = this.props;

		if (error) return <ErrorIndicator />;
		if (loading) return <Spinner />;

		return <CategoryList categories={categories} />
	}
}

const mapMethodsToProps = ({ getCategories }) => {
	return { getCategories };
}

const mapStateToProps = ({ categoryList }) => {
	const { categories, loading, error } = categoryList;

	return {
		categories,
		loading,
		error
	};
}

const mapDispatchToProps = (dispatch, { getCategories }) => {
	return bindActionCreators({
		fetchCategories: fetchCategories(getCategories),
	}, dispatch);
}

export default compose(
	withProductService(mapMethodsToProps),
	connect(mapStateToProps, mapDispatchToProps),
)(CategoryListContainer);