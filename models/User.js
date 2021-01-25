const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	name: { type: String },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	phone: { type: String },
	cart: {
		items: [
			{
				count: { type: Number, required: true, default: 1 },
				productId: { type: Types.ObjectId, ref: 'Product', required: true }
			}
		]
	},
	favorites: {
		items: [
			{
				productId: { type: Types.ObjectId, ref: 'Product', required: true }
			}
		]
	},
	orders: {
		items: [
			{
				orderDate: { type: Number, required: true },
				totalPrice: { type: Number, required: true },
				address: { type: String, required: true },
				deliveryDate: { type: Number, required: true },
				deliveryPrice: { type: Number, default: 299 },
				orderNumber: { type: String, required: true },
				statusId: { type: Types.ObjectId, ref: 'Status', required: true },
				products: [
					{
						productId: { type: Types.ObjectId, ref: 'Product', required: true },
						name: { type: String, required: true },
						count: { type: Number, required: true, default: 1 },
						price: { type: Number, required: true },
						imageUrl: { type: String, required: true },
					}
				],
			}
		]
	}
})

schema.methods.updateCart = function (id, quantity) {
	let items = [...this.cart.items];
	const idx = items.findIndex((item) => {
		return item.productId.toString() === id.toString();
	})

	if (idx >= 0) {
		if (quantity < 1) {
			items = [...items.slice(0, idx), ...items.slice(idx + 1)];
		} else {
			items[idx].count = quantity;
		}
	} else {
		items.push({
			productId: id,
			count: quantity,
		})
	}

	this.cart = { items };
	this.save();
}

schema.methods.updateFavorites = function (id) {
	let items = [...this.favorites.items];
	const idx = items.findIndex((item) => {
		return item.productId.toString() === id.toString();
	})

	if (idx >= 0) {
		items = [...items.slice(0, idx), ...items.slice(idx + 1)];

	} else {
		items.push({
			productId: id,
		})
	}

	this.favorites = { items };
	this.save();
}

schema.methods.updateProfile = function ({ name, email, phone }, isSave = true) {

	if (name !== this.name) {
		this.name = name;
	}

	if (email !== this.email) {
		this.email = email;
	}

	if (phone !== this.phone) {
		this.phone = phone;
	}

	if (isSave) this.save();
}

schema.methods.createOrder = function ({ deliveryDate,
	address, products, totalPrice, statusId }) {
	const time = (new Date()).getTime().toString();

	const newItem = {
		orderDate: Date.now(),
		orderNumber: `${time.slice(3, 5)}${time.slice(-6)}`,
		totalPrice,
		address,
		deliveryDate,
		statusId,
		deliveryPrice: 299,
		products,
	};

	this.orders = { items: [...this.orders.items, newItem] };
}

schema.methods.updateOrdersStatus = function (statusesMap) {
	const items = [...this.orders.items];
	const day = 24 * 3600 * 1000;

	items.forEach((order) => {
		const now = Date.now();

		if (now > order.deliveryDate) {
			order.statusId = statusesMap[5];
		} else if ((now + day) > order.deliveryDate) {
			order.statusId = statusesMap[4];
		} else if ((now + day * 1.5) > order.deliveryDate) {
			order.statusId = statusesMap[3];
		}
	})

	this.orders.items = items;
	this.save();
}

schema.methods.clearCart = function () {
	this.cart = { items: [] };
	this.save();
}

module.exports = model('User', schema);