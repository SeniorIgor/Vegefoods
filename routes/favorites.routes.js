const { Router } = require('express');
const Product = require('../models/Product');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');
const path = require('path');

const router = Router();

const mapProductsId = (items) => {
	return items.map((item) => item.productId);
}

async function mapFavoritesItems(items) {
	const productsMap = {};
	const products = await Product.find({ _id: { $in: mapProductsId(items) } });
	products.forEach((product, idx) => {
		productsMap[product._id] = idx;
	});

	return items.map((item) => {
		const { _id, name, oldPrice, newPrice, imageUrl, previewUrl, discount } = products[productsMap[item.productId]];

		return {
			id: _id,
			name,
			oldPrice,
			newPrice,
			imageUrl,
			previewUrl,
			discount,
		}
	});
}

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const favoritesItems = await mapFavoritesItems(user.favorites.items);

    res.json({ favoritesItems });

  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong, please try again'
    });
  }
});

router.post('/update', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    await user.updateFavorites(req.body.productId);
    const favoritesItems = await mapFavoritesItems(user.favorites.items);

    res.json({ favoritesItems });
    
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong, please try again'
    });
  }
});

module.exports = router;