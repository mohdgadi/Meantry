var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hockey');
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