var express = require('express');

var passport=require('passport');
var passportLocal=require('passport-local').Strategy;
var path = require('path');

var cookieParser=require('cookie-parser');
var expressSession=require('express-session');
var bodyparser=require('body-parser');
var therapist_controller=require('./controller/therapist_controller');
var user_controller=require('./controller/user_controller');
var booking_controller=require('./controller/booking_controller');
var app = express();


app.set('view engine','ejs');


app.use(bodyparser.urlencoded( {extended:false}));

app.use(bodyparser.json());
app.use(cookieParser());
app.use(expressSession({
	secret:'secret',
	resave:false,
	saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());

passport.use('local',new passportLocal(function(username,password,done){

 if(username==password){

	 done(null, {
        id: username
      });

    } 
    else {
   
      done(null, null);
    }
 

}));
passport.serializeUser(function(user,done){

	done(null,user);

});

passport.deserializeUser(function(user,done){
	done(null,{id:user.id});
});

function authenticate(req,res,next){
	if(req.isAuthenticated()){
		console.log(req.user);
		next();
	}else{
		console.log(req.user);
		res.send(401);
	}
}

app.use(express.static(path.join(__dirname, 'client')));

app.use('/js', express.static(__dirname));
// app.use('/api/',routes_api);

app.get('/home',authenticate, function(req,res){
	if(req.isAuthenticated()){
		console.log(req.isAuthenticated());
	}
	res.sendFile(__dirname+'/client/views/view1.html');
});

app.get('/all-bookings',authenticate,function(req,res){
	res.sendFile(__dirname+'/client/views/all_bookings.html');
});
app.get('/api/get_therapist_list',authenticate,therapist_controller.get_therapist_list);

app.get('/search-therapist',authenticate,function(req,res){
	console.log(req.user);
	res.sendFile(__dirname+'/client/views/search_therapist.html');
});

app.get('/therapist-profile/:id',authenticate,therapist_controller.profile);

app.get('/search-user',authenticate,function(req,res){
	res.sendFile(__dirname+'/client/views/search_user.html');
});

app.get('/api/get_user_list',authenticate,user_controller.getList);

app.get('/user-profile/:id',authenticate,user_controller.profile);

app.get('/therapist-bookings/:id',authenticate,therapist_controller.booking);

app.get('/booking/:id',authenticate,booking_controller.getBooking);

app.get('/user-bookings/:id',authenticate,user_controller.booking);

app.get('/api/all_bookings',authenticate,booking_controller.showAll);

app.get('/pending-therapist',authenticate,function(req,res){
	res.sendFile(__dirname+'/client/views/pending_therapist.html');
});

app.get('/api/get-pending-therapist',authenticate,therapist_controller.pending);

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/client/views/login.html');
});

app.post('/api/login',passport.authenticate('local'),function(req,res){
	console.log("logged in");
	
	 res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('okay');
});

app.get('/logout',function(req,res){
	req.logout();
	res.redirect('/login');
});

app.post('/api/approve',authenticate,therapist_controller.approve);




app.listen(3000,function(){
  console.log("server strated");
});

// catch 404 and forward to error handler

module.exports = app;