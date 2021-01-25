const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	name: { type: String, required: true, unique: true },
	oldPrice: { type: Number, required: true },
	newPrice: { type: Number, required: true },
	stocks: { type: Number, required: true },
	unit: { type: String, default: 'шт' },
	description: { type: String, required: true },
	imageUrl: { type: String, required: true },
	previewUrl: { type: String, required: true },
	reviewQuantity: { type: Number, default: 0 },
	rating: { type: Number, default: 0 },
	sold: { type: Number, default: 0 },
	discount: { type: Number, default: 0 },
	categoryId: { type: Types.ObjectId, ref: 'Category', required: true },
	userId: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Product', schema);