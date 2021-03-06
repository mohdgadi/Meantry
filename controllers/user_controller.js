var mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

var mongodbUri = 'mongodb://mohd:techmatters5@ds019633.mlab.com:19633/maalish2';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.  
  console.log("connected");                       
});



var User= require('../models/user_model');

module.exports.register = function (req,res) {
	var status;
	

	var user=new User({
		username:req.body.username,
		password:req.body.password,
		phone:req.body.phone,
		name:req.body.name,
		age:req.body.age,
		address:req.body.address
	});
	user.save(function(err){
		if(err){
			console.log("error");
			res.render('../client/views/register',{
		error:"Sorry Username already taken"
	});
		}else{
			console.log("no error");
			res.redirect('/login');
			
			
		}
	})
	
	
	};


	module.exports.login=function(username,password,callback){
		var status;
		var userid=username;
		User.findOne({
			'username':[userid],
			'password':[password]
		},function(err,user){
			if(!user){
				console.log("logged err");
				status= false;
			}else{
				console.log("login in");
				status= true;
			}
			
			callback(status);
		});

		

	};


	module.exports.getaddress = function (req,res) {

		if(req.user){
			if(req.user.type){
			User.findOne({
			'username':[req.user.id],
		},'address',function(err,user){
			if(!user){
				console.log("logged err");
				res.send(401);
				
			}else{
				console.log("login in");
				res.json(user);
				
			}
			
		});

		}}else{
				res.send(401);
		}

		

	};


	module.exports.getuser = function (req,res) {

		if(req.user){
			if(req.user.type){

			User.findOne({
			'username':[req.user.id],
		},'address name phone age username',function(err,user){
			if(!user){
				console.log("logged err");
				res.send(401);
				
			}else{
				console.log("login in");
				res.json(user);
				
			}
			
		});

		}}else{
				res.send(401);
		}

	};

module.exports.returnuser=function(req){
	
	if(req.user){

		User.findOne({
			'username':[req.user.id],
		},'address name phone age username',function(err,user){
			if(!user){
				console.log("logged err");
				return null;
				
			}else{
				console.log("login in");
				return user;
				
			}
			
		});
	}
};