var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/hockey');
var Credentials= require('../models/therapist_auth_model');
var Therapist=require('../models/Mongoose_model');

module.exports.register = function (req,res) {

	var credentials=new Credentials({

			userid:req.body.username,
			password:req.body.password,
			name:req.body.name,
			phone:req.body.phone

});

	if(!req.body.personal_training){
		personal_training=false;
	}
	if(!req.body.sports_massage){
		sports_massage=false;
	}
	if(!req.body.aurvedic_massage){
		aurvedic_massage=false;
	}
	if(!req.body.pilates){
		pilates=false;
	}


	var therapist=new Therapist({
		userid:req.body.username,
		name:req.body.name,
		bio:req.body.bio,
		price:req.body.price,
		personal_training:personal_training,
		sports_massage:sports_message,
		aurvedic_massage:aurvedic_massage,
		pilates:pilates
	});

	credentials.save(function(err){
		if(err){
			console.log("error");
			
			
		}else{
			console.log("no error");
				therapist.save(function(err){
			if(err){
				console.log("error");
				
				
			}else{
				console.log("no error");
				console.log("registerd successfuly");
				
			
				
				
			}
		});
		
			
			
		}
	});










}