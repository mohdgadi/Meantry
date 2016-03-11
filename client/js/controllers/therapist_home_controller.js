myapp.controller('therapist_home_controller', ['$scope' ,'$localStorage','$http', '$window',
  function ($scope,  $localStorage,$http,$window) {

		  	$http({
		  method: 'GET',
		  url: '/api/therapist-home'
		}).then(function successCallback(response) {
		   	
			$scope.name=response.data.id;


		  }, function errorCallback(response) {
		    
		  	$window.location.href = '/therapist-login';

		  });




 }]);