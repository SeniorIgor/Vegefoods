const { Router } = require('express');
const Product = require('../models/Product');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');
const path = require('path');

const router = Router();

async function mapCartItems(items) {
	const productsId = items.map((item) => item.productId);
	const productsMap = {};
	const products = await Product.find({ _id: { $in: productsId } });
	products.forEach((product, idx) => {
		productsMap[product._id] = idx;
	});

	return items.map((item) => {
		const { _id, name, imageUrl, newPrice, oldPrice, discount, unit } = products[productsMap[item.productId]];
		const url = path.parse(imageUrl);

		return {
			productId: _id,
			name,
			oldPrice,
			newPrice,
			miniUrl: path.join(url.dir, `${url.name}-min${url.ext}`),
			discount,
			unit,
			count: item.count,
			total: item.count * newPrice,
		}
	});
}

function computePrice(items) {
	return items.reduce((total, item) => {
		return total += item.newPrice * item.count;
	}, 0);
}

function computeQuantity(items) {
	return items.reduce((total, item) => {
		return total += item.count;
	}, 0);
}

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.userId);
		const cartItems = await mapCartItems(user.cart.items);

		const cart = {
			countItems: computeQuantity(cartItems),
			orderTotal: computePrice(cartItems),
			cartItems
		}

		res.json(cart);

	} catch (err) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова'
		})
	}
})

router.post('/update', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.userId);
		await user.updateCart(req.body.productId, req.body.quantity);
		const cartItems = await mapCartItems(user.cart.items);

		const cart = {
			countItems: computeQuantity(cartItems),
			orderTotal: computePrice(cartItems),
			cartItems
		}

		res.json(cart);
		
	} catch (err) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова'
		})
	}
})

// router.delete('/remove', auth, async (req, res) => {
// 	try {
// 		const user = await User.findById(req.user.userId);
// 		await user.removeFromCart(req.body.productId, req.body.quantity);
// 		const cartItems = await mapCartItems(user.cart);

// 		const cart = {
// 			countItems: computeQuantity(cartItems),
// 			orderTotal: computePrice(cartItems),
// 			cartItems
// 		}

// 		res.json(cart);

// 	} catch (err) {
// 		res.status(500).json({
// 			message: 'Что-то пошло не так, попробуйте снова'
// 		})
// 	}
// })

module.exports = router;