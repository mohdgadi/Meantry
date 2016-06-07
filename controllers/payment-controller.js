var SALT="eCwWELxi";
var sha512 = require('js-sha512');



module.exports.post = function (req,res) {
var form_error=0;
var data=req.body;
var hash="";
var posted=[];

var value;
var url='';



for (var key in data) {
    if (!data.hasOwnProperty(key)) {
        continue;
    }  
   	posted[key]=data[key];
}




var hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";

if(posted.hash=="") {
	if(
          posted.key=="" || posted.txnid==""|| posted.amount==""|| posted.firstname==""|| posted.email=="" || posted.phone=="" || posted.productinfo=="" || posted.surl=="" || posted.furl==""
		  
  ) {
     form_error = 1;
	console.log("somethings missing");
  }else{

  	console.log("everuthings thire");
  	var hashVarsSeq = hashSequence.split('|');
  	var hash_string = '';
  	

  	
	hashVarsSeq.forEach(function(entry) {
	    if(posted[entry]){
	    	
	    	hash_string=hash_string+posted[entry];
	    }else{
	    	
	    	hash_string=hash_string+"";
	    }
	    hash_string+='|';

	});

	hash_string+=SALT;
	
	

	hash=sha512(hash_string);
	 url="https://test.payu.in/_payment";

  	

    


  	
  }
}else{
	
	hash=req.body.hash;
	 url="https://test.payu.in/_payment";
}
console.log(hash+"mo");

res.render('../client/views/payment',{
		MERCHANT_KEY:posted.key,url:url,form_error:form_error,hash:hash,txnid:posted.txnid,
		amount:posted.amount,name:posted.firstname,email:posted.email,phone:posted.phone,
		productinfo:posted.productinfo,surl:posted.surl,furl:posted.furl,hashs:hash,ers:"post"
	});







};