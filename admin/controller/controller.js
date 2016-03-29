var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/hockey', ['mohd']);

module.exports.register=function(id){

    db.mohd.insert({"userid":id,"datelist":[]},function(){
        console.log("inserted in mohd");
    });
   


};