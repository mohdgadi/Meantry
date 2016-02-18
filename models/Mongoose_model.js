var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var thSchema=new Schema(
		{
			userid:String,
			name:String,
			gender:String,
			bio:String,
			price:Number,
			ratings:Number,
			personal_training:Boolean,
			sports_massage:Boolean,
			aurvedic_massage:Boolean,
			pilates:Boolean

		},{ collection : 'therapist_collection' }
	);
module.exports = mongoose.model('Mongoose_model',thSchema);