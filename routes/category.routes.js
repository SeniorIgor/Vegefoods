const { Router } = require('express');
const Category = require('../models/Category');
const config = require('../config');

const router = Router();

const mapCategories = (categories) => {
	const category = {
		id: config.CATEGORY_ALL,
		name: 'Все категории',
		value: config.CATEGORY_ALL,
	};

	const items = categories.map(({ _id, name, value }) => ({
		id: _id,
		name,
		value,
	}))

	return [
		category,
		...items,
	];
}

router.get('/', async (req, res) => {
	try {
		const categories = await Category.find();
		res.json(mapCategories(categories));

	} catch (err) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова'
		})
	}
})

module.exports = router;