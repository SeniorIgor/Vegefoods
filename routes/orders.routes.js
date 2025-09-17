const { Router } = require('express');
const User = require('../models/User');
const Status = require('../models/Status');
const auth = require('../middleware/auth.middleware');

const router = Router();

function mapOrderProducts(products) {
	return products.map(({ productId, price, count, name, imageUrl }) => ({
		productId, imageUrl, name, price, count,
	}))
}

async function mapOrderItems(items) {
	const statusesId = items.map((item) => item.statusId);
	const statusesMap = {};

	(await Status.find({ _id: { $in: statusesId } }))
		.forEach((status) => {
			statusesMap[status._id] = status.name;
		});

	return items.map(({ _id, address, orderDate, statusId, totalPrice,
		orderNumber, deliveryDate, deliveryPrice, products }) => {

		return {
			orderId: _id,
			orderDate,
			totalPrice,
			orderNumber,
			statusName: statusesMap[statusId],
			address,
			deliveryDate,
			deliveryPrice,
			products: mapOrderProducts(products),
		}
	}).sort((a, b) => b.orderDate - a.orderDate);
}

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const statusesMap = {};

    (await Status.find()).forEach((status) => {
      statusesMap[status.orderPeriod] = status._id;
    });

    await user.updateOrdersStatus(statusesMap);

    const orders = await mapOrderItems(user.orders.items);

    res.json(orders);

  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong, please try again'
    });
  }
})

module.exports = router;