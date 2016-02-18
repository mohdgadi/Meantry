var array1 = ['c', 'd'];

var arr = [{
  "userid": "a",
  "age": 19,
  "name": "john"
}, {
  "userid": "c",
  "age": 119,
  "name": "joy"
}, {
  "userid": "d",
  "age": 119,
  "name": "jesse"
}];

var newDataArray = arr.filter(function (item) {
    return array1.indexOf(item.userid) !== -1;
});
console.log(newDataArray);