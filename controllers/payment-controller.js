var booking_controller=require('./booking_controller');



var SALT="eCwWELxi";
var sha512 = require('js-sha512');
var key='gtKFFx';
var date = new Date();

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







module.exports.getinfor = function (req,res) {

	console.log("Got request");
	
	if(req.isAuthenticated()){
		


		User.findOne({
			'username':[req.user.id],
		},'address name phone age username',function(err,user){
			if(!user){
				console.log("logged err");
				res.send(401);
				
			}else{
				console.log("login in");

				var random=Math.random().toString();
		
				var txnid=sha512(random);
				
				var email=user.username;

				var name=user.name;
				var phone=user.phone;
				var address=user.address;
				var time=req.query.time;
				var date=req.query.date;
				var authentication='true';
				var duration=req.query.duration;
				var instructions=req.query.instructions;
				var surl="http://ec2-52-221-249-235.ap-southeast-1.compute.amazonaws.com:9000/payment-success";
				var furl="http://ec2-52-221-249-235.ap-southeast-1.compute.amazonaws.com:9000/payment-failure";
				
				var productinfo=req.query.service;
				var hash_string=key+'|'+txnid+'|'+'23'+'|'+productinfo+'|'+name+'|'+email+'|'+time+'|'+duration+'|'+instructions+'|'+date+'|'+authentication+'|'+'|'+'|'+'|'+'|'+'|'+SALT;

				console.log(hash_string);
				var hash=sha512(hash_string);
				console.log(hash);

				var data={amount:23,name:name,email:email,phone:phone,info:productinfo,surl:surl,furl:furl,hash:hash,key:key,txnid:txnid,time:time,duration:duration,instructions:instructions,address:address,date:date,authentication:authentication};
				data=JSON.stringify(data);
				res.send(data);


			}
			
		});
		
		
		
		
		
	}else{
		res.send(401);
	}



};





module.exports.getinfour = function (req,res) {

	if(req.isAuthenticated()){
		res.send(401);
	}else{

		var random=Math.random().toString();
		
				var txnid=sha512(random);
		var email=req.query.email;
		var address=req.query.address;
		var time=req.query.time;
		var date=req.query.date;
		var authentication='false';
		var duration=req.query.duration;
		var instructions=req.query.instructions;
		var surl="http://ec2-52-221-249-235.ap-southeast-1.compute.amazonaws.com:9000/payment-success";
				var furl="http://ec2-52-221-249-235.ap-southeast-1.compute.amazonaws.com:9000/payment-failure";
		var name=req.query.name;
		var phone=req.query.phone;
		var productinfo=req.query.service;
		var hash_string=key+'|'+txnid+'|'+'23'+'|'+productinfo+'|'+name+'|'+email+'|'+time+'|'+duration+'|'+instructions+'|'+date+'|'+authentication+'|'+'|'+'|'+'|'+'|'+'|'+SALT;

		console.log(hash_string);
				var hash=sha512(hash_string);
				console.log(hash);

				var data={amount:23,name:name,email:email,phone:phone,info:productinfo,surl:surl,furl:furl,hash:hash,key:key,txnid:txnid,time:time,duration:duration,instructions:instructions,address:address,date:date,authentication:authentication};
				data=JSON.stringify(data);
				res.send(data);





	}













};







module.exports.payment_success = function (req,res) {

	console.log(req.body);
	var rethash;
	var status=req.body.status;
	var amount=req.body.amount;
	var txnid=req.body.txnid;
	var hash=req.body.hash;
	var key=req.body.key;
	var info=req.body.productinfo;
	var email=req.body.email;
	var payid=req.body.payid;
	var udf1=req.body.udf1;
	var udf2=req.body.udf2;
	var udf3=req.body.udf3;
	var udf4=req.body.udf4;
	var udf5=req.body.udf5;
	var name=req.body.firstname;



	if(req.body.additionalCharges){
		console.log("additionalCharges"+req.body.additionalCharges);
		var additionalCharges=req.body.additionalCharges.toString();
		rethash=additionalCharges+'|'+SALT+'|'+status+'||||||'+udf5+'|'+udf4+'|'+udf3+'|'+udf2+'|'+udf1+'|'+email+'|'+name+'|'+info+'|'+amount+'|'+txnid+'|'+key;
	}else{
		rethash=SALT+'|'+status+'||||||'+udf5+'|'+udf4+'|'+udf3+'|'+udf2+'|'+udf1+'|'+email+'|'+name+'|'+info+'|'+amount+'|'+txnid+'|'+key;
	}
	console.log(rethash);
	var hash2=sha512(rethash);
	if(hash2!=hash){
		console.log("invalid");
	}else{
		console.log("valid");
		booking_controller.book1(req.body);


		res.render('../client/views/payment-success',{
		id:req.body.mihpayid,service:info,date:udf4,time:udf1,duration:udf2
	});
	}





















};


module.exports.payment_failure = function (req,res) {

	res.render('../client/views/payment-failure',{
		id:req.body.mihpayid,service:info,date:udf4,time:udf1,duration:udf2
	});

};