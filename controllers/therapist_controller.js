var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

var mongodbUri = 'mongodb://mohd:techmatters@ds013192.mlab.com:13192/maalish';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.  
  console.log("connected");                       
});
var Credentials= require('../models/therapist_auth_model');
var Therapist=require('../models/Mongoose_model');
var controlleri=require('./controller_2');
var Booking=require('../models/booking_model');
var Temporary=require('../models/therapist_temporary');

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

	var temporary=new Temporary({

			userid:req.body.username,
			password:req.body.password,
			name:req.body.name,
			phone:req.body.phone,
			userid:req.body.username,
			name:req.body.name,
			bio:req.body.bio,
			price:req.body.price,
			personal_training:personal_training,
			sports_massage:sports_massage,
			aurvedic_massage:aurvedic_massage,
			pilates:pilates

});

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

	Credentials.findOne({
		userid:req.body.username
	}).exec(function(err,docs){
		if(err){
			console.log("error Occurred");
			res.send(401);
		}else{
			console.log(docs);
			if(docs==null){
				console.log(docs);
				temporary.save(function(err){
					if(err){
						console.log("error in temop");
					}else{
						console.log("temp done");
					}
				});
			}else{
				console.log("docs found")
				res.send(401);

			}
		}
	});

	

	// credentials.save(function(err){
	// 	if(err){
	// 		res.send(401);
	// 		console.log("error2");
			
			
	// 	}else{
	// 		console.log("no error");
	// 			therapist.save(function(err){
	// 		if(err){
	// 			console.log("error");
	// 			res.send(401);
				
	// 		}else{
	// 			controlleri.register(req.body.username);
	// 			console.log("no error");
	// 			console.log("registerd successfuly");
				
			
				
				
	// 		}
	// 	});
		
			
			
	// 	}
	// });


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

module.exports.get_booked_days = function (req,res) {
	if(req.isAuthenticated() && !req.user.type ){
		console.log("logged in browoski");
		controlleri.getDateList(req.user.id,req,res);
	}else{
		res.send(401);
	}
}

module.exports.get_bookings = function (req,res) {

	if(req.isAuthenticated() && !req.user.type){
		console.log(req.user.id);
		Booking.
  find({ therapist_id: req.user.id }).
  sort('date').
  exec(function (err, docs) {
  	if(!err){
  		console.log("found docs");
  		res.json(docs);
  	}else{
  		res.send(401);
  		console.log("not found docs");
  	}
  });
	}else{
		res.send(401);
	}


}