const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	name: { type: String, required: true },
	value: { type: String, required: true },
	productId: { type: Types.ObjectId, ref: 'Product' },
})

module.exports = model('Category', schema);