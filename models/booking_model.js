var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var BookingSchema = new Schema({

	bookingid:ObjectId,
	name:  String,
	address:String,
	phone: String,
	time : String,
	date: String,
	therapist_id: String,
	total:Number,
	service:String,
	username:String,
	email:String,
	booking_date:String,
	booking_time:String

});

module.exports = mongoose.model('booking_model', BookingSchema);
