var myapp=angular.module('myApp', ['ngRoute']);

myapp.service('productService', function() {

  var productList;
  var time_value;
  var date_value;

  var setTime= function(value){
  	time_value=value;
    }

  var setDate= function(value){
  	date_value=value;
  	
  }

  var getTime=function(){
      return time_value;
  };
   var getDate=function(){
      return date_value;
  };

  var addProduct = function(newObj) {
     productList=newObj;
  };

  var getProducts = function(){
      return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts,
    getDate : getDate,
    getTime : getTime,
    setDate : setDate,
    setTime : setTime
  };
  });

myapp.controller('contrl1', ['$scope','productService','$http', function ($scope,productService,$http) {
	
	$scope.check = function () {
	var times=$scope.timeSelect;
	var dates=$scope.dateSelect;

	productService.setTime(times);
	productService.setDate(dates);

	$scope.booking_message="";
	var config= {
	 params: { time: times,
				date:dates
			}
};
$http.get('/era',config).success(function(response) {
    console.log("I got the data I requested");
    $scope.therapist_list = response;
var st=$scope.therapist_list;
  var result = st.map(function(item){ return item.userid; });

   productService.addProduct(result);
  });
}

	 
	

}]);


myapp.controller('contrl2', ['$scope','productService','$http', function ($scope,productService,$http) {
	
    var userid_list;
	  userid_list = productService.getProducts();
    console.log(userid_list);
   

	  $scope.timess=productService.getTime();

		$scope.datess=productService.getDate();
    var newDataArray;

    $http.get('/therapist_data').success(function(response) {
    console.log("I got the data I requested");
    var resdata=response;
 
   
    newDataArray = resdata.filter(function (item) {
    return userid_list.indexOf(item.userid) !== -1;


});

    $scope.therapist_list=newDataArray;
  });
   

		$scope.book=function(id){
		 	console.log(id);

		 	var date= $scope.datess;
		 	 var time=$scope.timess;


		 	var data={therapist_id:id,
		 				dates:date,
		 			  times:time};

		$http.post('/era', data)
	   .then(
	       function(response){
	         // success callback
	         console.log("posted successfully");
	         $scope.booking_message="Booked successfully";
           $scope.therapist_list="";
	       }, 
	       function(response){
	         // failure callback
	       }
	    );

		 
	 	
	 }
		

}]);

myapp.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/try', {
    templateUrl: '../views/view1.html',
    controller: 'contrl1',
  })
  .when('/hello', {
    templateUrl: '../views/view2.html',
    controller: 'contrl2',
    
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});