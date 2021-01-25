const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Product = require('../models/Product');
const Status = require('../models/Status');
const auth = require('../middleware/auth.middleware');
const path = require('path');

const router = Router();

async function mapProducts(items) {
	const productsId = items.map((item) => item.productId);
	const productsMap = {};

	(await Product.find({ _id: { $in: productsId } }))
		.forEach((product) => {
			productsMap[product._id] = product;
		});

	return items.map(({ productId, count }) => {
		const { name, imageUrl, newPrice } = productsMap[productId];
		const url = path.parse(imageUrl);

		return {
			productId,
			name,
			imageUrl: path.join(url.dir, `${url.name}-min${url.ext}`),
			count,
			price: newPrice,
		}
	})
}

function computePrice(items) {
	return items.reduce((total, item) => {
		return total += item.price * item.count;
	}, 0);
}

router.post('/', auth, [
	check('name', 'Минимальная длина имени 3 символа').isLength({ min: 3 }).trim(),
	check('email', 'Некорректный email').isEmail(),
	check('phone', 'Неправильный номер телефона').isLength({ min: 11, max: 11 }),
	check('deliveryDate').custom((value) => {
		const now = new Date();
		const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
		if (value >= tomorrow) return true;
		throw new Error('Выберите более позднюю дату доставки');
	}),
	check('address', 'Минимальная длина адреса 6 символов')
		.isLength({ min: 6, max: 50 }),
], async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				message: errors.array()[0].msg,
				isValidation: true,
			})
		}

		const { name, email, phone, address, deliveryDate } = req.body;

		const user = await User.findById(req.user.userId);

		await user.updateProfile({ name, email, phone }, false);

		if (user.cart.items.length === 0) {
			return res.status(400).json({
				message: 'Ваша корзин пуста',
				isValidation: true,
			})
		}

		const products = await mapProducts(user.cart.items);
		const totalPrice = computePrice(products);
		const statusId = (await Status.findOne({ orderPeriod: 1 }))._id;

		await user.createOrder({ address, deliveryDate, products, totalPrice, statusId });
		await user.clearCart();

		res.status(201).json({
			name: user.name,
			email: user.email,
			phone: user.phone
		});

	} catch (err) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова',
			isValidation: true,
		})
	}
})

module.exports = router;