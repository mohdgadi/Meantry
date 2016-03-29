var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {

	
  
  $scope.search_therapist=function(){
  	var data=$scope.search;
  	console.log(data);

  	var config= {
   params: { data:data
      }
};

  	
		$http.get('/api/get_therapist_list',config).success(function(response) {

			console.log(response);
			$scope.list=response;
			

		});
  };
}]);