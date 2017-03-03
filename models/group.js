const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// eslint-disable-next-line new-cap
const groupSchema = Schema({
	name: {type: String, required: true},
	devices: [{type: ObjectId, ref: 'Device'}]
});

module.exports = {
	schema: groupSchema,
	model: mongoose.model('Group', groupSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:3000/api/groups/{id}',
			relationship: 'http://127.0.0.1:3000/api/groups/{ownerId}/relationships/{path}'
		}
	}
};
