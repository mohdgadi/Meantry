var express = require('express');
var app = express();
var mongoose = require('mongoose');


var mongojs = require('mongojs');
var db = mongojs('mongodb://mohd:techmatters@ds013192.mlab.com:13192/maalish', ['mohd']);

db.on('error', function (err) {
    console.log('database error', err);
});

db.on('connect', function () {
    console.log('database connected');
});

db.mohd.find({}, function (err, docs) { 

	if(err){
		console.log("error");
	}else{
		console.log(docs+"found");
	}

 });

app.set('view engine','ejs');



app.get('/',function(req,res){
  console.log("hi");
});



app.listen(9000,function(){
  console.log("server strated");
});

// catch 404 and forward to error handler

module.exports = app;