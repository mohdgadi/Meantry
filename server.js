var express = require('express');

var passport=require('passport');
var passportLocal=require('passport-local').Strategy;
var path = require('path');

var cookieParser=require('cookie-parser');
var expressSession=require('express-session');
var bodyparser=require('body-parser');

var app = express();
var controlleri=require('./controllers/controller_2');
var mongoose_controller=require('./controllers/mongoose_controller');
var user_controller=require('./controllers/user_controller');
var booking_controller=require('./controllers/booking_controller');
var login_message;

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

passport.use(new passportLocal(function(username,password,done){

 user_controller.login(username,password,function(value) {
    if (value) {
      

      done(null, {
        id: username,
        name: username
      });

    } 
    else {
   
      done(null, null);
    }
}
);
}));



app.use(express.static(path.join(__dirname, 'client')));

passport.serializeUser(function(user,done){

	done(null,user.id)

});

passport.deserializeUser(function(id,done){
	done(null,{id:id,name:id});
});




app.get('/therapist_data',mongoose_controller.finds);

app.get('/api/booking/user',user_controller.getuser);

app.get('/api/session_data',function(req,res){
	if(req.isAuthenticated()){
		var users=JSON.stringify(req.user.name);
		console.log(users);
		res.send(req.user.name);
	}else{
		res.send(401);
	}
});

app.get('/era',controlleri.create);

app.get('/login',function(req,res){
	if(req.isAuthenticated()){
		res.redirect('/home');
	}else{
	res.render(__dirname+'/client/views/login',{
		error:""
	});
}
});

app.get('/register',function(req,res){
	res.render(__dirname+'/client/views/register',{
		error:""
	});
});

app.get('/api/booking/user/adress',user_controller.getaddress);

app.post('/register',user_controller.register);
	


app.post('/login',passport.authenticate('local', { successRedirect: '/home',
   failureRedirect: '/loginerror'
    }));

app.get('/loginerror',function(req,res){
	res.render(__dirname+'/client/views/login',{
		error:"Invalid username or password"
	});
});

app.post('/loginerror',passport.authenticate('local', { successRedirect: '/home',
   failureRedirect: '/loginerror'
    }));

app.get('/home',function(req,res){
	
	res.render(__dirname+'/client/views/home',{
		isAuthenticated:req.isAuthenticated(),
		user:req.user
	});
	
});

app.get('/logout',function(req,res){
	req.logout();
	res.redirect('/home');
});

app.post('/era',function(req,res){
	console.log("got request");
	controlleri.book(req,res);
	booking_controller.book(req,res);
	console.log("done in server.js");

});

app.post('/ur-book',function(req,res){

	console.log("got post request");
	controlleri.book(req,res);
	booking_controller.bookur(req,res);
	console.log(req.body);
	console.log("done in server.js");
});

app.use('/js', express.static(__dirname));

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/client/views/index.html');
});


app.listen(3000,function(){
  console.log("server strated");
})

// catch 404 and forward to error handler

module.exports = app;