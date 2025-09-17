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
  check('name', 'Name must be at least 3 characters long').isLength({ min: 3 }).trim(),
  check('email', 'Invalid email').isEmail(),
  check('phone', 'Invalid phone number').isLength({ min: 11, max: 11 }),
  check('deliveryDate').custom((value) => {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    if (value >= tomorrow) return true;
    throw new Error('Please select a later delivery date');
  }),
  check('address', 'Address must be between 6 and 50 characters long')
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
        message: 'Your cart is empty',
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
      message: 'Something went wrong, please try again',
      isValidation: true,
    })
  }
})

module.exports = router;