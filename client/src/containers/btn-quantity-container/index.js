import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BtnQuantity from '../../components/btn-quantity';
import { updateShoppingCart } from '../../actions';
import { withProductService, withAuth } from '../../components/hoc';

class BtnQuantityContainer extends Component {

	state = {
		value: 0,
		isVisible: false,
	}

	componentDidMount() {
		const { productCount = 0 } = this.props;
		this.updateValue(productCount);
	}

	componentDidUpdate(prevProps) {
		const { productCount } = this.props;

		if (prevProps.productCount !== productCount) {
			this.updateValue(productCount);
		}
	}

	updateValue = (value) => {
		this.setState({ value, isVisible: Boolean(value) });
	}

	isAuthUser = () => {
		const { isAuth, onViewPopup } = this.props;

		if (!isAuth) {
			onViewPopup();
			return false;
		}

		return true;
	}

	onChange = ({ currentTarget }) => {
		if (!this.isAuthUser()) return;

		const result = currentTarget.value.match(/\d/g);
		let value = "";

		if (result) {
			value = +result.join('').slice(0, 3);
		}

		this.setState({ value });
	}

	onBlur = () => {
		if (!this.isAuthUser()) return;

		this.setState((state) => ({
			isVisible: Boolean(state.value)
		}));

		const { id, updateCart, token } = this.props;
		updateCart(id, this.state.value, token);
	}

	onClick = (newValue) => {
		if (!this.isAuthUser()) return;

		this.setState(({ value }) => {
			let result = value + newValue;
			if (result > 999) {
				result = 999;
			} else if (result < 0) {
				result = 0;
			}

			return {
				value: result,
				isVisible: Boolean(result),
			}
		}, () => {
			const { id, updateCart, token } = this.props;
			updateCart(id, this.state.value, token);
		});
	}

	// ({ id, updateCart, token, productCount })

	render() {
		const { value, isVisible } = this.state;

		return (
			<BtnQuantity isVisible={isVisible} value={value} onChange={this.onChange}
				onClick={this.onClick} onBlur={this.onBlur} />
		);
	}
}

const mapMethodsToProps = ({ updateCart }) => ({ updateCart });

const mapStateToProps = ({ shoppingCart: { cartItems, cartItemsMap } }, { id }) => {
	const idx = cartItemsMap[id];

	return {
		productCount: (idx !== undefined) ? cartItems[idx].count : 0,
	}
}

const mapDispatchToProps = (dispatch, { updateCart }) => {
	return bindActionCreators({
		updateCart: updateShoppingCart(updateCart),
	}, dispatch);
}

export default compose(
	withProductService(mapMethodsToProps),
	withAuth,
	connect(mapStateToProps, mapDispatchToProps),
)(BtnQuantityContainer);