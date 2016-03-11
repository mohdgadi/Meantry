var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/hockey', ['mohd']);

module.exports.create = function (req, res) {
var dates = req.query.date;
var times = req.query.time;
console.log(dates+times);


var result="yes";

var query=`dates.${dates}.${times}.ava`;

 db.mohd.find({[query]:result},{userid:1,_id:0},function (err, docs) {
    if(err){
    	console.log("error");
    }else{
    	console.log("results found");
    	res.json(docs);
        console.log(docs);
    	
    }
});
}
module.exports.book=function(req,res){
	console.log("got booking request");
	var thid=req.body.therapist_id;
	var dates=req.body.dates;
	var times=req.body.times;
    console.log(dates);

	var query=`dates.${dates}.${times}.ava`;


	db.mohd.update( { userid: thid },
   { $set: { [query]: "no" } }, function () {
    console.log("updated");
});


    
	//console.log(req.param('userid'));
}

module.exports.register=function(id){

    db.mohd.insert({"userid":id,"datelist":[]},function(){
        console.log("inserted in mohd");
    });
   


}

