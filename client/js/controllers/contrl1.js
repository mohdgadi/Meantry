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