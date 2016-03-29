var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
$scope.message="";
	$http({
		  method: 'GET',
		  url: '/api/all_bookings'


		}).then(function successCallback(response) {
		   	
			
			$scope.list=response.data;
			


		  }, function errorCallback(response) {
		    
		  	$scope.message="error Occurred try again";

		  });


}]);