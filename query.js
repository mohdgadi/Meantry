var query="";
query1=query+"{ 'userid' :";
var id="'a'";
var comma=",";
var query2=", 'dates' : { ";
var date="3/10/1030";
var date2="2/10/1030";
var dates2=`"${date2}"`;
var dates=`"${date}"`;
//console.log(dates);
var query3=`: {
			"9/10": {
				"ava": "yes",
				"bookibg_id": "null"
			},
			"10/11": {
				"ava": "yes",
				"bookibg_id": "null"
			},
			"11/12": {
				"ava": "yes",
				"bookibg_id": "null"
			},
			"12/13": {
				"ava": "yes",
				"bookibg_id": "null"
			},
			"13/14": {
				"ava": "yes",
				"bookibg_id": "null"
			}
		},`

query=query+id;
var query_end="}}";
//console.log(query);

























var total=query1+id+query2+dates+query3+dates2+query3+query_end;
console.log(total);

