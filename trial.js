
var arr = [ { userid: 'a' },
  { userid: 'b' },
  { userid: 'c' },
  { userid: 'd' },
  { userid: 'e' } ]

var userid_list = arr.map(function(item){ return item.userid; });
console.log(userid_list);