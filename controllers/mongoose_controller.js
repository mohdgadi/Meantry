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
var mod= require('../models/Mongoose_model');

module.exports.finds = function (req,res) {

	var service_type=req.query.service_type;

	var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connceted");
});



mod.find({[service_type]:true}, function(err, docs) {
    if (!err){ 
        res.json(docs);
        console.log("done");
        
        
    } else {throw err;}
});
 
}