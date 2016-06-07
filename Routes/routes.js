var express = require('express');
var router = express.Router();
var async = require('async');
var passport=require('passport');
var passportLocal=require('passport-local').Strategy;
var path = require('path');
var expressSession=require('express-session');

var user_controller=require('../controllers/user_controller');
var booking_controller=require('../controllers/booking_controller');
var payment_controller=require('../controllers/payment-controller');


module.exports = (function() {
    'use strict';
    var router = require('express').Router();

    router.get('/', function(req, res) {
        res.send("Hello wrold");
    });

router.get('/login',function(req,res){
	if(req.isAuthenticated() && req.user.type ){
		res.redirect('/home');
	}else{
	res.render('../client/views/login',{
		error:""
	});
}
});

router.get('/register',function(req,res){
	res.render('../client/views/register',{
		error:""
	});
});



router.post('/register',user_controller.register);
	


router.post('/login',passport.authenticate('local', { successRedirect: '/home',
   failureRedirect: '/loginerror'
    }));

router.get('/loginerror',function(req,res){
	res.render('../client/views/login',{
		error:"Invalid username or password"
	});
});

router.post('/loginerror',passport.authenticate('local', { successRedirect: '/home',
   failureRedirect: '/loginerror'
    }));

router.get('/home',function(req,res){

	if(req.isAuthenticated() && req.user.type){
		console.log("true");
		console.log(req.user.type);
		res.render('../client/views/home',{
		isAuthenticated:true,
		user:req.user
	});

	}else{
		console.log("false");
		
		res.render('../client/views/home',{
		isAuthenticated:false,
		user:req.user
	});
	}

	
	
	
});





router.get('/logout',function(req,res){
	if(req.user.type){
		req.logout();
	res.redirect('/home');
}else{
	req.logout();
	res.redirect('/therapist-login');
}
	
});

router.post('/book',booking_controller.book,function(req,res){

	res.writeHead(200, {'Content-Type': 'text/plain'});
						  res.end('okay');
	console.log("done in server.js");
	

});



router.post('/ur-book',booking_controller.bookur ,function(req,res){

	console.log("got post request");
		
	console.log("done in server.js");
});




  router.get('/api/booking/user',user_controller.getuser);



router.get('/api/session_data',function(req,res){
	if(req.isAuthenticated()){
		var users=JSON.stringify(req.user.name);
		console.log(users);
		res.send(req.user.name);
	}else{
		res.send(401);
	}
});

router.get('/api/booking/user/adress',user_controller.getaddress);
router.get('/api/hello',function(req,res){
	console.log("hellos");
	res.send("yo");
});

router.post('/post-form',function(req,res){
	console.log("got request");
	console.log(req.body);
});






router.get('/payment',function(req,res){
	var MERCHANT_KEY = "gtKFFx";
	var url="";
	var form_error=0;
	var hash="";
	var txnid="171300fe037cbd2da927ca8b8fbfa743f12865c2ba36461e16b1d381295b0f46";
	var should_load="false";	
	res.render('../client/views/payment',{
		MERCHANT_KEY:MERCHANT_KEY,url:url,form_error:form_error,hash:hash,txnid:txnid,amount:'',name:'',email:'',phone:'',productinfo:'',surl:'',furl:'',hashs:hash,ers:"get"
	});
});



router.post('/payment',payment_controller.post);



router.get('/datepick',function(req,res){
	res.sendFile('/client/views/datepick.html',{ root: 'C:/Users/mohd/Desktop/meantry3' });
});


router.get('*', function (req, res) {
    // res.sendFile('./client/views/index.html');
    res.sendFile('/client/views/index.html', { root: 'C:/Users/mohd/Desktop/meantry3' });
});




    return router;
})();













