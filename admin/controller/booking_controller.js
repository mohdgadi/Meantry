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
var Booking=require('../models/booking_model');

module.exports.getBooking = function (req,res) {

	Booking.
  findOne({
    _id: req.params.id}).
  exec(function (err, bookings) {
      if(!err){
        var name=bookings.name;
        var email=bookings.email;
        var address=bookings.address;
        var service=bookings.service;
        var username=bookings.username;
        var phone=bookings.phone;
        var therapist=bookings.therapist_id;
        var time=bookings.time;
        var date=bookings.date;
        var bdate=bookings.booking_date;
        var btime=bookings.booking_time;
        var id=bookings.id;

        res.render('../client/views/booking_preview',{
           'username' : username,'name': name, 'address':address,
           'phone':phone, 'email': email, 'service': service, 'date':date,
           'time':time,'bdate':bdate,'btime':btime,'therapist':therapist,'id':id
         });

        
        
       
      }else{
        res.send(404);
      }
});

};

module.exports.showAll = function (req,res) {

	Booking.
  find({}).
  limit(50).
  sort({booking_date: -1, booking_time: -1}).
  select({ _id: 1, therapist_id: 1 }).
  exec(function (err, bookings) {

  	if(err){
  		console.log("error");
  		res.send(404);
  	}else{
  		res.json(bookings);
  	}

  });

}