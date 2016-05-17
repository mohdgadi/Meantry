var express = require('express');
var router = express.Router();
var async = require('async');
var passport=require('passport');
var passportLocal=require('passport-local').Strategy;
var path = require('path');
var expressSession=require('express-session');

var controlleri=require('../controllers/controller_2');
var mongoose_controller=require('../controllers/mongoose_controller');
var user_controller=require('../controllers/user_controller');
var booking_controller=require('../controllers/booking_controller');

var therapist_controller =require('../controllers/therapist_controller');

module.exports = (function() {
    'use strict';
    var router = require('express').Router();

    router.get('/', function(req, res) {
        res.send("Hello wrold");
    });

    router.get('/therapist_data',mongoose_controller.finds);



router.get('/era',controlleri.create);

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

router.get('/therapist-select-days',function(req,res){
	res.render('../client/views/therapist_days_select');
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

router.post('/era',controlleri.book,booking_controller.book,function(req,res){

	res.writeHead(200, {'Content-Type': 'text/plain'});
						  res.end('okay');
	console.log("done in server.js");
	

});



router.post('/ur-book',controlleri.book,booking_controller.bookur ,function(req,res){

	console.log("got post request");
	res.writeHead(200, {'Content-Type': 'text/plain'});
						  res.end('okay');
	
	console.log("done in server.js");
});



router.post('/therapist-register',therapist_controller.register);

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


router.get('/api/get_booked_days',therapist_controller.get_booked_days);

router.post('/api/therapist/book_days',controlleri.bookDates);

router.post('/api/therapist-login',passport.authenticate('local2'),function(req,res){
	 res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('okay');
});

router.get('/api/therapist-home',function(req,res){
	if(req.user && !req.user.type){
		console.log("allowed");
		res.send(req.user);
		

	}else{
		console.log("not allowed");
		res.send(401);
	}
});

router.get('/api/therapist/all_bookings',therapist_controller.get_bookings);

router.get('*', function (req, res) {
    // res.sendFile('./client/views/index.html');
    res.sendFile('/client/views/index.html', { root: 'C:/Users/mohd/Desktop/meantry3' });
});



    return router;
})();