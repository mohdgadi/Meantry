var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/hockey');
var Credentials= require('../models/therapist_auth_model');
var Therapist=require('../models/Mongoose_model');
var controlleri=require('./controller_2');

module.exports.register = function (req,res) {

	

	var credentials=new Credentials({

			userid:req.body.username,
			password:req.body.password,
			name:req.body.name,
			phone:req.body.phone

});

	if(!req.body.personal_training){
		personal_training=false;
	}else{
		personal_training=true;
	}
	if(!req.body.sports_massage){
		sports_massage=false;
	}else{
		sports_massage=true;
	}
	if(!req.body.aurvedic_massage){
		aurvedic_massage=false;
	}else{
		aurvedic_massage=true;
	}
	if(!req.body.pilates){
		pilates=false;
	}else{
		pilates=true;
	}


	var therapist=new Therapist({
		userid:req.body.username,
		name:req.body.name,
		bio:req.body.bio,
		price:req.body.price,
		personal_training:personal_training,
		sports_massage:sports_massage,
		aurvedic_massage:aurvedic_massage,
		pilates:pilates
	});

	credentials.save(function(err){
		if(err){
			res.send(401);
			console.log("error2");
			
			
		}else{
			console.log("no error");
				therapist.save(function(err){
			if(err){
				console.log("error");
				res.send(401);
				
			}else{
				controlleri.register(req.body.username);
				console.log("no error");
				console.log("registerd successfuly");
				
			
				
				
			}
		});
		
			
			
		}
	});


}

module.exports.login = function (username,password,callback) {
		var status;
		var userid=username
		var password=password;
		console.log(userid+password);
		
		Credentials.findOne({
			'userid':[userid],
			'password':[password]
		},function(err,user){
			if(!user){
				console.log("logged err");
				status=false;
			}else{
				console.log("login in");
				status=true;

				
			}
			
				callback(status);
			
		});


}