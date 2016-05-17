myapp.controller('session_select_controller', ['$scope' ,'$localStorage','$http', '$window',
  function ($scope,  $localStorage,$http,$window) {

	$scope.select = function (id) {
   
    console.log(id);
    $window.location.href = '/service_type';
	  
};

	
	

}]);