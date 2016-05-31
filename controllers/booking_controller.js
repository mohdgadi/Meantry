var dateFormat = require('dateformat');
var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

var mongodbUri = 'mongodb://mohd:techmatters5@ds019633.mlab.com:19633/maalish2';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.  
  console.log("connected yos");                       
});
var Booking= require('../models/booking_model');
var User= require('../models/user_model');



module.exports.book = function (req,res,next) {

	User.findOne({
			'username':[req.user.id],
		},'address phone name',function(err,user){
			if(!user){
				console.log("logged err");
				res.send(401);
				
			}else{
				console.log("login in");
				var now = new Date();

				var sbooking_date= dateFormat(now, "dd/mm/yy");
				var sbooking_time=dateFormat(now,"hh:MM:ss");

				var booking=new Booking({
					username:req.user.id,
					phone:user.phone,
					name:user.name,
					address:req.body.address,
					service:req.body.service,
					time:req.body.times,
					date:req.body.dates,
					
					booking_date:sbooking_date,
					booking_time:sbooking_time,
					instructions:req.body.instructions
				});

				booking.save(function(err){
					if(err){
						console.log("error occured in book controller");
						res.send(401);
					}
					else
					{
						console.log("booked succesfully bro!!!");
						res.writeHead(200, {'Content-Type': 'text/plain'});
						  res.end('okay');

							next();
					}
				});

				
			}
			
		});

};





module.exports.bookur = function (req,res,next) {

	
				var now = new Date();

				var sbooking_date= dateFormat(now, "dd/mm/yy");
				var sbooking_time=dateFormat(now,"hh:MM:ss");


				var booking=new Booking({
					username:null,
					phone:req.body.phone,
					name:req.body.name,
					address:req.body.address,
					service:req.body.service,
					time:req.body.times,
					date:req.body.dates,
					
					email:req.body.email,
					booking_date:sbooking_date,
					booking_time:sbooking_time,
					instructions:req.body.instructions
				});

				booking.save(function(err){
					if(err){
						console.log("error occured in book controller");
						res.send(401);
					}
					else
					{
						console.log("booked succesfully bro!!!");
						res.writeHead(200, {'Content-Type': 'text/plain'});
						  res.end('okay');

						next();
							
					}
				});

};



	