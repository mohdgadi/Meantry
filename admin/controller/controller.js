var mongojs = require('mongojs');
var db = mongojs('mongodb://mohd:techmatters@ds013192.mlab.com:13192/maalish', ['mohd'], { ssl : true });

module.exports.register=function(id){

    db.mohd.insert({"userid":id,"datelist":[]},function(){
        console.log("inserted in mohd");
    });
   


};