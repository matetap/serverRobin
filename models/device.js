const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// eslint-disable-next-line new-cap
const deviceSchema = Schema({
	name: {type: String, required: true},
	state: {type: String, required: true}
});

module.exports = {
	schema: deviceSchema,
	model: mongoose.model('Device', deviceSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:3000/api/devices/{id}',
			relationship: 'http://127.0.0.1:3000/api/devices/{ownerId}/relationships/{path}'
		}
	}
};
