var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hockey');
var Credentials= require('../models/therapist_auth_model');
var Therapist=require('../models/Mongoose_model');
var Booking=require('../models/booking_model');
var Temporary=require('../models/therapist_temporary');
var controlleri=require('./controller');

module.exports.get_therapist_list = function (req,res) {
	console.log(req.query);
Credentials
    .find( { $text : { $search : req.query.data} })
    .select({userid:1 , _id:0})
    .exec(function(err, results) {
       if(err){
       	console.log("eroro ocured");
       	res.send(401);
       }else{
       	console.log("foud");
       	res.json(results);
       }
    });


};

module.exports.profile = function (req,res) {
	console.log(req.params.id);

	Therapist.findOne({ 'userid': req.params.id }, function (err, docs) {
  if (!err){
  	
  	if(docs==null){
  		res.send(404);
  	}else{
  		var pilates=docs.pilates;
      console.log(pilates);
  	var personal_training=docs.personal_training;
  	var aurvedic_massage=docs.aurvedic_massage;
  	var name=docs.name;
  	var price=docs.price;
  	var ratings=docs.ratings;
  	var bio=docs.bio;
    var userid=docs.userid;
  	Credentials.findOne({ 'userid': req.params.id }, function (err, docs) {
  		if(!err){
  			if(docs==null){
  				res.send(404);
  			}else{
  				var phone=docs.phone;
          var link="/therapist-bookings/"+userid;
  				res.render('../client/views/therapist_profile',{
           'phone' : phone,'name': name, 'price':price,'bio':bio,'ratings':ratings,'personal_training':personal_training,
           'aurvedic_massage':aurvedic_massage,'pilates':pilates,'userid':userid,'link':link
         });
  			}
  		}
  	});

  	}
  	
}else{
	console.log("eroor");
}
}
);
	


};

module.exports.booking = function (req,res) {
var array=[];
  Booking.
  find({
    therapist_id: req.params.id}).
  limit(20)
  .select({ _id: 1 }).
  exec(function (err, bookings) {
      if(!err){
        for(i=0;i<bookings.length;i++){
          array.push(bookings[i]._id);
        }
        
        res.render('../client/views/therapist_bookings',{'data':array});
      }else{
        res.send(404);
      }
});
  



};

module.exports.pending = function (req,res) {

  Temporary.find()
  .exec(function (err, docs) {
      if(!err){
        res.json(docs);
      }else{
        res.send(404);
      }
});




};


module.exports.approve = function (req,res) {

  Temporary.findOne({
    userid:req.body.id
  })
  .exec(function (err, docs) {
      if(!err){
        if(docs!=null){

          var therapist=new Therapist({

      name:docs.name,
      userid:docs.userid,
      bio:docs.bio,
      price:docs.price,
      personal_training:docs.personal_training,
      sports_massage:docs.sports_massage,
      aurvedic_massage:docs.aurvedic_massage,
      pilates:docs.pilates
});

          var credentials=new Credentials({

            userid:docs.userid,
            password:docs.password,
            phone:docs.password,
            name:docs.name


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
        Temporary.remove({ userid: docs.userid }, function(err){
          if(err){
            console.log("couldnt remove");
          }else{
            console.log("removed successfuly");
          }
        });
       controlleri.register(docs.userid);
        console.log("registerd successfuly");
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
        
      }
    });}});

        }
        
        
      }else{
        res.send(404);
        console.log("error");
      }
});


};