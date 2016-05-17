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

//mongoose.connect('mongodb://localhost:27017/hockey');

var User= require('../models/user_model');
var Booking=require('../models/booking_model');

module.exports.getList = function (req,res) {

	User
    .find( { $text : { $search : req.query.data} })
    .select({username:1 ,name:1, _id:0})
    .exec(function(err, results) {
       if(err){
       	console.log("eroro ocured");
       	res.send(404);
       }else{
       	console.log("foud");
       	res.json(results);
       }
    });
};

module.exports.profile = function (req,res) {
console.log(req.params.id);
	User
    .findOne( { $text : { $search : req.params.id} })
    .select({})
    .exec(function(err, results) {
       if(err){
       	console.log("eroro ocured");
       	res.send(404);
       }else{
       	var link="/user-bookings/"+results.username;
       	console.log(results);
       	res.render('../client/views/user_profile',{
           'username' : results.username,'name': results.name, 'address':results.address,'age':results.age,
           'phone':results.phone,'link':link
         });
       }
    });
};


module.exports.booking = function (req,res) {
var array=[];
  Booking.
  find({
    username: req.params.id}).
  limit(20)
  .select({ _id: 1 }).
  exec(function (err, bookings) {
      if(!err){
        for(i=0;i<bookings.length;i++){
          array.push(bookings[i]._id);
        }
        
        res.render('../client/views/user_bookings',{'data':array});
      }else{
        res.send(404);
      }
});
  



};