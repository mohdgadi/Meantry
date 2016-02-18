var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var thSchema = new Schema({

	th_id: { type: String, unique: true },
	name:  String,
	gender: String,
	bio : String,
	price: String,
	ratings: Number

});

module.exports = mongoose.model('therapist', thSchema);
