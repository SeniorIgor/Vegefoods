const { Router } = require('express');
const Product = require('../models/Product');
const Category = require('../models/Category');
const config = require('../config');

const router = Router();

// _id, name, categoryId, price, stocks, unit,
// 		description, imageUrl, previewUrl, reviewQuantity, rating, sold, discount

const mapProducts = (products) => {
	return products.map(({ _id, name, oldPrice, newPrice, categoryId, imageUrl, previewUrl, discount }) => ({
		id: _id, name, oldPrice, newPrice, categoryId, imageUrl, previewUrl, discount
	}));
}

router.get('/:category', async (req, res) => {
	try {
		const products = mapProducts(await Product.find());

		if (req.params.category === config.CATEGORY_ALL) {
			return res.json(products);
		}
		const category = await Category.findOne({ value: req.params.category });

		return res.json(products.filter((item) => item.categoryId.toString() === category._id.toString()));

	} catch (err) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова'
		})
	}
})

module.exports = router;