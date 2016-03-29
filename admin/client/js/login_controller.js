var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http','$window', function($scope, $http,$window) {

	

  	
		  $scope.login=function(){
      $scope.message="";
      console.log($scope.username+$scope.password);

      var data={
        username:$scope.username,
        password:$scope.password
      };

      console.log(data);


      $http.post('/api/login', data)
                         .then(
                             function(response){
                               // success callback
                               console.log("logged in successfully");
                                $window.location.href = '/home';

                              
                             
                             }, 
                             function(response){
                               // failure callbac
                               $scope.message="Invalid username or password";
                               console.log("error");
                             }
                          );


        
      };
  
}]);