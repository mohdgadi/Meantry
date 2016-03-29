var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema(
		{
			username: { type: String, unique: true },
			name:String,
			password:String,
			phone:Number,
			age:Number,
			address:String

			
		},{ collection : 'users' }
	);
userSchema.index({'username': 'text'});
module.exports = mongoose.model('user_model',userSchema);