var myapp=angular.module('myApp', ['ngRoute','ngStorage']);


myapp.controller('contrl4', ['$scope' ,'$localStorage','$http', 
  function ($scope,  $localStorage,$http) {

    if($localStorage.name){
      $scope.name=$localStorage.name;
    }
    if($localStorage.email){
      $scope.email=$localStorage.email;
    }
    if($localStorage.phone){
      $scope.phone=$localStorage.phone;
    }

    $scope.submit=function(name,email,phone){
      $localStorage.name=name;
      $localStorage.email=email;
      $localStorage.phone=phone;
    }

  }]);

myapp.controller('contrl3', ['$scope' ,'$localStorage','$http',
  function ($scope,  $localStorage,$http) {

    if($localStorage.service){
      $scope.service_Select=$localStorage.service;
    }

  $scope.select = function () {
      var service=$scope.service_Select;
      console.log(service);
      $localStorage.service=service;
  };



}]);

myapp.controller('contrl1', ['$scope' ,'$localStorage','$http', 
  function ($scope,  $localStorage,$http) {

	$scope.check = function () {
    var times=$scope.timeSelect;
    var dates=$scope.dateSelect;
	$localStorage.time=$scope.timeSelect;
  $localStorage.date=$scope.dateSelect;
  var config2= {
   params: { time: times,
        date:dates
      }}

	
};

	 
	

}]);


myapp.controller('contrl2', ['$scope' ,'$localStorage','$http',
 function ($scope,  $localStorage,$http) {

  var userid_list;

  var newDataArray;


  var service=$localStorage.service;

    var config= {
   params: { service_type:service
      }
};
  var times=$localStorage.time;

  var dates=$localStorage.date;

  console.log(times+dates);

  var config2= {
   params: { time: times,
        date:dates
      }
};
$http.get('/era',config2).success(function(response) {
    console.log("I got the data I requested");
    var st=response;
    console.log(st);

 userid_list = st.map(function(item){ return item.userid; });

 $http.get('/therapist_data',config).success(function(response) {
    console.log("I got the data I requested");
    var resdata=response;
 
   
    newDataArray = resdata.filter(function (item) {
    return userid_list.indexOf(item.userid) !== -1;


});

    $scope.therapist_list=newDataArray;
  });


   
  });
    console.log(userid_list);

     

     console.log(service);
   

	  $scope.timess=$localStorage.time;

		$scope.datess=$localStorage.date;

    

  

    
   

		$scope.book=function(id,name){
		 	console.log(id);
      $localStorage.therapist_id=id;
      $localStorage.therapist_name=name;
      console.log(name);
}

   
		

}]);


myapp.controller('contrl5', ['$scope' ,'$localStorage','$http', 
  function ($scope,  $localStorage,$http) {

      $scope.name=$localStorage.name;
      $scope.email=$localStorage.email;
      $scope.phone=$localStorage.phone;
      $scope.service=$localStorage.service;
      $scope.therapist_name=$localStorage.therapist_name;
      $scope.date=$localStorage.date;
      $scope.time=$localStorage.time;


      $scope.book=function(){
        
        var id=$localStorage.therapist_id;

        var time=$localStorage.time;
        var date=$localStorage.date;
    

  var data={therapist_id:id,
            dates:date,
            times:time};

 $http.post('/era', data)
     .then(
         function(response){
           // success callback
           console.log("posted successfully");
           $scope.summary="";
           $scope.booking_message="Booked successfully";
         
         }, 
         function(response){
           // failure callbac
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
    
  })
  .when('/service_type', {
    templateUrl: '../views/view3.html',
    controller: 'contrl3',
    
  })
  .when('/user_info', {
    templateUrl: '../views/view4.html',
    controller: 'contrl4',
    
  }).when('/checkout', {
    templateUrl: '../views/view5.html',
    controller: 'contrl5',
    
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});