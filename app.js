var express = require('express');
var path = require('path');
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
var controlleri=require('./controllers/server_controller');
//var routes = require('./routes/index');
//var users = require('./routes/users');
var mong_model=require('./models/Mongoose_model');

var app = express();
mongoose.connect('mongodb://localhost:27017/hockey');
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyparser());


app.get('/',function(req,res){
  res.sendfile(__dirname+'/client/views/index.html');
});
app.get('/try',function(req,res){
   res.sendfile(__dirname+'/client/views/chichis.html');
});


app.get('/chichis',function(req,res){
  console.log("opened page");
  res.sendfile(__dirname+'/client/views/chichis.html');
 var conditions = { userid: 'b' }
  , update = { $set: {userid: 'bb' } }
  , options = { };

mong_model.update(conditions, update, options, function(err, numAffected) {
  // numAffected is the number of updated documents
  if(err){
    console.log("error occured");
  }else{
    console.log("DATA CHANGED");
  }
})
})

app.post('/api/chichi',controlleri.create);


app.listen(3000,function(){
  console.log("server strated");
})

// catch 404 and forward to error handler

module.exports = app;