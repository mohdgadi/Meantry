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
var therapist_controller =require('./controllers/therapist_controller');
var routes=require('./Routes/routes');


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

 user_controller.login(username,password,function(value) {
    if (value) {
      

      done(null, {
        id: username,
        type: true
      });

    } 
    else {
   
      done(null, null);
    }
}
);
}));

passport.use('local2',new passportLocal(function(username,password,done){
	console.log(username+password+"haha");

 therapist_controller.login(username,password,function(value) {
    if (value) {
      
    	console.log("logged from server");
      done(null, {
        id: username,
        type: false
      });

    } 
    else {
   console.log("logged not from server");
      done(null, null);
    }
}
);
}));



app.use(express.static(path.join(__dirname, 'client')));

passport.serializeUser(function(user,done){

	done(null,user)

});

passport.deserializeUser(function(user,done){
	done(null,{id:user.id,type:user.type});
});


app.use('/js', express.static(__dirname));
// app.use('/api/',routes_api);
app.use('/', routes);





app.listen(3000,function(){
  console.log("server strated");
})

// catch 404 and forward to error handler

module.exports = app;