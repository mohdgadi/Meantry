var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var thSchema=new Schema(
		{
			userid:String,
			password:String,
			phone:String,
			name:String,
			gender:String,
			bio:String,
			price:Number,
			ratings:{ type: Number, default: 0.0 },
			personal_training:Boolean,
			sports_massage:Boolean,
			aurvedic_massage:Boolean,
			pilates:Boolean

		},{ collection : 'temporary_therapist' }
	);
module.exports = mongoose.model('therapist_temporary',thSchema);