const { Schema, model } = require('mongoose');

const schema = new Schema({
	name: { type: String, required: true },
	orderPeriod: { type: Number, required: true },
})

module.exports = model('Status', schema);