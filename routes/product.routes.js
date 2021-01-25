const { Router } = require('express');
const Product = require('../models/Product');

const router = Router();

// _id, name, categoryId, price, stocks, unit,
// 		description, imageUrl, previewUrl, reviewQuantity, rating, sold, discount

const mapProduct = ({ _id, name, oldPrice, newPrice, stocks, unit, description, imageUrl, previewUrl,
	reviewQuantity, rating, sold, discount }) => {
	return {
		id: _id, name, oldPrice, newPrice, stocks, unit, description, imageUrl, previewUrl,
		reviewQuantity, rating, sold, discount
	}
}

router.get('/:productId', async (req, res) => {
	try {
		const product = await Product.findById(req.params.productId);
		res.json(mapProduct(product));

	} catch (err) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова'
		})
	}
})

module.exports = router;