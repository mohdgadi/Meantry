var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var thSchema2=new Schema(
		{
			userid:{ type: String, unique: true,index: true},
			password:String,
			name:String,
			phone:String,
			

		},{ collection : 'therapist_credentials' }
	);
	thSchema2.index({'userid': 'text'});
module.exports = mongoose.model('therapist_auth_model',thSchema2);