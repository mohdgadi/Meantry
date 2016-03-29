var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http','$window', function($scope, $http,$window) {

	
  	
		$http({
      method: 'GET',
      url: '/api/get-pending-therapist'


    }).then(function successCallback(response) {
        
      
      $scope.list=response.data;
      


      }, function errorCallback(response) {
        
        $scope.message="error Occurred try again";

      });

    $scope.approve=function(id){

     var data={
      id:id
     };

     $http.post('/api/approve', data)
                         .then(
                             function(response){
                               $window.location.reload();
                             
                             }, 
                             function(response){
                               $scope.message="Error Occurred";
                             }
                          );


    };

  
}]);